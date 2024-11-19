# MWA_csl
A CSL file for automatic citation in Zotero using the referencing style of: Matthew Gardner und Sara Springfeld, Musikwissenschaftliches Arbeiten. Eine Einführung, Kassel 2014.

## CSL Validation
The correctness of the presented CSL is to be validated via [validator.citationstyles.org](https://validator.citationstyles.org/), recommended by [Zotero](https://www.zotero.org/support/dev/citation_styles/style_editing_step-by-step), following the CSL specification of [citationstyles.org](https://citationstyles.org/) (links accessed 2024-11-18).

## Outline of Gardner/Springfeld referencing style

### Scope
The expected scope of the CSL follows the citation categories defined by Gardner/Springfeld (p. 264-265). Under _Expected_ already implemented and to be explored categories are listed, while unachievables are sent down to _Impossible_.

#### Implemented

- [x] Selbstständige Publikationen
  - [x] Monografien
  - [x] Sammelpublikationen
    - Hinweis: Alle Editoren auf `Herausgeber` setzen, Autoren weglassen
  - [x] Mehrbändige Bücher
    - Bei `Band` soll nichts eigentragen sein, aber `Anzahl der Bände` ausgefüllt
    - Ein Hinweis wie "Kindle Edition" soll bei Extra eingetragen werden (oder von Hand nachträglich)
  - [x] Elektronisch publizierte Bücher (E-Books)
    - URL,DOI,URN soll bei "URL" eingetragen werden, Abrufdatum bei "Heruntergeladen am"
  - [x] Bücher in einer gezählten Reihe
    - ausgefüllt soll: `Reihe` und `Nummer der Reihe`
  - [x] Unveröffentlichte oder online publizierte Hochschulschriften
    - müssen (?) manuell ausgefüllt werden mit Eintragsart `Dissertation`
      - bei `Art` sowas wie `Diss.` oder `Masterarbeit`
      - Institution bei `Universität`
- [x] Unselbstständige Publikationen:
  - [x] Lexikonartikel
    - Wenn wir von dem Lexikon als `Buch` aus starten:
      - `Eintragsart`: `Buch` -> `Wörterbucheintrag` (sonst fehlt `Art.`, wenn `Art.` nicht erwünscht, `Buchteil` auswählen)
      - `Titel` ist Titel des Eintrags
      - `Titel des Wörterbuchs` sollte dann automatisch korrekt Titel des Lexikons sein
      - `Herausgeber` sind die Editoren
      - wichtig: Autor als `Autor` hinzufügen
    - [x] Lexikon
    - [x] MGG2
      - bei `Auflage`: `2., neubearbeitete Ausgabe` eintragen
      - `Sachteil`/... muss manuell eingefügt werden
      - Spalten bei `Seiten` eintragen und manuell: `S.` -> `Sp.`
    - [x] NG2
      - bei `Auflage`: `2., neubearbeitete Ausgabe` eintragen
    - [x] Artikel in Onlinelexika (GMO)
      - leer: `Ort`,`Datum`
      - befüllt: `Titel`, `Autor`, `Titel des Wörterbuchs`, `URL`, `Heruntergeladen am`
  - [x] Handbuchbände und -kapitel
  - [x] Aufsätze in Sammelpublikationen
    - Bei Aufsätzen etc., wenn kein `Art.` gewünscht, `Buchteil` auswählen (sonst `Wörterbucheintrag`)
  - [x] Aufsätze in Kongressberichten
  - [x] Aufsätze in Festschriften
  - [x] Aufsätze in wissenscahftlichen Zeitschriften oder Jahrbüchern
  - [x] Artikel in Zeitungen oder Magazinen
    - `Zeitungsartikel` (Achtung, nicht `Zeischriftenartikel`!)
      - Name der Zeitung: `Publikation`
  - [x] Textteile aus Notenausgaben
    - Anlage z.B. als `Buch` empfohlen
- [x] Internetinhalte
  - [x] Webseiten
    - als `Webseite`
    - letzte Änderung bei `Datum` eintragen
  - [x] Webblogs
    - als `Blog-Post`
    - "gepostet am" bei `Datum` eintragen (wenn man stattdessen `letzte Änderung` da stehen haben will, macht man `Webseite`)
- [x] Noten
  - [x] Selbstständige Notenausgaben
    - als `Buch`, relevante Teile im Titel manuell entkursiven
    - `Titel:` Titel. untertitel Opuszahl/Werkverzeichnisnummer, Stimmenpr. bzw. Art der Ausgabe
  - [x] Notenausgaben aus einer Reihe und Gesamtausgaben
    - wie selbstst. nur Reihe
  - [x] Manuskripte
    - als `Manuskript`
    - Kopisten als `Übersetzer` eintragen
  - [x] Faksimiles von Musikhandschriften
    - als `Buch` oder Reihe eintragen
    - Titel wieder alles rein was, was rein mmuss, und manuell entkursiven
- [x] Aufnahmen
  - [x] CD/LP
    - siehe DVD, Videos und Filme
  - [x] DVD, Videos und Filme
    - als `Tohnaufnahme`
    - Komponisten als `Komponist`
    - jegliche Performer, Director, etc. als `Darsteller` (`Mitarbeiter` werden ignoriert)
      - und entweder hinter Nachmane `(Regie)` etc. schreiben oder als Literal (`Zu einfachem Feld wechseln`)
    - Titel der Sammelbox als `Titel der Reihe` und Zahl ist `Band`
    - Wichtig: `Ort` freilassen (siehe Einzelne Tracks)
  - [x] Einzelne Tracks von einer CD oder DVD
    - Hack: wie CD/LP, nur Titel (des Tracks) bei `Titel` eintragen, Titel der CD/etc. bei `Ort`
  - [x] Digitale Audio oder Videodateien (z.B. MP3, iTunes, YouTube)
    - weicht leicht ab von Definition (aber URL so wahrscheinlich eher sowie gewollt?)
- [x] Bilder
  - als `Kunstwerk`
  - klar ist: Titel, Künstler, Medium, Größe des Kunstwerks, URL/Heruntergeladen
  - sehr schlimme Lifehacks nötig bei:
    - `Datum`: Erstelljahr/Datum
    - `Sprache`: Ort (Erstell)
    - `Archiv`: Besitzer
    - `Standard im Archiv`: Anschaffungsdatum
    - `Bibliothekskatalog`: Inventarnummer

#### Impossible (/not implemented)

- (Selbstständige Publikationen)
  - Reprints / Nachdrucke
    - müssen (?) manuell nachbereitet werden
- Dokumente in Briefausgaben und Dokumentensammlungen
  - zu spezifisch; empfehlendwert als sowas wie `Buch`, je nach Form, Fußnote ist ja komplett Freestyle
- CD/DVD-Booklets
  - zu selten (?), Empfehlung:
    - als `Buch`, bei `Ort` Label Labelnummer eintragen,
    - Komma vor Datum setzen
    - `CD-Booklet für` manuell hinzufügen
- Programmhefttexte
  - als Aufsatz in einem Buch betrachten (`Buchteil`)
  - manuell den relevanten Teil entkursiven
  - Aufführungsort bei `Ort`
  - Manuell Komma vor Datum
- Nachdrucke von älteren Notenausgaben
  - zu spezifisch, vielleicht einfach als `Buch` oder Reihe
- Bildband
  - wahrscheinlich am besten einfach als `Buch` und dann entsprechend anpassen
- Musikinstrumente
  - kommt hoffentlich selten genug vor

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
- bei grundlegender überarbeitung, etwa `n., neubearbeitete Ausgabe`

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
- Erscheinungsort,Uni wird eingedeutscht
- Korrekte Angabe von URL,DOI,URN bei E-Books
  - again, no string manipulation (its contents is defined in the json field `note`)
  - `Kindle Edition` etc. may be missing
- Unveröffentlichte oder online publizierte Hochschulschriften
- Reprints / Nachdrucke korrekt mit "altem" und "neuem" Titel etc.
- MGG2: `Sachteil`/... muss manuell eingefügt werden

### Misc. TODOs
- check page sections / only 1 page / etc. (citation and bibliography)
- check "Kurzform"
- `DOI` field
- spätere `n`-te Auflage als Hochzahl `<sup>n</sup>YYYY`

