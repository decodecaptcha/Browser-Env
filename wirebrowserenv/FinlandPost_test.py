# -*- coding: utf-8 -*-
# @Author : 艾登Aiden
# @Email : aiden2048@qq.com
# @Date : 2022-04-01
import fileinput
import logging
import os
import time
from seleniumwire.utils import decode

import re
from selenium.common.exceptions import TimeoutException
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.wait import WebDriverWait

import sys
sys.path.append(os.path.abspath(os.path.dirname(__file__)))

from seleniumwire import webdriver
STEALTH_JS_PATH = os.path.abspath(os.path.join(os.path.dirname(__file__), "stealth.min.js"))


class WireBrowserEnv(object):
    """支持拦截网络请求 的浏览器环境
    作用:
        捕获的 HTTP 和 HTTPS 请求
        拦截请求和响应
        即时修改标题、参数、正文内容
    """
    def __init__(self, url=None, 
                    intercept_enabled=False, 
                    intercept_url=None, 
                    intercept_mode='modify',
                    intercept_params={},
                    headless=False, 
                    images_enabled = False, 
                    incognito=False, 
                    stealth=False, 
                    proxy=None, 
                    wait_for=None,
                    time_delay=0,
                    timeout=20
        ):

        """
        :param url: 打开目标网站的 url
        :param intercept_enabled: xxx
        :param intercept_url: 拦截的 url
        :param intercept_mode: 拦截模式
        :param intercept_params: 拦截参数
            intercept_params = {
                        'modify_insert_text': None,
                        'modify_split_word': None,
                        'modify_starts_word': None,

                        'mock_status_code':200, 
                        'mock_headers':{}, 
                        'mock_body':None,
                    }
        :param headless: 无头模式
        :param images_enabled: 图像开关
        :param incognito: 无痕模式
        :param stealth: 伪装模式, 有效绕过 webdriver 等检测

        :param proxy: Browser 所使用的代理, 例如: http://127.0.0.1:1080
        :param wait_for: 等待目标网站, 页面某元素加载完成
        :param time_delay: 根据网速, 给多一点延迟时间让页面加载, 避免加载失败
        :param timeout: 若在指定时间超时, 则报错
        """
        print(self.__class__.__name__, ' is loading...')
        options = webdriver.ChromeOptions()

        _headless_enabled = headless
        if _headless_enabled:
            options.add_argument("--headless")

        _incognito_enabled = incognito
        if _incognito_enabled:
            options.add_argument("--incognito")

        _images_enabled = images_enabled
        if not _images_enabled:
            options.add_argument('--blink-settings=imagesEnabled=false')

        _proxy = proxy
        if _proxy:
            options.add_argument('--proxy-server=' + _proxy)

        # 禁止日志输出
        options.add_argument('–disable-gpu')
        options.add_argument('log-level=3')
        options.add_experimental_option('excludeSwitches', ['enable-logging'])

        self.driver = webdriver.Chrome(
            options=options,
            seleniumwire_options={}
        )

        # 拦截网络请求
        self._intercept_enabled = intercept_enabled
        self._intercept_mode = intercept_mode
        if self._intercept_enabled:

            # 拦截模式
            if self._intercept_mode == 'modify':
                self.intercept_url = intercept_url
                # 关键位置查找并插入文本
                self.modify_response_body(
                    insert_text = intercept_params['modify_insert_text'], 
                    split_word = intercept_params['modify_split_word'], 
                    starts_word = intercept_params['modify_starts_word']
                )

            elif intercept_mode == 'mock':
                self.intercept_url = intercept_url
                # 模拟响应
                self.mock_a_response(
                    intercept_params['mock_status_code'], 
                    intercept_params['mock_headers'], 
                    intercept_params['mock_body']
                )
            else:
                raise Exception('intercept_mode not mode name')

        _stealth = stealth
        if _stealth:
            self.stealth()

        self.url = url
        self.wait_for = wait_for
        self.timeout = timeout
        if self.url:
            self.driver.get(self.url)
            self.wait_for_page(self.url, self.wait_for, self.timeout)

        _time_delay = time_delay
        print(f"{self.__class__.__name__} first loading... {_time_delay}s")
        if _time_delay:
            time.sleep(_time_delay)

    def __del__(self):
        self.driver.close()

    def mock_a_response(self, status_code=200, headers={}, body=None):
        def interceptor(request):
            if request.url.startswith(self.intercept_url):
                request.create_response(
                    status_code=status_code,
                    headers=headers, 
                    body=body
                )
        self.driver.request_interceptor = interceptor

    def modify_response_body(self, insert_text, split_word, starts_word):
        def interceptor(request, response):
            if request.url.startswith(self.intercept_url):
                from seleniumwire.thirdparty.mitmproxy.net.http import encoding as decoder
                # print(request.url)
                # 解码 gzip 得到 bytes 类型
                body_bytes = decoder.decode(response.body, response.headers.get('Content-Encoding', 'identity'))
                # print(body_bytes)
        
                # 解码 bytes -> str
                body_str = body_bytes.decode('utf-8')
                # print(body_str)

                # # 关键位置查找并插入文本
                modify_body = self.modify_text(body_str, insert_text, split_word, starts_word)
                # print(modify_body)

                # 再次编码 str -> bytes -> gzip
                
                # modify_body = modify_body.encode()
                # print(modify_body)
                response.body = decoder.encode(modify_body.encode(), response.headers.get('Content-Encoding', 'identity'))

        self.driver.response_interceptor = interceptor

    def modify_text(self, text, insert_text, split_word, starts_word):

        text_list = text.split(split_word)

        for index, item in enumerate(text_list):
            if item.startswith(starts_word):
                text_list[index] = insert_text + text_list[index]
                break

        modified_text = split_word.join(text_list)
        return modified_text

    def stealth(self):
        with open(STEALTH_JS_PATH) as file:
            stealth_min_js = file.read()
        self.driver.execute_cdp_cmd("Page.addScriptToEvaluateOnNewDocument", {
                "source": stealth_min_js
            })

    def wait_for_page(self, url, wait_for, timeout):
        _url = url
        _wait_for = wait_for
        _timeout = timeout
        if _wait_for:
            try:
                print('Waiting for ', _wait_for)
                WebDriverWait(self.driver, _timeout).until(
                    EC.presence_of_element_located((By.XPATH, _wait_for))
                )
            except TimeoutException:
                print('TimeoutException waiting for ', _wait_for, ', url: ', _url)
                self.driver.close()

    def execute_script(self, script):
        return self.driver.execute_script(script)

    def refresh_page(self):
        """刷新页面"""
        self.driver.get(self.url)
        self.wait_for_page(self.url, self.wait_for, self.timeout)


