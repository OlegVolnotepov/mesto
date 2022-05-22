export class Card {
  constructor({ data, handleCardClick, handeDeleteCardIcon, handleSetLike, handleUnSetLike}, selector, myId) {
    this._title = data.name;
    this._link = data.link;
    this._likeCouter = data.likes.length;
    this._handleCardClick = handleCardClick;
    this._handeDeleteCardIcon = handeDeleteCardIcon;
    this._handleSetLike = handleSetLike;
    this._handleUnSetLike = handleUnSetLike;
    this._selector = selector;
    this._id = data.id;
    this._myId = myId;
    this._cardId = data.cardId;
    this._isLiked = data.likes;
    this._likeButton = this._selector.querySelector('.elements__like');
  }

  // поставить/удалить лайк
  handleLikeCard(data) {
    this._likes = data.likes;
    this._elementLike.classList.toggle('elements__like_active');

    if (!this._elementLike.classList.contains('elements__like_active')) {
      this._elementLikeCounter.textContent = this._elementLikeCounter.textContent - 1;
    } else {
      this._elementLikeCounter.textContent = this._likes.length + 1;
    }
  }

  _checkIsliked(element) {
    if (element.length > 0) {
      element.map((item) => {
        if (item._id === this._myId) {
          this._elementLike.classList.add('elements__like_active')
        }
      })
    }
  }

  _like = () => {
    this._elementLike.classList.toggle('elements__like_active');
  }

  likeCount() {
    this._element.querySelector('.elements__like-counter').textContent = this._likeCouter + 1
  }

  likeUnCount() {
    this._element.querySelector('.elements__like-counter').textContent = this._likeCouter - 1
  }

  _checkOwnerCard(id, element) {
    if (id != this._myId && id != undefined) {
      element.querySelector('.elements__trash').style.visibility = 'hidden'
    }
  }

  removeCard = () => {
    this._element.remove();
    this._element = null;
  }

  //TODO убирать счетчик без перезагрузки страницы

  _setEventListeners() {
    this._elementLike.addEventListener('click', () => {
      if (this._elementLike.classList.contains('elements__like_active')) {
        this._handleUnSetLike(this._cardId);
      } else {
        this._handleSetLike(this._cardId);
      }
    });

    this._element.querySelector('.elements__img').addEventListener('click', () => {
      this._handleCardClick(this._title, this._link);
    });

    this._element.querySelector('.elements__trash').addEventListener('click', () => {
      this._handeDeleteCardIcon(this._cardId);
    });

  }

  renderCard = () => {
    this._element = this._selector.cloneNode(true);
    const imageElement = this._element.querySelector('.elements__img');
    this._elementLike = this._element.querySelector('.elements__like');
    this._elementLikeCounter = this._element.querySelector('.elements__like-counter');
    this._element.querySelector('.elements__title').textContent = this._title;
    this._likesNumber = this._element.querySelector('.elements__like-counter');
    this._likesNumber.textContent = this._likeCouter;
    imageElement.src = this._link;
    imageElement.alt = this._title;

    //TODO: сделать проверку лайкнуто ли, если да - ставим -1 , удаляем лайк. Метод _checkIsliked заменить

    this._checkOwnerCard(this._id, this._element)
    this._checkIsliked(this._isLiked)

    this._setEventListeners();
    return this._element
  }
}
