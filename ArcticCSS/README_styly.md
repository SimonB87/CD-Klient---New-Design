# Styly – revize 22.9.2020

- Soubor pro generování buildu CSS je 'Semtex/gulpfile.js' yde je script pro spouštění buildu.

- V projektu se nastaví nový "smx" styl, díky tomu máme přístup k proměnným {theme}-xxxx

- Kompletní M8 styl byl převeden pod tento prefix a jeho zdroje ve formě STYLUS preprocerosu jsou v našem repozitáři ve složce "Semtex"

- Pro jeho build do jednoho main.css stylu je potřeba Node.js a Stylus package.

- Instalace Stylusu se provádí : "npm install stylus –g"

- Po nainstalování se ve složce Semtex spustí watcher, který generuje finální styl a sleduje změny naincludované do jednotlivých souborů, které jsou rozděleny podle charakteristiky (Base, Components, Typo)

- Watcher se spouští příkazem : "gulp watch"

- Aktuálně gulp watcher buildí tři verze CSS, pro NCTS, AMS, a GMS (GMS ma vlastni soubor GMS.styl (protoze obsahuje navic jine komponenty nez ostatni dva projekty)

- Finální Cssko pak stačí jen importnout do Screen Factory jako stávající CSS soubor (toto je potřeba jen při prvním buildu stylů, poté se soubory automaticky přepisují v main/css) - POZOR, Není možné provádět změny stylů v includlém souboru do ScreenFactory, protože ty se při každém buildu (provádí se zpravidla automaticky po pullu, na mašině, kde běží watcher) přepíšou zbuilděnými .style soubory. Je důležité provádět změny přímo ve zdrojích (./semtex/stylus/\*.style)

- Elementy jako table, groupbox atp jsou použity defaultně a není potřeba žádná specialní classa

- Zatím, dokud není k dispozici disabled mode pro view formulářů je použitá třída {theme}-disabledAll, která zdisabluje všechny input elementy, co má v sobě.

- Aktuální seznam tříd, které oddělují různé druhy buttonu jsou :

  - btn-success
  - btn-danger
  - btn-secondary
  - btn-alternate
  - btn-remove
  - Disabled

- Pro nastavení sticky navbaru (který je použitý v NCTS a AMS) a předejití lagu s paddingy je zapotřebí této sémantiky:
  - ControlPnl má css class "{theme}-nav-bar"
    - zanořený panel ControlPnlHolder má css class "{theme}-nav-bar-controls"
    - zanořený panel ControlPnlSpace má css class "{theme}-nav-bar-space"
