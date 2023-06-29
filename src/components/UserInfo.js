export default class UserInfo {
  constructor(name, description, link) {
    this._name = name;
    console.log(this._name);

    this._description = description;
    console.log(this._description);

    this._link = link;
    console.log(link);
  }

  getUserInfo() {
    const data = {
      name: this._name.textContent,
      description: this._description.textContent,
      link: this._link.src
    }
return data;

  }


  setUserInfo(formValues) {

console.log(formValues);
    this._name.textContent = formValues.name;
    this._description.textContent = formValues.description;

  }

  setUserAvatar(data) {

    console.log(data);

        this._link.src = data.name;
      }
}
