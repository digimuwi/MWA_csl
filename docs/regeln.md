# Regeln des Stils

Dieses Dokument beschreibt, wie der Zitierstil `musikwissenschaftliches-arbeiten-gardner-springfeld.csl` den »Leitfaden für bibliografische Angaben« von Matthew Gardner und Sara Springfeld umsetzt (*Musikwissenschaftliches Arbeiten. Eine Einführung*, Kassel 2014, S. 262–284), wo er davon abweicht und wie Einträge in Zotero angelegt werden, damit die Ausgabe stimmt. Seitenangaben in Klammern beziehen sich auf diesen Leitfaden.

Beispiele stehen in den Tests: `test/items.json` enthält je Publikationsform mindestens einen Eintrag (die `id` ist unten jeweils genannt), `test/expected.txt` die daraus erzeugten Fußnoten (Erstnennung, »Ebd.«, Kurzform) und das Literaturverzeichnis. `cd test && npm test` prüft, ob der Stil noch genau so ausgibt.

Wo ein Institut eigene Regeln vorgibt (in Tübingen etwa die Handleitung B), gehen diese vor. Sie sind hier nicht abgebildet.

## Allgemeine Regeln

- **Schlusspunkt** (S. 262): Fußnoten enden mit Punkt. Einträge im Literaturverzeichnis enden in diesem Stil ebenfalls mit Punkt. Gardner/Springfeld sehen dort keinen Punkt vor, die Abweichung ist eine bewusste Entscheidung des Projekts.
- **Namen** (S. 262): im Verzeichnis »Nachname, Vorname«, in der Fußnote »Vorname Nachname«, in der Kurzform nur der Nachname. Zwei Namen werden mit »und« verbunden. Bei mehr als zwei Namen trennt der Stil im Verzeichnis durch Semikolon (»Hartinger, Anselm; Wolff, Christoph und Wollny, Peter«), in der Fußnote durch Komma. »u. a.« setzt der Stil nicht von sich aus. Vor- und Nachname in Zotero getrennt eingeben. Test: `sammel3`.
- **Namenszusätze** wie »van« oder »di«: im Verzeichnis »Beethoven, Ludwig van«, eingeordnet unter B (vgl. S. 275, 280). Der Zusatz gehört in Zotero ins Feld *Vorname* (»Ludwig van«). Steht er im Feld *Nachname* (»van Beethoven«), stimmt das Verzeichnis ebenfalls, die Kurzform lautet dann aber »van Beethoven« statt »Beethoven«. Test: `particle-given`, `beet`.
- **Titel** (S. 262 f.): Titel selbstständiger Publikationen kursiv, Titel von Aufsätzen und Artikeln in »…«. Anführungszeichen innerhalb eines Titels werden zu ›…‹, wenn sie in Zotero als gerade Zeichen ("…") oder als »…« eingegeben sind. Typografische Zeichen wie „…“ oder “…” bleiben unverändert. Test: `journal-quotes`.
- **Titel und Untertitel** (S. 263) werden durch einen Punkt getrennt. Das muss in Zotero so eingegeben werden, weil CSL Texte nicht umformen kann. Importierte Titel enthalten an dieser Stelle oft einen Doppelpunkt.
- **Englische Titel** erscheinen im Title Case, wenn das Feld *Sprache* mit `en` beginnt.
- **Ort und Jahr** (S. 263): »Ort Jahr« ohne Komma. Verlage gibt der Stil nicht aus (Ausnahmen: die Universität bei Hochschulschriften, das Label bei Tonaufnahmen). Mehrere Orte (»Kassel und Stuttgart«) und eingedeutschte Ortsnamen (»Mailand«) gehören so ins Feld *Ort*.
- **Auflage** (S. 263): Eine Zahl im Feld *Auflage* erscheint als Hochzahl vor dem Jahr (»³2005«), ein Text erscheint nach dem Titel (»2., neubearbeitete Ausgabe«). Test: `mono2`, `mgg`.
- **Gezählte Reihe** (S. 263, 267): »(Reihentitel, Nummer)« hinter dem Jahr. Ausgegeben wird sie nur, wenn *Reihe* und *Nummer der Reihe* beide gesetzt sind. Test: `mono`.
- **Internetquellen** (S. 263 f.): Ist eine *DOI* gesetzt, erscheint sie als `https://doi.org/…` und die *URL* wird ignoriert. Sonst erscheint die *URL*. Danach folgt »abgerufen am« mit dem Datum aus *Heruntergeladen am*.

