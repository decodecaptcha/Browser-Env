# -*- coding: utf-8 -*-
import logging
import os
import sys
import time
from seleniumwire import webdriver
from seleniumwire.thirdparty.mitmproxy.net.http import encoding as decoder

sys.path.append(os.path.abspath(os.path.dirname(__file__)))
from env import BrowserEnv

logger = logging.getLogger(__name__)

class WireBrowserEnv(BrowserEnv):
    """
    支持 拦截网络请求 的浏览器环境

    作用:
        捕获的 HTTP 和 HTTPS 请求
        拦截请求和响应
        即时修改标题、参数、正文内容
    
    :param url: 打开目标网站的 url
    :param intercept_enabled: 拦截开关
    :param intercept_url: 拦截的 url
    :param intercept_mode: 拦截模式
    :param intercept_params: 拦截参数
        intercept_params = {
                    'modify_old_text': None,
                    'modify_new_text': None,

                    'mock_status_code':200, 
                    'mock_headers':{}, 
                    'mock_body':None,
                }
    """
    def __init__(self, url=None, 
                    intercept_enabled=False, 
                    intercept_url=None, 
                    intercept_mode='modify',
                    intercept_params={},
                    *args, **kwargs):

        self.intercept_enabled = intercept_enabled
        self.intercept_url = intercept_url
        self.intercept_mode = intercept_mode
        self.intercept_params = intercept_params

        super().__init__(url=url, *args, **kwargs)

    # def __del__(self):
    #     self.driver.close()

    def set_options(self):
        return webdriver.ChromeOptions()

    def set_driver(self):
        # 日志等级
        self.options.add_argument('–disable-gpu')
        self.options.add_argument('log-level=3')
        self.options.add_experimental_option('excludeSwitches', ['enable-logging'])

        self.driver = webdriver.Chrome(options=self.options, seleniumwire_options={})

        # 拦截网络开关
        _intercept_enabled = self.intercept_enabled
        if _intercept_enabled:
            self.intercept()
        return self.driver

    def intercept(self):
        '''拦截网络方法'''
        # 修改模式
        _intercept_mode = self.intercept_mode
        _intercept_params = self.intercept_params
        if _intercept_mode == 'modify':
            # 关键位置查找并插入文本
            self.modify_response_text(
                old_text=_intercept_params['modify_old_text'], 
                new_text=_intercept_params['modify_new_text'], 
            )

        elif _intercept_mode == 'mock':
            # 模拟响应
            self.mock_a_response(
                _intercept_params['mock_status_code'], 
                _intercept_params['mock_headers'], 
                _intercept_params['mock_body']
            )
        else:
            raise Exception('intercept_mode not mode name')

    def mock_a_response(self, status_code=200, headers={}, body=None):
        def interceptor(request):
            if request.url.startswith(self.intercept_url):
                request.create_response(
                    status_code=status_code,
                    headers=headers, 
                    body=body
                )
        self.driver.request_interceptor = interceptor

    def modify_response_text(self, old_text, new_text):
        def interceptor(request, response):
            if request.url.startswith(self.intercept_url):
                # 解码 gzip 得到 bytes 类型
                body_bytes = decoder.decode(response.body, response.headers.get('Content-Encoding', 'identity'))

                # 解码 bytes -> str
                body_text = body_bytes.decode('utf-8')

                # # 关键位置查找并插入文本
                modified_text = self.modify_text(body_text, old_text, new_text)

                # 再次编码 str -> bytes -> gzip
                response.body = decoder.encode(modified_text.encode(), response.headers.get('Content-Encoding', 'identity'))

        self.driver.response_interceptor = interceptor
        return self.driver

    def modify_text(self, text, old_text, new_text):
        modified_text = text.replace(old_text, new_text)
        return modified_text



# if __name__ == "__main__":
#     # url = 'https://www.posti.fi/fi/seuranta'
#     # interceptor_url = 'https://www.posti.fi/featureEmbed'
#     # # wait_for = '//div[@aria-live="polite"]'
#     # wait_for = ''
#     # old_text = 'case 0:return n=t.id_token'
#     # new_text = 'case 0:window.__tokens={"id_token": t.id_token, "role_token": t.role_tokens[0].token};return n=t.id_token'
#     # script = 'return window.__tokens'

#     url = 'https://httpbin.org/ip'
#     interceptor_url = 'https://httpbin.org/ip'
#     wait_for = ''
#     old_text = 'origin'
#     new_text = '这是已经替换的页面'
#     script = 'return window.document.body.innerHTML'

#     intercept_mode = 'modify'
#     intercept_params={
#         'modify_old_text': old_text,
#         'modify_new_text': new_text,
#     }

#     wbe = WireBrowserEnv(
#         url=url, 
#         intercept_enabled=True, 
#         intercept_url=interceptor_url, 
#         intercept_mode='modify',
#         intercept_params=intercept_params,

#         headless=False, 
#         images_enabled=True, 
#         incognito=False, 
#         stealth=False, 
#         proxy=None, 
#         wait_for=wait_for,
#         delay_time=0, 
#         timeout=20, 
#     )
#     result = wbe.execute_script(script)
#     print(result if result else 'None')