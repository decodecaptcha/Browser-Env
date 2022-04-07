import os
import sys
sys.path.append(os.path.abspath(os.path.dirname(os.path.dirname(__file__))))
from v8env.py_mini_racer import MiniRacer

jsfile = r'D:\Code\My-Gitee-Code\Spider_Armies\2-Crack-JS-Spider\0330-知乎\zhihu.js'
with open(jsfile, 'r', encoding='utf-8') as f:
    js_code = f.read()

e = '7861d84e110af123f2fc8c05ff38601f'

ctx = MiniRacer()
ctx.eval(js_code)
result = ctx.call("b", e)

print(result)

# a8O0QQuy28xYcR28f0NBkQe0kXtYUuY0mLxq66L0S7Yp