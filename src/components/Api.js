export default class Api {
  constructor(options) {
    this.baseUrl = options.baseUrl;
    this.headers = options.headers;
  }

  async getUserInfo() {
    const res = await fetch(this.baseUrl + '/users/me', {
      headers: this.headers,
    });
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error: ${res.status}`);
  }

  async getInitialCards() {
    const res = await fetch(this.baseUrl + '/cards', {
      headers: this.headers,
    });
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error: ${res.status}`);
  }

  async patchAvatarImage(url) {
    const res = await fetch(this.baseUrl + '/users/me/avatar', {
      headers: this.headers,
      method: 'PATCH',
      body: JSON.stringify({ avatar: url }),
    });
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error: ${res.status}`);
  }

  async patchUserInfo({ name, job }) {
    const res = await fetch(this.baseUrl + '/users/me', {
      headers: this.headers,
      method: 'PATCH',
      body: JSON.stringify({ name: name, about: job }),
    });
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error: ${res.status}`);
  }
}
