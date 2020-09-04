// moduleImports
import { imagePopup, togglePopup } from './utils.js';
import Card from './Card.js';
import FormValidation from './FormValidation.js';

// constants

// formValidationSettings
const formValidationSettings = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible',
};

// cards
const initialCards = [
  {
    name: 'Yosemite Valley',
    link: 'https://code.s3.yandex.net/web-code/yosemite.jpg',
  },
  {
    name: 'Lake Louise',
    link: 'https://code.s3.yandex.net/web-code/lake-louise.jpg',
  },
  {
    name: 'Bald Mountains',
    link: 'https://code.s3.yandex.net/web-code/bald-mountains.jpg',
  },
  {
    name: 'Latemar',
    link: 'https://code.s3.yandex.net/web-code/latemar.jpg',
  },
  {
    name: 'Vanoise National Park',
    link: 'https://code.s3.yandex.net/web-code/vanoise.jpg',
  },
  {
    name: 'Lago di Braies',
    link: 'https://code.s3.yandex.net/web-code/lago.jpg',
  },
];

// cardTemplate
const cardTemplate = document
  .querySelector('.card__template')
  .content.querySelector('.card');
const list = document.querySelector('.places__list');

// wrappers
const addPopup = document.querySelector('.popup_type_add');
const editPopup = document.querySelector('.popup_type_edit');

// openButtons
const openEditPopupButton = document.querySelector('.button_type_edit');
const openAddPopupButton = document.querySelector('.button_type_add');

// closeButtons
const closeAddPopupButton = addPopup.querySelector('.button_type_close');
const closeEditPopupButton = editPopup.querySelector('.button_type_close');
const closeImagePopupButton = imagePopup.querySelector('.button_type_close');

// profileText
const nameProfile = document.querySelector('.profile__name');
const jobProfile = document.querySelector('.profile__job');

// editForm
const editForm = document.querySelector('.popup__form_type_edit');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_job');

// addForm
const addForm = document.querySelector('.popup__form_type_add');
const titleInput = document.querySelector('.popup__input_type_title');
const imageURLInput = document.querySelector('.popup__input_type_image-url');

// formValidation
const addPopupForm = addPopup.querySelector('.popup__form');
const editPopupForm = editPopup.querySelector('.popup__form');

const editFormValidator = new FormValidation(
  formValidationSettings,
  addPopupForm
);
const addFormValidator = new FormValidation(
  formValidationSettings,
  editPopupForm
);

// functions

// sumbitHandlers
function editFormSubmitHandler(evt) {
  evt.preventDefault();
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  togglePopup(editPopup);
}

function addFormSubmitHandler(evt) {
  evt.preventDefault();
  const card = new Card(
    { name: titleInput.value, link: imageURLInput.value },
    cardTemplate
  );
  const cardElement = card.getCardElement();
  list.prepend(cardElement);
  togglePopup(addPopup);
}

// editForm
editForm.addEventListener('submit', editFormSubmitHandler);

openEditPopupButton.addEventListener('click', () => {
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
  togglePopup(editPopup);
});

closeEditPopupButton.addEventListener('click', () => {
  togglePopup(editPopup);
});

// addForm
addForm.addEventListener('submit', addFormSubmitHandler);

openAddPopupButton.addEventListener('click', () => {
  togglePopup(addPopup);
});

closeAddPopupButton.addEventListener('click', () => {
  togglePopup(addPopup);
});

closeImagePopupButton.addEventListener('click', () => {
  togglePopup(imagePopup);
});

// cardGeneration
initialCards.forEach((data) => {
  const card = new Card(data, cardTemplate);
  const cardElement = card.getCardElement();
  list.append(cardElement);
});

// formValidation
editFormValidator.enableValidation();
addFormValidator.enableValidation();
