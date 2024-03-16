---
fields:
  - name: Spawns
    type: MultiFile
    options:
      dvQueryString: dv.pages("").where(p => (p["fileClass"]??[]).includes("Location"))
    path: ""
    id: DSV1PA
version: "2.2"
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
  - DSV1PA
---
> [!info|no-icon t-w clean]- Spawns
> `$=dv.markdownTable(["Spawn Location"],  (dv.current()["Spawns"] ?? []).map(p => [p]))`