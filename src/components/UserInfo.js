export default class UserInfo {
  constructor({ nameSelector, jobSelector, avatarSelector }) {
    this._nameElement = document.querySelector(nameSelector);
    this._jobElement = document.querySelector(jobSelector);
    this._avatar = document.querySelector(avatarSelector);
  }

  getUserInfo() {
    return {
      name: this._nameElement.textContent,
      job: this._jobElement.textContent,
    };
  }

  setUserInfo(info) {
    this._nameElement.textContent = info.name;
    if (info.job) {
      this._jobElement.textContent = info.job;
    } else {
      this._jobElement.textContent = info.about;
    }
    this._avatar.setAttribute('aria-label', info.name);
  }

  setUserAvatar(avatar) {
    this._avatar.style.backgroundImage = `url(${avatar})`;
  }
}
