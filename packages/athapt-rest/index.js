const { AthaptParser } = require('@athapt/parser');

const Request = require('./src/request');
const Response = require('./src/response');

class AthaptRest extends AthaptParser {
  static request(req) {
    (new Request(req)).parse();
  }

  static response(result) {
    (new Response(result)).parse();
  }
}

module.exports = AthaptRest;
