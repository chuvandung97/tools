import chalk from "chalk";
import Jimp from "jimp";

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const image = await Jimp.read("./200-spord.png");

for (var i = 0; i <= 199; i++) {
  for (var j = 0; j <= 199; j++) {
    await sleep(0.000001);
    const rgba = Jimp.intToRGBA(image.getPixelColor(j, i));
    if (j == 0) console.log("\r");
    process.stdout.write(chalk.bgRgb(rgba.r, rgba.g, rgba.b)("   "));
  }
}
