import { CONFIG } from "../../config.js";
import { logInPage } from "../../pageObjects/logInPage/logInPage.js";
import { dashboardPage } from "../../pageObjects/dashboardPage/dashboardPage.js";

const { ADMIN } = CONFIG;

describe("Create not first project ", async () => {
  before("Login to app", async () => {
    await logInPage.openLogInPage();
    await logInPage.logIn(ADMIN.USERNAME, ADMIN.PASSWORD);
  });
  it("User should create project(not first project) ", async () => {
    await dashboardPage.createNotFirstProject({
      name: "Artyom",
      announcement: "Veselko",
    });
  });
});
