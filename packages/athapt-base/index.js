import Boot from './src/boot';
import Config from './src/config';
import Server from './src/server';
import Parser from './src/parser';

class Athapt {
  constructor() {
    this.boot = new Boot();
    this.config = new Config();
    this.parser = new Parser();
  }

  start() {
    (new Server(this)).listen();
  }
}

export default Athapt;
