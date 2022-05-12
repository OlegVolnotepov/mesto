// import { FormValidator } from './FormValidator'
import { Card } from '../components/scripts/Card.js'
import { FormValidator } from '../components/scripts/FormValidator.js'
import { initialCards } from '../utils/cards.js'
import { Section } from '../components/scripts/Section.js'
import { PopupWithImage } from '../components/scripts/PopupWithImage.js'
import { PopupWithForm } from '../components/scripts/PopupWithForm.js'
import { UserInfo } from '../components/scripts/UserInfo.js'
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
const buttonEdit = document.querySelector('.profile__edit');
const popupName = document.getElementById('name');
const popupAbout = document.getElementById('about');
const elementsCard = document.querySelector('#elements__card').content;
const cardContainer = document.querySelector('.elements');
const cardAddButton = document.querySelector('.profile__add-button');
const card = elementsCard.querySelector('.elements__card');
const profileValidate = new FormValidator(config, profileForm);
const formValidate = new FormValidator(config, cardForm);
const imagePopup = new PopupWithImage('.popup-img');

imagePopup.setEventListeners();
formValidate.enableValidation();
profileValidate.enableValidation()

const createCard = (data) => {
  const cardItem = new Card({
  data: data,
  handleCardClick: () => {
    imagePopup.open(data);
  }
}, card)
  const cardElement = cardItem.renderCard();
  return cardElement;
}

const cardsList = new Section({
  items: initialCards,
  renderer: (data) => {
    cardsList.addItem(createCard(data));
  },
}, cardContainer);

cardsList.renderItems();

const popupcardContainer = new PopupWithForm({
  popupSelector: '.popup-card',
  handleFormSubmit: (formData) => {
    cardsList.addItem(createCard(formData));
    popupcardContainer.close();
  }
}, '.popup__form-card');

popupcardContainer.setEventListeners();

cardAddButton.addEventListener('click', () => {
  //formValidate.disableSubmit();
  popupcardContainer.open();
  formValidate.resetValidation();
});

const userInfo = new UserInfo('.profile__name', '.profile__about')

const popupEditInfo = new PopupWithForm({
  popupSelector: '.profile-popup',
  handleFormSubmit: (data) => {
    userInfo.setUserInfo(data);
    popupEditInfo.close();
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
