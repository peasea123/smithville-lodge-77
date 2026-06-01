# Smithville Lodge No. 77 — AI Image Generation Guide

Use this document with OpenAI’s image generation tool (or similar) to create **all 18 site images in one session**. Replace the SVG placeholders in `public/images/` when done, then update file extensions in `content/*.ts` and page `imageSrc` props from `.svg` to `.jpg` (or `.webp`).

**Total images:** 18  
**Recommended workflow:** Paste the **Global Style Block** once per image (or save it as a custom instruction), then paste each **Image Prompt** below. Generate, download, rename to the exact filename, repeat.

---

## Global Style Block (use on every image)

Copy this at the beginning of each prompt:

```
Photorealistic, warm and dignified editorial photography. Small-town Tennessee (DeKalb County / Smithville area vibe): brick storefronts, rolling hills, modest historic architecture, golden hour or soft daylight. Color palette: deep navy accents, warm gold highlights, ivory stone, natural wood, charcoal shadows—never neon or horror tones. Mood: welcoming civic fraternity, charity, fellowship, trust—not secret society, not occult, not political. No skulls, no pyramids, no glowing eyes, no dramatic conspiracy lighting, no copyrighted official Masonic seals or trademarked logos. If Masonic context appears, only subtle classic architecture (columns, stone, square geometry in stonework)—tasteful and minimal. Diverse group of adult men in casual or business-casual dress when people appear; faces natural, approachable, not staged like a movie poster. High resolution, sharp focus, shallow depth of field where appropriate. No text, no watermarks, no logos in the image.
```

---

## Negative prompt (if the tool supports it)

```
cartoon, illustration, CGI, horror, occult symbols, skull, pyramid with eye, demon, cult, hooded figures, ritual dagger, political rally, campaign signs, religious debate, neon, lens flare abuse, watermark, text, logo, seal, movie poster, sinister shadows, elite conspiracy vibe
```

---

## Technical specifications

| Image type | OpenAI size (DALL·E 3) | Aspect in site | Save to |
|------------|------------------------|----------------|---------|
| Heroes & page banners | **1792×1024** (landscape) | Full-width hero / page hero | `public/images/` |
| Charity cards | **1024×1024** or **1792×1024** (crop to 4:3) | 4:3 cards | `public/images/` |
| Gallery | **1024×1024** or **1792×1024** (crop to 4:3) | 4:3 grid | `public/images/` |
| Contact map block | **1792×1024** | 16:9 | `public/images/` |

**Format:** `.jpg` (quality ~85) or `.webp`  
**After import:** Update paths in `content/charity.ts`, `content/gallery.ts`, `app/page.tsx`, `app/about/page.tsx`, `app/freemasonry/page.tsx`, `app/charity/page.tsx`, `app/fellowship/page.tsx`, `app/membership/page.tsx`, `app/faq/page.tsx`, `app/contact/page.tsx`, and `components/sections/Hero.tsx` / `PageHero.tsx` if defaults still point to `.svg`.

**Hero tip:** Prefer compositions with a **darker left third** so white/gold headline text stays readable on the home hero.

---

## Checklist (18 files)

- [ ] `hero-home.jpg`
- [ ] `about-lodge.jpg`
- [ ] `freemasonry.jpg`
- [ ] `fellowship.jpg`
- [ ] `membership.jpg`
- [ ] `charity-local.jpg` (page hero — may share or differ from card)
- [ ] `contact-map.jpg`
- [ ] `charity-local.jpg` (card — optional separate crop)
- [ ] `charity-food.jpg`
- [ ] `charity-youth.jpg`
- [ ] `charity-families.jpg`
- [ ] `charity-service.jpg`
- [ ] `charity-disaster.jpg`
- [ ] `gallery-lodge-exterior.jpg`
- [ ] `gallery-dining.jpg`
- [ ] `gallery-service.jpg`
- [ ] `gallery-meeting.jpg`
- [ ] `gallery-charity.jpg`
- [ ] `gallery-brothers.jpg`

Note: `charity-local` is used for both the Charity page hero and the first charity card. One strong image can serve both, or generate two variations.

---

# SECTION A — Heroes & page headers (7 images)

Size: **1792×1024** unless noted.

---

## 1. `hero-home.jpg`

