import Boot from './src/boot';
import Config from './src/config';
import Server from './src/server';
import Parsers from './src/parsers';

class Athapt {
  constructor() {
    this.boot = new Boot();
    this.config = new Config();
    this.parsers = new Parsers();
  }

  start() {
    (new Server(this)).listen();
  }
}

export default Athapt;
