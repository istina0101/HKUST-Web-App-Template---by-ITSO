Home tiles and dashboard KPIs; 3 per row.

```jsx
<StatTile eyebrow="Approvals waiting on you" value={2} caption="Review each item individually" icon="stamp" tone="gold" action={<Button variant="link" style={{paddingLeft:0}}>Review approvals →</Button>} />
```

- Pass `children` for a KpiDelta or Badge under the number.
- Give tiles at least 220px (`repeat(auto-fit,minmax(220px,1fr))`); below 200px the tile drops its IconBox automatically so the text keeps room.
