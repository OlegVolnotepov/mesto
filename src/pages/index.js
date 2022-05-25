
import { Card } from '../components/scripts/Card.js'
import { FormValidator } from '../components/scripts/FormValidator.js'
import { Section } from '../components/scripts/Section.js'
import { PopupWithImage } from '../components/scripts/PopupWithImage.js'
import { PopupWithForm } from '../components/scripts/PopupWithForm.js'
import { UserInfo } from '../components/scripts/UserInfo.js'
import { Api } from '../components/scripts/Api.js'
import { PopupDeleteCard } from '../components/scripts/PopupDeleteCard.js'
import './index.css';

const config =
  {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButton: '.popup__button',
    submitDisable: 'popup__button_disabled',
    inputErrorClass: 'popup__input_error'
}

const profileForm = document.querySelector('.popup__form');
const cardForm = document.querySelector('.popup__form-card');
const avatarForm = document.querySelector('.popup-avatar__form');
const buttonEdit = document.querySelector('.profile__edit');
const popupName = document.getElementById('name');
const popupAbout = document.getElementById('about');
const elementsCard = document.querySelector('#elements__card').content;
const cardContainer = document.querySelector('.elements');
const cardAddButton = document.querySelector('.profile__add-button');
const avatarAddButton = document.querySelector('.profile__avatar-button');
const card = elementsCard.querySelector('.elements__card');
const profileValidate = new FormValidator(config, profileForm);
const formValidate = new FormValidator(config, cardForm);
const avatarValidate = new FormValidator(config, avatarForm);
const imagePopup = new PopupWithImage('.popup-img');
let myId

imagePopup.setEventListeners();
formValidate.enableValidation();
profileValidate.enableValidation()
avatarValidate.enableValidation()

const api = new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-41',
  headers: {
    authorization: '62838c5f-4a61-4c03-9d7e-35ad7fdce1d3',
    'Content-Type': 'application/json'
  }
});

const initialCards2 = []

Promise.all([api.getAllCards(), api.getUser()])
  .then(([cards, data]) => {
    myId = data._id;
    cards.map((item) => initialCards2.unshift({
      name: item.name,
      link: item.link,
      likes:item.likes,
      id: item.owner._id,
      //cardId: item._id
      _id: item._id
    }));
    cardsList.renderItems();
    userInfo.setUserInfo(data);
    userInfo.setAvatar(data);
  })
  .catch((err) => {
    console.log(`Ошибка: ${err}`);
  });

const createCard = (data) => {
  const cardItem = new Card({
  data: data,
  handleCardClick: () => {
    imagePopup.open(data);
  },
  handeDeleteCardIcon: (data) => {
    deletePopup.open();
    deletePopup.submitCallback(() => {
      api.deleteCard(data)
      .then(() => {
      deletePopup.close();
      cardItem.removeCard();
    })
    .catch((err) => console.log(err));
    })
  },
  handleSetLike: (cardId) => {
    return api.setLike(cardId);
  },
  handleUnSetLike: (cardId) => {
    return api.unSetLike(cardId);
  }}, card, myId)
  const cardElement = cardItem.renderCard();
  return cardElement;
}

const cardsList = new Section({
  items: initialCards2,
  renderer: (data) => {
    cardsList.addItem(createCard(data));
  },
}, cardContainer);

const popupcardContainer = new PopupWithForm({
  popupSelector: '.popup-card',
  handleFormSubmit: (formData) => {
    popupcardContainer.loading(true);
    api.addNewCard(formData)
    .then((formData) => {
      cardsList.addItem(createCard(formData));
      popupcardContainer.close();
    })
    .catch((err) => {
      console.log(`Ошибка: ${err}`);
    })
    .finally(() => {
      popupcardContainer.loading(false);
    })
  }
}, '.popup__form-card');

popupcardContainer.setEventListeners();

const popupAvatarContainer = new PopupWithForm({
  popupSelector: '.popup-avatar',
  handleFormSubmit: (formData) => {
    popupcardContainer.loading(true);
    api.updateAvatar(formData)
    .then((formData) => {
      userInfo.setAvatar(formData);
      popupAvatarContainer.close();
    })
    .catch((err) => {
      console.log(`Ошибка: ${err}`);
    })
    .finally(() => {
      popupAvatarContainer.loading(false);
    })
  }
}, '.popup-avatar__form');

popupAvatarContainer.setEventListeners();

cardAddButton.addEventListener('click', () => {
  popupcardContainer.open();
  formValidate.resetValidation();
});

avatarAddButton.addEventListener('click', () => {
  popupAvatarContainer.open();
  formValidate.resetValidation();
});

const userInfo = new UserInfo('.profile__name', '.profile__about', '.profile__avatar')

const popupEditInfo = new PopupWithForm({
  popupSelector: '.profile-popup',
  handleFormSubmit: (data) => {
    popupEditInfo.loading(true);
    api.setUserInfo(data)
    .then((data) => {
      userInfo.setUserInfo(data);
      popupEditInfo.close();
    })
    .catch((err) => {
      console.log(`Ошибка: ${err}`);
    })
    .finally(() => {
      popupEditInfo.loading(false);
    })
  }
}, '.profile-form');

//Открытие и закрытие попапа редактирования информации - событие
buttonEdit.addEventListener('click', () => {
  const info = userInfo.getUserInfo()
  popupName.value = info.name;
  popupAbout.value= info.about;
  profileValidate.resetValidation();
  popupEditInfo.open();
});
popupEditInfo.setEventListeners();

const deletePopup = new PopupDeleteCard({
  popupSelector: '.popup-remove-card',
  handleFormSubmit: () => {
    api.deleteCard();
  }
}, '.popup-remove-card__form');
deletePopup.setEventListeners();

console.log(myId)
