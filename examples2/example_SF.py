# -*- coding: utf-8 -*-
# @Author : 艾登Aiden
# @Email : aiden2048@qq.com
# @Date : 2022-04-07

import os
import sys
sys.path.append(os.path.abspath(os.path.dirname(os.path.dirname(__file__))))
# from selenium.webdriver import Chrome
# from selenium.webdriver import ChromeOptions
from seleniumwire import webdriver
from browserenv.wirebrowserenv import WireBrowserEnv
# from browserenv.wirebrowserenv_uc import WireBrowserEnvUC as WBEUC
import subprocess
import psutil
import time


class Show():

    def __init__(self):
        self.child_pid = None

    def show(self, file_name):
        shell_process = subprocess.Popen(f'{file_name}', shell=True)
        parent = psutil.Process(shell_process.pid)
        for _ in range(999):
            children = parent.children(recursive=True)
            if children:
                break
            time.sleep(0.1)
        self.child_pid = children[0].pid

    def close(self):
        subprocess.check_output(f"Taskkill /PID {self.child_pid} /F")


class HttpbinEnv(WireBrowserEnv):

    def __init__(self, *args, **kwargs):

        # cmd 直接启动 chrome
        self.chrome_exe_path = r'C:\Users\admin\AppData\Local\Google\Chrome\Application\chrome.exe'
        self.show = Show()
        remote_debugging_port = 9222
        proxy_port = 9999
        self.show.show(f'{self.chrome_exe_path} --remote-debugging-address=127.0.0.1 --remote-debugging-port={remote_debugging_port} --proxy-server=http://127.0.0.1:{proxy_port}')
        print('cmd 直接启动 chrome...')


        self.set_params()
        super().__init__(url=self.url, 
                            intercept_enabled=self.intercept_enabled,
                            intercept_url=self.intercept_url,
                            intercept_mode=self.intercept_mode,
                            intercept_params=self.intercept_params,
                            *args, **kwargs)

    # def __del__(self):
    #     self.show.close()

    def set_params(self):
        self.url = 'https://www.sf-express.com/we/ow/chn/sc/waybill/waybill-detail/SF1364216703436'
        # 目标 js 地址https://t.captcha.qq.com/vm-slide.e201876f.enc.js
        self.intercept_url = 'https://t.captcha.qq.com/vm-slide'

        self.script = '__TENCENT_CHAOS_STACK'

        old_text = '__TENCENT_CHAOS_VM(g,m,U,n,E,F,Y,c){'
        new_text = '__TENCENT_CHAOS_VM(g,m,U,n,E,F,Y,c){debugger;' # 加了debugger为啥还不能断住

        self.intercept_enabled = True
        self.intercept_mode = 'modify'
        self.intercept_params={
            'modify_old_text': old_text,
            'modify_new_text': new_text,
        }

    def set_driver(self):
        # 日志等级
        self.options.add_argument('–disable-gpu')
        self.options.add_argument('log-level=3')
        # self.options.add_experimental_option('excludeSwitches', ['enable-logging']) # 同时开启 logging 会报错

        self.options.add_argument('user-agent=Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36')
        self.options.add_experimental_option('debuggerAddress', '127.0.0.1:9222')
        self.driver = webdriver.Chrome(options=self.options, seleniumwire_options={'verify_ssl': False, 'port':9999}) # {'port':9999}

        # 拦截网络开关
        _intercept_enabled = self.intercept_enabled
        if _intercept_enabled:
            self.intercept()
        return self.driver

    # def __del__(self):
    #     self.show.close()

    def get_result(self):
        print(self.driver.title)
        # print(self.driver.page_source)

        # script = '1+1'
        # script = 'window.innerWidth'
        # 真正的调用控制台
        # script 命令无需携带 return 即可有返回值
        result = self.driver.execute_cdp_cmd('Runtime.evaluate', {'expression': self.script})
        print(result)
        desc  = result.get('result') .get('description') if result.get('result') else ''
        print(desc)
        return desc


if __name__ == "__main__":
    st = time.time()

    env = HttpbinEnv()
    result = env.get_result()
    # print(result)

    input()
    # env.driver.close()
    env.show.close()
    print('use time:', time.time()- st)
