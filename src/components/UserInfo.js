export default class UserInfo {
  constructor(name, description) {
    this._name = name;
    console.log(this._name);

    this._description = description;
    console.log(this._description);
  }

  getUserInfo() {
    const data = {
      name: this._name.textContent,
      description: this._description.textContent
    }
return data;

  }


  setUserInfo(formValues) {

console.log(formValues);
    this._name.textContent = formValues.name;
    this._description.textContent = formValues.description;
  }
}
