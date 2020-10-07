export default class Api {
  constructor(options) {
    this.baseUrl = options.baseUrl;
    this.headers = options.headers;
  }

  async loadInitialCards() {
    const res = await fetch(this.baseUrl + '/cards', {
      headers: this.headers,
    });
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error: ${res.status}`);
  }

  async loadUserInfo() {
    const res = await fetch(this.baseUrl + '/users/me', {
      headers: this.headers,
    });
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error: ${res.status}`);
  }
}
