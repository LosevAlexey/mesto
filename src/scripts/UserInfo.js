export default class UserInfo {
  constructor(name, description) {
    this._name = name;
    this._description = description;
  }

  getUserInfo() {
    const data = {
      name: this._name.textContent,
      description: this._description.textContent
    }
return getUserInfo;
  }

  setUserInfo() {
    this._name.textContent = data.name;
    this._description.textContent = data.description;
  }
}
