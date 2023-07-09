import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
  constructor(popupElement, deleteButtonConfirm) {
    super(popupElement);
    this._deleteButton = document.querySelector("#submitDelete");
    this._deleteButtonConfirm = deleteButtonConfirm;
    /* console.log(this._deleteButtonConfirm); */
    this._buttonLoadingValue = this._deleteButton.textContent;
  }

  setEventListeners() {
    /*  console.log(this.card);
    console.log(this.cardId); */

    this._deleteButton.addEventListener("click", (event) => {
      event.preventDefault();
      this._deleteButtonConfirm(this.card, this.cardId);
      this._deleteButton.textContent = `Удаление...`;
    });
    super.setEventListeners();
  }

  open(card, cardId) {
    super.open();
     /* console.log(this.card);
    console.log(this.cardId); */
    this.card = card;
    this.cardId = cardId;
  };

  setButtonLoading = () => {
    this._deleteButton.textContent = this._buttonLoadingValue;
  };


}
