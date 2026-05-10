const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, 'src');

function capitalize(str) {
  if (!str) return '';
  return str.split('-').map(p => p.charAt(0).toUpperCase() + p.slice(1)).join(' ');
}

function camelCaseComponent(str) {
  if (!str) return 'Default';
  return str.split('-').map(p => p.charAt(0).toUpperCase() + p.slice(1)).join('');
}

function refactorFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let isModified = false;

  // 1. Process <a> tags into <Link> components
  const aRegex = /<a(\s+[^>]*?)?href=(['"])(\/[^'"]*)\2([^>]*)>([\s\S]*?)<\/a>/gi;
  if (aRegex.test(content)) {
    content = content.replace(aRegex, (match, p1, p2, url, p4, innerHTML) => {
      // Don't replace if it's already an anchor inside a link or something weird, but standard is fine
      return `<Link${p1 || ' '}href=${p2}${url}${p2}${p4}>${innerHTML}</Link>`;
    });

    // ensure import Link from "next/link"; is present
    if (!content.includes('import Link from')) {
      // Find the first import and add it before
      const importMatch = content.match(/^import /m);
      if (importMatch) {
        content = content.replace(/^import /m, `import Link from "next/link";\nimport `);
      } else {
        // If no imports, put after "use client" if exists, or at the top
        if (content.match(/^["']use client["'];?/)) {
          content = content.replace(/^(["']use client["'];?)/, `$1\nimport Link from "next/link";\n`);
        } else {
          content = `import Link from "next/link";\n` + content;
        }
      }
    }
    isModified = true;
  }

  // 2. Process "use client" in page.tsx
  if (filePath.endsWith('page.tsx')) {
    const useClientRegex = /^["']use client["'];?\s*/m;
    if (useClientRegex.test(content)) {
      console.log(`Refactoring SSR: ${filePath}`);
      const clientContent = content; // We keep the use client at top for the new file
      
      const dirName = path.basename(path.dirname(filePath));
      const componentName = camelCaseComponent(dirName) + 'Client';
      
      const clientFilePath = path.join(path.dirname(filePath), `${componentName}.tsx`);
      fs.writeFileSync(clientFilePath, clientContent);
      
      const titleStr = capitalize(dirName);
      
      let relativeUrl = filePath.split('src/app')[1].replace('/page.tsx', '');
      if (relativeUrl === '') relativeUrl = '/';

      const serverPageContent = `import type { Metadata } from "next";
import ${componentName} from "./${componentName}";

export const metadata: Metadata = {
  title: "${titleStr} | Globify UAE",
  description: "Explore our ${titleStr} services and solutions at Globify.",
  alternates: {
    canonical: "${relativeUrl}",
  },
};

export default function Page() {
  return <${componentName} />;
}
`;
      fs.writeFileSync(filePath, serverPageContent);
      // We don't save the modified 'content' back to page.tsx since we overwrote it.
      isModified = false; 
    }
  }

  if (isModified) {
    fs.writeFileSync(filePath, content);
  }
}

function traverseDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      traverseDir(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.jsx')) {
      refactorFile(fullPath);
    }
  }
}

console.log("Starting Next.js Refactoring...");
traverseDir(targetDir);
console.log("Finished Next.js Refactoring.");
