let counterValue = 0;

const counterDisplayRef = document.getElementById('value');
const btnDecrementRef = document.querySelector('button[data-action="decrement"]');
const btnIncrementRef = document.querySelector('button[data-action="increment"]');

btnDecrementRef.addEventListener('click', () => {
  counterValue -= 1;
  counterDisplayRef.textContent = counterValue;
});

btnIncrementRef.addEventListener('click', () => {
  counterValue += 1;
  counterDisplayRef.textContent = counterValue;
});
