const SELECTORS = {
  ADD_TEST_CASE_BTN: '//a[normalize-space(text())="Add Test Case"]',
};

const addTestCaseButtonClick = async () =>
  await $(SELECTORS.ADD_TEST_CASE_BTN).click();

export const viewPage = {
  addTestCaseButtonClick,
};
