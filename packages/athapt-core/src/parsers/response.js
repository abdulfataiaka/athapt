class ResponseParser {
  /**
   * Generic output fields binder to response object
   * 
   * Currently based on the agreement that individual
   * request interfaces will fill up the response
   * object in the same way
   * 
   * @param { HttpResponse } res
   * @param { Output } output
   */
  constructor(res, output) {
    this.res = res;
    this.output = output;
  }

  parse() { /* Add generic behaviour */ }
}

export default ResponseParser;
