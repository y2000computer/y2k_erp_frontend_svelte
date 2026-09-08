<script context="module" lang="ts">
	import _ from 'lodash';
	import { setValue, init, updateValue } from './tom-select';
	import type { TomSettings, RecursivePartial } from 'tom-select/src/types/index';
	import TomSelectPlugin from 'tom-select';
	import type { HTMLSelectAttributes } from 'svelte/elements';

	export interface TomSelectElement extends HTMLSelectElement {
		TomSelect?: TomSelectPlugin;
	}

	export interface TomSelectProps extends HTMLSelectAttributes {
		className?: string;
		value: string | string[];
		options?: RecursivePartial<TomSettings>;
		onChange?: (value: string | string[]) => void;
		onOptionAdd?: (value: string | string[]) => void;
		ref?: TomSelectElement;
	}
</script>

<script lang="ts">
	import '@/assets/css/vendors/tom-select.css';
	import { onMount, tick, afterUpdate, createEventDispatcher } from 'svelte';
	import { twMerge } from 'tailwind-merge';

	let className: TomSelectProps['className'] = undefined;
	let value: TomSelectProps['value'];
	let options: TomSelectProps['options'] = {};
	let ref: TomSelectProps['ref'] = undefined;

	export { className as class, value, options, ref };

	const dispatch = createEventDispatcher();

	const onChange = (newValue) => {
		value = newValue;
		dispatch('change', newValue);
	};

	const onOptionAdd = (value) => {
		dispatch('optionAdd', value);
	};

	const handleChange = (e: Event) => {
		onChange((e.target as HTMLSelectElement).value);
	};

	let tomSelectRef: TomSelectElement;

	// Compute all default options
	let computedOptions: TomSelectProps['options'] = {
		...options,
		plugins: {
			dropdown_input: {},
			...options?.plugins
		}
	};

	$: {
		if (Array.isArray(value)) {
			computedOptions = {
				persist: false,
				create: true,
				onDelete: function (values: string[]) {
					return confirm(
						values.length > 1
							? 'Are you sure you want to remove these ' + values.length + ' items?'
							: 'Are you sure you want to remove "' + values[0] + '"?'
					);
				},
				...computedOptions,
				plugins: {
					remove_button: {
						title: 'Remove this item'
					},
					...computedOptions.plugins
				}
			};
		}
	}

	afterUpdate(async () => {
		if (tomSelectRef) {
			const clonedEl = document.querySelectorAll(
				`[data-id='${tomSelectRef.getAttribute('data-id')}'][data-initial-class]`
			)[0] as TomSelectElement;

			await tick();

			updateValue(tomSelectRef, clonedEl, value, { value, onOptionAdd, onChange }, computedOptions);
		}
	});

	onMount(async () => {
		if (tomSelectRef) {
			ref = tomSelectRef;

			// Unique attribute
			tomSelectRef.setAttribute('data-id', '_' + Math.random().toString(36).substr(2, 9));

			// Clone the select element to prevent tom select remove the original element
			const clonedEl = tomSelectRef.cloneNode(true) as TomSelectElement;

			// Save initial classnames
			const classNames = tomSelectRef?.getAttribute('class');
			classNames && clonedEl.setAttribute('data-initial-class', classNames);

			// Hide original element
			tomSelectRef?.parentNode && tomSelectRef?.parentNode.appendChild(clonedEl);
			tomSelectRef.setAttribute('hidden', 'true');

			// Initialize tom select
			setValue(clonedEl, { value });

			await tick();

			init(tomSelectRef, clonedEl, { value, onOptionAdd, onChange }, computedOptions);
		}
	});
</script>

<select
	{...$$props}
	{value}
	class={twMerge(['tom-select', className])}
	on:change={handleChange}
	bind:this={tomSelectRef}
>
	<slot />
</select>
