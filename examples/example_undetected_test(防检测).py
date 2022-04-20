from time import time
import seleniumwire.undetected_chromedriver as uc
from selenium.webdriver.chrome.options import Options

print(__name__)

if __name__ == '__main__':
    st = time()

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

    print('use time:', time() - st)