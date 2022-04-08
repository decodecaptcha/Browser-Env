import numbers
import os
import sys
import time
sys.path.append(os.path.abspath(os.path.dirname(os.path.dirname(__file__))))
from v8env.py_mini_racer import MiniRacer
import execjs

jsfile = r'D:\Code\My-Github-Code\Browser-Env\Browser-Env\examples\B站登录算法.js'

with open(jsfile, 'r', encoding='utf-8') as f:
    js_code = f.read()

def v8env_test():
    key = '''
    -----BEGIN PUBLIC KEY-----
    MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDjb4V7EidX/ym28t2ybo0U6t0n
    6p4ej8VjqKHg100va6jkNbNTrLQqMCQCAYtXMXXp2Fwkk6WR+12N9zknLjf+C9sx
    /+l48mjUU8RqahiFD1XT/u2e0m2EN029OhCgkHx3Fc/KlFSIbak93EH/XlYis0w+
    Xl69GV6klzgxW6d2xQIDAQAB
    -----END PUBLIC KEY-----
    '''
    pwd = "123456"
    ctx = MiniRacer()
    ctx.eval(js_code)
    password = ctx.call('test', key, "5ea852380104a6fd", pwd)
    # print(password)
    return password

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
    # print(password)
    return password

if __name__ == '__main__':
    st1 = time.time()
    number = 100
    for _ in range(number):
        v8env_test()
    print(f'v8env_test 执行次数: {number}, 总耗时: {time.time() - st1}' )

    st2 = time.time()
    number = 100
    for _ in range(number):
        execjs_test()
    print(f'execjs_test 执行次数: {number}, 总耗时: {time.time() - st2}' )

# v8env_test 执行次数: 100, 总耗时: 0.8380541801452637
# execjs_test 执行次数: 100, 总耗时: 4.881713151931763