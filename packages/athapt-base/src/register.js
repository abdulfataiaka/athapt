class Register {
  store = {}

  add(key, value) {
    this.validate(key, value);
    this.store[key] = value;
  }

  find(key) {
    return this.store[key] || null;
  }

  validate(key, value) {
    //! maybe throw an exception
  }
}

export default Register;
