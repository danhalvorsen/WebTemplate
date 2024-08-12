const fs = require('fs');
const path = require('path');

const testDir = path.join(__dirname, '__tests__', 'browser');
console.log(`Generating a new test index.html file. Testdir: ${testDir}`);
const indexFile = path.join(testDir, 'index.ts');
console.log(`Test index file: ${indexFile}`);

function generateTestIndex() {
  const files = fs
    .readdirSync(testDir)
    .filter((file) => file.endsWith('.test.ts') && file !== 'index.ts')
    .map((file) => `import './${file}';`);

  console.log(`There are number of test: ${files.length}`);
  const content = files.join('\n');
  fs.writeFileSync(indexFile, content, 'utf8');
  console.log('Test index file generated.');
}

generateTestIndex();
