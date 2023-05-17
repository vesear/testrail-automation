import { CONFIG } from "../../config.js";
import { logInPage } from "../../pageObjects/logInPage/logInPage.js";
import { dashboardPage } from "../../pageObjects/dashboardPage/dashboardPage.js";
import { FIRST_PROJECT_CONGRATS_MESSAGE } from "../../pageObjects/dashboardPage/dashboardPageConstants.js";
import { expect } from "chai";
import { projectOverviewPage } from "../../pageObjects/projectOverviewPage/projectOverviewPage.js";
import { projectsSummary } from "../../pageObjects/dashboardPage/components/projectsSummary.js";

const { ADMIN } = CONFIG;

describe("Create first project only ", async () => {
  before("Login to app", async () => {
    await logInPage.openLogInPage();
    await logInPage.logIn(ADMIN.USERNAME, ADMIN.PASSWORD);
  });
  it("User should create first project", async () => {
    const project = {
      name: "PADLA",
      announcement: "Padla",
    };
    await dashboardPage.createFirstProject(project);
    const congratulationMessage =
      await dashboardPage.getCongratulationsMessage();

    expect(congratulationMessage).to.be.eql(FIRST_PROJECT_CONGRATS_MESSAGE);
    expect(await projectOverviewPage.getProjectName()).to.be.eql(project.name);
    expect(await projectsSummary.isProjectDisplayed(project.name)).to.be.true;
  });
});
