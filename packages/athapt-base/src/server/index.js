import express from 'express';

class Server {
  constructor(factory) {
    this.factory = factory;
  }

  get info() {
    return '\n[*] Start up actual server\n';
  }

  listen() {
    console.log(this.info);
  }
}

export default Server;
