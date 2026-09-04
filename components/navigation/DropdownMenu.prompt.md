User / persona menu and row overflow menus.

```jsx
<DropdownMenu open={open} heading="Switch user · prototype">
  <MenuItem leading={<Avatar initials="FM" />} label="FO Manager" description="Manager · Finance Office" selected />
  <MenuItem icon="log-out" label="Sign out" tone="danger" />
</DropdownMenu>
```

- Anchor inside a `position:relative` parent; default offset is top 52 / right 12 (under the band user chip).
