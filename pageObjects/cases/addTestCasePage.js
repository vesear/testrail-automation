import dropDown from "../../elements/dropDown.js";
import input from "../../elements/input.js";

const SELECTORS = {
  REFERENCE_INPUT: '//label[@for="refs"]//following-sibling::input',
  TYPE: {
    SELECT_MENU_ICON: "//div[@id='type_id_chzn']//b",
  },
  ADD_TEST_CASE_BUTTON: "#accept",
};

export const createTestCase = async (testCase) => {
  const {
    title,
    template,
    type,
    priority,
    estimate,
    references,
    automationType,
  } = testCase;

  await input("Title", title);
  await dropDown("Template").selectValue(template);
  await dropDown("Type").selectValue(type);
  await dropDown("Priority").selectValue(priority);
  await dropDown("Automation Type").selectValue(automationType);
  await input("Estimate", estimate);
  await fillReferences(references);
  await $(SELECTORS.TYPE.SELECT_MENU_ICON).click();
  await browser.scroll(10, 10);
  await $(SELECTORS.ADD_TEST_CASE_BUTTON).click();
};

async function fillReferences(references) {
  await $(SELECTORS.REFERENCE_INPUT).setValue(references);
}
