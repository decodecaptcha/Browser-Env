import os
import sys
sys.path.append(os.path.abspath(os.path.dirname(os.path.dirname(__file__))))
import wirebrowserenv.seleniumwire.undetected_chromedriver.v2 as uc
# from selenium.webdriver.chrome.options import Options
# this code will be executed twice (main process & sub process)
print("Python multiprocessing documentation is worth a read")

if __name__ == '__main__':
    url = 'https://bot.sannysoft.com/'
    # url = 'https://nowsecure.nl'

    options = uc.ChromeOptions()
    # options.add_argument("--headless")
    options.add_argument("--incognito")
    options.add_argument('--blink-settings=imagesEnabled=false')

    # 禁止日志输出
    # options.add_argument('–disable-gpu')
    # options.add_argument('log-level=3')
    # options.add_experimental_option('excludeSwitches', ['enable-logging'])
    
    # 浏览器版本
    driver = uc.Chrome(options=options, version_main=99, delay=0)
    driver.get(url)
    print(driver.page_source)
    # input()