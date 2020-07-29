const editButton = document.querySelector('.button_type_edit');
const closeButton = document.querySelector('.popup__close-button');

const nameProfile = document.querySelector('.profile__name');
const jobProfile = document.querySelector('.profile__job');

const popup = document.querySelector('.popup');
const formElement = document.querySelector('.popup__form');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_job');

function togglePopup() {
  if (popup.classList.contains('popup_opened')) {
    nameInput.value = nameProfile.textContent;
    jobInput.value = jobProfile.textContent;
  }
  popup.classList.toggle('popup_opened');
}

function formSubmitHandler(evt) {
  evt.preventDefault();

  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;

  togglePopup();
}

editButton.addEventListener('click', togglePopup);
formElement.addEventListener('submit', formSubmitHandler);
closeButton.addEventListener('click', togglePopup);
