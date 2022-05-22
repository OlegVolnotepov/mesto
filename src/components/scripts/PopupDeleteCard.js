import { Popup } from "./Popup.js";

export class PopupDeleteCard extends Popup {
  constructor({ popupSelector, handleFormSubmit }, currnetFormSelector) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._popupForm = this._popup.querySelector(currnetFormSelector);
  }

  close() {
    super.close();
    }

  open() {
    super.open();
  }

  submitCallback(remove) {
    this._handleSubmit = remove;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleSubmit();
    })
  }

}
