let popup = document.querySelector('.popup');
let editbutton = document.querySelector('.profile__edit');
let closeButton = document.querySelector('.popup__close');
let popupName = document.getElementById('name');
let popupAbout = document.getElementById('about');
let name = document.querySelector('.profile__name');
let about = document.querySelector('.profile__about');

function showPopup() {
  popupName.setAttribute('value', name.textContent);
  popupAbout.setAttribute('value', about.textContent);
  popup.classList.toggle('popup_opened');
}

editbutton.addEventListener('click', showPopup); 
closeButton.addEventListener('click', showPopup); 

//закрываем попап при клике за пределами
popup.addEventListener('click', function(event) {
  if(event.target === event.currentTarget) {
    popup.classList.toggle('popup_opened');
  }
})

function formSubmitHandler (evt) {
  evt.preventDefault(); 
  // Получите значение полей Input и из свойства value
  let inputName = popupName.value
  let inputAbout = popupAbout.value
  //вставляем на страницу новые значения
  name.textContent = inputName
  about.textContent = inputAbout
  popup.classList.toggle('popup_opened');
}

popup.addEventListener('submit', formSubmitHandler); 