const fs = require('fs');
const path = require('path');

const collectFilesPaths = async (directoryPath) => {
  const directory = await fs.promises.readdir(directoryPath, { withFileTypes: true });

  const filesPaths = await Promise.all(directory.map((file) => {
    const filePath = path.resolve(directoryPath, file.name);

    if (file.isDirectory()) {
      return collectFilesPaths(filePath);
    }

    return filePath;
  }));

  return [].concat(...filesPaths);
};

module.exports = collectFilesPaths;
