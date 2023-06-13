import { expect } from "chai";
import { logInPage } from "../../pageObjects/auth/logInPage.js";
import { dashboardPage } from "../../pageObjects/dashboard/dashboardPage.js";
import { CONFIG } from "../../config.js";

describe("Log Out from TestRail", async () => {
  before("Login to app", async () => {
    await logInPage.openLogInPage();
    await logInPage.logIn(CONFIG.USER.USERNAME, CONFIG.USER.PASSWORD);
  });
  it("User should log out from TestRail", async () => {
    await dashboardPage.logOut();
    await browser.pause(5000);
    expect(await logInPage.isPageOpened()).to.be.true;
  });
});
