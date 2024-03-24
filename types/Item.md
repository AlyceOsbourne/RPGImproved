---
fields:
  - name: Item
    type: Object
    options:
      displayTemplate: ""
    path: ""
    id: kF9sAD
  - name: Value
    type: Number
    options:
      step: 1
      min: 0
    path: kF9sAD
    id: CyfnNX
  - name: Rarity
    type: Select
    options:
      sourceType: ValuesList
      valuesList:
        "1": Common
        "2": Uncommon
        "3": Rare
        "4": Legendary
        "5": Epic
    path: kF9sAD
    id: PpspRD
version: "2.4"
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
  - kF9sAD
  - CyfnNX
  - PpspRD
hide: true
---

> [!info | clean]- Dropped By
> ```dataview
> TABLE Quantity, Chance
> FLATTEN Table.Item as Item
> FLATTEN Table.Quantity as Quantity
> FLATTEN Table.Chance as Chance
> WHERE contains(Item, this.file.link)
> ```

> [!info | clean]- Traded By
> ```dataview
> TABLE
> FLATTEN Store.Trades.Item as Item
> WHERE contains(Item, this.file.link)
> ```