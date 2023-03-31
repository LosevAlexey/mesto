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
  nameInput.value = author.textContent;
  descriptionInput.value = description.textContent;
}

function closePopup() {
  container.classList.remove("popup_opened");
}


editbutton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);


form.addEventListener('submit', (event) => {
  event.preventDefault();
  author.textContent = nameInput.value;
  description.textContent = descriptionInput.value;
  closePopup();
});
