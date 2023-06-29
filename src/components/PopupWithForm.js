import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupElement, submit) {
    super(popupElement);
    this._formElement = this._popupElement.querySelector(".popup__form");
    this._inputList = this._formElement.querySelectorAll(".popup__input");
    console.log(this._formElement);
    console.log(this._inputList);
    this._submit = submit;
    console.log(this._submit);
  }

  _getInputValues() {

    // создаём пустой объект
    const formValues = {};
console.log(formValues);
    // добавляем в этот объект значения всех полей
    this._inputList.forEach((input) => {
      formValues[input.name] = input.value;
      console.log(input.name);

    });

    // возвращаем объект значений
    return formValues;
  }

  setEventListeners() {
    super.setEventListeners();
    this._formElement.addEventListener("submit", (event) => {
      event.preventDefault();
      this._submit(this._getInputValues());

      this.close();

    });
  }

  close = () => {
    super.close();
    console.log(this._formElement);
    this._formElement.reset();
  };
}
