import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupElement) {
    super(popupElement);
    this._imageImagesPopup = this._popupElement.querySelector(".popup__image");
    this._linkImagesPopup = this._popupElement.querySelector(
      ".popup__description"
    );
  }

  open(item) {
    this._imageImagesPopup.alt = item.name;
    this._imageImagesPopup.src = item.link;
    this._linkImagesPopup.textContent = this._imageImagesPopup.alt;
    super.open();
  }
}
