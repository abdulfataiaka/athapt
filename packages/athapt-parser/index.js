const Request = require('./src/request');
const Response = require('./src/response');

class NotImplemented extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
  }
}

class RequestParser {
  constructor(req) {
    this.req = req;
    this.request = new Request();

    this.parse = this.parse.bind(this);
  }

  parse() {
    throw new NotImplemented('RequestParser :: parse');
  }
}

class ResponseParser {
  constructor(result) {
    this.result = result;
    this.response = new Response();

    this.parse = this.parse.bind(this);
  }

  parse() {
    throw new NotImplemented('ResponseParser :: parse');
  }
}

class AthaptParser {
  static request(req) {
    throw new NotImplemented('AthaptParser :: request');
  }

  static response(result) {
    throw new NotImplemented('AthaptParser :: response');
  }
}

module.exports = {
  AthaptParser,
  RequestParser,
  ResponseParser,
};
