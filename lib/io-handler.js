
const readline = require('readline');
const EventEmitter = require('events');

class IOHandler extends EventEmitter {
  constructor (ops) {
    super();
    this.ops = ops;
    this.bufferNum = '';
    readline.emitKeypressEvents(process.stdin);
    process.stdin.setRawMode(true);

    process.stdin.on('keypress', (str, key) => this.handleKey(key));
  }

  handleKey (key) {
    const value = key.sequence;
    const num = Number.parseInt(value, 10);
    if (Number.isNaN(num)) return this.handleOp(value);
    this.bufferNum += value;
  }

  handleOp (value) {
    let resultOp;
    for (const op in this.ops) {
      if (op.chars.indexOf(value) >= 0) {
        resultOp = op;
      }
    }

    // Should probably do something about invalid inputs
    if (!resultOp) return;
    this.emit(resultOp.event, this.bufferNum);
    this.bufferNum = '';
  }
}

module.exports = function exportsIOHandler() {
  return new IOHandler(...arguments);
};
