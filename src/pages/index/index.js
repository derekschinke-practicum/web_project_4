// moduleImports

// polyfill
import 'core-js/stable';
import 'regenerator-runtime/runtime';

// cssImports
import 'normalize.css';
import './index.css';

// scriptImports
import {
  nameSelector,
  jobSelector,
  avatarSelector,
  placesListSelector,
  formValidationSettings,
  editProfilePopupSelector,
  editAvatarPopupSelector,
  deleteCardPopupSelector,
  addCardPopupSelector,
  imagePopupSelector,
} from '../../utils/constants.js';

import Api from '../../components/Api.js';
import UserInfo from '../../components/UserInfo.js';
import Section from '../../components/Section.js';
import Card from '../../components/Card.js';
import PopupWithForm from '../../components/PopupWithForm.js';
import PopupWithConfirm from '../../components/PopupWithConfirm.js';
import PopupWithImage from '../../components/PopupWithImage.js';
import FormValidation from '../../components/FormValidation.js';

// constants

// domElements
const cardTemplate = document
  .querySelector('.card__template')
  .content.querySelector('.card');
const popupForms = Array.from(
  document.querySelectorAll(formValidationSettings.formSelector)
);
const editProfileButton = document.querySelector('.button_type_edit');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_job');
const editAvatarButton = document.querySelector('.profile__avatar');
const addCardButton = document.querySelector('.button_type_add');

// classes
const api = new Api({
  baseUrl: 'https://around.nomoreparties.co/v1/group-5',
  headers: {
    authorization: '8cd049ee-8ebb-4e3d-8437-51e87560cee5',
    'Content-Type': 'application/json',
  },
});

const profileInfo = new UserInfo({ nameSelector, jobSelector, avatarSelector });

const editProfilePopup = new PopupWithForm(
  editProfilePopupSelector,
  editProfileSubmitHandler,
  formValidationSettings.formSelector
);

const editAvatarPopup = new PopupWithForm(
  editAvatarPopupSelector,
  editAvatarSubmitHandler,
  formValidationSettings.formSelector
);

const deleteCardPopup = new PopupWithConfirm(
  deleteCardPopupSelector,
  deleteCardSubmitHandler,
  formValidationSettings.formSelector
);

const addCardPopup = new PopupWithForm(
  addCardPopupSelector,
  addCardSubmitHandler,
  formValidationSettings.formSelector
);

const cardsList = new Section(
  {
    items: [],
    renderer: () => {},
  },
  placesListSelector
);

const imagePopup = new PopupWithImage(imagePopupSelector);

// functions

function handleCardClick(data) {
  imagePopup.open(data);
}

function makeNewCard(data, userId) {
  const card = new Card(
    data,
    userId,
    cardTemplate,
    handleLikeClick,
    handleCardClick,
    openDeletePopup
  );
  return card.getCardElement();
}

function editProfileSubmitHandler(info) {
  api
    .patchUserInfo(info)
    .then(() => {
      profileInfo.setUserInfo(info);
    })
    .then(() => {
      editProfilePopup.close();
    })
    .then(() => {
      editProfilePopup.showPatchStatus(false);
    })
    .catch((err) => {
      console.log(err);
    });
}

function editAvatarSubmitHandler(data) {
  api
    .patchAvatarImage(data.url)
    .then(() => {
      profileInfo.setUserAvatar(data.url);
    })
    .then(() => {
      editAvatarPopup.close();
    })
    .then(() => {
      editAvatarPopup.showPatchStatus(false);
    })
    .catch((err) => {
      console.log(err);
    });
}

function handleLikeClick(card, cardId, isLiked) {
  api
    .updateCardLikes(cardId, isLiked)
    .then((data) => {
      card._likes = data.likes;
    })
    .catch((err) => {
      console.log(err);
    });
}

function addCardSubmitHandler(data) {
  api
    .postCard(data)
    .then((card) => {
      cardsList.addItem(makeNewCard(card, card.owner._id), true);
    })
    .then(() => {
      addCardPopup.close();
    })
    .then(() => {
      addCardPopup.showPatchStatus(false);
    })
    .catch((err) => {
      console.log(err);
    });
}

function openDeletePopup(cardElement, cardId) {
  deleteCardPopup.open(cardElement, cardId);
}

function deleteCardSubmitHandler(cardElement, cardId) {
  api
    .deleteCard(cardId)
    .then(() => {
      deleteCardPopup.close();
      cardElement.remove();
    })
    .then(() => {
      deleteCardPopup.showPatchStatus(false);
    })
    .catch((err) => {
      console.log(err);
    });
}

// calls

api
  .getInitialCardsAndUserInfo()
  .then(([initialCards, userInfo]) => {
    profileInfo.setUserInfo(userInfo);
    profileInfo.setUserAvatar(userInfo.avatar);
    initialCards.forEach((card) => {
      cardsList.addItem(makeNewCard(card, userInfo._id), false);
    });
  })
  .catch((err) => {
    console.log(err);
  });

editProfileButton.addEventListener('click', () => {
  const profileInput = profileInfo.getUserInfo();
  nameInput.value = profileInput.name;
  jobInput.value = profileInput.job;
  editProfilePopup.open();
});
editProfilePopup.setEventListeners();

editAvatarButton.addEventListener('click', () => {
  editAvatarPopup.open();
});
editAvatarPopup.setEventListeners();

addCardButton.addEventListener('click', () => addCardPopup.open());
addCardPopup.setEventListeners();

deleteCardPopup.setEventListeners();

imagePopup.setEventListeners();

popupForms.forEach((form) => {
  const formValidator = new FormValidation(formValidationSettings, form);
  formValidator.enableValidation();
});
