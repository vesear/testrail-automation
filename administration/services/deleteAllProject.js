const SELECTORS = {
  DELETE_PROJECT_ICON: "//div[@class='icon-small-delete']",
  CONFIRM_DELETE_CHECKBOX: '//*[@id="dialog-ident-deleteDialog"]//input',
  OK_BUTTON:
    '//*[@id="dialog-ident-deleteDialog"]//a[contains(@class,"button-ok")]',
};

const deleteAllProject = async () => {
  await browser.url("index.php?/admin/projects/overview");
  while (true) {
    const isDeleteProjectIconDisplayed = await $(
      SELECTORS.DELETE_PROJECT_ICON
    ).isDisplayed();
    if (isDeleteProjectIconDisplayed) {
      await $(SELECTORS.DELETE_PROJECT_ICON).click();
      await $(SELECTORS.CONFIRM_DELETE_CHECKBOX).click();
      await $(SELECTORS.OK_BUTTON).click();
    } else {
      break;
    }
  }
};

export default deleteAllProject;
