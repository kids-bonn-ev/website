# Dekoelemente / Störer

Die Deko-Elemente sind kleine illustrierte Formen, die um Inhalte herum gestreut werden. Sie geben dem KIDS e.V. seinen charakteristischen verspielten Look. Alle Dateien liegen in [../../assets/decorative](../../assets/decorative).

## Verfügbare Elemente

| Element | Datei | Farbe (Standard) | Assoziation |
| --- | --- | --- | --- |
| **Blume 01** | `KIDSev-Logo_Dekoelemente-Blume01(RGB).png` | Gelb | Natur, Freude |
| **Blume 02** | `KIDSev-Logo_Dekoelemente-Blume02(RGB).png` | Lila / Orange | Natur, Sommer |
| **Bogen** | `KIDSev-Logo_Dekoelemente-Bogen(RGB).png` | Blau | Bewegung, Brücke |
| **Halbkreis** | `KIDSev-Logo_Dekoelemente-Halbkreis(RGB).png` | Lila / Rosa | Sonnenaufgang, Form |
| **Kreis** | `KIDSev-Logo_Dekoelemente-Kreis(RGB).png` | Gelb | Sonne, Punkt |
| **Strich** | `KIDSev-Logo_Dekoelemente-Strich(RGB).png` | Lila / Pfirsich | Akzent, Bewegung |
| **Tropfen** | `KIDSev-Logo_Dekoelemente-Tropfen(RGB).png` | Orange | Regen, Herz |
| **Welle** | `KIDSev-Logo_Dekoelemente-Welle(RGB).png` | Pfirsich | Bewegung, Verbindung |
| **Wiese 01** | `KIDSev-Logo_Dekoelemente-Wiese01(RGB).png` | Grün | Natur, draußen |
| **Wiese 02** | `KIDSev-Logo_Dekoelemente-Wiese02(RGB).png` | Grün | Natur, draußen |
| **Wolke** | `KIDSev-Logo_Dekoelemente-Wolke(RGB).png` | Pfirsich | Himmel, Leichtigkeit |

Zusätzlich: **Regenwurm** (als Logo-Element in [logos.md](logos.md) geführt, aber funktioniert auch als Deko-Charakter).

## Einsatzprinzipien

1. **Luftig streuen.** Deko-Elemente sind Konfetti, kein Teppich. Zwischen ihnen atmen lassen.
2. **Asymmetrie.** Nicht alle auf eine Linie setzen. Eher locker verteilen, unterschiedliche Größen.
3. **Maximal 3–5 Elemente pro Abschnitt**, außer bei dedizierten Hero-/Deko-Bereichen.
4. **Nie den Content verdecken.** Deko ist Akzent, nicht Vordergrund. Text muss immer vollständig lesbar bleiben.
5. **Rotationen sind erlaubt** - sogar erwünscht, um Spielerei zu erzeugen. Aber dezent (max. ±20°).
6. **Größe variieren** (z. B. 24 – 96 px) statt alle gleich groß.

## Ideen für Web-Einsatz

- **Section-Dividers:** eine Reihe von 2–3 Elementen zwischen zwei Inhaltsbereichen statt klassischer Linie.
- **Hero-Akzente:** Blume, Wolke, Sonne am Rand des Hero-Bilds, leicht versetzt, 30–50 % Transparenz optional.
- **Aufzählungen:** Eigene Bullet-Icons (Kreis, Tropfen) statt Standard-Discs.
- **Hover-/Micro-Interaktionen:** Ein Deko-Element wackelt leicht beim Hover (max. 2° Rotation, 200 ms).
- **Seiten-Übergänge / Loading:** Regenwurm kriecht.
- **Formulare:** Erfolgsmeldung mit Blume + Herz als Illustration.

## Offene Punkte

- [ ] **SVG-Varianten erzeugen.** Die PNG-Dateien sind eher klein und pixelig bei großer Darstellung. Aus den EPS lassen sich SVGs ziehen, die beliebig skalieren und auch umfärben lassen.
- [ ] **Deko-Element-Komponenten** (React / Vue / Astro / HTML) bauen: parametrisiert nach Farbe, Größe, Rotation. So kann man sie konsistent und kontrolliert einsetzen.
