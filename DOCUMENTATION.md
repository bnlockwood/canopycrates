# Canopy Crates — Website Documentation

**Version:** 2.0
**Date:** 11 March 2026
**Status:** Complete — Ready for deployment
**Snapshot:** `v2-green-hero-gradient` (git tag)

---

## 1. Project Overview

**Canopy Crates** is a sub-brand of **Canopy Collective**, delivering curated hampers of local artisan products to AirBnb and boutique hotel guests in the Daintree and Port Douglas region of Far North Queensland, Australia.

This website serves as the brand's primary online presence and order-taking platform, showcasing four curated crate products, featured local producers, and an order enquiry form.

**Brand architecture:** Endorsed sub-brand of Canopy Collective (per Brand Bible v2).

---

## 2. File Structure

```
Canopy Crate/
├── index.html                      (616 lines)  — Main single-page website
├── css/
│   └── styles.css                  (1162 lines) — All styling and responsive design
├── js/
│   └── main.js                     (147 lines)  — Interactivity and form handling
├── images/
│   ├── logo-canopy-crates.svg      — Dark logo (navy palm + gold ring + wordmark)
│   ├── logo-canopy-crates-light.svg— Light logo (white palm + gold ring + wordmark)
│   ├── breakfast-hamper.svg        — Morning Crate illustration
│   ├── sundowner-hamper.svg        — Sundowner Crate illustration
│   ├── regional-crate.svg          — Regional Goodies illustration
│   ├── bridal-hamper.svg           — Celebration Crate illustration
│   ├── about-daintree-creek.jpg    — About section photo (rainforest creek)
│   ├── cta-daintree-river.jpg      — CTA banner photo (aerial Daintree River)
│   └── hero-daintree-coast.jpg     — Reserved (Cape Tribulation coast, not currently used)
├── .claude/
│   ├── launch.json                 — Dev server configuration (port 3000)
│   └── settings.local.json         — Local settings
└── DOCUMENTATION.md                — This file
```

**Total:** 1,925 lines of code across 3 source files.

---

## 3. Technology Stack

| Component      | Technology                                        |
|----------------|---------------------------------------------------|
| Markup         | HTML5 (semantic elements)                         |
| Styling        | CSS3 (custom properties, grid, flexbox, gradients)|
| Interactivity  | Vanilla JavaScript (no frameworks/dependencies)   |
| Display Fonts  | Google Fonts — Playfair Display (headings)        |
| UI Fonts       | Google Fonts — Montserrat (labels, buttons, nav)  |
| Body Font      | Georgia (system serif, no external load needed)   |
| Icons          | Native emoji (no icon library dependency)          |
| Illustrations  | Custom SVG illustrations for crate cards           |
| Logos          | Custom SVG (palm tree + globe + gold ring motif)   |
| Photography    | Local JPEGs (Daintree region by Michelle Lockwood) |

**Zero dependencies.** No build tools, package managers, or frameworks required.

---

## 4. Design System

### 4.1 Color Palette (Brand Bible v2 — Rainforest-First)

**Master palette** (inherited from Canopy Collective):

| Token             | Hex       | CSS Variable      | Usage                              |
|-------------------|-----------|--------------------|-------------------------------------|
| Deep Navy         | `#1C2B4A` | `--deep-navy`      | Secondary color, accents            |
| Canopy Gold       | `#C4963A` | `--canopy-gold`    | CTAs, badges, gold accents          |
| Warm Ivory        | `#F5F0E6` | `--warm-ivory`     | Alt backgrounds                     |
| Globe Slate       | `#7A8899` | `--globe-slate`    | Light text, secondary text          |
| Charcoal          | `#2A2A2A` | `--charcoal`       | Body text                           |

**Canopy Crates extended palette:**

