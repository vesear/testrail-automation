import { logInPage } from "../../pageObjects/auth/logInPage.js";
import { dashboardPage } from "../../pageObjects/dashboard/dashboardPage.js";
import { expect } from "chai";
import { createProjectPage } from "../../pageObjects/admin/projects/addPage.js";
import { projectOverviewPage } from "../../pageObjects/projects/overview/projectsOveerviewPage.js";
import { projectsSummary } from "../../pageObjects/dashboard/components/projectsSummary.js";
import deleteAllProject from "../../administration/services/deleteAllProject.js";
import { FIRST_PROJECT_CONGRATS_MESSAGE } from "../../pageObjects/dashboard/dashboardPageConstants.js";
import { CONFIG } from "../../config.js";

const project = {
  name: "MARIA",
  announcement: "PAPUGA",
  showAnnouncement: false,
};

describe("Create first project", async () => {
  before("Login to app", async () => {
    await logInPage.openLogInPage();
    await logInPage.logIn(CONFIG.USERNAME, CONFIG.PASSWORD);
    await deleteAllProject();
    await dashboardPage.open();
  });
  it("User should create first project", async () => {
    await dashboardPage.clickAddFirstProjectButton();
    await createProjectPage.createProject(project);
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
