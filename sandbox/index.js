import athapt from '@athapt/base';

const server = athapt();

//========================================
//  Register parsers for the server
//========================================

server.config.parsers.add('rest');

//========================================
//  Configure server behaviour
//========================================

server.config.port = 7000;

//========================================
//  Register init codes
//========================================

server.config.inits.add('db', () => {});

//========================================
//  Start up server
//========================================

server.listen();
