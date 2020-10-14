import Popup from './Popup.js';

export default class PopupWithConfirm extends Popup {
  constructor(popupSelector, callback, formSelector) {
    super(popupSelector);
    this._callback = callback;
    this._form = this._popupElement.querySelector(formSelector);
    this._submitButton = this._popupElement.querySelector(
      '.button_type_submit'
    );
    this._submitButtonValue = this._submitButton.value;
  }

  open(cardElement, cardId) {
    super.open();
    this._cardElement = cardElement;
    this._id = cardId;
  }

  showPatchStatus(status) {
    if (status) {
      this._submitButton.value = 'Deleting...';
    } else {
      this._submitButton.value = this._submitButtonValue;
    }
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', () => {
      this._callback(this._cardElement, this._id);
      this.showPatchStatus(true);
    });
  }

  close() {
    super.close();
  }
}
