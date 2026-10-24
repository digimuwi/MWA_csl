# Notes for agents

This repository holds a CSL style for Zotero that implements the referencing rules of Matthew Gardner and Sara Springfeld, *Musikwissenschaftliches Arbeiten. Eine Einführung*, Kassel 2014, pp. 262–284.

- `docs/regeln.md` (German) states which rules the style implements, where it deviates from the book, and how each publication type has to be entered in Zotero. Start there for questions about citing correctly in this style.
- `test/items.json` and `test/expected.txt` are the worked examples: each supported publication type with its first note, "Ebd.", short form and bibliography entry, as rendered by citeproc-js.
- After changing the style, run `cd test && npm install && npm test`, review the diff, accept it with `npm run update`, and validate the style against the CSL 1.0.2 schema (command in `README.md`). Keep `docs/regeln.md` in step with the change.
- Rules of a particular institution (e.g. the Handleitung B in Tübingen) take precedence over Gardner/Springfeld where they apply. They are not part of this repository.
