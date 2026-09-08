<script lang="ts">
	import { Draggable as FullCalendarDraggable } from '@fullcalendar/interaction';
	import { onMount } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	interface DraggableProps extends HTMLAttributes<HTMLDivElement> {
		options: FullCalendarDraggable['settings'];
	}

	export let options: DraggableProps['options'];

	let draggableRef: HTMLDivElement;

	const init = () => {
		if (draggableRef) {
			new FullCalendarDraggable(draggableRef, options);
		}
	};

	onMount(() => {
		init();
	});
</script>

<div {...$$props} bind:this={draggableRef}>
	<slot />
</div>
