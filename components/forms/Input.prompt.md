Single-line text input; the search variant takes a leading icon.

```jsx
<Input icon="search" placeholder="Search systems, business roles, or functions…" />
<Field label="New password"><Input type="password" /></Field>
```

- Wrap in Field for label/hint. Full width by default; constrain with `wrapStyle={{maxWidth:340}}`.
- All controls share `--control-h` (40px; `Select size="sm"` 32px), so text, password, date and select fields line up in a row. Native date/number chrome is reset with `appearance:none`.
