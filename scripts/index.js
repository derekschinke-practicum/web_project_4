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

// Wrappers
const addPopup = document.querySelector('.popup_type_add');
const editPopup = document.querySelector('.popup_type_edit');
const imagePopup = document.querySelector('.popup_type_image');

// openButtons
const openEditPopupButton = document.querySelector('.button_type_edit');
const openAddPopupButton = document.querySelector('.button_type_add');

// closeButtons
const closeAddPopupButton = addPopup.querySelector('.button_type_close');
const closeEditPopupButton = editPopup.querySelector('.button_type_close');
const closeImagePopupButton = imagePopup.querySelector('.button_type_close');

// Profile text
const nameProfile = document.querySelector('.profile__name');
const jobProfile = document.querySelector('.profile__job');

// editForm
const editForm = document.querySelector('.popup__form');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_job');

// addForm

function togglePopup(popup) {
  popup.classList.toggle('popup_opened');
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  togglePopup(editPopup);
}

function handleCardDeleteClick(evt) {
  evt.target.closest('.card').remove();
}

editForm.addEventListener('submit', formSubmitHandler);
openEditPopupButton.addEventListener('click', () => {
  if (!editPopup.classList.contains('popup_opened')) {
    nameInput.value = nameProfile.textContent;
    jobInput.value = jobProfile.textContent;
  }
  togglePopup(editPopup);
});
closeEditPopupButton.addEventListener('click', () => {
  togglePopup(editPopup);
});

openAddPopupButton.addEventListener('click', () => {
  togglePopup(addPopup);
  addPopup.classList.add('popup_opened');
});
closeAddPopupButton.addEventListener('click', () => {
  togglePopup(addPopup);
});

closeImagePopupButton.addEventListener('click', () => {
  togglePopup(imagePopup);
});

initialCards.forEach((data) => {
  const cardElement = cardTemplate.cloneNode(true);

  const cardTitle = cardElement.querySelector('.card__title');
  const cardImage = cardElement.querySelector('.card__image');
  const cardLikeButton = cardElement.querySelector('.button_type_like');
  const cardDeleteButton = cardElement.querySelector('.button_type_delete');

  cardTitle.textContent = data.name;
  cardImage.style.backgroundImage = `url(${data.link})`;

  cardLikeButton.addEventListener('click', () => {
    // changeLikeState()
  });

  cardDeleteButton.addEventListener('click', (evt) => {
    handleCardDeleteClick(evt);
  });

  cardImage.addEventListener('click', () => {
    const popupImage = imagePopup.querySelector('.popup__image');
    const popupCaption = imagePopup.querySelector('.popup__caption');

    popupImage.src = data.link;
    popupImage.alt = data.name;
    popupCaption.textContent = data.name;

    togglePopup(imagePopup);
  });

  list.append(cardElement);
});
