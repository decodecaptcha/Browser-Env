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
    """所有浏览器环境的基类
    作用:
        用于高度模拟 真实浏览器环境 执行js脚本
        或对付 SecurityWorker, jsmvp 类型加固

    :param url: 打开目标网站的 url
    :param headless: 无头模式
    :param images_enabled: 图像开关
    :param incognito: 无痕模式
    :param stealth: 伪装模式, 有效绕过 webdriver 等检测
    :param proxy: Browser 所使用的代理, 例如: http://127.0.0.1:1080
    :param wait_for: 等待目标网站, 页面某元素加载完成
    :param time_delay: 根据网速, 给多一点延迟时间让页面加载, 避免加载失败
    :param timeout: 若在指定时间超时, 则报错

    """
    def __init__(self, url=None, 
                    headless=False, 
                    images_enabled = False, 
                    incognito=False, 
                    stealth=False, 
                    proxy=None, 
                    wait_for=None,
                    time_delay=0,
                    timeout=20
        ):

        print(self.__class__.__name__, ' is loading...')
        options = Options()

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
        self.driver = Chrome(options=options)

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

    def refresh_page(self):
        """刷新页面"""
        self.driver.get(self.url)
        self.wait_for_page(self.url, self.wait_for, self.timeout)

    def execute_script(self, script):
        return self.driver.execute_script(script)

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

    # def execute_text_no_return(self, js_func:str):
    #     """只执行, 不返回结果"""
    #     self.driver.execute_script(js_func)


    # def execute_file_no_return(self, js_path:str):
    #     """只执行, 不返回结果"""
    #     try:
    #         with open(js_path, 'r', encoding='utf-8') as f:
    #             js = f.read()
    #     except Exception as e:
    #         print(e)
    #         return
    #     self.driver.execute_script(js)


    # def process_message(self):
    #     pass

    # def get_result(self):
    #     pass

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

    def callback_token(self):
        """异步调用，获取token"""
        script = """
        const callback = arguments[arguments.length - 1]
        setTimeout(function() {
            callback(window._token)
        }, 1000)
        """
        return self.driver.execute_async_script(script)

    # def get_result(self):
    #     script = '''
    #     setTimeout(() => {
    #     window?.grecaptcha.ready(() => {
    #     window.grecaptcha.execute('6Lch-6AdAAAAANXkZSuhR-QpRLnmcEgJEzUmj1Wu', { action: 'tracking' }).then((token) => {
    #         window._adien = token
    #         })
    #     })
    #     }, 0);
    #     const callback = arguments[arguments.length - 1]
    #         setTimeout(function() {
    #             callback(window._adien)
    #         }, 1000)
    #     '''
    #     return self.driver.execute_async_script(script) 


if __name__ == "__main__":
    st = time.time()

    # open_url = 'https://bot.sannysoft.com'
    # open_url = 'https://www.baidu.com'
    # open_url = 'http://httpbin.org/ip'

    open_url = 'https://www.baidu.com'
    # proxy = 'http://127.0.0.1:1080'
    wait_for = '//div'
    be = BrowserEnv(url=open_url, 
                    headless=False, 
                    images_enabled = False, 
                    incognito=False, 
                    stealth=False, 
                    proxy=None, 
                    wait_for=None,
                    time_delay=0,
                    timeout=20)
    # result = be.get_result()
    # print(result)

    print("耗时: ", time.time() - st)
    input()
