Dialogs for confirmations, short forms and wizards.

```jsx
<Modal title="Reject request" subtitle="TRF-1027 · ECM" leading={<IconBox icon="x" tone="red" size={34} />} onClose={close}
  footer={<><Button variant="link" onClick={close}>Cancel</Button><Button variant="danger-solid">Confirm rejection</Button></>}>
  …OptionRows / Field…
</Modal>
```

- Footer is space-between: link-style Cancel left, primary right. Wizards put Back left.
- Destructive dialogs lead with a 34px red IconBox and confirm with `danger-solid`.
