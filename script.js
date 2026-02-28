/* ─────────────────────────────────────────────────────────
   PROJECT DATA
   ─────────────────────────────────────────────────────────
   tabs:    one or more of:
            graphics | architecture |
            illustration | interactive | generative-ai
   filters: one or more of: art | commercial | other
   wide:    true = spans 2 grid columns

   Media — two options, use one:

   OPTION A – local looping clip (recommended for grid thumbnails)
     media:     "video/preview/myproject.mp4"   ← short 5-10 s muted loop, ~2-5 MB
     poster:    "video/myproject.jpg"   ← first-frame still (optional but good for
                                           mobile / slow connections)

   OPTION B – static image only
     media:     "images/myproject.jpg"

   Leave media as "" to show a placeholder box.

   url:     Vimeo / external link opened on click
   ─────────────────────────────────────────────────────────*/
const PROJECTS = [
  {
    id:      "fictions",
    title:   "Fictions",
    media:   "video/preview/fictions.mp4",
    poster:  "images/fictions.jpg",
    url:     "",
    tabs:    ["interactive", "development"],
    filters: ["art"],
    wide:    false,
  },
  {
    id:      "wonder-studios-app",
    title:   "Wonder Studios App",
    media:   "video/preview/wonder-studios-app.mp4",
    poster:  "images/wonder-studios-app.jpg",
    url:     "",
    tabs:    ["development", "interactive"],
    filters: ["commercial"],
    wide:    false,
  },
  {
    id:      "procedural-map",
    title:   "Procedural Map Generation",
    media:   "video/preview/procedural.mp4",
    poster:  "video/procedural.jpg",
    url:     "https://bdr.space/procedural/",
    tabs:    ["interactive", "development"],
    filters: ["art"],
    wide:    true,
  },
  {
    id:      "chivas-regal",
    title:   "Chivas Regal",
    media:   "video/preview/chivas.mp4",
    poster:  "video/chivas.jpg",
    url:     "https://bdr.space/chivas-regal/",
    tabs:    ["generative-ai, development"],
    filters: ["commercial"],
    wide:    false,
  },
  {
    id:      "cloning-christie",
    title:   "Cloning Christie",
    media:   "video/preview/christie.mp4",
    poster:  "video/christie.jpg",
    url:     "https://bdr.space/christie/",
    tabs:    ["interactive", "generative-ai"],
    filters: ["art"],
    wide:    false,
  },
  {
    id:      "image2particles",
    title:   "Image2Particles 3D",
    media:   "video/preview/image2particles.mp4",
    poster:  "video/image2particles.jpg",
    url:     "https://bdr.space/image2particles3d/",
    tabs:    ["interactive", "generative-ai", "development"],
    filters: ["art"],
    wide:    false,
  },
  {
    id:      "kallida",
    title:   "Kallida",
    media:   "video/preview/kallida.mp4",
    poster:  "video/kallida.jpg",
    url:     "https://bdr.space/kallida2/",
    tabs:    ["generative-ai, graphics"],
    filters: ["commercial"],
    wide:    false,
  },
  {
    id:      "teki-latex",
    title:   "Teki Latex",
    media:   "images/teki.jpg",  // static image
    url:     "https://bdr.space/teki-latex/",
    tabs:    ["graphics"],
    filters: ["commercial"],
    wide:    false,
  },
  {
    id:      "single-cell",
    title:   "Single Cell",
    media:   "video/preview/single-cell.mp4",
    poster:  "video/single-cell.jpg",
    url:     "https://bdr.space/single-cell/",
    tabs:    ["interactive", "development"],
    filters: ["art"],
    wide:    false,
  },
  {
    id:      "itoa-exit",
    title:   "Itoa — Exit Records",
    media:   "images/itoa.jpg",
    url:     "https://bdr.space/itoa-exit/",
    tabs:    ["graphics"],
    filters: ["commercial"],
    wide:    false,
  },
  {
    id:      "scart-issue",
    title:   "SCART ISSUE",
    media:   "images/scartissue.webp",
    url:     "https://bdr.space/scartissue/",
    tabs:    ["interactive", "development"  ],
    filters: ["art"],
    wide:    false,
  },
  {
    id:      "lloyds",
    title:   "Lloyds",
    media:   "video/preview/lloyds.mp4",
    poster:  "video/lloyds.jpg",
    url:     "",
    tabs:    ["interactive", "development"],
    filters: ["commercial"],
    wide:    false,
  },
  {
    id:      "pixel-artworks-lenovo",
    title:   "Pixel Artworks — Lenovo",
    media:   "video/preview/lenovo.mp4",
    poster:  "video/lenovo.jpg",
    url:     "",
    tabs:    ["interactive", "development"],
    filters: ["commercial"],
    wide:    false,
  },
  {
    id:      "pixel-artworks-genesis",
    title:   "Pixel Artworks — Genesis",
    media:   "video/preview/genesis.mp4",
    poster:  "video/genesis.jpg",
    url:     "",
    tabs:    ["interactive", "development"],
    filters: ["commercial"],
    wide:    false,
  },
  {
    id:      "typething",
    title:   "Typething",
    media:   "video/preview/typething.mp4",
    poster:  "",
    url:     "",
    tabs:    ["graphics"],
    filters: ["commercial"],
    wide:    false,
  },
  {
    id:      "ceding-space",
    title:   "On Ceding Space to Non-Human Systems",
    media:   "video/preview/ceding-space.mp4",
    poster:  "",
    url:     "",
    tabs:    ["generative-ai", "interactive", "development"],
    filters: ["art"],
    wide:    false,
  },
  {
    id:      "exquisite-human",
    title:   "Exquisite Human",
    media:   "video/preview/exquisite-human.mp4",
    poster:  "",
    url:     "",
    tabs:    ["interactive", "development"],
    filters: ["art"],
    wide:    false,
  },

  {
    id:      "movie-finder",
    title:   "Movie Finder App",
    media:   "video/preview/movie-finder.mp4",
    poster:  "",
    url:     "",
    tabs:    ["development"],
    filters: ["art"],
    wide:    false,
  },
  {
    id:      "mosquito-search",
    title:   "Mosquito Search",
    media:   "video/preview/mosquito-search.mp4",
    poster:  "",
    url:     "https://bdr.space/mosquito-implementation/",
    tabs:    ["development", "interactive"],
    filters: ["art"],
    wide:    false,
  },
  {
    id:      "domestic-data-ui",
    title:   "Domestic Data Soundscapes — UI",
    media:   "video/preview/domestic-data-ui.mp4",
    poster:  "",
    url:     "",
    tabs:    ["interactive", "generative-ai", "development"],
    filters: ["art"],
    wide:    false,
  },
  {
    id:      "holy-waters",
    title:   "Holy Waters",
    media:   "video/preview/hw.mp4",
    poster:  "images/holy-waters.jpg",
    url:     "https://bdr.space/holy-waters/",
    tabs:    ["graphics"],
    filters: ["commercial"],
    wide:    false,
  },
  // ── Extra projects — uncomment + fill in url to publish ────────────
  {
    id:      "misty-tropics",
    title:   "Misty Tropics",
    media:   "video/preview/misty-tropics.mp4",
    poster:  "images/misty-tropics.jpg",
    url:     "https://bdr.space/misty-tropics/",
    tabs:    ["interactive", "development"],
    filters: ["art"],
    wide:    false,
  },

  {
    id:      "threads",
    title:   "Threads",
    media:   "images/threads.png",
    url:     "https://bdr.space/threads/",
    tabs:    ["graphics"],
    filters: ["commercial"],
    wide:    false,
  },
  {
    id:      "antithetical-libraries",
    title:   "Antithetical Libraries",
    slides:  ["images/antithetical-libraries-1.jpg", "images/antithetical-libraries-2.jpg", "images/antithetical-libraries-3.jpg", "images/antithetical-libraries-4.jpg"],
    url:     "https://bdr.space/antithetical-libraries/",
    tabs:    ["architecture"],
    filters: ["art"],
    wide:    false,
  },
  {
    id:      "material-frequencies",
    title:   "Material Frequencies",
    slides:  ["images/material-frequencies-1.jpg", "images/material-frequencies-2.jpg", "images/material-frequencies-3.jpg", "images/material-frequencies-4.jpg", "images/material-frequencies-5.jpg", "images/material-frequencies-6.jpg"],
    url:     "https://bdr.space/material-frequencies/",
    tabs:    ["architecture", "graphics", "development"],
    filters: ["art"],
    wide:    false,
  },
  {
    id:      "sound-data-collages",
    title:   "Sound Data Collages",
    slides:  ["images/sound-data-collages-1.jpg", "images/sound-data-collages-2.jpg", "images/sound-data-collages-3.jpg", "images/sound-data-collages-4.jpg", "images/sound-data-collages-5.jpg", "images/sound-data-collages-6.jpg"],
    url:     "https://bdr.space/sound-data-collages/",
    tabs:    ["architecture", "graphics", "development"],
    filters: ["art"],
    wide:    false,
  },
  {
    id:      "posters",
    title:   "Posters",
    media:   "images/posters.jpg",
    url:     "https://bdr.space/posters-1/",
    tabs:    ["graphics"],
    filters: ["commercial"],
    wide:    false,
  },
  {
    id:      "avntotny",
    title:   "Avn'tot'ny",
    media:   "images/avntotny.jpg",
    url:     "https://bdr.space/avntotny/",
    tabs:    ["graphics"],
    filters: ["art"],
    wide:    false,
  },
  {
    id:      "toha",
    title:   "ToHa",
    slides:  ["images/toha.jpg", "images/toha2.jpg", "images/toha3.jpg", "images/toha5.jpg", "images/toha9.jpg", "images/toha-dekton.avif", "images/toha-designboom.jpg", "images/toha-dezeen.jpg"],
    url:     "https://bdr.space/toha-1/",
    tabs:    ["architecture"],
    filters: ["commercial"],
    wide:    false,
  },
  {
    id:      "keysound",
    title:   "KEYSOUND X LOOSE LIPS",
    media:   "video/preview/keysound.mp4",
    poster:  "video/keysound.jpg",
    url:     "",
    tabs:    ["graphics"],
    filters: ["commercial"],
    wide:    false,
  },
  {
    id:      "eco-sim",
    title:   "ECO SIMULATION",
    media:   "video/preview/eco-sim.mp4",
    poster:  "video/eco-sim.jpg",
    url:     "",
    tabs:    ["interactive, development"],
    filters: ["art"],
    wide:    false,
  },
  {
    id:      "emergent",
    title:   "EMERGENT ECOSYSTEM",
    media:   "video/preview/emergent.mp4",
    poster:  "video/emergent.jpg",
    url:     "",
    tabs:    ["interactive, development"],
    filters: ["art"],
    wide:    false,
  },
  {
    id:      "fka-twigs",
    title:   "FKA Twigs (Bootleg)",
    media:   "video/preview/fka-twigs.mp4",
    poster:  "video/fka-twigs.jpg",
    url:     "",
    tabs:    ["generative-ai"],
    filters: ["art"],
    wide:    false,
  },
  {
    id:      "shubzin",
    title:   "SHUBZIN — GROW TOTTENHAM",
    media:   "video/preview/shubzin.mp4",
    poster:  "video/shubzin.jpg",
    url:     "",
    tabs:    ["interactive, generative-ai"],
    filters: ["commercial"],
    wide:    false,
  },
  {
    id:      "domestic-data",
    title:   "DOMESTIC DATA SOUNDSCAPES",
    media:   "video/preview/domestic-data.mp4",
    poster:  "video/domestic-data.jpg",
    url:     "",
    tabs:    ["interactive", "development"],
    filters: ["art"],
    wide:    false,
  },
  {
    id:      "art-illustration",
    title:   "Art & Illustration",
    slides:  ["images/art-illustration-1.jpg", "images/art-illustration-2.jpg", "images/art-illustration-3.jpg", "images/art-illustration-4.jpg", "images/art-illustration-6.jpg", "images/art-illustration-7.jpg", "images/art-illustration-9.jpg", "images/art-illustration-10.jpg", "images/art-illustration-11.jpg", "images/art-illustration-15.jpg"],
    url:     "https://bdr.space/art-illustration/",
    tabs:    ["graphics"],
    filters: ["art"],
    wide:    false,
  },
  {
    id:      "home-microphone-grid",
    title:   "Home Microphone Grid",
    slides:  ["images/home-microphone-grid-1.jpg", "images/home-microphone-grid-2.jpg", "images/home-microphone-grid-3.jpg", "images/home-microphone-grid-4.jpg", "images/home-microphone-grid-9.jpg"],
    url:     "https://bdr.space/home-microphone-grid/",
    tabs:    ["interactive", "development", "architecture"],
    filters: ["art"],
    wide:    false,
  },
  {
    id:      "urbanism-political",
    title:   "Urbanism is Political",
    slides:  ["images/urbanism-political-1.jpg"],
    url:     "https://bdr.space/everything-in-architecture-urbanism-is-political/",
    tabs:    ["architecture"],
    filters: ["art"],
    wide:    false,
  },
];

