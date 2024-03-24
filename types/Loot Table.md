---
fields:
  - name: Table
    type: ObjectList
    options:
      displayTemplate: ""
      itemDisplayTemplate: ""
    path: ""
    id: SwTyHZ
  - name: Item
    type: File
    options:
      dvQueryString: dv.pages().where(p => (p.fileClass ?? []).includes("Item"))
    path: SwTyHZ
    id: BPoehC
  - name: Quantity
    type: Number
    options:
      step: 1
      min: 1
    path: SwTyHZ
    id: jY69rh
  - name: Chance
    type: Number
    options:
      step: 1
      min: 1
      max: 100
    path: SwTyHZ
    id: 9ZZqA0
version: "2.8"
limit: 20
mapWithTag: false
icon: package
tagNames: 
filesPaths: 
bookmarksGroups: 
excludes: 
extends: 
savedViews: 
favoriteView: 
fieldsOrder:
  - SwTyHZ
  - BPoehC
  - 9ZZqA0
  - jY69rh
hide: true
---

```dataviewjs
const c = dv.current();
const t = c.Table ?? [];
dv.table(["Item", "Quantity", "Chance"], t.map(r => [r.Item, r.Quantity, r.Chance]))
```