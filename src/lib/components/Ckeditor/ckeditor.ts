import { type SvelteComponent } from 'svelte';

export interface CkeditorElement extends HTMLDivElement {
	CKEditor: any;
}

export type CkeditorProps = {
	as?: string | typeof SvelteComponent;
	value: string;
	config?: any;
	disabled?: boolean;
	onChange: (data: any) => void;
	onFocus?: (evt: any, editor: any) => void;
	onBlur?: (evt: any, editor: any) => void;
	onReady?: (editor: any) => void;
	ref?: CkeditorElement;
};

const init = async (
	el: CkeditorElement,
	editorBuild: any,
	{
		props,
		cacheData
	}: {
		props: CkeditorProps;
		cacheData: string;
	}
) => {
	// Initial data
	cacheData = props.value;
	props.config.initialData = props.value;

	// Init CKEditor
	const editor = await editorBuild.create(el, props.config);

	// Attach CKEditor instance
	el.CKEditor = editor;

	// Set initial disabled state
	props.disabled && editor.enableReadOnlyMode('ckeditor');

	// Set on change event
	editor.model.document.on('change:data', () => {
		const data = editor.getData();
		cacheData = data;
		props.onChange(data);
	});

	// Set on focus event
	editor.editing.view.document.on('focus', (evt: any) => {
		if (props.onFocus) {
			props.onFocus(evt, editor);
		}
	});

	// Set on blur event
	editor.editing.view.document.on('blur', (evt: any) => {
		if (props.onBlur) {
			props.onBlur(evt, editor);
		}
	});

	// Set on ready event
	if (props.onReady) {
		props.onReady(editor);
	}
};

// Watch model change
const updateData = (
	el: CkeditorElement,
	{
		props,
		cacheData
	}: {
		props: CkeditorProps;
		cacheData: string;
	}
) => {
	if (cacheData !== props.value) {
		el.CKEditor.setData(props.value);
	}
};

export { init, updateData };