/* ─────────────────────────────────────────────────────────
   TEXT LABEL CELLS — no longer used (kept for reference)
   ─────────────────────────────────────────────────────────*/

/* ─────────────────────────────────────────────────────────
   PARAMETRIC GRID CONFIG
   ─────────────────────────────────────────────────────────*/
const PGRID = {
  rows: 4,
  cols: 4,
  waveAmp: 95,
  waveFreq: 56,
  speed: 16,
  gap: 16,
  fillet: 6,
  mode: 'wave',
  borderWidth: 1,
  borderColor: '#555',
};

/* ─────────────────────────────────────────────────────────
   STATE
   ─────────────────────────────────────────────────────────*/
let activeTab = "all";
let leftCells  = [];
let rightCells = [];
let leftCols   = PGRID.cols;
let rightCols  = PGRID.cols;
let pgridTime  = 0;
let pgridLastTs = 0;

// Cell expansion on click — per-cell boost map
let selectedCell = null;  // { half: 'left'|'right', row: number, col: number }
const cellBoosts = {};    // key → current animated boost  (key = 'half:row:col')
const SELECT_TARGET = 4.0;
const SELECT_LERP   = 0.10;

function boostKey(half, r, c) { return half + ':' + r + ':' + c; }

function getCellBoost(half, r, c) {
  return cellBoosts[boostKey(half, r, c)] || 1;
}

