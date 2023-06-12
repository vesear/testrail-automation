import { projectsSummary } from "./components/projectsSummary.js";

const SELECTORS = {
  USERNAME_BTN: "#navigation-user",
  LOG_OUT_BTN: "#navigation-user-logout",
  ADD_FIRST_PROJECT_BTN: "#navigation-empty-addproject",
  CONGRATS_MESSAGE: "//div[@class='empty-title']",
  PROJECTS_LIST_DIV: "#content_container",
  ADD_PROJECT_BTN: "#sidebar-projects-add",
  ADDED_PROJECT_MESSAGE: "//div[@class='message message-success']",
};

const getCongratulationsMessage = () => $(SELECTORS.CONGRATS_MESSAGE).getText();

const logOut = async () => {
  await $(SELECTORS.USERNAME_BTN).click();
  await $(SELECTORS.LOG_OUT_BTN).click();
};

const clickAddFirstProjectButton = async () => {
  await $(SELECTORS.ADD_FIRST_PROJECT_BTN).click();
};

const clickAddProjectButton = async () => {
  await $(SELECTORS.ADD_PROJECT_BTN).click();
};

export const dashboardPage = {
  logOut,
  projectsSummary,
  getCongratulationsMessage,
  clickAddFirstProjectButton,
  clickAddProjectButton,
};
