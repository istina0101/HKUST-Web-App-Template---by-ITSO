Page-wide notice that pushes content down; place directly under the band, above PageHead.

```jsx
<NotificationBanner tone="warning" title="Planned maintenance" action={<Button variant="link" size="sm">Details →</Button>}>
  ITSO systems will be unavailable on Sun 14 Sep, 02:00–06:00.
</NotificationBanner>
```

- One banner at a time; always dismissible (× on the right).
- Tones follow the shared tint set: info maintenance · warning expiring · danger outage · success completed.
