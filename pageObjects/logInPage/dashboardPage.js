const SELECTORS = {
  USERNAME_BTN: "#navigation-user",
  LOG_OUT_BTN: "#navigation-user-logout",
};

const logOut = async () => {
  await $(SELECTORS.USERNAME_BTN).click();
  await $(SELECTORS.LOG_OUT_BTN).click();
};

export const dashboardPage = {
  logOut,
};
