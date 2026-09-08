<script context="module" lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { twMerge } from 'tailwind-merge';

	export interface BarProps extends HTMLAttributes<HTMLDivElement> {
		className?: string;
	}
</script>

<script lang="ts">
	let className: BarProps['className'] = undefined;

	export { className as class };
</script>

<div
	{...$$props}
	class={twMerge([
		'bg-primary h-full rounded text-xs text-white flex justify-center items-center',
		className
	])}
>
	<slot />
</div>
