# -*- coding: utf-8 -*-
# @Author : 艾登Aiden
# @Email : aiden2048@qq.com
# @Date : 2022-04-07

import os
from pickle import FALSE
import sys
from time import time
sys.path.append(os.path.abspath(os.path.dirname(os.path.dirname(__file__))))

# from browserenv.wirebrowserenv import WireBrowserEnv
from browserenv.wirebrowserenv_uc import WireBrowserEnvUC as WBEUC


class FedexEnv(WBEUC):

    def __init__(self, *args, **kwargs):

        self.set_params()

        super().__init__(url=self.url, 
                            intercept_enabled=self.intercept_enabled,
                            intercept_url=self.intercept_url,
                            intercept_mode=self.intercept_mode,
                            intercept_params=self.intercept_params,
                            headless=self.headless, 
                            images_enabled=self.images_enabled,
                            incognito=self.incognito,
                            stealth=self.stealth,
                            wait_for=self.wait_for,
                            delay_time=self.delay_time,
                            timeout=self.timeout,
                            *args, **kwargs)

    def set_params(self):
        # self.url = 'https://bot.sannysoft.com/'
        self.url = 'https://www.fedex.com/zh-cn/home.html'
        self.intercept_url = 'https://www.fedex.com/B1QQCx/6JB8VT/jWa0Gb/CCk0/SeKFo/L3N9LLmhQ1EY/E0B3bzkhJAE/RS5tRgxn/ZUA'
        mock_headers ={
            'ccess-Control-Allow-Credentials': 'true',
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Allow-Origin': 'https://www.fedex.com',
            'Connection': 'keep-alive',
            'Content-Type': 'application/json',
            'Vary': 'Origin',
        }

        self.script = 'return bmak.bpd()'

        js_file = r'C:\Users\admin\Desktop\ZUA.js'
        with open(js_file, 'r', encoding='utf-8') as f:
            mock_body = f.read()
        
        self.intercept_enabled = True
        self.intercept_mode = 'mock'
        self.intercept_params={
            'mock_status_code': 200, 
            'mock_headers': mock_headers, 
            'mock_body': mock_body,
        }

        self.headless = False
        self.images_enabled = True
        self.incognito = False
        self.stealth = False
        self.wait_for = '//input[@name="trackingnumber"]'
        self.delay_time = 60
        self.timeout = 120


        # old_text = 'origin'
        # new_text = '这是已经替换的页面'

        # self.intercept_enabled = True
        # self.intercept_mode = 'modify'
        # self.intercept_params={
        #     'modify_old_text': old_text,
        #     'modify_new_text': new_text,
        # }

    def get_result(self):
        result = self.execute_script(self.script)
        if result:
            return result
        else:
            raise ValueError('result is empty')


if __name__ == "__main__":
    st = time()
    try:
        env = FedexEnv()
        result = env.get_result()
        print(result)
    except Exception as e:
        print(e)

    print('use time:', time() - st)
    # input()






