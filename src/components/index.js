import {
  popupEditProfile,
  popupEditProfileAvatar,
  popupAddPlace,
  popupImages,
  buttonOpenEditProfile,
  buttonOpenEditProfileAvatar,
  buttonOpenPopupAddPlace,
  formPopupAddPlace,
  nameInputeditProfile,
  descriptionInputeditProfile,
  avatarEditProfile,
  authorEditProfile,
  descriptionEditProfile,
  profileElement,
  cardFormElement,
  avatarFormElement,
  deleteButton,
  popupDeletePlace,
  config
} from "../utils/constants.js";
import initialCards from "../utils/initialCards.js";
import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
import Section from "./Section.js";
import PopupWithImage from "./PopupWithImage.js";
import PopupWithForm from "./PopupWithForm.js";
import UserInfo from "./UserInfo.js";
import Api from "./Api.js";

import '../pages/index.css'

/* let dataArray = null;

api.getInitialCards().then(data =>{
  dataArray = data
})
console.log(dataArray); */

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-68',
  headers: {
    authorization: '880c9051-b638-4ce1-81b8-a57a4b085757',
    'Content-Type': 'application/json'
  }
});

const cardsPromise = api.getInitialCards().then(data => console.log(data));
console.log(cardsPromise);

const createCards = new Section(".places");

api.getInitialCards().then((data)=> {
  data.forEach((data) => {
    const card = new Card(data, api, () => {openPopupImage.open(data)}, () => {formPopupDeletePlace.open(data)});
    const cardElement = card.createCard();

    createCards.addItem(cardElement);
    return cardElement
  })
}).catch((err) => console.log(`carch: ${err}`))


function addPlacePopup(formValues) {
  /* event.preventDefault(); */
  const name = formValues.name;
  console.log(formValues);
  const link = formValues.link;
  const placesDate = {
    name: formValues.name,
    link: formValues.link

  };
console.log(placesDate);
/* createCards.prepend(placesDate) */;
}

// Данные о пользователи
const userID = api.getUserInfo()
.then((userID) => {
  userInfo.setUserInfo({
      name: userID.name,
      description: userID.about,
      link: userID.avatar,
      userId: userID,
  });
})
.catch((error) =>
  console.error(`Ошибка - ${error}`));

  //Аватар
  const Avatar = api.getUserInfo()
.then((userID) => {
  userInfo.setUserAvatar({

      name: userID.avatar,

  });
})
.catch((error) =>
  console.error(`Ошибка - ${error}`));

//Отправка данных на сервер
function changeUserInfo(formValues) {
return api.changeUserInfo(formValues.name, formValues.description)
  .then((res) => {
  userInfo.setUserInfo({ name: res.name, about: res.about });
  })
.catch((error => console.error(`Ошибка ${error}`)))
}

//Отправка аватата на сервер
function changeAvatar(formValues) {
  console.log(formValues);
  return api.changeAvatar(formValues.link)

    .then((res) => {
    userInfo.setUserAvatar({ name: res.avatar });
    })
  .catch((error => console.error(`Ошибка ${error}`)))
  }


// Колбэки для форм
//Добавление новой карточки
function createCard(formValues) {
  return api.addCardPlace(formValues.name, formValues.link)

  .then((сard) => {
    console.log(сard);
   const card = new Card(сard, () => {openPopupImage.open(сard)}, () => {formPopupDeletePlace.open(сard)});
    const cardElement = card.createCard();
    createCards.prepend(cardElement);
    return cardElement
  })
  .catch((error => console.error(`Ошибка ${error}`)))
}
//удоление карточки
const formPopupDeletePlace = new PopupWithForm(popupDeletePlace, deletePlace);
formPopupDeletePlace.setEventListeners();

 /*  deleteButton.addEventListener("click", () => {


  formPopupDeletePlace.open()}); */

//Редактирование аватара
const userAvatar = new UserInfo (authorEditProfile, descriptionEditProfile, avatarEditProfile);

const formEditProfileAvatar = new PopupWithForm(
  popupEditProfileAvatar, changeAvatar);
  formEditProfileAvatar.setEventListeners();

  buttonOpenEditProfileAvatar.addEventListener("click", () => {
 /*  const infoObject = userInfo.getUserInfo();
  nameInputeditProfile.value = infoObject.name;
  descriptionInputeditProfile.value = infoObject.description; */
  avatarValidator.resetValidation();
  formEditProfileAvatar.open()});

//Открытие редоктирование профиля
const userInfo = new UserInfo (authorEditProfile, descriptionEditProfile, avatarEditProfile);

const formEditProfile = new PopupWithForm(
  popupEditProfile, changeUserInfo);
formEditProfile.setEventListeners();

buttonOpenEditProfile.addEventListener("click", () => {
  const infoObject = userInfo.getUserInfo();
  nameInputeditProfile.value = infoObject.name;
  descriptionInputeditProfile.value = infoObject.description;
  profileValidator.resetValidation();
  formEditProfile.open()});

  //Открытие формы добавление новой карточки
const formAddPlace = new PopupWithForm(
  popupAddPlace, createCard);
formAddPlace.setEventListeners();

/* formPopupAddPlace.addEventListener("submit", addPlacePopup); */

buttonOpenPopupAddPlace.addEventListener("click", () => {
  formPopupAddPlace.reset();
  cardValidator.resetValidation();
  formAddPlace.open()});

  //Удоление
  function deletePlace(card, userID) {
api.deletePlace().then((userID) => {


  deleteCard(card);
})
  .catch((error) => console.error(`Ошибка ${error}`))
  }

  //Увеличение картинки
const openPopupImage = new PopupWithImage(
  popupImages);
  openPopupImage.setEventListeners();

//Создание карточки
/* function createCard(item) {
    const card = new Card(item, () => {openPopupImage.open(item)}, () => {formPopupDeletePlace.open(item)});
    const cardElement = card.createCard();
    return cardElement
} */

/* console.log(initialCards); */
/* const createCards = new Section(

  ".places"
); */
/* createCards.renderItems(); */

//Создание новой карточки
/* function addPlacePopup(formValues) {
  /* event.preventDefault();
  const name = formValues.name;
  console.log(formValues);
  const link = formValues.link;
  const placesDate = {
    name: formValues.name,
    link: formValues.link

  };
console.log(placesDate);
createCards.prepend(placesDate);
} */

//Для валидации
const profileValidator = new FormValidator(config, profileElement);
const cardValidator = new FormValidator(config, cardFormElement);
const avatarValidator = new FormValidator(config, avatarFormElement);

cardValidator.enableValidation();
profileValidator.enableValidation();
avatarValidator.enableValidation();
