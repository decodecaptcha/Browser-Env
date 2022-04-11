import os
import sys
import time
sys.path.append(os.path.abspath(os.path.dirname(os.path.dirname(__file__))))
import wirebrowserenv.seleniumwire.undetected_chromedriver.v2 as uc


class Undetected:

    def __init__(self):
        options = uc.ChromeOptions()
        options.add_argument("--incognito")
        options.add_argument('--blink-settings=imagesEnabled=false')
        # 关闭欢迎页
        # options.arguments.extend(["--no-default-browser-check", "--no-first-run"])
        driver = uc.Chrome(
            options=options,
            log_level=3,
            headless=False,
            delay=0,
            version_main=99
        )

        # url = 'http://httpbin.org/ip'
        # url = 'https://nowsecure.nl'
        url = 'https://bot.sannysoft.com/'

        driver.get(url)
        print(driver.page_source[:100])
        driver.close()

print(__name__)

if __name__ == '__main__':
    st = time.time()

    Undetected()

    print('耗时：', time.time()-st, 's')