function setInputValidStade(input, errorElement) {
  input.classList.remove('popup__input_type_error');
  errorElement.textContent = '';
}

function setInputInvalidStade(input, errorElement) {
  input.classList.add('popup__input_type_error');
  console.log(errorElement);
  errorElement.textContent = input.validationMessage;
}

//проверяем инпуты
function checkInputValidity(input) {
  console.log(input.validity.valid);
  console.log(input.checkValidity());//проверка валидности
  console.log(input.id);
  const errorElement = document.querySelector(`#error-${input.id}`);//вторая формв не отвечает
  if (input.checkValidity()) {
    setInputValidStade(input, errorElement);
  } else {
    setInputInvalidStade(input, errorElement);
}
};

function disableButton(button) {
  button.setAttribute('disabled', '');
  button.classList.add('popup__button_disabled');
};

function enableButton(button) {
  button.removeAttribute('disabled');
  button.classList.remove('popup__button_disabled');
};

//переключение кнопки
function toggleButtonValidity(formElement) {
  const submitButton = document.querySelector('.popup__button');
  console.log(submitButton);
  disableButton(submitButton);
  if (formElement[length].checkValidity()) {
    enableButton(submitButton);
  } else {
    disableButton(submitButton);
};
}

//валидация формы
function enableValidation() {
  const form = document.querySelectorAll('.popup__form');//ищем формы
  const formArray = Array.from(form);
  console.log(formArray);

  formArray.forEach((formElement) => {
    formElement.addEventListener('submit', function (event) {
      event.preventDefault();

  /*  // отправка формы
   form[length].addEventListener('submit', function (event) {
     event.preventDefault();//не отключаеться */
     toggleButtonValidity(formElement);
 });
});

 toggleButtonValidity(form);

 const inputs = document.querySelectorAll('.popup__input');//ищем инпуты
 console.log(inputs);
 const inputArray = Array.from(inputs);
 console.log(inputArray);// выбираються только 2 инпута

 inputArray.forEach(function (input) {
   input.addEventListener('input', ()=> {
    checkInputValidity(input);
    toggleButtonValidity(form);
  });
 });
  };

  enableValidation({
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
  });
