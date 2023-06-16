import {
  popupEditProfileP,
  popupAddPlace,
  popupImages,
  buttonOpenEditProfile,
  buttonOpenPopupAddPlace,
  formPopupAddPlace,
  nameInputeditProfile,
  descriptionInputeditProfile,
  authorEditProfile,
  descriptionEditProfile,
  profileElement,
  cardFormElement,
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

// Редактирование профиля
/* const buttonCloseEditProfile = document.querySelector(
  ".popup__close_edit-profile"
);

const formInputeditProfile = document.querySelector(
  ".popup__form_edit-profile"
);

const popupList = document.querySelectorAll(".popup"); */

/* export function openPopup(popupElement) {
  popupElement.classList.add("popup_opened");
  document.addEventListener("keydown", closeEscape);
  console.log(popupElement);
}

function closePopup(popupElement) {
  popupElement.classList.remove("popup_opened");
  document.removeEventListener("keydown", closeEscape);
}

function closeEscape(event) {
  if (event.key === "Escape") {
    const escape = document.querySelector(".popup_opened");
    closePopup(escape);
  }
}
popupList.forEach(function (p) {
  p.addEventListener("click", (event) => {
    if (event.target === event.currentTarget) {
      closePopup(event.target);
    }
  });
}); */

/* const popupEditProfileP = document.querySelector(".popup_type_edit-profile");
const popupAddPlace = document.querySelector(".popup_type_places");
const popupImages = document.querySelector(".popup_type_more");
const buttonOpenEditProfile = document.querySelector(".profile__edit-button");
const buttonOpenPopupAddPlace = document.querySelector(".profile__add");
const formPopupAddPlace = document.querySelector(".popup__form_place");
const nameInputeditProfile = document.querySelector(".popup__input_form_name");
const descriptionInputeditProfile = document.querySelector(
  ".popup__input_form_description"
);
const authorEditProfile = document.querySelector(".profile__author");
const descriptionEditProfile = document.querySelector(".profile__description"); */

/* const openPopapEdit = new Popup(popupEditProfileP);

openPopapEdit.open() */

/* export const closePupapButton = document.querySelectorAll(".popup__close"); */

// Колбэки для форм
//Открытие редоктирование профиля
const userInfo = new UserInfo (authorEditProfile, descriptionEditProfile);

const formEditProfileP = new PopupWithForm(
  popupEditProfileP, (formValues) => {
    console.log(formValues);
    userInfo.setUserInfo(formValues);
  });
formEditProfileP.setEventListeners();

buttonOpenEditProfile.addEventListener("click", () => {
  const infoObject = userInfo.getUserInfo();
  nameInputeditProfile.value = infoObject.name;
  descriptionInputeditProfile.value = infoObject.description;
  profileValidator.resetValidation();
  formEditProfileP.open()});

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


/* function fullInput() {
  nameInputeditProfile.value = authorEditProfile.textContent;
  descriptionInputeditProfile.value = descriptionEditProfile.textContent;
  profileValidator.resetValidation();
  popupEditProfileP.open();
} */

/* buttonOpenEditProfile.addEventListener("click", fullInput);
document.querySelectorAll(".popup__close").forEach((button) => {
  const buttonsPopup = button.closest(".popup"); // нашли родителя с нужным классом
  button.addEventListener("click", () => buttonsPopup.close()); // закрыли попап
}); */

/* formInputeditProfile.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(formInputeditProfile);
  authorEditProfile.textContent = nameInputeditProfile.value;
  descriptionEditProfile.textContent = descriptionInputeditProfile.value;
  popupEditProfileP.close();
  event.target.reset();
}); */

//Создание карточки

function createCard(item) {
  // тут создаете карточку и возвращаете ее
    const card = new Card(item, () => {openPopupImage.open(item)});
    const cardElement = card.createCard();
    return cardElement
}
/* const createCards = (item) => {
  const card = new Card(item);
  const cardElement = card.createCard();
  return cardElement;
}; */

//Для массива
/* const gridPlaces = document.querySelector(".places");
console.log(gridPlaces); */
/* initialCards.forEach((item) => {
  gridPlaces.append(createCards(item));
}); */

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
  /* gridPlaces.prepend(createCards.addItem(placesDate)); */
 /*  gridPlaces.prepend(createCards( {renderer: placesDate})); */
  /* gridPlaces.prepend(createCards(placesDate)); */
  /* gridPlaces.prepend(createCards( {items: placesDate})); */
  /* gridPlaces.prepend(createCards()); */
  /* gridPlaces.prepend(createCards.addItem({items: placesDate, renderer}, ".places")); */
  /* gridPlaces.prepend(createCards.addItem({items: placesDate }, ".places")); */

  /* event.target.reset(); */
/*   const card = new Card (placesDate, () => {openPopupImage.open(placesDate)});
const cardElement = card.createCard(card); */
createCards.addItem(createCard(placesDate));
}
/* const fff = () => {addPlacePopup(formValues)};
console.log(fff); */
/* const card = new Card (() => {addPlacePopup(formValues)}, () => {openPopupImage.open(item)});
const cardElement = card.createCard(card);
gridPlaces.prepend(cardElement); */



/* formPopupAddPlace.addEventListener("submit", addPlacePopup);
buttonClosePopupAddPlace.addEventListener("click", () => popupAddPlace.close());
buttonOpenPopupAddPlace.addEventListener("click", () => {
  formPopupAddPlace.reset();
  cardValidator.resetValidation();
  popupAddPlace.open();
}); */

/* //Для увеливения картинок
const buttonCloseImageImagesPopup = popupImages.querySelector(
  ".popup__close_type_more"
); */

/* buttonCloseImageImagesPopup.addEventListener("click", () =>
  popupImages.close()
); */

//Для валидации
/* export const config = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
}; */

/* const profileElement = document.querySelector("#edit-profile"); */
const profileValidator = new FormValidator(config, profileElement);

/* const cardFormElement = document.querySelector("#places"); */
console.log(cardFormElement);
const cardValidator = new FormValidator(config, cardFormElement);

cardValidator.enableValidation();
profileValidator.enableValidation();
