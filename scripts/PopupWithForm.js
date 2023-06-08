import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupElement, submit) {
    super(popupElement);
    this._formElement = document.querySelector(".popup__form");
    this._inputList = this._formElement.querySelector(this._inputSelector);
    console.log(this._formElement);
    console.log(this._submitButton);
    this._submit = submit;
  }

  _getInputValues() {
    // создаём пустой объект
    this._formValues = {};

    // добавляем в этот объект значения всех полей
    this._inputList.forEach((input) => {
      this._formValues[input.name] = input.value;
    });

    // возвращаем объект значений
    return this._formValues;
  }

  setEventListeners() {
    super.setEventListeners();
    this._formElement.addEventListener("submit", (e) => {
      e.preventDefault();
      this._submit(this._getInputValues);
    });
  }

  close = () => {
    super.close();
    this._formElement.reset();
  };
}
