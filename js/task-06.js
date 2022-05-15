const inputRef = document.getElementById('validation-input');

const handleBlur = () => {
  if (inputRef.value.length === Number(inputRef.dataset.length)) {
    inputRef.classList.add('valid');
    if (inputRef.classList.contains('invalid')) {
      inputRef.classList.remove('invalid');
    }
    return;
  }

  inputRef.classList.add('invalid');
  if (inputRef.classList.contains('valid')) {
    inputRef.classList.remove('valid');
  }
};

inputRef.addEventListener('blur', handleBlur);
