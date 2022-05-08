// import { FormValidator } from './FormValidator'
import { Card } from '../components/scripts/Card.js'
import { FormValidator } from '../components/scripts/FormValidator.js'
import { initialCards } from '../components/scripts/cards.js'
import { Section } from '../components/scripts/Section.js'
import { Popup } from '../components/scripts/Popup.js'
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
const editButton = document.querySelector('.profile__edit');
const popupName = document.getElementById('name');
const popupAbout = document.getElementById('about');
const elementsCard = document.querySelector('#elements__card').content;
const addCard = document.querySelector('.elements');
const cardAddButton = document.querySelector('.profile__add-button');
const card = elementsCard.querySelector('.elements__card');
const allForms = document.querySelectorAll('.popup__form');
const profileValidate = new FormValidator(config, profileForm);
const formValidate = new FormValidator(config, cardForm);

allForms.forEach((form) => {
  const formValidate = new FormValidator(config, form);
  formValidate.enableValidation();
})

const cardsList = new Section({
  items: initialCards,
  renderer: (data) => {
    const newCard = new Card({
      data: data,
      handleCardClick: () => {
        const imagePopup = new PopupWithImage('.popup-img', data);
        imagePopup.open();
        imagePopup.setEventListeners();
      },
    }, card);
    cardsList.addItem(newCard.renderCard());
  },
}, addCard);

cardsList.renderItems();

const createCard = (data) => {
  const cardItem = new Card({
  data: data,
  handleCardClick: () => {
    const imagePopup = new PopupWithImage('.popup-img', data);
    imagePopup.open();
    imagePopup.setEventListeners();
  }
}, card)
  const cardElement = cardItem.renderCard();
  return cardElement;
}

// создание попапа добавления новой карточки
const popupWithForm = new PopupWithForm({
  popupSelector: '.popup-card',
  handleFormSubmit: (formData) => {
    cardsList.addItem(createCard(formData));
    popupWithForm.close();
  }
});

popupWithForm.setEventListeners();

cardAddButton.addEventListener('click', () => {
  formValidate.disableSubmit();
  popupWithForm.open();
});

const userInfo = new UserInfo('.profile__name', '.profile__about')
const openPopup = new Popup('.profile-popup');

//Открытие и закрытие попапа редактирования информации - событие
editButton.addEventListener('click', () => {

  openPopup.setEventListeners();
  openPopup.open();
  popupName.value = userInfo.getUserInfo().name;
  popupAbout.value= userInfo.getUserInfo().about;
  profileValidate.resetValidation();
});

//Функция обработки формы редактирования
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  // Получите значение полей Input из свойства value
  const inputName = popupName.value;
  const inputAbout = popupAbout.value;
  const data = {
    name: inputName,
    about: inputAbout
  }
  userInfo.setUserInfo(data)
  openPopup.close();
}

//Кнопка отправки новой информации
profileForm.addEventListener('submit', handleProfileFormSubmit);

userInfo.getUserInfo();

