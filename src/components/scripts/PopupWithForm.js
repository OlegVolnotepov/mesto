import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor({ popupSelector, handleFormSubmit }) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._popupForm = document.querySelector('.popup__form-card');
    this._inputTitle = this._popupForm.querySelector('.popup__input').value;
    this._inputUrl = this._popupForm.querySelector('.popup__input_url').value;
  }

  _getInputValues() {
    this._formValues = {};
    this._formValues.title = this._popupForm.querySelector('.popup__input').value;
    this._formValues.link = this._popupForm.querySelector('.popup__input_url').value;

    return this._formValues;
  }

  close() {
    this._popupForm.reset();
    super.close();
    }

  open() {
    this._popup.classList.add('popup_opened');
    super.open();
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
    })
  }

}


