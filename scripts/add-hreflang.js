const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, '..', 'src', 'app');

function walkDir(dir, callback) {
  if (!fs.existsSync(dir)) return;
  fs.readdirSync(dir).forEach(f => {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) {
      if (f === 'node_modules') return;
      walkDir(full, callback);
    } else {
      callback(full);
    }
  });
}

let modifiedCount = 0;

walkDir(baseDir, filePath => {
  if (!filePath.endsWith('layout.tsx') && !filePath.endsWith('page.tsx')) return;

  let content = fs.readFileSync(filePath, 'utf8');

  if (!content.includes('export const metadata') && !content.includes('export const metadata: Metadata')) return;

  if (content.includes('alternates:') && !content.includes('languages: {')) {
    const regex = /alternates:\s*\{\s*(canonical:\s*["'][^"']+["'])(,?)\s*\}/;
    const match = content.match(regex);
    if (match) {
      const canonicalUrl = match[1].match(/["'](.*?)["']/)[1];
      let pathName = canonicalUrl.replace('https://globify.ae', '');
      if (!pathName.startsWith('/')) pathName = '/' + pathName;

      const languagesObj = `languages: {
      'en-AE': 'https://globify.ae${pathName}',
      'en-IN': 'https://globify.in${pathName}',
      'x-default': 'https://globify.ae${pathName}'
    }`;
      
      content = content.replace(regex, `alternates: { $1, ${languagesObj} }`);
      fs.writeFileSync(filePath, content);
      modifiedCount++;
    }
  }
});

console.log(`Modified ${modifiedCount} files with hreflang tags.`);
