class Config {
  constructor() {
    this.state = {};

    this.port = this.port.bind(this);
    this.host = this.host.bind(this);
  }

  port(value) {}

  host(value) {}
}

module.exports = Config;
