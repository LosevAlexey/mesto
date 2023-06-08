import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
import Section from "./Section.js";
import Popup from "./Popup.js";
import PopupWithImage from "./PopupWithImage.js";
import initialCards from "./initialCards.js";
import PopupWithForm from "./PopupWithForm.js";

// Редактирование профиля
const popupEditProfileP = document.querySelector(".popup_type_edit-profile");
const buttonOpenEditProfile = document.querySelector(".profile__edit-button");
const buttonCloseEditProfile = document.querySelector(
  ".popup__close_edit-profile"
);
const nameInputeditProfile = document.querySelector(".popup__input_form_name");
const descriptionInputeditProfile = document.querySelector(
  ".popup__input_form_description"
);
const formInputeditProfile = document.querySelector(
  ".popup__form_edit-profile"
);
const authorEditProfile = document.querySelector(".profile__author");
const descriptionEditProfile = document.querySelector(".profile__description");
const popupList = document.querySelectorAll(".popup");

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

function fullInput() {
  nameInputeditProfile.value = authorEditProfile.textContent;
  descriptionInputeditProfile.value = descriptionEditProfile.textContent;
  profileValidator.resetValidation();
  popupEditProfileP.open();
}

buttonOpenEditProfile.addEventListener("click", fullInput);
document.querySelectorAll(".popup__close").forEach((button) => {
  const buttonsPopup = button.closest(".popup"); // нашли родителя с нужным классом
  button.addEventListener("click", () => buttonsPopup.close()); // закрыли попап
});

formInputeditProfile.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(formInputeditProfile);
  authorEditProfile.textContent = nameInputeditProfile.value;
  descriptionEditProfile.textContent = descriptionInputeditProfile.value;
  popupEditProfileP.close();
  /* event.target.reset(); */
});

//Создание карточки
/* const createCards = (item) => {
  const card = new Card(item);
  const cardElement = card.createCard();
  return cardElement;
}; */

//Для массива
const gridPlaces = document.querySelector(".places");
console.log(gridPlaces);
/* initialCards.forEach((item) => {
  gridPlaces.append(createCards(item));
}); */

console.log(initialCards);
const createCards = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const card = new Card(item);
      const cardElement = card.createCard();
      createCards.addItem(cardElement);
    },
  },
  ".places"
);
createCards.renderItems();

//Создание новой карточки
const formPopupAddPlace = document.querySelector(".popup__form_place");
const buttonOpenPopupAddPlace = document.querySelector(".profile__add");
const buttonClosePopupAddPlace = document.querySelector(".popup__close_place");
const popupAddPlace = document.querySelector(".popup_type_places");
const namePlace = document.querySelector(".popup__input_place_description");
const linkPlace = document.querySelector(".popup__input_place_link");

function addPlacePopup(event) {
  event.preventDefault();
  const name = namePlace.value;
  const link = linkPlace.value;
  const placesDate = {
    name,
    link,
  };
  gridPlaces.prepend(createCards(placesDate));
  popupAddPlace.close();
  /* event.target.reset(); */
}

formPopupAddPlace.addEventListener("submit", addPlacePopup);
buttonClosePopupAddPlace.addEventListener("click", () => popupAddPlace.close());
buttonOpenPopupAddPlace.addEventListener("click", () => {
  formPopupAddPlace.reset();
  cardValidator.resetValidation();
  popupAddPlace.open();
});

//Для увеливения картинок
export const imageImagesPopup = document.querySelector(".popup__image");
export const linkImagesPopup = document.querySelector(".popup__description");
export const popupImages = document.querySelector(".popup_type_more");
const buttonCloseImageImagesPopup = popupImages.querySelector(
  ".popup__close_type_more"
);

buttonCloseImageImagesPopup.addEventListener("click", () =>
  popupImages.close()
);

//Для валидации
export const config = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
};

const profileElement = document.querySelector("#edit-profile");
const profileValidator = new FormValidator(config, profileElement);

const cardFormElement = document.querySelector("#places");
console.log(cardFormElement);
const cardValidator = new FormValidator(config, cardFormElement);

cardValidator.enableValidation();
profileValidator.enableValidation();

// Колбэки для форм
const formEditProfileP = new PopupWithForm({
  popupElement: "..popup_type_edit-profile",
  submit: (input) => {
    userInfo.setUserInfo(input);
  },
});
formEditProfileP.setEventListeners();

const formAddPlace = new PopupWithForm({
  popupElement: ".popup__form_place",
    submit: (input) =>
    renderCard({ name: input.name, link: input.link })
  });
formAddPlace.setEventListeners();

