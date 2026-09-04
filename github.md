repo: ecthink/iam-business-case
branch: main
path: index.html

## Last sync
date: 2026-09-04T02:35:00Z
### Updated in this project
- Muli self-hosted from ITSO files; 800 weights mapped to 700; 黑體 stack for Chinese
- Second wave of components (banner, bell panel, skeleton, spinner, drawer, accordion, combobox, multi-select, upload, table sort/select)
- Four DC templates under `templates/`; responsive sidebar and tables
- Packaged as an Agent Skill (SKILL.md + readme.md)

## Sync history
### 2026-09-03T03:46:36Z
- Tokens (`tokens/*.css`) lifted from the prototype `:root` and component CSS
- Lucide glyph map copied into `components/core/Icon.jsx`
- 38 components rebuilt from the prototype's CSS classes
- IAM portal UI kit recreated (case selector, home, request access, team pages)

## Screen map
| Screen | Repo files |
| --- | --- |
| ui_kits/iam-portal/case-selector.jsx | index.html (`#caseSelect`, `.cs-*`) |
| ui_kits/iam-portal/shell.jsx | index.html (`.band`, `.sidebar`, `.pagehead`, `.pmenu`, `navHTML()`) |
| ui_kits/iam-portal/home-page.jsx | index.html (`#page-home`, `renderHome()`) |
| ui_kits/iam-portal/request-page.jsx | index.html (`#page-request`, `#roleModal`, `#cartModal`) |
| ui_kits/iam-portal/team-page.jsx | index.html (`renderTeam()`, `renderMembers()`) |
| components/* | index.html (`<style>` blocks: `.btn`, `.badge`, `.callout`, `.input`, `.switch`, `.tbl`, `.steps`, `.modal`, `#toast`, `.empty`, `.kv`, `.act`, `.jstat`) |
| tokens/* | index.html (`:root`) |
