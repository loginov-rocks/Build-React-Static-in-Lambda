require('dotenv').config();

const { handler } = require('./index');

handler()
  .then((result) => {
    console.log('Result:', result);
    process.exit();
  })
  .catch((error) => {
    console.error('Error:', error);
    process.exit();
  });
