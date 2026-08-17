const COLORS = [
  { hex: '#34c759', dark: '#1a6b33' },
  { hex: '#30d158', dark: '#1a7040' },
  { hex: '#ff9f0a', dark: '#8a5200' },
  { hex: '#ffd60a', dark: '#7a6200' },
  { hex: '#ff3b30', dark: '#b01208' },
  { hex: '#ff6961', dark: '#9e1f1a' },
  { hex: '#0071e3', dark: '#004a99' },
  { hex: '#5ac8fa', dark: '#006d99' },
  { hex: '#af52de', dark: '#6b2090' },
  { hex: '#bf5af2', dark: '#7a1faa' },
  { hex: '#ff2d55', dark: '#99001e' },
  { hex: '#ff6b9d', dark: '#9e1f50' },
  { hex: '#32ade6', dark: '#00567a' },
  { hex: '#64d2ff', dark: '#006999' },
  { hex: '#ff6b35', dark: '#992500' },
  { hex: '#636366', dark: '#3a3a3c' }
];

const EMOJIS = [
  '📦','⚡','🔥','🎯','🌊','🍀','💡','🎲','🌙','⭐','🎪','🧩',
  '🎭','🏆','🌈','🦄','🚀','💎','🎸','🍕','👾','🤖','🎃','🧠',
  '🐉','🦊','🌺','🍄','🎵','🔮','⚽','🎨'
];

// Icone disegnate a mano in SVG: niente font esterni, niente richieste di rete,
// e il colore segue il testo del pulsante che le contiene.
const ICONS = {
  moon: '<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
  settings: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.6 1.6 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.6 1.6 0 0 0-1.8-.3 1.6 1.6 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1A1.6 1.6 0 0 0 9 19.4a1.6 1.6 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.6 1.6 0 0 0 .3-1.8 1.6 1.6 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1A1.6 1.6 0 0 0 4.6 9a1.6 1.6 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.6 1.6 0 0 0 1.8.3H9a1.6 1.6 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.6 1.6 0 0 0 1 1.5 1.6 1.6 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.6 1.6 0 0 0-.3 1.8V9a1.6 1.6 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.6 1.6 0 0 0-1.5 1Z"/>',
  grip: '<path d="M4 9h16M4 15h16"/>',
  x: '<path d="M18 6 6 18M6 6l12 12"/>',
  upload: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12"/>',
  download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>',
  link: '<path d="M10 13a5 5 0 0 0 7.5.5l3-3A5 5 0 0 0 13.5 3.5l-1.7 1.7"/><path d="M14 11a5 5 0 0 0-7.5-.5l-3 3A5 5 0 0 0 10.5 20.5l1.7-1.7"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  sparkles: '<path d="m12 3 1.9 4.6L18.5 9.5l-4.6 1.9L12 16l-1.9-4.6L5.5 9.5l4.6-1.9L12 3Z"/><path d="m19 15 .8 2 2 .8-2 .8-.8 2-.8-2-2-.8 2-.8.8-2Z"/>',
  chevron: '<path d="m6 9 6 6 6-6"/>',
  check: '<path d="m20 6-11 11-5-5"/>',
  userPlus: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M19 8v6m3-3h-6"/>',
  refresh: '<path d="M3 12a9 9 0 0 1 15.2-6.5L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-15.2 6.5L3 16"/><path d="M3 21v-5h5"/>',
  flag: '<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1Z"/><path d="M4 22v-7"/>',
  logOut: '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><path d="m16 17 5-5-5-5M21 12H9"/>',
  arrowRight: '<path d="M5 12h14m-6-7 7 7-7 7"/>',
  trash: '<path d="M3 6h18M8 6V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2m3 0v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/>'
};

function icon(name, extra = '') {
  const body = ICONS[name];
  if (!body) return '';
  return `<svg class="icon${extra ? ' ' + extra : ''}" viewBox="0 0 24 24" fill="none" stroke="currentColor"`
    + ` stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${body}</svg>`;
}

// Riempie gli elementi statici marcati con data-icon nell'HTML.
function renderStaticIcons(root = document) {
  root.querySelectorAll('[data-icon]').forEach(el => {
    el.innerHTML = icon(el.dataset.icon);
  });
}

let packets = [];
let playerDrag = null;
let defaultPacketIds = new Set();

// Fallback se data/manifest.json non è raggiungibile: deve restare allineato al manifest.
const DEFAULT_PACKET_FILES = [
  'packet-easy',
  'packet-medium',
  'packet-hard',
  'packet-cibo',
  'packet-animali',
  'packet-luoghi',
  'packet-cinema',
  'packet-musica',
  'packet-sport',
  'packet-scienza',
  'packet-mitologia',
  'packet-brands',
  'packet-boardgames',
  'packet-videogames',
  'packet-minecraft',
  'packet-instruments',
  'packet-slang'
];

// Pacchetti rimossi dall'app: vanno ripuliti anche dai salvataggi vecchi.
const RETIRED_PACKET_IDS = ['boomer', 'memes', 'spicy'];

const PACKS_KEY = 'imp_packs_v5';
const LEGACY_PACKS_KEYS = ['imp_packs_v4', 'imp_packs_v3'];
const DELETED_DEFAULTS_KEY = 'imp_deleted_defaults';
const PREFS_KEY = 'imp_prefs';
const SESSION_KEY = 'imp_session_v1';
const GAME_KEY = 'imp_game_v1';
const WORD_CHANGE_KEY = 'imp_word_change_at';
const WORD_CHANGE_COOLDOWN_MS = 10 * 60 * 1000;
// Dopo mezza giornata di inattività la serata è finita: si riparte puliti.
const SESSION_MAX_IDLE_MS = 12 * 60 * 60 * 1000;
const HISTORY_MAX = 200;

// Punti assegnati a fine round, per ruolo.
const SCORE_TABLE = {
  civilians: { civilian: 2 },
  impostors: { impostor: 3, mrwhiteAlive: 1 },
  'mrwhite-win': { mrwhite: 4 },
  'mrwhite-survived': { mrwhite: 4 }
};

function normalizePacket(p) {
  return { ...p, id: safePacketId(p.id), lines: Array.isArray(p.lines) ? [...p.lines] : [] };
}

