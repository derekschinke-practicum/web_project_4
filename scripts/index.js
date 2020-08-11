// Wrappers
const addPopup = document.querySelector('.popup_type_add');
const editPopup = document.querySelector('.popup_type_edit');

// openButtons
const editButton = document.querySelector('.button_type_edit');
const addButton = document.querySelector('.button_type_add');

// closeButtons
const closeAddPopupButton = addPopup.querySelector('.popup__close-button');
const closeEditPopupButton = editPopup.querySelector('.popup__close-button');

const nameProfile = document.querySelector('.profile__name');
const jobProfile = document.querySelector('.profile__job');

const editForm = document.querySelector('.popup__form');

const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_job');

function togglePopup(popup) {
  popup.classList.toggle('popup_opened');
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  togglePopup(editPopup);
}

editForm.addEventListener('submit', formSubmitHandler);
editButton.addEventListener('click', () => {
  if (!editPopup.classList.contains('popup_opened')) {
    nameInput.value = nameProfile.textContent;
    jobInput.value = jobProfile.textContent;
  }
  togglePopup(editPopup);
});
closeEditPopupButton.addEventListener('click', () => {
  togglePopup(editPopup);
});

addButton.addEventListener('click', () => {
  togglePopup(addPopup);
  addPopup.classList.add('popup_opened');
});

closeAddPopupButton.addEventListener('click', () => {
  togglePopup(addPopup);
});

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

const cardTemplate = document
  .querySelector('.card__template')
  .content.querySelector('.card');
const list = document.querySelector('.places__list');

initialCards.forEach((data) => {
  const cardElement = cardTemplate.cloneNode(true);

  const cardTitle = cardElement.querySelector('.card__title');
  const cardImage = cardElement.querySelector('.card__image');
  const cardLikeButton = cardElement.querySelector('.button_type_like');
  const cardDeleteButton = cardElement.querySelector('.button_type_delete');

  cardTitle.textContent = data.name;
  cardImage.style.backgroundImage = `url(${data.link})`;

  cardLikeButton.addEventListener('click', () => {
    //handleCardDeleteClick()
  });

  cardDeleteButton.addEventListener('click', () => {
    //open modal
  });

  list.prepend(cardElement);
});
