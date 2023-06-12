const SELECTORS = {
  TEST_CASE_NAME: "//div[@class='content-header-title page_title']",
  SUCCESS_ADDED_MESSAGE_DIV: "//div[@class='message message-success']",
};

const getDisplayedValue = async (label) => {
  const elementSelector = `//label[normalize-space(text())="${label}"]/..`;
  const value = await $(elementSelector).getText();
  return value.toString().replace("\n", "").replace(label, "");
};

const getTestCaseName = async () => {
  return await $(SELECTORS.TEST_CASE_NAME).getText();
};

const congratsMessage = async () => {
  return await $(SELECTORS.SUCCESS_ADDED_MESSAGE_DIV).getText();

};

export const casesViewPage = {
  congratsMessage,
  getTestCaseName,
  getDisplayedValue,
};
