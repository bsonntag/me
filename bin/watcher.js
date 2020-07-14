const chokidar = require('chokidar');
const { closeSync, openSync, utimesSync } = require('fs');

function touch(path) {
  try {
    const time = new Date();
    utimesSync(path, time, time);
  } catch (err) {
    closeSync(openSync(path, 'w'));
  }
}

// Fix HMR for posthtml-modules
chokidar
  .watch('src/components/*.html', { persistent: true })
  .on('change', () => {
    touch('src/index.html');
  });