function updateBoosts() {
  // For every tracked cell, lerp toward target
  const keys = Object.keys(cellBoosts);
  for (const k of keys) {
    const [half, rs, cs] = k.split(':');
    const r = +rs, c = +cs;
    const isSel = selectedCell && selectedCell.half === half && selectedCell.row === r && selectedCell.col === c;
    const target = isSel ? SELECT_TARGET : 1;
    cellBoosts[k] += (target - cellBoosts[k]) * SELECT_LERP;
    // Clean up entries that have fully returned to 1
    if (!isSel && Math.abs(cellBoosts[k] - 1) < 0.002) {
      delete cellBoosts[k];
    }
  }
  // Ensure newly selected cell exists in map
  if (selectedCell) {
    const k = boostKey(selectedCell.half, selectedCell.row, selectedCell.col);
    if (!(k in cellBoosts)) cellBoosts[k] = 1;
  }
}

/* ─────────────────────────────────────────────────────────
   INIT
   ─────────────────────────────────────────────────────────*/
function init() {
  bindTabs();       // also calls applyHash() which calls buildCells()
  bindControls();
  requestAnimationFrame(pgridAnimate);
  window.addEventListener('resize', pgridApplySize);

  // Click anywhere outside a cell to deselect
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.pgrid-cell')) {
      selectedCell = null;
    }
  });
}

