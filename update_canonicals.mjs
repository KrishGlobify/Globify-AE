import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const targetDir = path.join(__dirname, 'src', 'app');

async function processDirectory(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      await processDirectory(fullPath);
    } else if (entry.isFile() && (entry.name.endsWith('.tsx') || entry.name.endsWith('.ts'))) {
      const content = await fs.readFile(fullPath, 'utf8');
      
      if (content.includes('https://globify.ae')) {
        // Safe string replacement: 'https://globify.ae' literal does not match 'https://www.globify.ae'
        const updatedContent = content.replaceAll('https://globify.ae', 'https://www.globify.ae');
        await fs.writeFile(fullPath, updatedContent, 'utf8');
        console.log(`✅ Updated: ${path.relative(__dirname, fullPath)}`);
      }
    }
  }
}

async function main() {
  console.log('Starting canonical update scan in src/app...');
  try {
    await processDirectory(targetDir);
    console.log('🎉 Canonical update scan completed successfully.');
  } catch (err) {
    console.error('Error during processing:', err);
    process.exit(1);
  }
}

main();