## Kurzform

Ab der zweiten Nennung (S. 265–284): Nachnamen, Kurztitel, Stelle. Der Kurztitel kommt aus dem Feld *Kurztitel*, fehlt er, steht der volle Titel. Lexikonartikel erscheinen ohne »Art.« (S. 269 f.), Manuskripte mit Signatur (S. 280), einzelne Tracks ohne den Titel der CD (S. 282). Folgt derselbe Titel unmittelbar, steht »Ebd.«.

## Publikationsformen

### Bücher

- **Monografien** (S. 265): Eintragsart **Buch**. *Autor*, *Titel*, *Ort*, *Datum* (das Jahr genügt), gegebenenfalls *Auflage*. Test: `mono`, `mono2`.
- **Sammelpublikationen** (S. 265 f.): **Buch**, alle Herausgeber als *Herausgeber*, kein *Autor*. Der Stil setzt dann »(Hrsg.)« hinter die Namen. Test: `sammel`, `sammel3`.
- **Mehrbändige Bücher** (S. 266): **Buch**, *Anzahl der Bände* ausfüllen und *Band* leer lassen, dann erscheint »X Bde.«. Ist *Band* gesetzt, erscheint stattdessen »Bd. X«. Test: `multivol`, `beet`.
- **E-Books** (S. 266 f.): **Buch** mit *DOI* oder *URL* und *Heruntergeladen am*, oder ein Hinweis wie »Kindle Edition« im Feld *Extra*. Test: `ebook`.
- **Hochschulschriften** (S. 268): Eintragsart **Dissertation**, *Art* (z. B. »Diss.« oder »Masterarbeit«), *Universität*. Als Buch veröffentlichte Dissertationen werden als **Buch** angelegt. Test: `diss`.
- **Reprints** (S. 269): **Buch**. *Ursprünglicher Ort* und *Ursprüngliches Datum* nehmen Ort und Jahr der Originalausgabe auf, *Ort* und *Datum* die des Nachdrucks. Die Art des Nachdrucks steht in *Auflage* (»Faksimile-Nachdruck unter dem Titel …«, Kursives mit `<i>…</i>`), die Herausgeber des Nachdrucks unter *Herausgeber*. Fehlen die beiden Felder in einer älteren Zotero-Version, helfen die Zeilen `original-date: 1732` und `original-publisher-place: Leipzig` im Feld *Extra*. Test: `reprint`.

### Unselbstständige Publikationen

- **Lexikonartikel** (S. 269 f.): **Enzyklopädieartikel** oder **Wörterbucheintrag**, beide werden mit »Art.« ausgegeben (wer kein »Art.« möchte, nimmt **Buchteil**). *Titel* ist der Artikel, *Titel der Enzyklopädie* das Lexikon, dazu *Autor* und, über den `+`-Knopf, *Herausgeber*. Artikel ohne Autor beginnen mit »Art.« und dem Titel, die Herausgeber folgen dann nach dem Lexikontitel. Test: `mgg`, `anon-lex`.
  - **MGG2**: *Auflage* »2., neubearbeitete Ausgabe«, *Band* mit dem Teil (»Sachteil, Bd. 5«), *Seiten* mit »Sp.« (»Sp. 347–418«). Weil der Wert dann keine Zahl mehr ist, lässt der Stil das »S.« weg. Der Strich zwischen den Spalten wird in diesem Fall nicht umgewandelt und sollte als Halbgeviertstrich (–) eingegeben werden. In der Fußnote die Stelle mit der Bezeichnung »Spalte« zitieren, dann erscheint »Sp.«.
  - **NG2**: *Auflage* »2., neubearbeitete Ausgabe«.
  - **Onlinelexika (GMO)**: *Ort* und *Datum* leer lassen, dafür *URL* oder *DOI* und *Heruntergeladen am*. Test: `gmo`.
