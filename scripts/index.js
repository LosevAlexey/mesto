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

function openPopup(popupElement) {
  popupElement.classList.add("popup_opened");
  document.addEventListener("keydown", closeEscape);
  /* const popup = document.querySelector(".popup");
  const popupArray = Array.from(popup);
  console.log(popup);
  console.log(popupArray); */
  console.log(popupElement);
  /* const popup = form.querySelector("popup_opened"); */
  /* console.log(popup);
  popupElement.forEach((pop) => { */
  popupElement.addEventListener("click", closeOverlay);
  /* }); */
}

function closePopup(popupElement) {
  popupElement.classList.remove("popup_opened");
  popupElement.removeEventListener("keydown", closeEscape);
}

function closeEscape(event) {
  if (event.key === "Escape") {
    const escape = document.querySelector(".popup_opened");
    closePopup(escape);
  }
}

function closeOverlay(event) {
  if (event.target === event.currentTarget) {
    closePopup(event.target);
  }
}

function fullInput() {
  nameInputeditProfile.value = authorEditProfile.textContent;
  descriptionInputeditProfile.value = descriptionEditProfile.textContent;
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
});

const initialCards = [
  {
    name: "Абрамцево",
    image: "./images/abramtsevo.jpg",
  },
  {
    name: "Нальчик",
    image: "./images/nalchik.jpg",
  },
  {
    name: "Коломна",
    image: "./images/kolomna.jpg",
  },
  {
    name: "Ростов-на-Дону",
    image: "./images/rostov.jpg",
  },
  {
    name: "Эльбрус",
    image: "./images/elbrus.jpg",
  },
  {
    name: "Гостинный Двор",
    image: "./images/dvor.jpg",
  },
];

// Добавление карточек
const templatePlaces = document.getElementById("places-template");
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
  placeImage.src = placeDate.image;
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
  placeImage.addEventListener("click", OpenPopupSeeImage);
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
    image,
  };
  gridPlaces.prepend(createPlaceElement(placesDate));
  closePopup(popupAddPlace);
}

formPopupAddPlace.addEventListener("submit", addPlacePopup);
buttonClosePopupAddPlace.addEventListener("click", () =>
  closePopup(popupAddPlace)
);
buttonOpenPopupAddPlace.addEventListener("click", () =>
  openPopup(popupAddPlace)
);

// Увеличение карочек
const popupImages = document.querySelector(".popup_type_more");
const buttonCloseImageImagesPopup = popupImages.querySelector(
  ".popup__close_type_more"
);
const imageImagesPopup = document.querySelector(".popup__image");
const linkImagesPopup = document.querySelector(".popup__description");

function OpenPopupSeeImage() {
  imageImagesPopup.alt = this.alt;
  imageImagesPopup.src = this.src;
  linkImagesPopup.textContent = imageImagesPopup.alt;
  openPopup(popupImages);
}

buttonCloseImageImagesPopup.addEventListener("click", () =>
  closePopup(popupImages)
);
