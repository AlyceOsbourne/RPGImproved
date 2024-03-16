---
children: ["[[Type View]]"]
---

~~~dataviewjs
const renderViews = !dv.current().hideViews ?? false;
const show_view = view => dv.paragraph(`
\`\`\`meta-bind-embed
[[${view}]]
\`\`\`
`)
const set = new Set()

function contentCheck(name) {
    const note = dv.page(name);
    if (!note) return false; // Early return if note is not found
    const tfile = app.vault.getAbstractFileByPath(note.file.path);
    if (!tfile) return false; // Check if the file was successfully retrieved
    const fileCache = app.metadataCache.getFileCache(tfile);
    if (!fileCache || !fileCache.sections) return false; // Check if cache and sections exist
    return fileCache.sections.length === 1 && fileCache.sections[0].type === "yaml";
}

const render_tree = v => {
		let page;
		try {
			page = dv.page(v)
			const ext = dv.array(page["extends"]) ?? [];
			ext.map(render_tree)
		}
		catch(err) {
			// console.log(err)
		}
		if (contentCheck(v)) {
			return
		}
		if (set.has(v)){
				return
		}
			
		set.add(v);
		show_view(v);
}

if (renderViews) {
	let views = dv.current().fileClass ?? [];
	if (!Array.isArray(views)) {
	  views = [views];
	}
	views.forEach(render_tree);
}
~~~
