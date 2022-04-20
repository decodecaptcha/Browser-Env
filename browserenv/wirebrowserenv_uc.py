# -*- coding: utf-8 -*-
import logging
import os
import sys
import time

import seleniumwire.undetected_chromedriver.v2 as uc

# TODO 
# 报错: SyntaxError: future feature annotations is not defined
# 若 Pyhton < 3.7 则需关闭类型延迟求值
# 解决方法: 注释掉 from __future__ import annotations

sys.path.append(os.path.abspath(os.path.dirname(__file__)))
from wirebrowserenv import WireBrowserEnv

logger = logging.getLogger(__name__)

class WireBrowserEnvUC(WireBrowserEnv):
    """
    对 undetected-chromedriver 的集成,
    优化的 Selenium Chromedriver 补丁,
    不会触发 Distill Network / Imperva / DataDome / Botprotect.io 等反僵尸服务,
    自动下载驱动程序二进制文件并对其进行修补。

    :param url: 打开目标网站的 url
    :param intercept_enabled: 拦截开关
    :param intercept_url: 拦截的 url
    :param intercept_mode: 拦截模式 modify / mock
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
                    # intercept_url=None, 
                    # intercept_mode='modify',
                    # intercept_params={},
                    *args, **kwargs):

        self.intercept_enabled = intercept_enabled
        # self.intercept_url = intercept_url
        # self.intercept_mode = intercept_mode
        # self.intercept_params = intercept_params

        super().__init__(url=url, 
                            intercept_enabled=self.intercept_enabled,
                            # intercept_url=intercept_url,
                            # intercept_mode=intercept_mode,
                            # intercept_params=intercept_params,
                            *args, **kwargs)

    def __del__(self):
        # undetected 模式会自动关闭 driver
        pass

    def set_options(self):
        return uc.ChromeOptions()

    def set_driver(self):
        self.driver = uc.Chrome(
            options=self.options,
            version_main=92, # 自己浏览器版本
            log_level=3,
            delay=0,
            seleniumwire_options={}
        )

        # 拦截网络开关
        _intercept_enabled = self.intercept_enabled
        if _intercept_enabled:
            self.intercept()
        return self.driver


if __name__ == "__main__":
    st = time.time()

    # url = 'https://www.posti.fi/fi/seuranta'
    # interceptor_url = 'https://www.posti.fi/featureEmbed'
    # # wait_for = '//div[@aria-live="polite"]'
    # wait_for = ''
    # old_text = 'case 0:return n=t.id_token'
    # new_text = 'case 0:window.__tokens={"id_token": t.id_token, "role_token": t.role_tokens[0].token};return n=t.id_token'
    # script = 'return window.__tokens'
    # delay_time=3

    url = 'https://httpbin.org/ip'
    interceptor_url = 'https://httpbin.org/ip'
    wait_for = ''
    old_text = 'origin'
    new_text = '这是已经替换的页面'
    script = 'return window.document.body.innerHTML'
    delay_time=0


    intercept_mode = 'modify'
    intercept_params={
        'modify_old_text': old_text,
        'modify_new_text': new_text,
    }
    wbe = WireBrowserEnvUC(
        url=url, 
        intercept_enabled=True, 
        intercept_url=interceptor_url, 
        intercept_mode='modify',
        intercept_params=intercept_params,
        headless=True, 
        images_enabled=False, 
        incognito=True, 
        stealth=False, 
        proxy=None, 
        wait_for=wait_for,
        delay_time=delay_time, 
        timeout=20
    )
    result = wbe.execute_script(script)
    print(result if result else 'None')

    print("启动耗时: ", time.time() - st)

# TODO:
# 测试url 'https://httpbin.org/ip'
# WireBrowserEnvUC, intercept_enabled=True, headless=False 启动耗时: 启动耗时:  22.395836353302002
# WireBrowserEnvUC, intercept_enabled=True, headless=True , 启动耗时: 启动耗时:  20.88762640953064
# WireBrowserEnvUC, intercept_enabled=False, headless=True , 启动耗时: 启动耗时:  20.46052646636963
