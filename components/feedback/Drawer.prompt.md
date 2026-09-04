Detail view that keeps the list underneath (member details, request preview).

```jsx
<Drawer open={!!member} onClose={() => setMember(null)} title={member.n} subtitle={member.role} leading={<Avatar initials="LJ" size="lg" />} footer={<><Button variant="link">Close</Button><Button icon="user-x" variant="danger">Remove from project</Button></>}>
  <KeyValueList items={…} />
</Drawer>
```

- Header, body and footer insets match Modal; only the × closes it (no scrim click, no Esc) so accidental taps don't lose the panel.
