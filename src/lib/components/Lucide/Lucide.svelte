<script context="module" lang="ts">
	import type { SVGAttributes } from 'svelte/elements';
	import * as lucideIcons from 'lucide-svelte';
	import { twMerge } from 'tailwind-merge';

	export const { icons } = lucideIcons;

	export interface LucideProps extends SVGAttributes<SVGSVGElement> {
		className?: string;
		icon: keyof typeof icons;
	}
</script>

<script lang="ts">
	let className: LucideProps['className'] = undefined;
	let icon: LucideProps['icon'];

	export { className as class, icon };
</script>

<svelte:component this={lucideIcons[icon]} class={twMerge(['stroke-1.5 w-5 h-5', className])} />
