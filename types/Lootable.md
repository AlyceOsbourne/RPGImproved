---
limit: 20
mapWithTag: false
icon: package
tagNames: 
filesPaths: 
bookmarksGroups: 
excludes: 
extends: 
savedViews: []
favoriteView: 
fieldsOrder:
  - 2z4ecx
  - O8yE7c
  - z5R9jC
  - 7MIhvG
  - 3p76P0
  - OcPCM2
version: "2.13"
fields:
  - name: Loot
    type: Object
    options:
      displayTemplate: ""
    path: ""
    id: 2z4ecx
  - name: Num Drops
    type: Number
    options:
      step: 1
      min: 1
    path: 2z4ecx
    id: OcPCM2
  - name: Table
    type: ObjectList
    options:
      displayTemplate: ""
      itemDisplayTemplate: ""
    path: 2z4ecx
    id: O8yE7c
  - name: Item
    type: File
    options:
      dvQueryString: dv.pages("").where(p => (p["fileClass"]??[]).includes("Item"))
    path: 2z4ecx____O8yE7c
    id: z5R9jC
  - name: Chance
    type: Number
    options:
      step: 1
      min: 1
      max: 100
    path: 2z4ecx____O8yE7c
    id: 3p76P0
  - name: Quantity
    type: Number
    options:
      step: 1
      min: 1
    path: 2z4ecx____O8yE7c
    id: 7MIhvG
---
> [!info|no-icon t-w clean table-clean]- Loot
> ```dataviewjs
> const curr = dv.current();
> const loot = curr["Loot"] ?? {};
> const num_drops = loot["Num Drops"] ?? 0;
> const loot_table = loot["Table"] ?? [];
> dv.paragraph(dv.markdownTable(["Item", "Quantity", "Chance"], loot_table.map(i => [i["Item"], i["Quantity"], i["Chance"]])))
> ``` 