/**
 * @license Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see https://ckeditor.com/legal/ckeditor-oss-license
 */

CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here. For example:
	config.language = 'th';
	// config.uiColor = '#AADC6E';
	config.toolbar = [
		{ name: 'styles', items: [ 'Styles', 'Format', 'Font', 'FontSize' ] },
		{ name: 'clipboard', groups: [ 'clipboard', 'undo' ], items: [ 'Cut', 'Copy', 'Paste', 'Undo', 'Redo' ] },
		{ name: 'tools', items: [ 'Maximize'] },
		{ name: 'document', groups: [ 'mode', 'document', 'doctools' ], items: [ '-', 'Preview', 'Print', 'Source', '-'] },
		'/',
		{ name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ], items: [ 'Bold', 'Italic', 'Underline', 'Strike', 'RemoveFormat' ] },
		{ name: 'paragraph', groups: [ 'list', 'indent', 'blocks', 'align', 'bidi' ], items: [ 'NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', 'Blockquote', '-', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock', '-'] },
		{ name: 'colors', items: [ 'TextColor', 'BGColor' ] },
		{ name: 'links', items: [ 'Link', 'Unlink' ] },
		{ name: 'insert', items: [ 'Image', 'Iframe', 'HorizontalRule', 'Smiley'] },
		{ name: 'others', items: [ '-' ] }
	];
	//Use plugin
	config.extraPlugins = 'autogrow,image2';
	//กำหนดขนาดของกล่อง text box
	config.autoGrow_minHeight = 200;
	config.autoGrow_maxHeight = 700;
	config.autoGrow_bottomSpace = 50;

	config.filebrowserBrowseUrl = '/ckeditor/ckfinder/ckfinder.html',
	config.filebrowserUploadUrl ='/ckeditor/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Files'

};
