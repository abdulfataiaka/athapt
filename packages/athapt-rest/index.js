const { AthaptParser } = require('@athapt/parser');

const Request = require('./src/request');
const Response = require('./src/response');

class AthaptRest extends AthaptParser {
  static request(req) {
    const instance = new Request(req);
    instance.parse();
    return instance.request;
  }

  static response(result) {
    const instance = new Response(result);
    instance.parse();
    return instance.response;
  }
}

module.exports = AthaptRest;
