// Existem muitas maneiras de escolher um nó DOM; aqui temos o próprio formulário e o e-mail
// caixa de entrada, bem como o elemento span no qual colocaremos a mensagem de erro.

let form = document.querySelector("#form");
let firstName = document.querySelector("#userFirstName");
let lastName = document.querySelector("#userLastName");
let email = document.querySelector("#userEmail");
let phoneNumber = document.querySelector("#userPhoneNumber");
let password = document.querySelector("#userPassword");
let confirmPassword = document.querySelector("#confirmUserPassword");

let emailRegex = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
let phoneRegex = /^\(?([0-9]{5})\)?[-. ]?([0-9]{4})$/;
let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (validateInputs() == true) {
    //If the form is valid, then submit it.
    form.submit();
  }
});

function setError(element, message) {
  let error = element.nextElementSibling;
  element.classList.add("invalid");
  element.classList.remove("valid");
  error.innerText = message;
}

const setValid = (element) => {
  let error = element.nextElementSibling;
  element.classList.add("valid");
  element.classList.remove("invalid");
  error.innerText = "";
};

const validateInputs = () => {
  const firstNameValue = firstName.value.trim();
  const lastNameValue = lastName.value.trim();
  const emailValue = email.value.trim();
  const phoneNumberValue = phoneNumber.value.trim();
  const passwordValue = password.value.trim();
  const confirmPasswordValue = confirmPassword.value.trim();

  if (firstNameValue === "") {
    setError(firstName, "Digite o nome");
    return false;
  } else if (firstNameValue.length < 4 || firstNameValue.length > 15) {
    setError(firstName, "Nome deve conter de 4 a 15 letras");
    return false;
  } else {
    setValid(firstName);
  }

  if (lastNameValue === "") {
    setError(lastName, "Digite o Sobrenome");
    return false;
  } else if (lastNameValue.length < 4 || lastNameValue.length > 15) {
    setError(lastName, "Sobrenome deve conter de 4 a 15 letras");
    return false;
  } else {
    setValid(lastName);
  }

  if (emailValue === "") {
    setError(email, "Digite o e-mail");
    return false;
  } else if (!emailValue.match(emailRegex)) {
    setError(email, "E-mail inválido");
    return false;
  } else {
    setValid(email);
  }

  if (phoneNumberValue === "") {
    setError(phoneNumber, "Digite o número do telefone");
    return false;
  } else if (!phoneNumberValue.match(phoneRegex)) {
    setError(phoneNumber, "Número do telefone inválido");
    return false;
  } else {
    setValid(phoneNumber);
  }

  if (passwordValue === "") {
    setError(password, "Digite a senha");
    return false;
  } else if (!passwordValue.match(passwordRegex)) {
    setError(
      password,
      "A senha deve conter pelo menos 1 número, 1 letra maiúscula e minúscula, e pelo menos 8 ou mais caracteres. "
    );
    return false;
  } else {
    setValid(password);
  }

  if (confirmPasswordValue === "") {
    setError(confirmPassword, "Digite a senha novamente");
    return false;
  } else if (confirmPasswordValue === passwordValue) {
    setValid(confirmPassword);
  } else {
    setError(
      confirmPassword,
      "As duas senhas não se coincidem. Tente novamente"
    );
    return false;
  }
  return true;
};
