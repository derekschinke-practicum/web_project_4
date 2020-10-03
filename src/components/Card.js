export default class Card {
  constructor(data, cardTemplate, handleCardClick) {
    this._name = data.name;
    this._link = data.link;
    this._cardTemplate = cardTemplate;
    this._handleCardClick = handleCardClick;
  }

  _handleLikeIcon() {
    this._likeButton.classList.toggle('button_type_like_liked');
  }

  _handleDeleteCard() {
    this._card.remove();
  }

  _addEventListeners() {
    this._likeButton = this._card.querySelector('.button_type_like');
    const deleteButton = this._card.querySelector('.button_type_delete');

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
    this._card = this._cardTemplate.cloneNode(true);

    const cardTitle = this._card.querySelector('.card__title');
    this._cardImage = this._card.querySelector('.card__image');

    cardTitle.textContent = this._name;
    this._cardImage.style.backgroundImage = `url("${this._link}")`;

    this._addEventListeners();

    return this._card;
  }
}
