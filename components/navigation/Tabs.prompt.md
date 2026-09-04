Switch between panes of one record (Overview · Access · Activity).

```jsx
<Tabs value={tab} onChange={setTab} items={[{key:'o',label:'Overview'},{key:'a',label:'Access',count:9},{key:'h',label:'Activity'}]} />
```

- Filters stay Chips; Tabs are for panes.
