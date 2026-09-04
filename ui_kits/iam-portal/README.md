# UI kit · IAM self-service portal (HKUST ITSO)

Recreation of the IAM Portal prototype v4 (single-file `index.html`), rebuilt from the HKUST Web components.

Screens: Case selector → Home & Apps · Request Access (browse catalogue, copy a colleague, role modal, cart modal, toast) · Team lifecycle · Team members. Other pages show a clearly-marked "not recreated" placeholder. The persona switcher in the band (FO Manager · FO Department Admin · JSPM Resource Owner · Identity Admin; Case 2 adds ITSO Manager · ITSO Department Admin · RO Manager) gates the sidebar exactly as the source does.

Files: `index.html` (entry) · `data.js` (seed subset) · `shell.jsx` (band + persona menu + sidebar + page head) · `case-selector.jsx` · `home-page.jsx` · `request-page.jsx` · `team-page.jsx` (Team lifecycle + Team members) · `app.jsx` (routing).

Fidelity notes: values follow the source CSS with the agreed normalisations (font sizes snapped to the 11/12/14/16/20/24/32 ramp; badge and callout tints unified; card padding 22px). Sample people and cases are the source's own seed data.
