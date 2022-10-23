const fs = require("fs");
const { generateSW } = require("workbox-build");

function cleanSwFiles() {
  const baseDir = "./docs";
  const fileNames = fs.readdirSync(baseDir);
  for (const fileName of fileNames) {
    const filePath = `${baseDir}/${fileName}`;
    if (fileName === "sw.js" || fileName === "sw.js.map") {
      //through
    } else if (/^workbox-[a-z0-9A-Z]+\.js(\.map)?/.test(fileName)) {
      //through
    } else {
      continue;
    }

    console.log("delete", filePath);
    fs.unlinkSync(filePath);
  }
}

console.log("cleanSwFiles")
cleanSwFiles();

console.log("generateSW")
generateSW({
  globDirectory: 'docs/',
  globPatterns: [
    '**/*.{css,woff2,png,svg,jpg,js,html}'
  ],
  swDest: 'docs/sw.js'
});
