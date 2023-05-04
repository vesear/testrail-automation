import { METHODS } from "../pageObjects/logInPage/logInPage.js";
import { expect } from "chai";

describe("Log in to TestRail", async () => {
  it("User should log in with walid credentials ", async () => {
    await METHODS.openLogInPage();
    await METHODS.logIn();
    const openedPage = await METHODS.openDashboardPage();

    expect(openedPage).to.be.eql("Artyom Veselko");
  });
});
