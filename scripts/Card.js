export class Card {
  constructor(title, link, selector, openImg) {
    this._title = title;
    this._link = link;
    this._selector = selector;
    this._openImg = openImg;
  }

  _like = () => {
    this._elementLike.classList.toggle('elements__like_active');
  }

  _removeCard = () => {
    this._element.remove();
    this._element = null;
  }

  renderCard = () => {
    this._element = this._selector.cloneNode(true);
    this._elementLike = this._element.querySelector('.elements__like');
    this._element.querySelector('.elements__img').src = this._link;
    this._element.querySelector('.elements__title').textContent = this._title;
    this._element.querySelector('.elements__img').alt = this._title;
    this._element.querySelector('.elements__trash').addEventListener('click', this._removeCard);
    this._elementLike.addEventListener('click', () => {
    this._like();
    });
    this._element.querySelector('.elements__img').addEventListener('click', () => {
      this._openImg(this._link, this._title);
    });

    return this._element
  }
}
