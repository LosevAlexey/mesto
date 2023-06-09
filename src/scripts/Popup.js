import { closePupapButton } from './index.js';
console.log(closePupapButton);

export default class Popup {
  constructor(popupElement) {
    this._popupElement = popupElement;
    console.log(this._popupElement);
    this._handleEscClose = this._handleEscClose.bind(this);
    /* this._closeButton = this._popupElement.querySelector(".popup__button"); */
  }

  open() {
    this._popupElement.classList.add("popup_opened");
    document.addEventListener("keydown", this._handleEscClose);
  };

  close() {
    this._popupElement.classList.remove("popup_opened");
    document.removeEventListener("keydown", this._handleEscClose);
  };

  _handleEscClose(event) {
    if (event.key === "Escape") {
      const escape = document.querySelector(".popup_opened");
      this.close();
    }
  };

  setEventListeners() {

    this._popupElement.addEventListener("click", (event) => {
      if (event.target === event.currentTarget) {
        this.close(event.target);
      }
    });
    closePupapButton.addEventListener("click", () => {
      this.close();
    });
  };
}
