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

	let data: ChartData;
	let options: ChartOptions<'bar'>;

	$: data = {
		labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
		datasets: [
			{
				label: 'Html Template',
				barThickness: 8,
				maxBarThickness: 6,
				data: [60, 150, 30, 200, 180, 50, 180, 120, 230, 180, 250, 270],
				backgroundColor: $colorSchemeStore.value ? getColor('primary') : ''
			},
			{
				label: 'VueJs Template',
				barThickness: 8,
				maxBarThickness: 6,
				data: [50, 135, 40, 180, 190, 60, 150, 90, 250, 170, 240, 250],
				backgroundColor: $darkModeStore.value ? getColor('darkmode.400') : getColor('slate.300')
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
					font: {
						size: 11
					},
					color: getColor('slate.500', 0.8)
				},
				grid: {
					display: false,
					drawBorder: false
				}
			},
			y: {
				ticks: {
					display: false
				},
				grid: {
					color: $darkModeStore.value ? getColor('darkmode.300', 0.8) : getColor('slate.300'),
					borderDash: [2, 2],
					drawBorder: false
				}
			}
		}
	};
</script>

<Chart type="bar" {width} {height} {data} {options} class={className} />
