import { credentials } from "../../credentials.js";

const SELECTORS = {
  LOG_IN_FORM: "//div[@id='form-inner']",
  NAME_INPUT: "//input[@id='name']",
  PASSWORD_INPUT: "//input[@id='password']",
  LOG_IN_BUTTON: "//button[@id='button_primary']",
  USERNAME_BUTTON: "//span[@class='navigation-username']", //Prasti patom peremeschy na dashboard page selektars
};

const openLogInPage = async () => {
  await browser.url("");
  await $(SELECTORS.LOG_IN_FORM).isDisplayed();
};

const logIn = async () => {
  await $(SELECTORS.NAME_INPUT).setValue(credentials.name);
  await $(SELECTORS.PASSWORD_INPUT).setValue(credentials.password);
  await $(SELECTORS.LOG_IN_BUTTON).click();
};

const openDashboardPage = async () => {
  return $(SELECTORS.USERNAME_BUTTON).getText();
};

export const METHODS = {
  openLogInPage,
  logIn,
  openDashboardPage,
};
