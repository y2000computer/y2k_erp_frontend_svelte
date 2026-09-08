<script context="module" lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { twMerge } from 'tailwind-merge';

	export interface ProgressProps extends HTMLAttributes<HTMLDivElement> {
		className?: string;
	}
</script>

<script lang="ts">
	let className: ProgressProps['className'] = undefined;

	export { className as class };
</script>

<div {...$$props} class={twMerge(['w-full h-2 bg-slate-200 rounded dark:bg-black/20', className])}>
	<slot />
</div>
