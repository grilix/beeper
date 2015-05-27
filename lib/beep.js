var exec = require('child_process').execFile,
    parseArgs;

parseArgs = function (args) {
  var _args = [];

  args.map(function (item) {
    if (_args.length > 0) {
      _args.push("-n");
    }

    if (item.frequency) {
      _args.push("-f " + item.frequency);
    }
    if (item.repeat) {
      _args.push("-r " + item.repeat);
    }
  });

  return _args;
};

module.exports = function (beeps) {
  var args = parseArgs(beeps);

  exec("/bin/beep", args, function (error, stdout, stderr) {
    //
  });

  return args;
}