/* ─────────────────────────────────────────────────────────
   PROJECT FILTERING
   ─────────────────────────────────────────────────────────*/
function getVisibleProjects() {
  return PROJECTS.filter(p => {
    if (!p.media && !p.slides) return false;
    if (activeTab === "all") return true;
    return p.tabs && p.tabs.includes(activeTab);
  });
}

function isVideo(src) {
  return src && /\.(mp4|webm|mov)$/i.test(src);
}

/* ─────────────────────────────────────────────────────────
   CELL MANAGEMENT
   ─────────────────────────────────────────────────────────*/
function ensureCells(parent, pool, count, projects, effectiveCols = PGRID.cols) {
  // Create / remove cells to match count
  while (pool.length < count) {
    const cell = document.createElement('a');
    cell.className = 'pgrid-cell';
    cell.style.borderColor = PGRID.borderColor;
    cell.style.borderWidth = PGRID.borderWidth + 'px';
    cell.target = '_blank';
    cell.rel = 'noopener';

    // Media element — will be set in assign step
    const vid = document.createElement('video');
    vid.muted = true;
    vid.loop = true;
    vid.playsInline = true;
    vid.autoplay = true;
    vid.preload = 'auto';
    vid.setAttribute('aria-hidden', 'true');
    cell.appendChild(vid);

    // Title overlay
    const title = document.createElement('span');
    title.className = 'cell-title';
    cell.appendChild(title);

    parent.appendChild(cell);
    pool.push(cell);
  }
  while (pool.length > count) {
    const cell = pool.pop();
    if (cell._slideshowTimeout) { clearTimeout(cell._slideshowTimeout); cell._slideshowTimeout = null; }
    if (cell._slideshowTimer) { clearInterval(cell._slideshowTimer); }
    cell.remove();
  }

  // Determine which half this parent belongs to
  const half = (parent.id === 'pgridLeft') ? 'left' : 'right';

  // Assign projects to cells (cycle if needed)
  for (let i = 0; i < count; i++) {
    const p = projects[i];
    const cell = pool[i];
    const src = p.media;

    // Store grid position for click-to-expand
    cell._pgridHalf = half;
    cell._pgridRow  = Math.floor(i / effectiveCols);
    cell._pgridCol  = i % effectiveCols;

    // Click handler: toggle expansion (prevent link navigation)
    if (!cell._pgridClickBound) {
      cell.addEventListener('click', function(e) {
        e.preventDefault();
        const h = this._pgridHalf;
        const r = this._pgridRow;
        const c = this._pgridCol;
        if (selectedCell && selectedCell.half === h && selectedCell.row === r && selectedCell.col === c) {
          selectedCell = null; // deselect
        } else {
          selectedCell = { half: h, row: r, col: c };
        }
      });
      cell._pgridClickBound = true;
    }

    cell.href = p.url || '#';
    cell.setAttribute('aria-label', p.title || '');

    // Title overlay
    const titleEl = cell.querySelector('.cell-title');
    if (titleEl) titleEl.textContent = p.title || '';

    // Clear any existing slideshow before reassigning
    if (cell._slideshowTimeout) { clearTimeout(cell._slideshowTimeout); cell._slideshowTimeout = null; }
    if (cell._slideshowTimer) { clearInterval(cell._slideshowTimer); delete cell._slideshowTimer; }

    // Swap media: slideshow / video / image
    if (p.slides && p.slides.length > 0) {
      cell.querySelectorAll('video, img, .pgrid-slides').forEach(el => el.remove());

      const container = document.createElement('div');
      container.className = 'pgrid-slides';
      const slideEls = p.slides.map((s, idx) => {
        const img = document.createElement('img');
        img.src = s;
        img.alt = p.title || '';
        img.setAttribute('aria-hidden', 'true');
        img.className = 'pgrid-slide' + (idx === 0 ? ' active' : '');
        img.loading = idx === 0 ? 'eager' : 'lazy';
        container.appendChild(img);
        return img;
      });
      cell.insertBefore(container, cell.querySelector('.cell-title'));

      if (slideEls.length > 1) {
        let idx = 0;
        const interval = 3000;
        const offset = Math.random() * interval;
        cell._slideshowTimeout = setTimeout(() => {
          cell._slideshowTimeout = null;
          cell._slideshowTimer = setInterval(() => {
            slideEls[idx].classList.remove('active');
            idx = (idx + 1) % slideEls.length;
            slideEls[idx].classList.add('active');
          }, interval);
        }, offset);
      }
    } else if (isVideo(src)) {
      cell.querySelector('.pgrid-slides')?.remove();
      let vid = cell.querySelector('video');
      let img = cell.querySelector('img');
      if (img) { img.remove(); }
      if (!vid) {
        vid = document.createElement('video');
        vid.muted = true; vid.loop = true; vid.playsInline = true;
        vid.autoplay = true; vid.preload = 'auto';
        vid.setAttribute('aria-hidden', 'true');
        cell.insertBefore(vid, cell.querySelector('.cell-title'));
      }
      if (vid.getAttribute('data-src') !== src) {
        vid.setAttribute('data-src', src);
        vid.src = src;
        if (p.poster) vid.poster = p.poster;
        vid.play().catch(() => {});
      }
    } else {
      cell.querySelector('.pgrid-slides')?.remove();
      let vid = cell.querySelector('video');
      let img = cell.querySelector('img');
      if (vid) { vid.remove(); }
      if (!img) {
        img = document.createElement('img');
        img.loading = 'lazy';
        img.setAttribute('aria-hidden', 'true');
        cell.insertBefore(img, cell.querySelector('.cell-title'));
      }
      if (img.getAttribute('data-src') !== src) {
        img.setAttribute('data-src', src);
        img.src = src;
        img.alt = p.title || '';
      }
    }
  }
}

