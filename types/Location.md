---
fields:
  - name: Spawns
    type: Lookup
    options:
      autoUpdate: true
      dvQueryString: dv.pages()
      targetFieldName: Spawn Locations
      outputType: LinksList
      builtinSummarizingFunction: Count
      customListFunction: page.file.name
      customSummarizingFunction: return pages.length
      summarizedFieldName: ""
    path: ""
    id: WlMuDe
  - name: Parent Location
    type: MultiFile
    options:
      dvQueryString: dv.pages().where(p => (p.fileClass ?? []).includes("Location"))
    path: ""
    id: xcLfkP
version: "2.12"
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
  - xcLfkP
  - WlMuDe
hide: true
---

`$=dv.table(["Spawns"], (dv.current().Spawns ?? []).map(p => [p]))`