import os
import sys
sys.path.append(os.path.abspath(os.path.dirname(os.path.dirname(__file__)) + '/' + 'wirebrowserenv'))

from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.wait import WebDriverWait
from seleniumwire import webdriver

# interceptor_url = 'https://www.baidu.com'
interceptor_url = 'https://www.posti.fi/featureEmbed-'
status_code = 200
headers = {
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


js_file = r'xxxx.js'
with open(js_file, 'r', encoding='utf-8') as file:
    js_content = file.read()
    # print(js_content)

body = js_content


def interceptor(request):
    if request.url.startswith(interceptor_url):
        request.create_response(
            status_code=status_code,
            headers=headers, 
            body=body
        )

options = webdriver.ChromeOptions()

# options.add_argument("--headless")
options.add_argument("--incognito")
options.add_argument('--blink-settings=imagesEnabled=false')
# options.add_argument('--proxy-server=' + 'http://xxx.xxx.xxx.xxx:8080')

# 禁止日志输出
options.add_argument('–disable-gpu')
options.add_argument('log-level=3')
options.add_experimental_option('excludeSwitches', ['enable-logging'])

driver = webdriver.Chrome(
    options=options,
    seleniumwire_options={}
)

driver.request_interceptor = interceptor

# url = 'https://www.baidu.com'
# url = 'https://www.google.com'
# url = 'https://www.posti.fi/featureEmbed-a86bb47076742e03e8f4.js'
url = 'https://www.posti.fi/fi/seuranta#/lahetys/UU365027439CN'

driver.get(url)


time.sleep(20)

# script = 'return document.body.innerHTML'
# script = 'return document.location'
script = 'return window.__tokens'

result = driver.execute_script(script)

print(type(result))
print(result)


input()
