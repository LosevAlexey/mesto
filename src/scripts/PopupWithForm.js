import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupElement, submit) {
    super(popupElement);
    this._formElement = popupElement;
    this._inputList = this._formElement.querySelectorAll(".popup__input");
    console.log(this._formElement);
    console.log(this._inputList);
    this._submit = submit;
    console.log(this._submit);
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
    this._formElement.addEventListener("submit", (event) => {
      event.preventDefault();
      this._submit(this._getInputValues);

      this.close();

    });
  }

  close = () => {
    super.close();
    this._formElement.reset();
  };
}
