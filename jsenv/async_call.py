import asyncio
# from .nodeenv.execjs import ExecJS, Partial
# from .nodeenv.jsdom import JSDOM


# 跨包引用模块
import os
import sys
parent_path = os.path.dirname(sys.path[0])
if parent_path not in sys.path:
    sys.path.append(parent_path)
from nodeenv.async_execjs import ExecJS, Partial
from nodeenv.jsdom import JSDOM


async def base_exec_call(script, name, *args, **kwargs):
    """基础 ExecJS 环境"""
    asis = ExecJS()
    asis.setup.append(script)
    return await asis(Partial(name, *args, **kwargs))

async def base_jsdom_call(
    script,
    name,
    src: str = "",
    ua: str = "",
    location: str = "http://a.com",
    referrer: str = "http://b.com",
    *args,
    **kwargs
):
    """基础 Dom 环境"""
    assert JSDOM.check_jsdom()
    dom = JSDOM(src=src, ua=ua, location=location, referrer=referrer)
    dom.setup.append(script)
    return await dom(Partial(name, *args, **kwargs))

async def my_jsdom_call(script, name, *args, **kwargs):
    """自定义 DOM 环境"""
    ua = "Mozilla/5.0 (Linux; Android 11; Pixel 5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.91 Mobile Safari/537.36"
    location = "http://httpbin.org"
    referrer = "http://httpbin.org"
    src = ""
    return await base_jsdom_call(
        script,
        name,
        src=src,
        ua=ua,
        location=location,
        referrer=referrer,
        *args,
        **kwargs
    )


if __name__ == "__main__":

    output = asyncio.run(base_exec_call("function a(){return Math.random();}", "a"))
    print(output)

    output = asyncio.run(base_exec_call("function a(i){return i;}", "a", '1'))
    print(output)

    output = asyncio.run(base_jsdom_call("function a(){return Math.random();}", "a"))
    print(output)

    output = asyncio.run(my_jsdom_call("function a(){return Math.random();}", "a"))
    print(output)