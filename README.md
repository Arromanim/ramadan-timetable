# Store Stock

A single-file inventory tracker for a medical store: add medicines with
quantity and expiry date, and see what's expiring soon or already expired
at a glance.

## Run it

No build step, no server — it's one HTML file.

- **Locally:** double-click `index.html`, or open it in any browser.
- **On GitHub Pages** (so you have a stable link on your phone):
  1. Create a new GitHub repo and upload `index.html` to it.
  2. Go to **Settings → Pages**, set **Source** to your main branch, root folder.
  3. GitHub gives you a URL like `https://yourname.github.io/repo-name/` —
     open that on any device.

## How data is stored

This version saves everything in the browser's `localStorage`, under the key
`store_stock_items_v1`. That means:

- Data stays **on that one device, in that one browser** — it does not sync
  between your phone and a laptop, and clearing browser data/site data will
  erase it.
- There's no login and no server, so nobody else can see it — but there's
  also no backup unless you make one.

**Back up or move your data** — open the browser console on the page (or
add a temporary button) and run:

```js
// Export: copy this JSON somewhere safe
copy(localStorage.getItem('store_stock_items_v1'));

// Import on another device/browser: paste the JSON in place of PASTE_HERE
localStorage.setItem('store_stock_items_v1', `PASTE_HERE`);
location.reload();
```

## What's different from the version I built in chat

The chat version had one extra feature this one doesn't: **uploading a
photo of a supplier invoice to auto-fill items.** That relied on Claude
reading the image directly inside Claude's own hosting — there's no
built-in equivalent for a plain static site, since running that here would
mean embedding an API key in code anyone can view, which isn't safe to do
in a public repo.

If you want that feature on your own hosted version, the real way to do it
is with a small backend (e.g. a serverless function) that holds the API key
and forwards image requests to Claude's API — happy to help you build that
if useful, or you can keep using the chat version's link for invoice
uploads and this one for daily use.

## Customizing

Everything — colors, fonts, the 30-day expiry threshold, form fields — is
in the single `index.html` file: colors are CSS variables near the top,
the 30-day cutoff is the `days <= 30` checks in the script.
