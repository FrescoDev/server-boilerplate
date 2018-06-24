const jsonfile = require('jsonfile');
const path = `${process.cwd()}/template/interaction-contract/config.json`;

module.exports = config => jsonfile.writeFile(path, config, (err) => new Error(err));

