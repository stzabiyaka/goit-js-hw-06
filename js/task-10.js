const inputRef = document.getElementById('controls').firstElementChild;
const collectionRef = document.getElementById('boxes');
const createBtnRef = document.querySelector('button[data-create]');
const destroyBtnRef = document.querySelector('button[data-destroy]');

const createCollection = () => {
  if (!inputRef.value) {
    alert('Please, choose the number!');
    return;
  }
  const collectionMarkup = [];
  for (let i = 0; i < inputRef.value; i += 1) {
    const diameter = i * 10 + 30;
    collectionMarkup.push(
      `<div style="width: ${diameter}px; height: ${diameter}px; background-color: ${getRandomHexColor()}"></div>`
    );
  }
  collectionRef.insertAdjacentHTML('afterbegin', collectionMarkup.join(''));
};

const destroyCollection = () => {
  collectionRef.innerHTML = '';
  inputRef.value = '';
};

createBtnRef.addEventListener('click', createCollection);

destroyBtnRef.addEventListener('click', destroyCollection);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
