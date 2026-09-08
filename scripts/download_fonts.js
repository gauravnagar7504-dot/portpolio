import https from 'node:https';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const fontsDir = path.join(rootDir, 'public', 'fonts');

if (!fs.existsSync(fontsDir)) {
  fs.mkdirSync(fontsDir, { recursive: true });
}

const url = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;700;800&display=swap';

const options = {
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36'
  }
};

function downloadFile(fileUrl, outputPath) {
  return new Promise((resolve, reject) => {
    https.get(fileUrl, (res) => {
      if (res.statusCode !== 200) {
        reject(new Error(`Failed to download ${fileUrl}: ${res.statusCode}`));
        return;
      }
      const stream = fs.createWriteStream(outputPath);
      res.pipe(stream);
      stream.on('finish', () => {
        stream.close();
        resolve();
      });
      stream.on('error', reject);
    }).on('error', reject);
  });
}

function fetchText(urlToFetch, opts) {
  return new Promise((resolve, reject) => {
    https.get(urlToFetch, opts, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

async function run() {
  console.log('Fetching Google Fonts stylesheet...');
  const css = await fetchText(url, options);

  // Split into @font-face blocks
  const blocks = css.split('@font-face').filter(b => b.trim().length > 0);
  console.log(`Found ${blocks.length} font blocks.`);

  let localCss = '/* Self-hosted Local Fonts for Maximum Performance */\n';

  let fontCount = 0;
  for (const block of blocks) {
    // Only process latin subset to keep font size minimal
    if (!block.includes('/* latin */')) {
      continue;
    }

    const familyMatch = block.match(/font-family:\s*['"]?([^'";]+)['"]?/);
    const weightMatch = block.match(/font-weight:\s*([^;]+);/);
    const styleMatch = block.match(/font-style:\s*([^;]+);/);
    const urlMatch = block.match(/url\((https:\/\/[^)]+\.woff2)\)/);

    if (!familyMatch || !weightMatch || !urlMatch) continue;

    const family = familyMatch[1].trim();
    const weight = weightMatch[1].trim();
    const style = styleMatch ? styleMatch[1].trim() : 'normal';
    const remoteUrl = urlMatch[1];

    const safeName = `${family.toLowerCase().replace(/\s+/g, '-')}-${weight}${style !== 'normal' ? '-' + style : ''}.woff2`;
    const localPath = path.join(fontsDir, safeName);

    console.log(`Downloading ${safeName} from ${remoteUrl}...`);
    await downloadFile(remoteUrl, localPath);
    fontCount++;

    localCss += `
@font-face {
  font-family: '${family}';
  font-style: ${style};
  font-weight: ${weight};
  font-display: swap;
  src: url('/fonts/${safeName}') format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
`;
  }

  const outputCssPath = path.join(rootDir, 'src', 'fonts.css');
  fs.writeFileSync(outputCssPath, localCss, 'utf8');
  console.log(`Downloaded ${fontCount} font files to public/fonts/ and saved src/fonts.css!`);
}

run().catch(console.error);
