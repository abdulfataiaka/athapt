const Boot = require('./src/boot');
const Engine = require('./src/engine');
const Config = require('./src/config');
const Parsers = require('./src/parsers');

class Athapt {
  constructor() {
    this.boot = new Boot();
    this.config = new Config();
    this.parsers = new Parsers();

    this.up = this.up.bind(this);
  }

  up() {
    (new Engine(this)).up();
  }
}

module.exports = Athapt;
