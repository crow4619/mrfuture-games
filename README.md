# MR_FUTURE GAMES

Minimal landing page for [mrfuture.games](https://mrfuture.games), hosted on Cloudflare Pages.

## Cloudflare Pages settings

- Production branch: `main`
- Build command: none
- Build output directory: `public`
- Root directory: repository root

The project is intentionally dependency-free. Cloudflare Pages serves the files in `public` directly.

## Local preview

From the repository root:

```powershell
python -m http.server 4173 --directory public
```

Then open `http://localhost:4173`.
