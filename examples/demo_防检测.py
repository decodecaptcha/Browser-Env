import os
import sys
sys.path.append(os.path.abspath(os.path.dirname(os.path.dirname(__file__)) + '/' + 'wirebrowserenv'))
import seleniumwire.undetected_chromedriver as uc
from seleniumwire import webdriver

chrome_options = uc.ChromeOptions()
driver = uc.Chrome(
    options=chrome_options,
    seleniumwire_options={}
)

# driver = webdriver.Chrome()

url = 'http://httpbin.org/ip'
# url = 'https://nowsecure.nl'
# url = 'https://bot.sannysoft.com/'

driver.get(url)

input()