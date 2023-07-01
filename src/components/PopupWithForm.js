import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupElement, submit) {
    super(popupElement);
    this._formElement = this._popupElement.querySelector(".popup__form");
    this._inputList = this._formElement.querySelectorAll(".popup__input");
    this._submit = submit;
    this._submitButton = this._formElement.querySelector(".popup__button");
    this._buttonLoadingValue = this._submitButton.textContent;
  }

  _getInputValues() {
    // создаём пустой объект
    const formValues = {};
    // добавляем в этот объект значения всех полей
    this._inputList.forEach((input) => {
      formValues[input.name] = input.value;
    });
    // возвращаем объект значений
    return formValues;
  }

  setEventListeners() {
    super.setEventListeners();
    this._formElement.addEventListener("submit", (event) => {
      event.preventDefault();
      this._submitButton.textContent = "Сохранение...";
      this._submit(this._getInputValues());
    });
  }

  close = () => {
    super.close();
    this._formElement.reset();
  };

  setButtonLoading = () => {
    this._submitButton.textContent = this._buttonLoadingValue;
  };
}
