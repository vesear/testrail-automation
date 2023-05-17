const SELECTORS = {
  PROJECT_NAME_TITLE: '//div[@class="content-header-title page_title"]',
  PROJECT_ANNOUNCEMENT_TITLE: '//div[@class="markdown"]',
};

const getProjectName = async () =>
  await $(SELECTORS.PROJECT_NAME_TITLE).getText();

const getAnnouncementTitle = async () =>
  await $(SELECTORS.PROJECT_ANNOUNCEMENT_TITLE).getText();

export const projectOverviewPage = {
  getProjectName,
  getAnnouncementTitle,
};
