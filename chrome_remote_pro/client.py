# -*- coding: utf-8 -*-
import json
import time
import requests
import websocket


class BrowserEnvClient(object):
    """ 用于连接浏览器服务的 客户端对象 """

    def __init__(self, host='127.0.0.1', port=9222, timeout=1):
        self.host = host
        self.port = port
        self.timeout = timeout
        self.wsobj = None
        self.wsurl = None
        self.update_connect()
        # self.connect()

    def __del__(self):
        if isinstance(self.wsobj, websocket._core.WebSocket):
            self.clear_storage()
            self.wsobj.close()

    def request_get(self, url):
        try:
            response = requests.get(url, timeout=self.timeout)
            return response
        except requests.exceptions.ConnectTimeout as e:
            raise ConnectionError(e)

    def get_wsurl(self):
        response = self.request_get(f'http://{self.host}:{self.port}/json')
        tabs = json.loads(response.text)
        wsurl = tabs[0]['webSocketDebuggerUrl']
        return wsurl

    def connect(self):
        self.wsurl = self.get_wsurl()
        self.wsobj = websocket.create_connection(self.wsurl)
        self.wsobj.settimeout(self.timeout)

    def update_connect(self):
        self.wsurl = self.get_wsurl()
        if isinstance(self.wsobj, websocket._core.WebSocket):
            self.wsobj.close()
        self.wsobj = websocket.create_connection(self.wsurl)
        self.wsobj.settimeout(self.timeout)

    def runtime_evaluate_script(self, script):
        call_obj = {'id': 1, 'method': 'Runtime.evaluate',
                    'params': {'expression': script}}
        self.wsobj.send(json.dumps(call_obj))
        callback = self.wsobj.recv()
        value = json.loads(callback).get('result').get('result').get('value')
        return value

    def clear_storage(self):
        """ 清理存储, 重置浏览器环境 """
        # 清理本地存储
        self.runtime_evaluate_script('javascript:localStorage.clear();')
        # 清理会话存储
        self.runtime_evaluate_script('javascript:sessionStorage.clear();')
        # 清理所有 Cookies
        self.runtime_evaluate_script("""
            function deleteAllCookies() {
                    var cookies = document.cookie.split(";");
                    for (var i = 0; i < cookies.length; i++) {
                        var cookie = cookies[i];
                        var eqPos = cookie.indexOf("=");
                        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
                        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
                    }
                };
            deleteAllCookies();""")

    def click(self, css):
        """ 鼠标点击 """
        script = '''
"use strict";
var ev = new MouseEvent('click', {
    cancelable: true,
    bubble: true,
    view: window
});
document.querySelector('%s').dispatchEvent(ev);
''' % (css)
        return self.runtime_evaluate_script(script)

    def send(self, css, text):
        """ 输入框输入 """
        script = "document.querySelector('%s').value = '%s';" % (css, text)
        return self.runtime_evaluate_script(script)

    def get_html(self):
        """ 获取页面 html 元素 """
        return self.runtime_evaluate_script("document.documentElement.outerHTML;")

    def process_message(self):
        """ 处理消息(输入) """
        pass

    def get_message(self):
        """ 获取消息(输出) """
        pass


if __name__ == '__main__':
    # 浏览器不能开启调试工具
    # script = '1+1'
    script = 'window.location.href'
    client = BrowserEnvClient()
    res = client.runtime_evaluate_script(script)
    print(res)
    html = client.get_html()
    print(html)