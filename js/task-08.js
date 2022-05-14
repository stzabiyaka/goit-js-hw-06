const formRef = document.querySelector('.login-form');

const handleSubmit = event => {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value !== '' && password.value !== '') {
    const loginData = {
      email: email.value,
      password: password.value,
    };

    console.log(loginData);

    formRef.reset();

    return;
  }

  alert('Please, fill in all the fields!');
};

formRef.addEventListener('submit', handleSubmit);
