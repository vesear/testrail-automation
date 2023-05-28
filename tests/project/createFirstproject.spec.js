import { CONFIG } from "../../config.js";
import { logInPage } from "../../pageObjects/logInPage/logInPage.js";
import { dashboardPage } from "../../pageObjects/dashboardPage/dashboardPage.js";
import { FIRST_PROJECT_CONGRATS_MESSAGE } from "../../pageObjects/dashboardPage/dashboardPageConstants.js";
import { expect } from "chai";
import { projectOverviewPage } from "../../pageObjects/projectOverviewPage/projectOverviewPage.js";
import { projectsSummary } from "../../pageObjects/dashboardPage/components/projectsSummary.js";
import { createProjectPage } from "../../pageObjects/createProjectPage/createProjectPage.js";

const { ADMIN } = CONFIG;

describe("Create first project  ", async () => {
  before("Login to app", async () => {
    await logInPage.openLogInPage();
    await logInPage.logIn(ADMIN.USERNAME, ADMIN.PASSWORD);
  });
  it("User should create first project", async () => {
    const project = {
      name: "MARIA",
      announcement: "PAPUGA",
      showAnnouncement: true,
    };
    await dashboardPage.clickAddFirstProjectButton();
    await createProjectPage.createFirstProject(project);
    const congratulationMessage =
      await dashboardPage.getCongratulationsMessage();
    if (project.showAnnouncement) {
      expect(await projectOverviewPage.getAnnouncementTitle()).to.be.eql(
        project.announcement
      );
    } else {
      expect((await projectOverviewPage.getAnnouncementTitle()) === "");
    }

    expect(congratulationMessage).to.be.eql(FIRST_PROJECT_CONGRATS_MESSAGE);
    expect(await projectOverviewPage.getProjectName()).to.be.eql(project.name);
    expect(await projectsSummary.isProjectDisplayed(project.name)).to.be.true;
  });
});
