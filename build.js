const fs = require('fs');
const path = require('path');
const LightningCSS = require('lightningcss');

const inputPath = 'css/main.css';
const outputPath = 'dist/styles.css';

const css = fs.readFileSync(inputPath, 'utf-8');

const { code, map } = LightningCSS.bundle({
  filename: inputPath,
  code: Buffer.from(css),
  minify: true,
  sourceMap: false,
});

const destDir = path.dirname(outputPath);
if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

fs.writeFileSync(outputPath, code);
