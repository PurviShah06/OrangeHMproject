$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/Resources/Features/Login_Page.feature");
formatter.feature({
  "line": 2,
  "name": "User Login Successfully on Application",
  "description": "",
  "id": "user-login-successfully-on-application",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    }
  ]
});
formatter.before({
  "duration": 8745008900,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": ": User is Already on LoginPage.",
  "keyword": "Given "
});
formatter.match({
  "location": "MyStepDef.userIsAlreadyOnLoginPage()"
});
formatter.result({
  "duration": 239618200,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "User can able to login successfully with valid Username and Valid Password.",
  "description": "",
  "id": "user-login-successfully-on-application;user-can-able-to-login-successfully-with-valid-username-and-valid-password.",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@Valid"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "User enter valid username enter valid Password.",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user click on Login Button.",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user can login successfully and can see  HomePage of Application.",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDef.userEnterValidUsernameAndValidPassword()"
});
formatter.result({
  "duration": 1101669400,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDef.user_click_on_Login_Button()"
});
formatter.result({
  "duration": 2039032500,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDef.user_can_login_successfully_and_can_see_HomePage_of_Application()"
});
formatter.result({
  "duration": 666742700,
  "status": "passed"
});
formatter.after({
  "duration": 2558286100,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 12,
  "name": "User can not able to login with  invalid Username and invalid Password and shows related message.",
  "description": "",
  "id": "user-login-successfully-on-application;user-can-not-able-to-login-with--invalid-username-and-invalid-password-and-shows-related-message.",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@Invalid"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "User enter invalid \"\u003cinvalid Username\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User enter \"\u003cinvalid Password\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user click on Login Button.",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user should not login successfully and can see  \"\u003crelated message\u003e\".",
  "keyword": "Then "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "user-login-successfully-on-application;user-can-not-able-to-login-with--invalid-username-and-invalid-password-and-shows-related-message.;",
  "rows": [
    {
      "cells": [
        "invalid Username",
        "invalid Password",
        "related message"
      ],
      "line": 18,
      "id": "user-login-successfully-on-application;user-can-not-able-to-login-with--invalid-username-and-invalid-password-and-shows-related-message.;;1"
    },
    {
      "cells": [
        "",
        "admin123",
        "Username cannot be empty"
      ],
      "line": 19,
      "id": "user-login-successfully-on-application;user-can-not-able-to-login-with--invalid-username-and-invalid-password-and-shows-related-message.;;2"
    },
    {
      "cells": [
        "",
        "",
        "Username cannot be empty"
      ],
      "line": 20,
      "id": "user-login-successfully-on-application;user-can-not-able-to-login-with--invalid-username-and-invalid-password-and-shows-related-message.;;3"
    },
    {
      "cells": [
        "Admin",
        "admin1234",
        "Invalid credentials"
      ],
      "line": 21,
      "id": "user-login-successfully-on-application;user-can-not-able-to-login-with--invalid-username-and-invalid-password-and-shows-related-message.;;4"
    },
    {
      "cells": [
        "abccdf",
        "Admin1234",
        "Invalid credentials"
      ],
      "line": 22,
      "id": "user-login-successfully-on-application;user-can-not-able-to-login-with--invalid-username-and-invalid-password-and-shows-related-message.;;5"
    },
    {
      "cells": [
        "adsaf",
        "",
        "Password cannot be empty"
      ],
      "line": 23,
      "id": "user-login-successfully-on-application;user-can-not-able-to-login-with--invalid-username-and-invalid-password-and-shows-related-message.;;6"
    },
    {
      "cells": [
        "",
        "admin",
        "Username cannot be empty"
      ],
      "line": 24,
      "id": "user-login-successfully-on-application;user-can-not-able-to-login-with--invalid-username-and-invalid-password-and-shows-related-message.;;7"
    },
    {
      "cells": [
        "login123",
        "admin123",
        "Invalid credentials"
      ],
      "line": 25,
      "id": "user-login-successfully-on-application;user-can-not-able-to-login-with--invalid-username-and-invalid-password-and-shows-related-message.;;8"
    },
    {
      "cells": [
        "Admin",
        "",
        "Password cannot be empty"
      ],
      "line": 26,
      "id": "user-login-successfully-on-application;user-can-not-able-to-login-with--invalid-username-and-invalid-password-and-shows-related-message.;;9"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 42108458900,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": ": User is Already on LoginPage.",
  "keyword": "Given "
});
formatter.match({
  "location": "MyStepDef.userIsAlreadyOnLoginPage()"
});
formatter.result({
  "duration": 119056000,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "User can not able to login with  invalid Username and invalid Password and shows related message.",
  "description": "",
  "id": "user-login-successfully-on-application;user-can-not-able-to-login-with--invalid-username-and-invalid-password-and-shows-related-message.;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    },
    {
      "line": 11,
      "name": "@Invalid"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "User enter invalid \"\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User enter \"admin123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user click on Login Button.",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user should not login successfully and can see  \"Username cannot be empty\".",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 20
    }
  ],
  "location": "MyStepDef.userEnterInvalid(String)"
});
formatter.result({
  "duration": 715702000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin123",
      "offset": 12
    }
  ],
  "location": "MyStepDef.userEnter(String)"
});
formatter.result({
  "duration": 679138200,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDef.user_click_on_Login_Button()"
});
formatter.result({
  "duration": 246254300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Username cannot be empty",
      "offset": 49
    }
  ],
  "location": "MyStepDef.userShouldNotLoginSuccessfullyAndCanSee(String)"
});
formatter.result({
  "duration": 16404211800,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//span[text()\u003d\u0027Invalid credentials\u0027]\"}\n  (Session info: chrome\u003d83.0.4103.61)\n  (Driver info: chromedriver\u003d83.0.4103.39 (ccbf011cb2d2b19b506d844400483861342c20cd-refs/branch-heads/4103@{#416}),platform\u003dWindows NT 10.0.10586 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-KRKJ7CDS\u0027, ip: \u0027192.168.1.95\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: org.openqa.selenium.remote.RemoteWebDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\ADMINI~1\\AppData\\L...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:49762}, handlesAlerts: true, hasMetadata: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), rotatable: false, setWindowRect: true, strictFileInteractability: false, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 83.0.4103.61, webStorageEnabled: true, webauthn:virtualAuthenticators: true, webdriver.remote.sessionid: 026e20bbbc4e44eb93b3acb9578...}\nSession ID: 026e20bbbc4e44eb93b3acb9578f2802\n*** Element info: {Using\u003dxpath, value\u003d//span[text()\u003d\u0027Invalid credentials\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.example.MyUtils.getElement(MyUtils.java:37)\r\n\tat org.example.Login_Page.reletedLoginMessageVerify(Login_Page.java:69)\r\n\tat org.example.MyStepDef.userShouldNotLoginSuccessfullyAndCanSee(MyStepDef.java:47)\r\n\tat ✽.Then user should not login successfully and can see  \"Username cannot be empty\".(src/test/Resources/Features/Login_Page.feature:16)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 219094300,
  "status": "passed"
});
formatter.before({
  "duration": 40287305300,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": ": User is Already on LoginPage.",
  "keyword": "Given "
});
formatter.match({
  "location": "MyStepDef.userIsAlreadyOnLoginPage()"
});
formatter.result({
  "duration": 127535700,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "User can not able to login with  invalid Username and invalid Password and shows related message.",
  "description": "",
  "id": "user-login-successfully-on-application;user-can-not-able-to-login-with--invalid-username-and-invalid-password-and-shows-related-message.;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    },
    {
      "line": 11,
      "name": "@Invalid"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "User enter invalid \"\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User enter \"\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user click on Login Button.",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user should not login successfully and can see  \"Username cannot be empty\".",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 20
    }
  ],
  "location": "MyStepDef.userEnterInvalid(String)"
});
formatter.result({
  "duration": 672576100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 12
    }
  ],
  "location": "MyStepDef.userEnter(String)"
});
formatter.result({
  "duration": 580859400,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDef.user_click_on_Login_Button()"
});
formatter.result({
  "duration": 253352000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Username cannot be empty",
      "offset": 49
    }
  ],
  "location": "MyStepDef.userShouldNotLoginSuccessfullyAndCanSee(String)"
});
formatter.result({
  "duration": 16285648200,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//span[text()\u003d\u0027Invalid credentials\u0027]\"}\n  (Session info: chrome\u003d83.0.4103.61)\n  (Driver info: chromedriver\u003d83.0.4103.39 (ccbf011cb2d2b19b506d844400483861342c20cd-refs/branch-heads/4103@{#416}),platform\u003dWindows NT 10.0.10586 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-KRKJ7CDS\u0027, ip: \u0027192.168.1.95\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: org.openqa.selenium.remote.RemoteWebDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\ADMINI~1\\AppData\\L...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:49761}, handlesAlerts: true, hasMetadata: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), rotatable: false, setWindowRect: true, strictFileInteractability: false, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 83.0.4103.61, webStorageEnabled: true, webauthn:virtualAuthenticators: true, webdriver.remote.sessionid: 2cbb9dec47ed49378d5e83cf76a...}\nSession ID: 2cbb9dec47ed49378d5e83cf76ae9b94\n*** Element info: {Using\u003dxpath, value\u003d//span[text()\u003d\u0027Invalid credentials\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.example.MyUtils.getElement(MyUtils.java:37)\r\n\tat org.example.Login_Page.reletedLoginMessageVerify(Login_Page.java:69)\r\n\tat org.example.MyStepDef.userShouldNotLoginSuccessfullyAndCanSee(MyStepDef.java:47)\r\n\tat ✽.Then user should not login successfully and can see  \"Username cannot be empty\".(src/test/Resources/Features/Login_Page.feature:16)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 2276511000,
  "status": "passed"
});
formatter.before({
  "duration": 44391364800,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": ": User is Already on LoginPage.",
  "keyword": "Given "
});
formatter.match({
  "location": "MyStepDef.userIsAlreadyOnLoginPage()"
});
formatter.result({
  "duration": 122740000,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "User can not able to login with  invalid Username and invalid Password and shows related message.",
  "description": "",
  "id": "user-login-successfully-on-application;user-can-not-able-to-login-with--invalid-username-and-invalid-password-and-shows-related-message.;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    },
    {
      "line": 11,
      "name": "@Invalid"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "User enter invalid \"Admin\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User enter \"admin1234\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user click on Login Button.",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user should not login successfully and can see  \"Invalid credentials\".",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 20
    }
  ],
  "location": "MyStepDef.userEnterInvalid(String)"
});
formatter.result({
  "duration": 713691700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin1234",
      "offset": 12
    }
  ],
  "location": "MyStepDef.userEnter(String)"
});
formatter.result({
  "duration": 635750200,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDef.user_click_on_Login_Button()"
});
formatter.result({
  "duration": 1087041500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid credentials",
      "offset": 49
    }
  ],
  "location": "MyStepDef.userShouldNotLoginSuccessfullyAndCanSee(String)"
});
formatter.result({
  "duration": 13110417700,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//span[text()\u003d\u0027Username cannot be empty\u0027]\"}\n  (Session info: chrome\u003d83.0.4103.61)\n  (Driver info: chromedriver\u003d83.0.4103.39 (ccbf011cb2d2b19b506d844400483861342c20cd-refs/branch-heads/4103@{#416}),platform\u003dWindows NT 10.0.10586 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-KRKJ7CDS\u0027, ip: \u0027192.168.1.95\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: org.openqa.selenium.remote.RemoteWebDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\ADMINI~1\\AppData\\L...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:49761}, handlesAlerts: true, hasMetadata: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), rotatable: false, setWindowRect: true, strictFileInteractability: false, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 83.0.4103.61, webStorageEnabled: true, webauthn:virtualAuthenticators: true, webdriver.remote.sessionid: 4cc162b9f3fb4d32845595b7704...}\nSession ID: 4cc162b9f3fb4d32845595b770402d84\n*** Element info: {Using\u003dxpath, value\u003d//span[text()\u003d\u0027Username cannot be empty\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.example.MyUtils.getElement(MyUtils.java:37)\r\n\tat org.example.Login_Page.reletedLoginMessageVerify(Login_Page.java:62)\r\n\tat org.example.MyStepDef.userShouldNotLoginSuccessfullyAndCanSee(MyStepDef.java:47)\r\n\tat ✽.Then user should not login successfully and can see  \"Invalid credentials\".(src/test/Resources/Features/Login_Page.feature:16)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 2264752700,
  "status": "passed"
});
formatter.before({
  "duration": 45405685100,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": ": User is Already on LoginPage.",
  "keyword": "Given "
});
formatter.match({
  "location": "MyStepDef.userIsAlreadyOnLoginPage()"
});
formatter.result({
  "duration": 137612600,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "User can not able to login with  invalid Username and invalid Password and shows related message.",
  "description": "",
  "id": "user-login-successfully-on-application;user-can-not-able-to-login-with--invalid-username-and-invalid-password-and-shows-related-message.;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    },
    {
      "line": 11,
      "name": "@Invalid"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "User enter invalid \"abccdf\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User enter \"Admin1234\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user click on Login Button.",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user should not login successfully and can see  \"Invalid credentials\".",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "abccdf",
      "offset": 20
    }
  ],
  "location": "MyStepDef.userEnterInvalid(String)"
});
formatter.result({
  "duration": 616203000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin1234",
      "offset": 12
    }
  ],
  "location": "MyStepDef.userEnter(String)"
});
formatter.result({
  "duration": 656312100,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDef.user_click_on_Login_Button()"
});
formatter.result({
  "duration": 784426200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid credentials",
      "offset": 49
    }
  ],
  "location": "MyStepDef.userShouldNotLoginSuccessfullyAndCanSee(String)"
});
formatter.result({
  "duration": 13079543700,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//span[text()\u003d\u0027Username cannot be empty\u0027]\"}\n  (Session info: chrome\u003d83.0.4103.61)\n  (Driver info: chromedriver\u003d83.0.4103.39 (ccbf011cb2d2b19b506d844400483861342c20cd-refs/branch-heads/4103@{#416}),platform\u003dWindows NT 10.0.10586 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-KRKJ7CDS\u0027, ip: \u0027192.168.1.95\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: org.openqa.selenium.remote.RemoteWebDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\ADMINI~1\\AppData\\L...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:49760}, handlesAlerts: true, hasMetadata: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), rotatable: false, setWindowRect: true, strictFileInteractability: false, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 83.0.4103.61, webStorageEnabled: true, webauthn:virtualAuthenticators: true, webdriver.remote.sessionid: 4575f8350acf415a978617dc1fd...}\nSession ID: 4575f8350acf415a978617dc1fd6e7fe\n*** Element info: {Using\u003dxpath, value\u003d//span[text()\u003d\u0027Username cannot be empty\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.example.MyUtils.getElement(MyUtils.java:37)\r\n\tat org.example.Login_Page.reletedLoginMessageVerify(Login_Page.java:62)\r\n\tat org.example.MyStepDef.userShouldNotLoginSuccessfullyAndCanSee(MyStepDef.java:47)\r\n\tat ✽.Then user should not login successfully and can see  \"Invalid credentials\".(src/test/Resources/Features/Login_Page.feature:16)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 266901600,
  "status": "passed"
});
formatter.before({
  "duration": 42090359600,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": ": User is Already on LoginPage.",
  "keyword": "Given "
});
formatter.match({
  "location": "MyStepDef.userIsAlreadyOnLoginPage()"
});
formatter.result({
  "duration": 120573600,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "User can not able to login with  invalid Username and invalid Password and shows related message.",
  "description": "",
  "id": "user-login-successfully-on-application;user-can-not-able-to-login-with--invalid-username-and-invalid-password-and-shows-related-message.;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    },
    {
      "line": 11,
      "name": "@Invalid"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "User enter invalid \"adsaf\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User enter \"\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user click on Login Button.",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user should not login successfully and can see  \"Password cannot be empty\".",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "adsaf",
      "offset": 20
    }
  ],
  "location": "MyStepDef.userEnterInvalid(String)"
});
formatter.result({
  "duration": 574865600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 12
    }
  ],
  "location": "MyStepDef.userEnter(String)"
});
formatter.result({
  "duration": 540962100,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDef.user_click_on_Login_Button()"
});
formatter.result({
  "duration": 202577400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password cannot be empty",
      "offset": 49
    }
  ],
  "location": "MyStepDef.userShouldNotLoginSuccessfullyAndCanSee(String)"
});
formatter.result({
  "duration": 13071298900,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//span[text()\u003d\u0027Username cannot be empty\u0027]\"}\n  (Session info: chrome\u003d83.0.4103.61)\n  (Driver info: chromedriver\u003d83.0.4103.39 (ccbf011cb2d2b19b506d844400483861342c20cd-refs/branch-heads/4103@{#416}),platform\u003dWindows NT 10.0.10586 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-KRKJ7CDS\u0027, ip: \u0027192.168.1.95\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: org.openqa.selenium.remote.RemoteWebDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\ADMINI~1\\AppData\\L...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:49761}, handlesAlerts: true, hasMetadata: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), rotatable: false, setWindowRect: true, strictFileInteractability: false, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 83.0.4103.61, webStorageEnabled: true, webauthn:virtualAuthenticators: true, webdriver.remote.sessionid: 187af751c24b4fbe803e09d7f55...}\nSession ID: 187af751c24b4fbe803e09d7f5510586\n*** Element info: {Using\u003dxpath, value\u003d//span[text()\u003d\u0027Username cannot be empty\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.example.MyUtils.getElement(MyUtils.java:37)\r\n\tat org.example.Login_Page.reletedLoginMessageVerify(Login_Page.java:62)\r\n\tat org.example.MyStepDef.userShouldNotLoginSuccessfullyAndCanSee(MyStepDef.java:47)\r\n\tat ✽.Then user should not login successfully and can see  \"Password cannot be empty\".(src/test/Resources/Features/Login_Page.feature:16)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 346488400,
  "status": "passed"
});
formatter.before({
  "duration": 51792276600,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": ": User is Already on LoginPage.",
  "keyword": "Given "
});
formatter.match({
  "location": "MyStepDef.userIsAlreadyOnLoginPage()"
});
formatter.result({
  "duration": 137160500,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "User can not able to login with  invalid Username and invalid Password and shows related message.",
  "description": "",
  "id": "user-login-successfully-on-application;user-can-not-able-to-login-with--invalid-username-and-invalid-password-and-shows-related-message.;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    },
    {
      "line": 11,
      "name": "@Invalid"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "User enter invalid \"\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User enter \"admin\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user click on Login Button.",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user should not login successfully and can see  \"Username cannot be empty\".",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 20
    }
  ],
  "location": "MyStepDef.userEnterInvalid(String)"
});
formatter.result({
  "duration": 594237300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 12
    }
  ],
  "location": "MyStepDef.userEnter(String)"
});
formatter.result({
  "duration": 680779900,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDef.user_click_on_Login_Button()"
});
formatter.result({
  "duration": 231901200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Username cannot be empty",
      "offset": 49
    }
  ],
  "location": "MyStepDef.userShouldNotLoginSuccessfullyAndCanSee(String)"
});
formatter.result({
  "duration": 16349782000,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//span[text()\u003d\u0027Invalid credentials\u0027]\"}\n  (Session info: chrome\u003d83.0.4103.61)\n  (Driver info: chromedriver\u003d83.0.4103.39 (ccbf011cb2d2b19b506d844400483861342c20cd-refs/branch-heads/4103@{#416}),platform\u003dWindows NT 10.0.10586 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-KRKJ7CDS\u0027, ip: \u0027192.168.1.95\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: org.openqa.selenium.remote.RemoteWebDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\ADMINI~1\\AppData\\L...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:49768}, handlesAlerts: true, hasMetadata: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), rotatable: false, setWindowRect: true, strictFileInteractability: false, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 83.0.4103.61, webStorageEnabled: true, webauthn:virtualAuthenticators: true, webdriver.remote.sessionid: 98ac939a497148fcb44ed1726e2...}\nSession ID: 98ac939a497148fcb44ed1726e268377\n*** Element info: {Using\u003dxpath, value\u003d//span[text()\u003d\u0027Invalid credentials\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.example.MyUtils.getElement(MyUtils.java:37)\r\n\tat org.example.Login_Page.reletedLoginMessageVerify(Login_Page.java:69)\r\n\tat org.example.MyStepDef.userShouldNotLoginSuccessfullyAndCanSee(MyStepDef.java:47)\r\n\tat ✽.Then user should not login successfully and can see  \"Username cannot be empty\".(src/test/Resources/Features/Login_Page.feature:16)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 247922100,
  "status": "passed"
});
formatter.before({
  "duration": 33484290900,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": ": User is Already on LoginPage.",
  "keyword": "Given "
});
formatter.match({
  "location": "MyStepDef.userIsAlreadyOnLoginPage()"
});
formatter.result({
  "duration": 126255600,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "User can not able to login with  invalid Username and invalid Password and shows related message.",
  "description": "",
  "id": "user-login-successfully-on-application;user-can-not-able-to-login-with--invalid-username-and-invalid-password-and-shows-related-message.;;8",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    },
    {
      "line": 11,
      "name": "@Invalid"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "User enter invalid \"login123\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User enter \"admin123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user click on Login Button.",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user should not login successfully and can see  \"Invalid credentials\".",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "login123",
      "offset": 20
    }
  ],
  "location": "MyStepDef.userEnterInvalid(String)"
});
formatter.result({
  "duration": 631387600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin123",
      "offset": 12
    }
  ],
  "location": "MyStepDef.userEnter(String)"
});
formatter.result({
  "duration": 648355900,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDef.user_click_on_Login_Button()"
});
formatter.result({
  "duration": 733482000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid credentials",
      "offset": 49
    }
  ],
  "location": "MyStepDef.userShouldNotLoginSuccessfullyAndCanSee(String)"
});
formatter.result({
  "duration": 13036505400,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//span[text()\u003d\u0027Username cannot be empty\u0027]\"}\n  (Session info: chrome\u003d83.0.4103.61)\n  (Driver info: chromedriver\u003d83.0.4103.39 (ccbf011cb2d2b19b506d844400483861342c20cd-refs/branch-heads/4103@{#416}),platform\u003dWindows NT 10.0.10586 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-KRKJ7CDS\u0027, ip: \u0027192.168.1.95\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: org.openqa.selenium.remote.RemoteWebDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\ADMINI~1\\AppData\\L...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:49759}, handlesAlerts: true, hasMetadata: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), rotatable: false, setWindowRect: true, strictFileInteractability: false, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 83.0.4103.61, webStorageEnabled: true, webauthn:virtualAuthenticators: true, webdriver.remote.sessionid: b8b284b527984dacb3c94701e53...}\nSession ID: b8b284b527984dacb3c94701e5332176\n*** Element info: {Using\u003dxpath, value\u003d//span[text()\u003d\u0027Username cannot be empty\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.example.MyUtils.getElement(MyUtils.java:37)\r\n\tat org.example.Login_Page.reletedLoginMessageVerify(Login_Page.java:62)\r\n\tat org.example.MyStepDef.userShouldNotLoginSuccessfullyAndCanSee(MyStepDef.java:47)\r\n\tat ✽.Then user should not login successfully and can see  \"Invalid credentials\".(src/test/Resources/Features/Login_Page.feature:16)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 269456400,
  "status": "passed"
});
formatter.before({
  "duration": 50380452300,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": ": User is Already on LoginPage.",
  "keyword": "Given "
});
formatter.match({
  "location": "MyStepDef.userIsAlreadyOnLoginPage()"
});
formatter.result({
  "duration": 133764200,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "User can not able to login with  invalid Username and invalid Password and shows related message.",
  "description": "",
  "id": "user-login-successfully-on-application;user-can-not-able-to-login-with--invalid-username-and-invalid-password-and-shows-related-message.;;9",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    },
    {
      "line": 11,
      "name": "@Invalid"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "User enter invalid \"Admin\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User enter \"\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user click on Login Button.",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user should not login successfully and can see  \"Password cannot be empty\".",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 20
    }
  ],
  "location": "MyStepDef.userEnterInvalid(String)"
});
formatter.result({
  "duration": 826020600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 12
    }
  ],
  "location": "MyStepDef.userEnter(String)"
});
formatter.result({
  "duration": 668842800,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDef.user_click_on_Login_Button()"
});
formatter.result({
  "duration": 341638500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password cannot be empty",
      "offset": 49
    }
  ],
  "location": "MyStepDef.userShouldNotLoginSuccessfullyAndCanSee(String)"
});
formatter.result({
  "duration": 13068428500,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//span[text()\u003d\u0027Username cannot be empty\u0027]\"}\n  (Session info: chrome\u003d83.0.4103.61)\n  (Driver info: chromedriver\u003d83.0.4103.39 (ccbf011cb2d2b19b506d844400483861342c20cd-refs/branch-heads/4103@{#416}),platform\u003dWindows NT 10.0.10586 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-KRKJ7CDS\u0027, ip: \u0027192.168.1.95\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: org.openqa.selenium.remote.RemoteWebDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\ADMINI~1\\AppData\\L...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:49764}, handlesAlerts: true, hasMetadata: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), rotatable: false, setWindowRect: true, strictFileInteractability: false, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 83.0.4103.61, webStorageEnabled: true, webauthn:virtualAuthenticators: true, webdriver.remote.sessionid: 156458b57f3640949e4e0372f43...}\nSession ID: 156458b57f3640949e4e0372f4361358\n*** Element info: {Using\u003dxpath, value\u003d//span[text()\u003d\u0027Username cannot be empty\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.example.MyUtils.getElement(MyUtils.java:37)\r\n\tat org.example.Login_Page.reletedLoginMessageVerify(Login_Page.java:62)\r\n\tat org.example.MyStepDef.userShouldNotLoginSuccessfullyAndCanSee(MyStepDef.java:47)\r\n\tat ✽.Then user should not login successfully and can see  \"Password cannot be empty\".(src/test/Resources/Features/Login_Page.feature:16)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 2225415100,
  "status": "passed"
});
});