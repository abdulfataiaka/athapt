class Boot {
  constructor() {
    this.state = {};

    this.add = this.add.bind(this);
  }

  add(name, callback) {}
}

module.exports = Boot;