- **Handbücher** (S. 271): einzelne Bände wie Monografien oder Sammelpublikationen in einer Reihe, einzelne Kapitel wie Aufsätze in Sammelpublikationen.
- **Aufsätze in Sammelpublikationen und Festschriften** (S. 271 f.): **Buchteil** mit *Buchtitel*, *Herausgeber*, *Ort*, *Datum* und *Seiten*. Test: `chapter`, `anon-chapter`.
- **Aufsätze in Kongressberichten** (S. 272): **Konferenz-Paper**. Titel, Ort und Jahr des Kongresses gehören in den *Titel des Konferenzbandes*. Die eigenen Felder für die Konferenz wertet der Stil nicht aus. Test: `conf`.
- **Aufsätze in Zeitschriften und Jahrbüchern** (S. 273 f.): **Zeitschriftenartikel**. *Publikation* ist die Zeitschrift, *Band* der Jahrgang, *Ausgabe* das Heft. Ist *Zeitschriften-Abkürzung* gesetzt (z. B. »AfMw«), erscheint die Abkürzung anstelle des Titels. Bei Online-Zeitschriften die *DOI* eintragen. Test: `journal`, `journal-doi`, `journal-quotes`.
- **Artikel in Zeitungen und Magazinen** (S. 274 f.): **Zeitungsartikel** oder **Magazin-Artikel** (nicht Zeitschriftenartikel), *Publikation* ist die Zeitung, *Datum* mit Tag, Monat und Jahr. Test: `news`, `mag`.
- **Dokumente in Briefausgaben** (S. 275): nur die Ausgabe als **Buch** anlegen. Die Angaben zum Dokument stehen beim Zitieren von Hand davor: »Brief von Unger an Graf Esterházy, Wien, 20. August 1820, zitiert nach: [Zitat aus Zotero]«.
- **Textteile aus Notenausgaben** (S. 275 f.): die Ausgabe wie eine Notenausgabe anlegen (siehe unten). Römische Seitenzahlen als Stelle in der Fußnote ergeben »S. VI–XXI«. Im Feld *Seiten* eines Eintrags fehlt bei römischen Zahlen das »S.« und muss mit eingetragen werden.
- **CD/DVD-Booklets** (S. 276): als **Buch**. »CD-Booklet für« gehört in den Titel, Label und Labelnummer in *Ort*. Das Komma vor dem Jahr muss nachträglich von Hand gesetzt werden.
- **Programmhefttexte** (S. 276): als **Buchteil**, der Aufführungsort in *Ort*. Das Komma vor dem Jahr und die aufrechte Schreibweise von »Programmheft zur Aufführung von« müssen nachträglich von Hand korrigiert werden.

### Internetinhalte

- **Webseiten** (S. 277): **Webseite**, *Titel der Website* für Besitzer oder Titel der Seite, das Datum der letzten Änderung in *Datum*. Test: `web`.
- **Weblogs** (S. 277 f.): **Blog-Post**, das Datum des Beitrags in *Datum*. Test: `blog`.

### Noten

- **Notenausgaben, auch aus Reihen und Gesamtausgaben** (S. 278 f.): **Buch**. Komponist als *Autor*, Opus- oder Werkverzeichnisnummer im *Titel*, die Art der Ausgabe (»Partitur«, »Studienpartitur«, »Klavierauszug«) in *Auflage*, Herausgeber als *Herausgeber*. Gesamtausgaben über *Reihe* und *Nummer der Reihe* (»A/18«). Test: `score`, `particle-given`.
- **Nachdrucke älterer Notenausgaben** (S. 279): wie Reprints. Den Hinweis auf den Nachdruck in der Kurzform (»Nachdruck 1994«) ergänzt der Stil nicht.
- **Manuskripte** (S. 280): **Manuskript**. *Art* (»Autograf«, »Abschrift«), Kopist als *Übersetzer*, *Datum*, RISM-Sigel und Signatur in *Signatur*. Test: `ms`.
- **Faksimiles** (S. 280 f.): **Buch**, die Art des Faksimiles in *Auflage*, gegebenenfalls mit Reihe.

