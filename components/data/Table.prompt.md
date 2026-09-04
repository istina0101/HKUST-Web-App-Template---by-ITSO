Lists of people, grants, requests. Put it in a flush Card.

```jsx
<Card flush>
  <Table emphasis="system" columns={[{key:'system',label:'System'},{key:'role',label:'Business role'},{key:'status',label:'Status',render:r=><Badge tone={r.tone}>{r.status}</Badge>},{key:'act',label:'',align:'right',render:r=><Button variant="link" size="sm" icon="eye">View</Button>}]} rows={rows} />
</Card>
```

- Header is 11px uppercase grey on pale grey; cells 14px with 13px 14px padding.
- Right-align the action column; leave its header empty.

- At ≤760px each row stacks into a block — bold first cell, then label · value lines — separated by hairlines inside the same card (the portal's "cardify", flattened so borders never double up); pass `breakpoint={0}` to keep the grid.
- Sorting (addition): flag columns `sortable`, hold `sort` in state and flip dir in `onSort`; `SortRows(rows, sort)` orders them. Selection (addition): `selectable` + `selected`/`onSelectionChange`, with `<BulkBar count={selected.length} onClear>` above the table holding the bulk actions.
