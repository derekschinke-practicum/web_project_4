let editButton = document.querySelector('.button_type_edit');
let closeButton = document.querySelector('.button_type_close');

let popup = document.querySelector('.popup');

editButton.addEventListener('click', showPopup);

function showPopup() {
  popup.classList.add('popup_opened');
  editButton.removeEventListener('click', showPopup);
  closeButton.addEventListener('click', hidePopup);
}

function hidePopup() {
  popup.classList.remove('popup_opened');
  closeButton.removeEventListener('click', hidePopup);
  editButton.addEventListener('click', showPopup);
}

let formElement = document.querySelector('.popup__form'); // Use the querySelector() method

function formSubmitHandler(evt) {
  evt.preventDefault();

  let nameInput = document.querySelector('#popup__name'); // Use querySelector()
  let jobInput = document.querySelector('#popup__job'); // Use querySelector()

  nameInputValue = nameInput.value;
  jobInputValue = jobInput.value;

  let nameProfile = document.querySelector('.profile__name');
  let jobProfile = document.querySelector('.profile__job');

  nameProfile.textContent = nameInputValue;
  jobProfile.textContent = jobInputValue;

  hidePopup();
}

formElement.addEventListener('submit', formSubmitHandler);
