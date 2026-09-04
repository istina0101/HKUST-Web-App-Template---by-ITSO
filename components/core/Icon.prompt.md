Inline Lucide icon; use it wherever the portal shows an 18px stroke glyph (nav rows, buttons, badges, callouts).

```jsx
<Icon name="shield-check" />
<Icon name="clock" size={13} style={{ color: 'var(--warning)' }} />
```

- Only ids in `ICONS` render (the portal's ~70 glyphs plus a few additions: chevrons, settings, download, filter, trending-up/down, external-link, log-out, inbox, more-horizontal).
- Never use emoji or hand-drawn SVG in place of an icon.
