# -*- coding: utf-8 -*-
# @Author : 艾登Aiden
# @Email : aidenlen@163.com
# @Date : 2022-01-19

import logging
import os
import time
from selenium.common.exceptions import TimeoutException
from selenium.webdriver import Chrome
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.wait import WebDriverWait

STEALTH_JS_PATH = os.path.abspath(os.path.join(os.path.dirname(__file__), "stealth.min.js"))

logger = logging.getLogger(__name__)

class BrowserEnv(object):
    """所有浏览器环境的基类, 简称 JEBE
    作用:
    用于高度模拟 真实浏览器环境 执行js脚本
    或对付 SecurityWorker, jsmvp 类型加固
    """
    def __init__(self, headless=False, incognito=False, images_disabled=False, 
                    stealth=False, open_page=False, open_url=None, proxy=None, 
                    wait_for=None, timeout=20, time_delay=0):
        """
        :param headless: 无头模式
        :param incognito: 无痕模式
        :param images_disabled: 图像禁止
        :param stealth: 伪装模式, 有效绕过 webdriver 等检测
        :param open_page: 是否打开一个页面, 默认不打开(打开后运行环境更全, 但消耗资源更多)
        :param open_url: 打开目标网站的 url
        :param proxy: Browser 所使用的代理
        :param wait_for: 等待目标网站, 页面某元素加载完成
        :param timeout: 若在指定时间超时, 则报错
        :param time_delay: 根据网速, 给多一点延迟时间让页面加载, 避免加载失败
        """
        options = Options()
        # options.add_argument('--host-resolver-rules=map www.google-analytics.com 127.0.0.1')

        _headless_enabled = headless
        if _headless_enabled:
            options.add_argument("--headless")

        _incognito_enabled = incognito
        if _incognito_enabled:
            options.add_argument("--incognito")

        _images_disabled = images_disabled
        if _images_disabled:
            options.add_argument('--blink-settings=imagesEnabled=false')

        _proxy = proxy
        if _proxy:
            options.add_argument('--proxy-server=' + _proxy)

        # 禁止日志输出
        options.add_argument('–disable-gpu')
        options.add_argument('log-level=3')
        options.add_experimental_option('excludeSwitches', ['enable-logging'])
        self.driver = Chrome(options=options)

        _stealth = stealth
        if _stealth:
            self.stealth()

        _open_page = open_page
        if _open_page:
            # 默认打开 'http://httpbin.org/ip'
            if not open_url:
                open_url = 'http://httpbin.org/ip'
            self.driver.get(open_url)

            _wait_for = wait_for
            if _wait_for:
                _timeout = timeout
                try:
                    print('Waiting for ', _wait_for)
                    WebDriverWait(self.driver, _timeout).until(
                        EC.presence_of_element_located((By.XPATH, _wait_for))
                    )
                except TimeoutException:
                    print('TimeoutException waiting for ', _wait_for, ', open_url: ', open_url)
                    self.driver.close()

            _time_delay = time_delay
            if _time_delay:
                print(f"BrowserEnv first loading... {_time_delay}s")
                time.sleep(_time_delay)

    def __del__(self):
        self.driver.close()

    def stealth(self):
        with open(STEALTH_JS_PATH) as file:
            stealth_min_js = file.read()
        self.driver.execute_cdp_cmd("Page.addScriptToEvaluateOnNewDocument", {
                "source": stealth_min_js
            })


    def execute_text(self, js_func:str, js_exec:str):
        """
        执行 js 表达式
        :param js_func: js 逻辑方法
        :param js_exec: js 执行入口
        :return: 返回执行结果 / 空字符串
        """
        self.driver.execute_script(js_func)
        return self.driver.execute_async_script(js_exec) or ''

    def execute_file(self, js_path:str, js_arg:str, js_exec:str):
        """
        执行 js 文件
        :param js_path: js 文件路径
        :param js_arg: js 参数
        :param js_exec: js 执行入口
        :return: 返回执行结果 / 空字符串
        """
        try:
            with open(js_path, 'r', encoding='utf-8') as f:
                js_func = f.read()
            js_func = ''.join([js_func, js_arg])
        except Exception as e:
            print(e)
            return ''

        self.driver.execute_script(js_func)
        return self.driver.execute_async_script(js_exec) or ''

    def execute_text_no_return(self, js_func:str):
        """只执行, 不返回结果"""
        self.driver.execute_script(js_func)


    def execute_file_no_return(self, js_path:str):
        """只执行, 不返回结果"""
        try:
            with open(js_path, 'r', encoding='utf-8') as f:
                js = f.read()
        except Exception as e:
            print(e)
            return
        self.driver.execute_script(js)


    def process_message(self, my_message:dict):
        pass

    def get_result(self, my_message:dict, js_path=None):
        pass

    # def process_message(self, my_message:dict):
    #     """处理消息, 转为 执行参数js_arg 和 执行函数js_exec"""
    #     my_message = json.dumps(my_message)
    #     js_arg = 'setTimeout(function() { var my_message = ' + my_message + '; return getData(my_message);}, 0);'

    #     # 根据运算速度， 延迟执行时间 400 毫秒
    #     js_exec = """
    #     const callback = arguments[arguments.length - 1]
    #     setTimeout(function() {
    #         callback(window._data)
    #     }, 400)
    #     """
    #     return js_arg, js_exec

    # def get_result(self, my_message:dict, js_path=None):
    #     # js_path = r'D:/Code/Spider_Armies/Tracking/800bestex/BaiduRotateCaptcha/BaishiSecurityWorker.js'
    #     js_arg, js_exec = self.process_message(my_message)
    #     result = selenium_execute_js.execute_file(js_path, js_arg, js_exec)
    #     if not result:
    #         raise Exception('parse_result')
    #     result = json.loads(result)
    #     new_result = result.get('data') or ''
    #     return new_result

    def get_result(self):
        script = '''
        setTimeout(() => {
        window?.grecaptcha.ready(() => {
        window.grecaptcha.execute('6Lch-6AdAAAAANXkZSuhR-QpRLnmcEgJEzUmj1Wu', { action: 'tracking' }).then((token) => {
            window._adien = token
            })
        })
        }, 0);
        const callback = arguments[arguments.length - 1]
            setTimeout(function() {
                callback(window._adien)
            }, 1000)
        '''
        return self.driver.execute_async_script(script) 

if __name__ == "__main__":
    st = time.time()

    # 1.启动本地服务
    # 2.打开浏览器并注入 js

    # open_url = 'https://bot.sannysoft.com'
    # open_url = 'https://www.baidu.com'
    # open_url = 'http://httpbin.org/ip'

    open_url = 'https://www.baidu.com'
    # proxy = 'http://127.0.0.1:1080'
    wait_for = '//div'
    be = BrowserEnv(headless=False, incognito=True, images_disabled=True, stealth=False, 
                                open_page=True, open_url=open_url, timeout=20, wait_for=wait_for, time_delay=5)
    # result = be.get_result()
    # print(result)

    print("耗时: ", time.time() - st)
    input()
