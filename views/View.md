~~~dataviewjs
const renderViews = dv.current().renderViews ?? true;

if (renderViews) {
	let views = dv.current().fileClass ?? [];
	if (!Array.isArray(views)) {
	  views = [views];
	}
	
	views.forEach(view => {
	  let markdown = `\`\`\`meta-bind-embed\n[[${view}]]\n\`\`\``;
	  dv.paragraph(markdown);
	});
}
~~~