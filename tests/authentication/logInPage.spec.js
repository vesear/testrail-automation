import { logInPage } from "../../pageObjects/logInPage/logInPage.js";
import { expect } from "chai";
import { CONFIG } from "../../config.js";

const { ADMIN } = CONFIG;

describe("Log in to TestRail", async () => {
  it("User should log in with walid credentials ", async () => {
    await logInPage.openLogInPage();

    expect(await logInPage.isPageOpened()).to.be.true;

    await logInPage.logIn(ADMIN.USERNAME, ADMIN.PASSWORD);
    await logInPage.logIn(ADMIN.USERNAME, ADMIN.PASSWORD);
    const currentUserName = await logInPage.getUserName();

    expect(currentUserName).to.be.eql(ADMIN.NAME + " " + ADMIN.SURNAME);
  });
});