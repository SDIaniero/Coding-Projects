from selenium import webdriver
browser = webdriver.Chrome()
from selenium.webdriver.common.keys import Keys
browser.implicitly_wait(10)
import re    
browser.get('https://pvtcompass.my.salesforce.com/')

username = browser.find_element_by_id("username")
username.send_keys("sianiero@preventure.com")

password = browser.find_element_by_id("password")
password.send_keys("Or@nge03")

#assigning the action of finding the id named "login" to the variable "click". Then telling python to select the button with ".click()"
click = browser.find_element_by_id("Login").click()
#finding the link with the text "Environment Hub", then assigning it to the variable "click". Then telling python to select the button with ".click()"
click = browser.find_element_by_link_text("Environment Hub").click()
#assigning the link text "PVT GBI" which is a hyperlink to the https://pvtcompass.my.salesforce.com/0J1a0000000Gmu9 to the variable "link"
link = browser.find_element_by_link_text('PVT GBI')
link.click() #calling the variable name "link" and assigning the method .click() to it. This tells the script to CLICK on that link

link = browser.find_element_by_name("envhubloginaction")
link.click()

element = browser.find_element_by_class_name("zen-trigger")
if element.text != 'PVT GBI Internal':
    print ("Verify Failed: element text is not %r") % element.text