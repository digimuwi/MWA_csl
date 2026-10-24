// Renders the test items in items.json with the style and compares the result
// with expected.txt.
//
//   npm test             compare with expected.txt (exit code 1 on differences)
//   npm run update       overwrite expected.txt with the current output
//
// Each item is cited in this order: first citation, ibid, ibid with locator,
// (other work), subsequent citation with locator. The bibliography follows.
const fs = require('fs');
const path = require('path');
const CSL = require('citeproc');

const read = file => fs.readFileSync(path.join(__dirname, file), 'utf8');
const style = read('../musikwissenschaftliches-arbeiten-gardner-springfeld.csl');
const locale = read('locales-de-DE.xml');
const items = Object.fromEntries(JSON.parse(read('items.json')).map(item => [item.id, item]));
// cited in between, so the next citation is "subsequent" instead of "ibid"
const other = { id: '_other', type: 'book', title: 'Anderes Werk', author: [{ family: 'Anders', given: 'Anna' }] };
items[other.id] = other;

const engine = new CSL.Engine({
  retrieveLocale: () => locale,
  retrieveItem: id => items[id],
}, style, 'de-DE');
engine.setOutputFormat('html');

const citationsPre = [];
function cite(citationItem) {
  const noteIndex = citationsPre.length + 1;
  const citation = { citationItems: [citationItem], properties: { noteIndex } };
  const [, updates] = engine.processCitationCluster(citation, citationsPre, []);
  citationsPre.push([citation.citationID, noteIndex]);
  return updates.find(([, , id]) => id === citation.citationID)[1];
}

const ids = Object.keys(items).filter(id => id !== other.id);
const lines = [];
for (const id of ids) {
  lines.push(`== ${id} (${items[id].type})`);
  lines.push(`first:      ${cite({ id })}`);
  lines.push(`ibid:       ${cite({ id })}`);
  lines.push(`ibid+loc:   ${cite({ id, locator: '18-21', label: 'page' })}`);
  cite({ id: other.id });
  lines.push(`subseq+loc: ${cite({ id, locator: '22', label: 'page' })}`);
}
engine.updateItems(ids);
const [, entries] = engine.makeBibliography();
lines.push('== bibliography');
lines.push(...entries.map(entry => entry.replace(/<\/?div[^>]*>/g, '').trim()));
const output = lines.join('\n') + '\n';

// Line diff (longest common subsequence), returns the removed (-) and added (+) lines
function diff(a, b) {
  const lcs = Array.from({ length: a.length + 1 }, () => new Array(b.length + 1).fill(0));
  for (let i = a.length - 1; i >= 0; i--) {
    for (let j = b.length - 1; j >= 0; j--) {
      lcs[i][j] = a[i] === b[j] ? lcs[i + 1][j + 1] + 1 : Math.max(lcs[i + 1][j], lcs[i][j + 1]);
    }
  }
  const changes = [];
  let i = 0, j = 0;
  while (i < a.length || j < b.length) {
    if (i < a.length && j < b.length && a[i] === b[j]) {
      i++; j++;
    } else if (i < a.length && (j === b.length || lcs[i + 1][j] >= lcs[i][j + 1])) {
      changes.push(`- ${a[i++]}`);
    } else {
      changes.push(`+ ${b[j++]}`);
    }
  }
  return changes;
}

const expectedPath = path.join(__dirname, 'expected.txt');
if (process.argv.includes('--update')) {
  fs.writeFileSync(expectedPath, output);
  console.log(`Updated ${path.relative(process.cwd(), expectedPath)}`);
} else {
  const expected = fs.existsSync(expectedPath) ? fs.readFileSync(expectedPath, 'utf8').split('\n') : [];
  const actual = output.split('\n');
  const changes = diff(expected, actual);
  for (const change of changes) console.log(change);
  if (changes.length > 0) {
    console.log('\nOutput differs from expected.txt. If the changes are intended, run "npm run update".');
    process.exit(1);
  }
  console.log(`OK: ${ids.length} items`);
}
