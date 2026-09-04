Left navigation under the band.

```jsx
<Sidebar collapsible title="IAM Self-Service Portal" footer="prototype v4 · staff identity">
  <NavItem icon="layout-grid" active>Home & Apps</NavItem>
  <NavLabel>My access</NavLabel>
  <NavItem icon="clipboard-list" count={2}>My Requests</NavItem>
</Sidebar>
```

- Groups are uppercase 11px labels; the first item (Home) has no label.
- Active row: pale-navy fill, navy text, 3px ITSO-blue bar on the left.

- Responsive: at ≤880px the sidebar is an off-canvas drawer opened by the band's menu button and closed by tapping the navy backdrop or any NavItem.
- `title` puts the system name in a header row; `collapsible` adds the panel toggle at its right, which shrinks the rail to 64px icons on desktop (labels become tooltips). On phones the band's ☰ opens the drawer instead. Page content should use `marginLeft: 'var(--side-w-current, var(--side-w))'` to follow.
- Long system names wrap to at most 2 lines (ellipsis after, full name on hover). Names that would need a third line should use the acronym staff already use (e.g. "CADS") and put the full name in the page subtitle.
