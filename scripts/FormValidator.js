import { config } from "./index.js";

export default class FormValidator {
  constructor(config, formElement) {
    this._formSelector = config.formSelector;
    this._inputSelector = config.inputSelector;
    this._submitButtonSelector = config.submitButtonSelector;
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._inputErrorClass = config.inputErrorClass;
    this._formElement = formElement;
    this._submitButton = this._formElement.querySelector(this._submitButtonSelector);
    this._input = this._formElement.querySelector(this._inputSelector);
    console.log(this._formElement);
  }

_setInputValidStade(errorElement) {
  this._input.classList.remove(this._inputErrorClass);
  errorElement.textContent = "";
}

_setInputInvalidStade(errorElement) {
  this._input.classList.add(this._inputErrorClass);
  console.log(errorElement);
  errorElement.textContent = this._input.validationMessage;
}

//проверяем инпуты
_checkInputValidity() {
  const errorElement = this._formElement.querySelector(`#error-${this._input.id}`);
  console.log(errorElement);
  if (!this._input.validity) {
    this._setInputValidStade(errorElement);
  } else {
    this._setInputInvalidStade(errorElement);
  }
}

_disableButton() {
  this._submitButton.setAttribute("disabled", "");
  this._submitButton.classList.add(this._inactiveButtonClass);
}

_enableButton() {
  this._submitButton.removeAttribute("disabled");
  this._submitButton.classList.remove(this._inactiveButtonClass);
}

//переключение кнопки
_toggleButtonValidity() {
  if (this._formElement.validity) {
    this._enableButton();
  } else {
    this._disableButton();
  }
}

//валидация формы
enableValidation() {
  this._formElement.addEventListener("reset", this._disableButton());

  this._formElement.addEventListener("reset", this._checkInputValidity());

  const inputList = this._formElement.querySelector(this._inputSelector);
  console.log(inputList);

  inputList.addEventListener("input", () => {
      this._checkInputValidity();
      this._toggleButtonValidity(inputList);
    });

  this._toggleButtonValidity();
}
}


























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
});
 */
