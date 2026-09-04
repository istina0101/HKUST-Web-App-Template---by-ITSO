Counts by category or month.

```jsx
<BarChart data={[{label:'Jan',value:42},{label:'Feb',value:57}]} showValues />
```

- Square bars, ITSO blue first series, HKUST grid grey; second series is light blue.
- Hover: the hovered bar stays solid while others dim to 35%, its label turns navy bold, and a white tooltip card shows label + value(s) — the same interaction as the Chart.js theme. `seriesNames` labels grouped bars in the tooltip.
