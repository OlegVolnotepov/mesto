export class Api {
  constructor(config) {
    this._url = config.url;
    this._headers = config.headers;
}

  _Response(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`)
  }

  getAllCards() {
        return fetch(`${this._url}/cards`, {
            headers: this._headers
        })
        .then(res => this._Response(res));
    }

  addNewCard(data) {
      return fetch(`${this._url}/cards`, {
        method: 'POST',
        headers: this._headers,
        body: JSON.stringify({
          name: data.title,
          link: data.link
        })
      })
        .then(res => this._Response(res));
    }

    getUser() {
      return fetch(`${this._url}/users/me`, {
        headers: this._headers
    })
    .then(res => this._Response(res));
    }

    setUserInfo(data) {
      return fetch(`${this._url}/users/me`, {
        method: 'PATCH',
        headers: this._headers,
        body: JSON.stringify({
          name: data.name,
          about: data.about
        })
      })
        .then(res => this._Response(res));
    }

    deleteCard(cardId) {
      return fetch(`${this._url}/cards/${cardId}`, {
        method: 'DELETE',
        headers: this._headers
      })
      .then(res => this._Response(res));
    }

    setLike(cardId) {
      return fetch(`${this._url}/cards/${cardId}/likes`, {
        method: 'PUT',
        headers: this._headers
      })
      .then(res => this._Response(res));
    }

    unSetLike(cardId) {
      return fetch(`${this._url}/cards/${cardId}/likes`, {
        method: 'DELETE',
        headers: this._headers
      })
      .then(res => this._Response(res));
    }

    updateAvatar(data) {
      return fetch(`${this._url}/users/me/avatar`, {
        method: 'PATCH',
        headers: this._headers,
        body: JSON.stringify({
          avatar: data.link
        })
      })
        .then(res => this._Response(res));
    }



  }
