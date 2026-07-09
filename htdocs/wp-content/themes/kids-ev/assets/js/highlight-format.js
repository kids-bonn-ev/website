/**
 * Rich-Text-Format kids/highlight: farbig markierte Wörter in Headlines
 * mit Unterstreich-Balken (Port von .hero__hl--gruen/orange/blau).
 */
(function (richText, element, blockEditor) {
	var el = element.createElement;

	var variants = [
		{ name: 'kids/highlight-gruen', title: 'Highlight Grün', className: 'hero__hl--gruen' },
		{ name: 'kids/highlight-orange', title: 'Highlight Orange', className: 'hero__hl--orange' },
		{ name: 'kids/highlight-blau', title: 'Highlight Blau', className: 'hero__hl--blau' },
	];

	variants.forEach(function (variant) {
		richText.registerFormatType(variant.name, {
			title: variant.title,
			tagName: 'span',
			className: variant.className,
			edit: function (props) {
				return el(blockEditor.RichTextToolbarButton, {
					title: variant.title,
					icon: 'admin-appearance',
					isActive: props.isActive,
					onClick: function () {
						props.onChange(richText.toggleFormat(props.value, { type: variant.name }));
					},
				});
			},
		});
	});
})(window.wp.richText, window.wp.element, window.wp.blockEditor);
