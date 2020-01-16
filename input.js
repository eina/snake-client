/**
 * Set Up User Interface
 */
// Stores the active TCP connection object.
let connection;

const handleUserInput = (key) => {
  if(key === '\u0003') {    
    process.exit();
  } else if (key === '\u0077') {
    // w
    connection.write('Move: up')
  } else if (key === '\u0061') {
    // a
    connection.write('Move: left')
  } else if (key === '\u0073') {
    // s
    connection.write('Move: down')
  } else if (key === '\u0064') {
    // d
    connection.write('Move: right')
  }
}

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;    
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();  
  stdin.on('data', handleUserInput);
  return stdin;
}

module.exports = {
  setupInput
}