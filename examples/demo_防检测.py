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