"Search name or staff ID…" fields that resolve to one person or record.

```jsx
<Combobox value={pi} onChange={setPi} placeholder="Search name or staff ID…" options={[{ value: 'wchan', label: 'Prof. CHAN Wing Hong', meta: 'UST-P-0031277 · Civil Engineering', initials: 'WH' }]} />
```

- Rows: 28px Avatar (or 16px icon), 14px label, 12px muted meta. Arrow keys move, Enter picks, Esc closes; the chosen row shows inside the field with a clear ×.
