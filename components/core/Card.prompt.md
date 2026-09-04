The one container: everything on a page sits in a Card on the pale page background.

```jsx
<Card>
  <SectionTitle>Password</SectionTitle>
  <p className="muted">Last changed 12 Mar 2026 · meets policy</p>
</Card>
<Card flush>
  <CardHeader title="Multi-factor authentication" subtitle="Used to confirm it is really you" actions={<Badge tone="success" icon="shield-check">Active</Badge>} />
  …rows…
  <CardFooter><Button size="sm" icon="plus">Add a method</Button></CardFooter>
</Card>
```

- Cards never nest. Grids of cards use 16px gaps.
- `hoverable` only when the whole card is a link.
