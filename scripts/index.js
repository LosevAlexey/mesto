import Card from './Card.js'
import FormValidator from './FormValidator.js'

// Редактирование профиля
const popupEditProfileP = document.querySelector(".popup_type_edit-profile");
const buttonOpenEditProfile = document.querySelector(".profile__edit-button");
const buttonCloseEditProfile = document.querySelector(".popup__close");
const nameInputeditProfile = document.querySelector(".popup__input_form_name");
const descriptionInputeditProfile = document.querySelector(
  ".popup__input_form_description"
);
const formInputeditProfile = document.querySelector(".popup__form");
const authorEditProfile = document.querySelector(".profile__author");
const descriptionEditProfile = document.querySelector(".profile__description");
const popup = document.querySelectorAll(".popup");

export function openPopup(popupElement) {
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
popup.forEach(function (p) {
  p.addEventListener("click", (event) => {
    if (event.target === event.currentTarget) {
      closePopup(event.target);
    }
  });
});

function fullInput(button) {
  nameInputeditProfile.value = "";
  descriptionInputeditProfile.value = "";
  openPopup(popupEditProfileP);
}

buttonOpenEditProfile.addEventListener("click", fullInput);
buttonCloseEditProfile.addEventListener("click", () =>
  closePopup(popupEditProfileP)
);

formInputeditProfile.addEventListener("submit", (event) => {
  event.preventDefault();
  authorEditProfile.textContent = nameInputeditProfile.value;
  descriptionEditProfile.textContent = descriptionInputeditProfile.value;
  closePopup(popupEditProfileP);
  event.target.reset();
});

export const initialCards = [
  {
    name: 'Абрамцево',
    link: 'https://images.unsplash.com/photo-1609067936529-59bf24113fec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

// Добавление карточек
/* const templatePlaces = document.getElementById("places-template");
const gridPlaces = document.querySelector(".places");
const popupAddPlace = document.querySelector(".popup_type_places");
const buttonOpenPopupAddPlace = document.querySelector(".profile__add");
const formPopupAddPlace = document.querySelector(".popup__form_place");
const buttonClosePopupAddPlace = document.querySelector(".popup__close-place");

 function createPlaceElement(placeDate) {
  const placeElement = templatePlaces.content
    .querySelector(".places__block")
    .cloneNode(true);
  const placeImage = placeElement.querySelector(".places__image");
  const placesTitle = placeElement.querySelector(".places__title");
  placeImage.src = placeDate.link;
  placeImage.alt = placeDate.name;
  placesTitle.textContent = placeDate.name;
  const deleteButton = placeElement.querySelector(".places__trash_delete-icon");
  const likebutton = placeElement.querySelector(".places__like");
  const handleDelete = () => {
    placeElement.remove();
  };
  const handleLike = () => {
    likebutton.classList.toggle("places__like_active");
  };
  deleteButton.addEventListener("click", handleDelete);
  likebutton.addEventListener("click", handleLike);
  placeImage.addEventListener("click", openPopupSeeImage);
  return placeElement;
}

const renderPlaceElement = (placeElement) => {
  gridPlaces.append(placeElement);
};

initialCards.forEach((place) => {
  renderPlaceElement(createPlaceElement(place));
});

function addPlacePopup(event) {
  event.preventDefault();
  const namePlace = document.querySelector(".popup__input_place_description");
  const linkPlace = document.querySelector(".popup__input_place_link");
  const name = namePlace.value;
  const image = linkPlace.value;
  const placesDate = {
    name,
    link,
  };
  gridPlaces.prepend(createPlaceElement(placesDate));
  closePopup(popupAddPlace);
  event.target.reset();
}

formPopupAddPlace.addEventListener("submit", addPlacePopup);
buttonClosePopupAddPlace.addEventListener("click", () =>
  closePopup(popupAddPlace)
);
buttonOpenPopupAddPlace.addEventListener("click", () =>
  openPopup(popupAddPlace)
); */

//Создание карточки
const gridPlaces = document.querySelector(".places");
const formPopupAddPlace = document.querySelector(".popup__form_place");
const buttonOpenPopupAddPlace = document.querySelector(".profile__add");
const buttonClosePopupAddPlace = document.querySelector(".popup__close-place");
const popupAddPlace = document.querySelector(".popup_type_places");

function addPlacePopup(event) {
  event.preventDefault();
  const namePlace = document.querySelector(".popup__input_place_description");
  const linkPlace = document.querySelector(".popup__input_place_link");
  const name = namePlace.value;
  const image = linkPlace.value;
  const placesDate = {
    name,
    link,
  };
  gridPlaces.prepend(Card.createCard);
  closePopup(popupAddPlace);
  event.target.reset();
}

formPopupAddPlace.addEventListener("submit", addPlacePopup);
buttonClosePopupAddPlace.addEventListener("click", () =>
  closePopup(popupAddPlace)
);
buttonOpenPopupAddPlace.addEventListener("click", () =>
  openPopup(popupAddPlace)
);

// Увеличение карочек
export const popupImages = document.querySelector(".popup_type_more");
export const buttonCloseImageImagesPopup = popupImages.querySelector(
  ".popup__close_type_more"
);
export const imageImagesPopup = document.querySelector(".popup__image");
export const linkImagesPopup = document.querySelector(".popup__description");

export function openPopupSeeImage() {
  imageImagesPopup.alt = this.alt;
  imageImagesPopup.src = this.src;
  linkImagesPopup.textContent = imageImagesPopup.alt;
  openPopup(popupImages);
}

buttonCloseImageImagesPopup.addEventListener("click", () =>
  closePopup(popupImages)
);
