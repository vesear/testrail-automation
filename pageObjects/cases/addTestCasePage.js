import dropDown from "../../elements/dropDown.js";
import input from "../../elements/input.js";

const SELECTORS = {
  TITLE_INPUT: "#title",
  REFERENCE_INPUT: '//label[@for="refs"]//following-sibling::input',
  PRECONDITIONS: "#custom_preconds",
  STEPS: "#custom_steps",
  EXPECTED_RESULT: "#custom_expected",
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

  await $(SELECTORS.TITLE_INPUT).setValue(title);

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
