const SELECTORS = {
  TEST_CASE_NAME: "//div[@class='content-header-title page_title']",
  SUCCESS_ADDED_MESSAGE_DIV: "//div[@class='message message-success']",
};

const getDisplayedValue = async (label) => {
  const elementSelector = `//label[normalize-space(text())="${label}"]/..`;
  const value = await $(elementSelector).getText();
  console.log(typeof value);
  const replacedValue = value.toString().replace("\n", "").replace(label, "");

  return replacedValue;
};

const getTestCaseName = async () => {
  return await $(SELECTORS.TEST_CASE_NAME).getText();
};

const congratsMessage = async () => {
  await $(SELECTORS.SUCCESS_ADDED_MESSAGE_DIV).getText();
};

export const casesViewPage = {
  congratsMessage,
  getTestCaseName,
  getDisplayedValue,
};
