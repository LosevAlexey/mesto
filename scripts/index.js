// Редактирование профиля
const editProfilePopup = document.querySelector('.popup_type_edit-profile');
const editProfileOpenButton = document.querySelector('.profile__edit-button');
const editProfileCloseButton = document.querySelector('.popup__close');
const editProfileNameInput = document.querySelector('.popup__input_form_name');
const editProfileDescriptionInput = document.querySelector('.popup__input_form_description');
const editProfileFormInput = document.querySelector('.popup__form');
const editProfileAuthor = document.querySelector('.profile__author');
const editProfileDescription = document.querySelector('.profile__description');

function openPopup(popupElement) {
  popupElement.classList.add("popup_opened");
}

function closePopup(popupElement) {
  popupElement.classList.remove("popup_opened");Ы
}

function fullInput() {
  editProfileNameInput.value = editProfileAuthor.textContent;
  editProfileDescriptionInput.value = editProfileDescription.textContent;
  openPopup(editProfilePopup);
}

editProfileOpenButton.addEventListener('click', fullInput);
editProfileCloseButton.addEventListener('click', ()=> closePopup(editProfilePopup));

editProfileFormInput.addEventListener('submit', (event) => {
  event.preventDefault();
  editProfileAuthor.textContent = editProfileNameInput.value;
  editProfileDescription.textContent = editProfileDescriptionInput.value;
  closePopup(editProfilePopup);
});

const initialCards = [
  {
    name: 'Абрамцево',
    image: './images/abramtsevo.jpg'
  },
  {
    name: 'Нальчик',
    image: './images/nalchik.jpg'
  },
  {
    name: 'Коломна',
    image: './images/kolomna.jpg'
  },
  {
    name: 'Ростов-на-Дону',
    image: './images/rostov.jpg'
  },
  {
    name: 'Эльбрус',
    image: './images/elbrus.jpg'
  },
  {
    name: 'Гостинный Двор',
    image: './images/dvor.jpg'
  }
];

// Добавление карточек
const placesTemplate = document.getElementById('places-template');
const placesGrid = document.querySelector('.places');
const addPlacePopup = document.querySelector('.popup_type_places');
const addPlacePopupOpenButton = document.querySelector('.profile__add');
const addPlacePopupForm = document.querySelector('.popup__form_place');
const addPlacePopupCloseButton =document.querySelector('.popup__close-place');

function createPlaceElement(placeDate) {
  const placeElement = placesTemplate.content.querySelector('.places__block').cloneNode(true);
  const placeImage = placeElement.querySelector('.places__image');
  const placesTitle = placeElement.querySelector('.places__title');
  placeImage.src = placeDate.image;
  placeImage.alt = placeDate.name;
  placesTitle.textContent = placeDate.name;
  const deleteButton = placeElement.querySelector('.places__trash_delete-icon');
  const likebutton = placeElement.querySelector('.places__like');
  const handleDelete = () => {
    placeElement.remove();
  };
  const handleLike = () => {
    likebutton.classList.toggle('places__like_active');
  };
  deleteButton.addEventListener('click', handleDelete);
  likebutton.addEventListener('click', handleLike);
  placeImage.addEventListener('click', OpenPopupSeeImage);
  return placeElement;
}

const renderPlaceElement = (placeElement) => {
  placesGrid.append(placeElement);
};

initialCards.forEach((place) => {
  renderPlaceElement(createPlaceElement(place));
});

function popupAddPlace(event) {
  event.preventDefault();
  const namePlace = document.querySelector('.popup__input_place_description');
  const linkPlace = document.querySelector('.popup__input_place_link');
  const name = namePlace.value;
  const image = linkPlace.value;
  const placesDate = {
    name,
    image,
  };
  placesGrid.prepend(createPlaceElement(placesDate));
  closePopup(addPlacePopup);
};

addPlacePopupForm.addEventListener("submit", popupAddPlace);
addPlacePopupCloseButton.addEventListener('click', ()=> closePopup(addPlacePopup));
addPlacePopupOpenButton.addEventListener('click', ()=> openPopup(addPlacePopup));

// Увеличение карочек
const ImagesPopup = document.querySelector('.popup_type_more');
const ImagesPopupCloseImageButton = ImagesPopup.querySelector('.popup__close_type_more');
const ImagesPopupImage = document.querySelector('.popup__image');
const ImagesPopupLink = document.querySelector('.popup__description');

function OpenPopupSeeImage() {
  ImagesPopupImage.alt = this.alt;
  ImagesPopupImage.src = this.src;
  ImagesPopupLink.textContent = ImagesPopupImage.alt;
  openPopup(ImagesPopup);
};

ImagesPopupCloseImageButton.addEventListener('click', ()=> closePopup(ImagesPopup));
