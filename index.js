const Calculator = require('./lib/calculator');
const IOHandler = require('./lib/io-handler');
const operators = require('./lib/operators');

const calc = Calculator();
const io = IOHandler(operators);

io.on('add', (value) => calc.add(value));
