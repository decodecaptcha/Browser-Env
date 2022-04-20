from time import time
import seleniumwire.undetected_chromedriver as uc


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


print(__name__)

if __name__ == '__main__':
    st = time() 

    Undetected()

    print('use time:', time() - st)