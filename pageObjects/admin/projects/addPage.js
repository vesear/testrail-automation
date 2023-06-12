import input from "../../../elements/input.js";

const SELECTORS = {
  NAME_INPUT: "#name",
  ANNOUNCEMENT_INPUT: "#announcement",
  SHOW_ANNOUNCEMENT_CHECKBOX: "#show_announcement",
  ADD_PROJECT_BTN_ACCEPT: "#accept",
};

const create = async ({ name, announcement, showAnnouncement }) => {
  await input("Name", name);
  await $(SELECTORS.ANNOUNCEMENT_INPUT).setValue(announcement);
  if (showAnnouncement) {
    await $(SELECTORS.SHOW_ANNOUNCEMENT_CHECKBOX).click();
  }
  await $(SELECTORS.ADD_PROJECT_BTN_ACCEPT).click();
};

const createProject = async (project) => {
  await create(project);
};

export const createProjectPage = {
  createProject,
};
