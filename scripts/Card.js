import { initialCards, openPopupSeeImage } from "./index.js";

class Card {
  constructor(data) {
    this._data = data;
    this._link = data.link;
    this._name = data.name;
    this._openPopupSeeImage = openPopupSeeImage;
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

    this._element.querySelector('.places__image').src = this._link;
    this._element.querySelector('.places__image').alt = this._name;
    this._element.querySelector('.places__title').textContent = this._name;
    this._setEventListener();
    return this._element;
  }

  _onDelete = () => {
    this._element.remove();
  }

  _onLike = () => {
    this._element.querySelector('.places__like').classList.toggle("places__like_active");
  }

   _openImage = () => {
    this._openPopupSeeImage(this._element);
  }

  _setEventListener() {
    this._element.querySelector('.places__trash_delete-icon').addEventListener("click", this._onDelete);
    this._element.querySelector('.places__like').addEventListener("click", this._onLike);
    this._element.querySelector('.places__image').addEventListener("click", this._openImage);
  }
}

initialCards.forEach((item) => {
  const card = new Card(item);
  const cardElement = card.createCard();
  document.querySelector('.places').append(cardElement);
});

export default Card;
