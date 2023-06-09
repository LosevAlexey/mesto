export default class FormValidator {
  constructor(config, formElement) {
    this._formSelector = config.formSelector;
    this._inputSelector = config.inputSelector;
    this._submitButtonSelector = config.submitButtonSelector;
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._inputErrorClass = config.inputErrorClass;
    this._formElement = formElement;
    this._submitButton = this._formElement.querySelector(
      this._submitButtonSelector
    );
    this._inputList = this._formElement.querySelectorAll(this._inputSelector);
    console.log(this._formElement);
    console.log(this._submitButton);
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
  _checkInputValidity(input) {
    console.log(input.id);
    const errorElement = this._formElement.querySelector(`#error-${input.id}`);
    if (input.validity.valid) {
      this._setInputValidStade(input, errorElement);
    } else {
      this._setInputInvalidStade(input, errorElement);
    }
  }

  _disableButton() {
    console.log(this._submitButton, "click");
    this._submitButton.setAttribute("disabled", "");
    this._submitButton.classList.add(this._inactiveButtonClass);
  }

  _enableButton() {
    console.log(this._submitButton);
    this._submitButton.removeAttribute("disabled");
    this._submitButton.classList.remove(this._inactiveButtonClass);
  }

  //переключение кнопки
  _toggleButtonValidity() {
    console.log(this);
    console.log(this._formElement);
    console.log(this._formElement.checkValidity());
    if (this._formElement.checkValidity()) {
      console.log(this._formElement);
      this._enableButton();
    } else {
      this._disableButton();
    }
  }

  //валидация формы
  enableValidation() {
    this._inputList.forEach((input) => {
      input.addEventListener("input", () => {
        console.log();
        this._checkInputValidity(input);
        this._toggleButtonValidity();
      });
    });
    this._toggleButtonValidity();
  }

  resetValidation() {
    this._disableButton();
    this._inputList.forEach((inputElement) => {
      const errorElement = this._formElement.querySelector(
        `#error-${inputElement.id}`
      );
      this._setInputValidStade(inputElement, errorElement);
    });
  }
}

