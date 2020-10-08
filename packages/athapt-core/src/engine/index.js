const express = require('express');

class Engine {
  constructor(factory) {
    this.factory = factory;

    this.up = this.up.bind(this);
  }

  get message() {
    return '\n[*] Start up actual server\n';
  }

  up() {
    console.log(this.message);
  }
}

module.exports = Engine;
