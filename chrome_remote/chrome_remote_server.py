# -*- coding: utf-8 -*-
# @Author : aiden2048
# @Email : aiden2048@qq.com
import subprocess
import time
import psutil


class BrowserEnvServer():

    def __init__(self, exec_path, remote_port=8797):
        self.child_pid = None
        self.exec_path = exec_path
        self.remote_port = remote_port
        # 正常模式
        self.popen_args = f'{chrome_exe_path} --remote-debugging-port={self.remote_port}'
        # # 无头模式
        # self.popen_args = f'{chrome_exe_path} --remote-debugging-port={self.remote_port} --headless'
        # # 无痕模式
        # self.popen_args = f'{chrome_exe_path} --remote-debugging-port={self.remote_port} --incognito'
        print(f"{__class__.__name__} start...\nport={self.remote_port}")

    def start(self):
        shell_process = subprocess.Popen(self.popen_args, shell=True)
        parent = psutil.Process(shell_process.pid)
        for _ in range(999):
            children = parent.children(recursive=True)
            if children:
                break
            time.sleep(0.1)
        self.child_pid = children[0].pid

    def close(self):
        print(f"{__class__.__name__} close...")
        subprocess.check_output(f"Taskkill /PID {self.child_pid} /F")


if __name__ == '__main__':
    chrome_exe_path = r'C:\Users\admin\AppData\Local\Google\Chrome\Application\chrome.exe'
    server = BrowserEnvServer(exec_path=chrome_exe_path)
    server.start()
    # 守护进程， 保持服务开启
    input()
    server.close()
