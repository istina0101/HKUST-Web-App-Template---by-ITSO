Badge for statuses, layers and flags; the tint set is shared with Callout.

```jsx
<Badge tone="success" icon="check">Active</Badge>
<Badge tone="warning" icon="clock">Sensitive · time-bound</Badge>
<Badge tone="gold" icon="stamp">By approval</Badge>
<Badge tone="neutral">L1 · Basic</Badge>
```

- Tone meanings in the portal: info = automatic/system, success = active/approved, warning = pending/sensitive, danger = rejected/high risk, gold = approval/L3, neutral = completed/disabled.
- Badges never wrap. For a long value in a KeyValueList (e.g. an approval route), pass `style={{ whiteSpace: 'normal', textAlign: 'left', alignItems: 'flex-start' }}` so it breaks onto a second line instead of overflowing on narrow screens.
