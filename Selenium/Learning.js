var webdriver = require('selenium-webdriver');
var by = require('selenium-webdriver').By;
var until = require('selenium-webdriver').until;

//open Firefox
var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();
// maximize the window
driver.manage().window().maximize();
//delete all the cookies
driver.manage().deleteAllCookies();
//navigate to google
driver.get('http://www.google.com').then.function() {
	console.log("Find google query input");
	return driver.findElement(driver.By.name('q'));
	}).then(function(q) {
		console.log("Search for webdriver");
		q.sendKeys("webdriver");
	}).then(function(){
		console.log('Find search button')
		return driver.findElement(driver.By.Name('btnG'));
	}).then(function(btnG)) {
		console.log("click search button")
		return btnG.click;
	}).then(function() {
		console.log("Get title method");
		return driver.getTitle();
	}).then(function(title){
		console.log(title)
	})


		
			


