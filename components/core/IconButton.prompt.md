Square icon-only button for toolbars and the top band.

```jsx
<IconButton icon="bell" dot title="Notifications" />
<IconButton icon="shopping-cart" count={2} title="Access cart" />
<IconButton icon="more-horizontal" tone="light" title="More" />
```

- Always pass `title` (it doubles as aria-label).
- `tone="navy"` icons are pale blue-grey (#cdd8e6) and turn white on hover.
