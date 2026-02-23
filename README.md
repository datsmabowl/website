# bdr.space — personal website

Static HTML/CSS/JS portfolio site. Hosted on GitHub Pages with custom domain `bdr.space`.

---

## Deploy to GitHub Pages

### 1 — Create the repository

1. Go to [github.com/datsmabowl](https://github.com/datsmabowl)
2. Create a new **public** repository named **`bdr.space`** (or any name you like)
3. In the repo's **Settings → Pages**:
   - Source: **Deploy from a branch**
   - Branch: `main` / root (`/`)
   - Save

### 2 — Push this folder

```bash
cd /Users/benny/Documents/Projects/Website
git init
git add .
git commit -m "initial commit"
git remote add origin https://github.com/datsmabowl/bdr.space.git
git push -u origin main
```

### 3 — Point bdr.space to GitHub Pages

In your domain registrar (wherever bdr.space is registered), add these DNS records:

| Type  | Host | Value                   |
|-------|------|-------------------------|
| A     | @    | 185.199.108.153         |
| A     | @    | 185.199.109.153         |
| A     | @    | 185.199.110.153         |
| A     | @    | 185.199.111.153         |
| CNAME | www  | datsmabowl.github.io    |

DNS propagation takes up to 24 h. GitHub will auto-provision an SSL certificate once the domain verifies.

In GitHub repo **Settings → Pages**, set the **Custom domain** field to `bdr.space` and enable **Enforce HTTPS**.

---

## Add / update projects

All project data lives in **`script.js`**, in the `PROJECTS` array at the top of the file.

Each project object:
```js
{
  id:      "my-project",             // unique slug
  title:   "MY PROJECT",            // displayed below thumb + in tags
  media:   "video/myproject.mp4",   // short looping clip (recommended)
  poster:  "video/myproject.jpg",   // first-frame still for mobile/slow conn
  url:     "https://vimeo.com/...", // full video / Vimeo link on click
  tabs:    ["graphics"],            // discipline tabs (can be multiple)
  filters: ["commercial"],          // art | commercial | other (can be multiple)
  wide:    false,                   // true = 2-column wide card
}
```

Use a static image instead: set `media: "images/myfile.jpg"` (no `poster` needed).

Available tab values: `graphics` · `architecture` · `creative-technology` · `illustration` · `interactive` · `generative-ai`

---

## File structure

```
/
├── index.html        main page
├── style.css         all styles
├── script.js         project data + filtering logic
├── CNAME             custom domain (bdr.space)
├── video/            looping thumbnail clips + poster images
│   └── README.md     ffmpeg export instructions + naming table
└── images/           static image thumbnails (when not using video)
    └── README.md     notes
```
