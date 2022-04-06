// function enableValidation(config) {
//   const formProfile = document.querySelector(config.formProfile);
//   formProfile.addEventListener('submit', (evt) => handlerFormSubmit(evt, config));
//   formProfile.addEventListener('input', (evt) => checkInputValidity(evt, config));

//   const formAddCard = document.querySelector(config.formAddCard);
//   formAddCard.addEventListener('submit', (evt) => handlerFormSubmit(evt, config));
//   formAddCard.addEventListener('input', (evt) => checkInputValidity(evt, config));
// }

function enableValidation(config) {
  const forms = document.querySelectorAll(config.formSelector)
  const inputs = document.querySelectorAll(config.inputSelector)

  // forms.forEach((form) => {
  //   form.addEventListener('submit', (evt) => handlerFormSubmit(evt, config))
  // })

  inputs.forEach((input) => {
    input.addEventListener('input', (evt) => checkInputValidity(evt, config))
  })

}

function checkInputValidity(evt, config) {
  const form = evt.target.closest(config.formSelector);
  const input = evt.target;
  const validity = input.validity.valid;

  setSubmitButtonState(form, config);

  if(!validity) {
    setFieldError(input, config);
  } else {
    unsetFieldError(input, config);
  }

}

function setFieldError(input, config) {
  const errorSpan = document.querySelector(`.${input.getAttribute('id')}-error`);
  errorSpan.textContent = input.validationMessage;
  input.classList.add('popup__input_error');
}

function unsetFieldError(input) {
  const errorSpan = document.querySelector(`.${input.getAttribute('id')}-error`);
  errorSpan.textContent = '';
  input.classList.remove('popup__input_error');
}

function setSubmitButtonState(form, config) {
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
});

// enableValidation({
//   inputErrorClass: 'popup__input_type_error',
//   errorClass: 'popup__error_visible'
// });
