export class Card {
  constructor({ data, handleCardClick }, selector) {
    this._title = data.title;
    this._link = data.link;
    this._handleCardClick = handleCardClick;
    this._selector = selector;
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
    const imageElement = this._element.querySelector('.elements__img')
    this._elementLike = this._element.querySelector('.elements__like');
    this._element.querySelector('.elements__title').textContent = this._title;
    imageElement.src = this._link;
    imageElement.alt = this._title;
    this._element.querySelector('.elements__trash').addEventListener('click', this._removeCard);
    this._elementLike.addEventListener('click', () => {
    this._like();
    });
    this._element.querySelector('.elements__img').addEventListener('click', () => {
      this._handleCardClick(this._title, this._link);
    });

    return this._element
  }
}
