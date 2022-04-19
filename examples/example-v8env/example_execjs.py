import os
import sys

import execjs

JS_PATH = os.path.abspath(os.path.join(os.path.dirname(__file__), 'bilibili_login.js'))

with open(JS_PATH, 'r', encoding='utf-8') as f:
    js_code = f.read()

def execjs_test():
    key = '''
    -----BEGIN PUBLIC KEY-----
    MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDjb4V7EidX/ym28t2ybo0U6t0n
    6p4ej8VjqKHg100va6jkNbNTrLQqMCQCAYtXMXXp2Fwkk6WR+12N9zknLjf+C9sx
    /+l48mjUU8RqahiFD1XT/u2e0m2EN029OhCgkHx3Fc/KlFSIbak93EH/XlYis0w+
    Xl69GV6klzgxW6d2xQIDAQAB
    -----END PUBLIC KEY-----
    '''
    pwd = "123456"
    ctx = execjs.compile(js_code)
    password = ctx.call('test', key, "5ea852380104a6fd", pwd)
    return password


if __name__ == '__main__':
    password = execjs_test()
    print(password)