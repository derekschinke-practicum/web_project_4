import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor(popupSelector, callback, formSelector) {
    super(popupSelector);
    this._callback = callback;
    this._form = this._popupElement.querySelector(formSelector);
  }

  _getInputValues() {
    const formData = new FormData(this._form);
    const inputValues = Object.fromEntries(formData);
    return inputValues;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', () => {
      this._callback(this._getInputValues());
      this.close();
    });
  }

  close() {
    super.close();
    this._form.reset();
  }
}
