const argvParser = require('yargs-parser');
const Exec = require('./exec');
const Utils = require('./utils');
const Logger = require('./logger');

class Script {
  constructor() {
    this._actions = [];
    this._options = [];

    this.action = this.action.bind(this);
    this.option = this.option.bind(this);
    this.execute = this.execute.bind(this);
    this.buildArgs = this.buildArgs.bind(this);
    this.buildContext = this.buildContext.bind(this);
  }

  option(...names) {
    this._options[names[0]] = names;
  }

  action(name, perform) {
    this._actions.push({ name, perform });
  }

  buildContext() {
    return {
      exec: Exec,
      utils: Utils,
      logger: Logger,
      options: this.buildArgs(),
    };
  }

  buildArgs() {
    //! Might need optimization
    const result = {};
    const argv = argvParser(process.argv);

    Object.entries(this._options).forEach(([id, names]) => {
      for(const name of names) {
        if(name in argv) {
          result[id] = argv[name];
          break;
        }
      }
    });
  
    return result;
  }

  execute() {
    //! Additions should not be in general context
    //! Maybe use a better message console logging
    Logger.log();
    const results = {};
    const context = this.buildContext();

    for(const action of this._actions) {
      const { name, perform } = action;

      Logger.log(`Executing action : ${name}`);
      const result = perform({
        name,
        results,
        ...context,
      });
      
      if(result === false) {
        Logger.err('Terminated\n');
        break
      }

      results[name] = result;
      Logger.log(`Completed\n`)
    }
  }
}

module.exports = Script;
