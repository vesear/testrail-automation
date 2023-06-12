// DEV NOTE: We can name with capital letter as it is component/page

const clickMenuItem = async (itemId) => {
  await $(`#${itemId}`).click();
};

const Header = {
  clickMenuItem,
};

export default Header;
