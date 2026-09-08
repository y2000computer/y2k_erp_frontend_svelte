<script context="module" lang="ts">
	import { init } from './dropzone';
	import { twMerge } from 'tailwind-merge';
	import type { HTMLCanvasAttributes } from 'svelte/elements';
	import DropzoneJs, { type DropzoneOptions } from 'dropzone';

	export interface DropzoneElement extends HTMLDivElement {
		dropzone: DropzoneJs;
	}

	export interface DropzoneProps extends HTMLCanvasAttributes {
		className?: string;
		options: DropzoneOptions;
		ref?: DropzoneElement;
	}
</script>

<script lang="ts">
	import '@/assets/css/vendors/dropzone.css';
	import { onMount } from 'svelte';

	let className: DropzoneProps['className'] = undefined;
	let options: DropzoneProps['options'];
	let ref: DropzoneProps['ref'] = undefined;

	export { className as class, options, ref };

	let fileUploadRef: DropzoneElement;

	onMount(() => {
		ref = fileUploadRef;
		init(fileUploadRef, { options });
	});

	const computedClass = twMerge([
		'[&.dropzone]:border-2 [&.dropzone]:border-dashed dropzone [&.dropzone]:border-darkmode-200/60 [&.dropzone]:dark:bg-darkmode-600 [&.dropzone]:dark:border-white/5',
		className
	]);
</script>

<div {...$$props} bind:this={fileUploadRef} class={computedClass}>
	<div class="dz-message">
		<slot />
	</div>
</div>
