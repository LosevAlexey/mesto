export default class Card {
  constructor(data, api, openPopupImage, formPopupDeletePlace) {
    this._data = data;
    /* console.log(this._data); */
    this._link = data.link;
    this._name = data.name;
    this._openPopupImage = openPopupImage;
    this._formPopupDeletePlace = formPopupDeletePlace;
    this._id = this._data._id;
    /* console.log(this._id); */
    this._api = api;
    /* console.log(this._api); */
  }

  _getTemplate() {
    return document
      .querySelector("#places-template")
      .content.querySelector(".places__block")
      .cloneNode(true);
  }

  createCard = () => {
    this._element = this._getTemplate();

    this._deleteButton = this._element.querySelector(
      ".places__trash_delete-icon"
    );
    this._likeButton = this._element.querySelector(".places__like");
    this._cardImage = this._element.querySelector(".places__image");

    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._element.querySelector(".places__title").textContent = this._name;

    this._setEventListener();
    return this._element;
  };

  deleteCard = (event) => {
    if(this._element) {

      this._element.remove();
    event.preventDefault();
    }

///Не закрываеться
  };

  _likeCard = () => {
    this._likeButton.classList.toggle("places__like_active");
  };

  _setEventListener() {
    this._deleteButton.addEventListener("click", this._openDeletePlace);
    this._likeButton.addEventListener("click", this._likeCard);
    this._cardImage.addEventListener("click", this._openImage);
  }

  _openImage = () => {
    this._openPopupImage(this._data);
  }

  _openDeletePlace = (deleteButton) => {

    this._formPopupDeletePlace(this._data);
    console.log(this._data);
    deleteButton = document.querySelector(
      "#submitDelete"
    );
    console.log(deleteButton);
    deleteButton.addEventListener("click", this._deleteCard);
  }

}
