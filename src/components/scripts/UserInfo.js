export class UserInfo {
  constructor(nameSelector, aboutSelector) {
    this._nameSelector = document.querySelector(nameSelector);
    this._aboutSelector =document.querySelector(aboutSelector);
  }

  getUserInfo() {
    this._userInfo = {
      name: this._nameSelector.textContent,
      about: this._aboutSelector.textContent
    };

    return this._userInfo
  }

  setUserInfo(data) {
    this._nameSelector.textContent = data.name;
    this._aboutSelector.textContent = data.about;
  }
}
