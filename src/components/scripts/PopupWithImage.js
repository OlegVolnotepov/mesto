import { Popup } from './Popup.js';
export class PopupWithImage extends Popup{
  constructor(popupSelector) {
    super(popupSelector);
    this._popupImg = this._popup.querySelector('.popup-img__img');
    this._popupImgTitle = this._popup.querySelector('.popup-img__title');
  }

  open(data) {
    this._popupImg.src = data.link;
    this._popupImgTitle.textContent = data.title;
    this._popupImg.alt = data.title;
    super.open();

  }
}


