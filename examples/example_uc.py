# -*- coding: utf-8 -*-
import logging
import os
import sys
import time

import seleniumwire.undetected_chromedriver.v2 as uc


class UC():

    def __init__(self):
        # url = 'https://httpbin.org/ip'
        url = 'https://bot.sannysoft.com/'

        self.options = uc.ChromeOptions()
        self.driver = uc.Chrome(
            options=self.options,
            version_main=92, # 注意填写自己浏览器版本
            log_level=3,
            delay=0,
            seleniumwire_options={}
        )
        self.driver.get(url)
        print(self.driver.page_source)

    # def __del__(self):
    #     # undetected 模式会自动关闭 driver
    #     pass

    # def set_options(self):
    #     return uc.ChromeOptions()

    # def set_driver(self):
    #     driver = uc.Chrome(
    #         options=self.options,
    #         version_main=92, # 注意填写自己浏览器版本
    #         log_level=3,
    #         delay=0,
    #         seleniumwire_options={}
    #     )
    #     return driver


if __name__ == "__main__":
    st = time.time()
    UC()
    print("启动耗时: ", time.time() - st)