function buildCells() {
  const projects = getVisibleProjects();
  const noResults = document.getElementById('no-results');

  if (projects.length === 0) {
    noResults.hidden = false;
    ensureCells(document.getElementById('pgridLeft'), leftCells, 0, []);
    ensureCells(document.getElementById('pgridRight'), rightCells, 0, []);
    return;
  }
  noResults.hidden = true;

  const total = PGRID.rows * PGRID.cols;
  const mid = Math.ceil(projects.length / 2);
  const leftProjects  = projects.slice(0, mid);
  const rightProjects = projects.slice(mid);

  const leftN  = Math.min(total, leftProjects.length);
  const rightN = Math.min(total, rightProjects.length);

  // Choose column count so there are always ≥ 2 rows (min 2x2 grid)
  leftCols  = leftN  ? Math.min(PGRID.cols, Math.ceil(leftN  / 2)) : PGRID.cols;
  rightCols = rightN ? Math.min(PGRID.cols, Math.ceil(rightN / 2)) : PGRID.cols;

  ensureCells(document.getElementById('pgridLeft'),  leftCells,  leftN,  leftProjects,  leftCols);
  ensureCells(document.getElementById('pgridRight'), rightCells, rightN, rightProjects, rightCols);
}

/* ─────────────────────────────────────────────────────────
   WEIGHT FUNCTIONS
   ─────────────────────────────────────────────────────────*/
function cellWeight(row, col, rows, cols, t, mode, waveAmp, waveFreq) {
  const a = waveAmp / 100;
  const freq = waveFreq / 100 * 0.8;
  const cx = (cols - 1) / 2;
  const cy = (rows - 1) / 2;
  let v = 0;
  switch (mode) {
    case 'wave':
      v = Math.sin(col * freq * 1.2 + t + row * 0.4); break;
    case 'ripple': {
      const dist = Math.sqrt((row - cy) ** 2 + (col - cx) ** 2);
      v = Math.sin(dist * freq * 1.5 - t * 2); break;
    }
    case 'twist':
      v = Math.sin(col * freq + Math.sin(t) * (col + row * 0.5) * 0.2); break;
    case 'breathe':
      v = Math.sin(t * 0.8) * Math.sin(col * freq * 0.6 + row * 0.3); break;
    case 'cascade':
      v = Math.sin(col * freq + t * 1.5 + row * 0.5); break;
  }
  return 1 + a * v * 0.7;
}

function rowWeight(row, rows, t, mode, waveAmp, waveFreq) {
  const a = waveAmp / 100;
  const freq = waveFreq / 100 * 0.8;
  const cy = (rows - 1) / 2;
  let v = 0;
  switch (mode) {
    case 'wave':
      v = Math.cos(row * freq * 1.2 + t * 0.7); break;
    case 'ripple':
      v = Math.sin(Math.abs(row - cy) * freq * 1.5 - t * 2); break;
    case 'twist':
      v = Math.cos(row * freq + Math.sin(t * 0.9) * row * 0.2); break;
    case 'breathe':
      v = Math.sin(t * 0.8) * Math.cos(row * freq * 0.6); break;
    case 'cascade':
      v = Math.sin(row * freq * 0.5 + t); break;
  }
  return 1 + a * v * 0.7;
}

