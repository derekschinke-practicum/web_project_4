export const nameSelector = '.profile__name';
export const jobSelector = '.profile__job';
export const avatarSelector = '.profile__avatar';

export const initialCards = [
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

export const placesList = '.places__list';
export const cardTemplate = document
  .querySelector('.card__template')
  .content.querySelector('.card');

export const formValidationSettings = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible',
};
export const popupForms = Array.from(
  document.querySelectorAll(formValidationSettings.formSelector)
);

export const editProfileButton = document.querySelector('.button_type_edit');
export const editProfilePopupSelector = '.popup_type_edit';
export const nameInput = document.querySelector('.popup__input_type_name');
export const jobInput = document.querySelector('.popup__input_type_job');

export const editAvatarPopupSelector = '.popup_type_edit-avatar';
export const editAvatarButton = document.querySelector('.profile__avatar');

export const addCardButton = document.querySelector('.button_type_add');
export const addCardPopupSelector = '.popup_type_add';

export const imagePopupSelector = '.popup_type_image';
