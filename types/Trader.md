---
fields:
  - name: Trades
    type: ObjectList
    options:
      displayTemplate: ""
      itemDisplayTemplate: ""
    path: XhFKE5
    id: wIR3SB
  - name: Store
    type: Object
    options:
      displayTemplate: ""
    path: ""
    id: XhFKE5
  - name: Item
    type: File
    options:
      dvQueryString: dv.pages().where(p => (p.fileClass ?? []).includes("Item"))
    path: XhFKE5____wIR3SB
    id: udXOGB
  - name: Buy Quantity
    type: Number
    options:
      step: 1
      min: 0
    path: XhFKE5____wIR3SB
    id: R3EEOo
  - name: Sell Quantity
    type: Number
    options:
      step: 1
      min: 0
    path: XhFKE5____wIR3SB
    id: hRYGSN
  - name: Stocks
    type: Number
    options:
      step: 1
      min: 1
    path: XhFKE5
    id: sapXd3
  - name: Sell Price Ratio
    type: Number
    options:
      step: 0.01
      min: 0
      max: 2
    path: XhFKE5
    id: 4lFGcP
  - name: Buy Price Ratio
    type: Input
    options: {}
    path: XhFKE5
    id: IdYirp
version: "2.657"
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
  - XhFKE5
  - sapXd3
  - IdYirp
  - 4lFGcP
  - wIR3SB
  - udXOGB
  - R3EEOo
  - hRYGSN
hide: true
---

```dataviewjs
const curr = dv.current();
const store = curr.Store ?? {};
const trades = store.Trades ?? [];
const bpr = store["Buy Price Ratio"] ?? 1;
const spr = store["Sell Price Ratio"] ?? 1;

dv.table(["Item", "Buy Quantity", "Sell Quantity", "Buy Price", "Sell Price"], trades.map(
	t => {
		const i = t?.Item;
		if (i) {
			const _i = dv.page(i.path);
			const iv = _i?.Item?.Value ?? 0;
			const ibq = t["Buy Quantity"] ?? 1;
			const isq = t["Sell Quantity"] ?? 1;
			const ibp = iv
			const isp = iv
			return [i, ibq, isq, ibp, isp]
		}
		return ["-", "-", "-", "-", "-"]
	}
))
```