export class Card {
  constructor(title, link, selector) {
    this._title = title;
    this._link = link;
    this._selector = selector;
  }

  _like = () => {
    this._element.querySelector('.elements__like').classList.toggle('elements__like_active')
  }

  _removeCard = () => {
    this._element.remove();
  }

  renderCard = (container) => {
    this._element = this._selector.cloneNode(true);
    this._element.querySelector('.elements__img').src = this._link;
    this._element.querySelector('.elements__title').textContent = this._title;
    this._element.querySelector('.elements__like').addEventListener('click', this._like);
    this._element.querySelector('.elements__trash').addEventListener('click', this._removeCard);

    container.prepend(this._element);

  }


}
