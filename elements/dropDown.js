// Pattern Element Wrapper (обертка)
const dropDown = (label) => {
  const elementSelector = `//label[normalize-space(text())="${label}"]`;
  const arrowSelector = `${elementSelector}/..//b`;

  const selectValue = async (value) => {
    await $(arrowSelector).click();
    const optionSelector = `${elementSelector}//following-sibling::div//li[text()="${value}"]`;
    await $(optionSelector).click();
  };

  return {
    selectValue,
  };
};

export default dropDown;
