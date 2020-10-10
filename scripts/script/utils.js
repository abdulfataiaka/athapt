const fs = require('fs');
const path = require('path');

class Utils {
  static rootPath = path.resolve(__dirname, '../..');
  static nodePath = path.resolve(Utils.rootPath, 'node_modules');

  static chomp(strval) {
    return strval.substr(0, strval.length - 1);
  }

  static resolve(_path) {
    return path.resolve(Utils.rootPath, _path);
  }

  static exists(_path, root=true) {
    if(root) _path = Utils.resolve(_path);
    return fs.existsSync(_path);
  }

  static rmrf(_path, root=true) {
    if(root) _path = Utils.resolve(_path);
    return fs.rmdirSync(_path, { recursive: true });
  }
}

module.exports = Utils;
