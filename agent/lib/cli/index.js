
var parser = require('./parser');

module.exports = {
  parser: function (argv) {
    return parser(argv);
  },
};
