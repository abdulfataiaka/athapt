import Athapt from '@athapt/base';

const server = new Athapt();

//========================================
//  Register parsers for the server
//========================================

server.parsers.register('rest');

//========================================
//  Configure server behaviour
//========================================

server.config.port = 7000;

//========================================
//  Register init codes
//========================================

server.boot.register('db', () => {});

//========================================
//  Start up server
//========================================

server.start();
