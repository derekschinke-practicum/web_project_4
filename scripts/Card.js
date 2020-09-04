import { imagePopup, togglePopup } from './utils.js';

export default class Card {
  constructor(data, cardTemplateSelector) {
    this._name = data.name;
    this._link = data.link;
    this._cardTemplate = document
      .querySelector(cardTemplateSelector)
      .content.querySelector('.card');
  }

  _handleLikeIcon() {
    this._likeButton.classList.toggle('button_type_like_liked');
  }

  _handleDeleteCard(evt) {
    evt.target.parentNode.remove();
  }

  _handlePreviewPicture() {
    const popupImage = imagePopup.querySelector('.popup__image');
    const popupCaption = imagePopup.querySelector('.popup__caption');

    popupImage.src = this._link;
    popupImage.alt = this._name;
    popupCaption.textContent = this._name;
    togglePopup(imagePopup);
  }

  _addEventListeners() {
    this._likeButton = this._card.querySelector('.button_type_like');
    const deleteButton = this._card.querySelector('.button_type_delete');

    this._likeButton.addEventListener('click', this._handleLikeIcon);
    deleteButton.addEventListener('click', (evt) => {
      this._handleDeleteCard(evt);
    });
    this._cardImage.addEventListener('click', this._handlePreviewPicture);
  }

  getCardElement() {
    this._card = this._cardTemplate.cloneNode(true);

    const cardTitle = this._card.querySelector('.card__title');
    this._cardImage = this._card.querySelector('.card__image');

    cardTitle.textContent = this._name;
    cardImage.style.backgroundImage = `url("${link}")`;

    this._addEventListeners();

    return this._card;
  }
}