/* ─────────────────────────────────────────────────────────
   LAYOUT SIZING
   ─────────────────────────────────────────────────────────*/
function pgridGetLayout() {
  const wrapEl = document.querySelector('.pgrid-wrap');
  // Subtract horizontal padding so grid sits inside the padded wrap
  const style = getComputedStyle(wrapEl);
  const padL = parseFloat(style.paddingLeft) || 0;
  const padR = parseFloat(style.paddingRight) || 0;
  const availW = wrapEl.clientWidth - padL - padR;
  let availH = wrapEl.clientHeight;
  const gap = PGRID.gap;

  // Fallback: if wrap has no height yet, use viewport minus header/footer
  if (availH < 50) {
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');
    const hH = header ? header.offsetHeight : 0;
    const fH = footer ? footer.offsetHeight : 0;
    availH = window.innerHeight - hH - fH;
  }

  const W = availW;
  const H = availH;

  const halfW = (W - gap) / 2;
  return { W, H, halfW, gap };
}

function pgridApplySize() {
  const container = document.getElementById('pgridContainer');
  const gridLeft  = document.getElementById('pgridLeft');
  const gridRight = document.getElementById('pgridRight');
  if (!container) return;

  const { W, H, halfW, gap } = pgridGetLayout();
  const rightEmpty = rightCells.length === 0;

  container.style.width  = W + 'px';
  container.style.height = H + 'px';

  if (rightEmpty) {
    gridLeft.style.left   = '0px';
    gridLeft.style.top    = '0px';
    gridLeft.style.width  = W + 'px';
    gridLeft.style.height = H + 'px';
    gridRight.style.width  = '0px';
    gridRight.style.height = '0px';
  } else {
    gridLeft.style.left   = '0px';
    gridLeft.style.top    = '0px';
    gridLeft.style.width  = halfW + 'px';
    gridLeft.style.height = H + 'px';
    gridRight.style.left   = (halfW + gap) + 'px';
    gridRight.style.top    = '0px';
    gridRight.style.width  = halfW + 'px';
    gridRight.style.height = H + 'px';
  }
}

/* ─────────────────────────────────────────────────────────
   LAYOUT — HORIZONTAL (vertical lines break between rows)
   ─────────────────────────────────────────────────────────*/
function layoutH(cells, ox, oy, gridW, gridH, nRows, nCols, gap, fillet, t, mode, waveAmp, waveFreq, half) {
  const availW = gridW - (nCols - 1) * gap;
  const availH = gridH - (nRows - 1) * gap;

  // Row weights — blend ALL rows toward fixed values when any row has a boost
  // Find the global blend factor (max across all rows)
  let rowBlend = 0;
  const rowBoosts = [];
  for (let r = 0; r < nRows; r++) {
    let rowB = 1;
    for (let c = 0; c < nCols; c++) {
      const b = getCellBoost(half, r, c);
      if (b > rowB) rowB = b;
    }
    rowBoosts[r] = rowB;
    const bl = (rowB - 1) / (SELECT_TARGET - 1);
    if (bl > rowBlend) rowBlend = bl;
  }
  const rWeights = []; let rWSum = 0;
  for (let r = 0; r < nRows; r++) {
    const base = rowWeight(r, nRows, t, mode, waveAmp, waveFreq);
    // Blend toward fixed target: boost value for boosted row, 1.0 for others
    const target = rowBoosts[r] > 1 ? rowBoosts[r] : 1;
    rWeights[r] = base * (1 - rowBlend) + target * rowBlend;
    rWSum += rWeights[r];
  }
  const rH = [], rY = [0];
  for (let r = 0; r < nRows; r++) {
    rH[r] = availH * rWeights[r] / rWSum;
    if (r > 0) rY[r] = rY[r-1] + rH[r-1] + gap;
  }

  for (let r = 0; r < nRows; r++) {
    // Count cells that actually exist in this row; skip empty rows
    let rowCount = 0;
    for (let c = 0; c < nCols; c++) {
      if (cells[r * nCols + c]) rowCount++;
    }
    if (rowCount === 0) continue;
    // Partial rows get their full width distributed among only existing cells
    const rowAvailW = gridW - (rowCount - 1) * gap;

    // Find max blend in this row to freeze all siblings too
    let maxBlend = 0;
    const cellBoostVals = [];
    for (let c = 0; c < nCols; c++) {
      const b = getCellBoost(half, r, c);
      cellBoostVals[c] = b;
      const bl = (b - 1) / (SELECT_TARGET - 1);
      if (bl > maxBlend) maxBlend = bl;
    }
    const ws = []; let wSum = 0;
    for (let c = 0; c < nCols; c++) {
      if (!cells[r * nCols + c]) { ws[c] = 0; continue; }
      const base = cellWeight(r, c, nRows, nCols, t, mode, waveAmp, waveFreq);
      // Blend ALL cells: boosted one toward its boost, siblings toward 1.0
      const target = cellBoostVals[c] > 1 ? cellBoostVals[c] : 1;
      ws[c] = base * (1 - maxBlend) + target * maxBlend;
      wSum += ws[c];
    }
    let cx = 0;
    for (let c = 0; c < nCols; c++) {
      const idx = r * nCols + c;
      const cell = cells[idx];
      if (!cell) continue;
      const w = rowAvailW * ws[c] / wSum;
      const f = Math.min(fillet, Math.min(w, rH[r]) / 2);
      cell.style.left   = (ox + cx) + 'px';
      cell.style.top    = (oy + rY[r]) + 'px';
      cell.style.width  = w + 'px';
      cell.style.height = rH[r] + 'px';
      cell.style.borderRadius = f + 'px';
      cx += w + gap;
    }
  }
}

