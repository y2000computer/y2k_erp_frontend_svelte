<script lang="ts">
	import { type ChartData, type ChartOptions } from 'chart.js/auto';
	import { darkModeStore } from '@/stores/dark-mode';
	import Chart from '$lib/components/Chart';
	import { getColor } from '@/utils/colors';
	import { randomNumbers } from '@/utils/helper';

	let width: number | undefined = undefined;
	let height: number | undefined = undefined;
	let className: string | undefined = undefined;

	export { width, height, className as class };

	let data: ChartData;
	let options: ChartOptions<'bar'>;

	$: data = {
		labels: [...Array(16).keys()],
		datasets: [
			{
				label: 'Html Template',
				barPercentage: 0.5,
				barThickness: 6,
				maxBarThickness: 8,
				minBarLength: 2,
				backgroundColor: getColor('primary', 0.8),
				data: randomNumbers(-100, 100, 16)
			},
			{
				label: 'VueJs Template',
				barPercentage: 0.5,
				barThickness: 6,
				maxBarThickness: 8,
				minBarLength: 2,
				backgroundColor: $darkModeStore.value ? getColor('darkmode.200') : getColor('slate.300'),
				data: randomNumbers(-100, 100, 16)
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
				stacked: true,
				ticks: {
					font: {
						size: 12
					},
					color: getColor('slate.500', 0.8)
				},
				grid: {
					display: false,
					drawBorder: false
				}
			},
			y: {
				stacked: true,
				ticks: {
					font: {
						size: 12
					},
					color: getColor('slate.500', 0.8),
					callback: function (value) {
						return '$' + value;
					}
				},
				grid: {
					color: $darkModeStore.value ? getColor('slate.500', 0.3) : getColor('slate.300'),
					borderDash: [2, 2],
					drawBorder: false
				}
			}
		}
	};
</script>

<Chart type="bar" {width} {height} {data} {options} class={className} />
