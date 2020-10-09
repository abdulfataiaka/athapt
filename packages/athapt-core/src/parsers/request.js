import Input from '../specs/input';
import { NotImplemented } from '../lib/errors';

class RequestParser {
  /**
   * Input object builder expected to be different
   * for each request interface
   * 
   * @param {HttpRequest} req
   */
  constructor(req) {
    this.req = req;
    this.input = new Input();
  }

  parse() { throw new NotImplemented }
}

export default RequestParser;
