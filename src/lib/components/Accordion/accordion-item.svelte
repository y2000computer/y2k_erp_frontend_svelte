<script lang="ts">
	import { Accordion as AccordionPrimitive } from 'bits-ui';
	import { cn } from '$lib/utils.js';

	type $$Props = AccordionPrimitive.ItemProps;

	let className: $$Props['class'] = undefined;
	export let value: $$Props['value'];
	export { className as class };
</script>

<AccordionPrimitive.Item
	{value}
	class={cn(
		'group-[.boxed]:border group-[.boxed]:border-slate-200/60 group-[.boxed]:dark:border-darkmode-400 group-[.boxed]:px-4 group-[.boxed]:mt-3 group-[.boxed]:first:mt-0 group-[.boxed]:last:mb-0',
		'first:-mt-4 last:-mb-4 [&:not(:last-child)]:border-b [&:not(:last-child)]:border-slate-200/60 [&:not(:last-child)]:dark:border-darkmode-400',
		className
	)}
	{...$$restProps}
>
	<slot />
</AccordionPrimitive.Item>
