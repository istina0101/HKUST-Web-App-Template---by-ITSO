Loading placeholders that mirror the layout they replace.

```jsx
<SkeletonCard />
<Card flush><SkeletonTable rows={5} cols={4} /></Card>
<Skeleton width={120} height={12} />
```

- 1.6s shimmer, plain ease, disabled under prefers-reduced-motion. Use Spinner for indeterminate waits without a known layout.
