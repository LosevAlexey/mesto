export default class Api {
  constructor(options) {
    this._url = options.baseUrl;
    this._headers = options.headers;
    this._authorization = options.headers.authorization;
  }

  getInitialCards() {
    return fetch(`${this._url}/cards`, {
      headers: {
        authorization: this._authorization,
        'Content-Type': 'application/json'
      }
    })
    .then(this._handleResponse);
  }

  deletePlace(cardID) {
    return fetch(`${this._url}/cards/${cardID}`, {
      method: 'DELETE',
      headers: {

        authorization: this._authorization,
        'Content-Type': 'application/json'
      }
    })
      .then(this._handleResponse);
  }

  deleteLike(cardID) {
    return fetch(`${this._url}/cards/${cardID}/likes`, {
      method: 'DELETE',
      headers: {

        authorization: this._authorization,
        'Content-Type': 'application/json'
      }
    })
      .then(this._handleResponse);
  }

  getUserInfo() {
    return fetch(`${this._url}/users/me`, {
      headers: {

        authorization: this._authorization,
        'Content-Type': 'application/json'
      }
    })
      .then(this._handleResponse);
  }

  changeUserInfo(name, description) {
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: {

        authorization: this._authorization,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        about: description
      })
    })
      .then(this._handleResponse);
  }

  changeAvatar(link) {
    return fetch(`${this._url}/users/me/avatar`, {
      method: 'PATCH',
      headers: {

        authorization: this._authorization,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        avatar: link,
      })
    })
      .then(this._handleResponse);
  }

  addCardPlace(name, link) {
    return fetch(`${this._url}/cards`, {
        method: 'POST',
        headers: {

          authorization: this._authorization,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, link })
    })
        .then(this._handleResponse)
    };

  _handleResponse(res) {
    if (res.ok) {
      return res.json();
    }

    // если ошибка, отклоняем промис
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  }

  // другие методы работы с API


