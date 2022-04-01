# -*- coding: utf-8 -*-
# @Author : 艾登Aiden
# @Email : aiden2048@qq.com
# @Date : 2022-04-01

import logging
import os
import time

from selenium.common.exceptions import TimeoutException
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.wait import WebDriverWait

import sys
sys.path.append(os.path.abspath(os.path.dirname(os.path.dirname(__file__)) + '/' + 'wirebrowserenv'))
# print(os.path.abspath(os.path.dirname(os.path.dirname(__file__)) + '/' + 'wirebrowserenv'))

from seleniumwire import webdriver
from browserenv import BrowserEnv
from browserenv import STEALTH_JS_PATH

# logging.basicConfig(format='%(levelname)s:%(funcName)s:%(message)s', level = logging.DEBUG)
# logger = logging.getLogger(__name__)
# logger.setLevel(logging.DEBUG)


class WireBrowserEnv(BrowserEnv):
    """支持拦截网络请求 的浏览器环境
    作用:
        捕获的 HTTP 和 HTTPS 请求
        拦截请求和响应
        即时修改标题、参数、正文内容
    """
    def __init__(self, url=None, 
                        intercept_enabled=False, 
                        intercept_url=None, 
                        sub_status_code=200, 
                        sub_headers={}, 
                        sub_body=None, 
                        headless=True, 
                        images_enabled = False, 
                        incognito=False, 
                        stealth=False, 
                        proxy=None, 
                        wait_for=None,
                        time_delay=0,
                        timeout=20
        ):

        """
        :param url: 打开目标网站的 url
        :param headless: 无头模式
        :param incognito: 无痕模式
        :param images_enabled: 图像开关
        :param stealth: 伪装模式, 有效绕过 webdriver 等检测

        :param proxy: Browser 所使用的代理, 例如: http://127.0.0.1:1080
        :param wait_for: 等待目标网站, 页面某元素加载完成
        :param timeout: 若在指定时间超时, 则报错
        :param time_delay: 根据网速, 给多一点延迟时间让页面加载, 避免加载失败
        """
        print(self.__class__.__name__, ' is loading...')
        options = webdriver.ChromeOptions()

        _headless_enabled = headless
        if _headless_enabled:
            options.add_argument("--headless")

        _incognito_enabled = incognito
        if _incognito_enabled:
            options.add_argument("--incognito")

        _images_enabled = images_enabled
        if not _images_enabled:
            options.add_argument('--blink-settings=imagesEnabled=false')

        _proxy = proxy
        if _proxy:
            options.add_argument('--proxy-server=' + _proxy)

        # 禁止日志输出
        options.add_argument('–disable-gpu')
        options.add_argument('log-level=3')
        options.add_experimental_option('excludeSwitches', ['enable-logging'])

        self.driver = webdriver.Chrome(
            options=options,
            seleniumwire_options={}
        )

        # 拦截网络请求
        _intercept_enabled = intercept_enabled
        _intercept_url = intercept_url
        _sub_status_code = sub_status_code
        _sub_headers = sub_headers
        _sub_body = sub_body
        if _intercept_enabled:
            def interceptor(request):
                if request.url.startswith(_intercept_url):
                    request.create_response(
                        status_code=_sub_status_code,
                        headers=_sub_headers, 
                        body=_sub_body
                    )
            self.driver.request_interceptor = interceptor

        _stealth = stealth
        if _stealth:
            self.stealth()

        self.url = url
        self.wait_for = wait_for
        self.timeout = timeout
        if self.url:
            self.driver.get(self.url)
            self.wait_for_page(self.url, self.wait_for, self.timeout)

        _time_delay = time_delay
        print(f"{self.__class__.__name__} first loading... {_time_delay}s")
        if _time_delay:
            time.sleep(_time_delay)

    def __del__(self):
        self.driver.close()

    def stealth(self):
        with open(STEALTH_JS_PATH) as file:
            stealth_min_js = file.read()
        self.driver.execute_cdp_cmd("Page.addScriptToEvaluateOnNewDocument", {
                "source": stealth_min_js
            })

    def wait_for_page(self, url, wait_for, timeout):
        _url = url
        _wait_for = wait_for
        _timeout = timeout
        if _wait_for:
            try:
                print('Waiting for ', _wait_for)
                WebDriverWait(self.driver, _timeout).until(
                    EC.presence_of_element_located((By.XPATH, _wait_for))
                )
            except TimeoutException:
                print('TimeoutException waiting for ', _wait_for, ', url: ', _url)
                self.driver.close()

    def execute_script(self, script):
        return self.driver.execute_script(script)

    def refresh_page(self):
        """刷新页面"""
        self.driver.get(self.url)
        self.wait_for_page(self.url, self.wait_for, self.timeout)




