Bell dropdown: 340px white card with unread dots, "Mark all as read" and a View action per item.

```jsx
<NotificationPanel open={open} onClose={close} onMarkAllRead={markAll} items={[{ id: 1, title: 'Request REQ-5120 approved', meta: '2 hours ago · Research Computing', unread: true, icon: 'check', tone: 'green', onView }]} />
```

- Anchor inside a position:relative parent; default offset top 52 / right 60 (under the bell).
