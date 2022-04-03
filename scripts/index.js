const profilePopup = document.querySelector('.profile-popup');
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

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

//Открытие и закрытие попапа редактирования информации - событие
editButton.addEventListener('click', () => {
  popupName.setAttribute('value', name.textContent);
  popupAbout.setAttribute('value', about.textContent);
  openPopup(profilePopup);
  document.addEventListener('keydown', (evt) => closeEsc(evt, profilePopup));
});
profileCloseButton.addEventListener('click', () => closePopup(profilePopup));

//Закрытие попапа изображения
imgCloseButton.addEventListener('click', () => closePopup(popupImgSection));

//Открытие и закрытие попапа добавления карточки - событие
cardAddButton.addEventListener('click', () => {
  openPopup(popupCard);
  document.addEventListener('keydown', (evt) => closeEsc(evt, popupCard));

});
cardAddCloseButton.addEventListener('click', () => closePopup(popupCard));

//Закрытие попапа при клике за пределами - событие
profilePopup.addEventListener('click', function(evt) {
  if(evt.target === evt.currentTarget) {
    closePopup(profilePopup);
  }
})

popupImgSection.addEventListener('click', function(evt) {
  if(evt.target === evt.currentTarget) {
    closePopup(popupImgSection);
  }
})


//Функция закрытия по Esc
function closeEsc(evt, popup) {
  if(evt.key === 'Escape') {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', (evt) => closeEsc(evt, popup))
  }
}

popupCard.addEventListener('click', function(evt) {
  if(evt.target === evt.currentTarget) {
    closePopup(popupCard);
  }
})

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

function openPopup(currentPopup) {
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
profilePopup.addEventListener('submit', handleProfileFormSubmit);

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
  document.addEventListener('keydown', (evt) => closeEsc(evt, popupImgSection));
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
popupCard.addEventListener('submit', renderNewCard);

//Добавление карточек из массива через функцию
function renderCard(link, name) {
  addCard.append(createCard(link, name)); // отображаем на странице
 }

initialCards.forEach((item) => {
  renderCard(item.link, item.name);
})
