import ResponseParser from './response';
import { NotImplemented } from '../lib/errors';

class AthaptParser {
  static request(req) {
    // return input object on parser
    throw new NotImplemented;
  }

  static response(res, output) {
    const parser = new ResponseParser(res, output);
    parser.parse();
    return parser.res;
  }
}

export default AthaptParser;
