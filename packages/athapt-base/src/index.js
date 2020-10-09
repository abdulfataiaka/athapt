import Boot from './boot';
import Config from './config';
import Server from './server';
import Parsers from './parsers';

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
