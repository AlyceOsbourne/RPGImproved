const set = new Set()
const callout_classes = "s-t no-i clean table-wide table-clean txt-c txt-s"

const config_options = {
    "Add Meta": "\`BUTTON[add-meta]\`",
    "File Classes": "\`INPUT[inlineListSuggester(optionQuery(\"types\"), useLinks(false), showcase):fileClass]\`",
    "Meta Classes": "\`INPUT[inlineListSuggester(optionQuery(\"types\"), useLinks(false), showcase):metaClass]\`",
    "Hide Meta": "\`INPUT[toggle:hideMeta]\`",
    "Hide Views": "\`INPUT[toggle:hideViews]\`",
    "Hide Extra Views": "\`INPUT[toggle:hideExtraViews]\`",
    "Hide Config": "\`INPUT[toggle:hideConfig]\`",
}

const showConfig = async () => {

 dv.paragraph(`
\`\`\`meta-bind-button
label: +
hidden: true
class: ""
tooltip: ""
id: "add-meta"
style: default
actions:
  - type: command
    command: metadata-menu:open_fields_modal
\`\`\`
> [!info|${callout_classes} no-table-header]- Config
> ${dv.markdownTable(["", ""], dv.array(Object.entries(config_options))).split('\n').map(line => `> ${line}`).join('\n')}
`)
}



const showView = view => {
dv.paragraph(`
> [!info| ${callout_classes}]- ${dv.page(view)["viewTitle"] ?? view}
> \`\`\`meta-bind-embed
> [[${view}]]
> \`\`\`
`)
}

const contentCheck = name => {
    const note = dv.page(name);
    if (!note) return false; 
    const tfile = app.vault.getAbstractFileByPath(note.file.path);
    if (!tfile) return false; 
    const fileCache = app.metadataCache.getFileCache(tfile);
    if (!fileCache || !fileCache.sections) return false;
    return fileCache.sections.length === 1 && fileCache.sections[0].type === "yaml";
}

const renderTree = v => {
		let page;
		try {
			page = dv.page(v)
			const ext = dv.array(page["extends"]) ?? [];
			ext.map(renderTree)
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
		showView(v);
}


const doRender = (attr) => {
	let views = dv.current()[attr] ?? [];
	if (!Array.isArray(views)) {
	  views = [views];
	}
	views.forEach(renderTree);
}

const render = () => {
	if (!dv.current()["hideConfig"] ?? false) {
		showConfig()
	}
	for (let [key, value] of Object.entries({
	    fileClass: !dv.current().hideViews ?? false,
	    metaClass: !dv.current().hideExtraViews ?? false
    })) {
		if (value){
			doRender(key)
		}
	}
}

render();