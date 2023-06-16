export default class Section {
  constructor({ items, renderer }, selector) {
    this._renderedItems = items;
    console.log(this._renderedItems);
    this._renderer = renderer;
    console.log(this._renderer);
    this._container = document.querySelector(selector);
    console.log(this._container);
  }

  renderItems() {
    this._renderedItems.forEach((item) => {
      this._renderer(item);
    });
  }

  addItem(element) {
    this._container.append(element);
  }
}
