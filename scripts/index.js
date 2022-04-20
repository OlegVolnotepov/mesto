// import { FormValidator } from './FormValidator'
import { Card } from './Card.js'
import { FormValidator } from './FormValidator.js'
import { initialCards } from './cards.js'

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

//Открытие и закрытие попапа редактирования информации - событие
editButton.addEventListener('click', () => {
  popupName.value = name.textContent;
  popupAbout.value= about.textContent;
  const formValidate = new FormValidator(config, profileForm);
  formValidate.enableValidation();
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
  const formValidate = new FormValidator(config, cardForm);
  formValidate.enableValidation();
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

//Кнопка отправки новой информации - событие
profileForm.addEventListener('submit', handleProfileFormSubmit);

//Функция лайка
function like(evt) {
  evt.target.classList.toggle('elements__like_active');
}

//Функция удаления
function deleteCard(evt) {
  const cardForRemove = evt.currentTarget.closest('.elements__card');
  cardForRemove.remove();
}

//Функция открытия изображения
function openImg(link, name) {
  popupImg.src = link;
  popupImgTitle.textContent = name;
  popupImg.alt = name;
  openPopup(popupImgSection);
}

const config =
  {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButton: '.popup__button',
    submitDisable: 'popup__button_disabled',
    inputErrorClass: 'popup__input_error'
}

initialCards.forEach((item) => {
  const cardTab = new Card(item.name, item.link, card);
  cardTab.renderCard(addCard);
})

//Отправка карточки на страницу - событие
cardForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const newCard = new Card(cardTitle.value, cardUrl.value, card);
  newCard.renderCard(addCard);
  closePopup(popupCard);
});

allForms.forEach((form) => {
  const formValidate = new FormValidator(config, form);
  formValidate.enableValidation();
})