/* ─────────────────────────────────────────────────────────
   LAYOUT — VERTICAL (horizontal lines break between cols)
   ─────────────────────────────────────────────────────────*/
function layoutV(cells, ox, oy, gridW, gridH, nRows, nCols, gap, fillet, t, mode, waveAmp, waveFreq, half) {
  const availW = gridW - (nCols - 1) * gap;
  const availH = gridH - (nRows - 1) * gap;

  // Column weights — blend ALL columns toward fixed values when any col has a boost
  let colBlend = 0;
  const colBoosts = [];
  for (let c = 0; c < nCols; c++) {
    let colB = 1;
    for (let r = 0; r < nRows; r++) {
      const b = getCellBoost(half, r, c);
      if (b > colB) colB = b;
    }
    colBoosts[c] = colB;
    const bl = (colB - 1) / (SELECT_TARGET - 1);
    if (bl > colBlend) colBlend = bl;
  }
  const cWeights = []; let cWSum = 0;
  for (let c = 0; c < nCols; c++) {
    const base = rowWeight(c, nCols, t, mode, waveAmp, waveFreq);
    const target = colBoosts[c] > 1 ? colBoosts[c] : 1;
    cWeights[c] = base * (1 - colBlend) + target * colBlend;
    cWSum += cWeights[c];
  }
  const cW = [], cX = [0];
  for (let c = 0; c < nCols; c++) {
    cW[c] = availW * cWeights[c] / cWSum;
    if (c > 0) cX[c] = cX[c-1] + cW[c-1] + gap;
  }

  for (let c = 0; c < nCols; c++) {
    // Count cells that actually exist in this column; skip empty columns
    let colCount = 0;
    for (let r = 0; r < nRows; r++) {
      if (cells[r * nCols + c]) colCount++;
    }
    if (colCount === 0) continue;
    // Partial columns get their full height distributed among only existing cells
    const colAvailH = gridH - (colCount - 1) * gap;

    // Find max blend in this column to freeze all siblings too
    let maxBlend = 0;
    const cellBoostVals = [];
    for (let r = 0; r < nRows; r++) {
      const b = getCellBoost(half, r, c);
      cellBoostVals[r] = b;
      const bl = (b - 1) / (SELECT_TARGET - 1);
      if (bl > maxBlend) maxBlend = bl;
    }
    const ws = []; let wSum = 0;
    for (let r = 0; r < nRows; r++) {
      if (!cells[r * nCols + c]) { ws[r] = 0; continue; }
      const base = cellWeight(c, r, nCols, nRows, t, mode, waveAmp, waveFreq);
      const target = cellBoostVals[r] > 1 ? cellBoostVals[r] : 1;
      ws[r] = base * (1 - maxBlend) + target * maxBlend;
      wSum += ws[r];
    }
    let cy = 0;
    for (let r = 0; r < nRows; r++) {
      const idx = r * nCols + c;
      const cell = cells[idx];
      if (!cell) continue;
      const h = colAvailH * ws[r] / wSum;
      const f = Math.min(fillet, Math.min(cW[c], h) / 2);
      cell.style.left   = (ox + cX[c]) + 'px';
      cell.style.top    = (oy + cy) + 'px';
      cell.style.width  = cW[c] + 'px';
      cell.style.height = h + 'px';
      cell.style.borderRadius = f + 'px';
      cy += h + gap;
    }
  }
}

/* ─────────────────────────────────────────────────────────
   ANIMATION LOOP
   ─────────────────────────────────────────────────────────*/
function pgridAnimate(ts) {
  const dt = pgridLastTs ? (ts - pgridLastTs) / 1000 : 0.016;
  pgridLastTs = ts;
  pgridTime += dt * PGRID.speed / 35;

  // Update per-cell boosts (all easing independently)
  updateBoosts();

  pgridApplySize();

  const { W, halfW, H } = pgridGetLayout();
  const { rows, cols, gap, fillet, waveAmp, waveFreq, mode } = PGRID;
  const rightEmpty = rightCells.length === 0;

  // Rows are derived from effective column count; always at least 2
  const leftRows  = leftCells.length  ? Math.max(2, Math.min(rows, Math.ceil(leftCells.length  / leftCols)))  : rows;
  const rightRows = rightCells.length ? Math.max(2, Math.min(rows, Math.ceil(rightCells.length / rightCols))) : rows;

  layoutH(leftCells,  0, 0, rightEmpty ? W : halfW, H, leftRows,  leftCols,  gap, fillet, pgridTime, mode, waveAmp, waveFreq, 'left');
  layoutV(rightCells, 0, 0, halfW,                  H, rightRows, rightCols, gap, fillet, pgridTime, mode, waveAmp, waveFreq, 'right');

  requestAnimationFrame(pgridAnimate);
}

