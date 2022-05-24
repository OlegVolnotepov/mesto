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

  _checkIsliked(element) {
    if (element.length > 0) {
      element.map((item) => {
        if (item._id === this._myId) {
          this._elementLike.classList.add('elements__like_active')
        }
      })
    }
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

  _likeSwitcher() {
    if (!this._elementLike.classList.contains("elements__like_active")) {
      this._handleSetLike(this._cardId)
        .then((res) => {
          this._data = res;
          this._elementLikeCounter.textContent = res.likes.length;
          this._elementLike.classList.add("elements__like_active");
        })
        .catch((err) => console.log(err));
    } else {
      this._handleUnSetLike(this._cardId)
        .then((res) => {
          this._data = res;
          this._elementLikeCounter.textContent = res.likes.length;
          this._elementLike.classList.remove("elements__like_active");
        })
        .catch((err) => console.log(err));
    }
  }

  _setEventListeners() {
    this._elementLike.addEventListener("click", () => {
      this._likeSwitcher();
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
    this._checkOwnerCard(this._id, this._element)
    this._checkIsliked(this._isLiked)
    this._setEventListeners();

    return this._element
  }
}
