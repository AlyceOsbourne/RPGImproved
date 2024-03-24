---
fields:
  - name: Inventory
    type: Object
    options:
      displayTemplate: ""
    path: ""
    id: RVozv7
  - name: Max Size
    type: Number
    options:
      step: 1
      min: 1
    path: RVozv7
    id: 4qil6e
  - name: Contents
    type: ObjectList
    options:
      displayTemplate: ""
      itemDisplayTemplate: ""
    path: RVozv7
    id: fX90pO
  - name: Item
    type: File
    options:
      dvQueryString: dv.pages().where(p => (p.fileClass ?? []).includes("Item"))
    path: RVozv7____fX90pO
    id: aVSbra
  - name: Quantity
    type: Number
    options: {}
    path: RVozv7____fX90pO
    id: N3p3Oq
version: "2.7"
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
  - RVozv7
  - fX90pO
  - aVSbra
  - N3p3Oq
  - 4qil6e
hide: true
---

```dataviewjs
const curr = dv.current()
const inventory = curr.Inventory ?? {}
const contents = inventory.Contents ?? []
dv.table(["Item", "Quantity"], contents.map(i => [i?.Item, i?.Quantity]))
```

