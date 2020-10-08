class Parsers {
  constructor() {
    this.registry = {};

    this.add = this.add.bind(this);
    this.find = this.find.bind(this);
  }

  add(name) { }

  find(name) { }
}

module.exports = Parsers;
