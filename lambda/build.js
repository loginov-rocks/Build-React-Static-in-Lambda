const { spawn } = require('child_process');

module.exports = (stdout, stderr) => new Promise((resolve, reject) => {
  const buildProcess = spawn('npm', ['run', 'build']);

  buildProcess.stdout.on('data', (data) => {
    stdout(data.toString());
  });

  buildProcess.stderr.on('data', (data) => {
    stderr(data.toString());
  });

  buildProcess.on('error', reject);

  buildProcess.on('close', resolve);
});
