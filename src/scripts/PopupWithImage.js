import Popup from './Popup.js'

export default class PopupWithImage extends Popup {
  constructor(popupElement) {
    super(popupElement)
    console.log(this._popupElement);
    this._imageImagesPopup = this._popupElement.querySelector(".popup__image");
    console.log(this._imageImagesPopup);
    this._linkImagesPopup = this._popupElement.querySelector(".popup__description");
    console.log(this._linkImagesPopup);
  }

open() {
  this._imageImagesPopup.alt = this._name;
  this._imageImagesPopup.src = this._link;
  this._linkImagesPopup.textContent = this._imageImagesPopup.alt;
  super.open();
  };
}
