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
  validateInputs();
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
  } else if (firstNameValue.length < 4 || firstNameValue.length > 15) {
    setError(firstName, "Nome deve conter de 4 a 15 letras");
  } else {
    setValid(firstName);
  }

  if (lastNameValue === "") {
    setError(lastName, "Digite o Sobrenome");
  } else if (lastNameValue.length < 4 || lastNameValue.length > 15) {
    setError(lastName, "Sobrenome deve conter de 4 a 15 letras");
  } else {
    setValid(lastName);
  }

  if (emailValue === "") {
    setError(email, "Digite o e-mail");
  } else if (!emailValue.match(emailRegex)) {
    setError(email, "E-mail inválido");
  } else {
    setValid(email);
  }

  if (phoneNumberValue === "") {
    setError(phoneNumber, "Digite o número do telefone");
  } else if (!phoneNumberValue.match(phoneRegex)) {
    setError(phoneNumber, "Número do telefone inválido");
  } else {
    setValid(phoneNumber);
  }

  if (passwordValue === "") {
    setError(password, "Digite a senha");
  } else if (!passwordValue.match(passwordRegex)) {
    setError(
      password,
      "A senha deve conter pelo menos 1 número, 1 letra maiúscula e minúscula, e pelo menos 8 ou mais caracteres. "
    );
  } else {
    setValid(password);
  }

  if (confirmPasswordValue === "") {
    setError(confirmPassword, "Digite a senha novamente");
  } else if (confirmPasswordValue === passwordValue) {
    console.log(confirmPasswordValue);
    console.log(passwordValue);

    setError(
      confirmPassword,
      "As duas senhas não se coincidem. Tente novamente"
    );
  } else {
    setValid(confirmPassword);
    console.log(confirmPasswordValue);
    console.log(passwordValue);
  }
};
