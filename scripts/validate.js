function enableValidation(config) {
  const formProfile = document.querySelector(config.formProfile);
  formProfile.addEventListener('submit', (evt) => handlerFormSubmit(evt, config));
  formProfile.addEventListener('input', (evt) => handlerFormInput(evt, config));

  const formAddCard = document.querySelector(config.formAddCard);
  formAddCard.addEventListener('submit', (evt) => handlerFormSubmit(evt, config));
  formAddCard.addEventListener('input', (evt) => handlerFormInput(evt, config));
}

function handlerFormSubmit(evt, config) {
  evt.preventDefault();
  const form = evt.currentTarget;
  const submitButton = form.querySelector(config.submitButton);
  const isValid = form.checkValidity();

  //обнуление формы добавления карты после сабмита
  if (submitButton.classList.toString().includes('popup-card__button')) {
    submitButton.classList.add(config.submitDisable);
    submitButton.setAttribute('disabled', 'disabled');
  }
}

//добавить полосочку красную

function handlerFormInput(evt, config) {
  const form = evt.currentTarget;
  const input = evt.target;
  const validity = input.validity.valid;

  setSubmitButtonState(form, config);

  if(!validity) {
    setFieldError(input);
  } else {
    unsetFieldError(input);
  }

}

function setFieldError(input) {
  const errorSpan = document.getElementById(`${input.getAttribute('id')}-error`);
  errorSpan.textContent = input.validationMessage;
  console.log(input)
  input.classList.add('popup__input_error');
}

function unsetFieldError(input) {
  const errorSpan = document.getElementById(`${input.getAttribute('id')}-error`);
  errorSpan.textContent = '';
  input.classList.remove('popup__input_error');
}

function setSubmitButtonState(form, config) {
  const submitButton = form.querySelector('.popup__button');
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
  formProfile: '.popup__form[name="profile-form"]',
  formAddCard: '.popup__form[name="addCard-form"]',
  submitButton: '.popup__button',
  submitDisable: 'popup__button_disabled'
});
