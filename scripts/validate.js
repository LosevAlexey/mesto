//Валидация форм
function setInputValidStade(config, input, errorElement) {
  input.classList.remove(config.inputErrorClass);
  errorElement.textContent = '';
}

function setInputInvalidStade(config, input, errorElement) {
  input.classList.add(config.inputErrorClass);
  errorElement.textContent = input.validationMessage;
}

function checkInputValidity(config, input) {
  const errorElement = document.querySelectorAll(`#error-${input.id}`);
  if (input.validity.valid) {
    setInputValidStade(config, input, errorElement);
    errorElement.classList.remove(config.errorClass);
  } else {
    setInputInvalidStade(config, input, errorElement);
    errorElement.classList.add(config.errorClass);
  }
};

function disableButton({ inactiveButtonClass }, button) {
  button.setAttribute('disabled', '');
  button.classList.add(inactiveButtonClass);
};

function enableButton({ inactiveButtonClass }, button) {
  button.removeAttribute('disabled');
  button.classList.remove(inactiveButtonClass);
};

function checkFormValidity(inputs) {
  return inputs.every(function (input) {
    return input.checkValidity();
  });
}

function toggleButtonValidity({submitButtonSelector, ...rest}, form) {
  const submitButton = document.querySelector(submitButtonSelector);
  if (checkFormValidity(form)) {
    enableButton(rest, submitButton);
  } else {
    disableButton(rest, submitButton);
};
}

function setSubmitListener(config, form) {
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    form.reset();
    toggleButtonValidity(config, form);
  });
}

function enableValidation(formSelector, inputSelector, ...rest) {
const form = document.querySelectorAll(formSelector);
const inputs = document.querySelectorAll(inputSelector);
const inputArray = Array.from(inputs);

setSubmitListener(rest, form);
toggleButtonValidity(rest, form);

inputArray.forEach(function (input) {
  input.addEventListener('input', ()=> {
    checkInputValidity(rest, input);
    toggleButtonValidity(rest, form);
  });
});
};

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
});
