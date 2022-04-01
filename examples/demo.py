import os
import sys
sys.path.append(os.path.abspath(os.path.dirname(os.path.dirname(__file__)) + '/' + 'wirebrowserenv'))
from seleniumwire import webdriver  # Import from seleniumwire


driver = webdriver.Chrome()


# driver.get('https://nowsecure.nl/')
# driver.get('https://www.google.com')
# driver.get('https://www.baidu.com')
driver.get('http://httpbin.org/ip')
# Access requests via the `requests` attribute
for request in driver.requests:
    if request.response:
        print(
            request.url,
            request.response.status_code,
            request.response.headers['Content-Type']
        )
input()
