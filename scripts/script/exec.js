const path = require('path');
const { execSync } = require('child_process');
const Utils = require('./utils');

class Exec {
  static call(command) {
    return execSync(command, {
      cwd: Utils.rootPath,
      encoding: 'utf-8'
    });
  }

  static node(command) {
    command = path.resolve(
      Utils.nodePath,
      '.bin',
      command
    );

    return Exec.call(command);
  }
}

module.exports = Exec;