**Used on:** Home page main hero (`app/page.tsx`)

**Prompt:**

```
Photorealistic, warm and dignified editorial photography. Small-town Tennessee (DeKalb County / Smithville area vibe): brick storefronts, rolling hills, modest historic architecture, golden hour or soft daylight. Color palette: deep navy accents, warm gold highlights, ivory stone, natural wood, charcoal shadows—never neon or horror tones. Mood: welcoming civic fraternity, charity, fellowship, trust—not secret society, not occult, not political. No skulls, no pyramids, no glowing eyes, no dramatic conspiracy lighting, no copyrighted official Masonic seals or trademarked logos. If Masonic context appears, only subtle classic architecture (columns, stone, square geometry in stonework)—tasteful and minimal. Diverse group of adult men in casual or business-casual dress when people appear; faces natural, approachable, not staged like a movie poster. High resolution, sharp focus, shallow depth of field where appropriate. No text, no watermarks, no logos in the image.

Wide establishing shot of a handsome small Masonic lodge building on a main street in a Tennessee town like Smithville: two-story brick or limestone facade, American flag, tidy sidewalk, trees, late-afternoon warm light. Feels historic but well maintained and inviting. Empty street or a few distant pedestrians only—no crowd. Camera slightly low, dignified composition with room for dark navy text overlay on the left third. Emphasis on community landmark, not mystery.
```

---

## 2. `about-lodge.jpg`

**Used on:** About page hero (`app/about/page.tsx`)

**Prompt:**

```
Photorealistic, warm and dignified editorial photography. Small-town Tennessee (DeKalb County / Smithville area vibe): brick storefronts, rolling hills, modest historic architecture, golden hour or soft daylight. Color palette: deep navy accents, warm gold highlights, ivory stone, natural wood, charcoal shadows—never neon or horror tones. Mood: welcoming civic fraternity, charity, fellowship, trust—not secret society, not occult, not political. No skulls, no pyramids, no glowing eyes, no dramatic conspiracy lighting, no copyrighted official Masonic seals or trademarked logos. If Masonic context appears, only subtle classic architecture (columns, stone, square geometry in stonework)—tasteful and minimal. Diverse group of adult men in casual or business-casual dress when people appear; faces natural, approachable, not staged like a movie poster. High resolution, sharp focus, shallow depth of field where appropriate. No text, no watermarks, no logos in the image.

Three-quarter view of the same type of small-town lodge building exterior, closer than a hero shot: clean entrance, stone or brick steps, warm porch light beginning to glow, landscaping. Feels like “this is who we are locally.” No people required. Calm, proud, neighborly.
```

---

## 3. `freemasonry.jpg`

**Used on:** What Is Freemasonry? page hero (`app/freemasonry/page.tsx`)

**Prompt:**

```
Photorealistic, warm and dignified editorial photography. Small-town Tennessee (DeKalb County / Smithville area vibe): brick storefronts, rolling hills, modest historic architecture, golden hour or soft daylight. Color palette: deep navy accents, warm gold highlights, ivory stone, natural wood, charcoal shadows—never neon or horror tones. Mood: welcoming civic fraternity, charity, fellowship, trust—not secret society, not occult, not political. No skulls, no pyramids, no glowing eyes, no dramatic conspiracy lighting, no copyrighted official Masonic seals or trademarked logos. If Masonic context appears, only subtle classic architecture (columns, stone, square geometry in stonework)—tasteful and minimal. Diverse group of adult men in casual or business-casual dress when people appear; faces natural, approachable, not staged like a movie poster. High resolution, sharp focus, shallow depth of field where appropriate. No text, no watermarks, no logos in the image.

Symbolic but grounded still life: antique leather-bound books, simple wooden gavel, reading glasses, and warm lamplight on a dark wood table in a quiet library or study—not a dungeon. Soft ivory and gold tones, deep navy shadows. Suggests learning, tradition, and reflection without ritual objects or regalia. No human faces. Educational, calm, timeless.
```

---

## 4. `fellowship.jpg`

**Used on:** Fellowship page hero (`app/fellowship/page.tsx`)

**Prompt:**

