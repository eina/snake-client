const { connect } = require('./client');

console.log('Connecting ...');
connect();

/**
 * Set Up User Interface
 */
const handleUserInput = () => {
  if(key === '\u0003') {
    process.stdout.write(`Thanks for using me, ciao!\n`);
    process.exit();
  }
}

const setupInput = () => {
  const stdin = process.stdin;    
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();  
  stdin.on('data', handleUserInput);
  return stdin;
}
