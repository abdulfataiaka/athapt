class Parsers {
  constructor() {
    this.registry = {};

    this.add = this.add.bind(this);
  }

  add(name) { }
}

module.exports = Parsers;
