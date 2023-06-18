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

import '../pages/index.css'

// Колбэки для форм
/* const ccc = new Card (); */
//удоление карточки
const formPopupDeletePlace = new PopupWithForm(popupDeletePlace/* , (formValues) => {
  console.log(formValues);
  ccc.deleteCard()} */);

  formPopupDeletePlace.setEventListeners();



 /*  deleteButton.addEventListener("click", () => {


  formPopupDeletePlace.open()}); */

//Редактирование аватара
const userAvatar = new UserInfo (authorEditProfile, descriptionEditProfile, avatarEditProfile);

const formEditProfileAvatar = new PopupWithForm(
  popupEditProfileAvatar, (formValues) => {
    console.log(formValues);
    userAvatar.setUserAvatar(formValues);
  });
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
  popupEditProfile, (formValues) => {
    console.log(formValues);
    userInfo.setUserInfo(formValues);
  });
formEditProfile.setEventListeners();

buttonOpenEditProfile.addEventListener("click", () => {
  const infoObject = userInfo.getUserInfo();
  nameInputeditProfile.value = infoObject.name;
  descriptionInputeditProfile.value = infoObject.description;
  profileValidator.resetValidation();
  formEditProfile.open()});

  //Открытие формы добавление новой карточки
const formAddPlace = new PopupWithForm(
  popupAddPlace, (formValues) => {
    addPlacePopup(formValues);

  });
formAddPlace.setEventListeners();

/* formPopupAddPlace.addEventListener("submit", addPlacePopup); */

buttonOpenPopupAddPlace.addEventListener("click", () => {
  formPopupAddPlace.reset();
  cardValidator.resetValidation();
  formAddPlace.open()});

  //Увеличение картинки
const openPopupImage = new PopupWithImage(
  popupImages);
  openPopupImage.setEventListeners();

//Создание карточки
function createCard(item) {
    const card = new Card(item, () => {openPopupImage.open(item)}, () => {formPopupDeletePlace.open(item)});
    const cardElement = card.createCard();
    return cardElement
}

console.log(initialCards);
const createCards = new Section(
  {
    items: initialCards,
    renderer: (item) => {

      createCards.addItem(createCard(item));
    },
  },
  ".places"
);
createCards.renderItems();

//Создание новой карточки
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
createCards.prependItem(createCard(placesDate));
}

//Для валидации
const profileValidator = new FormValidator(config, profileElement);
const cardValidator = new FormValidator(config, cardFormElement);
const avatarValidator = new FormValidator(config, avatarFormElement);

cardValidator.enableValidation();
profileValidator.enableValidation();
avatarValidator.enableValidation();
