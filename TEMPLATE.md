# Prevayl Website Template — Edit Guide

This is a **fully editable website template** based on the Prevayl redesign mockup
(gold pin + deep navy + glassmorphism).

You do **not** need to dig through 600 lines of HTML for most changes.

---

## File map

```
prevayl-site/
├── index.html          ← Shell only (section placeholders)
├── css/
│   ├── theme.css       ← ★ ALL colors, fonts, radii  (edit brand here)
│   └── site.css        ← Layout & components
├── js/
│   ├── content.js      ← ★ ALL copy, links, pricing, routes (edit content here)
│   └── render.js       ← Fills the page from content.js (rarely edit)
├── pages/              ← Inner pages (static HTML, same theme)
└── TEMPLATE.md         ← This guide
```

---

## 1. Change brand colors (`css/theme.css`)

```css
--brand-gold:        #C9A84C;   /* primary gold */
--brand-gold-dark:   #A67C32;
--bg-page:           #0a0f1a;   /* page background */
--text-body:         #c8d8e8;
```

Change these variables → every button, card, and glow updates site-wide.

---

## 2. Change copy & data (`js/content.js`)

### Headline
```js
hero: {
  headline: ["THE AI-NATIVE", "OPERATING SYSTEM", "FOR AUTO TRANSPORT"],
  gradientLine: 1,  // which line gets the gold gradient (0-based)
  sub: "Your new subtitle here…",
}
```

### Live routes on the hero map
```js
liveLoads: [
  { lane: "Detroit, MI → Atlanta, GA", status: "IN TRANSIT", tone: "gold" },
  { lane: "Chicago, IL → Miami, FL", status: "DISPATCHED", tone: "blue" },
],
liveStats: { activeLoads: 47, aiMatch: "94%" },
```

### Pricing plans
```js
pricing: {
  plans: [
    { name: "Solo", range: "5–25 cars/month", features: [...], featured: false },
    { name: "Pro",  range: "25–200 cars/month", features: [...], featured: true, badge: "MOST POPULAR" },
  ]
}
```

### Navigation / Footer legal
```js
nav: [ { label: "Platform", href: "pages/platform.html", children: [...] } ],
brand: { mc: "MC#01813480", dot: "DOT#4562182", location: "Howell, MI", year: "2026" }
```

---

## 3. Run locally

```bash
git clone https://github.com/Kushdaking/prevayl-site.git
cd prevayl-site
npx serve .
```

---

## 4. Deploy (Cloudflare Pages)

1. Connect this repo
2. Build command: empty
3. Output directory: `/`

---

## Quick edit checklist

| Want to change…        | Edit file        |
|------------------------|------------------|
| Gold / navy colors     | `css/theme.css`  |
| Hero headline / CTAs   | `js/content.js`  |
| Live load board routes | `js/content.js`  |
| Feature cards          | `js/content.js`  |
| Pricing tiers          | `js/content.js`  |
| Nav links              | `js/content.js`  |
| Footer MC/DOT          | `js/content.js`  |

**Most day-to-day edits = only `content.js` and `theme.css`.**