| Token             | Hex       | CSS Variable      | Usage                              |
|-------------------|-----------|--------------------|-------------------------------------|
| Rainforest Green  | `#3A7A56` | `--rainforest`     | **Primary color** — buttons, nav, headings |
| Rainforest Dark   | `#2C5E42` | `--color-primary-dark` | Footer, dark green areas        |
| Teal              | `#2D7E7E` | `--teal`           | Accent 2, focus states              |
| Harvest Amber     | `#D4822A` | `--harvest-amber`  | Button hover states, warm accents   |
| Sand Cream        | `#F7EED8` | `--sand-cream`     | Page background                     |

**Hero gradient** (deep forest to teal):
```
linear-gradient(135deg,
  rgba(15,43,31,0.92) 0%,
  rgba(27,67,50,0.85) 40%,
  rgba(42,157,143,0.7) 100%)
```

### 4.2 Typography

| Element         | Font              | Weight | Size (desktop)              |
|-----------------|-------------------|--------|-----------------------------|
| Hero Title      | Playfair Display   | 700    | clamp(2.5rem, 6vw, 4.5rem) |
| Section Headings| Playfair Display   | 700    | clamp(2rem, 4vw, 3rem)     |
| Body            | Georgia            | 400    | 1rem (16px)                |
| Section Labels  | Montserrat         | 600    | 0.8rem, uppercase, tracked |
| Nav Links       | Montserrat         | 500    | 0.9rem                     |
| Buttons         | Montserrat         | 600    | 0.95rem                    |

### 4.3 Spacing & Layout

- Container max-width: 1200px
- Section padding: 100px vertical
- Card border-radius: 10px (small), 16px (large)
- Buttons: 50px border-radius (pill shape)
- Shadow system: sm/md/lg with green-tinted rgba

---

## 5. Website Sections

### 5.1 Navigation (sticky)
- **Logo:** Custom SVG — palm tree + globe + gold ring + "Canopy Crates" wordmark
- **Light variant** on transparent hero, stays light on green scrolled bg
- Links: About, Our Crates, Local Producers, How It Works
- CTA button: "ORDER NOW" — **gold pill** (`#C4963A` bg, dark green text, 50px radius)
- Transparent on hero → `rgba(27,67,50,0.95)` green on scroll
- Mobile: hamburger menu with slide-in drawer

### 5.2 Hero Section
- **Background:** CSS gradient (deep green → teal) with SVG cross-hatch pattern overlay at 3% opacity. **No photo** — pure gradient + pattern.
- `::before` pseudo-element adds radial gradient depth (teal at 20% 50%, gold at 80% 20%, green at 60% 80%)
- Tagline: *"A sense of place"* (italic, gold)
- Headline: **"Experience the Soul of the Daintree"**
- Subtitle: "Curated hampers of local treasures, delivered to your door. Handpicked regional delicacies from artisan producers in Far North Queensland."
- Two CTAs: "Explore Our Crates" (solid green) and "How It Works" (outline)
- Scroll indicator: "Scroll to discover" with animated line
- Max-width: 800px centered

### 5.3 About Section
- **Photo:** `about-daintree-creek.jpg` (rainforest creek with mossy boulders)
- "100% Local Producers" badge overlay
- Brand story mentioning Michelle by name
- Three feature highlights: Locally Sourced · Curated with Care · Delivered to Your Door

### 5.4 Crates Section (Product Catalog)
Four crate products with **SVG illustrations** (not gradient placeholders):

| Crate                 | Image SVG               | Lead Time | Badge    |
|-----------------------|--------------------------|-----------|----------|
| The Morning Crate     | `breakfast-hamper.svg`   | 12 hours  | BREAKFAST|
| The Sundowner Crate   | `sundowner-hamper.svg`   | 12 hours  | TWILIGHT |
| Regional Goodies      | `regional-crate.svg`     | 48 hours  | SEASONAL (featured, full-width) |
| The Celebration Crate | `bridal-hamper.svg`      | 12 hours  | SPECIAL  |

Each card: white bg, green top border (gold for featured), illustration header, item list with emoji icons, audience description, and "Order This Crate" CTA.

