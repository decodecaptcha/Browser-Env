# -*- coding: utf-8 -*-
# @Author : aiden2048
# @Email : aiden2048@qq.com
import re
from selenium.webdriver import ChromeOptions
from selenium.webdriver import Chrome


class BrowserEnvClient():

    def __init__(self, url=None, port=8797):
        # self.url = 'chrome://version/'
        # self.url = 'chrome://newtab/'
        # self.url = 'https://httpbin.org/get'
        self.url = url
        self.options = ChromeOptions()
        self.options.add_experimental_option('debuggerAddress', f'127.0.0.1:{port}')
        self.driver = Chrome(options=self.options)
        if self.url:
            self.driver.get(self.url)

    def execute_cdp_cmd_script(self, script):
        result = self.driver.execute_cdp_cmd('Runtime.evaluate', {'expression': script})
        return result.get('result').get('value')

    def clear_storage(self):
        """清理存储, 重置浏览器环境"""
        # 清理本地存储 (生成新的 TDC_itoken 不报错)
        self.execute_cdp_cmd_script('javascript:localStorage.clear();')
        # 清理会话存储 (生成新的 TDC_itoken 不报错)
        self.execute_cdp_cmd_script('javascript:sessionStorage.clear();')
        # 清理所有 Cookies (在无头模式 生成新的 TDC_itoken 不报错)
        self.execute_cdp_cmd_script("""
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

    def process_tdc(self, tdcjs):
        """
        tdcjs: tdc.js 字符串
        return: {
            'tdcResult': collect 密文,
            'time_seps': 时间戳顺序,
            'TDC_itoken': 如: "1358583243:1660536774"
        }
        """
        self.clear_storage()
        res = re.findall(r'function __TENCENT_CHAOS_VM\((.*?)\){', tdcjs)
        arg4 = res[0].split(',')[3]
        old_function = 'function __TENCENT_CHAOS_VM(' + res[0] + '){'
        new_function = old_function + 'if ('+arg4+'){if (String(typeof '+arg4+'['+arg4+'.length-1][0]) == "string"){cd_seq_list.push('+arg4+'['+arg4+'.length-1][0]);} else if (String(typeof '+arg4+'['+arg4+'.length-1][0]) == "number"){cd_seq_list.push('+arg4+'['+arg4+'.length-1][0]);}};'
        tdcjs = tdcjs.replace(old_function, new_function)
        script = ''.join([
        'var cd_seq_list = [];',
        tdcjs,
        """
        function test(){
            callback = {
                "tdcResult": decodeURIComponent(window.TDC.getData(!0)),
                "cdResult": cd_seq_list,
            }
            return JSON.stringify(callback)
        };
        """,
        'test();',
        ])
        return script


if __name__ == '__main__':
    script = '1+1'
    client = BrowserEnvClient(url=None)
    res = client.execute_cdp_cmd_script(script)
    print(res)

    # 腾讯防水墙实战
    # import requests
    # client = BrowserEnvClient(url='https://httpbin.org/get')
    # for _ in range(3):
    #     response = requests.get("https://t.captcha.qq.com/tdc.js", verify=False)
    #     script = client.process_tdc(response.text)
    #     res = client.execute_cdp_cmd_script(script)
    #     print(res)