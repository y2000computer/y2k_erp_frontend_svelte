<script lang="ts">
	import { type ChartData, type ChartOptions } from 'chart.js/auto';
	import { colorSchemeStore } from '@/stores/color-scheme';
	import { darkModeStore } from '@/stores/dark-mode';
	import Chart from '$lib/components/Chart';
	import { getColor } from '@/utils/colors';

	let width: number | undefined = undefined;
	let height: number | undefined = undefined;
	let className: string | undefined = undefined;

	export { width, height, className as class };

	const chartData = [15, 10, 65];
	const chartColors = () => [
		getColor('pending', 0.9),
		getColor('warning', 0.9),
		getColor('primary', 0.9)
	];

	let data: ChartData;
	let options: ChartOptions<'doughnut'>;

	$: data = {
		labels: ['Yellow', 'Dark'],
		datasets: [
			{
				data: chartData,
				backgroundColor: $colorSchemeStore.value ? chartColors() : '',
				hoverBackgroundColor: $colorSchemeStore.value ? chartColors() : '',
				borderWidth: 2,
				borderColor: $darkModeStore.value ? getColor('darkmode.700') : getColor('white')
			}
		]
	};

	$: options = {
		maintainAspectRatio: false,
		plugins: {
			legend: {
				display: false
			}
		},
		cutout: '83%'
	};
</script>

<Chart type="doughnut" {width} {height} {data} {options} class={className} />
