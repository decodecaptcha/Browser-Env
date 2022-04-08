import os
import sys
import time
sys.path.append(os.path.abspath(os.path.dirname(os.path.dirname(__file__))))
import wirebrowserenv.seleniumwire.undetected_chromedriver.v2 as uc
from selenium.webdriver.chrome.options import Options
# print("Python multiprocessing documentation is worth a read")
print(__name__)

if __name__ == '__main__':
    st = time.time()

    # url = 'http://httpbin.org/ip'
    url = 'https://bot.sannysoft.com/'
    # url = 'https://nowsecure.nl'

    # options = uc.ChromeOptions()
    options = Options()
    # options.add_argument("--headless")
    options.add_argument("--incognito")
    options.add_argument('--blink-settings=imagesEnabled=false')
    # 关闭欢迎页
    # options.arguments.extend(["--no-default-browser-check", "--no-first-run"])

    # 浏览器版本
    driver = uc.Chrome(
        options=options, 
        log_level=3, 
        headless=False, 
        delay=0, 
        version_main=99
    )
    driver.get(url)
    print(driver.page_source[:100])
    driver.close()

    print('耗时：', time.time()-st, 's')