**Product contents** — see index.html for full item lists per crate.

### 5.5 Vendors Section ("Meet the Locals")
Seven vendor cards with external product images:

| Vendor                  | Type                          | Website                      |
|-------------------------|-------------------------------|------------------------------|
| Daintree Estates        | Tree-to-Bar Chocolate         | daintreeestates.com          |
| Daintree Tea            | Australian Black Tea          | daintreetea.com.au           |
| Kefir Queen             | Fermented Foods               | kefirqueen.com.au            |
| Epicurean Port Douglas  | French Provincial Fine Foods  | epicureanportdouglas.com.au  |
| Shannonvale Winery      | Tropical Fruit Wines          | shannonvalewine.com.au       |
| Fenglehorn Sauces       | Award-Winning Chilli Sauces   | fenglehorn.com.au            |
| Daintree Wellness       | Natural Skincare              | daintreewellness.com.au      |

**Note:** Some vendor images are loaded from external URLs (see Section 9).

### 5.6 How It Works
Three-step process: Choose Your Crate → Place Your Order → We Deliver

### 5.7 CTA Banner
- **Photo background:** `cta-daintree-river.jpg` (aerial Daintree River) with green gradient overlay
- Headline: "Ready to Taste the Daintree?"
- Feature badges: Local Delivery · 12hr Lead Time · Beautifully Packaged
- Single CTA: "Order Your Crate"

### 5.8 Contact / Order Form
- Left column: email, phone, delivery area, lead times
- Right column: form (name, email, phone, accommodation, crate select, delivery date, special requests)
- Submit shows confirmation with customer name and selected crate
- Form dropdown values: `morning`, `sundowner`, `regional`, `celebration`

