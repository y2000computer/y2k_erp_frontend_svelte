<script lang="ts">
	import { type ChartData, type ChartOptions } from 'chart.js/auto';
	import { colorSchemeStore } from '@/stores/color-scheme';
	import Chart, { type ChartElement } from '$lib/components/Chart';
	import { getColor } from '@/utils/colors';
	import { onMount } from 'svelte';

	let width: number | undefined = undefined;
	let height: number | undefined = undefined;
	let className: string | undefined = undefined;

	export { width, height, className as class };

	let data: ChartData;
	let options: ChartOptions<'bar'>;
	let reportBarChartRef: ChartElement;
	let reportBarChartColor: string[];

	// Fake visitor data
	const reportBarChartData = new Array(40).fill(0).map((data, key) => {
		if (key % 3 == 0 || key % 5 == 0) {
			return Math.ceil(Math.random() * (0 - 20) + 20);
		} else {
			return Math.ceil(Math.random() * (0 - 7) + 7);
		}
	});

	// Fake visitor bar color
	$: reportBarChartColor = reportBarChartData.map((data) => {
		if (data >= 8 && data <= 14) {
			return $colorSchemeStore.value ? getColor('primary', 0.65) : '';
		} else if (data >= 15) {
			return $colorSchemeStore.value ? getColor('primary') : '';
		}

		return $colorSchemeStore.value ? getColor('primary', 0.35) : '';
	});

	$: data = {
		labels: reportBarChartData,
		datasets: [
			{
				label: 'Html Template',
				barPercentage: 0.5,
				barThickness: 6,
				maxBarThickness: 8,
				minBarLength: 2,
				data: reportBarChartData,
				backgroundColor: reportBarChartColor
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
		scales: {
			x: {
				ticks: {
					display: false
				},
				grid: {
					display: false
				}
			},
			y: {
				ticks: {
					display: false
				},
				grid: {
					display: false,
					drawBorder: false
				}
			}
		}
	};

	onMount(() => {
		setInterval(() => {
			if (reportBarChartRef) {
				const chartInstance = reportBarChartRef.instance;
				const chartConfig = chartInstance?.config;

				// Swap visitor data
				const newData = chartConfig?.data.datasets[0].data[0];

				if (newData) {
					chartConfig?.data.datasets[0].data.shift();
					chartConfig?.data.datasets[0].data.push(newData);
					chartInstance?.update();
				}

				// Swap visitor bar color
				if (Array.isArray(chartConfig?.data.datasets[0].backgroundColor)) {
					const newColor = chartConfig.data.datasets[0].backgroundColor[0];
					chartConfig.data.datasets[0].backgroundColor.shift();
					chartConfig.data.datasets[0].backgroundColor.push(newColor);
				}
				chartInstance?.update();
			}
		}, 1000);
	});
</script>

<Chart
	type="bar"
	bind:ref={reportBarChartRef}
	{width}
	{height}
	{data}
	{options}
	class={className}
/>
