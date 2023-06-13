import allure from "allure-commandline";

//TODO: Implement screenshots after error in allure reports

export const config = {
  runner: "local",
  reporters: [
    [
      "allure",
      {
        outputDir: "allure-results",
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: true,
      },
    ],
  ],

  specs: ["./tests/**/*.spec.js"],
  exclude: [
    // 'path/to/excluded/files'
  ],
  maxInstances: 1,
  capabilities: [
    {
      browserName: "chrome",
    },
  ],
  logLevel: "error",
  bail: 0,
  baseUrl: "https://avesear.testrail.io//index.php?/auth/login",
  waitforTimeout: 50000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,

  afterTest: async function (test) {
    console.log("AFTER TEST");
    console.log({ test });
    const screenshot = await browser.takeScreenshot();
    console.log("SCREENSHOT HERE", screenshot);
    if (test.error !== undefined) {
      const screenshot = await browser.takeScreenshot();
      console.log("SCREENSHOT HERE", screenshot);
    }
  },

  services: ["chromedriver"],
  framework: "mocha",
  mochaOpts: {
    ui: "bdd",
    timeout: 60000,
  },
};