### 5.9 Footer
- Light SVG logo + "A Canopy Collective venture" credit (gold accent)
- Navigation links (Explore, Crates, Contact)
- Copyright: © 2026 Canopy Crates
- Indigenous acknowledgment (Kuku Yalanji people)
- Background: `--color-primary-dark` (#2C5E42)

---

## 6. Responsive Breakpoints

| Breakpoint | Behavior                                                |
|------------|---------------------------------------------------------|
| > 1024px   | Full desktop layout (2-column grids, side-by-side)      |
| 768–1024px | Crates stack to single column, contact stacks           |
| < 768px    | Mobile: hamburger nav, single column, stacked steps     |
| < 480px    | Compact padding, stacked CTA buttons                    |

---

## 7. JavaScript Features (`main.js` — 147 lines)

- **Sticky navbar**: Adds `scrolled` class on scroll (>50px) for green opaque background
- **Mobile menu**: Toggle hamburger button opens/closes slide-in nav drawer
- **Smooth scroll**: All anchor links scroll smoothly with navbar offset
- **Scroll animations**: Intersection Observer adds `.fade-in` / `.visible` classes
- **Form handling**: Prevents default submission, displays confirmation message
- **Date validation**: Sets minimum delivery date to tomorrow
- **Active nav highlighting**: Highlights current section link based on scroll position
- **getCrateName()**: Maps form values to display names (morning→"The Morning Crate", etc.)

---

## 8. Image Assets

### Local images (in `/images/`):

| File                          | Type | Size    | Description                              |
|-------------------------------|------|---------|------------------------------------------|
| `logo-canopy-crates.svg`      | SVG  | 2.6 KB  | Dark logo (navy palm + gold ring)        |
| `logo-canopy-crates-light.svg`| SVG  | 2.6 KB  | Light logo (white palm + gold ring)      |
| `breakfast-hamper.svg`        | SVG  | 5.9 KB  | Basket with honey, bread, avocado, fruit |
| `sundowner-hamper.svg`        | SVG  | 7.1 KB  | Hamper with wine, cheese, grapes         |
| `regional-crate.svg`          | SVG  | 8.7 KB  | Wooden crate with chocolate, tea, sauces |
| `bridal-hamper.svg`           | SVG  | 9.2 KB  | Gift box with ribbon, wine, skincare     |
| `about-daintree-creek.jpg`    | JPEG | 1.6 MB  | Rainforest creek with mossy boulders     |
| `cta-daintree-river.jpg`      | JPEG | 1.6 MB  | Aerial Daintree River through canopy     |
| `hero-daintree-coast.jpg`     | JPEG | 2.1 MB  | Aerial Cape Tribulation (not in use)     |

All SVG illustrations use Sand Cream (`#F7EED8`) backgrounds and brand-consistent colors.

### External vendor images:

| Vendor           | Source URL                                                  |
|------------------|-------------------------------------------------------------|
| Daintree Estates | `daintreeestates.com/assets/thumbL/DEC80D70.webp`          |
| Daintree Tea     | `daintreetea.com.au/wp-content/uploads/...`                |
| Kefir Queen      | `images.squarespace-cdn.com/...`                           |
| Fenglehorn       | `cdn.shopify.com/...`                                      |
| Daintree Wellness| `images.squarespace-cdn.com/...`                           |

**Recommendation:** Download vendor images locally to avoid dependency on external URLs.

---

## 9. Items Requiring Update Before Launch

| Item                          | Current Value               | Action Required                     |
|-------------------------------|-----------------------------|--------------------------------------|
| Email address                 | hello@canopycrates.com.au   | Update to real business email        |
| Phone number                  | 0400 000 000                | Update to real phone number          |
| Epicurean vendor image        | CSS gradient placeholder    | Replace with actual product photo    |
| Shannonvale vendor image      | CSS gradient placeholder    | Replace with actual product photo    |
| Form submission backend       | Client-side confirmation    | Connect to email service or Square   |
| Product pricing               | Not displayed               | Add pricing when determined          |
| Domain                        | localhost / file             | Deploy to hosting platform           |
| Favicon                       | Not set                     | Add brand favicon                    |
| Social media links            | Not included                | Add Instagram/Facebook when ready    |
| Google Analytics              | Not installed               | Add tracking code when ready         |
| JPEG optimisation             | Full-size originals         | Compress to ~200KB for web delivery  |

---

## 10. Recommended Deployment Platform

### Square Online (Free Plan) — Primary Recommendation

| Feature              | Detail                                      |
|----------------------|---------------------------------------------|
| Monthly cost         | $0/month (free forever)                     |
| Transaction fee      | 2.2% per online transaction                 |
| Custom domain        | No (uses canopycrates.square.site)          |
| Local delivery tools | Built-in delivery zone management           |
| QR code ordering     | Yes (free) — for AirBnb/hotel lobbies       |
| Afterpay             | Native support in Australia                 |
| AUD support          | Full (squareup.com/au)                      |

**Growth path:** Launch free → Validate at $36/month (Plus) → Scale to Shopify if 40+ orders/month.

---

## 11. How to Run Locally

**Option A: Using the built-in dev server config (.claude/launch.json)**
```bash
cd "C:/Users/bnloc/OneDrive/Documents/Claude/Sessions/Canopy Crate"
node -e "const http=require('http'),fs=require('fs'),path=require('path');..."
# Serves on http://localhost:3000
```

**Option B: Using any static file server**
```bash
npx http-server . -p 3000
# or
python -m http.server 3000
```

**Option C: Open directly**
Open `index.html` in a web browser. Google Fonts require internet connection.

---

## 12. Version History

| Version | Date        | Tag                      | Description                                    |
|---------|-------------|--------------------------|------------------------------------------------|
| 1.0     | 11 Mar 2026 | (pre-git)                | Original design — green gradient, Inter font   |
| 1.5     | 11 Mar 2026 | (pre-git)                | Brand Bible v2 overhaul — navy palette, logos  |
| 2.0     | 11 Mar 2026 | `v2-green-hero-gradient` | Rainforest-first palette, green hero gradient, Daintree photography, SVG illustrations |

---

*Document updated 11 March 2026.*
