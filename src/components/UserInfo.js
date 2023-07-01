export default class UserInfo {
  constructor(name, description, link) {
    this._name = name;
    this._description = description;
    this._link = link;
  }

  getUserInfo() {
    const data = {
      name: this._name.textContent,
      description: this._description.textContent,
      link: this._link.src,
    };
    return data;
  }

  setUserInfo(formValues) {
    this._name.textContent = formValues.name;
    this._description.textContent = formValues.description;
    this._link.src = formValues.link;
  }
}