```
Photorealistic, warm and dignified editorial photography. Small-town Tennessee (DeKalb County / Smithville area vibe): brick storefronts, rolling hills, modest historic architecture, golden hour or soft daylight. Color palette: deep navy accents, warm gold highlights, ivory stone, natural wood, charcoal shadows—never neon or horror tones. Mood: welcoming civic fraternity, charity, fellowship, trust—not secret society, not occult, not political. No skulls, no pyramids, no glowing eyes, no dramatic conspiracy lighting, no copyrighted official Masonic seals or trademarked logos. If Masonic context appears, only subtle classic architecture (columns, stone, square geometry in stonework)—tasteful and minimal. Diverse group of adult men in casual or business-casual dress when people appear; faces natural, approachable, not staged like a movie poster. High resolution, sharp focus, shallow depth of field where appropriate. No text, no watermarks, no logos in the image.

Warm fellowship dinner scene in a lodge dining hall or community hall: long table with simple home-style food (casseroles, bread, tea), men of different ages laughing and talking, casual dress, name tags optional but no visible logos. Soft overhead and window light, wood paneling or neutral walls. Feels like family gathering, not banquet flash photography.
```

---

## 5. `membership.jpg`

**Used on:** Membership page hero (`app/membership/page.tsx`)

**Prompt:**

```
Photorealistic, warm and dignified editorial photography. Small-town Tennessee (DeKalb County / Smithville area vibe): brick storefronts, rolling hills, modest historic architecture, golden hour or soft daylight. Color palette: deep navy accents, warm gold highlights, ivory stone, natural wood, charcoal shadows—never neon or horror tones. Mood: welcoming civic fraternity, charity, fellowship, trust—not secret society, not occult, not political. No skulls, no pyramids, no glowing eyes, no dramatic conspiracy lighting, no copyrighted official Masonic seals or trademarked logos. If Masonic context appears, only subtle classic architecture (columns, stone, square geometry in stonework)—tasteful and minimal. Diverse group of adult men in casual or business-casual dress when people appear; faces natural, approachable, not staged like a movie poster. High resolution, sharp focus, shallow depth of field where appropriate. No text, no watermarks, no logos in the image.

Two men on a lodge porch or park bench in small-town Tennessee, having a friendly serious conversation—one slightly older, one younger—handshake or relaxed seated posture. Body language: mentorship and trust, not salesmanship. Background: town square, courthouse lawn, or lodge steps softly blurred. Approachable “ask when you’re ready” mood.
```

---

## 6. `charity-local.jpg` (Charity page hero)

**Used on:** Charity page hero (`app/charity/page.tsx`) and first charity card (`content/charity.ts`)

**Prompt:**

```
Photorealistic, warm and dignified editorial photography. Small-town Tennessee (DeKalb County / Smithville area vibe): brick storefronts, rolling hills, modest historic architecture, golden hour or soft daylight. Color palette: deep navy accents, warm gold highlights, ivory stone, natural wood, charcoal shadows—never neon or horror tones. Mood: welcoming civic fraternity, charity, fellowship, trust—not secret society, not occult, not political. No skulls, no pyramids, no glowing eyes, no dramatic conspiracy lighting, no copyrighted official Masonic seals or trademarked logos. If Masonic context appears, only subtle classic architecture (columns, stone, square geometry in stonework)—tasteful and minimal. Diverse group of adult men in casual or business-casual dress when people appear; faces natural, approachable, not staged like a movie poster. High resolution, sharp focus, shallow depth of field where appropriate. No text, no watermarks, no logos in the image.

Wide shot of volunteers (men and women, mixed ages) handing supply boxes from a truck to a local charity storefront in a Tennessee town. Winter coats, canned goods visible. Overcast or soft daylight, practical and hopeful. Generic community signage only—no real brand names.
```

---

## 7. `contact-map.jpg`

**Used on:** Contact page hero and map section (`app/contact/page.tsx`)

**Prompt:**

