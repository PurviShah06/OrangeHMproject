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
      "comments": [
        {
          "line": 19,
          "value": "#      |                  | admin123         | Username cannot be empty |"
        },
        {
          "line": 20,
          "value": "#      |                  |                  | Username cannot be empty |"
        },
        {
          "line": 21,
          "value": "#      | Admin            | admin1234        | Invalid credentials      |"
        },
        {
          "line": 22,
          "value": "#      | abccdf           | Admin1234        | Invalid credentials      |"
        },
        {
          "line": 23,
          "value": "#     | adsaf            |                  | Password cannot be empty |"
        },
        {
          "line": 24,
          "value": "#   |                  | admin            | Username cannot be empty |"
        }
      ],
      "cells": [
        "login123",
        "admin123",
        "Invalid credentials"
      ],
      "line": 25,
      "id": "user-login-successfully-on-application;user-can-not-able-to-login-with--invalid-username-and-invalid-password-and-shows-related-message.;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 7524090700,
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
  "duration": 138535900,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 19,
      "value": "#      |                  | admin123         | Username cannot be empty |"
    },
    {
      "line": 20,
      "value": "#      |                  |                  | Username cannot be empty |"
    },
    {
      "line": 21,
      "value": "#      | Admin            | admin1234        | Invalid credentials      |"
    },
    {
      "line": 22,
      "value": "#      | abccdf           | Admin1234        | Invalid credentials      |"
    },
    {
      "line": 23,
      "value": "#     | adsaf            |                  | Password cannot be empty |"
    },
    {
      "line": 24,
      "value": "#   |                  | admin            | Username cannot be empty |"
    }
  ],
  "line": 25,
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
  "duration": 196414900,
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
  "duration": 180325600,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDef.user_click_on_Login_Button()"
});
formatter.result({
  "duration": 475255600,
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
  "duration": 30825000,
  "status": "passed"
});
formatter.after({
  "duration": 68386800,
  "status": "passed"
});
});