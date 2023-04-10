const container = document.querySelector('.popup');
const editbutton = document.querySelector('.profile__edit-button');
const closeButton = document.querySelector('.popup__close');
const nameInput = document.querySelector('.popup__input_form_name');
const descriptionInput = document.querySelector('.popup__input_form_description');
const form = document.querySelector('.popup__form');
const author = document.querySelector('.profile__author');
const description = document.querySelector('.profile__description');



function openPopup() {
  container.classList.add("popup_opened");
}

function fullInput() {
  nameInput.value = author.textContent;
  descriptionInput.value = description.textContent;
  openPopup();
}

function closePopup() {
  container.classList.remove("popup_opened");
}


editbutton.addEventListener('click', fullInput);
closeButton.addEventListener('click', closePopup);


form.addEventListener('submit', (event) => {
  event.preventDefault();
  author.textContent = nameInput.value;
  description.textContent = descriptionInput.value;
  closePopup();
});



const initialCards = [
  {
    name: 'Гостинный Двор',
    image: './images/dvor.jpg'
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
    name: 'Коломна',
    image: './images/kolomna.jpg'
  },
  {
    name: 'Нальчик',
    image: './images/nalchik.jpg'
  },
  {
    name: 'Абрамцево',
    image: './images/abramtsevo.jpg'
  }
];



const placesTemplate = document.getElementById('places-template');
const placesGrid = document.querySelector('.places');
const addPlace = document.querySelector('.profile__add');
const popupPlaces = document.querySelector('.popup-places');
const popupImages = document.querySelector('.popup-more');
const seeImage = document.querySelector('.places__image_more');
const editNewPlace = document.querySelector('.popup__form_place');
const buttonCloseAddPlace =document.querySelector('.popup__close-place');


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
  return placeElement;
}

const renderPlaceElement = (placeElement) => {
  placesGrid.prepend(placeElement);
};

initialCards.forEach((place) => {
  renderPlaceElement(createPlaceElement(place));
});

function openPopupAddPlace() {
  popupPlaces.classList.add("popup_opened");
};

function closePopupAddPlace() {
  popupPlaces.classList.remove("popup_opened");
};


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
  renderPlaceElement(createPlaceElement(placesDate));
  closePopupAddPlace(editNewPlace);
};

editNewPlace.addEventListener("submit", popupAddPlace);
buttonCloseAddPlace.addEventListener('click', closePopupAddPlace);

function OpenPopupSeeImage() {
  popupImages.classList.add("popup_opened");
};

function closePopupSeeImage() {
  popupImages.classList.remove("popup_opened");
};

function seePopupSeeImage(event) {
  event.preventDefault();
  console.log();
}

buttonCloseAddPlace.addEventListener('click', closePopupSeeImage);

addPlace.addEventListener('click', openPopupAddPlace);
seeImage.addEventListener('click', OpenPopupSeeImage);
