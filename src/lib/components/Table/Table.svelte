<script context="module" lang="ts">
	import type { HTMLTableAttributes } from 'svelte/elements';
	import { twMerge } from 'tailwind-merge';

	export type TableContext = {
		dark: boolean;
		bordered: boolean;
		hover: boolean;
		striped: boolean;
		sm: boolean;
	};

	interface TableProps extends HTMLTableAttributes {
		className?: string;
		dark?: boolean;
		bordered?: boolean;
		hover?: boolean;
		striped?: boolean;
		sm?: boolean;
	}
</script>

<script lang="ts">
	import { setContext } from 'svelte';

	let className: TableProps['className'] = undefined;
	let dark: TableProps['dark'] = false;
	let bordered: TableProps['bordered'] = false;
	let hover: TableProps['hover'] = false;
	let striped: TableProps['striped'] = false;
	let sm: TableProps['sm'] = false;

	export { className as class, dark, bordered, hover, striped, sm };

	setContext<TableContext>('table', {
		dark,
		bordered,
		hover,
		striped,
		sm
	});
</script>

<table
	{...$$props}
	class={twMerge(['w-full text-left', dark && 'bg-dark text-white dark:bg-black/30', className])}
>
	<slot />
</table>
