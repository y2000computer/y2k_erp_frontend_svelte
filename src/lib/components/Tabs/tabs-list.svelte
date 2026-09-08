<script context="module" lang="ts">
	type Variant = 'tabs' | 'pills' | 'boxed-tabs' | 'link-tabs';

	export interface ListContext {
		variant?: Variant;
	}
</script>

<script lang="ts">
	import { setContext } from 'svelte';
	import { Tabs as TabsPrimitive } from 'bits-ui';
	import { cn } from '$lib/utils.js';

	type $$Props = TabsPrimitive.ListProps & {
		variant?: Variant;
	};

	let className: $$Props['class'] = undefined;
	let variant: $$Props['variant'] = 'tabs';

	export { className as class, variant };

	setContext<ListContext>('list', {
		variant: variant
	});
</script>

<TabsPrimitive.List
	class={cn(
		variant == 'tabs' && 'border-b border-slate-200 dark:border-darkmode-400',
		'w-full flex',
		className
	)}
	{...$$restProps}
>
	<slot />
</TabsPrimitive.List>
