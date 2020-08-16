function showInputErrorMessage(
  form,
  input,
  { errorClass, inputErrorClass, ...rest }
) {
  const error = form.querySelector('#' + input.id + '-error');
  error.classList.add(errorClass);
  input.classList.add(inputErrorClass);
  error.textContent = input.validationMessage;
}

function hideInputErrorMessage(
  form,
  input,
  { errorClass, inputErrorClass, ...rest }
) {
  const error = form.querySelector('#' + input.id + '-error');
  error.classList.remove(errorClass);
  input.classList.remove(inputErrorClass);
  error.textContent = '';
}

function checkInputValidity(form, input, rest) {
  if (input.validity.valid) {
    hideInputErrorMessage(form, input, rest);
  } else {
    showInputErrorMessage(form, input, rest);
  }
}

function toggleButton(inputs, button, form, { inactiveButtonClass, ...rest }) {
  const isValid = inputs.some((input) => {
    return !input.validity.valid;
  });

  if (isValid) {
    button.classList.remove(inactiveButtonClass);
  } else {
    button.classList.add(inactiveButtonClass);
  }
}

function enableValidation({
  formSelector,
  inputSelector,
  submitButtonSelector,
  ...rest
}) {
  const forms = [...document.querySelectorAll(formSelector)];

  forms.forEach((form) => {
    form.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });

    const inputs = [...form.querySelectorAll(inputSelector)];
    const button = form.querySelector(submitButtonSelector);

    inputs.forEach((input) => {
      input.addEventListener('input', () => {
        checkInputValidity(form, input, rest);
        toggleButton(inputs, button, form, rest);
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
