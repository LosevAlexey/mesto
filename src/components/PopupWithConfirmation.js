import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
  constructor(popupElement, deleteButtonConfirm) {
    super(popupElement);
    this._deleteButton = document.querySelector(".popup__button");
    this._deleteButtonConfirm = deleteButtonConfirm;
    this._buttonLoadingValue = this._deleteButton.textContent;
  }

  setEventListeners() {
    super.setEventListeners();
    this._deleteButton.addEventListener("click", () => {
      this._deleteButtonConfirm(this._card, this._cardId);
    });
    this._deleteButton.textContent = `Удаление...`;
  }

  open = ({ card, userID }) => {
    super.open();
    this._card = card;
    this._cardId = userID;
  };

  setButtonLoading = () => {
    this._deleteButton.textContent = this._buttonLoadingValue;
  };
}
