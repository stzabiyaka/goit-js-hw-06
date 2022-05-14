const buttonRef = document.querySelector('.change-color');

const colorDisplayRef = document.querySelector('.color');

const bodyRef = document.body;

const changeColor = () => {
  const color = getRandomHexColor();
  bodyRef.style.backgroundColor = color;
  colorDisplayRef.textContent = color;
};

buttonRef.addEventListener('click', changeColor);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
