var test = require('selenium-webdriver/testing');
var assert = require('selenium-webdriver/testing/assert');
var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

//line has been redacted
//line has been redacted
//line has been redacted
driver.findElement(By.id('Login')).click();
driver.wait(until.elementLocated(By.id('globalHeaderNameMink')), 10000);

driver.findElement(By.id('globalHeaderCommunitySwitcher'))
	.then(function(community_switcher) {
		assert(community_switcher.getText()).isEqualTo('PVT QA','Does not say PVT XX Internal');
			console.log('Assertion failed: '+ community_switcher.message);		
	});

driver.findElement(By.id('tsidLabel'))
	.then(function(tsid_label) {
		assert(tsid_label.getText()).isEqualTo('Maxwell ', 'Does not say Maxwell Force');
			console.log('Assertion failed: ' + tsid_label.message);
	});

// driver.findElement(By.id('phHeaderLogoImage'))
// 	.then(function(el) {
// 		assert(el.getText()).isEqualTo('https://mxw-qa--c.na3.content.force.com/servlet/servlet.ImageServer?id=015500000026xeT&oid=00D50000000ZkWI&lastMod=1470328861000','ImageLogo');
// 			console.log('Assertion failed: '+ el.message);		
// 	});


// driver.sleep(500);
// driver.findElement(By.css('li[data-sfdc-widget="SfdcCmp.Ui.Option"]>a[title="Setup"]')).click();
driver.sleep(10000);
// driver.quit();

