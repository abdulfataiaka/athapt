class Logger {
  static call(message, char) {
    if(!message) console.log();
    else console.log(`[${char}] ${message}`);
  }

  static log(message) {
    Logger.call(message, '*');
  }

  static err(message) {
    Logger.call(message, '!');
  }
}

module.exports = Logger;
