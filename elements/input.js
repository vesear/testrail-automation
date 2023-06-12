const input = async (label, value) => {
  const elementSelector = `//label[normalize-space(text())="${label}"]`;
  const inputSelector = `${elementSelector}//following-sibling::input`;
  await $(inputSelector).setValue(value);
};

export default input;
