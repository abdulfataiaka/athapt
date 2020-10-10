import express from 'express';

class Server {
  constructor(config) {
    this.config = config;
  }

  printInfo() {
    let message = '\n[*] Start up actual server\n';
    console.log(message);
  }

  listen() {
    this.printInfo();
    // Call other methods here
  }
}

export default Server;
