<script context="module" lang="ts">
	export interface FullCalendarElement extends HTMLDivElement {
		fullCalendarInstance?: Calendar;
	}

	export interface FullCalendarProps extends HTMLAttributes<HTMLDivElement> {
		className?: string;
		options: CalendarOptions;
		ref?: FullCalendarElement;
	}
</script>

<script lang="ts">
	import { onMount } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';
	import { Calendar, type CalendarOptions } from '@fullcalendar/core';

	let className: FullCalendarProps['className'] = undefined;
	let options: FullCalendarProps['options'] = {};
	let ref: FullCalendarProps['ref'] = undefined;

	export { className as class, options, ref };

	let fullCalendarRef: FullCalendarElement;

	onMount(() => {
		if (fullCalendarRef) {
			ref = fullCalendarRef;

			const calendar = new Calendar(fullCalendarRef, options);
			calendar.render();

			fullCalendarRef.fullCalendarInstance = calendar;
		}
	});
</script>

<div {...$$props} class={className} bind:this={fullCalendarRef} />
