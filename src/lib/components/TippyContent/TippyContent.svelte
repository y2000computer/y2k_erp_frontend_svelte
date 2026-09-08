<script context="module" lang="ts">
	import '@/assets/css/vendors/tippy.css';
	import type { HTMLAttributes } from 'svelte/elements';
	import tippy, {
		type PopperElement,
		type Props,
		roundArrow,
		animateFill as animateFillPlugin
	} from 'tippy.js';

	interface TippyContentProps extends HTMLAttributes<HTMLDivElement> {
		className?: string;
		to: string;
		ref?: PopperElement;
		options?: Partial<Props>;
	}
</script>

<script lang="ts">
	import { onMount } from 'svelte';

	let className: TippyContentProps['className'] = undefined;
	let to: TippyContentProps['to'];
	let ref: TippyContentProps['ref'] = undefined;
	let options: TippyContentProps['options'] = undefined;

	export { className as class, to, ref, options };

	let tippyRef: PopperElement;

	const init = (el: PopperElement, props: TippyContentProps) => {
		tippy(`[data-tooltip="${props.to}"]`, {
			plugins: [animateFillPlugin],
			content: el,
			allowHTML: true,
			arrow: roundArrow,
			popperOptions: {
				modifiers: [
					{
						name: 'preventOverflow',
						options: {
							rootBoundary: 'viewport'
						}
					}
				]
			},
			animateFill: false,
			animation: 'shift-away',
			theme: 'light',
			trigger: 'click',
			...props.options
		});
	};

	onMount(() => {
		if (tippyRef) {
			ref = tippyRef;
			init(tippyRef, { to, options });
		}
	});
</script>

<div {...$$props} bind:this={tippyRef} class={className}>
	<slot />
</div>
