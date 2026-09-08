<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn } from '$lib/utils.js';

	type $$Props = HTMLAttributes<HTMLDivElement>;

	let className: $$Props['class'] = undefined;
	export { className as class };
</script>

<div
	class={cn(
		'flex flex-col space-y-2 text-center sm:text-left border-b border-slate-200/60 dark:border-darkmode-400',
		className
	)}
	{...$$restProps}
>
	<slot />
</div>
