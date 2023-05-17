import { projectsSummary } from "./components/projectsSummary.js";

const SELECTORS = {
  USERNAME_BTN: "#navigation-user",
  LOG_OUT_BTN: "#navigation-user-logout",
  ADD_FIRST_PROJECT_BTN: "#navigation-empty-addproject",
  NAME_INPUT: "#name",
  ANNOUNCEMENT_INPUT: "#announcement",
  ADD_PROJECT_BTN_ACCEPT: "#accept",
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

const createProject = async ({ name, announcement }) => {
  await $(SELECTORS.NAME_INPUT).setValue(name);
  await $(SELECTORS.ANNOUNCEMENT_INPUT).setValue(announcement);
  await $(SELECTORS.ADD_PROJECT_BTN_ACCEPT).click();
};

const createFirstProject = async (project) => {
  await $(SELECTORS.ADD_FIRST_PROJECT_BTN).click();
  await createProject(project);
};

const createNotFirstProject = async (project) => {
  await $(SELECTORS.ADD_PROJECT_BTN).click();
  await createProject(project);
};

export const dashboardPage = {
  logOut,
  createFirstProject,
  createNotFirstProject,
  projectsSummary,
  getCongratulationsMessage,
};
