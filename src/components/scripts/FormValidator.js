export class FormValidator {
  constructor(config, form) {
    this._config = config;
    this._form = form;
    this._inputList = this._form.querySelectorAll(config.inputSelector);
    this._submitButton = this._form.querySelector(this._config.submitButton)
  }

  _checkInputValidity = (input) => {
    const validity = input.validity.valid;
    if(!validity) {
      this._setFieldError(input);
    } else {
      this._unsetFieldError(input);
    }
  }

  resetValidation = () => {
    this._setSubmitButtonState();
    this._inputList.forEach((input) => {
      this._unsetFieldError(input);
  });
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
    const isValid = this._form.checkValidity();

  if (isValid) {
    this._submitButton.classList.remove(this._config.submitDisable);
    this._submitButton.removeAttribute('disabled', 'disabled');
  } else {
    this._submitButton.classList.add(this._config.submitDisable);
    this._submitButton.setAttribute('disabled', 'disabled');
  }
  }

  enableValidation = () => {
    this._setSubmitButtonState();
      this._inputList.forEach((input) => {
      this._checkInputValidity(input);
      input.addEventListener('input', () => {
        this._checkInputValidity(input);
        this._setSubmitButtonState();
    });
  })
}
}
