export class UserInfo {
  constructor(nameSelector, aboutSelector, avatarSelector) {
    this._nameElement = document.querySelector(nameSelector);
    this._aboutElement =document.querySelector(aboutSelector);
    this._avatarElement =document.querySelector(avatarSelector);
  }

  getUserInfo() {
    this._userInfo = {
      name: this._nameElement.textContent,
      about: this._aboutElement.textContent
    };

    return this._userInfo
  }

  setUserInfo(data) {
    this._nameElement.textContent = data.name;
    this._aboutElement.textContent = data.about;
    this._avatarElement.src = data.avatar;
  }

  setAvatar(data) {
    this._avatarElement.src = data.avatar;
  }
}
