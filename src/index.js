// moduleImports

import './pages/index.css';

import {
  nameSelector,
  jobSelector,
  initialCards,
  placesList,
  cardTemplate,
  formValidationSettings,
  popupForms,
  editProfileButton,
  editProfilePopupSelector,
  nameInput,
  jobInput,
  addCardButton,
  addCardPopupSelector,
  imagePopupSelector,
} from './utils/constants.js';

import UserInfo from './components/UserInfo.js';
import Section from './components/Section.js';
import Card from './components/Card.js';
import PopupWithForm from './components/PopupWithForm.js';
import PopupWithImage from './components/PopupWithImage.js';
import FormValidation from './components/FormValidation.js';
import Api from './components/Api.js';

// constants

const api = new Api({
  baseUrl: 'https://around.nomoreparties.co/v1/group-5',
  headers: {
    authorization: '8cd049ee-8ebb-4e3d-8437-51e87560cee5',
    'Content-Type': 'application/json',
  },
});

const profileInfo = new UserInfo({ nameSelector, jobSelector });

const cardsList = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const card = makeNewCard(item);
      cardsList.addItem(card);
    },
  },
  placesList
);

const editProfilePopup = new PopupWithForm(
  editProfilePopupSelector,
  editProfileSubmitHandler,
  formValidationSettings.formSelector
);

const addCardPopup = new PopupWithForm(
  addCardPopupSelector,
  addCardSubmitHandler,
  formValidationSettings.formSelector
);

const imagePopup = new PopupWithImage(imagePopupSelector);

// functions

function handleCardClick(data) {
  imagePopup.open(data);
}

function makeNewCard(data) {
  const card = new Card(data, cardTemplate, handleCardClick);
  return card.getCardElement();
}

function editProfileSubmitHandler({ name, job }) {
  profileInfo.setUserInfo({ name, job });
}

function addCardSubmitHandler({ title, url }) {
  const card = makeNewCard({ name: title, link: url });
  cardsList.addItem(card);
}

// calls

cardsList.renderItems();

editProfileButton.addEventListener('click', () => {
  const profileInput = profileInfo.getUserInfo();
  nameInput.value = profileInput.name;
  jobInput.value = profileInput.job;
  editProfilePopup.open();
});
editProfilePopup.setEventListeners();

addCardButton.addEventListener('click', () => addCardPopup.open());
addCardPopup.setEventListeners();

imagePopup.setEventListeners();

popupForms.forEach((form) => {
  const formValidator = new FormValidation(formValidationSettings, form);
  formValidator.enableValidation();
});
