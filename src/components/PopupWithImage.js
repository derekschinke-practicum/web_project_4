import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }

  open(data) {
    const popupImage = this._popupElement.querySelector('.popup__image');
    const popupCaption = this._popupElement.querySelector('.popup__caption');
    popupImage.src = data.link;
    popupImage.alt = data.name;
    popupCaption.textContent = data.name;
    super.open();
  }
}
