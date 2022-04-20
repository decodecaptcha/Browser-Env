from seleniumwire import webdriver


driver = webdriver.Chrome()

url = 'http://httpbin.org/ip'
# url = 'https://nowsecure.nl'
# url = 'https://bot.sannysoft.com/'
# url = 'https://www.google.com'
# url = 'https://www.baidu.com'

driver.get(url)

# Access requests via the `requests` attribute
for request in driver.requests:
    if request.response:
        print(
            request.url,
            request.response.status_code,
            request.response.headers['Content-Type']
        )