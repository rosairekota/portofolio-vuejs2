const selectElements = (element, selectedAll = false) => {
  if (selectedAll) {
    return [...document.querySelectorAll(element.trim())];
  }
  return document.querySelector(element.trim());
};

export { selectElements };
