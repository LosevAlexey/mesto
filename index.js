let container = document.querySelector('.popup');
let editbutton = document.querySelector('.profile__edit-button');
let closeButton = document.querySelector('.form__close');


editbutton.addEventListener('click', () => {
  container.classList.remove("popup");
});





closeButton.addEventListener('click', () => {
  container.classList.remove("popup__opened");
});

