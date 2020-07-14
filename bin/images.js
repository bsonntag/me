const sharp = require('sharp');

const source = sharp('./src/images/ben.jpg');

source.resize(150, 150).toFile('./src/images/ben-150.jpg');
source.resize(300, 300).toFile('./src/images/ben-300.jpg');

const iconSizes = [48, 72, 96, 144, 192, 256, 384, 512];

iconSizes.forEach((size) => {
  source.resize(size, size).png().toFile(`./src/images/icons/icon-${size}.png`);
});
