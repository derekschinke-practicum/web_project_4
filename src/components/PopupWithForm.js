import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor(popupSelector, callback, formSelector) {
    super(popupSelector);
    this._callback = callback;
    this._form = this._popupElement.querySelector(formSelector);
    this._submitButton = this._popupElement.querySelector(
      '.button_type_submit'
    );
    this._submitButtonValue = this._submitButton.value;
  }

  _getInputValues() {
    const formData = new FormData(this._form);
    const inputValues = Object.fromEntries(formData);
    return inputValues;
  }

  showPatchStatus(status) {
    if (status) {
      this._submitButton.value = 'Saving...';
    } else {
      this._submitButton.value = this._submitButtonValue;
    }
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', () => {
      this._callback(this._getInputValues());
      this.showPatchStatus(true);
      // this.close();
    });
  }

  close() {
    super.close();
    this._form.reset();
  }
}
