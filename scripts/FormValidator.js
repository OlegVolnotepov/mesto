export class FormValidator {
  constructor(config, form) {
    this._config = config;
    this._form = form;
  }

  _checkInputValidity = (input) => {
    const validity = input.validity.valid;
    if(!validity) {
      this._setFieldError(input);
    } else {
      this._unsetFieldError(input);
    }
  }

  disableSubmit = () => {
    this._form.querySelector(this._config.submitButton).classList.add(this._config.submitDisable);
  }

  resetValidation = () => {
    const submitButton = this._form.querySelector(this._config.submitButton);
    this._form.querySelectorAll('.popup__error').forEach((item) => {
      item.textContent = '';
    })
    this._form.querySelectorAll('.popup__input').forEach((item) => {
      item.classList.remove(this._config.inputErrorClass);
    })
    submitButton.classList.remove(this._config.submitDisable);
    submitButton.removeAttribute('disabled', 'disabled');
  }

  _setFieldError = (input) => {
    const errorSpan = document.querySelector(`.${input.getAttribute('id')}-error`);
    errorSpan.textContent = input.validationMessage;
    input.classList.add(this._config.inputErrorClass);
  }

  _unsetFieldError = (input) => {
    const errorSpan = document.querySelector(`.${input.getAttribute('id')}-error`);
    errorSpan.textContent = '';
    input.classList.remove(this._config.inputErrorClass);
  }

  _setSubmitButtonState = () => {
    const submitButton = this._form.querySelector(this._config.submitButton);
    const isValid = this._form.checkValidity();

  if (isValid) {
    submitButton.classList.remove(this._config.submitDisable);
    submitButton.removeAttribute('disabled', 'disabled');
  } else {
    submitButton.classList.add(this._config.submitDisable);
    submitButton.setAttribute('disabled', 'disabled');
  }
  }

  enableValidation = () => {
    this._setSubmitButtonState();
    this._form.querySelectorAll('.popup__input').forEach((input) => {
      this._checkInputValidity(input);
      input.addEventListener('input', () => {
        this._checkInputValidity(input);
        this._setSubmitButtonState();
    });
  })
}
}
