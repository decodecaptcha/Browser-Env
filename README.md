## Browser-Env
Web crawlers use the real browser environment.

本项目不重复造轮子, 而是对已有的开源项目进行封装和集成, 使其适用于复杂多样的 Spider 项目需求.

依赖要求:
windows 系统

Python 3.6+

selenium 3.4.0+

Chrome 浏览器应用版本 92+

本人实测:
windows 10 专业版

Python 3.6.9

selenium-wire==4.6.0

undetected-chromedriver==3.0.6

selenium==3.141.0

Chrome 浏览器应用版本 92.0.4515.159


# chrome_remote_pro 推荐
2022-09-19 更新: 客户端不再使用 selenium 库, 基于chrome cdp协议 重写了一个客户端连接, 更少的依赖, 更高效

# chrome_remote
远程 chrome 浏览器环境, 执行js脚本

原理: 

chrome 可执行文件 使用启动选项 remote-debugging-port 打开 chrome 浏览器调试端口, 

相当于打开一个调试服务, 客户端填写 debuggerAddress 连接, 这些 selenium 已经都有集成的了

由于是浏览器是命令行方式启动, 这和平常手动启动浏览器基本没有差别, 自然就绕过各种 webdriver 属性, 自动化工具检测

辛苦扣出来的js, 再也不用花几小时补环境, 该怎么抛弃execjs, nodejs ?

# browserenv
基础的浏览器环境, 用于高度模拟 真实浏览器环境 执行js脚本

或对付 SecurityWorker, jsmvp 类型加固

# wirebrowserenv
在 browserenv 基础上, wirebrowserenv 功能更加强大, 支持拦截网络请求 的浏览器环境

作用:
    捕获的 HTTP 和 HTTPS 请求
    拦截请求和响应
    即时修改标题、参数、正文内容


# wirebrowserenv_uc
对 undetected-chromedriver 的集成, 优化的 Selenium Chromedriver 补丁,

不会触发 Distill Network / Imperva / DataDome / Botprotect.io 等反僵尸服务,

自动下载驱动程序二进制文件并对其进行修补。

# v8env
适用于 Python 的最小的现代嵌入式 V8 引擎
作用:
    执行js脚本


# 报错
问题:
    Python 3.7以下版本
    SyntaxError: future feature annotations is not defined

解决方法：
    直接注释掉 # from __future__ import annotations 即可

问题:
    selenium.common.exceptions.WebDriverException: Message: unknown error: cannot connect to chrome at 127.0.0.1:52693
    from session not created: This version of ChromeDriver only supports Chrome version xxx
    Current browser version is 92.0.4515.159

解决方法：
    wirebrowserenv_uc.py 中 修改 version_main=xxx, # 注意填写自己浏览器版本
    例如 version_main=92

# 感谢

* [PyMiniRacer](https://github.com/sqreen/PyMiniRacer)
* [selenium](https://github.com/SeleniumHQ/selenium)
* [selenium-wire](https://github.com/wkeeling/selenium-wire)
* [undetected-chromedriver](https://github.com/ultrafunkamsterdam/undetected-chromedriver)