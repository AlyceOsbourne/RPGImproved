---
fields:
  - name: Recipes
    type: Lookup
    options:
      autoUpdate: true
      dvQueryString: dv.pages().where(p => (p.fileClass ?? []).includes("CraftingRecipe"))
      targetFieldName: Crafting Stations
      outputType: LinksList
      builtinSummarizingFunction: Count
      customListFunction: page.file.name
      customSummarizingFunction: return pages.length
      summarizedFieldName: ""
    path: ""
    id: jJx1NF
version: "2.0"
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
  - jJx1NF
---
