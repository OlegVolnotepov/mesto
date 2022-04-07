function enableValidation(config) {
  const inputs = document.querySelectorAll(config.inputSelector);
  inputs.forEach((input) => {
    input.addEventListener('input', function(evt) {
      checkInputValidity(evt, config, input);
      setSubmitButtonState(evt, config);
    });
  })
}

function checkInputValidity(evt, config, input) {
  const form = evt.target.closest(config.formSelector);
  const validity = input.validity.valid;

  if(!validity) {
    setFieldError(input, config);
  } else {
    unsetFieldError(input, config);
  }
}

function setFieldError(input, config) {
  const errorSpan = document.querySelector(`.${input.getAttribute('id')}-error`);
  errorSpan.textContent = input.validationMessage;
  input.classList.add(config.inputErrorClass);
}

function unsetFieldError(input, config) {
  const errorSpan = document.querySelector(`.${input.getAttribute('id')}-error`);
  errorSpan.textContent = '';
  input.classList.remove(config.inputErrorClass);
}

function setSubmitButtonState(evt, config) {
  const form = evt.target.closest(config.formSelector);
  const submitButton = form.querySelector(config.submitButton);
  const isValid = form.checkValidity();

  if (isValid) {
    submitButton.classList.remove(config.submitDisable);
    submitButton.removeAttribute('disabled', 'disabled');
  } else {
    submitButton.classList.add(config.submitDisable);
    submitButton.setAttribute('disabled', 'disabled');
  }

}

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButton: '.popup__button',
  submitDisable: 'popup__button_disabled',
  inputErrorClass: 'popup__input_error'
});

