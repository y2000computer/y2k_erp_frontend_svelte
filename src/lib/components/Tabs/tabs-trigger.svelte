<script lang="ts">
	import { getContext } from 'svelte';
	import { type ListContext } from './tabs-list.svelte';
	import { Tabs as TabsPrimitive } from 'bits-ui';
	import { cn } from '$lib/utils.js';

	type $$Props = TabsPrimitive.TriggerProps;
	type $$Events = TabsPrimitive.TriggerEvents;

	let className: $$Props['class'] = undefined;
	export let value: $$Props['value'];
	export { className as class };

	const list = getContext<ListContext>('list');
</script>

<TabsPrimitive.Trigger
	class={cn(
		'-mb-px cursor-pointer block appearance-none px-5 py-2.5 border border-transparent text-slate-700 dark:text-slate-400',
		'data-[state=active]:text-slate-800 data-[state=active]:dark:text-white',

		// Default
		list?.variant == 'tabs' && 'block border-transparent rounded-t-md dark:border-transparent',
		list?.variant == 'tabs' &&
			'data-[state=active]:bg-white data-[state=active]:border-slate-200 data-[state=active]:border-b-transparent data-[state=active]:font-medium data-[state=active]:dark:bg-transparent data-[state=active]:dark:border-t-darkmode-400 data-[state=active]:dark:border-b-darkmode-600 data-[state=active]:dark:border-x-darkmode-400',
		list?.variant == 'tabs' &&
			'hover:bg-slate-100 dark:hover:bg-darkmode-400 dark:hover:border-transparent',

		// Pills
		list?.variant == 'pills' && 'rounded-md border-0',
		list?.variant == 'pills' &&
			'data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:font-medium',

		// Boxed tabs
		list?.variant == 'boxed-tabs' && 'shadow-[0px_3px_20px_#0000000b] rounded-md',
		list?.variant == 'boxed-tabs' &&
			'data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:font-medium',

		// Link tabs
		list?.variant == 'link-tabs' && 'border-b-2 border-transparent dark:border-transparent',
		list?.variant == 'link-tabs' &&
			'data-[state=active]:border-b-primary data-[state=active]:font-medium data-[state=active]:dark:border-b-primary',

		className
	)}
	{value}
	{...$$restProps}
	on:click
>
	<slot />
</TabsPrimitive.Trigger>
