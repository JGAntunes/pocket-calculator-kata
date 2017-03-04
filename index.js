const Calculator = require('./lib/calculator');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('0. ', (answer) => {
  const calc = Calculator();
  // console.log(`Thank you for your valuable feedback: ${answer}`);
  setTimeout(() => rl.close(), 2000);

});
