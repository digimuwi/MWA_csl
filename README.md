# MWA_csl
A CSL file for automatic citation in Zotero using the referencing style of: Matthew Gardner und Sara Springfeld, Musikwissenschaftliches Arbeiten. Eine Einführung, Kassel 2014.

## CSL Validation
The correctness of the presented CSL is to be validated via [validator.citationstyles.org](https://validator.citationstyles.org/), recommended by [Zotero](https://www.zotero.org/support/dev/citation_styles/style_editing_step-by-step), following the CSL specification of [citationstyles.org](https://citationstyles.org/) (links accessed 2024-11-18).

## Outline of Gardner/Springfeld referencing style

### Scope
The expected scope of the CSL follows the citation categories defined by Gardner/Springfeld (p. 264-265):

- [ ] Selbstständige Publikationen
  - [x] Monografien
  - [x] Sammelpublikationen
  - [x] Mehrbändige Bücher
  - [ ] Elektronisch publizierte Bücher (E-Books)
  - [ ] Bücher in einer gezählten Reihe
  - [ ] Unveröffentlichte oder online publizierte Hochschulschriften
  - [ ] Reprints / Nachdrucke
- [ ] Unselbstständige Publikationen:
  - [ ] Lexikonartikel
    - [ ] MGG2
    - [ ] NG2
    - [ ] Artikel in Onlinelexika (GMO)
  - [ ] Handbuchbände und -kapitel
  - [ ] Aufsätze in Sammelpublikationen
  - [ ] Aufsätze in Kongressberichten
  - [ ] Aufsätze in Festschriften
  - [ ] Aufsätze in wissenscahftlichen Zeitschriften oder Jahrbüchern
  - [ ] Aufsätze in Zeitungen oder Magazinen
  - [ ] Dokumente in Briefausgaben und Dokumentensammlungen
  - [ ] Textteile aus Notenausgaben
  - [ ] CD/DVD-Booklets
  - [ ] Programmhefttexte
- [ ] Internetinhalte
  - [ ] Webseiten
  - [ ] Webblogs
- [ ] Noten
  - [ ] Selbstständige Notenausgaben
  - [ ] Notenausgaben aus einer Reihe und Gesamtausgaben
  - [ ] Nachdrucke von älteren Notenausgaben
  - [ ] Manuskripte
  - [ ] Faksimiles von Musikhandschriften
- [ ] Aufnahmen
  - [ ] CD/LP
  - [ ] DVD, Videos und Filme
  - [ ] Einzelne Tracks von einer CD oder DVD
  - [ ] Digitale Audio- [ ] oder Videodateien (z.B. MP3, iTunes, YouTube)
- [ ] Bilder
- [ ] Musikinstrumente

### Rules
The following additional rules provided by Gardner/Springfeld (p. 262-263):

#### General Rules
- Autor/etc. `NACHNAME,VORNAME` in Lit.v., Fußs. `VORNAME,NACHNAME`
- Vornamen ausgeschrieben (außer Mittelinitialen, wenn auch in Publikation abgekürzt)
- bei unbekanntem Autor, beginn mit Titel
- Punkt hinter allem (nach Pfeffer, in der eigentlichen Intention der Autoren: nicht nur bei Fußnoten)
- `und` bei mehr als 1 Autor/etc.
- Bücher/etc. kursiver Titel
- `>>TITEL<<` bei Aufsätzen/Lexikonartikeln
- `ERSCHEINUNGSORT ERSCHEINUNGSJAHR`
- spätere `n`-te Auflage als Hochzahl `<sup>n</sup>YYYY`, bei grundlegender überarbeitung, etwa `n., neubearbeitete Ausgabe`
- (URL,DOI,URN)

#### Impossible
The following section is relevant for users of the CSL, since they have to be applied "by hand" (solution, maybe plugin to preprocess CSL-JSONs?):

- Trennung von Titel,Untertitel statt `:` mit `.`
  - string manipulation using CSL is impossible (solution, maybe plugin preprocessor for citation data))
- Title Case
  - again, no string manipulation
- Behandlung bei >1 Verlag und entsprechend >1 Verlagsort
  - the csl-json only specifies only `publisher` and `publisher-place` (next to the `original-` form of each of the two); most jsons do something like
```json
{
    "publisher": "Bärenreiter ; Metzler",
    "publisher-place": "Kassel : Stuttgart"
}
```
- Erscheinungsort === Hauptsitz des Verlags
- Erscheinungsort wird eingedeutscht