/* ─────────────────────────────────────────────────────────
   TAB BINDING
   ─────────────────────────────────────────────────────────*/
function setActiveTab(tab) {
  activeTab = tab;
  document.querySelectorAll(".tab").forEach(b => {
    const match = b.dataset.tab === tab;
    b.classList.toggle("active", match);
    b.setAttribute("aria-selected", match ? "true" : "false");
  });
  buildCells();
}

function bindTabs() {
  document.querySelectorAll(".tab").forEach(btn => {
    btn.addEventListener("click", () => {
      const tab = btn.dataset.tab;
      history.replaceState(null, '', tab === 'all' ? location.pathname : '#' + tab);
      setActiveTab(tab);
    });
  });

  function applyHash() {
    const hash = location.hash.slice(1);
    const valid = [...document.querySelectorAll(".tab")].map(b => b.dataset.tab);
    setActiveTab(valid.includes(hash) ? hash : 'all');
  }
  window.addEventListener('hashchange', applyHash);
  applyHash();
}

/* ─────────────────────────────────────────────────────────
   DEV CONTROLS BINDING
   ─────────────────────────────────────────────────────────*/
function bindControls() {
  const sliders = {
    ctrlRows:      'rows',
    ctrlCols:      'cols',
    ctrlWaveAmp:   'waveAmp',
    ctrlWaveFreq:  'waveFreq',
    ctrlSpeed:     'speed',
    ctrlGap:       'gap',
    ctrlFillet:    'fillet',
    ctrlBorderWidth: 'borderWidth',
  };

  Object.entries(sliders).forEach(([elId, key]) => {
    const el = document.getElementById(elId);
    const span = document.getElementById(elId + 'Val');
    if (!el) return;
    el.addEventListener('input', () => {
      PGRID[key] = +el.value;
      if (span) span.textContent = el.value;
      if (key === 'rows' || key === 'cols') buildCells();
      if (key === 'borderWidth') {
        document.querySelectorAll('.pgrid-cell').forEach(c => c.style.borderWidth = el.value + 'px');
      }
    });
  });

  const modeEl = document.getElementById('ctrlMode');
  if (modeEl) modeEl.addEventListener('change', () => { PGRID.mode = modeEl.value; });

  const bgEl = document.getElementById('ctrlBg');
  if (bgEl) bgEl.addEventListener('input', () => {
    document.querySelector('main').style.background = bgEl.value;
  });

  const borderColorEl = document.getElementById('ctrlBorderColor');
  if (borderColorEl) borderColorEl.addEventListener('input', () => {
    PGRID.borderColor = borderColorEl.value;
    document.querySelectorAll('.pgrid-cell').forEach(c => c.style.borderColor = borderColorEl.value);
  });

  const monoEl = document.getElementById('ctrlMono');
  if (monoEl) monoEl.addEventListener('change', () => {
    const container = document.getElementById('pgridContainer');
    container.classList.toggle('pgrid-no-mono', !monoEl.checked);
  });

  // X button to close controls
  const closeBtn = document.getElementById('pgridControlsClose');
  if (closeBtn) closeBtn.addEventListener('click', () => {
    const panel = document.getElementById('pgridControls');
    if (panel) panel.style.display = 'none';
  });

  // Animation on/off toggle
  let savedWaveAmp = PGRID.waveAmp;
  const animToggle = document.getElementById('animToggle');
  if (animToggle) {
    animToggle.addEventListener('click', () => {
      const isOff = PGRID.waveAmp === 0;
      if (isOff) {
        PGRID.waveAmp = savedWaveAmp || 95;
        animToggle.classList.remove('off');
        animToggle.textContent = 'On';
      } else {
        savedWaveAmp = PGRID.waveAmp;
        PGRID.waveAmp = 0;
        animToggle.classList.add('off');
        animToggle.textContent = 'Off';
      }
    });
  }
}

/* ─────────────────────────────────────────────────────────
   RUN
   ─────────────────────────────────────────────────────────*/
document.addEventListener("DOMContentLoaded", init);

// Toggle controls with 'c' key
document.addEventListener('keydown', (e) => {
  if (e.key === 'c' && !e.metaKey && !e.ctrlKey && !e.altKey && e.target.tagName !== 'INPUT' && e.target.tagName !== 'SELECT') {
    const panel = document.getElementById('pgridControls');
    if (panel) panel.style.display = panel.style.display === 'none' ? '' : 'none';
  }
});
