const inputRef = document.getElementById('name-input');

const outputRef = document.getElementById('name-output');

const name = outputRef.textContent;

const handleInput = () => (outputRef.textContent = inputRef.value !== '' ? inputRef.value : name);

inputRef.addEventListener('input', handleInput);
