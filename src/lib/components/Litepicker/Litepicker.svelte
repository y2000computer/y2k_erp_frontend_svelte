<script context="module" lang="ts">
	import LitepickerJs from 'litepicker';
	import type { HTMLInputAttributes } from 'svelte/elements';
	import type { ILPConfiguration } from 'litepicker/dist/types/interfaces.d';

	type LitepickerConfig = Partial<ILPConfiguration>;

	export interface LitepickerElement extends HTMLInputElement {
		litePickerInstance: LitepickerJs;
	}

	export interface LitepickerProps extends HTMLInputAttributes {
		className?: string;
		value: string;
		options: {
			format?: string | undefined;
		} & LitepickerConfig;
		onChange: (date: string) => void;
		ref?: LitepickerElement;
	}
</script>

<script lang="ts">
	import '@/assets/css/vendors/litepicker.css';
	import { onMount, tick, afterUpdate, createEventDispatcher } from 'svelte';
	import { setValue, init, reInit } from './litepicker';
	import { FormInput } from '$lib/components/Form';

	let className: LitepickerProps['className'] = undefined;
	let value: LitepickerProps['value'];
	let options: LitepickerProps['options'] = {};
	let ref: LitepickerProps['ref'] = undefined;

	export { className as class, value, options, ref };

	const dispatch = createEventDispatcher();

	const onChange = (newValue: string) => {
		value = newValue;
		dispatch('change', newValue);
	};

	const handleChange = (e: Event) => {
		onChange((e.target as HTMLInputElement).value);
	};

	let litepickerRef: LitepickerElement;
	let tempValue = value;

	afterUpdate(() => {
		if (tempValue !== value && litepickerRef.litePickerInstance !== undefined) {
			reInit(litepickerRef, {
				options,
				value,
				onChange
			});
			tempValue = value;
		}
	});

	onMount(async () => {
		if (litepickerRef) {
			ref = litepickerRef;

			setValue({
				options,
				value,
				onChange
			});

			await tick();

			init(litepickerRef, {
				options,
				value,
				onChange
			});
		}
	});
</script>

<FormInput
	{...$$props}
	type="text"
	{value}
	{className}
	on:change={handleChange}
	bind:ref={litepickerRef}
/>
