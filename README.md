## Browser-Env
Web crawlers use the real browser environment.

本项目不重复造轮子, 而是对已有的开源项目进行封装和集成, 使其适用于复杂多样的 Spider 项目需求.

依赖要求:
Python 3.6+
selenium 3.4.0+
Chrome 浏览器应用版本 92+

本人实测的依赖版本:
Python 3.6.9
selenium-wire==4.6.0
undetected-chromedriver==3.0.6
selenium==3.141.0
Chrome 浏览器应用版本 92.0.4515.159

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
对 undetected-chromedriver 的集成,
优化的 Selenium Chromedriver 补丁,
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

## 感谢

* [PyMiniRacer](https://github.com/sqreen/PyMiniRacer)
* [selenium-wire](https://github.com/wkeeling/selenium-wire)
* [undetected-chromedriver](https://github.com/ultrafunkamsterdam/undetected-chromedriver)