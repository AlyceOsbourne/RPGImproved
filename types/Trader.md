---
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
  - xZaOpO
  - 8kVJGO
  - ELB50V
version: "2.6"
fields:
  - name: Trades
    type: ObjectList
    options:
      displayTemplate: ""
      itemDisplayTemplate: ""
    path: ""
    id: xZaOpO
  - name: Item
    type: File
    options:
      dvQueryString: dv.pages("").where(p => (p["fileClass"]??[]).includes("Item"))
    path: xZaOpO
    id: 8kVJGO
  - name: Quantity
    type: Number
    options:
      step: 1
      min: 1
    path: xZaOpO
    id: ELB50V
hide: true
---

> [!info | no-icon t-w clean table-clean]- Trades
> `$=dv.markdownTable(["Item", "Quantity"], (dv.array(dv.current()["Trades"] ?? [])).map(i => [i["Item"], i["Quantity"]]))`
