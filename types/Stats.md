---
fields:
  - name: Stats
    type: Object
    options:
      displayTemplate: ""
    path: ""
    id: jDyrWp
  - name: Strength
    type: Number
    options:
      step: 1
    path: jDyrWp
    id: GjT5eL
  - name: Dexterity
    type: Number
    options:
      step: 1
    path: jDyrWp
    id: 2gzlH0
  - name: Constitution
    type: Number
    options:
      step: 1
    path: jDyrWp
    id: 8BkNHC
  - name: Intelligence
    type: Number
    options:
      step: 1
    path: jDyrWp
    id: auNZeT
  - name: Wisdom
    type: Number
    options:
      step: 1
    path: jDyrWp
    id: rVvghl
  - name: Charisma
    type: Number
    options:
      step: 1
    path: jDyrWp
    id: 3QYlxl
version: "2.25"
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
  - jDyrWp
  - GjT5eL
  - 2gzlH0
  - 8BkNHC
  - rVvghl
  - auNZeT
  - 3QYlxl
---

```dataviewjs
const curr = dv.current()["Stats"] ?? {};
dv.table(["Stat", "Level"], dv.array(Object.entries(curr)))
```