const isProjectDisplayed = (name) => {
  const selector = `//a[text()='${name}']`;
  return $(selector).isDisplayed();
};

const openProject = async (name) => {
  const selector = `//div[contains(@class,"summary-title")]/a[text()="${name}"]`;
  await $(selector).click();
};

export const projectsSummary = {
  isProjectDisplayed,
  openProject,
};
