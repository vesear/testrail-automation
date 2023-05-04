import { logInPage } from "../pageObjects/logInPage/logInPage.js";
import { expect } from "chai";
import { CONFIG } from "../config.js";

describe("Log in to TestRail", async () => {
  it("User should log in with walid credentials ", async () => {
    expect(await logInPage.openLogInPage()).to.be.true;

    await logInPage.logIn(CONFIG.ADMIN.USERNAME, CONFIG.ADMIN.PASSWORD);
    const openedPage = await logInPage.getUserName();

    expect(openedPage).to.be.eql(
      CONFIG.ADMIN.NAME + " " + CONFIG.ADMIN.SURNAME
    );
  });
});
