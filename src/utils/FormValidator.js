class FormValidator {
  constructor(name, email, password, age) {
    this.invalidName = this.invalidateName(name);
    this.invalidEmail = this.invalidateEmail(email);
    this.invalidPassword = this.invalidatePassword(password);
    this.invalidAge = this.invalidateAge(age);

    this.invalidForm =
      !name ||
      !email ||
      !password ||
      !age ||
      this.invalidName ||
      this.invalidEmail ||
      this.invalidPassword ||
      this.invalidAge;
  }

  invalidateName = value => value !== null && !value;
  invalidateEmail = value => {
    const emailRegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return value !== null && !emailRegExp.test(value);
  };
  invalidatePassword = value => value !== null && !value;
  invalidateAge = value => value !== null && value < 5;
}

export default FormValidator;
