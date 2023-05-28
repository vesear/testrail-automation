const SELECTORS = {
  NAME_INPUT: "#name",
  ANNOUNCEMENT_INPUT: "#announcement",
  SHOW_ANNOUNCEMENT_CHECKBOX: "#show_announcement",
  ADD_PROJECT_BTN_ACCEPT: "#accept",
};

const createProject = async ({ name, announcement, showAnnouncement }) => {
  await $(SELECTORS.NAME_INPUT).setValue(name);
  await $(SELECTORS.ANNOUNCEMENT_INPUT).setValue(announcement);
  if (showAnnouncement) {
    await $(SELECTORS.SHOW_ANNOUNCEMENT_CHECKBOX).click();
  }
  await $(SELECTORS.ADD_PROJECT_BTN_ACCEPT).click();
};

const createFirstProject = async (project) => {
  await createProject(project);
};

const createNotFirstProject = async (project) => {
  await createProject(project);
};

export const createProjectPage = {
  createFirstProject,
  createNotFirstProject,
};
