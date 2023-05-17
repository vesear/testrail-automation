const isProjectDisplayed = (name) => {
  const selector = `//a[text()='${name}']`;
  return $(selector).isDisplayed();
};

export const projectsSummary = {
  isProjectDisplayed,
};
