export class Section {
  constructor({ items, renderer }, containerSelector) {
    this._initialItems = items;
    this._renderer = renderer;
    this._containerSelector = containerSelector;
  }



  addItem = (element) => {
    this._containerSelector.prepend(element);
  }

  renderItems = () => {
    this._initialItems.forEach(item => this._renderer(item));
  }

}