```
Photorealistic, warm and dignified editorial photography. Small-town Tennessee (DeKalb County / Smithville area vibe): brick storefronts, rolling hills, modest historic architecture, golden hour or soft daylight. Color palette: deep navy accents, warm gold highlights, ivory stone, natural wood, charcoal shadows—never neon or horror tones. Mood: welcoming civic fraternity, charity, fellowship, trust—not secret society, not occult, not political. No skulls, no pyramids, no glowing eyes, no dramatic conspiracy lighting, no copyrighted official Masonic seals or trademarked logos. If Masonic context appears, only subtle classic architecture (columns, stone, square geometry in stonework)—tasteful and minimal. Diverse group of adult men in casual or business-casual dress when people appear; faces natural, approachable, not staged like a movie poster. High resolution, sharp focus, shallow depth of field where appropriate. No text, no watermarks, no logos in the image.

Aerial or high-angle view of a small Tennessee town main street at golden hour: courthouse square, church steeples in distance, tree-lined roads, gentle hills. Clean map-like clarity but photographic, not illustrated. Feels like “find us here”—welcoming, not surveillance or dystopian. No pins or text labels in the image.
```

---

# SECTION B — Charity cards (6 images)

Size: **1024×1024** (or 1792×1024 cropped to 4:3)  
**Used on:** Charity & Community page grid (`content/charity.ts`)

---

## 8. `charity-local.jpg` (card — optional second variation)

If you already generated #6 for the hero, you may reuse it. Otherwise:

**Prompt:**

```
Photorealistic, warm and dignified editorial photography. Small-town Tennessee (DeKalb County / Smithville area vibe): brick storefronts, rolling hills, modest historic architecture, golden hour or soft daylight. Color palette: deep navy accents, warm gold highlights, ivory stone, natural wood, charcoal shadows—never neon or horror tones. Mood: welcoming civic fraternity, charity, fellowship, trust—not secret society, not occult, not political. No skulls, no pyramids, no glowing eyes, no dramatic conspiracy lighting, no copyrighted official Masonic seals or trademarked logos. If Masonic context appears, only subtle classic architecture (columns, stone, square geometry in stonework)—tasteful and minimal. Diverse group of adult men in casual or business-casual dress when people appear; faces natural, approachable, not staged like a movie poster. High resolution, sharp focus, shallow depth of field where appropriate. No text, no watermarks, no logos in the image.

Volunteers organizing donated goods inside a modest community center: labeled bins, canned food, hygiene supplies. A middle-aged man in casual clothes stacking boxes alongside neighbors. Smithville-scale town, fluorescent + window light mix. Honest local charity work.
```

---

## 9. `charity-food.jpg`

**Prompt:**

```
Photorealistic, warm and dignified editorial photography. Small-town Tennessee (DeKalb County / Smithville area vibe): brick storefronts, rolling hills, modest historic architecture, golden hour or soft daylight. Color palette: deep navy accents, warm gold highlights, ivory stone, natural wood, charcoal shadows—never neon or horror tones. Mood: welcoming civic fraternity, charity, fellowship, trust—not secret society, not occult, not political. No skulls, no pyramids, no glowing eyes, no dramatic conspiracy lighting, no copyrighted official Masonic seals or trademarked logos. If Masonic context appears, only subtle classic architecture (columns, stone, square geometry in stonework)—tasteful and minimal. Diverse group of adult men in casual or business-casual dress when people appear; faces natural, approachable, not staged like a movie poster. High resolution, sharp focus, shallow depth of field where appropriate. No text, no watermarks, no logos in the image.

Food pantry interior: shelves of canned goods, fresh produce table, volunteer placing grocery bags into a cart for a family (faces partial or from behind for privacy). Warm, dignified, not poverty exploitation—respectful documentary tone.
```

---

## 10. `charity-youth.jpg`

**Prompt:**

```
Photorealistic, warm and dignified editorial photography. Small-town Tennessee (DeKalb County / Smithville area vibe): brick storefronts, rolling hills, modest historic architecture, golden hour or soft daylight. Color palette: deep navy accents, warm gold highlights, ivory stone, natural wood, charcoal shadows—never neon or horror tones. Mood: welcoming civic fraternity, charity, fellowship, trust—not secret society, not occult, not political. No skulls, no pyramids, no glowing eyes, no dramatic conspiracy lighting, no copyrighted official Masonic seals or trademarked logos. If Masonic context appears, only subtle classic architecture (columns, stone, square geometry in stonework)—tasteful and minimal. Diverse group of adult men in casual or business-casual dress when people appear; faces natural, approachable, not staged like a movie poster. High resolution, sharp focus, shallow depth of field where appropriate. No text, no watermarks, no logos in the image.

Adults helping students with backpacks and school supplies at a gym or church fellowship hall table event. Kids smiling, diverse group, “back to school” energy. Bright daytime through windows. Community education support, not classroom lecture.
```

