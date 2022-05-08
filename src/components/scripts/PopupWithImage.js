import { Popup } from './Popup.js';

export class PopupWithImage extends Popup{
  constructor(popupSelector, data) {
    super(popupSelector);
    this._popupImg = this._popup.querySelector('.popup-img__img');
    this._popupImgTitle = this._popup.querySelector('.popup-img__title');
    this._link = data.link
    this._name = data.title
  }

  open() {
    this._popupImg.src = this._link;
    this._popupImgTitle.textContent = this._name;
    this._popupImg.alt = this._name;
    this._popup.classList.add('popup_opened');
    super.open();

  }
}


