export default class Card {
  constructor(card, userId, cardTemplate, handleLikeClick, handleCardClick) {
    this._card = card;
    this._name = this._card.name;
    this._link = this._card.link;
    this._likes = this._card.likes;
    this._id = this._card._id;
    this._ownerId = this._card.owner._id;
    this._userId = userId;
    this._cardTemplate = cardTemplate;
    this._handleLikeClick = handleLikeClick;
    this._handleCardClick = handleCardClick;
    this._cardElement = this._cardTemplate.cloneNode(true);
    this._cardLikes = this._cardElement.querySelector('.card__likes');
  }

  _handleLikeIcon() {
    this._likeButton.classList.toggle('button_type_liked');
    this._handleLikeClick(this._card, this._id, this._isLiked());
    if (!this._isLiked()) {
      this._cardLikes.textContent = parseInt(++this._likes.length);
    } else {
      this._cardLikes.textContent = parseInt(--this._likes.length);
    }
  }

  _isLiked() {
    for (let i = 0; i < this._likes.length; i++) {
      if (this._likes[i]._id === this._userId) {
        return true;
      }
    }
    return false;
  }

  _handleDeleteCard() {
    this._cardElement.remove();
  }

  _addEventListeners() {
    this._likeButton = this._cardElement.querySelector('.button_type_like');
    const deleteButton = this._cardElement.querySelector('.button_type_delete');

    this._likeButton.addEventListener('click', () => {
      this._handleLikeIcon();
    });
    deleteButton.addEventListener('click', () => {
      this._handleDeleteCard();
    });
    this._cardImage.addEventListener('click', () => {
      this._handleCardClick({ name: this._name, link: this._link });
    });
  }

  getCardElement() {
    const cardTitle = this._cardElement.querySelector('.card__title');
    this._cardImage = this._cardElement.querySelector('.card__image');

    this._cardLikes.textContent = this._likes.length;

    cardTitle.textContent = this._name;
    this._cardImage.style.backgroundImage = `url("${this._link}")`;

    this._addEventListeners();

    if (this._isLiked()) {
      this._likeButton.classList.toggle('button_type_liked');
    }

    return this._cardElement;
  }
}
