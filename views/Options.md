---
children: ["[[Type View]]"]
---

```dataviewjs
if (!dv.current().hideConfig ?? false) {
	dv.paragraph(dv.markdownTable(["", ""], Object.entries({
	"File Classes": "`INPUT[inlineListSuggester(optionQuery(\"types\"), useLinks(false), showcase):fileClass]`",
	"Hide Meta": "`INPUT[toggle:hide]`",
	"Hide Config": "`INPUT[toggle:hideConfig]`",
	"Hide Views": "`INPUT[toggle:hideViews]`",
	"Metadata": "`BUTTON[add-meta]`"
})))
}
```