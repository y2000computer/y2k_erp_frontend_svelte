<script context="module" lang="ts">
	import type { TinySliderInstance, TinySliderSettings } from 'tiny-slider/src/tiny-slider';
	import type { HTMLAttributes } from 'svelte/elements';

	export interface TinySliderElement extends HTMLDivElement {
		tns?: TinySliderInstance;
	}

	export interface TinySliderProps extends HTMLAttributes<HTMLDivElement> {
		className?: string;
		options?: TinySliderSettings;
		ref?: TinySliderElement;
	}
</script>

<script lang="ts">
	import '@/assets/css/vendors/tiny-slider.css';
	import { onMount, afterUpdate } from 'svelte';
	import { twMerge } from 'tailwind-merge';
	import { init, reInit } from './tiny-slider';

	let className: TinySliderProps['className'] = undefined;
	let options: TinySliderProps['options'] = {};
	let ref: TinySliderProps['ref'] = undefined;

	export { className as class, options, ref };

	let sliderRef: TinySliderElement;

	afterUpdate(() => {
		if (sliderRef.tns !== undefined) {
			reInit(sliderRef);
		}
	});

	onMount(() => {
		if (sliderRef) {
			ref = sliderRef;
			init(sliderRef, { options });
		}
	});
</script>

<div {...$$props} class={twMerge(['tiny-slider', className])} bind:this={sliderRef}>
	<slot />
</div>
