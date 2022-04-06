const profilePopup = document.querySelector('.profile-popup');
const profileForm = document.querySelector('.popup__form');
const cardForm = document.querySelector('.popup__form-card');
const popupCard = document.querySelector('.popup-card');
const editButton = document.querySelector('.profile__edit');
const profileCloseButton = document.querySelector('.popup__close');//closeButton
const popupName = document.getElementById('name');
const popupAbout = document.getElementById('about');
const name = document.querySelector('.profile__name');
const about = document.querySelector('.profile__about');
const elementsCard = document.querySelector('#elements__card').content;
const addCard = document.querySelector('.elements');
const cardAddButton = document.querySelector('.profile__add-button');
const cardAddCloseButton = document.querySelector('.popup-card__close');
const cardSubmitButton = document.querySelector('.popup-card__button');
const cardTitle = document.getElementById('card-title');
const cardUrl = document.getElementById('card-url');
const imgCloseButton = document.querySelector('.popup-img__close');
const popupImgSection = document.querySelector('.popup-img');
const popupImg = document.querySelector('.popup-img__img');
const popupImgTitle = document.querySelector('.popup-img__title')

//Открытие и закрытие попапа редактирования информации - событие
editButton.addEventListener('click', () => {
  popupName.setAttribute('value', name.textContent);
  popupAbout.setAttribute('value', about.textContent);
  openPopup(profilePopup);
  // document.addEventListener('keydown', (evt) => closeEsc(evt, profilePopup));
});

//Закрытие попапа редактирования информации
profileCloseButton.addEventListener('click', () => {
  popupName.setAttribute('value', popupName.value);
  popupAbout.setAttribute('value', popupAbout.value);
  closePopup(profilePopup);
});

//Закрытие попапа изображения
imgCloseButton.addEventListener('click', () => closePopup(popupImgSection));

//Открытие и закрытие попапа добавления карточки - событие
cardAddButton.addEventListener('click', () => {
  openPopup(popupCard);
  //document.addEventListener('keydown', (evt) => closeEsc(evt, popupCard));

});
cardAddCloseButton.addEventListener('click', () => closePopup(popupCard));

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

//Функция закрытия по Esc
// function closeEsc(evt, popup) {
//   if(evt.key === 'Escape') {
//     popup.classList.remove('popup_opened');
//     document.removeEventListener('keydown', (evt) => closeEsc(evt, popup))
//   }
// }
function closeEsc(evt) {
  if(evt.key === 'Escape') {
    const popupOpened = document.querySelector('.popup_opened');
    closePopup(popupOpened)
  }
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  //document.removeEventListener('keydown', (evt) => closeEsc(evt, popup))
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
  //document.addEventListener('keydown', (evt) => closeEsc(evt, popupImgSection));
  document.addEventListener('keydown', closeEsc);
}

function createCard(link, name) {
  const inputUrl = link;
  const inputTitle = name;
  const card = elementsCard.querySelector('.elements__card').cloneNode(true);
  const elementsImg = card.querySelector('.elements__img')
  elementsImg.src = inputUrl;
  card.querySelector('.elements__title').textContent = inputTitle;
  elementsImg.alt = inputTitle;
  const likeButton = card.querySelector('.elements__like');
  likeButton.addEventListener('click', like);
  //блокирование сабмита после добавления карточки
  cardSubmitButton.classList.add('popup__button_disabled');
  cardSubmitButton.setAttribute('disabled', 'disabled');
  //Удаление карточки
  const delButton = card.querySelector('.elements__trash');
  delButton.addEventListener('click', deleteCard);
  //Открытие изображения
  elementsImg.addEventListener('click', () => openImg(link , name));
  return card;
}

function renderNewCard(evt) {
  evt.preventDefault();
  addCard.prepend(createCard(cardUrl.value, cardTitle.value));
  closePopup(popupCard);
  evt.target.reset()
}

//Отправка карточки на страницу - событие
cardForm.addEventListener('submit', renderNewCard);

//Добавление карточек из массива через функцию
function renderCard(link, name) {
  addCard.append(createCard(link, name)); // отображаем на странице
 }

initialCards.forEach((item) => {
  renderCard(item.link, item.name);
})


