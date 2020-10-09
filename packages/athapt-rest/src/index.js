import AthaptParser from '@athapt/core/AthaptParser';
import Request from './request';

class Parser extends AthaptParser {
  static request(req) {
    const parser = new Request(req);
    parser.parse();
    return parser.input;
  }
}

export default Parser;
