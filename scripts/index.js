// import { FormValidator } from './FormValidator'
import { Card } from './Card.js'
import { FormValidator } from './FormValidator.js'
import { initialCards } from './cards.js'

const config =
  {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButton: '.popup__button',
    submitDisable: 'popup__button_disabled',
    inputErrorClass: 'popup__input_error'
}

const profilePopup = document.querySelector('.profile-popup');
const profileForm = document.querySelector('.popup__form');
const cardForm = document.querySelector('.popup__form-card');
const popupCard = document.querySelector('.popup-card');
const editButton = document.querySelector('.profile__edit');
const profileCloseButton = document.querySelector('.popup__close');
const popupName = document.getElementById('name');
const popupAbout = document.getElementById('about');
const name = document.querySelector('.profile__name');
const about = document.querySelector('.profile__about');
const elementsCard = document.querySelector('#elements__card').content;
const addCard = document.querySelector('.elements');
const cardAddButton = document.querySelector('.profile__add-button');
const cardAddCloseButton = document.querySelector('.popup-card__close');
const cardTitle = document.getElementById('card-title');
const cardUrl = document.getElementById('card-url');
const imgCloseButton = document.querySelector('.popup-img__close');
const popupImgSection = document.querySelector('.popup-img');
const popupImg = document.querySelector('.popup-img__img');
const popupImgTitle = document.querySelector('.popup-img__title');
const card = elementsCard.querySelector('.elements__card');
const allForms = document.querySelectorAll('.popup__form');
const profileValidate = new FormValidator(config, profileForm);
const formValidate = new FormValidator(config, cardForm);

//Открытие и закрытие попапа редактирования информации - событие

editButton.addEventListener('click', () => {
  popupName.value = name.textContent;
  popupAbout.value= about.textContent;
  profileValidate.resetValidation();
  openPopup(profilePopup);
});

//Закрытие попапа редактирования информации
profileCloseButton.addEventListener('click', () => {
  closePopup(profilePopup);
});

//Закрытие попапа изображения
imgCloseButton.addEventListener('click', () => closePopup(popupImgSection));

//Открытие и закрытие попапа добавления карточки - событие
cardAddButton.addEventListener('click', () => {
  cardTitle.value = '';
  cardUrl.value = '';
  formValidate.disableSubmit();
  openPopup(popupCard);
});

cardAddCloseButton.addEventListener('click', () => {
  closePopup(popupCard);
})

//Закрытие попапа при клике за пределами - событие
profilePopup.addEventListener('click', function(evt) {
  closeOverlay(evt);
})

popupCard.addEventListener('click', function(evt) {
  closeOverlay(evt);
})

popupImgSection.addEventListener('click', function(evt) {
  closeOverlay(evt);
})

function closeOverlay(evt) {
  if(evt.target === evt.currentTarget) {
    closePopup(evt.target);
  }
}

function closeEsc(evt) {
  if(evt.key === 'Escape') {
    const popupOpened = document.querySelector('.popup_opened');
    closePopup(popupOpened)
  }
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeEsc)
}

function openPopup(currentPopup) {
  document.addEventListener('keydown', closeEsc)
  currentPopup.classList.add('popup_opened');
}

//Функция обработки формы редактирования
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  // Получите значение полей Input из свойства value
  const inputName = popupName.value;
  const inputAbout = popupAbout.value;
  //вставляем на страницу новые значения
  name.textContent = inputName;
  about.textContent = inputAbout;
  closePopup(profilePopup);
}

//Кнопка отправки новой информации
profileForm.addEventListener('submit', handleProfileFormSubmit);

//Функция открытия изображения
function openImg(link, name) {
  popupImg.src = link;
  popupImgTitle.textContent = name;
  popupImg.alt = name;
  openPopup(popupImgSection);
}

function newCard(title, link, card, openImg) {
  const newCard = new Card(title, link, card, openImg);
  addCard.prepend(newCard.renderCard());
}

initialCards.reverse().forEach((item) => {
  newCard(item.name, item.link, card, openImg);
})

//Отправка карточки на страницу
cardForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  newCard(cardTitle.value, cardUrl.value, card, openImg);
  closePopup(popupCard);
});

allForms.forEach((form) => {
  const formValidate = new FormValidator(config, form);
  formValidate.enableValidation();
})