if __name__ == "__main__":
    # var n,r,i,a,s,c,u;
    url = 'https://www.posti.fi/fi/seuranta'
    interceptor_url = 'https://www.posti.fi/featureEmbed'
    insert_text = 'window.__tokens={"id_token": t.id_token, "role_token": t.role_tokens[0].token};'
    split_word = 'case 0:'
    starts_word = 'return n=t.id_token'


    # url = 'https://httpbin.org/ip'
    # interceptor_url = 'https://httpbin.org/ip'
    # insert_text = '这是已经替换的页面'
    # split_word = '.'
    # starts_word = '135'

    intercept_mode = 'modify'
    intercept_params={
        'modify_insert_text': insert_text,
        'modify_split_word': split_word,
        'modify_starts_word': starts_word,
    }

    wbe = WireBrowserEnv(
        url=url, 
        intercept_enabled=True, 
        intercept_url=interceptor_url, 
        intercept_mode='modify',
        intercept_params=intercept_params,

        headless=False, 
        images_enabled = True, 
        incognito=False, 
        stealth=False, 
        proxy=None, 
        time_delay=3, 
        timeout=20, 
    )
    script = 'return window.__tokens'
    # script = 'return window.document.body.innerHTML'
    result = wbe.execute_script(script)
    print(result if result else 'None')