---
fields:
  - name: Consumes
    type: ObjectList
    options:
      displayTemplate: ""
      itemDisplayTemplate: ""
    path: ""
    id: WSJiby
  - name: Item
    type: File
    options:
      dvQueryString: dv.pages().where(p => (p.fileClass ?? []).includes("Item"))
    path: WSJiby
    id: egVSS0
  - name: Quantity
    type: Number
    options:
      step: 1
      min: 1
    path: WSJiby
    id: CXnFv3
  - name: Produces
    type: ObjectList
    options:
      displayTemplate: ""
      itemDisplayTemplate: ""
    path: ""
    id: 6hZAv4
  - name: Item
    type: File
    options:
      dvQueryString: dv.pages().where(p => (p.fileClass ?? []).includes("Item"))
    path: 6hZAv4
    id: ybExBK
  - name: Quantity
    type: Number
    options:
      step: 1
      min: 1
    path: 6hZAv4
    id: o4Z6Zd
  - name: Crafting Stations
    type: MultiFile
    options:
      dvQueryString: dv.pages().where(p => (p.fileClass ?? []).includes("CraftingStation"))
    path: ""
    id: LTL9xZ
version: "2.13"
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
  - WSJiby
  - egVSS0
  - CXnFv3
  - 6hZAv4
  - ybExBK
  - o4Z6Zd
  - LTL9xZ
---
	