if __name__ == "__main__":

    st = time.time()

    # url = 'https://www.baidu.com'
    # interceptor_url = 'https://www.baidu.com'

    url = 'https://www.posti.fi/fi/seuranta'
    interceptor_url = 'https://www.posti.fi/featureEmbed'
    sub_headers = {
        'Content-Type': 'application/javascript',
        'Connection': 'keep-alive',
        'x-amz-server-side-encryption': 'AES256',
        'Cache-Control': 'public, max-age=31536000, immutable',
        'Server': 'AmazonS3',
        'Vary': 'Accept-Encoding',
        'Strict-Transport-Security': 'max-age=31536000; includeSubdomains; preload',
        'X-Content-Type-Options': 'nosniff',
        'X-XSS-Protection': '1; mode=block',
        'Referrer-Policy': 'no-referrer-when-downgrade',
        'Content-Security-Policy': '''default-src 'self' *.posti.fi *.googlesyndication.com; style-src 'unsafe-inline' 'self' *.posti.fi optimize.google.com tagmanager.google.com fonts.googleapis.com *.force.com *.salesforce.com *.euc-freshbots.ai; font-src 'self' data: *.posti.fi *.hotjar.com *.force.com *.sfdcstatic.com tagmanager.google.com fonts.googleapis.com fonts.gstatic.com; script-src 'self' 'unsafe-inline' 'unsafe-eval' *.posti.fi cdn.ampproject.org *.doubleclick.net https://www.googleoptimize.com/ adservice.google.fi adservice.google.com optimize.google.com *.usemessages.com forms.hsforms.com js.hsforms.net js.hs-banner.com js-agent.newrelic.com bam.eu01.nr-data.net *.hs-scripts.com js.hsleadflows.net js.hs-analytics.net sb.scorecardresearch.com connect.facebook.net www.googletagservices.com *.typeform.com *.krxd.net *.force.com tagmanager.google.com www.googletagmanager.com www.google-analytics.com *.hotjar.com maps.googleapis.com locationservice.posti.com/location *.my.salesforce.com *.salesforceliveagent.com *.declaration.postinext.fi *.lfeeder.com *.euc-freshbots.ai *.declaration.posticloud.fi *.pusher.com *.cookielaw.org *.onetrust.com *.postinext.fi ajax.googleapis.com *.googlesyndication.com www.googleadservices.com cdnjs.cloudflare.com www.google.com *.licdn.com code.jquery.com js.hsadspixel.net api.hubapi.com www.gstatic.com; frame-src optimize.google.com *.typeform.com *.krxd.net app.hubspot.com www.googletagmanager.com www.googletagservices.com forms.hsforms.com *.googlesyndication.com *.hotjar.com *.posti.fi www.facebook.com www.youtube.com *.force.com *.salesforce.com *.onetrust.mgr.consensu.org bot.leadoo.com client.myzef.com www.google.com postidigital.github.io jakelu.posti.fi *.doubleclick.net; child-src 'self' *.hotjar.com; img-src 'self' blob: data: *.posti.fi optimize.google.com *.googlesyndication.com forms.hsforms.com *.krxd.net *.force.com www.facebook.com www.googletagmanager.com sb.scorecardresearch.com *.hubspot.com maps.googleapis.com ssl.gstatic.com www.gstatic.com www.google-analytics.com www.google.fi www.google.com www.netposti.fi *.doubleclick.net *.hotjar.com *.ctfassets.net maps.gstatic.com *.lfeeder.com *.freshbots.ai *.euc-freshbots.ai *.cookielaw.org *.onetrust.com code.jquery.com *.postinext.fi *.linkedin.com dmp.adform.net www.googleadservices.com *.adsymptotic.com cdn.posti.fi; connect-src 'self' *.posti.fi adservice.google.fi adservice.google.com optimize.google.com maps.googleapis.com bam.eu01.nr-data.net *.salesforceliveagent.com vc.hotjar.io api.posti.com *.api.posti.com *.api.posti.fi *.hubspot.com *.hsforms.com *.hubapi.com vbvavibkgkermrl.form.io www.google-analytics.com *.doubleclick.net *.force.com locationservice.posti.com *.hotjar.com wss://*.hotjar.com picc.posti.fi:* picc8.posti.fi:* *.form.io www.facebook.com *.declaration.postinext.fi *.declaration.posticloud.fi *.euc-freshbots.ai *.pusher.com wss://*.pusher.com prd.graphql.posticloud.fi/graphql *.cookielaw.org *.onetrust.com *.postinext.fi *.googlesyndication.com *.execute-api.eu-west-1.amazonaws.com www.google.com forms.hsforms.com; media-src 'self' *.ctfassets.net; frame-ancestors 'self' apps.itella.com salesfra.me; object-src 'none';''',
    }
    js_file = os.path.abspath(os.path.join(os.path.dirname(__file__), "featureEmbed.js"))
    with open(js_file, 'r', encoding='utf-8') as file:
        js_content = file.read()

    sub_body = js_content

    wait_for = '//div[@aria-live="polite"]'

    wbe = WireBrowserEnv(
        url=url, 
        intercept_enabled=True, 
        intercept_url=interceptor_url, 
        sub_status_code=200, 
        sub_headers=sub_headers, 
        sub_body=sub_body, 
        headless=False, 
        images_enabled = False, 
        incognito=True, 
        stealth=False, 
        proxy=None, 
        wait_for=wait_for, 
        time_delay=3, 
        timeout=20, 
    )

    script = 'return window.__tokens'
    result = wbe.execute_script(script)

    print(result if result else 'None')

    print("耗时: ", time.time() - st)