---

## 11. `charity-families.jpg`

**Prompt:**

```
Photorealistic, warm and dignified editorial photography. Small-town Tennessee (DeKalb County / Smithville area vibe): brick storefronts, rolling hills, modest historic architecture, golden hour or soft daylight. Color palette: deep navy accents, warm gold highlights, ivory stone, natural wood, charcoal shadows—never neon or horror tones. Mood: welcoming civic fraternity, charity, fellowship, trust—not secret society, not occult, not political. No skulls, no pyramids, no glowing eyes, no dramatic conspiracy lighting, no copyrighted official Masonic seals or trademarked logos. If Masonic context appears, only subtle classic architecture (columns, stone, square geometry in stonework)—tasteful and minimal. Diverse group of adult men in casual or business-casual dress when people appear; faces natural, approachable, not staged like a movie poster. High resolution, sharp focus, shallow depth of field where appropriate. No text, no watermarks, no logos in the image.

Volunteer delivering a boxed meal and essentials to a front porch of a modest Tennessee home; homeowner grateful, subtle emotion. Golden hour, tasteful distance—privacy respected. Theme: families helped discreetly.
```

---

## 12. `charity-service.jpg`

**Prompt:**

```
Photorealistic, warm and dignified editorial photography. Small-town Tennessee (DeKalb County / Smithville area vibe): brick storefronts, rolling hills, modest historic architecture, golden hour or soft daylight. Color palette: deep navy accents, warm gold highlights, ivory stone, natural wood, charcoal shadows—never neon or horror tones. Mood: welcoming civic fraternity, charity, fellowship, trust—not secret society, not occult, not political. No skulls, no pyramids, no glowing eyes, no dramatic conspiracy lighting, no copyrighted official Masonic seals or trademarked logos. If Masonic context appears, only subtle classic architecture (columns, stone, square geometry in stonework)—tasteful and minimal. Diverse group of adult men in casual or business-casual dress when people appear; faces natural, approachable, not staged like a movie poster. High resolution, sharp focus, shallow depth of field where appropriate. No text, no watermarks, no logos in the image.

Community service day: men in work gloves picking up litter along a town park path or painting a park bench, one woman coordinating with clipboard. Blue sky, teamwork, visible improvement. Civic pride, not punishment detail.
```

---

## 13. `charity-disaster.jpg`

**Prompt:**

```
Photorealistic, warm and dignified editorial photography. Small-town Tennessee (DeKalb County / Smithville area vibe): brick storefronts, rolling hills, modest historic architecture, golden hour or soft daylight. Color palette: deep navy accents, warm gold highlights, ivory stone, natural wood, charcoal shadows—never neon or horror tones. Mood: welcoming civic fraternity, charity, fellowship, trust—not secret society, not occult, not political. No skulls, no pyramids, no glowing eyes, no dramatic conspiracy lighting, no copyrighted official Masonic seals or trademarked logos. If Masonic context appears, only subtle classic architecture (columns, stone, square geometry in stonework)—tasteful and minimal. Diverse group of adult men in casual or business-casual dress when people appear; faces natural, approachable, not staged like a movie poster. High resolution, sharp focus, shallow depth of field where appropriate. No text, no watermarks, no logos in the image.

After a regional storm: volunteers distributing water cases and tarps from a church parking lot, downed tree branches in background but scene hopeful and organized. Rain cleared, soft light. Disaster relief—competent neighbors helping neighbors.
```

---

# SECTION C — Gallery (6 images)

Size: **1024×1024** (or 1792×1024 cropped to 4:3)  
**Used on:** Home page gallery, About page, Fellowship page (`content/gallery.ts`)

---

## 14. `gallery-lodge-exterior.jpg`

**Prompt:**

