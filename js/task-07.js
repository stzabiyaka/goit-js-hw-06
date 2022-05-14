const inputRangeRef = document.querySelector('#font-size-control');

const textDisplayRef = document.querySelector('#text');

const textSizeHandler = () => {
  textDisplayRef.style.fontSize = `${inputRangeRef.value}px`;
};

textSizeHandler();

inputRangeRef.addEventListener('input', textSizeHandler);
