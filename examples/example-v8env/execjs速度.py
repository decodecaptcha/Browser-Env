import timeit

v8_import_module = """
import os
import sys
sys.path.append(os.path.abspath(os.path.dirname(os.path.dirname(__file__))))
from v8env.py_mini_racer import MiniRacer
"""

v8_testcode = """
def v8env_test():
    jsfile = r'D:\Code\My-Github-Code\Browser-Env\Browser-Env\examples\B站登录算法.js'

    with open(jsfile, 'r', encoding='utf-8') as f:
        js_code = f.read()

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
    print(password)
    return

"""

execjs_import_module = """
import os
import sys
sys.path.append(os.path.abspath(os.path.dirname(os.path.dirname(__file__))))
import execjs
"""

execjs_testcode = """
def v8env_test():
    jsfile = r'D:\Code\My-Github-Code\Browser-Env\Browser-Env\examples\B站登录算法.js'

    with open(jsfile, 'r', encoding='utf-8') as f:
        js_code = f.read()

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
    print(password)
"""
number = 100_0000
# print(f'pyexecjs 执行次数{number}, 耗时', timeit.timeit(stmt=execjs_import_module, setup=execjs_testcode, number=number, globals=globals()), 's')
print(f'v8env 执行次数:{number}, 耗时:', timeit.timeit(stmt=v8_testcode, setup=v8_import_module, number=number, globals=globals()), 's')