The brand signature on every app screen.

```jsx
<TopBand logoSrc="assets/logo/hkust-fullname-white.png" unit="Information Technology" unitSub="Services Office (ITSO)" user={{initials:'FM',name:'FO Manager',role:'Manager · Finance Office'}} onUserClick={openMenu}>
  <IconButton icon="search" title="Search" />
  <IconButton icon="bell" dot title="Notifications" />
</TopBand>
```

- Logo always left, 34px tall, white version on navy.
- Unit block is 12px white with a 1px 40%-white left rule.

- Responsive: ≤880px hides the unit block and user text and shows ☰ before the logo (opens the Sidebar drawer). On desktop the logo is always first; the sidebar collapse toggle lives in the Sidebar header.
