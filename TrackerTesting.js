var test = require('selenium-webdriver/testing');
var assert = require('selenium-webdriver/testing/assert');
var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

//this opens up a Chrome browser
var driver1 = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

//Line 13 and 14 navigates to the QA login page and then sleeps to give the script time to catch up
driver1.get('https://mxw-qa.force.com');
driver1.sleep(1000);

//Lines 17,18 = asking the driver is the element name "username" curently displayed? If so send this UN to that field
if(driver1.findElement(By.name('username')).isDisplayed){
	driver1.findElement(By.name('username')).sendKeys('PQA800062');
}
//Lines 21,22 = asking the driver is the element name "password" curently displayed? If so send this PW to that field
if(driver1.findElement(By.name('password')).isDisplayed){
	driver1.findElement(By.name('password')).sendKeys('Maxwell3');
}
//Lines 25,26 = asking the driver is the element className "Button big border"(which is the login button) curently displayed? If so send the Click action to that field
if(driver1.findElement(By.className('Button big border')).isDisplayed){
	driver1.findElement(By.className('Button big border')).click();
}

//Line 30 tells the driver to wait until the className "Header closed" is found and gives it 10000ms to find it. Header closed is the closed hamburger menu.
//Line 32 finds the xpath of that class, if it's displayed then click on the CSS Selector listed on line 33
driver1.wait(until.elementLocated(By.className('Header closed')), 10000);
if(driver1.findElement(By.xpath('//*[@id="main"]/div/header')).isDisplayed){
	driver1.findElement(By.css('#main > div > header > div > section.hamburger-block')).click();
}
//This block of code does the same thing. Only once the hamburger menu is open, it clicks on the Track button and then the Steps tracker
driver1.findElement(By.xpath('//*[@id="main"]/div/header/div/nav/ul/li[6]/a')).click();
driver1.wait(until.elementLocated(By.css('#main > div > div > section > section:nth-child(1) > section > article:nth-child(6) > div.trackerDetail > h4 > a')), 10000);
driver1.findElement(By.xpath('//*[@id="main"]/div/div/section/section[1]/section/article[6]/div[2]/h4/a')).click();

//Line 41 tells the driver to wait until it has located a class on the page called "Field NumberInput". That is the # of steps input field.
driver1.wait(until.elementLocated(By.className('Field NumberInput')), 10000);
//This checks to see if the # of steps field is displayed on the page, if it is, send 4500 steps to that field.
if(driver1.findElement(By.css('input[type="number"]')).isDisplayed){
	driver1.findElement(By.css('input[type="number"]')).sendKeys('4500');
}
//This waits to see if the submit button is located, if it is click the submit button
if(driver1.findElement(By.xpath('//*[@id="main"]/div/div/section/article/section[1]/form/div[2]/button')).isDisplayed){
	driver1.findElement(By.xpath('//*[@id="main"]/div/div/section/article/section[1]/form/div[2]/button')).click();
}


