const { default: Athapt } = require('@athapt/base');

const server = new Athapt();

//========================================
//  Register parsers for the server
//========================================

server.parsers.register('rest');  // [!] install @athapt/rest

//========================================
//  Configure server behaviour
//========================================

server.config.port = 8000;
server.config.host = '127.0.0.1';

//========================================
//  Register init codes
//========================================

server.boot.register('db', () => {});

//========================================
//  Start up server
//========================================

server.start();
