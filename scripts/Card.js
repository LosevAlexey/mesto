import { openPopup, imageImagesPopup, linkImagesPopup, popupImages } from "./index.js";

export default class Card {
  constructor(data) {
    this._data = data;
    this._link = data.link;
    this._name = data.name;
  }

   _getTemplate() {
    return document
      .querySelector('#places-template')
      .content
      .querySelector('.places__block')
      .cloneNode(true);
  }

  createCard = () => {
    this._element = this._getTemplate();

    this._deleteButton = this._element.querySelector('.places__trash_delete-icon');
    this._likeButton = this._element.querySelector('.places__like');
    this._cardImage = this._element.querySelector('.places__image');

    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._element.querySelector('.places__title').textContent = this._name;
    this._setEventListener();
    return this._element;
  }

  _onDelete = () => {
    this._element.remove();
  }

  _onLike = () => {
    this._likeButton.classList.toggle("places__like_active");
  }

   _openImage = () => {
    imageImagesPopup.alt = this._name;
    imageImagesPopup.src = this._link;
    linkImagesPopup.textContent = imageImagesPopup.alt;
    openPopup(popupImages);
  }

  _setEventListener() {
    this._deleteButton.addEventListener("click", this._onDelete);
    this._likeButton.addEventListener("click", this._onLike);
    this._cardImage.addEventListener("click", this._openImage);
  }
}
