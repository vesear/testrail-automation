import { logInPage } from "../../pageObjects/auth/logInPage.js";
import { dashboardPage } from "../../pageObjects/dashboard/dashboardPage.js";
import { projectOverviewPage } from "../../pageObjects/projects/overview/projectsOveerviewPage.js";
import { viewPage } from "../../pageObjects/suites/viewPage.js";
import { createTestCase } from "../../pageObjects/cases/addTestCasePage.js";
import { casesViewPage } from "../../pageObjects/cases/casesViewPage.js";
import { expect } from "chai";
import { CONFIG } from "../../config.js";
import { projectServices } from "../../services/api/projectServices.js";
import { generateProjectData } from "../../utils/generateProjectData.js";

const auth = {
  username: CONFIG.USER.USERNAME,
  password: CONFIG.USER.PASSWORD,
};

const project = {
  name: generateProjectData(),
  announcement: generateProjectData(),
  show_announcement: true,
  suite_mode: 1,
};

const testCase = {
  title: new Date().toISOString(),
  template: "Exploratory Session",
  type: "Regression",
  priority: "Critical",
  estimate: "10",
  references: "MARYIA",
  automationType: " Ranorex",
};

describe("Create test case in created project", async () => {
  before("Login to app", async () => {
    await logInPage.openLogInPage();
    await logInPage.logIn(CONFIG.USER.USERNAME, CONFIG.USER.PASSWORD);
    await projectServices.deleteAllProjects(auth);
    await projectServices.addProject(project, auth);
  });
  it("User should create testcase ", async () => {
    await dashboardPage.open();
    await dashboardPage.projectsSummary.openProject(project.name);
    await projectOverviewPage.openTestCasesTab();
    await viewPage.addTestCaseButtonClick();
    await createTestCase(testCase);

    const successfullyAddedTestCaseMessage =
      "Successfully added the new test case. Add another";
    expect(await casesViewPage.congratsMessage()).to.be.eql(
      successfullyAddedTestCaseMessage
    );

    const type = await casesViewPage.getDisplayedValue("Type");
    expect(type).to.eql(testCase.type);

    const priority = await casesViewPage.getDisplayedValue("Priority");
    expect(priority).to.eql(testCase.priority);

    const estimate = await casesViewPage.getDisplayedValue("Estimate");
    expect(estimate).to.eql(testCase.estimate + " minutes");

    const references = await casesViewPage.getDisplayedValue("References");
    expect(references).to.eql(testCase.references);

    const automationType = await casesViewPage.getDisplayedValue(
      "Automation Type"
    );
    const typeWithoutSpace = automationType.trim();
    expect(automationType).to.eql(typeWithoutSpace);

    const testCaseName = await casesViewPage.getTestCaseName();
    expect(testCaseName).to.eql(testCase.title);
  });
});
