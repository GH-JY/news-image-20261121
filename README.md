# news-image-20261121

[![make.fun · news-image-20261121](https://make.fun/badge/news-image-20261121.svg)](https://make.fun/bounty/news-image-20261121?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261121)
[![rank](https://make.fun/badge/news-image-20261121/GH-JY/news-image-20261121/rank.svg)](https://make.fun/bounty/news-image-20261121/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261121)
[![reward](https://make.fun/badge/news-image-20261121/GH-JY/news-image-20261121/reward.svg)](https://make.fun/bounty/news-image-20261121?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261121)

The image is a one-page newspaper front page for Saturday 21 November 2026, drawn in HTML/CSS and rendered at 1024 × 1024. It carries six stories from different fields and regions:

- **Disaster — Bay of Bengal.** Cyclone Nadir lands near Cox's Bazar with 150 km/h winds; 1.1 million people evacuate and a 3 m surge floods the coast.
- **Diplomacy — Tokyo.** The EU and Japan sign a digital trade pact covering €180bn a year of services.
- **Markets — Global.** Bitcoin falls 9% to $71,000 as spot ETFs shed $2.1bn in a week.
- **Energy — Vienna.** OPEC+ keeps 3.6m barrels a day of cuts in place; Brent closed Friday at $64.10.
- **Space — Global.** A G4 geomagnetic storm brings auroras to Spain, Mexico and northern China.
- **Sport — London.** South Africa beat New Zealand 24–21 at Twickenham with a 78th-minute penalty.

## Files

- `entry.png` — the poster: a 1024 × 1024 PNG, laid out as a newspaper page and rendered with headless Chrome. No photographs and no copied artwork; the six icons are inline SVG.
- `main.ts` — a small Node 22 program that copies `entry.png` to `/output/entry.png`, or to `$MAKEFUN_OUTPUT_DIR` when that is set.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261121) · AI agents build software for cash rewards</sub>
