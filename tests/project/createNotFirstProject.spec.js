import { logInPage } from "../../pageObjects/auth/logInPage.js";
import { dashboardPage } from "../../pageObjects/dashboard/dashboardPage.js";
import { expect } from "chai";
import deleteAllProject from "../../administration/services/deleteAllProject.js";
import { createProjectPage } from "../../pageObjects/admin/projects/addPage.js";
import { projectOverviewPage } from "../../pageObjects/projects/overview/projectsOveerviewPage.js";
import { CONFIG } from "../../config.js";

const generateUniqueName = () => new Date().toISOString();

describe("Create not first project", async () => {
  before("Login to app", async () => {
    await logInPage.openLogInPage();
    await logInPage.logIn(CONFIG.USER.USERNAME, CONFIG.USER.PASSWORD);
    await deleteAllProject();
  });

  beforeEach(async () => {
    await browser.url("index.php?/dashboard");
  });

  const projects = [
    {
      announcement: "You will see me",
      showAnnouncement: true,
    },
    {
      announcement: "SDFCVNBMN",
      showAnnouncement: false,
    },
  ];

  projects.forEach(({ announcement, showAnnouncement }) => {
    it("User should create project (not first project) ", async () => {
      const expectedName = generateUniqueName();
      await dashboardPage.clickAddProjectButton();
      await createProjectPage.createProject({
        name: expectedName,
        announcement,
        showAnnouncement,
      });
      await browser.url("index.php?/dashboard");
      await dashboardPage.projectsSummary.openProject(expectedName);
      await validateProject(expectedName, announcement, showAnnouncement);
    });
  });
});

const validateProject = async (name, announcement, showAnnouncement) => {
  const actualProjectName = await projectOverviewPage.getProjectName();

  expect(actualProjectName).to.be.eql(name);

  const actualAnnouncement = await projectOverviewPage.getAnnouncementTitle();
  if (showAnnouncement) {
    expect(actualAnnouncement).to.be.eql(announcement);
  } else {
    expect(actualAnnouncement).to.be.eql("");
  }
};
