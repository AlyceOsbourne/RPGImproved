---
fields:
  - name: Spawn Locations
    type: MultiFile
    options:
      dvQueryString: dv.pages().where(p => (p.fileClass ?? []).includes("Location"))
    path: ""
    id: sQDGeP
version: "2.3"
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
  - sQDGeP
hide: true
---

`$=dv.table(["Spawn Locations"], (dv.current()["Spawn Locations"] ?? []).map(p => [p]))`