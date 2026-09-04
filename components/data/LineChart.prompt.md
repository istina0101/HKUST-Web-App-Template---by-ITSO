Trends over time.

```jsx
<LineChart labels={['Mar','Apr','May','Jun']} series={[{name:'Requests',values:[120,140,131,168]},{name:'Approvals',values:[98,121,119,150]}]} />
```

- 2px lines, white-filled dots, faint area under the first series.
- Hover: a dashed guide line, enlarged dots and a white tooltip card listing every series' value at that x — same interaction as the Chart.js theme.
