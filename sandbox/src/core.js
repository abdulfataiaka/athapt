const Athapt = require('@athapt/core');

const server = new Athapt();

//========================================
//  Register parsers for the server
//========================================

server.parsers.add('rest');  // [!] install @athapt/rest

//========================================
//  Configure server behaviour
//========================================

server.config.port(8000);
server.config.host('127.0.0.1');

//========================================
//  Register init codes
//========================================

server.boot.add('db', () => {});

//========================================
//  Start up server
//========================================

server.up();
