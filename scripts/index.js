const popup = document.querySelector('.popup');
const popupCard = document.querySelector('.popup-card');
const editbutton = document.querySelector('.profile__edit');
const closeButton = document.querySelector('.popup__close');
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
const popupImg = document.querySelector('.popup-img');

//Открытие и закрытие попапа редактирования информации - событие
editbutton.addEventListener('click', showPopup);
closeButton.addEventListener('click', showPopup);

//Открытие и закрытие попапа добавления карточки - событие
cardAddButton.addEventListener('click', showPopupCard);
cardAddCloseButton.addEventListener('click', showPopupCard);

//Закрытие попапа при клике за пределами - событие - сделать такую же для добавления карточки!!!
popup.addEventListener('click', function(event) {
  if(event.target === event.currentTarget) {
    popup.classList.toggle('popup_opened');
  }
})

popupImg.addEventListener('click', function(event) {
  if(event.target === event.currentTarget) {
    popupImg.classList.toggle('popup-img_opened');
  }
})

popupCard.addEventListener('click', function(event) {
  if(event.target === event.currentTarget) {
    popupCard.classList.toggle('popup-card_opened');
  }
})

//Функция открытия попапа добавления информации
function showPopup() {
  popupName.setAttribute('value', name.textContent);
  popupAbout.setAttribute('value', about.textContent);
  popup.classList.toggle('popup_opened');
}

//Функция открытия попапа добавления карточки
function showPopupCard() {
  popupCard.classList.toggle('popup-card_opened');
}

//Функция обработки формы редактирования
function formSubmitHandler (evt) {
  evt.preventDefault();
  // Получите значение полей Input из свойства value
  let inputName = popupName.value;
  let inputAbout = popupAbout.value;
  //вставляем на страницу новые значения
  name.textContent = inputName;
  about.textContent = inputAbout;
  popup.classList.toggle('popup_opened');
}

//Кнопка отправки новой информации - событие
popup.addEventListener('submit', formSubmitHandler);

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

//Функция лайка
function like(evt) {
  evt.target.classList.toggle('elements__like_active');
}

//Функция удаления
function delCard(evt) {
  const cardForRemove = evt.currentTarget.closest('.elements__card');
  cardForRemove.remove();
}

//Функция открытия изображения
function openImg(evt) {
  let targetImg = evt.currentTarget.closest('.elements__img').src;
  let targetTitle = evt.currentTarget.closest('.elements__img').alt;
  const popupImg = document.querySelector('.popup-img');
  document.querySelector('.popup-img__img').src = targetImg;
  document.querySelector('.popup-img__title').textContent = targetTitle;
  popupImg.classList.toggle('popup-img_opened');
}

//Функция закрытия попапа изображения
function closeImg(){
  const popupImg = document.querySelector('.popup-img');
  popupImg.classList.toggle('popup-img_opened');
}

//Закрытие попапа изображения
imgCloseButton.addEventListener('click', closeImg );

//Функция добавления новой карточки на страницу
function renderNewCard(evt) {
  evt.preventDefault();
  // Получите значение полей Input из свойства value
  const inputUrl = cardUrl.value;
  const inputTitle = cardTitle.value;
  const card = elementsCard.querySelector('.elements__card').cloneNode(true);
  card.querySelector('.elements__img').src = inputUrl;
  card.querySelector('.elements__title').textContent = inputTitle;
  card.querySelector('.elements__img').alt = inputTitle;
  const likeButton = card.querySelector('.elements__like');
  likeButton.addEventListener('click', like);

  //Удаление карточки
  const delButton = card.querySelector('.elements__trash');
  delButton.addEventListener('click', delCard);

  //Открытие изображения
  const openCard = card.querySelector('.elements__img')
  openCard.addEventListener('click', openImg);

  addCard.prepend(card);
  showPopupCard();
}

//Отправка карточки на страницу - событие
popupCard.addEventListener('submit', renderNewCard);

//Добавление карточек из массива через функцию
function renderCard(link, name) {
  const card = elementsCard.querySelector('.elements__card').cloneNode(true); // клонируем содержимое тега template
  card.querySelector('.elements__img').src = link; // наполняем содержимым
  card.querySelector('.elements__title').textContent = name;
  card.querySelector('.elements__img').alt = name;
  const likeButton = card.querySelector('.elements__like');
  likeButton.addEventListener('click', like);
  //Удаление карточки
  const delButton = card.querySelector('.elements__trash');
  delButton.addEventListener('click', delCard);
  //Открытие изображения
  const openCard = card.querySelector('.elements__img');
  openCard.addEventListener('click', openImg);
  addCard.append(card); // отображаем на странице
 }

initialCards.forEach((item) => {
  renderCard(item.link, item.name);
})
