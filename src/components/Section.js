export default class Section {
  constructor({ items, renderer }, containerSelector) {
    this._items = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  renderItems() {
    this._items.forEach((item) => {
      this._renderer(item);
    });
  }

  addItem(item, top) {
    if (top === true) {
      this._container.prepend(item);
    } else {
      this._container.append(item);
    }
  }
}
