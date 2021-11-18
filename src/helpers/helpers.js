const selectElements = (element, selectedAll = false) => {
  if (selectedAll) {
    return [...document.querySelectorAll(element.trim())];
  }
  return document.querySelector(element.trim());
};

const scrollUp = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};
export { selectElements, scrollUp };
