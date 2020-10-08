const express = require('express');

class Server {
  constructor(factory) {
    this.factory = factory;

    this.up = this.up.bind(this);
  }

  get info() {
    return '\n[*] Start up actual server\n';
  }

  up() {
    console.log(this.info);
  }
}

module.exports = Server;
