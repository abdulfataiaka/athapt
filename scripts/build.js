const Script = require('./script');

const build = new Script();

build.option('package', 'pkg');

build.action('confirmPackage', ({ utils, logger, options: { package }}) => {
  if(!package || !utils.exists(`packages/${package}`, true)) {
    logger.err(`Package folder not found : ${package}`);
    return false;
  }
});

build.action('removeDist', ({ utils, options: { package }}) => {
  utils.rmrf(`packages/${package}/dist`, true);
});

build.action('createDist', ({ exec, logger, utils, options: { package }}) => {
  const pkgpath = utils.resolve(`packages/${package}`);

  const command = `babel ${pkgpath}/src --out-dir ${pkgpath}/dist`;
  const result = exec.node(command);
  logger.log(utils.chomp(result));
});

build.execute();
