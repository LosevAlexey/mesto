const container = document.querySelector('.popup');
const editbutton = document.querySelector('.profile__edit-button');
const closeButton = document.querySelector('.popup__close');
const nameInput = document.querySelector('.popup__name_box_empty');
const descriptionInput = document.querySelector('.popup__description_box_empty');
const saveButton = document.querySelector('.popup__save');
const form = document.querySelector('.popup__form');
const author = document.querySelector('.profile__author');
const description = document.querySelector('.profile__description');


function openPopup() {
  container.classList.add("popup_opened");
  nameInput.value = author.innerHTML;
  descriptionInput.value = description.innerHTML;
}

function closePopup() {
  container.classList.remove("popup_opened");

}


editbutton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);


form.addEventListener('submit', (event) => {
  event.preventDefault();
  author.innerHTML = nameInput.value;
  container.classList.remove("popup_opened");
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  description.innerHTML = descriptionInput.value;
  container.classList.remove("popup_opened");
});
