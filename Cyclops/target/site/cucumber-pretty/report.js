$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("viewHotelWithDates.feature");
formatter.feature({
  "line": 2,
  "name": "View Hotel on Property with Dates page",
  "description": "I want to test the View Hotel functionality when Dates are selected",
  "id": "view-hotel-on-property-with-dates-page",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    }
  ]
});
formatter.background({
  "line": 5,
  "name": "Login User and navigate to Results Page to select dates",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 8,
  "name": "Navigating to Property with Dates Page",
  "description": "",
  "id": "view-hotel-on-property-with-dates-page;navigating-to-property-with-dates-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I navigate to Search Results Page to select dates",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I click on the View Hotels button when Dates are selected",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I should be navigated to Property with Dates page",
  "keyword": "Then "
});
formatter.match({
  "location": "viewHotelWithDates.searchResultsNavigate()"
});
formatter.result({
  "duration": 66826367742,
  "status": "passed"
});
formatter.match({
  "location": "viewHotelWithDates.selectDatesClickViewHotel()"
});
formatter.result({
  "duration": 19406262392,
  "error_message": "org.openqa.selenium.WebDriverException: {\"errorMessage\":\"Can\u0027t find variable: search\",\"request\":{\"headers\":{\"Accept-Encoding\":\"gzip,deflate\",\"Connection\":\"Keep-Alive\",\"Content-Length\":\"85\",\"Content-Type\":\"application/json; charset\u003dutf-8\",\"Host\":\"localhost:17507\",\"User-Agent\":\"Apache-HttpClient/4.5.1 (Java/1.8.0_101)\"},\"httpVersion\":\"1.1\",\"method\":\"POST\",\"post\":\"{\\\"script\\\":\\\"search.cal_checkIn(driver).setAttribute(\u0027value\u0027, \u00272017-04-20\u0027)\\\",\\\"args\\\":[]}\",\"url\":\"/execute\",\"urlParsed\":{\"anchor\":\"\",\"query\":\"\",\"file\":\"execute\",\"directory\":\"/\",\"path\":\"/execute\",\"relative\":\"/execute\",\"port\":\"\",\"host\":\"\",\"password\":\"\",\"user\":\"\",\"userInfo\":\"\",\"authority\":\"\",\"protocol\":\"\",\"source\":\"/execute\",\"queryKey\":{},\"chunks\":[\"execute\"]},\"urlOriginal\":\"/session/e1a91fb0-1943-11e7-84d5-6fa99d282af9/execute\"}}\nCommand duration or timeout: 1.61 seconds\nBuild info: version: \u00272.53.0\u0027, revision: \u002735ae25b\u0027, time: \u00272016-03-15 16:57:40\u0027\nSystem info: host: \u0027sandra-pc\u0027, ip: \u0027172.21.31.227\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_101\u0027\nDriver info: org.openqa.selenium.phantomjs.PhantomJSDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, handlesAlerts\u003dfalse, databaseEnabled\u003dfalse, version\u003d2.1.1, platform\u003dXP, browserConnectionEnabled\u003dfalse, proxy\u003d{proxyType\u003ddirect}, nativeEvents\u003dtrue, acceptSslCerts\u003dfalse, driverVersion\u003d1.2.0, locationContextEnabled\u003dfalse, webStorageEnabled\u003dfalse, browserName\u003dphantomjs, takesScreenshot\u003dtrue, driverName\u003dghostdriver, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: e1a91fb0-1943-11e7-84d5-6fa99d282af9\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.executeScript(RemoteWebDriver.java:577)\r\n\tat step_definition.viewHotelWithDates.selectDatesClickViewHotel(viewHotelWithDates.java:65)\r\n\tat ✽.When I click on the View Hotels button when Dates are selected(viewHotelWithDates.feature:10)\r\nCaused by: org.openqa.selenium.remote.ScreenshotException: Screen shot has been taken\nBuild info: version: \u00272.53.0\u0027, revision: \u002735ae25b\u0027, time: \u00272016-03-15 16:57:40\u0027\nSystem info: host: \u0027sandra-pc\u0027, ip: \u0027172.21.31.227\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_101\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:138)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.executeScript(RemoteWebDriver.java:577)\r\n\tat step_definition.viewHotelWithDates.selectDatesClickViewHotel(viewHotelWithDates.java:65)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:50)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:459)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:675)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:382)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:192)\r\nCaused by: org.openqa.selenium.WebDriverException: {\"errorMessage\":\"Can\u0027t find variable: search\",\"request\":{\"headers\":{\"Accept-Encoding\":\"gzip,deflate\",\"Connection\":\"Keep-Alive\",\"Content-Length\":\"85\",\"Content-Type\":\"application/json; charset\u003dutf-8\",\"Host\":\"localhost:17507\",\"User-Agent\":\"Apache-HttpClient/4.5.1 (Java/1.8.0_101)\"},\"httpVersion\":\"1.1\",\"method\":\"POST\",\"post\":\"{\\\"script\\\":\\\"search.cal_checkIn(driver).setAttribute(\u0027value\u0027, \u00272017-04-20\u0027)\\\",\\\"args\\\":[]}\",\"url\":\"/execute\",\"urlParsed\":{\"anchor\":\"\",\"query\":\"\",\"file\":\"execute\",\"directory\":\"/\",\"path\":\"/execute\",\"relative\":\"/execute\",\"port\":\"\",\"host\":\"\",\"password\":\"\",\"user\":\"\",\"userInfo\":\"\",\"authority\":\"\",\"protocol\":\"\",\"source\":\"/execute\",\"queryKey\":{},\"chunks\":[\"execute\"]},\"urlOriginal\":\"/session/e1a91fb0-1943-11e7-84d5-6fa99d282af9/execute\"}}\nBuild info: version: \u00272.53.0\u0027, revision: \u002735ae25b\u0027, time: \u00272016-03-15 16:57:40\u0027\nSystem info: host: \u0027sandra-pc\u0027, ip: \u0027172.21.31.227\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_101\u0027\nDriver info: driver.version: unknown\r\n",
  "status": "failed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});