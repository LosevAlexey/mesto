import {
  popupEditProfile,
  popupEditProfileAvatar,
  popupAddPlace,
  popupImages,
  buttonOpenEditProfile,
  buttonOpenEditProfileAvatar,
  buttonOpenPopupAddPlace,
  formPopupAddPlace,
  nameInputeditProfile,
  descriptionInputeditProfile,
  avatarEditProfile,
  authorEditProfile,
  descriptionEditProfile,
  profileElement,
  cardFormElement,
  avatarFormElement,
  popupDeletePlace,
  config,
} from "../utils/constants.js";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js";
import PopupWithConfirmation from "../components/PopupWithConfirmation.js";

import "../pages/index.css";

/* let dataArray = null;

api.getInitialCards().then(data =>{
  dataArray = data
})
console.log(dataArray); */

const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-70",
  headers: {
    authorization: "217ede58-a10f-4670-a309-daf3a817c4aa",
    "Content-Type": "application/json",
  },
});

/* const cardsPromise = api.getInitialCards().then((data) => console.log(data)); */

const createCards = new Section({ renderer: createCard }, ".places");

//Массив данных
api
  .getInitialCards()
  .then((data) => {
    data.forEach((data) => {
      createCard(data);
    });
  })
  .catch((err) => console.log(`carch: ${err}`));

//Карточка
function createCard(data, user) {
  const card = new Card(
    data,
    () => {
      openPopupImage.open(data);
    },
    (card, cardId) => {
      formPopupDeletePlace.open(card, cardId);
    },
    (cardId) => {
      api
        .deleteLike(cardId)
        .then((res) => card.renderLike(res))
        .catch((error) => console.error(`Ошибка ${error}`));
    },
    (cardId) => {
      api
        .putLike(cardId)
        .then((res) => card.renderLike(res))
        .catch((error) => console.error(`Ошибка ${error}`));
    },
    user
  );
  const cardElement = card.createCard();
  createCards.addItem(cardElement);
  return cardElement;
}

// Данные о пользователи
Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([info, initialCards]) => {
    //попадаем сюда, когда оба промиса будут выполнены, деструктурируем ответ
    const userId = info._id;
    const items = initialCards.reverse();
    createCards.renderItems(items, userId);
    userInfo.setUserInfo({
      name: info.name,
      description: info.about,
      link: info.avatar,
      userId: info._id, //все данные получены, отрисовываем страницу
    });
    /* console.log(userId); */
  })
  .catch((error) => console.error(`Ошибка - ${error}`));

//Отправка данных на сервер
function changeUserInfo(formValues) {
  api
    .changeUserInfo(formValues.name, formValues.description)
    .then((res) => {
      userInfo.setUserInfo({
        name: res.name,
        description: res.about,
        link: res.avatar,
      });
      formEditProfile.close();
    })
    .catch((error) => console.error(`Ошибка ${error}`))
    .finally(() => formEditProfile.setButtonLoading());
}

//Отправка аватата на сервер
function changeAvatar(formValues) {
  return api
    .changeAvatar(formValues.link)
    .then((res) => {
      userInfo.setUserInfo({
        name: res.name,
        description: res.about,
        link: res.avatar,
      });
      formEditProfileAvatar.close();
    })
    .catch((error) => console.error(`Ошибка ${error}`))
    .finally(() => formEditProfileAvatar.setButtonLoading());
}

//Добавление новой карточки
let user;
function addPlacePopup(formValues) {
  api
    .addCardPlace(formValues.name, formValues.link)
    .then((newCard) => {
      /*  debugger; */
      createCard(newCard, newCard.owner._id);
      formAddPlace.close();
    })
    /*  console.log(card); */
    .catch((error) => console.error(`Ошибка ${error}`))
    .finally(() => formAddPlace.setButtonLoading());
}

const formEditProfileAvatar = new PopupWithForm(
  popupEditProfileAvatar,
  changeAvatar
);
formEditProfileAvatar.setEventListeners();

const formEditProfile = new PopupWithForm(popupEditProfile, changeUserInfo);
formEditProfile.setEventListeners();

const formAddPlace = new PopupWithForm(popupAddPlace, addPlacePopup);
formAddPlace.setEventListeners();

const openPopupImage = new PopupWithImage(popupImages);
openPopupImage.setEventListeners();

const formPopupDeletePlace = new PopupWithConfirmation(
  popupDeletePlace,
  deletePlace
);
formPopupDeletePlace.setEventListeners();

buttonOpenEditProfile.addEventListener("click", () => {
  const infoObject = userInfo.getUserInfo();
  nameInputeditProfile.value = infoObject.name;
  descriptionInputeditProfile.value = infoObject.description;
  profileValidator.resetValidation();
  formEditProfile.open();
});

buttonOpenPopupAddPlace.addEventListener("click", () => {
  formPopupAddPlace.reset();
  cardValidator.resetValidation();
  formAddPlace.open();
});

buttonOpenEditProfileAvatar.addEventListener("click", () => {
  avatarValidator.resetValidation();
  formEditProfileAvatar.open();
});

const userInfo = new UserInfo(
  authorEditProfile,
  descriptionEditProfile,
  avatarEditProfile
);

//Удоление
function deletePlace(card, cardId) {
  /* console.log(card); */
  /* console.log(cardId); */
  /*   const cardId = card.cardId; */
  api
    .deletePlace(cardId)
    .then(() => {
      card.deleteCard();
      formPopupDeletePlace.close();
      /* console.log(); */
    })
    .catch((error) => console.error(`Ошибка ${error}`))
    .finally(() => formPopupDeletePlace.setButtonLoading());
}

//Для валидации
const profileValidator = new FormValidator(config, profileElement);
const cardValidator = new FormValidator(config, cardFormElement);
const avatarValidator = new FormValidator(config, avatarFormElement);

cardValidator.enableValidation();
profileValidator.enableValidation();
avatarValidator.enableValidation();
