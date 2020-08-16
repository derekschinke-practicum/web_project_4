function showInputError(form, input, { errorClass, inputErrorClass, ...rest }) {
  const error = form.querySelector('#' + input.id + '-error');
  error.classList.add(errorClass);
  input.classList.add(inputErrorClass);
  error.textContent = input.validationMessage;
}

function hideInputError(form, input, { errorClass, inputErrorClass, ...rest }) {
  const error = form.querySelector('#' + input.id + '-error');
  error.classList.remove(errorClass);
  input.classList.remove(inputErrorClass);
  error.textContent = '';
}

function checkInputValidity(form, input, rest) {
  if (input.validity.valid) {
    hideInputError(form, input, rest);
  } else {
    showInputError(form, input, rest);
  }
}

function enableValidation({ formSelector, inputSelector, ...rest }) {
  const forms = [...document.querySelectorAll(formSelector)];

  forms.forEach((form) => {
    form.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });

    const inputs = [...form.querySelectorAll(inputSelector)];

    inputs.forEach((input) => {
      input.addEventListener('input', () => {
        checkInputValidity(form, input, rest);
        // toggleButton()
      });
    });
  });
}

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible',
});
