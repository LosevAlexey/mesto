function setInputValidStade(config, input, errorElement) {
  input.classList.remove(config.inputErrorClass);
  errorElement.textContent = "";
}

function setInputInvalidStade(config, input, errorElement) {
  input.classList.add(config.inputErrorClass);
  console.log(errorElement);
  errorElement.textContent = input.validationMessage;
}

//проверяем инпуты
function checkInputValidity(config, input, form) {
  console.log(input.validity.valid);
  console.log(input.checkValidity()); //проверка валидности
  console.log(input.id);
  const errorElement = form.querySelector(`#error-${input.id}`); //вторая формв не отвечает
  if (input.checkValidity()) {
    setInputValidStade(config, input, errorElement);
  } else {
    setInputInvalidStade(config, input, errorElement);
  }
}

function disableButton({ inactiveButtonClass }, button) {
  console.log(button);
  button.setAttribute("disabled", "");
  button.classList.add(inactiveButtonClass);
}

function enableButton({ inactiveButtonClass }, button) {
  button.removeAttribute("disabled");
  button.classList.remove(inactiveButtonClass);
}

//переключение кнопки
function toggleButtonValidity({ submitButtonSelector, ...rest }, form) {
  const submitButton = form.querySelector(submitButtonSelector);
  console.log(submitButton);
  disableButton(rest, submitButton);
  if (form.checkValidity()) {
    enableButton(rest, submitButton);
  } else {
    disableButton(rest, submitButton);
  }
}

//валидация формы
function enableValidation({ formSelector, inputSelector, ...rest }) {
  const form = document.querySelectorAll(formSelector); //ищем формы
  const formArray = Array.from(form);
  console.log(formArray);

  formArray.forEach((form) => {
    /* event.preventDefault(); */
    toggleButtonValidity(rest, form);

    const inputs = form.querySelectorAll(inputSelector); //ищем инпуты
    console.log(inputs);
    const inputArray = Array.from(inputs);
    console.log(inputArray);

    inputArray.forEach(function (input) {
      input.addEventListener("input", () => {
        checkInputValidity(rest, input, form);
        toggleButtonValidity(rest, form);
      });
    });
    toggleButtonValidity(rest, form);
  });
}

enableValidation({
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
});
