# -*- coding: utf-8 -*-
import logging
import platform
import socket
import subprocess
from time import sleep

import psutil

logging.basicConfig(level=logging.NOTSET)
logger = logging.getLogger(__name__)


class BrowserEnvServer(object):
    """ 浏览器服务对象 """

    def __init__(self, path='google-chrome', port=9222, headless=False):
        self.path = path
        self.port = port
        self.child_pid = None
        self.process = None
        self.is_linux = None
        self.is_linux = self.is_linux_system()              # 区分当前操作系统
        if self.is_linux:
            self.options = [
                self.path,
                'https://httpbin.org/get',                  # 打开一个网页, 模拟标签页面
                '--no-sandbox',                             # 取消沙盒模式, 在root权限下跑
                '--disable-gpu',                            # 谷歌文档提到需要加上这个属性来规避bug
                '--enable-logging=stderr --vmodule --v=-3', # 禁止所有其他日志记录
                f'--remote-debugging-port={self.port}'
            ]
        else:
            self.options = [
                self.path,
                'https://httpbin.org/get',                  # 打开一个网页, 模拟标签页面
                '--enable-logging=stderr --vmodule --v=-3', # 禁止所有其他日志记录
                f'--remote-debugging-port={self.port}'
            ]

        if headless:
            # 无头模式, linux系统只支持headless
            self.options.append('--headless')
        self.popen_args = ' '.join(self.options)

    def __del__(self):
        if isinstance(self.process, subprocess.Popen):
            self.close()

    def is_port_use(self, port, host='127.0.0.1'):
        """ 检查服务端口是否占用 """
        try:
            s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
            s.connect((host, int(port)))
            s.shutdown(socket.SHUT_RDWR)
            return True
        except Exception as e:
            pass
        return False

    def start(self):
        # 如果端口不被占用, 则创建子进程
        if self.is_port_use(self.port):
            logger.warning(f"\n{'-'*20}\n{__class__.__name__} port={self.port} is other using.\n{'-'*20}")
            return

        logger.info(r"""
 ____                                  _____             ____                           
| __ ) _ __ _____      _____  ___ _ __| ____|_ ____   __/ ___|  ___ _ ____   _____ _ __ 
|  _ \| '__/ _ \ \ /\ / / __|/ _ \ '__|  _| | '_ \ \ / /\___ \ / _ \ '__\ \ / / _ \ '__|
| |_) | | | (_) \ V  V /\__ \  __/ |  | |___| | | \ V /  ___) |  __/ |   \ V /  __/ |   
|____/|_|  \___/ \_/\_/ |___/\___|_|  |_____|_| |_|\_/  |____/ \___|_|    \_/ \___|_|   

author: aiden2048                                     
address: https://github.com/aiden2048
""")

        # 创建子进程
        self.process = subprocess.Popen(self.popen_args, shell=True)
        parent = psutil.Process(self.process.pid)
        for _ in range(999):
            children = parent.children(recursive=True)
            if children:
                break
            sleep(0.1)
        self.child_pid = children[0].pid

        if self.child_pid is None:
            raise ChildProcessError("ChildProcess is empty")

        logger.info(
            f"{'-'*20}\n{__class__.__name__} system={self.get_system()}\n{'-'*20}")
        logger.info(f"{__class__.__name__} pid={self.child_pid}\n{'-'*20}")
        logger.info(f"{__class__.__name__} port={self.port}\n{'-'*20}")
        logger.info(f"{__class__.__name__} starting\n{'-'*20}")

    def close(self):
        logger.info(f"{__class__.__name__} close")
        if self.is_linux:
            args = ['/bin/kill', '-9', f'{self.child_pid}']
        else:
            args = ['Taskkill', '/PID', f'{self.child_pid}', '/F']
        try:
            subprocess.check_output(args)
            self.process.kill()
        except subprocess.CalledProcessError as e:
            raise ChildProcessError("ChildProcess is not normally close")

    def get_system(self):
        return platform.system()

    def is_linux_system(self):
        """ 当前操作系统是否为 Linux """
        name = self.get_system()
        if name == 'Linux':
            return True
        elif name == 'Windows':
            return False
        else:
            raise OSError("Other System")

if __name__ == '__main__':
    server = BrowserEnvServer(
        # path='google-chrome',
        path = r'C:\Users\admin\AppData\Local\Google\Chrome\Application\chrome.exe',
        port=9222,
        headless=False
    )
    server.start()
    input()
