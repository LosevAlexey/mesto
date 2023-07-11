import { data } from "autoprefixer";

export default class Card {
  constructor(
    data,
    openPopupImage,
    formPopupDeletePlace,
    deletelike,
    addlike,
    user
  ) {
    this._user = user;
    this._data = data;
    /* console.log(this._data); */
    /* console.log(this._user); */
    this._link = data.link;
    this._name = data.name;
    this._openPopupImage = openPopupImage;
    this._formPopupDeletePlace = formPopupDeletePlace;
    this._id = data._id;
    /*  console.log(this._formPopupDeletePlace); */
    /* console.log(this._id); */
    /* this._likes = likes; */
    this._like = data.likes;
    /* console.log(this._like); */
    /* this._isLike = false; */
    this._deletelike = deletelike;
    this._addlike = addlike;
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
    this._numberLikes = this._element.querySelector(".places__number");

    this._deleteYourCards();
    this._setEventListener();
    this.renderLike(this._data);

    return this._element;
  };

  _deleteYourCards = () => {
    /* console.log(this._id);
console.log(this._data.owner._id); */
    if (this._user === this._data.owner._id) {
      this._deleteButton.classList.add("places__trash_active");
      return;
    }
  };

  deleteCard() {
    /* console.log(this._element); */
    this._element.remove();
    this._element = null;
  }

  //переключаем лайки
  _likeCard() {
    if (this._myLikes()) {
      this._deletelike(this._id);
    } else {
      this._addlike(this._id);
    }
  }

  //мои действия
  _myLikes() {
    return this._like.some(
      (like) =>
        /* console.log(like._id);
      console.log(this._user); */
        like._id === this._user
    );
  }

  //отоброжение состояния
  renderLike(card) {
    this._like = card.likes;
    if (this._like.length === 0) {
      this._numberLikes.textContent = "0";
    } else {
      this._numberLikes.textContent = this._like.length;
    }
    if (this._myLikes()) {
      this._likeButton.classList.add("places__like_active");
    } else {
      this._likeButton.classList.remove("places__like_active");
    }
  }

  _setEventListener() {
    this._deleteButton.addEventListener("click", () =>
      this._formPopupDeletePlace(this, this._id)
    );
    /* console.log(this); */
    /* console.log(this._data._id); */
    this._likeButton.addEventListener("click", () => this._likeCard());
    this._cardImage.addEventListener("click", this._openImage);
  }

  _openImage = () => {
    this._openPopupImage(this._data);
  };
}