### Aufnahmen

- **CD/LP, DVD, Videos und Filme** (S. 281 f.): **Tonaufnahme**. Komponist als *Komponist*, alle Mitwirkenden in der gewünschten Reihenfolge als *Darsteller*, Zusätze wie »(Ltg.)« oder »(Regie)« im Namen (am einfachsten über »Zu einfachem Feld wechseln«). Label und Labelnummer in *Label*, das Format (»CD«) in *Format*, eine Sammelbox in *Titel der Reihe* und *Band*. *Ort* leer lassen, sonst wird der Eintrag als Track ausgegeben. Bei vielen Interpreten das »u. a.« von Hand setzen. Die Eintragsart **Videoaufnahme** unterstützt der Stil bisher nicht. Test: `cd`.
- **Einzelne Tracks** (S. 282): wie CD, der Titel des Tracks in *Titel*, der Titel der CD in *Ort*. Zotero gibt *Ort* bei Tonaufnahmen derzeit als `event-place` weiter. Der Quellcode von Zotero bezeichnet diese Zuordnung als vorläufig, mit einer künftigen Version kann der Umweg also aufhören zu funktionieren. Test: `track`.
- **Digitale Audio- und Videodateien** (S. 283): wie CD, die Edition und das Dateiformat (»iTunes AAC Format«) in *Format*, gegebenenfalls *URL* und *Heruntergeladen am*.

### Bilder und Instrumente

- **Bilder** (S. 283 f.): **Kunstwerk**. *Künstler*, *Titel*, *Medium* (Technik und Material), *Datum*, *Größe des Kunstwerks*, *URL* und *Heruntergeladen am*. Für die übrigen Angaben braucht es Umwege: der Ort in *Sprache*, der Besitzer in *Archiv*, das Anschaffungsdatum in *Standort im Archiv*, die Inventarnummer in *Bibliothekskatalog*. Test: `img`.
- **Musikinstrumente** (S. 284) unterstützt der Stil nicht.

## Grenzen

Was CSL nicht kann, muss in den Daten stimmen:

- Titel und Untertitel umformen, Title Case bei nicht englischen Einträgen, Ortsnamen eindeutschen, mehrere Verlagsorte zusammenführen.
- »S.« vor römischen Seitenzahlen und vor Spaltenangaben im Feld *Seiten*.
- »u. a.« nach zwei Interpreten (S. 281). Ein automatisches »u. a.« würde auch Orchester, Dirigent und Regie abschneiden, weil alle Mitwirkenden als *Darsteller* eingetragen werden.
- Zusätze in der Kurzform bei Nachdrucken und Tonträgern (»Nachdruck 1994«, »CD«).

## Abweichungen von Gardner/Springfeld

- Einträge im Literaturverzeichnis enden mit Punkt (siehe oben).
- DOIs erscheinen als `https://doi.org/…`, der Leitfaden nennt `http://dx.doi.org/…`.
- Datumsangaben stehen ohne Leerzeichen (»18.11.2024«, im Leitfaden »18. 11. 2024«).
- Eine gesetzte *Zeitschriften-Abkürzung* erscheint auch im Literaturverzeichnis.

## Offene Punkte

- Die Eintragsarten **Videoaufnahme** (mit *Ensemble* und *Regisseur*) und für Bilder das Feld *Veranstaltungsort* könnten einige der Umwege oben ersetzen. Beides wertet der Stil noch nicht aus.
- Angaben mit nur einer Seite oder mit »f.« sind noch nicht systematisch geprüft.
