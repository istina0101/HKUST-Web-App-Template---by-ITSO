Settings sections, FAQ-style help, grouped details.

```jsx
<Accordion items={[{ key: 'profile', title: 'Profile', meta: 'Synced from HR', content: <…/> }, { key: 'notify', title: 'Notifications', content: <…/> }]} />
```

- Opens one section at a time; chevron rotates 180° in 150ms. Header 16px 22px, body 0 22px 18px.
