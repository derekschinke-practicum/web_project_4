let editButton = document.querySelector('.button_type_edit');
let closeButton = document.querySelector('.popup__close-button');

let nameProfile = document.querySelector('.profile__name');
let jobProfile = document.querySelector('.profile__job');

let popup = document.querySelector('.popup');
let formElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__input_type_name');
let jobInput = document.querySelector('.popup__input_type_job');

function togglePopup() {
  if (popup.classList.toggle('popup_opened')) {
    nameInput.value = nameProfile.textContent;
    jobInput.value = jobProfile.textContent;

    closeButton.addEventListener('click', togglePopup);
  } else {
    closeButton.removeEventListener('click', togglePopup);
  }
}

function formSubmitHandler(evt) {
  evt.preventDefault();

  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;

  togglePopup();
}

editButton.addEventListener('click', togglePopup);
formElement.addEventListener('submit', formSubmitHandler);
