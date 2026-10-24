# MWA_csl
A CSL-file for automatic citation in Zotero using the referencing style of: Matthew Gardner und Sara Springfeld, Musikwissenschaftliches Arbeiten. Eine Einführung, Kassel 2014.

Zitierstil für Zotero nach dem »Leitfaden für bibliografische Angaben« von Gardner/Springfeld (S. 262–284): Fußnoten mit Erstnennung, »Ebd.« und Kurzform sowie Literaturverzeichnis für musikwissenschaftliche Arbeiten.

## Rules and Zotero input
[`docs/regeln.md`](docs/regeln.md) (German) lists the rules of Gardner/Springfeld the style implements, where it deviates from them, and how each publication type has to be entered in Zotero. The user guide in `docs/mwa_csl_guide/` (PDF and HTML) explains installation and import.

## CSL Validation
The correctness of the presented CSL is to be validated via [validator.citationstyles.org](https://validator.citationstyles.org/), recommended by [Zotero](https://www.zotero.org/support/dev/citation_styles/style_editing_step-by-step), following the CSL specification of [citationstyles.org](https://citationstyles.org/) (links accessed 2024-11-18). The same check from the command line (an empty `messages` list means the style is valid):

```sh
curl -s -H 'Content-Type: application/xml; charset=utf-8' \
  --data-binary @musikwissenschaftliches-arbeiten-gardner-springfeld.csl \
  'https://validator.nu/?schema=https%3A%2F%2Fraw.githubusercontent.com%2Fcitation-style-language%2Fschema%2Fv1.0.2%2Fschemas%2Fstyles%2Fcsl.rnc&parser=xml&laxtype=yes&level=error&out=json'
```

## Tests
`test/` renders a set of sample items (`test/items.json`, one per supported item type) with [citeproc-js](https://github.com/Juris-M/citeproc-js), the CSL processor used by Zotero, and compares footnotes and bibliography with `test/expected.txt`. Run it after every change to the style:

```sh
cd test
npm install
npm test          # shows every line that differs from expected.txt
npm run update    # accept the new output as expected.txt
```

Review the diff of `expected.txt` before committing: it shows exactly how the change affects the output.

## Contributors
- [@JuliusHauth](https://github.com/JuliusHauth)
- [@thomasxhua](https://github.com/thomasxhua)
