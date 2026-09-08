<script context="module" lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { init, reInit } from './notification';
	import Toastify, { type Options } from 'toastify-js';

	export interface NotificationElement extends HTMLDivElement {
		toastify?: ReturnType<typeof Toastify>;
		showToast?: () => void;
		hideToast?: () => void;
	}

	export interface NotificationProps extends HTMLAttributes<HTMLDivElement> {
		className?: string;
		options?: Options;
		ref?: NotificationElement;
	}
</script>

<script lang="ts">
	import '@/assets/css/vendors/toastify.css';
	import { onMount, afterUpdate } from 'svelte';
	import clsx from 'clsx';

	let className: NotificationProps['className'] = undefined;
	let options: NotificationProps['options'] = {};
	let ref: NotificationProps['ref'] = undefined;

	export { className as class, options, ref };

	let toastifyRef: NotificationElement;

	afterUpdate(() => {
		reInit(toastifyRef);
	});

	onMount(() => {
		if (toastifyRef) {
			ref = toastifyRef;

			init(toastifyRef, {
				options
			});
		}
	});
</script>

<div
	{...$$props}
	class={clsx([
		'hidden py-5 pl-5 bg-white border rounded-lg shadow-xl pr-14 border-slate-200/60 dark:bg-darkmode-600 dark:text-slate-300 dark:border-darkmode-600',
		className
	])}
	bind:this={toastifyRef}
>
	<slot />
</div>
