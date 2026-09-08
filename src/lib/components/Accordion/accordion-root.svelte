<script lang="ts">
	import { Accordion as AccordionPrimitive } from 'bits-ui';
	import { cn } from '$lib/utils.js';

	type $$Props = AccordionPrimitive.Props<boolean> & {
		variant?: 'default' | 'boxed';
	};

	let className: $$Props['class'] = undefined;
	let variant: $$Props['variant'] = 'default';
	export { className as class, variant };
</script>

<AccordionPrimitive.Root
	class={cn(variant == 'boxed' && 'group boxed', className)}
	{...$$restProps}
>
	<slot />
</AccordionPrimitive.Root>
