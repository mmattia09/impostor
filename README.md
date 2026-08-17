# Impostore

[![Deploy](https://img.shields.io/github/actions/workflow/status/mmattia09/impostor/static.yml?branch=main&label=deploy&style=for-the-badge)](https://github.com/mmattia09/impostor/actions/workflows/static.yml)
[![GitHub Pages](https://img.shields.io/badge/gioca-online-0071e3?style=for-the-badge)](https://mmattia09.github.io/impostor/)
[![Zero dipendenze](https://img.shields.io/badge/dipendenze-0-34c759?style=for-the-badge)](#struttura-del-progetto)
[![Licenza: MIT](https://img.shields.io/badge/licenza-MIT-blue?style=for-the-badge)](LICENSE)

Un party game da un solo telefono: i **civili** conoscono la parola segreta, gli
**impostori** devono fingere di conoscerla, **Mr. White** non sa nulla e deve
sopravvivere ascoltando. Si passa il telefono, ognuno guarda il proprio ruolo in
privato, poi si discute e si vota.

Nato per giocare in gruppo senza scaricare niente e senza account: è una pagina
statica in HTML, CSS e JavaScript, senza framework né build. Funziona offline
dopo la prima apertura, si installa sulla home del telefono e porta con sé
**1476 parole** divise in 17 pacchetti, tutti modificabili.

> Gioca subito: <https://mmattia09.github.io/impostor/>

## Funzionalità

- **Tre ruoli** — civile (conosce la parola), impostore (non la conosce ma riceve
  un indizio), Mr. White (non riceve nulla e, se eliminato, può vincere da solo
  indovinando la parola).
- **Da 3 a 12 giocatori**, con impostori e Mr. White regolabili separatamente. I
  limiti si aggiornano da soli: non puoi mai avere più infiltrati che civili.
- **Nomi persistenti e riordinabili** — restano tra una partita e l'altra, si
  trascinano per cambiare ordine e si rimuovono singolarmente. *Aggiungi
  giocatore* ne infila uno nuovo, e l'Invio sull'ultimo nome fa lo stesso senza
  staccare le mani dalla tastiera.
- **Indizi di una parola, obliqui** — ogni impostore riceve **un solo** indizio,
  lungo una parola o al massimo due, scelto per dare una direzione senza
  consegnare la risposta: *Pizza* non dà «mozzarella» ma «domicilio». Ogni voce ne
  ha quattro e l'ordine è mescolato a ogni parola, quindi con un solo impostore
  non esce sempre lo stesso.
- **Niente parole ripetute** — una parola già uscita non torna finché il
  pacchetto non è esaurito, per tutta la durata della serata.
- **Cambio parola** — se chi apre la discussione non conosce la parola può
  scartarla e farne estrarre un'altra, **una volta ogni 10 minuti**. I ruoli
  restano gli stessi, si ripassa solo il telefono.
- **Uscita in qualsiasi momento** — durante la rivelazione dei ruoli c'è sempre
  una ✕ per annullare il round, e dalla votazione si può chiudere la partita
  mostrando tutti i ruoli.
- **Punteggi che si accumulano** — ogni round assegna punti e la classifica
  della serata resta in home fino a quando non la azzeri. Dopo la prima
  eliminazione si può anche **chiudere il round a metà**, invece di trascinare
  votazioni di cui tutti conoscono già l'esito.
- **A prova di refresh** — punteggi, cronologia e round in corso vivono sul
  dispositivo: se ricarichi la pagina per sbaglio, in home trovi *Riprendi* e la
  partita torna esattamente dov'era, con gli stessi ruoli.
- **Cronologia delle parole** — l'elenco di tutto quello che è uscito nella
  serata, con il pacchetto di provenienza e come è finito il round.
- **Pacchetti condivisibili con un link** — un pacchetto viaggia dentro l'URL,
  compresso: lo mandi su WhatsApp e chi lo apre se lo ritrova nell'app dopo una
  conferma. Nessun file, nessun server di mezzo.
- **Sorteggio di chi parla per primo** — mai un Mr. White, che altrimenti
  dovrebbe inventarsi un indizio dal nulla.
- **17 pacchetti parole** — da *Facile* a *Difficile*, più cibo, animali, luoghi,
  cinema, musica, sport, scienza, mitologia, brand, giochi da tavolo,
  videogiochi, Minecraft, strumenti musicali e slang.
- **Pacchetti tuoi** — crea, modifica, rinomina, colora, esporta e importa
  pacchetti in JSON direttamente dall'app. Anche quelli inclusi sono modificabili
  e cancellabili, e le modifiche restano.
- **Pacchetti con AI** — l'app costruisce un prompt su misura (tema, lingua,
  numero di parole, quanti indizi e quanto distanti), tu lo incolli nell'AI che
  preferisci e riporti indietro la risposta: viene trasformata in un pacchetto
  modificabile. Riconosce liste CSV, JSON, elenchi puntati e tabelle Markdown.
- **Tema chiaro e scuro** — rilevato dal sistema, con interruttore manuale.
- **Offline e installabile** — un service worker mette in cache tutto; dopo la
  prima apertura l'app parte anche senza rete e si può aggiungere alla schermata
  home.
- **Nessun account, nessun server, nessuna telemetria** — tutto vive nel
  `localStorage` del telefono.

## Come si gioca

1. Imposta giocatori, nomi, numero di impostori e di Mr. White, e scegli uno o
   più pacchetti parole.
2. Premi **Inizia la partita**: il telefono passa di mano e ognuno vede il
   proprio ruolo in privato, poi copre e passa.
3. L'app sorteggia chi apre. A turno tutti descrivono la parola senza nominarla.
   Chi parla per primo, se non la conosce, può usare **Cambia parola**.
4. Si vota chi eliminare. L'app dice subito che ruolo aveva.
5. La partita finisce quando gli infiltrati sono tutti fuori (vincono i civili) o
   quando restano in numero pari o superiore ai civili (vincono loro).
6. Mr. White, se eliminato, ha una possibilità: indovinare la parola e vincere da
   solo. Accenti e maiuscole non contano.

## Punteggi

A fine round i punti si assegnano così:

| Esito | Punti |
|-------|-------|
| Vincono i civili | **+2** a ogni civile |
| Vincono gli impostori | **+3** a ogni impostore, **+1** a un Mr. White ancora vivo |
| Mr. White indovina la parola | **+4** a Mr. White |
| Mr. White resta in piedi fino alla parità | **+4** a Mr. White |
| Round chiuso a metà | **+1** a ogni civile per ogni infiltrato scoperto, **+2** a chi non è stato smascherato |
| Partita chiusa con *Mostra ruoli ed esci* | nessun punto |

**Chiudi qui il round.** Quando restano solo Mr. White o l'ultimo impostore, spesso
tutti hanno già capito chi è e continuare a votare è tempo perso. Dopo la prima
eliminazione compare un pulsante che chiude il round e conta i punti per quello
che è stato scoperto fin lì: chi è stato beccato non prende niente, chi è rimasto
nascosto porta a casa **+2**.

I punti sono legati al **nome** del giocatore, quindi restano suoi anche se
cambia posto nel giro. La classifica compare in home e sulla schermata di fine
round; si azzera solo con *Termina serata* o dopo 12 ore di inattività.

## Pacchetti inclusi

| Pacchetto | Voci | Contenuto |
|-----------|-----:|-----------|
| 📦 Facile | 88 | Parole quotidiane, adatte a tutti e ai bambini |
| ⚡ Medio | 175 | Vita adulta, burocrazia, situazioni riconoscibili |
| 🔥 Difficile | 83 | Concetti di filosofia, economia, scienze sociali e bias cognitivi |
| 🍝 Cibo | 72 | Piatti italiani e cucina del mondo |
| 🐾 Animali | 76 | Dai grandi mammiferi agli insetti curiosi |
| 🌍 Luoghi | 74 | Monumenti, città e meraviglie naturali |
| 🎬 Cinema | 69 | Film che quasi tutti hanno visto |
| 🎵 Musica | 75 | Artisti, generi e oggetti della musica |
| ⚽ Sport | 74 | Discipline, gesti tecnici e regole |
| 🔬 Scienza | 75 | Fisica, biologia, astronomia, chimica |
| 🏛 Mitologia | 73 | Greca, norrena, egizia, giapponese e non solo |
| 💎 Brand | 111 | Marchi famosi di ogni settore |
| 🎲 Giochi da tavolo | 75 | Dai classici ai gestionali pesanti |
| 👾 Video Games | 114 | Titoli iconici di ogni epoca e genere |
| ⛏ Minecraft | 94 | Mob, biomi, blocchi e meccaniche |
| 🎸 Strumenti | 73 | Strumenti musicali di tutto il mondo |
| 🗣 Slang | 75 | Gergo di internet e delle nuove generazioni |

Ogni riga ha la forma `parola,indizio1,indizio2,...`: il primo campo è la parola
segreta, gli altri quattro sono gli indizi da cui l'app ne pesca **uno solo** per
ciascun impostore.

### Come è scritto un indizio

Due vincoli insieme. **Una parola, al massimo due** — 4538 indizi su 5540 sono di
una parola sola. E **niente definizioni**: non l'attributo che identifica la
parola, ma il contesto attorno — quando succede, cosa provoca, con cosa la si
confonde.

```
Pizza,domicilio,venerdì,spicchi,condivisa
Titanic,finale noto,pianto collettivo,lunghissimo,dettaglio discusso
Bias di conferma,conferme,scartare,inconsapevole,social
```

Un buon indizio dovrebbe poter valere anche per due o tre parole diverse. Se
leggendolo indovini subito, è da riscrivere.

## Interfaccia

Le icone sono SVG scritti a mano dentro `script.js` e iniettati nei pulsanti
marcati `data-icon`: nessun font esterno, nessuna richiesta di rete, colore che
segue il testo e resa nitida in tema chiaro e scuro. Le emoji restano solo dove
sono contenuto, cioè sui pacchetti parole e sulle schermate di esito.

## Struttura del progetto

Nessuna dipendenza, nessun passo di build: quello che c'è nel repository è quello
che gira nel browser.

```
index.html          — markup dell'app (tutte le schermate sono qui)
style.css           — stili, tema chiaro e scuro
script.js           — stato, logica di gioco e UI
sw.js               — service worker per l'uso offline
data/
  manifest.json     — elenco dei pacchetti da caricare
  packet-*.json     — dati dei singoli pacchetti
```

## Aggiungere un pacchetto

Dall'app: **⚙️ → + Aggiungi pacchetto**, oppure **✨ Crea pacchetto con AI**, o
ancora **⬇ Importa** partendo da un JSON esportato.

Per aggiungerne uno di serie al repository:

1. Crea `data/packet-nome.json`:

   ```json
   {
     "id": "nome",
     "label": "Nome Visibile",
     "emoji": "🎯",
     "colorIdx": 3,
     "lines": [
       "parola,indizio,indizio di più parole,altro indizio",
       "altra parola,uno,due,tre"
     ]
   }
   ```

2. Aggiungi `"packet-nome"` a `data/manifest.json` e allo stesso elenco in
   `DEFAULT_PACKET_FILES` (in `script.js`), che è il fallback quando il manifest
   non è raggiungibile.
3. `colorIdx` è l'indice nella tavolozza `COLORS` di `script.js`.

Regole per un pacchetto fatto bene: niente virgole dentro parole o indizi, niente
doppioni, e nessun indizio che contenga la parola segreta.

I pacchetti di serie che non hai mai toccato **non** finiscono nel `localStorage`:
così, quando l'app si aggiorna, le parole nuove arrivano anche a chi gioca da
mesi. Appena ne modifichi uno, quella tua versione ha la precedenza e resta.

## Sviluppo locale

Serve un server HTTP, perché le `fetch` dei pacchetti non funzionano con
`file://`:

```bash
python3 -m http.server 8000
```

Poi apri <http://localhost:8000>. Prima di aprire una PR, controlla che i
pacchetti siano validi:

```bash
node --check script.js && node --check sw.js && for f in data/*.json; do python3 -m json.tool "$f" > /dev/null || echo "$f non valido"; done
```

Quando modifichi `script.js`, `style.css` o `sw.js`, alza la versione in tre
punti: il parametro `?v=` dei due tag in `index.html` e la costante `CACHE` in
`sw.js`. Senza questo, chi ha già aperto l'app continua a usare la copia in cache.

## Dati salvati sul dispositivo

| Chiave | Dove | Cosa contiene |
|--------|------|---------------|
| `imp_packs_v5` | localStorage | Solo i pacchetti che hai creato o modificato |
| `imp_deleted_defaults` | localStorage | I pacchetti di serie che hai eliminato |
| `imp_prefs` | localStorage | Giocatori, ruoli, indizi on/off, pacchetti scelti |
| `imp_names` | localStorage | I nomi dei giocatori |
| `imp_theme` | localStorage | Tema scelto a mano |
| `imp_word_change_at` | localStorage | Ultimo cambio parola, per il limite dei 10 minuti |
| `imp_session_v1` | localStorage | Serata in corso: punteggi, cronologia, parole già uscite |
| `imp_game_v1` | localStorage | Round interrotto, per poterlo riprendere |

Non c'è un backend: cancellare i dati del sito riporta l'app allo stato iniziale.

### Come sopravvive a un refresh

Il round in corso viene salvato a ogni cambio di schermata, e la serata a ogni
parola estratta o punto assegnato. Ricaricare la pagina — o chiudere per sbaglio
la scheda — non perde niente: in home compare un banner con **Riprendi**.

La ripresa riparte sempre dalla **copertina** del giocatore di turno, mai dal
ruolo scoperto: chi ha in mano il telefono dopo il refresh non vede il ruolo di
qualcun altro. Ruoli, parola e indizi restano quelli di prima.

Dopo **12 ore** di inattività la serata si considera chiusa e si riparte con
punteggi e cronologia puliti; puoi comunque azzerarla a mano con *Termina serata*.

## Deploy

Ogni push su `main` pubblica automaticamente su **GitHub Pages** tramite
[`.github/workflows/static.yml`](.github/workflows/static.yml). Non c'è niente da
compilare: viene caricato il repository così com'è.

## Segnalazioni

Domande e bug → [GitHub Issues](https://github.com/mmattia09/impostor/issues).

## Idee per il futuro

- Timer per la discussione e per il turno di ogni giocatore.
- Ruoli extra per gruppi numerosi.
- Traduzione dell'interfaccia in altre lingue.

## Autori e ringraziamenti

Di [@mmattia09](https://github.com/mmattia09). Sviluppato con l'aiuto di
[Claude Code](https://claude.com/claude-code).

## Licenza

[MIT](LICENSE).

## Stato del progetto

**Attivo** — l'app copre quello che serve al suo autore per giocarci. Correzioni e
piccoli miglioramenti arrivano quando servono.
