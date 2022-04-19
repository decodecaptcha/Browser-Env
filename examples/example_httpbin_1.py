# -*- coding: utf-8 -*-
# @Author : 艾登Aiden
# @Email : aiden2048@qq.com
# @Date : 2022-04-07

import os
import sys
from time import time
sys.path.append(os.path.abspath(os.path.dirname(os.path.dirname(__file__))))

# from browserenv.wirebrowserenv_uc import WireBrowserEnvUC as WBEUC
from browserenv.wirebrowserenv import WireBrowserEnv


class FinlandPostEnv(WireBrowserEnv):

    def __init__(self, *args, **kwargs):

        self.set_params()

        super().__init__(url=self.url, 
                            intercept_enabled=self.intercept_enabled,
                            intercept_url=self.intercept_url,
                            intercept_mode=self.intercept_mode,
                            intercept_params=self.intercept_params,
                            headless=self.headless,
                            incognito=self.incognito,
                            *args, **kwargs)

    def set_params(self):
        # 需同时在 super().__init__ 中添加该项
        self.url = 'https://httpbin.org/ip'
        self.intercept_url = 'https://httpbin.org/ip'
        self.script = 'return window.document.body.innerHTML'

        old_text = 'origin'
        new_text = '这是已经替换的页面'

        self.intercept_enabled = True
        self.intercept_mode = 'modify'
        self.intercept_params={
            'modify_old_text': old_text,
            'modify_new_text': new_text,
        }
        # 无头模式
        self.headless = True
        # 无痕模式
        self.incognito = True


    def get_result(self):
        result = self.execute_script(self.script)
        return result


if __name__ == "__main__":
    st = time()

    env = FinlandPostEnv()
    result = env.get_result()
    print(result)

    print('use time:', time() - st)