```
Photorealistic, warm and dignified editorial photography. Small-town Tennessee (DeKalb County / Smithville area vibe): brick storefronts, rolling hills, modest historic architecture, golden hour or soft daylight. Color palette: deep navy accents, warm gold highlights, ivory stone, natural wood, charcoal shadows—never neon or horror tones. Mood: welcoming civic fraternity, charity, fellowship, trust—not secret society, not occult, not political. No skulls, no pyramids, no glowing eyes, no dramatic conspiracy lighting, no copyrighted official Masonic seals or trademarked logos. If Masonic context appears, only subtle classic architecture (columns, stone, square geometry in stonework)—tasteful and minimal. Diverse group of adult men in casual or business-casual dress when people appear; faces natural, approachable, not staged like a movie poster. High resolution, sharp focus, shallow depth of field where appropriate. No text, no watermarks, no logos in the image.

Front-on photo of lodge building facade, symmetrical composition, spring or fall, flags optional, crisp detail on brick/stone. No people. Gallery-quality architectural photo for a nonprofit website.
```

---

## 15. `gallery-dining.jpg`

**Prompt:**

```
Photorealistic, warm and dignified editorial photography. Small-town Tennessee (DeKalb County / Smithville area vibe): brick storefronts, rolling hills, modest historic architecture, golden hour or soft daylight. Color palette: deep navy accents, warm gold highlights, ivory stone, natural wood, charcoal shadows—never neon or horror tones. Mood: welcoming civic fraternity, charity, fellowship, trust—not secret society, not occult, not political. No skulls, no pyramids, no glowing eyes, no dramatic conspiracy lighting, no copyrighted official Masonic seals or trademarked logos. If Masonic context appears, only subtle classic architecture (columns, stone, square geometry in stonework)—tasteful and minimal. Diverse group of adult men in casual or business-casual dress when people appear; faces natural, approachable, not staged like a movie poster. High resolution, sharp focus, shallow depth of field where appropriate. No text, no watermarks, no logos in the image.

Candid fellowship meal: men passing a dish, coffee cups, simple centerpieces, laughter mid-conversation. Crop-friendly horizontal framing. Authentic lodge supper, not restaurant fine dining.
```

---

## 16. `gallery-service.jpg`

**Prompt:**

```
Photorealistic, warm and dignified editorial photography. Small-town Tennessee (DeKalb County / Smithville area vibe): brick storefronts, rolling hills, modest historic architecture, golden hour or soft daylight. Color palette: deep navy accents, warm gold highlights, ivory stone, natural wood, charcoal shadows—never neon or horror tones. Mood: welcoming civic fraternity, charity, fellowship, trust—not secret society, not occult, not political. No skulls, no pyramids, no glowing eyes, no dramatic conspiracy lighting, no copyrighted official Masonic seals or trademarked logos. If Masonic context appears, only subtle classic architecture (columns, stone, square geometry in stonework)—tasteful and minimal. Diverse group of adult men in casual or business-casual dress when people appear; faces natural, approachable, not staged like a movie poster. High resolution, sharp focus, shallow depth of field where appropriate. No text, no watermarks, no logos in the image.

Volunteers planting flowers at a town welcome sign or cleaning a veterans memorial—backs and sides OK, a few faces visible smiling. Small-town Tennessee pride.
```

---

## 17. `gallery-meeting.jpg`

**Important:** Public-safe interior only—no ritual regalia, altars, or ceremonial setups.

**Prompt:**

```
Photorealistic, warm and dignified editorial photography. Small-town Tennessee (DeKalb County / Smithville area vibe): brick storefronts, rolling hills, modest historic architecture, golden hour or soft daylight. Color palette: deep navy accents, warm gold highlights, ivory stone, natural wood, charcoal shadows—never neon or horror tones. Mood: welcoming civic fraternity, charity, fellowship, trust—not secret society, not occult, not political. No skulls, no pyramids, no glowing eyes, no dramatic conspiracy lighting, no copyrighted official Masonic seals or trademarked logos. If Masonic context appears, only subtle classic architecture (columns, stone, square geometry in stonework)—tasteful and minimal. Diverse group of adult men in casual or business-casual dress when people appear; faces natural, approachable, not staged like a movie poster. High resolution, sharp focus, shallow depth of field where appropriate. No text, no watermarks, no logos in the image.

Empty lodge meeting room before guests arrive: rows of simple wooden chairs, neutral carpet, patriotic corner display, tasteful generic framed prints on walls—NO altar setups, NO ceremonial swords, NO hoods, NO dramatic lighting. Bright, open, respectable public-safe interior. “Room where neighbors meet.”
```

