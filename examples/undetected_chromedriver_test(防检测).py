import os
import sys
sys.path.append(os.path.abspath(os.path.dirname(os.path.dirname(__file__))))
import wirebrowserenv.seleniumwire.undetected_chromedriver.v2 as uc


class Undetected:

    def __init__(self):
        options = uc.ChromeOptions()
        # options.add_argument("--headless")
        options.add_argument("--incognito")
        options.add_argument('--blink-settings=imagesEnabled=false')
        driver = uc.Chrome(
            options=options,
            version_main=99,
            log_level=0,
            delay=0,
            
        )

        # url = 'http://httpbin.org/ip'
        # url = 'https://nowsecure.nl'
        url = 'https://bot.sannysoft.com/'

        driver.get(url)
        print(driver.page_source)
        # input()

print(__name__)

if __name__ == '__main__':
    Undetected()