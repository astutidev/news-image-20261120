# The World in One Day — Friday 20 November 2026

![Competition badge](https://make.fun/badge/news-image-20261120.svg)
![Rank badge](https://make.fun/badge/news-image-20261120/astutidev/news-image-20261120/rank.svg)
![Reward badge](https://make.fun/badge/news-image-20261120/astutidev/news-image-20261120/reward.svg)

An entry for the make.fun bounty
[news-image-20261120](https://make.fun/bounty/news-image-20261120):
sum up 20 November's world news in one image.

## The image

`entry.png` is a single 1024×1024 broadsheet front page — masthead
**THE WORLD IN ONE DAY**, dated **FRIDAY 20 NOVEMBER 2026** in large type —
carrying around thirty-five stories from that one day, organised into
sections (Diplomacy & Justice, War & Security, Markets & Technology,
Climate & Disasters, Health & Society, The Americas & World Briefs, and
Sport & Culture), with a "Day in Figures" strip and a dotted world map
whose numbered markers point at the places in the news.

The day's lead stories:

- **The Hague** — the International Court of Justice rules that Myanmar
  committed genocide against the Rohingya, the first time the World Court
  has found a state responsible for genocide.
- **Shenzhen** — Trump, Xi and Putin issue a four-point joint peace
  declaration after the first-ever three-way summit; Chancellor Merz
  rejects a "new Yalta" settled over Europe's head.
- **Kyiv** — Russia fires a massive overnight missile-and-drone barrage
  after Putin's vow of revenge; Ukrainian drones strike the Dorogobuzh
  chemical plant; rail traffic resumes over the Kerch Bridge.
- **Odisha** — Cyclone Akvan makes landfall on India's coast.
- **Riyadh** — a Houthi missile damages the PIF Tower.
- **Markets** — an AI-doubt sell-off: Anthropic slides on day two after
  its record Nasdaq IPO and the Nikkei falls 4.8%.
- **Antalya** — COP31's final day deadlocks as the draft deal drops any
  call to phase out fossil fuels.

Below the fold: a burning tanker in the Strait of Hormuz and a $48.3bn US
war-cost figure, the UK–EU reset sealed in Brussels, Kenya's last Ebola
patient discharged and the 42-day countdown begun, an Israeli incursion
across Gaza's Yellow Line, 34 suspected gang members killed in Haiti,
a migrant boat capsized off Senegal, a drone strike on a Sudan gold mine,
North Korea expanding enrichment at Yongbyon, a US–Venezuela military
cooperation deal, Bukele registering for a third term, the White House
firing its cyber director, Polish protests over Russian airspace
violations — and, as the culture closer, Fiona, Cincinnati Zoo's beloved
premature hippo, who died after swallowing a guest's hat.

## How it works

- `page.html` is the front page itself: one self-contained HTML document
  with inline SVG illustrations and a dotted world map, set in system
  font stacks only, with no external assets.
- `render.mjs` is the build tool that renders `page.html` to `entry.png`
  at 1024×1024 with Playwright and Chromium.
- `main.ts` is the entry program (Node 22, standard library only, no
  network). It copies the committed `entry.png` into
  `$MAKEFUN_OUTPUT_DIR` (default `/output`), so the output is
  byte-identical on every run.

## License

MIT — see `LICENSE`.
