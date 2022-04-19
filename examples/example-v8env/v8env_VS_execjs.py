import os
import sys
import time
# sys.path.append(os.path.abspath(os.path.dirname(os.path.dirname(os.path.dirname(__file__)))))
# from v8env.py_mini_racer import MiniRacer
# import execjs
from example_execjs import execjs_test
from example_v8env import v8env_test


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

# v8env_test 执行次数: 100, 总耗时: 0.8138065338134766
# execjs_test 执行次数: 100, 总耗时: 5.099790811538696