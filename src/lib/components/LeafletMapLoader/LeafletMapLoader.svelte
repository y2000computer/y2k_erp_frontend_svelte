<script context="module" lang="ts">
	import { onMount } from 'svelte';
	import { twMerge } from 'tailwind-merge';
	import { initializeMap, type MapConfig, type LeafletElement } from './leaflet-map-loader';

	export type Init = (
		callback: (mapConfig: MapConfig) => ReturnType<typeof initializeMap> | undefined
	) => void;

	export interface LeafletMapLoaderProps {
		className?: string;
		init: Init;
		darkMode?: boolean;
	}
</script>

<script lang="ts">
	import '@/assets/css/vendors/leaflet.css';

	let className: LeafletMapLoaderProps['className'] = undefined;
	let init: LeafletMapLoaderProps['init'] = () => {};
	let darkMode: LeafletMapLoaderProps['darkMode'] = undefined;

	export { className as class, init, darkMode };

	let mapRef: LeafletElement;

	onMount(() => {
		init((mapConfig) => {
			if (mapRef) {
				return initializeMap(mapRef, mapConfig);
			}
		});
	});
</script>

<div
	class={twMerge([
		!darkMode && '[&_.leaflet-tile-pane]:saturate-[.3]',
		darkMode &&
			'[&_.leaflet-tile-pane]:grayscale [&_.leaflet-tile-pane]:invert [&_.leaflet-tile-pane]:brightness-90 [&_.leaflet-tile-pane]:hue-rotate-15',
		className
	])}
>
	<div bind:this={mapRef} class="w-full h-full" />
</div>
