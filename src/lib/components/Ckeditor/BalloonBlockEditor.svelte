<script lang="ts">
	import '@/assets/css/vendors/ckeditor.css';
	import BalloonBlockEditor from '@ckeditor/ckeditor5-build-balloon-block';
	import { onMount, createEventDispatcher } from 'svelte';
	import Component from '$lib/components/Component';
	import { init, type CkeditorProps, type CkeditorElement } from './ckeditor';

	let as: CkeditorProps['as'] = 'div';
	let value: CkeditorProps['value'];
	let config: CkeditorProps['config'] = {};
	let disabled: CkeditorProps['disabled'] = false;
	let ref: CkeditorProps['ref'] = undefined;

	export { as, value, config, disabled, ref };

	const dispatch = createEventDispatcher();

	const onChange = (newValue) => {
		value = newValue;
	};

	const onFocus = (evt, editor) => {
		dispatch('focus', { evt, editor });
	};

	const onBlur = (evt, editor) => {
		dispatch('blur', { evt, editor });
	};

	const onReady = (editor) => {
		dispatch('ready', { editor });
	};

	let editorRef: CkeditorElement;
	let cacheData = '';

	onMount(() => {
		if (editorRef) {
			ref = editorRef;

			init(editorRef, BalloonBlockEditor, {
				props: { value, onChange, onFocus, onBlur, onReady, config, disabled },
				cacheData
			});
		}
	});
</script>

<Component {...$$props} {as} {value} bind:ref={editorRef} />