---

## 18. `gallery-charity.jpg`

**Prompt:**

```
Photorealistic, warm and dignified editorial photography. Small-town Tennessee (DeKalb County / Smithville area vibe): brick storefronts, rolling hills, modest historic architecture, golden hour or soft daylight. Color palette: deep navy accents, warm gold highlights, ivory stone, natural wood, charcoal shadows—never neon or horror tones. Mood: welcoming civic fraternity, charity, fellowship, trust—not secret society, not occult, not political. No skulls, no pyramids, no glowing eyes, no dramatic conspiracy lighting, no copyrighted official Masonic seals or trademarked logos. If Masonic context appears, only subtle classic architecture (columns, stone, square geometry in stonework)—tasteful and minimal. Diverse group of adult men in casual or business-casual dress when people appear; faces natural, approachable, not staged like a movie poster. High resolution, sharp focus, shallow depth of field where appropriate. No text, no watermarks, no logos in the image.

Charity fundraiser scene: bake sale or chili cook-off table at a community event, volunteers in aprons with a plain generic “Charity” banner (no trademarked names). Friendly crowds, daytime.
```

---

## 19. `gallery-brothers.jpg`

**Prompt:**

```
Photorealistic, warm and dignified editorial photography. Small-town Tennessee (DeKalb County / Smithville area vibe): brick storefronts, rolling hills, modest historic architecture, golden hour or soft daylight. Color palette: deep navy accents, warm gold highlights, ivory stone, natural wood, charcoal shadows—never neon or horror tones. Mood: welcoming civic fraternity, charity, fellowship, trust—not secret society, not occult, not political. No skulls, no pyramids, no glowing eyes, no dramatic conspiracy lighting, no copyrighted official Masonic seals or trademarked logos. If Masonic context appears, only subtle classic architecture (columns, stone, square geometry in stonework)—tasteful and minimal. Diverse group of adult men in casual or business-casual dress when people appear; faces natural, approachable, not staged like a movie poster. High resolution, sharp focus, shallow depth of field where appropriate. No text, no watermarks, no logos in the image.

Men of varied ages at a local parade or county fair volunteer booth, handing out bottled water. Casual polo shirts, no regalia. Feels like “brothers in the community,” not a private ceremony.
```

---

# Batch generation tips (one session)

1. **Set quality to HD** if available (DALL·E 3).
2. **Use “vivid” vs “natural”:** prefer **natural** for photorealistic community photos.
3. **Consistency:** For building exteriors (`hero-home`, `about-lodge`, `gallery-lodge-exterior`), generate `hero-home` first; if you like it, add to later prompts: “Same lodge building style as previous image: two-story brick Tennessee lodge.”
4. **Regenerate** any image with skulls, pyramids, hoods, or sinister lighting—do not use those on a public lodge site.
5. **Rename immediately** after each download to the exact filename above.
6. Drop all files into `public/images/`.
7. Find/replace `.svg` → `.jpg` in the repo (or ask to have the codebase updated after upload).

---

# Code locations to update after upload

| File | What to change |
|------|----------------|
| `content/charity.ts` | All `image:` paths |
| `content/gallery.ts` | All `src:` paths |
| `app/page.tsx` | `hero-home` |
| `app/about/page.tsx` | `about-lodge` |
| `app/freemasonry/page.tsx` | `freemasonry` |
| `app/charity/page.tsx` | `charity-local` |
| `app/fellowship/page.tsx` | `fellowship` |
| `app/membership/page.tsx` | `membership` |
| `app/faq/page.tsx` | hero image (currently `hero-home`) |
| `app/contact/page.tsx` | `contact-map` (two references) |
| `components/sections/Hero.tsx` | default `imageSrc` |
| `components/sections/PageHero.tsx` | default `imageSrc` |

---

# FAQ page note

`app/faq/page.tsx` currently uses `hero-home.svg` for its page hero. You can reuse `hero-home.jpg` or generate a separate FAQ-themed wide shot (books + question mark motif avoided—keep dignified).

---

*Smithville Lodge No. 77 website — image generation guide. Replace with real lodge photography when available.*
