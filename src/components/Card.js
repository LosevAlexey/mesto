import { data } from "autoprefixer";

export default class Card {
  constructor(data, openPopupImage, formPopupDeletePlace, likes, user) {
    this._user = user;
    this._data = data;
   /* console.log(this._data);
   console.log(this._user); */
    this._link = data.link;
    this._name = data.name;
    this._openPopupImage = openPopupImage;
    this._formPopupDeletePlace = formPopupDeletePlace;
    this._id = data._id;
    /*  console.log(this._formPopupDeletePlace); */
    /* console.log(this._id); */
    this._likes = likes;
    this._like = data.likes;
    /* console.log(this._like); */
    /* this._isLike = false; */
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

    this._checkLikeStatus();

    return this._element;
  };

 _deleteYourCards = () => {
console.log(this._id);
console.log(this._data.owner._id);

    if (this._user === this._data.owner._id) {

      this._deleteButton.classList.add('places__trash_active');

       return;

   }
  }

   deleteCard() {
    /* console.log(this._element); */
      this._element.remove();
      this._element = null;
  };

  //переключаем лайки
  likeCard = (likes) => {
    this._numberLikes.textContent = likes.length;
    this._likeButton.classList.toggle('places__like_active');
    /* this._isLike = !this._isLike; */
  }

  //ставим лайк
  _likeButtonClick() {
    this._likes(this._id)
  }

  //мои действия
  myLikes() {
    /* console.log(this._like); */
    const like = this._like.find((like) => {
      return like._id === this._user;
    });
    return like;
  }

  //загружаем лайки
  _checkLikeStatus() {
    this._like.forEach((item) => {
      if (item._id === this._user) {
        /* console.log(item._id);
        console.log(this._user); */
        /* this._isLike = true; */
        this._likeButton.classList.add('places__like_active');
        return;
      }
    });
    return this._numberLikes.textContent = this._like.length;
  }

  _setEventListener() {
    this._deleteButton.addEventListener("click", () => this._formPopupDeletePlace(this, this._id));
    /* console.log(this); */
    /* console.log(this._data._id); */
    this._likeButton.addEventListener("click", this._likeButtonClick());
    this._cardImage.addEventListener("click", this._openImage);
  }

  _openImage = () => {
    this._openPopupImage(this._data);
  };
}