function escapeHTML(value) {
  return String(value ?? '').replace(/[&<>"']/g, ch => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  }[ch]));
}

function safePacketId(id) {
  const safe = String(id ?? '')
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
  return safe || 'packet';
}

// Salviamo solo i pacchetti che l'utente ha davvero toccato, più i suoi. Se
// salvassimo tutto, una copia vecchia in localStorage bloccherebbe per sempre le
// parole nuove che arrivano con gli aggiornamenti dell'app.
function isUserPacket(p) {
  return !defaultPacketIds.has(p.id) || p.edited === true;
}

function readStoredPackets() {
  const stored = localStorage.getItem(PACKS_KEY);
  if (stored) {
    try {
      const saved = JSON.parse(stored);
      if (Array.isArray(saved)) return saved;
    } catch (e) {}
    return null;
  }
  // Migrazione: dei salvataggi vecchi teniamo solo i pacchetti creati
  // dall'utente. Quelli di serie tornano alla versione aggiornata dell'app.
  for (const key of LEGACY_PACKS_KEYS) {
    const legacy = localStorage.getItem(key);
    if (!legacy) continue;
    try {
      const saved = JSON.parse(legacy);
      if (!Array.isArray(saved)) continue;
      const migrated = saved.filter(p =>
        p && p.id && !RETIRED_PACKET_IDS.includes(safePacketId(p.id))
        && !defaultPacketIds.has(safePacketId(p.id)));
      localStorage.setItem(PACKS_KEY, JSON.stringify(migrated));
      LEGACY_PACKS_KEYS.forEach(k => localStorage.removeItem(k));
      return migrated;
    } catch (e) {}
  }
  return null;
}

function loadDeletedDefaults() {
  try {
    const raw = JSON.parse(localStorage.getItem(DELETED_DEFAULTS_KEY) || '[]');
    return new Set(Array.isArray(raw) ? raw : []);
  } catch (e) {
    return new Set();
  }
}

function saveDeletedDefaults(set) {
  localStorage.setItem(DELETED_DEFAULTS_KEY, JSON.stringify([...set]));
}

function loadPackets(defaults) {
  const removed = loadDeletedDefaults();
  const base = defaults.map(normalizePacket).filter(p => !removed.has(p.id));
  const saved = readStoredPackets();
  if (!saved) {
    packets = base;
    return;
  }
  const byId = new Map(base.map(p => [p.id, p]));
  saved
    .filter(p => p && p.id && p.label && Array.isArray(p.lines))
    .map(normalizePacket)
    .filter(p => !RETIRED_PACKET_IDS.includes(p.id) && !removed.has(p.id))
    .forEach(p => byId.set(p.id, p));
  packets = [...byId.values()];
  if (!packets.length) packets = base;
}

function savePackets() {
  localStorage.setItem(PACKS_KEY, JSON.stringify(packets.filter(isUserPacket)));
}

// Da chiamare a ogni modifica dell'utente su un pacchetto di serie.
function markEdited(id) {
  const p = packets.find(x => x.id === id);
  if (p) p.edited = true;
}

function loadPrefs() {
  try {
    const raw = JSON.parse(localStorage.getItem(PREFS_KEY) || 'null');
    if (!raw || typeof raw !== 'object') return;
    if (Number.isFinite(raw.playerCount)) ST.playerCount = Math.max(3, Math.min(12, raw.playerCount));
    if (Number.isFinite(raw.impostorCount)) ST.impostorCount = Math.max(0, raw.impostorCount);
    if (Number.isFinite(raw.mrWhiteCount)) ST.mrWhiteCount = Math.max(0, raw.mrWhiteCount);
    if (typeof raw.hintsEnabled === 'boolean') ST.hintsEnabled = raw.hintsEnabled;
    if (Array.isArray(raw.selectedPackIds)) ST.selectedPackIds = new Set(raw.selectedPackIds);
  } catch (e) {}
}

function savePrefs() {
  localStorage.setItem(PREFS_KEY, JSON.stringify({
    playerCount: ST.playerCount,
    impostorCount: ST.impostorCount,
    mrWhiteCount: ST.mrWhiteCount,
    hintsEnabled: ST.hintsEnabled,
    selectedPackIds: [...ST.selectedPackIds]
  }));
}

function savePlayerNames() {
  localStorage.setItem('imp_names', JSON.stringify(ST.playerNames));
}

function getColor(p) {
  return COLORS[p.colorIdx % COLORS.length];
}

function getPacketTextColor(c) {
  return isDarkMode() ? c.hex : c.dark;
}

const ST = {
  playerCount: 5,
  playerNames: [],
  impostorCount: 1,
  mrWhiteCount: 0,
  hintsEnabled: true,
  selectedPackIds: new Set(),
  players: [],
  currentPlayerIndex: 0,
  secretWord: '',
  secretWordHints: [],
  hintOrder: [],
  usedWords: new Set(),
  votedOut: null,
  lastEliminated: null,
  starterName: '',
  scored: false,
  session: null
};

let currentScreenId = 'home';

// Confronto "morbido": ignora maiuscole, accenti e punteggiatura.
function normalizeWord(value) {
  return String(value ?? '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();
}

function shuffle(arr) {
  const out = [...arr];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

// ---------------------------------------------------------------------------
// Serata: punteggi, cronologia e parole già uscite. Sta in localStorage, quindi
// un refresh (anche per sbaglio) o la chiusura della scheda non la perdono.
// ---------------------------------------------------------------------------
function newSession() {
  const now = Date.now();
  return { startedAt: now, lastActiveAt: now, rounds: 0, usedWords: [], history: [], scores: {} };
}

function loadSession() {
  let raw = null;
  try { raw = JSON.parse(localStorage.getItem(SESSION_KEY) || 'null'); } catch (e) {}
  if (!raw || typeof raw !== 'object' || !Number.isFinite(raw.lastActiveAt)
      || Date.now() - raw.lastActiveAt > SESSION_MAX_IDLE_MS) {
    ST.session = newSession();
  } else {
    ST.session = {
      startedAt: Number(raw.startedAt) || Date.now(),
      lastActiveAt: Number(raw.lastActiveAt) || Date.now(),
      rounds: Number(raw.rounds) || 0,
      usedWords: Array.isArray(raw.usedWords) ? raw.usedWords.map(String) : [],
      history: Array.isArray(raw.history)
        ? raw.history.filter(h => h && typeof h.word === 'string').slice(-HISTORY_MAX)
        : [],
      scores: (raw.scores && typeof raw.scores === 'object' && !Array.isArray(raw.scores))
        ? Object.fromEntries(Object.entries(raw.scores)
            .filter(([, v]) => Number.isFinite(v))
            .map(([k, v]) => [String(k), Number(v)]))
        : {}
    };
  }
  ST.usedWords = new Set(ST.session.usedWords);
}

function saveSession() {
  ST.session.lastActiveAt = Date.now();
  ST.session.usedWords = [...ST.usedWords];
  try { localStorage.setItem(SESSION_KEY, JSON.stringify(ST.session)); } catch (e) {}
}

function endSession() {
  const hasData = ST.session.rounds > 0 || ST.session.history.length > 0;
  if (hasData && !confirm('Terminare la serata? Punteggi, cronologia e parole già uscite vengono azzerati.')) return;
  ST.session = newSession();
  ST.usedWords = new Set();
  clearSavedGame();
  saveSession();
  renderSessionCard();
  renderResumeBanner();
  toast('Serata azzerata.');
}

function sessionHasContent() {
  return ST.session.rounds > 0 || ST.session.history.length > 0
    || Object.keys(ST.session.scores).length > 0;
}

function recordWordDrawn(entry) {
  ST.session.history.push({ word: entry.word, pack: entry.pack || '', at: Date.now(), outcome: null });
  if (ST.session.history.length > HISTORY_MAX) ST.session.history.shift();
}

function setLastWordOutcome(outcome) {
  const last = ST.session.history[ST.session.history.length - 1];
  if (last && !last.outcome) last.outcome = outcome;
}

// Assegna i punti del round. Una sola volta: showResult può essere raggiunto
// da più strade e i punti non devono raddoppiarsi.
function awardPoints(outcome) {
  if (ST.scored) return [];
  ST.scored = true;
  const rules = SCORE_TABLE[outcome] || {};
  const gains = [];
  // Round chiuso a metà: i civili prendono un punto per ogni infiltrato
  // scoperto, chi non è stato smascherato ne prende due.
  const scoperti = outcome === 'early' ? infiltratiScoperti().scoperti : 0;
  ST.players.forEach(p => {
    let pts = 0;
    if (outcome === 'early') {
      pts = p.role === 'civilian' ? scoperti : (p.eliminated ? 0 : 2);
    } else if (p.role === 'civilian') pts = rules.civilian || 0;
    else if (p.role === 'impostor') pts = rules.impostor || 0;
    else if (p.role === 'mrwhite') pts = (rules.mrwhite || 0) + (p.eliminated ? 0 : (rules.mrwhiteAlive || 0));
    if (!pts) return;
    ST.session.scores[p.name] = (ST.session.scores[p.name] || 0) + pts;
    gains.push({ name: p.name, pts });
  });
  ST.session.rounds++;
  setLastWordOutcome(outcome);
  saveSession();
  return gains;
}

function scoreboardRows() {
  return Object.entries(ST.session.scores)
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .map(([name, pts], i) => ({ name, pts, rank: i + 1 }));
}

// ---------------------------------------------------------------------------
// Round in corso: salvato a ogni passaggio di schermata, così un refresh non
// costringe a rifare la distribuzione dei ruoli.
// ---------------------------------------------------------------------------
const RESUMABLE_SCREENS = new Set(['cover', 'reveal', 'starter', 'vote', 'elim', 'mrwhite-guess']);

function saveGame() {
  if (!RESUMABLE_SCREENS.has(currentScreenId) || !ST.players.length) return;
  try {
    localStorage.setItem(GAME_KEY, JSON.stringify({
      at: Date.now(),
      screen: currentScreenId,
      playerCount: ST.playerCount,
      impostorCount: ST.impostorCount,
      mrWhiteCount: ST.mrWhiteCount,
      hintsEnabled: ST.hintsEnabled,
      secretWord: ST.secretWord,
      secretWordHints: ST.secretWordHints,
      hintOrder: ST.hintOrder,
      players: ST.players,
      currentPlayerIndex: ST.currentPlayerIndex,
      lastEliminated: ST.lastEliminated,
      starterName: ST.starterName,
      scored: ST.scored
    }));
  } catch (e) {}
}

function clearSavedGame() {
  try { localStorage.removeItem(GAME_KEY); } catch (e) {}
}

function readSavedGame() {
  let raw = null;
  try { raw = JSON.parse(localStorage.getItem(GAME_KEY) || 'null'); } catch (e) {}
  if (!raw || typeof raw !== 'object') return null;
  if (!Array.isArray(raw.players) || !raw.players.length) return null;
  if (!RESUMABLE_SCREENS.has(raw.screen)) return null;
  if (!Number.isFinite(raw.at) || Date.now() - raw.at > SESSION_MAX_IDLE_MS) return null;
  return raw;
}

function resumeGame() {
  const g = readSavedGame();
  if (!g) {
    renderResumeBanner();
    return;
  }
  ST.playerCount = g.players.length;
  ST.impostorCount = Number(g.impostorCount) || 0;
  ST.mrWhiteCount = Number(g.mrWhiteCount) || 0;
  ST.hintsEnabled = g.hintsEnabled !== false;
  ST.secretWord = String(g.secretWord || '');
  ST.secretWordHints = Array.isArray(g.secretWordHints) ? g.secretWordHints : [];
  ST.hintOrder = Array.isArray(g.hintOrder) ? g.hintOrder : [];
  ST.players = g.players.map(p => ({
    name: String(p.name || ''),
    role: p.role,
    eliminated: !!p.eliminated,
    hintIndex: Number.isFinite(p.hintIndex) ? p.hintIndex : null
  }));
  ST.currentPlayerIndex = Math.min(Math.max(0, Number(g.currentPlayerIndex) || 0), ST.playerCount - 1);
  ST.lastEliminated = Number.isFinite(g.lastEliminated) ? g.lastEliminated : null;
  ST.starterName = String(g.starterName || '');
  ST.scored = !!g.scored;
  ST.votedOut = null;

  const eliminated = ST.lastEliminated !== null ? ST.players[ST.lastEliminated] : null;
  if (g.screen === 'starter' && ST.starterName) showStarterScreen(ST.starterName);
  else if (g.screen === 'vote') showVoteScreen();
  else if (g.screen === 'elim' && eliminated) showEliminationScreen(eliminated);
  else if (g.screen === 'mrwhite-guess' && eliminated) showMrWhiteGuess();
  // 'reveal' riparte dalla copertina: nessun ruolo va mostrato senza che il
  // telefono sia passato di mano.
  else showCover();
  toast('Partita ripresa da dove eravate.');
}

function discardSavedGame() {
  if (!confirm('Scartare la partita interrotta?')) return;
  clearSavedGame();
  renderResumeBanner();
  toast('Partita scartata.');
}

let toastTimer = null;
function toast(message) {
  const el = document.getElementById('toast');
  if (!el) return;
  el.textContent = message;
  el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('show'), 3200);
}

// UI State Management
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById('screen-' + id).classList.add('active');
  currentScreenId = id;
  updateBottomNav(id);
  window.scrollTo(0, 0);
  saveGame();
}

function updateBottomNav(screenId) {
  const nav = document.getElementById('nav-buttons');
  nav.innerHTML = '';

  if (screenId === 'cover') {
    const btn = document.createElement('button');
    btn.className = 'btn btn-primary';
    btn.innerHTML = 'Sono pronto ' + icon('arrowRight', 'icon-sm');
    btn.id = 'btn-reveal';
    nav.appendChild(btn);
    document.getElementById('bottom-nav').classList.add('active');
  } else if (screenId === 'reveal') {
    const btn = document.createElement('button');
    btn.className = 'btn btn-primary';
    btn.innerHTML = 'Copri e passa ' + icon('arrowRight', 'icon-sm');
    btn.id = 'btn-next-player';
    nav.appendChild(btn);
    document.getElementById('bottom-nav').classList.add('active');
  } else if (screenId === 'vote') {
    const group = document.createElement('div');
    group.className = 'btn-group';
    group.innerHTML = `
      <button class="btn btn-primary" id="btn-confirm-vote">Conferma eliminazione</button>
      ${canEndRoundEarly() ? `<button class="btn btn-secondary" id="btn-end-round">${icon('flag', 'icon-sm')} Chiudi qui il round</button>` : ''}
      <button class="btn btn-secondary" id="btn-show-roles-exit">${icon('logOut', 'icon-sm')} Mostra ruoli ed esci</button>
    `;
    nav.appendChild(group);
    document.getElementById('bottom-nav').classList.add('active');
  } else if (screenId === 'starter') {
    const group = document.createElement('div');
    group.className = 'btn-group';
    group.innerHTML = `
      <button class="btn btn-primary" id="btn-go-vote">Vai alla votazione ${icon('arrowRight', 'icon-sm')}</button>
      <button class="btn btn-secondary" id="btn-change-word">${icon('refresh', 'icon-sm')} Cambia parola</button>
    `;
    nav.appendChild(group);
    document.getElementById('bottom-nav').classList.add('active');
  } else if (screenId === 'elim') {
    const group = document.createElement('div');
    group.className = 'btn-group';
    group.innerHTML = `
      <button class="btn btn-primary" id="btn-continue-elim">Continua il gioco ${icon('arrowRight', 'icon-sm')}</button>
      ${canEndRoundEarly() ? `<button class="btn btn-secondary" id="btn-end-round">${icon('flag', 'icon-sm')} Chiudi qui il round</button>` : ''}
    `;
    nav.appendChild(group);
    document.getElementById('bottom-nav').classList.add('active');
  } else if (screenId === 'mrwhite-guess') {
    const group = document.createElement('div');
    group.className = 'btn-group';
    group.innerHTML = `
      <button class="btn btn-primary" id="btn-mrwhite-confirm">Conferma risposta</button>
      <button class="btn btn-secondary" id="btn-mrwhite-giveup">Rinuncia</button>
    `;
    nav.appendChild(group);
    document.getElementById('bottom-nav').classList.add('active');
  } else if (screenId === 'result') {
    const group = document.createElement('div');
    group.className = 'btn-group';
    group.innerHTML = `
      <button class="btn btn-primary" id="btn-new-round">Nuova partita ${icon('arrowRight', 'icon-sm')}</button>
      <button class="btn btn-secondary" id="btn-go-home">Menu principale</button>
    `;
    nav.appendChild(group);
    document.getElementById('bottom-nav').classList.add('active');
  } else if (screenId === 'role-summary') {
    const btn = document.createElement('button');
    btn.className = 'btn btn-primary';
    btn.textContent = 'Torna al menu';
    btn.id = 'btn-go-home';
    nav.appendChild(btn);
    document.getElementById('bottom-nav').classList.add('active');
  } else {
    document.getElementById('bottom-nav').classList.remove('active');
  }

  document.body.classList.toggle('has-bottom-nav',
    document.getElementById('bottom-nav').classList.contains('active'));

  attachBottomNavListeners();
  syncBottomNavSpace();
}

// Con tre pulsanti la barra è più alta: lo spazio sotto va misurato, non indovinato.
function syncBottomNavSpace() {
  const nav = document.getElementById('bottom-nav');
  document.body.style.paddingBottom = nav.classList.contains('active')
    ? `calc(${nav.offsetHeight + 24}px + env(safe-area-inset-bottom, 0px))`
    : '';
}

function attachBottomNavListeners() {
  const listeners = {
    'btn-reveal': revealRole,
    'btn-next-player': nextPlayer,
    'btn-go-vote': showVoteScreen,
    'btn-show-roles-exit': showRolesAndExit,
    'btn-confirm-vote': confirmVote,
    'btn-continue-elim': checkWin,
    'btn-end-round': endRoundEarly,
    'btn-change-word': changeWord,
    'btn-mrwhite-confirm': checkMrWhiteGuess,
    'btn-mrwhite-giveup': mrwhiteGiveUp,
    'btn-new-round': newRound,
    'btn-go-home': goHome
  };

  Object.entries(listeners).forEach(([id, fn]) => {
    const el = document.getElementById(id);
    if (el) el.onclick = fn;
  });

  if (document.getElementById('btn-change-word')) startWordChangeTicker();
  else stopWordChangeTicker();
}

// Home Screen
function renderPlayerNames() {
  const list = document.getElementById('player-name-list');
  list.innerHTML = '';
  for (let i = 0; i < ST.playerCount; i++) {
    const row = document.createElement('div');
    row.className = 'player-name-row';
    row.dataset.index = i;
    const dragBtn = document.createElement('button');
    dragBtn.className = 'name-drag-btn';
    dragBtn.type = 'button';
    dragBtn.innerHTML = icon('grip');
    dragBtn.title = 'Trascina per riordinare';
    dragBtn.setAttribute('aria-label', 'Riordina ' + (ST.playerNames[i]?.trim() || 'Giocatore ' + (i + 1)));
    dragBtn.onpointerdown = e => startPlayerReorder(e, i);
    const input = document.createElement('input');
    input.className = 'name-input';
    input.type = 'text';
    input.placeholder = 'Giocatore ' + (i + 1);
    input.value = ST.playerNames[i] || '';
    input.oninput = (e) => { ST.playerNames[i] = e.target.value; savePlayerNames(); };
    // Invio: passa al nome successivo, e sull'ultimo aggiunge un giocatore.
    input.onkeydown = (e) => {
      if (e.key !== 'Enter') return;
      e.preventDefault();
      const next = document.querySelectorAll('.name-input')[i + 1];
      if (next) next.focus();
      else addPlayer();
    };
    const delBtn = document.createElement('button');
    delBtn.className = 'name-delete-btn';
    delBtn.type = 'button';
    delBtn.innerHTML = icon('x', 'icon-sm');
    delBtn.title = 'Rimuovi nome';
    delBtn.setAttribute('aria-label', 'Rimuovi ' + (ST.playerNames[i]?.trim() || 'Giocatore ' + (i + 1)));
    delBtn.onclick = () => removePlayer(i);
    row.innerHTML = `<span class="player-index">${i + 1}</span>`;
    row.appendChild(dragBtn);
    row.appendChild(input);
    row.appendChild(delBtn);
    list.appendChild(row);
  }
}

function reorderPlayerNames(fromIdx, targetIdx, sourceNames = ST.playerNames) {
  if (!Number.isInteger(fromIdx) || !Number.isInteger(targetIdx) || fromIdx === targetIdx) return;
  if (targetIdx < 0 || targetIdx >= ST.playerCount) return;
  const names = [...sourceNames];
  while (names.length < ST.playerCount) names.push('');
  const [moved] = names.splice(fromIdx, 1);
  names.splice(targetIdx, 0, moved);
  ST.playerNames = names.slice(0, ST.playerCount);
  savePlayerNames();
  renderPlayerNames();
}

function targetPlayerIndexFromY(y) {
  const rows = [...document.querySelectorAll('.player-name-row')];
  const centers = rows.map(row => {
    const rect = row.getBoundingClientRect();
    return rect.top + rect.height / 2;
  });
  return centers.reduce((closest, center, i) =>
    Math.abs(center - y) < Math.abs(centers[closest] - y) ? i : closest, 0);
}

function syncPlayerNamesFromInputs() {
  document.querySelectorAll('.name-input').forEach((input, i) => {
    ST.playerNames[i] = input.value;
  });
}

function startPlayerReorder(e, idx) {
  e.preventDefault();
  syncPlayerNamesFromInputs();
  const row = document.querySelector(`.player-name-row[data-index="${idx}"]`);
  playerDrag = { fromIdx: idx, targetIdx: idx, moved: false, startY: e.clientY, names: [...ST.playerNames] };
  row?.classList.add('dragging');
  e.currentTarget.setPointerCapture?.(e.pointerId);
  e.currentTarget.onpointermove = movePlayerReorder;
  e.currentTarget.onpointerup = endPlayerReorder;
  e.currentTarget.onpointercancel = cancelPlayerReorder;
}

function movePlayerReorder(e) {
  if (!playerDrag) return;
  if (Math.abs(e.clientY - playerDrag.startY) > 4) playerDrag.moved = true;
  playerDrag.targetIdx = targetPlayerIndexFromY(e.clientY);
  document.querySelectorAll('.player-name-row').forEach(row =>
    row.classList.toggle('drag-target', Number(row.dataset.index) === playerDrag.targetIdx)
  );
}

function clearPlayerReorder(handle) {
  if (handle) {
    handle.onpointermove = null;
    handle.onpointerup = null;
    handle.onpointercancel = null;
  }
  playerDrag = null;
  document.querySelectorAll('.player-name-row').forEach(row => row.classList.remove('dragging', 'drag-target'));
}

function endPlayerReorder(e) {
  const drag = playerDrag;
  e.currentTarget.releasePointerCapture?.(e.pointerId);
  clearPlayerReorder(e.currentTarget);
  if (drag?.moved) {
    syncPlayerNamesFromInputs();
    reorderPlayerNames(drag.fromIdx, drag.targetIdx, drag.names);
  }
}

function cancelPlayerReorder(e) {
  e.currentTarget.releasePointerCapture?.(e.pointerId);
  clearPlayerReorder(e.currentTarget);
}

function adjustPlayers(d) {
  ST.playerCount = Math.max(3, Math.min(12, ST.playerCount + d));
  document.getElementById('player-count').textContent = ST.playerCount;
  clampRoles();
  renderPlayerNames();
}

function addPlayer() {
  syncPlayerNamesFromInputs();
  if (ST.playerCount >= 12) {
    toast('Massimo 12 giocatori.');
    return;
  }
  ST.playerCount++;
  ST.playerNames[ST.playerCount - 1] = '';
  document.getElementById('player-count').textContent = ST.playerCount;
  clampRoles();
  savePlayerNames();
  renderPlayerNames();
  const inputs = document.querySelectorAll('.name-input');
  const last = inputs[inputs.length - 1];
  if (last) {
    last.focus();
    last.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}

function removePlayer(idx) {
  const label = (ST.playerNames[idx] || '').trim() || 'Giocatore ' + (idx + 1);
  if (!confirm('Rimuovere ' + label + '?')) return;
  if (ST.playerCount <= 3) {
    ST.playerNames[idx] = '';
  } else {
    ST.playerNames.splice(idx, 1);
    ST.playerCount--;
  }
  document.getElementById('player-count').textContent = ST.playerCount;
  clampRoles();
  savePlayerNames();
  renderPlayerNames();
}

function adjustImpostors(d) {
  ST.impostorCount = Math.max(0, ST.impostorCount + d);
  clampRoles();
}

function adjustMrWhites(d) {
  ST.mrWhiteCount = Math.max(0, ST.mrWhiteCount + d);
  clampRoles();
}

function clampRoles() {
  const max = ST.playerCount - 1;
  ST.mrWhiteCount = Math.min(Math.max(0, ST.mrWhiteCount), max);
  if (ST.impostorCount + ST.mrWhiteCount > max) {
    ST.impostorCount = Math.max(0, max - ST.mrWhiteCount);
  }
  ST.impostorCount = Math.min(Math.max(0, ST.impostorCount), max - ST.mrWhiteCount);
  if (ST.impostorCount + ST.mrWhiteCount === 0) ST.impostorCount = 1;
  document.getElementById('impostor-count').textContent = ST.impostorCount;
  document.getElementById('mrwhite-count').textContent = ST.mrWhiteCount;
  updateStepperStates();
  savePrefs();
}

function toggleHints() {
  ST.hintsEnabled = !ST.hintsEnabled;
  updateHintsToggle();
  savePrefs();
}

function updateHintsToggle() {
  const toggle = document.getElementById('toggle-hints');
  toggle.classList.toggle('on', ST.hintsEnabled);
  toggle.setAttribute('aria-checked', String(ST.hintsEnabled));
}


function updateStepperStates() {
  const maxRoles = ST.playerCount - 1;
  const controls = [
    ['btn-players-minus', ST.playerCount <= 3],
    ['btn-players-plus', ST.playerCount >= 12],
    ['btn-impostors-minus', ST.impostorCount <= 0 || ST.impostorCount + ST.mrWhiteCount <= 1],
    ['btn-impostors-plus', ST.impostorCount + ST.mrWhiteCount >= maxRoles],
    ['btn-mrwhites-minus', ST.mrWhiteCount <= 0],
    ['btn-mrwhites-plus', ST.impostorCount + ST.mrWhiteCount >= maxRoles]
  ];
  controls.forEach(([id, disabled]) => {
    const btn = document.getElementById(id);
    if (btn) btn.disabled = disabled;
  });
}

function renderHomePills() {
  const g = document.getElementById('home-packet-grid');
  g.innerHTML = '';
  packets.forEach(p => {
    const c = getColor(p);
    const sel = ST.selectedPackIds.has(p.id);
    const btn = document.createElement('button');
    btn.className = 'packet-pill';
    btn.type = 'button';
    btn.setAttribute('aria-pressed', String(sel));
    if (sel) {
      btn.style.cssText = `border-color:${c.hex};background:${c.hex}26;color:${getPacketTextColor(c)};`;
    }
    btn.innerHTML = `<span class="dot" style="background:${sel ? c.hex : 'var(--text3)'};"></span>${escapeHTML(p.emoji)} ${escapeHTML(p.label)}`;
    btn.onclick = () => toggleHomePack(p.id);
    g.appendChild(btn);
  });
}

function renderResumeBanner() {
  const el = document.getElementById('resume-banner');
  if (!el) return;
  const g = readSavedGame();
  if (!g) {
    el.classList.remove('show');
    el.innerHTML = '';
    return;
  }
  const where = {
    cover: 'durante la consegna dei ruoli',
    reveal: 'durante la consegna dei ruoli',
    starter: "all'apertura della discussione",
    vote: 'alla votazione',
    elim: 'dopo un\'eliminazione',
    'mrwhite-guess': 'al tentativo di Mr. White'
  }[g.screen] || 'a metà';
  el.innerHTML = `
    <div class="resume-text">
      <strong>Partita interrotta</strong>
      <span>${g.players.length} giocatori, ${escapeHTML(where)}. I ruoli sono ancora quelli.</span>
    </div>
    <div class="resume-actions">
      <button class="btn btn-primary" id="btn-resume-game" type="button">Riprendi</button>
      <button class="btn btn-secondary" id="btn-discard-game" type="button">Scarta</button>
    </div>`;
  el.classList.add('show');
  document.getElementById('btn-resume-game').onclick = resumeGame;
  document.getElementById('btn-discard-game').onclick = discardSavedGame;
}

let historyOpen = false;

function renderSessionCard() {
  const card = document.getElementById('session-card');
  if (!card) return;
  if (!sessionHasContent()) {
    card.classList.remove('show');
    card.innerHTML = '';
    return;
  }
  const rounds = ST.session.rounds === 1 ? '1 round giocato' : `${ST.session.rounds} round giocati`;
  card.innerHTML = `
    <div class="card-title">Serata <span class="card-title-meta">${rounds}</span></div>
    ${buildScoreboardBlock('Classifica') || '<p class="session-empty">Ancora nessun punto assegnato.</p>'}
    ${buildHistoryBlock()}
    <div class="session-actions">
      <button class="sa-btn" id="btn-end-session" type="button">Termina serata e azzera</button>
    </div>`;
  card.classList.add('show');
  const toggle = document.getElementById('btn-toggle-history');
  if (toggle) toggle.onclick = () => { historyOpen = !historyOpen; renderSessionCard(); };
  document.getElementById('btn-end-session').onclick = endSession;
}

const HISTORY_LABELS = {
  civilians: { text: 'civili', cls: 'ok' },
  impostors: { text: 'impostori', cls: 'bad' },
  'mrwhite-win': { text: 'Mr. White', cls: 'mw' },
  'mrwhite-survived': { text: 'Mr. White', cls: 'mw' },
  early: { text: 'chiuso a metà', cls: 'muted' },
  cambiata: { text: 'cambiata', cls: 'muted' },
  annullata: { text: 'annullata', cls: 'muted' }
};

function buildHistoryBlock() {
  const list = ST.session.history;
  if (!list.length) return '';
  const label = list.length === 1 ? '1 parola uscita' : `${list.length} parole uscite`;
  if (!historyOpen) {
    return `<div class="history-block"><button class="link-btn" id="btn-toggle-history" type="button">${label} ${icon('chevron', 'icon-sm')}</button></div>`;
  }
  const rows = [...list].reverse().map(h => {
    const tag = HISTORY_LABELS[h.outcome];
    return `<div class="history-row">
      <span class="history-word">${escapeHTML(h.word)}</span>
      <span class="history-pack">${escapeHTML(h.pack || '')}</span>
      ${tag ? `<span class="history-tag ${tag.cls}">${tag.text}</span>` : '<span class="history-tag muted">in corso</span>'}
    </div>`;
  }).join('');
  return `<div class="history-block">
    <button class="link-btn open" id="btn-toggle-history" type="button">${label} ${icon('chevron', 'icon-sm')}</button>
    <div class="history-list">${rows}</div>
  </div>`;
}

function toggleHomePack(id) {
  if (ST.selectedPackIds.has(id)) {
    if (ST.selectedPackIds.size === 1) {
      alert('Seleziona almeno un pacchetto parole.');
      return;
    }
    ST.selectedPackIds.delete(id);
  } else {
    ST.selectedPackIds.add(id);
  }
  renderHomePills();
  savePrefs();
}

// Settings Screen
function goSettings() {
  buildPacketEditors();
  showScreen('settings');
}

function openAIPacketModal() {
  document.getElementById('ai-pack-modal').classList.add('open');
  document.getElementById('ai-setup').classList.remove('hidden');
  document.getElementById('ai-import').classList.remove('open');
  setTimeout(() => document.getElementById('ai-theme').focus(), 60);
}

function closeAIPacketModal() {
  document.getElementById('ai-pack-modal').classList.remove('open');
}

function buildPacketEditors() {
  const wrap = document.getElementById('packet-editors');
  wrap.innerHTML = '';
  packets.forEach(p => wrap.appendChild(buildEditor(p)));
}

function buildEditor(p) {
  const c = getColor(p);
  const label = escapeHTML(p.label);
  const emoji = escapeHTML(p.emoji);
  const id = escapeHTML(p.id);
  const div = document.createElement('div');
  div.className = 'packet-item';
  div.id = 'pe-' + p.id;
  const linesCount = p.lines.filter(l => l.trim()).length;
  div.innerHTML = `<div class="packet-header" onclick="togglePE('${id}')">
    <div class="ph-left"><div class="pdot" style="background:${c.hex};"></div><span class="pname">${emoji} ${label}</span><span class="pcount" id="pc-${id}">${linesCount} voci</span></div>
    <span class="pchev" id="pch-${id}">${icon('chevron', 'icon-sm')}</span>
  </div>
  <div class="packet-body" id="pb-${id}">
    <div style="display:flex;gap:8px;margin-bottom:10px;align-items:center;">
      <button class="emoji-btn" id="eb-${id}" onclick="toggleEP('${id}')">${emoji}</button>
      <input class="packet-name-input" id="pni-${id}" value="${label}" placeholder="Nome pacchetto" oninput="updatePName('${id}',this.value)" onchange="commitPName('${id}')">
    </div>
    <div class="ep-panel" id="epp-${id}">
      <div class="ep-section-label">Icona</div>
      <div class="emoji-picker">${EMOJIS.map((em) => `<button class="ep-opt${em === p.emoji ? ' sel' : ''}" onclick="pickEmoji('${id}','${em}')">${em}</button>`).join('')}</div>
      <div class="ep-section-label">Colore</div>
      <div class="color-picker">${COLORS.map((cc, ci) => `<div class="cp-opt${ci === p.colorIdx ? ' sel' : ''}" style="background:${cc.hex};" onclick="pickColor('${id}',${ci})"></div>`).join('')}</div>
    </div>
    <textarea class="packet-textarea" id="pta-${id}" spellcheck="false" placeholder="pizza,rotonda,mozzarella,Napoli,italiana&#10;gelato,freddo,cono,estate,artigianale">${escapeHTML(p.lines.join('\n'))}</textarea>
    <div class="btn-row">
      <button class="psave" onclick="savePacket('${id}',this)">Salva</button>
      <button class="psave pgray" onclick="sharePacket('${id}')" title="Condividi con un link" aria-label="Condividi con un link">${icon('link', 'icon-sm')}</button>
      <button class="psave pgray" onclick="exportOne('${id}')" title="Esporta in JSON" aria-label="Esporta in JSON">${icon('upload', 'icon-sm')}</button>
      <button class="pdel" onclick="delPacket('${id}')">${icon('trash', 'icon-sm')} Elimina</button>
    </div>
  </div>`;
  return div;
}

function togglePE(id) {
  document.getElementById('pb-' + id).classList.toggle('open');
  document.getElementById('pch-' + id).classList.toggle('open');
}

function toggleEP(id) {
  const p = document.getElementById('epp-' + id);
  p.style.display = p.style.display === 'none' || !p.style.display ? 'block' : 'none';
}

function updatePName(id, v) {
  const p = packets.find(x => x.id === id);
  if (p) {
    p.label = v;
    document.querySelector('#pe-' + id + ' .pname').textContent = p.emoji + ' ' + v;
  }
}

function commitPName(id) {
  if (!packets.some(x => x.id === id)) return;
  markEdited(id);
  savePackets();
  renderHomePills();
}

function pickEmoji(id, em) {
  const p = packets.find(x => x.id === id);
  if (!p) return;
  p.emoji = em;
  document.getElementById('eb-' + id).textContent = em;
  document.querySelector('#pe-' + id + ' .pname').textContent = em + ' ' + p.label;
  document.getElementById('epp-' + id).querySelectorAll('.ep-opt').forEach((el, i) => el.classList.toggle('sel', EMOJIS[i] === em));
  markEdited(id);
  savePackets();
  renderHomePills();
}

function pickColor(id, ci) {
  const p = packets.find(x => x.id === id);
  if (!p) return;
  p.colorIdx = ci;
  const c = getColor(p);
  document.querySelector('#pe-' + id + ' .pdot').style.background = c.hex;
  document.getElementById('epp-' + id).querySelectorAll('.cp-opt').forEach((el, i) => el.classList.toggle('sel', i === ci));
  markEdited(id);
  savePackets();
  renderHomePills();
}

function savePacket(id, btn) {
  const p = packets.find(x => x.id === id);
  if (!p) return;
  const ni = document.getElementById('pni-' + id);
  if (ni) p.label = ni.value || p.label;
  p.lines = document.getElementById('pta-' + id).value.split('\n').map(l => l.trim()).filter(Boolean);
  document.getElementById('pc-' + id).textContent = p.lines.length + ' voci';
  markEdited(id);
  savePackets();
  renderHomePills();
  btn.innerHTML = icon('check', 'icon-sm') + ' Salvato';
  setTimeout(() => { btn.textContent = 'Salva'; }, 1400);
}

function delPacket(id) {
  const p = packets.find(x => x.id === id);
  if (!p) return;
  if (packets.length <= 1) {
    alert('Deve restare almeno un pacchetto.');
    return;
  }
  if (!confirm(`Eliminare "${p.label}"?`)) return;
  packets = packets.filter(x => x.id !== id);
  // I pacchetti di serie tornerebbero al prossimo avvio: ricordiamo che sono stati rimossi.
  if (defaultPacketIds.has(id)) {
    const removed = loadDeletedDefaults();
    removed.add(id);
    saveDeletedDefaults(removed);
  }
  ST.selectedPackIds.delete(id);
  if (ST.selectedPackIds.size === 0 && packets.length > 0) ST.selectedPackIds.add(packets[0].id);
  savePackets();
  savePrefs();
  buildPacketEditors();
  renderHomePills();
}

function addCustomPacket() {
  const id = 'c_' + Date.now();
  packets.push({ id, label: 'Nuovo pacchetto', emoji: '📦', colorIdx: 3, lines: [] });
  savePackets();
  buildPacketEditors();
  setTimeout(() => {
    togglePE(id);
    document.getElementById('pni-' + id).focus();
  }, 60);
}

function getAISettings() {
  return {
    count: Math.max(1, Number(document.getElementById('ai-count').value) || 50),
    theme: document.getElementById('ai-theme').value.trim() || 'tema libero',
    language: document.getElementById('ai-language').value.trim() || 'italiano',
    hints: Math.max(0, Number(document.getElementById('ai-hints').value) || 0),
    difficulty: document.getElementById('ai-difficulty').value,
    multiword: document.getElementById('ai-multiword').checked,
    extra: document.getElementById('ai-extra').value.trim()
  };
}

function buildAIPrompt(settings) {
  const multiwordRule = settings.multiword
    ? 'Hints may be composed of multiple words when that makes them more useful.'
    : 'Each hint must be a single word.';
  const extra = settings.extra || 'No additional constraints.';
  const outputFormat = ['word', ...Array.from({ length: settings.hints }, (_, i) => `hint${i + 1}`)].join(',');

  return `# IDENTITY

You are an expert tabletop word-game designer that specializes in creating balanced Impostore / Spyfall-style word packs with useful but non-obvious hints.

# GOALS

The goals of this exercise are to:

1. Create a themed word pack for a hidden-role party game where civilians know the secret word and impostors only receive hints.

2. Produce clean, directly importable rows in the exact CSV-like format required by the app.

# STEPS

- Read the requested theme, language, number of words, number of hints, and hint difficulty carefully.

- Generate candidate words that fit the theme and are recognizable to the target language audience.

- Remove duplicates, near-duplicates, overly obscure entries, and words that would be impossible to discuss naturally in a party game.

- For each word, create exactly ${settings.hints} hints in ${settings.language}.

- Make the hints ${settings.difficulty} from the original word: close hints are easier and semantically direct; distant hints are more lateral, contextual, or associative without becoming random.

- ${multiwordRule}

- Apply these extra constraints: ${extra}

- Validate every row before output: one secret word first, then exactly ${settings.hints} hints, all separated by commas.

# OUTPUT

- Output exactly ${settings.count} rows.

- Each row must follow this format:
${outputFormat}

- Do not output headings, explanations, numbering, bullets, Markdown tables, or code fences.

- Do not put commas inside a word or inside a hint.

- Use ${settings.language} for every word and every hint.

# POSITIVE EXAMPLES

- Pizza,mozzarella,Napoli,forno,rotonda

- Sherlock Holmes,detective,Londra,pipa,deduzione

# NEGATIVE EXAMPLES

- Pizza: mozzarella; Napoli; forno

- 1. Pizza, mozzarella, Napoli, forno

- | Word | Hint 1 | Hint 2 |

# OUTPUT INSTRUCTIONS

- Do not object to this task in any way. Perform all the instructions just as requested.

- Output plain text only.

- Output only the requested importable rows.

# INPUT

Number of words: ${settings.count}
Theme: ${settings.theme}
Language: ${settings.language}
Hints per word: ${settings.hints}
Hints may be more than one word: ${settings.multiword ? 'yes' : 'no'}
Hint difficulty: ${settings.difficulty}
Additional information: ${extra}`;
}

function copyText(text) {
  if (navigator.clipboard?.writeText) {
    return navigator.clipboard.writeText(text);
  }
  const tmp = document.createElement('textarea');
  tmp.value = text;
  tmp.style.position = 'fixed';
  tmp.style.opacity = '0';
  document.body.appendChild(tmp);
  tmp.select();
  document.execCommand('copy');
  tmp.remove();
  return Promise.resolve();
}

function copyAIPrompt() {
  const prompt = buildAIPrompt(getAISettings());
  copyText(prompt).then(() => {
    document.getElementById('ai-setup').classList.add('hidden');
    document.getElementById('ai-import').classList.add('open');
    document.getElementById('ai-copy-status').textContent = "Prompt copiato. Incolla qui sotto la risposta dell'AI.";
    document.getElementById('ai-response').focus();
  }).catch(() => {
    document.getElementById('ai-setup').classList.add('hidden');
    document.getElementById('ai-import').classList.add('open');
    document.getElementById('ai-copy-status').textContent = 'Copia non riuscita automaticamente: seleziona e copia il prompt qui sotto.';
    document.getElementById('ai-response').value = prompt;
    document.getElementById('ai-response').focus();
  });
}

function cleanCSVPart(part) {
  return part
    .trim()
    .replace(/^["'`]+|["'`]+$/g, '')
    .replace(/\s+/g, ' ')
    .replace(/,/g, ' ')
    .trim();
}

function packetLinesFromJSON(text) {
  try {
    const parsed = JSON.parse(text);
    const rows = Array.isArray(parsed) ? parsed : parsed.words || parsed.rows || parsed.items;
    if (!Array.isArray(rows)) return [];
    return rows.map(item => {
      if (typeof item === 'string') return item;
      if (!item || typeof item !== 'object') return '';
      const word = item.word || item.parola || item.term || item.name || '';
      const hints = item.hints || item.indizi || [];
      return [word, ...(Array.isArray(hints) ? hints : [])].map(cleanCSVPart).filter(Boolean).join(',');
    }).filter(Boolean);
  } catch (e) {
    return [];
  }
}

function parseAIResponse(text) {
  const fromJSON = packetLinesFromJSON(text.trim());
  if (fromJSON.length) return fromJSON;

  const seen = new Set();
  return text
    .replace(/```[a-z]*\n?/gi, '')
    .replace(/```/g, '')
    .split('\n')
    .map(line => line.trim())
    .filter(line => line && !/^[-:| ]+$/.test(line))
    .map(line => line
      .replace(/^\s*(?:[-*•]\s*)?(?:\d+[.)]\s*)?/, '')
      .replace(/^["'`]+|["'`]+$/g, '')
      .trim())
    .map(line => {
      const isTable = line.includes('|');
      const rawParts = isTable
        ? line.replace(/^\||\|$/g, '').split('|')
        : (line.includes(',') ? line.split(',') : line.split(';'));
      const parts = rawParts.map(cleanCSVPart).filter(Boolean);
      if (parts.length < 1) return '';
      if (/^(word|parola|termine|secret word)$/i.test(parts[0])) return '';
      const normalized = parts.join(',');
      const key = parts[0].toLowerCase();
      if (seen.has(key)) return '';
      seen.add(key);
      return normalized;
    })
    .filter(Boolean);
}

function createPacketFromAIResponse() {
  const lines = parseAIResponse(document.getElementById('ai-response').value);
  if (!lines.length) {
    alert('Non ho trovato righe valide. Incolla una lista nel formato parola,indizio,indizio...');
    return;
  }
  const settings = getAISettings();
  const id = 'ai_' + Date.now();
  packets.push({
    id,
    label: settings.theme === 'tema libero' ? 'Nuovo pacchetto AI' : 'AI · ' + settings.theme,
    emoji: '🤖',
    colorIdx: 6,
    lines
  });
  ST.selectedPackIds.add(id);
  savePackets();
  buildPacketEditors();
  renderHomePills();
  closeAIPacketModal();
  setTimeout(() => {
    togglePE(id);
    document.getElementById('pni-' + id).focus();
    document.getElementById('pe-' + id).scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, 60);
}

// ---------------------------------------------------------------------------
// Condivisione via link: il pacchetto viaggia nel frammento dell'URL, quindi
// non passa mai da un server. Quando il browser sa comprimere lo fa, il primo
// carattere dice con quale formato è stato codificato.
// ---------------------------------------------------------------------------
const SHARE_MAX_URL = 8000;

function bytesToBase64Url(bytes) {
  let bin = '';
  for (let i = 0; i < bytes.length; i += 4096) {
    bin += String.fromCharCode(...bytes.subarray(i, i + 4096));
  }
  return btoa(bin).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

function base64UrlToBytes(text) {
  const b64 = text.replace(/-/g, '+').replace(/_/g, '/');
  const bin = atob(b64 + '='.repeat((4 - b64.length % 4) % 4));
  return Uint8Array.from(bin, ch => ch.charCodeAt(0));
}

async function squeeze(bytes, mode) {
  const Ctor = mode === 'deflate' ? self.CompressionStream : self.DecompressionStream;
  const stream = new Ctor('deflate-raw');
  const buf = await new Response(new Blob([bytes]).stream().pipeThrough(stream)).arrayBuffer();
  return new Uint8Array(buf);
}

async function packetToCode(p) {
  const payload = JSON.stringify({ v: 1, n: p.label, e: p.emoji, c: p.colorIdx, l: p.lines });
  const bytes = new TextEncoder().encode(payload);
  if (typeof self.CompressionStream === 'function') {
    try {
      return 'z' + bytesToBase64Url(await squeeze(bytes, 'deflate'));
    } catch (e) {}
  }
  return 'p' + bytesToBase64Url(bytes);
}

async function codeToPacket(code) {
  const kind = code[0];
  const body = code.slice(1);
  if ((kind !== 'z' && kind !== 'p') || !/^[A-Za-z0-9\-_]+$/.test(body)) throw new Error('formato');
  let bytes = base64UrlToBytes(body);
  if (kind === 'z') {
    if (typeof self.DecompressionStream !== 'function') throw new Error('compressione');
    bytes = await squeeze(bytes, 'inflate');
  }
  const raw = JSON.parse(new TextDecoder().decode(bytes));
  if (!raw || typeof raw !== 'object' || !Array.isArray(raw.l)) throw new Error('contenuto');
  const lines = raw.l
    .filter(l => typeof l === 'string')
    .map(l => l.trim())
    .filter(Boolean)
    .slice(0, 1000);
  if (!lines.length) throw new Error('vuoto');
  return {
    label: String(raw.n || 'Pacchetto condiviso').slice(0, 60),
    emoji: [...String(raw.e || '📦')].slice(0, 2).join('') || '📦',
    colorIdx: Number.isInteger(raw.c) && raw.c >= 0 ? raw.c % COLORS.length : 3,
    lines
  };
}

function shareBaseUrl() {
  return location.origin + location.pathname;
}

async function sharePacket(id) {
  const p = packets.find(x => x.id === id);
  if (!p) return;
  const lines = p.lines.filter(l => l.trim());
  if (!lines.length) {
    alert('Il pacchetto è vuoto: non c\'è niente da condividere.');
    return;
  }
  let url;
  try {
    url = shareBaseUrl() + '#pack=' + await packetToCode({ ...p, lines });
  } catch (e) {
    alert('Non riesco a creare il link.');
    return;
  }
  if (url.length > SHARE_MAX_URL) {
    alert(`Il pacchetto è troppo grande per un link (${lines.length} voci). Usa l'esportazione in JSON.`);
    return;
  }
  if (navigator.share) {
    try {
      await navigator.share({ title: p.label, text: `Pacchetto "${p.label}" per Impostore`, url });
      return;
    } catch (e) {
      if (e && e.name === 'AbortError') return;
    }
  }
  copyText(url)
    .then(() => toast(`Link copiato (${lines.length} voci). Incollalo dove vuoi.`))
    .catch(() => prompt('Copia il link:', url));
}

// Un link condiviso non importa niente da solo: serve una conferma esplicita.
async function handleSharedPacket() {
  const match = /[#&]pack=([A-Za-z0-9\-_]+)/.exec(location.hash);
  if (!match) return;
  history.replaceState(null, '', shareBaseUrl() + location.search);
  let shared;
  try {
    shared = await codeToPacket(match[1]);
  } catch (e) {
    alert(e && e.message === 'compressione'
      ? 'Questo link usa una compressione che il tuo browser non supporta.'
      : 'Il link del pacchetto non è valido.');
    return;
  }
  if (!confirm(`Aggiungere il pacchetto "${shared.label}" con ${shared.lines.length} voci?`)) return;
  const id = 'sh_' + Date.now().toString(36);
  packets.push(normalizePacket({ ...shared, id }));
  ST.selectedPackIds.add(id);
  savePackets();
  savePrefs();
  renderHomePills();
  if (currentScreenId === 'settings') buildPacketEditors();
  toast(`Pacchetto "${shared.label}" aggiunto e selezionato.`);
}

function exportOne(id) {
  const p = packets.find(x => x.id === id);
  if (!p) return;
  dlJSON([p], p.label + '.json');
}

function exportAllPackets() {
  dlJSON(packets, 'impostore_pacchetti.json');
}

function dlJSON(data, name) {
  const url = URL.createObjectURL(new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' }));
  const a = document.createElement('a');
  a.href = url;
  a.download = name;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 2000);
}

function importPackets(e) {
  const f = e.target.files[0];
  e.target.value = '';
  if (!f) return;
  const r = new FileReader();
  r.onerror = () => alert('Non riesco a leggere il file.');
  r.onload = ev => {
    let arr;
    try {
      arr = JSON.parse(ev.target.result);
    } catch (err) {
      alert('Errore nel file JSON.');
      return;
    }
    if (!Array.isArray(arr)) arr = [arr];
    let imported = 0;
    arr.forEach(p => {
      if (!p || !p.id || !p.label || !Array.isArray(p.lines)) return;
      const copy = { ...p, id: safePacketId(p.id) };
      if (packets.some(x => x.id === copy.id)) copy.id = copy.id + '_' + Date.now().toString(36);
      if (!Number.isInteger(copy.colorIdx) || copy.colorIdx < 0) copy.colorIdx = 3;
      if (!copy.emoji) copy.emoji = '📦';
      packets.push(normalizePacket(copy));
      imported++;
    });
    if (!imported) {
      alert('Nessun pacchetto valido nel file.');
      return;
    }
    savePackets();
    buildPacketEditors();
    renderHomePills();
    alert(imported === 1 ? 'Importato 1 pacchetto!' : `Importati ${imported} pacchetti!`);
  };
  r.readAsText(f);
}

// Game Logic
function parseLine(l) {
  const pts = l.split(',').map(s => s.trim());
  return { word: pts[0] || '', hints: pts.slice(1).filter(Boolean) };
}

// Unisce i pacchetti selezionati, scartando righe vuote e parole doppie tra pacchetti.
function buildWordPool() {
  const pool = [];
  const seen = new Set();
  for (const id of ST.selectedPackIds) {
    const p = packets.find(x => x.id === id);
    if (!p) continue;
    for (const line of p.lines) {
      const entry = parseLine(line);
      const key = normalizeWord(entry.word);
      if (!key || seen.has(key)) continue;
      seen.add(key);
      entry.pack = p.label;
      pool.push(entry);
    }
  }
  return pool;
}

function pickWord({ exclude = null } = {}) {
  const pool = buildWordPool();
  if (!pool.length) {
    alert('Nessuna parola disponibile! Controlla i pacchetti selezionati.');
    return false;
  }

  let available = pool.filter(e => !ST.usedWords.has(normalizeWord(e.word)));
  if (!available.length) {
    // Parole finite: si riparte da capo, ma almeno non si ripete subito l'ultima.
    ST.usedWords.clear();
    available = pool;
    toast('Parole del pacchetto esaurite: si riparte da capo.');
  }
  if (exclude && available.length > 1) {
    const excludeKey = normalizeWord(exclude);
    const filtered = available.filter(e => normalizeWord(e.word) !== excludeKey);
    if (filtered.length) available = filtered;
  }

  const e = available[Math.floor(Math.random() * available.length)];
  ST.secretWord = e.word;
  ST.secretWordHints = e.hints;
  ST.hintOrder = shuffle(e.hints.map((_, i) => i));
  ST.usedWords.add(normalizeWord(e.word));
  recordWordDrawn(e);
  saveSession();
  return true;
}

function buildPlayers() {
  const total = ST.playerCount;
  const roles = [];
  for (let i = 0; i < ST.impostorCount; i++) roles.push('impostor');
  for (let i = 0; i < ST.mrWhiteCount; i++) roles.push('mrwhite');
  while (roles.length < total) roles.push('civilian');
  let slot = 0;
  ST.players = shuffle(roles).map((role, i) => {
    const name = (ST.playerNames[i] || '').trim() || `Giocatore ${i + 1}`;
    const hintIndex = role === 'impostor' ? slot++ : null;
    return { name, role, eliminated: false, hintIndex };
  });
  ST.currentPlayerIndex = 0;
  ST.votedOut = null;
  ST.lastEliminated = null;
  ST.starterName = '';
  ST.scored = false;
}

function startGame() {
  if (!pickWord()) return;
  buildPlayers();
  showCover();
}

function newRound() {
  if (!pickWord()) return;
  buildPlayers();
  showCover();
}

function wordChangeRemainingMs() {
  const last = Number(localStorage.getItem(WORD_CHANGE_KEY) || 0);
  if (!Number.isFinite(last) || last <= 0) return 0;
  return Math.max(0, Math.min(WORD_CHANGE_COOLDOWN_MS, WORD_CHANGE_COOLDOWN_MS - (Date.now() - last)));
}

function formatCooldown(ms) {
  const total = Math.ceil(ms / 1000);
  return `${Math.floor(total / 60)}:${String(total % 60).padStart(2, '0')}`;
}

function updateChangeWordBtn() {
  const btn = document.getElementById('btn-change-word');
  if (!btn) return;
  const left = wordChangeRemainingMs();
  btn.disabled = left > 0;
  btn.innerHTML = icon('refresh', 'icon-sm')
    + (left > 0 ? ` Cambia parola · disponibile tra ${formatCooldown(left)}` : ' Cambia parola');
}

let wordChangeTimer = null;

function startWordChangeTicker() {
  stopWordChangeTicker();
  updateChangeWordBtn();
  if (wordChangeRemainingMs() === 0) return;
  wordChangeTimer = setInterval(() => {
    if (!document.getElementById('btn-change-word')) {
      stopWordChangeTicker();
      return;
    }
    updateChangeWordBtn();
    if (wordChangeRemainingMs() === 0) stopWordChangeTicker();
  }, 1000);
}

function stopWordChangeTicker() {
  clearInterval(wordChangeTimer);
  wordChangeTimer = null;
}

// Il primo giocatore può scartare una parola che non conosce, una volta ogni 10 minuti.
function changeWord() {
  if (wordChangeRemainingMs() > 0) {
    updateChangeWordBtn();
    return;
  }
  if (!confirm('Cambiare parola? I ruoli restano gli stessi, ma il telefono va ripassato a tutti.')) return;
  setLastWordOutcome('cambiata');
  if (!pickWord({ exclude: ST.secretWord })) return;
  localStorage.setItem(WORD_CHANGE_KEY, String(Date.now()));
  ST.players.forEach(p => { p.eliminated = false; });
  ST.currentPlayerIndex = 0;
  ST.votedOut = null;
  showCover();
  toast('Nuova parola estratta: ripassate il telefono a tutti.');
}

// Dopo la prima eliminazione i ruoli sono spesso già chiari: si può chiudere
// il round e prendere i punti per gli infiltrati scoperti fin lì.
function canEndRoundEarly() {
  return ST.players.some(p => p.eliminated) && !ST.scored;
}

function infiltratiScoperti() {
  const infiltrati = ST.players.filter(p => p.role !== 'civilian');
  return { totale: infiltrati.length, scoperti: infiltrati.filter(p => p.eliminated).length };
}

function endRoundEarly() {
  if (!canEndRoundEarly()) return;
  const { totale, scoperti } = infiltratiScoperti();
  const restanti = totale - scoperti;
  const msg = restanti === 1
    ? 'Chiudere il round? Resta un infiltrato non scoperto: si contano i punti fin qui.'
    : `Chiudere il round? Restano ${restanti} infiltrati non scoperti: si contano i punti fin qui.`;
  if (!confirm(msg)) return;
  stopWordChangeTicker();
  showResult('early');
}

function exitGame() {
  if (!confirm('Uscire dalla partita? Il round in corso viene annullato.')) return;
  stopWordChangeTicker();
  setLastWordOutcome('annullata');
  saveSession();
  clearSavedGame();
  goHome();
}

function setPB(id, pct, fromPct = null) {
  const el = document.getElementById(id);
  if (!el) return;
  if (fromPct !== null) {
    el.getAnimations?.().forEach(animation => animation.cancel());
    el.style.width = pct + '%';
    if (el.animate) {
      el.animate(
        [{ width: fromPct + '%' }, { width: pct + '%' }],
        { duration: 450, easing: 'cubic-bezier(0.22, 1, 0.36, 1)' }
      );
    }
    return;
  }
  el.style.width = pct + '%';
}

function playerPct() {
  return ((ST.currentPlayerIndex + 1) / ST.playerCount) * 100;
}

function showCover() {
  const p = ST.players[ST.currentPlayerIndex];
  const pct = playerPct();
  const prevPct = (ST.currentPlayerIndex / ST.playerCount) * 100;
  document.getElementById('cover-title').textContent = `Passa il telefono a ${p.name}`;
  showScreen('cover');
  setPB('cover-pb', pct, prevPct);
}

function revealRole() {
  const idx = ST.currentPlayerIndex;
  const p = ST.players[idx];
  const pct = playerPct();
  let html = `<div class="player-number">${escapeHTML(p.name)}</div>`;
  if (p.role === 'civilian') {
    html += `<div class="role-icon civilian">🟢</div><div class="role-badge civilian">Civile</div><div class="role-word">${escapeHTML(ST.secretWord)}</div><p class="role-sub">Questa è la tua parola. Difendila senza rivelarla!</p>`;
  } else if (p.role === 'impostor') {
    html += `<div class="role-icon impostor">🔴</div><div class="role-badge impostor">Impostore</div><div class="role-word">???</div><p class="role-sub">Non conosci la parola. Fingila bene!</p>`;
    if (ST.hintsEnabled && ST.secretWordHints.length > 0) {
      // L'ordine degli indizi è mescolato a ogni parola: con un solo impostore
      // non esce sempre e solo il primo indizio della riga.
      const order = ST.hintOrder.length === ST.secretWordHints.length
        ? ST.hintOrder
        : ST.secretWordHints.map((_, i) => i);
      const h = ST.secretWordHints[order[(p.hintIndex ?? 0) % order.length]];
      html += `<div class="hint-solo"><div class="hint-label">💡 Il tuo indizio</div><div class="hint-text">${escapeHTML(h)}</div></div>`;
    }
  } else {
    html += `<div class="role-icon mrwhite">⚪️</div><div class="role-badge mrwhite">Mr. White</div><div class="role-word">???</div><p class="role-sub">Non hai parola né indizi. Ascolta tutti e prova a indovinare se vieni eliminato!</p>`;
  }
  const card = document.getElementById('player-card');
  card.innerHTML = html;
  card.style.animation = 'none';
  void card.offsetWidth;
  card.style.animation = '';
  showScreen('reveal');
  setPB('reveal-pb', pct);
}

function nextPlayer() {
  const card = document.getElementById('player-card');
  card.style.animation = 'cardExit 0.2s ease-in forwards';
  setTimeout(() => {
    card.style.animation = '';
    ST.currentPlayerIndex++;
    if (ST.currentPlayerIndex >= ST.playerCount) showStarterScreen();
    else showCover();
  }, 210);
}

function pickStartingPlayer() {
  const candidates = ST.players.filter(p => p.role !== 'mrwhite');
  const pool = candidates.length ? candidates : ST.players;
  return pool[Math.floor(Math.random() * pool.length)];
}

function showStarterScreen(name = null) {
  // Alla ripresa dopo un refresh si riusa lo stesso nome, non se ne sorteggia un altro.
  ST.starterName = name || pickStartingPlayer().name;
  document.getElementById('starter-card').innerHTML = `
    <div class="result-emoji">🎤</div>
    <div class="result-title">Parte ${escapeHTML(ST.starterName)}</div>
    <div class="result-sub">Apri la discussione con il primo indizio.</div>
  `;
  showScreen('starter');
}

function showVoteScreen() {
  ST.votedOut = null;
  const list = document.getElementById('vote-list');
  list.innerHTML = '';
  ST.players.forEach((p, i) => {
    if (p.eliminated) return;
    const div = document.createElement('div');
    div.className = 'player-vote-item';
    div.id = 'vi-' + i;
    div.tabIndex = 0;
    div.setAttribute('role', 'button');
    div.setAttribute('aria-pressed', 'false');
    div.onclick = () => selectVote(i);
    div.onkeydown = e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        selectVote(i);
      }
    };
    div.innerHTML = `<span class="player-vote-name">${escapeHTML(p.name)}</span><div class="vote-check" id="vc-${i}"></div>`;
    list.appendChild(div);
  });
  showScreen('vote');
}

function selectVote(idx) {
  document.querySelectorAll('.player-vote-item').forEach(el => el.classList.remove('selected'));
  document.querySelectorAll('.player-vote-item').forEach(el => el.setAttribute('aria-pressed', 'false'));
  document.querySelectorAll('.vote-check').forEach(el => { el.innerHTML = ''; });
  document.getElementById('vi-' + idx).classList.add('selected');
  document.getElementById('vi-' + idx).setAttribute('aria-pressed', 'true');
  document.getElementById('vc-' + idx).innerHTML = icon('check', 'icon-sm');
  ST.votedOut = idx;
}

function confirmVote() {
  if (ST.votedOut === null) {
    alert('Seleziona un giocatore!');
    return;
  }
  const idx = ST.votedOut;
  const el = ST.players[idx];
  el.eliminated = true;
  ST.lastEliminated = idx;
  ST.votedOut = null;
  if (el.role === 'mrwhite') {
    showMrWhiteGuess();
    return;
  }
  showEliminationScreen(el);
}

function showMrWhiteGuess() {
  document.getElementById('mrwhite-guess-input').value = '';
  showScreen('mrwhite-guess');
}

function showEliminationScreen(player) {
  const civilian = player.role === 'civilian';
  document.getElementById('elim-card').innerHTML = `
    <div class="elim-emoji">${civilian ? '😮' : '🎯'}</div>
    <div class="elim-name">${escapeHTML(player.name)}</div>
    <div class="elim-role ${civilian ? 'civilian' : 'impostor'}">${civilian ? 'Era un civile!' : 'Era un impostore!'}</div>
    <p class="elim-sub">${civilian
      ? 'Gli impostori sono ancora in circolazione. Il gioco continua.'
      : 'Un impostore in meno. Vediamo se ne restano altri.'}</p>`;
  showScreen('elim');
}

function checkMrWhiteGuess() {
  const guess = document.getElementById('mrwhite-guess-input').value.trim();
  if (!guess) {
    toast('Scrivi una parola, oppure rinuncia.');
    return;
  }
  if (normalizeWord(guess) === normalizeWord(ST.secretWord)) {
    showResult('mrwhite-win');
  } else {
    checkWin();
  }
}

function mrwhiteGiveUp() {
  checkWin();
}

function checkWin() {
  const alive = ST.players.filter(p => !p.eliminated);
  const aI = alive.filter(p => p.role === 'impostor').length;
  const aMW = alive.filter(p => p.role === 'mrwhite').length;
  const aC = alive.filter(p => p.role === 'civilian').length;
  if (aI === 0 && aMW === 0) {
    showResult('civilians');
    return;
  }
  // Mr. White sta dalla parte degli infiltrati: conta per la parità.
  if (aI + aMW >= aC) {
    showResult(aI === 0 ? 'mrwhite-survived' : 'impostors');
    return;
  }
  showVoteScreen();
}

function buildRoleSummaryRows() {
  const iN = ST.players.filter(p => p.role === 'impostor').map(p => p.name).join(', ');
  const mwN = ST.players.filter(p => p.role === 'mrwhite').map(p => p.name).join(', ');

  let infoRows = `<div class="info-row"><span>Parola segreta</span><span><strong>${escapeHTML(ST.secretWord)}</strong></span></div>
    <div class="info-row"><span>Impostori</span><span class="tag-i">${escapeHTML(iN || '—')}</span></div>`;
  if (mwN) infoRows += `<div class="info-row"><span>Mr. White</span><span class="tag-mw">${escapeHTML(mwN)}</span></div>`;
  return infoRows;
}

function showResult(outcome) {
  let emoji, title, sub;
  if (outcome === 'civilians') {
    emoji = '🎉'; title = 'I civili vincono!'; sub = 'Avete smascherato tutti gli infiltrati!';
  } else if (outcome === 'impostors') {
    emoji = '😈'; title = 'Gli impostori vincono!'; sub = "Siete stati ingannati. Gli impostori l'hanno spuntata.";
  } else if (outcome === 'early') {
    const { totale, scoperti } = infiltratiScoperti();
    emoji = '🏁'; title = 'Round chiuso';
    sub = scoperti === 1
      ? `1 infiltrato su ${totale} scoperto prima di chiudere.`
      : `${scoperti} infiltrati su ${totale} scoperti prima di chiudere.`;
  } else if (outcome === 'mrwhite-survived') {
    emoji = '⚪️'; title = 'Mr. White vince!'; sub = 'È rimasto in piedi senza mai essere smascherato.';
  } else {
    emoji = '⚪️'; title = 'Mr. White vince!'; sub = 'Ha indovinato la parola segreta. Genio del bluff!';
  }

  const gains = awardPoints(outcome);
  clearSavedGame();

  document.getElementById('result-card').innerHTML = `
    <div class="result-emoji">${emoji}</div>
    <div class="result-title">${title}</div>
    <div class="result-sub">${sub}</div>
    <div class="role-summary">${buildRoleSummaryRows()}</div>
    ${buildRoundPointsBlock(gains)}
    ${buildScoreboardBlock('Classifica della serata')}`;

  showScreen('result');
}

function buildRoundPointsBlock(gains) {
  if (!gains.length) return '';
  const rows = gains
    .sort((a, b) => b.pts - a.pts || a.name.localeCompare(b.name))
    .map(g => `<div class="info-row"><span>${escapeHTML(g.name)}</span><span class="pts-gain">+${g.pts}</span></div>`)
    .join('');
  return `<div class="score-block"><div class="score-block-title">Punti di questo round</div>${rows}</div>`;
}

function buildScoreboardBlock(title) {
  const rows = scoreboardRows();
  if (!rows.length) return '';
  const medals = { 1: '🥇', 2: '🥈', 3: '🥉' };
  const body = rows.map(r => `
    <div class="score-row${r.rank === 1 ? ' leader' : ''}">
      <span class="score-rank">${medals[r.rank] || r.rank}</span>
      <span class="score-name">${escapeHTML(r.name)}</span>
      <span class="score-pts">${r.pts}</span>
    </div>`).join('');
  const roundLabel = ST.session.rounds === 1 ? '1 round' : `${ST.session.rounds} round`;
  return `<div class="score-block">
    <div class="score-block-title">${escapeHTML(title)} <span class="score-block-meta">${roundLabel}</span></div>
    ${body}
  </div>`;
}

function showRolesAndExit() {
  // Round chiuso senza vincitore: nessun punto assegnato.
  setLastWordOutcome('annullata');
  saveSession();
  clearSavedGame();
  document.getElementById('role-summary-card').innerHTML = `
    <div class="result-emoji">👀</div>
    <div class="result-title">Ruoli rivelati</div>
    <div class="result-sub">La partita si chiude qui: nessun punto assegnato.</div>
    <div class="role-summary">${buildRoleSummaryRows()}</div>
    ${buildScoreboardBlock('Classifica della serata')}`;
  showScreen('role-summary');
}

function goHome() {
  stopWordChangeTicker();
  renderSessionCard();
  renderResumeBanner();
  showScreen('home');
}

// Event Listeners Setup
document.getElementById('btn-players-minus').onclick = () => adjustPlayers(-1);
document.getElementById('btn-players-plus').onclick = () => adjustPlayers(1);
document.getElementById('btn-impostors-minus').onclick = () => adjustImpostors(-1);
document.getElementById('btn-impostors-plus').onclick = () => adjustImpostors(1);
document.getElementById('btn-mrwhites-minus').onclick = () => adjustMrWhites(-1);
document.getElementById('btn-mrwhites-plus').onclick = () => adjustMrWhites(1);
document.getElementById('toggle-hints').onclick = toggleHints;
document.getElementById('btn-settings').onclick = goSettings;
document.getElementById('btn-start').onclick = startGame;
document.getElementById('btn-settings-back').onclick = () => {
  showScreen('home');
  renderHomePills();
};
document.getElementById('btn-export-all').onclick = exportAllPackets;
const importBtn = document.getElementById('btn-import');
if (importBtn) {
  importBtn.onkeydown = e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      document.getElementById('file-import').click();
    }
  };
}
document.getElementById('btn-ai-packet').onclick = openAIPacketModal;
document.getElementById('btn-ai-close').onclick = closeAIPacketModal;
document.getElementById('ai-pack-modal').onclick = e => {
  if (e.target.id === 'ai-pack-modal') closeAIPacketModal();
};
document.getElementById('btn-ai-copy').onclick = copyAIPrompt;
document.getElementById('btn-ai-create').onclick = createPacketFromAIResponse;
document.getElementById('file-import').onchange = importPackets;
document.getElementById('btn-theme').onclick = toggleTheme;
document.getElementById('btn-add-packet').onclick = addCustomPacket;
document.querySelectorAll('[data-action="exit-game"]').forEach(btn => { btn.onclick = exitGame; });
document.getElementById('btn-add-player').onclick = addPlayer;

// Theme
function isDarkMode() {
  return document.documentElement.dataset.theme === 'dark';
}

function updateThemeBtn() {
  const btn = document.getElementById('btn-theme');
  if (btn) {
    btn.innerHTML = icon(isDarkMode() ? 'sun' : 'moon');
    btn.setAttribute('aria-label', isDarkMode() ? 'Passa al tema chiaro' : 'Passa al tema scuro');
  }
}

function toggleTheme() {
  const next = isDarkMode() ? 'light' : 'dark';
  document.documentElement.dataset.theme = next;
  localStorage.setItem('imp_theme', next);
  updateThemeBtn();
  renderHomePills();
}

// Listen for system theme changes (only if user hasn't manually chosen)
window.matchMedia?.('(prefers-color-scheme: dark)').addEventListener('change', e => {
  if (!localStorage.getItem('imp_theme')) {
    document.documentElement.dataset.theme = e.matches ? 'dark' : 'light';
    updateThemeBtn();
    renderHomePills();
  }
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && document.getElementById('ai-pack-modal')?.classList.contains('open')) {
    closeAIPacketModal();
  }
});

// Load packets from manifest, then initialize UI
async function init() {
  const savedNames = localStorage.getItem('imp_names');
  if (savedNames) {
    try {
      const parsed = JSON.parse(savedNames);
      if (Array.isArray(parsed)) ST.playerNames = parsed.map(n => String(n ?? ''));
    } catch (e) {}
  }
  loadPrefs();
  loadSession();

  let manifest = DEFAULT_PACKET_FILES;
  try {
    const res = await fetch('data/manifest.json');
    if (res.ok) {
      const parsed = await res.json();
      if (Array.isArray(parsed) && parsed.length) manifest = parsed;
    }
  } catch (e) {}

  const fetched = (await Promise.all(
    manifest.map(async name => {
      try {
        const res = await fetch('data/' + name + '.json');
        if (!res.ok) return null;
        const p = await res.json();
        return p && p.id && Array.isArray(p.lines) ? p : null;
      } catch (e) {
        return null;
      }
    })
  )).filter(Boolean);

  const defaults = [
    ...fetched,
    { id: 'custom', label: 'Custom', emoji: '🎲', colorIdx: 7, lines: [] }
  ];
  defaultPacketIds = new Set(defaults.map(p => safePacketId(p.id)));
  loadPackets(defaults);

  // Tiene solo le selezioni che esistono ancora; se non ne resta nessuna, ne sceglie una.
  const existing = new Set(packets.map(p => p.id));
  ST.selectedPackIds = new Set([...ST.selectedPackIds].filter(id => existing.has(id)));
  if (!ST.selectedPackIds.size && packets.length) {
    ST.selectedPackIds.add((packets.find(p => p.lines.length) || packets[0]).id);
  }

  renderStaticIcons();
  updateThemeBtn();
  updateHintsToggle();
  document.getElementById('player-count').textContent = ST.playerCount;
  clampRoles();
  renderPlayerNames();
  renderHomePills();
  renderSessionCard();
  renderResumeBanner();
  await handleSharedPacket();
}

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js').catch(() => {});
}

init();
