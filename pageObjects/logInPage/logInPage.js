const SELECTORS = {
  LOG_IN_FORM: "#form-inner",
  NAME_INPUT: "#name",
  PASSWORD_INPUT: "#password",
  LOG_IN_BUTTON: "#button_primary",
  USERNAME_BUTTON: "//span[@class='navigation-username']", //Prasti patom peremeschy na dashboard page selektars
};

const openLogInPage = async () => {
  await browser.url("");
  return $(SELECTORS.LOG_IN_FORM).isDisplayed();
};

const logIn = async (name, password) => {
  await $(SELECTORS.NAME_INPUT).setValue(name);
  await $(SELECTORS.PASSWORD_INPUT).setValue(password);
  await $(SELECTORS.LOG_IN_BUTTON).click();
};

const getUserName = async () => {
  return $(SELECTORS.USERNAME_BUTTON).getText();
};

export const logInPage = {
  openLogInPage,
  logIn,
  getUserName,
};
