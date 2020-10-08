const Boot = require('./src/boot');
const Config = require('./src/config');
const Server = require('./src/server');
const Parsers = require('./src/parsers');

class Athapt {
  constructor() {
    this.boot = new Boot();
    this.config = new Config();
    this.parsers = new Parsers();

    this.up = this.up.bind(this);
  }

  up() {
    (new Server(this)).up();
  }
}

module.exports = Athapt;
