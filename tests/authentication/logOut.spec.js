import { expect } from "chai";
import { CONFIG } from "../../config.js";
import { logInPage } from "../../pageObjects/logInPage/logInPage.js";
import { dashboardPage } from "../../pageObjects/logInPage/dashboardPage.js";

const { ADMIN } = CONFIG;
describe("Log Out from TestRail ", async () => {
  before("Login to app", async () => {
    await logInPage.openLogInPage();
    await logInPage.logIn(ADMIN.USERNAME, ADMIN.PASSWORD);
  });
  it("User should log out from TestRail", async () => {
    await dashboardPage.logOut();

    expect(await logInPage.openLogInPage()).to.be.true;
  });
});
