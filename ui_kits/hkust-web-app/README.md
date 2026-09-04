# UI kit · Generic HKUST web app (Research Computing sample)

Six generic admin screens built only from HKUST Web components, with neutral HKUST sample data (a research-computing allocation portal — no IAM content). They show how the IAM portal's style generalises to any staff-facing web app.

Screens: Dashboard (maintenance banner, bell notification panel, stat tiles + KPI deltas, bar + line charts, table, activity) · Projects list (chips, search, select, sortable + selectable table with bulk-action bar, progress + badges, pagination, filtered-empty state) · Requests list (approve/reject row actions) · Project detail (breadcrumb, header card with tabs, key-value list, members table opening a side drawer, activity, callout) · Request wizard (3 steps: project combobox, option rows, member multi-select, file upload, chips, select, textarea, review with StepTracker) · Settings (accordion sections: profile fields, switches, danger zone with confirm modal) · Empty & error states (skeleton + spinner loading, first-run, filtered, done, load failure, inline callouts, 404).

Files: `index.html` · `data.js` · `shell.jsx` · `dashboard.jsx` · `projects-list.jsx` (+ RequestsList) · `project-detail.jsx` · `request-wizard.jsx` · `settings-page.jsx` · `states-page.jsx` · `app.jsx`.
