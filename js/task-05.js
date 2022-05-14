const inputRef = document.getElementById('name-input');

const outputRef = document.getElementById('name-output');

const name = outputRef.textContent;

const handleInput = () =>
  inputRef.value !== '' ? (outputRef.textContent = inputRef.value) : (outputRef.textContent = name);

inputRef.addEventListener('input', handleInput);
