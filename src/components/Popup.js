export default class Popup {
  constructor(popupElement) {
    this._popupElement = popupElement;
    console.log(this._popupElement);
    this._handleEscClose = this._handleEscClose.bind(this);
    this._closeButton = this._popupElement.querySelector('.popup__close');
  }

  open() {
    this._popupElement.classList.add("popup_opened");
    document.addEventListener("keydown", this._handleEscClose);
  };

  close() {
    console.log(this._popupElement);
    this._popupElement.classList.remove("popup_opened");
    document.removeEventListener("keydown", this._handleEscClose);
  };

  _handleEscClose(event) {
    if (event.key === "Escape") {
      this.close();
    }
  };

  setEventListeners() {
    this._closeButton.addEventListener("click", () => {
      console.log(this._closeButton);
      this.close();
    });
    this._popupElement.addEventListener("click", (event) => {
      if (event.target === event.currentTarget) {
        this.close(event.target);
      }
    });

  };
}
