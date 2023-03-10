function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

const bodyEl = document.querySelector('body');
const colorEl = document.querySelector('.color');
const buttonChangeColorEl = document.querySelector('.change-color');

buttonChangeColorEl.addEventListener('click', () => {
  const hexColor = getRandomHexColor();

  bodyEl.style.backgroundColor = hexColor;
    colorEl.textContent = hexColor;
});