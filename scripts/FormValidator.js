class FormValidator {
  constructor(config, formElement) {
    this._formSelector = config.formSelector;
    this._inputSelector = config.inputSelector;
    this._submitButtonSelector = config.submitButtonSelector;
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._inputErrorClass = config.inputErrorClass;
    this._form = cardFormElement.querySelector(this._formSelector);
  }


_setInputValidStade(input, errorElement) {
  input.classList.remove(this._inputErrorClass);
  errorElement.textContent = "";
}

_setInputInvalidStade(input, errorElement) {
  input.classList.add(this._inputErrorClass);
  console.log(errorElement);
  errorElement.textContent = input.validationMessage;
}

//проверяем инпуты
_checkInputValidity(input, form) {
  console.log(input.validity.valid);
  console.log(input._checkValidity()); //проверка валидности
  console.log(input.id);
  const errorElement = form.querySelector(`#error-${input.id}`); //вторая формв не отвечает
  if (input._checkValidity()) {
    this._setInputValidStade(input, errorElement);
  } else {
    this._setInputInvalidStade(input, errorElement);
  }
}

_disableButton(submitButton) {
  console.log(submitButton);
  submitButton.setAttribute("disabled", "");
  submitButton.classList.add(this._inactiveButtonClass);
}

_enableButton(submitButton) {
  submitButton.removeAttribute("disabled");
  submitButton.classList.remove(this._inactiveButtonClass);
}

//переключение кнопки
_toggleButtonValidity(form, submitButton) {
  if (form.checkValidity()) {
    this._enableButton(rest, submitButton);
  } else {
    this._disableButton(rest, submitButton);
  }
}

//валидация формы
enableValidation() {
  /* const form = document.querySelectorAll(this._formSelector); */ //ищем формы
  const formArray = Array.from(this._form);
  console.log(formArray);

  formArray.forEach((form) => {

    const submitButton = this._form.querySelector(this._submitButtonSelector);
    console.log(submitButton);

    this._form.addEventListener("reset", function () {
      disableButton(submitButton);
    });

    const inputs = this._form.querySelectorAll(this._inputSelector); //ищем инпуты
    console.log(inputs);
    const inputArray = Array.from(inputs);
    console.log(inputArray);

    inputArray.forEach(function (input) {
      input.addEventListener("input", () => {
        this._checkInputValidity(input, form, submitButton);
        this._toggleButtonValidity(form, submitButton);
      });
    });
    this._toggleButtonValidity(form, submitButton);
  });
}
}

const config = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
};

const profileElement = document.querySelector('.popup_type_edit-profile');
const profileValidator = new FormValidator(config, profileElement);

const cardFormElement = document.querySelector('.popup_type_places');
console.log(cardFormElement);
const cardValidator = new FormValidator(config, cardFormElement);

cardValidator.enableValidation();
profileValidator.enableValidation();

export default FormValidator;























/* function setInputValidStade(config, input, errorElement) {
  input.classList.remove(config.inputErrorClass);
  errorElement.textContent = "";
}

function setInputInvalidStade(config, input, errorElement) {
  input.classList.add(config.inputErrorClass);
  console.log(errorElement);
  errorElement.textContent = input.validationMessage;
}

//проверяем инпуты
function checkInputValidity(config, input, form) {
  console.log(input.validity.valid);
  console.log(input.checkValidity()); //проверка валидности
  console.log(input.id);
  const errorElement = form.querySelector(`#error-${input.id}`); //вторая формв не отвечает
  if (input.checkValidity()) {
    setInputValidStade(config, input, errorElement);
  } else {
    setInputInvalidStade(config, input, errorElement);
  }
}

function disableButton({ inactiveButtonClass }, submitButton) {
  console.log(submitButton);
  submitButton.setAttribute("disabled", "");
  submitButton.classList.add(inactiveButtonClass);
}

function enableButton({ inactiveButtonClass }, submitButton) {
  submitButton.removeAttribute("disabled");
  submitButton.classList.remove(inactiveButtonClass);
}

//переключение кнопки
function toggleButtonValidity(rest, form, submitButton) {

  if (form.checkValidity()) {
    enableButton(rest, submitButton);
  } else {
    disableButton(rest, submitButton);
  }
}

//валидация формы
function enableValidation({
  formSelector,
  inputSelector,
  submitButtonSelector,
  ...rest
}) {
  const form = document.querySelectorAll(formSelector); //ищем формы
  const formArray = Array.from(form);
  console.log(formArray);

  formArray.forEach((form) => {

    const submitButton = form.querySelector(submitButtonSelector);
    console.log(submitButton);

    form.addEventListener("reset", function () {
      disableButton(rest, submitButton);
    });

    const inputs = form.querySelectorAll(inputSelector); //ищем инпуты
    console.log(inputs);
    const inputArray = Array.from(inputs);
    console.log(inputArray);

    inputArray.forEach(function (input) {
      input.addEventListener("input", () => {
        checkInputValidity(rest, input, form, submitButton);
        toggleButtonValidity(rest, form, submitButton);
      });
    });
    toggleButtonValidity(rest, form, submitButton);
  });
}

enableValidation({
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
}); */
