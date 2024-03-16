---
fields:
  - name: Stats
    type: Object
    options:
      displayTemplate: ""
    path: ""
    id: M8NEy1
  - name: HP
    type: Number
    options:
      step: 1
    path: M8NEy1
    id: 2ZgP9v
  - name: Attack
    type: Number
    options:
      step: 1
    path: M8NEy1
    id: eBXxxB
  - name: Defence
    type: Number
    options:
      step: 1
    path: M8NEy1
    id: CDm0sm
  - name: Stamina
    type: Number
    options:
      step: 1
    path: M8NEy1
    id: jgX4y8
  - name: Mana
    type: Number
    options:
      step: 1
    path: M8NEy1
    id: pS2MMJ
  - name: Survival Stats
    type: Object
    options:
      displayTemplate: ""
    path: ""
    id: OWOKlD
  - name: Hydration
    type: Number
    options:
      step: 1
      max: 100
    path: OWOKlD
    id: tbwetR
  - name: Satiation
    type: Number
    options:
      step: 1
      max: 100
      min: 0
    path: OWOKlD
    id: wL04IK
  - name: Rested
    type: Number
    options:
      step: 1
      max: 100
      min: 0
    path: OWOKlD
    id: jz0Ff0
version: "2.38"
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
  - M8NEy1
  - 2ZgP9v
  - pS2MMJ
  - jgX4y8
  - eBXxxB
  - CDm0sm
  - OWOKlD
  - jz0Ff0
  - wL04IK
  - tbwetR
hide: true
cssclass: tables-no-alt-background
---
> [!columns | clean no-icon table-clean n-th]+ Stats
> > [!nfo | clean no-icon table-clean n-th no-title] Stats
> > `$=dv.markdownTable(["Stat", "Value"], Object.entries(dv.current()["Stats"] ?? {}))`
>  
> > [!nfo | clean no-icon table-clean n-th no-title] Survival Stats
> > `$=dv.markdownTable(["Stat", "Value"], Object.entries(dv.current()["Survival Stats"] ?? {}))`