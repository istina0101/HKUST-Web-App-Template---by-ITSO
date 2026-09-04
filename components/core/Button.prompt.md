Button for every clickable action; primary is ITSO blue and darkens to HKUST navy on hover.

```jsx
<Button icon="circle-plus">Request an app</Button>
<Button variant="ghost" size="sm" icon="eye">View</Button>
<Button variant="link">Cancel</Button>
<Button variant="danger-solid" icon="trash-2">Remove access</Button>
```

- One primary per view section; ghost for secondary; link for cancel/dismiss inside modals and rows. Link buttons are borderless at rest and reveal their 40px/32px box with a pale-grey (`--bg2`) fill on hover.
- `danger` is the outlined red used in rows; `danger-solid` confirms destructive modals.
- Two sizes only: md is 40px tall (0 16px, 14px text) for page and card actions; `size="sm"` is 32px (0 11px, 12px text) for table and card-row actions. Never mix the two in one row; both match Input/Select heights.
