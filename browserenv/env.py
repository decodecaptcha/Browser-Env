# -*- coding: utf-8 -*-
import logging
import os
import time
from selenium.common.exceptions import TimeoutException
from selenium.webdriver import Chrome
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.wait import WebDriverWait
# import seleniumwire.undetected_chromedriver.v2 as uc

logger = logging.getLogger(__name__)

STEALTH_JS_PATH = os.path.abspath(os.path.join(os.path.dirname(__file__), "stealth.min.js"))


class BrowserEnv(object):
    """所有浏览器环境的基类
    作用:
        用于高度模拟 真实浏览器环境 执行js脚本
        或对付 SecurityWorker, jsmvp 类型加固

    :param url: 打开目标网站的 url
    :param headless: 无头模式.
    :param images_enabled: 图像开关.
    :param incognito: 无痕模式.
    :param stealth: stealth 伪装模式, 有效绕过 webdriver 等检测.
    :param proxy: Browser 所使用的代理, 例如: http://127.0.0.1:8080.
    :param wait_for: 等待目标网站, 页面某元素加载完成.
    :param delay_time: 根据网速, 给多一点延迟时间让页面加载, 避免加载失败.
    :param timeout: 若在指定时间超时, 则报错.
    """
    def __init__(self, url=None, 
                    headless=False, 
                    images_enabled=False, 
                    incognito=False, 
                    stealth=False, 
                    proxy=None, 
                    wait_for=None, 
                    delay_time=0, 
                    timeout=20,
                    *args, **kwargs):

        print(self.__class__.__name__, ' is loading...')
        self.options = self.set_options()

        _headless_enabled = headless
        if _headless_enabled:
            self.options.add_argument("--headless")

        _incognito_enabled = incognito
        if _incognito_enabled:
            self.options.add_argument("--incognito")

        _images_enabled = images_enabled
        if not _images_enabled:
            self.options.add_argument('--blink-settings=imagesEnabled=false')

        _proxy = proxy
        if _proxy:
            self.options.add_argument('--proxy-server=' + _proxy)

        self.driver = self.set_driver()

        _stealth = stealth
        if _stealth:
            self.stealth_enabled()

        self.url = url
        self.wait_for = wait_for
        self.timeout = timeout
        if self.url:
            self.driver.get(self.url)
            self.wait_for_page(self.url, self.wait_for, self.timeout)

        _delay_time = delay_time
        print(f"{self.__class__.__name__} delay time is {_delay_time}s")
        if _delay_time:
            time.sleep(_delay_time)

    def set_options(self):
        return Options()

    def set_driver(self):
        # 日志等级
        self.options.add_argument('–disable-gpu')
        self.options.add_argument('log-level=3')
        self.options.add_experimental_option('excludeSwitches', ['enable-logging'])

        return Chrome(options=self.options)

    def __del__(self):
        self.driver.close()

    def stealth_enabled(self):
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

    # def execute_text(self, js_func:str, js_exec:str):
    #     """
    #     执行 js 表达式
    #     :param js_func: js 逻辑方法
    #     :param js_exec: js 执行入口
    #     :return: 返回执行结果 / 空字符串
    #     """
    #     self.driver.execute_script(js_func)
    #     return self.driver.execute_async_script(js_exec) or ''

    # def execute_file(self, js_path:str, js_arg:str, js_exec:str):
    #     """
    #     执行 js 文件
    #     :param js_path: js 文件路径
    #     :param js_arg: js 参数
    #     :param js_exec: js 执行入口
    #     :return: 返回执行结果 / 空字符串
    #     """
    #     try:
    #         with open(js_path, 'r', encoding='utf-8') as f:
    #             js_func = f.read()
    #         js_func = ''.join([js_func, js_arg])
    #     except Exception as e:
    #         print(e)
    #         return ''
    #     self.driver.execute_script(js_func)
    #     return self.driver.execute_async_script(js_exec) or ''

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


# if __name__ == "__main__":
#     st = time.time()

#     url = 'http://httpbin.org/ip'
#     script = 'return window.document.body.innerHTML'

#     # proxy = 'http://127.0.0.1:1080'
#     be = BrowserEnv(url=url, 
#                     headless=False, 
#                     images_enabled=True, 
#                     incognito=False, 
#                     stealth=True, 
#                     proxy=None, 
#                     wait_for=None,
#                     delay_time=0,
#                     timeout=20)
#     result = be.execute_script(script)
#     print(result if result else 'None')

#     print("启动耗时: ", time.time() - st)

# TODO:
# 测试url 'http://httpbin.org/ip'
# BrowserEnv headless=True, images_enabled=False, stealth=False 启动耗时:  1.631256341934204
# BrowserEnv headless=False, images_enabled=False, stealth=False 启动耗时:  1.6466856002807617
# BrowserEnv headless=False, images_enabled=True, stealth=True 启动耗时:  1.7154896259307861