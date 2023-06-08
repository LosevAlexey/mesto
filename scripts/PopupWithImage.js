import {
  imageImagesPopup,
  linkImagesPopup,
  popupImages,
} from "./index.js";
import Popup from './Popup.js'

export default class PopupWithImage extends Popup {
  constructor(popupElement) {
    super(popupElement)
  }

open = () => {
    imageImagesPopup.alt = this._name;
    imageImagesPopup.src = this._link;
    linkImagesPopup.textContent = imageImagesPopup.alt;
    popupImages.open();
  };
}
