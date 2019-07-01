const interface = require('./interface');
const util = require('util');

const moduleName = interface();

try {
  const moduleToInspect = require(moduleName);
  console.log(util.inspect(moduleName, {
    colors: true
  }));
} catch (error) {
  console.error(`The module called ${moduleName} was unavailable for your beady eye!`);
  console.error(`Such is the reason: ${error.message}`);
  process.exitCode = 1;
}

// console.log(util);
