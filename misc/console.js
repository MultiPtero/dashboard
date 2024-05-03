const chalk = require("chalk");

function timestamp() {
  const now = new Date();
  return `${now.toLocaleString()}`;
}

function logWithInfo() {
  const originalLog = console.log;
  console.log = function () {
    const stack = new Error().stack.split("\n");
    const filePath = stack[2].trim().replace(__dirname + "/", "");
    const prefix = `${chalk.bgGray(" " + timestamp() + " ")}`;
    // this was here: ${chalk.bgBlue(' ' + (filePath.replace('at Server.<anonymous> (/home/container/', '')).replace(')', '') + ' ')}
    const args = Array.from(arguments);
    args.unshift(prefix);
    originalLog.apply(
      console,
      args.map((arg) => chalk.gray(arg))
    );
  };
}

module.exports = logWithInfo;
