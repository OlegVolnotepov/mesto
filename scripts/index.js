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
editButton.addEventListener('click', openPopup);
profileCloseButton.addEventListener('click', closePopup);

//Закрытие попапа изображения
imgCloseButton.addEventListener('click', closePopup);

//Открытие и закрытие попапа добавления карточки - событие
cardAddButton.addEventListener('click', openPopup );
cardAddCloseButton.addEventListener('click', closePopup);

//Закрытие попапа при клике за пределами - событие
profilePopup.addEventListener('click', function(evt) {
  if(evt.target === evt.currentTarget) {
    profilePopup.classList.toggle('popup_opened');
  }
})

popupImgSection.addEventListener('click', function(evt) {
  if(evt.target === evt.currentTarget) {
    popupImgSection.classList.toggle('popup_opened');
  }
})

popupCard.addEventListener('click', function(evt) {
  if(evt.target === evt.currentTarget) {
    popupCard.classList.toggle('popup_opened');
  }
})

//Функция открытия попапа
function openPopup (evt) {
  if (evt.currentTarget.closest('button').classList.contains('profile__add-button')){
    popupCard.classList.toggle('popup_opened');
  }
  if (evt.currentTarget.closest('button').classList.contains('profile__edit-button')){
    popupName.setAttribute('value', name.textContent);
    popupAbout.setAttribute('value', about.textContent);
    profilePopup.classList.toggle('popup_opened');
  }
}

//Функция закрытия попаов
function handleCloseButtonClick(popup) {
  popup.classList.remove('popup_opened');
}

function closePopup(evt) {
  handleCloseButtonClick(evt.target.closest('.popup'));
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
  profilePopup.classList.toggle('popup_opened');
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
  popupImgSection.classList.toggle('popup_opened');
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
  popupCard.classList.remove('popup_opened');
  cardUrl.value = '';
  cardTitle.value = '';
}

//Отправка карточки на страницу - событие
popupCard.addEventListener('submit', renderNewCard);

//Добавление карточек из массива через функцию
function renderCard(link, name) {
  const card = elementsCard.querySelector('.elements__card').cloneNode(true); // клонируем содержимое тега template
  addCard.append(createCard(link, name)); // отображаем на странице
 }

initialCards.forEach((item) => {
  renderCard(item.link, item.name);
})



