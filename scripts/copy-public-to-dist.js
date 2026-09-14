const fs = require("fs");
const path = require("path");

const rootDir = process.cwd();
const publicDir = path.join(rootDir, "public");
const distDir = path.join(rootDir, "dist");

if (!fs.existsSync(publicDir) || !fs.statSync(publicDir).isDirectory()) {
  console.log(`No public directory found at ${publicDir}`);
  process.exit(0);
}

fs.mkdirSync(distDir, { recursive: true });

function copyRecursive(sourceDir, targetDir) {
  const entries = fs.readdirSync(sourceDir, { withFileTypes: true });

  for (const entry of entries) {
    if (sourceDir === publicDir && entry.name === "index.html") {
      continue;
    }

    const sourcePath = path.join(sourceDir, entry.name);
    const targetPath = path.join(targetDir, entry.name);

    if (entry.isDirectory()) {
      fs.mkdirSync(targetPath, { recursive: true });
      copyRecursive(sourcePath, targetPath);
      continue;
    }

    if (entry.isFile()) {
      fs.mkdirSync(path.dirname(targetPath), { recursive: true });
      fs.copyFileSync(sourcePath, targetPath);
    }
  }
}

copyRecursive(publicDir, distDir);
