Choose several roles, members or departments.

```jsx
<MultiSelect value={ids} onChange={setIds} placeholder="Add members…" options={people.map(p => ({ value: p.id, label: p.n, meta: p.role }))} />
```

- Field reads "3 selected" with a small count pill; the list has a filter box and Select all / Clear.
