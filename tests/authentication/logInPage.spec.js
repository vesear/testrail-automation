import { logInPage } from "../../pageObjects/auth/logInPage.js";
import { expect } from "chai";
import "dotenv";
import { CONFIG } from "../../config.js";

describe("Log in to TestRail", async () => {
  it("User should log in with walid credentials ", async () => {
    await logInPage.openLogInPage();

    expect(await logInPage.isPageOpened()).to.be.true;

    await logInPage.logIn(CONFIG.USERNAME, CONFIG.PASSWORD);
    const currentUserName = await logInPage.getUserName();

    expect(currentUserName).to.be.eql(
      process.env.NAME + " " + process.env.SURNAME
    );
  });
});
