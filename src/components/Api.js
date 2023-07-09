export default class Api {
  constructor(options) {
    this._url = options.baseUrl;
    this._headers = options.headers;
    this._authorization = options.headers.authorization;
  }

  async getInitialCards() {
    const res = await fetch(`${this._url}/cards`, {
      headers: this._headers,
    });
    return this._handleResponse(res);
  }

  async deletePlace(cardID) {
    const res = await fetch(`${this._url}/cards/${cardID}`, {
      method: "DELETE",
      headers: this._headers,
    });
    return this._handleResponse(res);
  }

  async putLike(cardId) {
    const res = await fetch(`${this._url}/cards/${cardId}/likes`, {
      method: "PUT",
      headers: this._headers,
    });
    return this._handleResponse(res);
  }

  async deleteLike(cardID) {
    const res = await fetch(`${this._url}/cards/${cardID}/likes`, {
      method: "DELETE",
      headers: this._headers,
    });
    return this._handleResponse(res);
  }

  async getUserInfo() {
    const res = await fetch(`${this._url}/users/me`, {
      headers: this._headers,
    });
    return this._handleResponse(res);
  }

  async changeUserInfo(name, description) {
    const res = await fetch(`${this._url}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        about: description,
      }),
    });
    return this._handleResponse(res);
  }

  async changeAvatar(link) {
    const res = await fetch(`${this._url}/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        avatar: link,
      }),
    });
    return this._handleResponse(res);
  }

  async addCardPlace(name, link) {
    const res = await fetch(`${this._url}/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({ name, link }),
    });
    return this._handleResponse(res);
  }

  _handleResponse(res) {
    if (res.ok) {
      return res.json();
    }

    // если ошибка, отклоняем промис
    return Promise.reject(`Ошибка: ${res.status}`);
  }
}

// другие методы работы с API
