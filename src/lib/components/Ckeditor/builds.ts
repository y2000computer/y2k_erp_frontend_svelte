import {
	Autoformat,
	BalloonEditor as BalloonEditorBase,
	BlockQuote,
	BlockToolbar,
	Bold,
	ClassicEditor as ClassicEditorBase,
	DecoupledEditor as DecoupledEditorBase,
	Essentials,
	Heading,
	Indent,
	Italic,
	InlineEditor as InlineEditorBase,
	Link,
	List,
	Paragraph,
	PasteFromOffice,
	Table,
	TableToolbar,
	TextTransformation
} from 'ckeditor5';
import 'ckeditor5/ckeditor5.css';

const builtinPlugins = [
	Essentials,
	Autoformat,
	Bold,
	Italic,
	BlockQuote,
	Heading,
	Indent,
	Link,
	List,
	Paragraph,
	PasteFromOffice,
	Table,
	TableToolbar,
	TextTransformation
];

const defaultConfig = {
	toolbar: {
		items: [
			'undo',
			'redo',
			'|',
			'heading',
			'|',
			'bold',
			'italic',
			'link',
			'insertTable',
			'blockQuote',
			'|',
			'bulletedList',
			'numberedList',
			'outdent',
			'indent'
		]
	},
	table: {
		contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells']
	},
	language: 'en'
};

class ClassicEditor extends ClassicEditorBase {
	public static builtinPlugins = builtinPlugins;
	public static defaultConfig = defaultConfig;
}

class BalloonEditor extends BalloonEditorBase {
	public static builtinPlugins = builtinPlugins;
	public static defaultConfig = defaultConfig;
}

class BalloonBlockEditor extends BalloonEditorBase {
	public static builtinPlugins = [...builtinPlugins, BlockToolbar];
	public static defaultConfig = defaultConfig;
}

class InlineEditor extends InlineEditorBase {
	public static builtinPlugins = builtinPlugins;
	public static defaultConfig = defaultConfig;
}

class DocumentEditor extends DecoupledEditorBase {
	public static builtinPlugins = builtinPlugins;
	public static defaultConfig = defaultConfig;
}

export { BalloonBlockEditor, BalloonEditor, ClassicEditor, DocumentEditor, InlineEditor };
