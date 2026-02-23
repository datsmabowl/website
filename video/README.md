# video

Drop all looping grid-thumbnail clips here.

## Naming convention

| Project               | Loop clip              | Poster (first frame)     |
|-----------------------|------------------------|--------------------------|
| Procedural Map Gen    | procedural.mp4         | procedural.jpg           |
| Chivas Regal          | chivas.mp4             | chivas.jpg               |
| Cloning Christie      | christie.mp4           | christie.jpg             |
| Image2Particles 3D    | image2particles.mp4    | image2particles.jpg      |
| Kallida               | kallida.mp4            | kallida.jpg              |
| Teki Latex            | teki.mp4               | teki.jpg                 |
| Single Cell           | single-cell.mp4        | single-cell.jpg          |
| ITOA — Exit Records   | itoa.mp4               | itoa.jpg                 |
| Scart Issue           | scartissue.mp4         | scartissue.jpg           |

## How to export a loop clip from a Vimeo source

```bash
# Download from Vimeo (requires yt-dlp)
yt-dlp -f "bestvideo[height<=720]" https://vimeo.com/XXXXXXX -o source.mp4

# Trim to a 6-second loop and compress for web (~2-4 MB)
ffmpeg -i source.mp4 \
  -t 6 \
  -vf "scale=1080:-2,fps=24" \
  -c:v libx264 -crf 26 -preset slow \
  -an \
  -movflags +faststart \
  myproject.mp4

# Extract first frame as poster image
ffmpeg -i myproject.mp4 -frames:v 1 -q:v 2 myproject.jpg
```

## Tips

- **No audio needed.** Remove the audio track (`-an`) to save space.
- **Target < 5 MB per clip** — the grid loads all visible clips on page load.
- **Square or close to it** (1:1 or 4:3) works best in the grid. Wide clips go in `wide: true` cells.
- **`poster` image** is shown on mobile / before the video loads — always generate one.
- GitHub's hard file limit is **100 MB per file**. Compressed 6-second 720p clips are comfortably under this.
