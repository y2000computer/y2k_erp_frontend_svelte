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
		labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
		datasets: [
			{
				label: 'Html Template',
				barPercentage: 0.5,
				barThickness: 6,
				maxBarThickness: 8,
				minBarLength: 2,
				data: [0, 200, 250, 200, 500, 450, 850, 1050],
				backgroundColor: $colorSchemeStore.value ? getColor('primary') : ''
			},
			{
				label: 'VueJs Template',
				barPercentage: 0.5,
				barThickness: 6,
				maxBarThickness: 8,
				minBarLength: 2,
				data: [0, 300, 400, 560, 320, 600, 720, 850],
				backgroundColor: $darkModeStore.value ? getColor('darkmode.200') : getColor('slate.300')
			}
		]
	};

	$: options = {
		indexAxis: 'y',
		maintainAspectRatio: false,
		plugins: {
			legend: {
				labels: {
					color: getColor('slate.500', 0.8)
				}
			}
		},
		scales: {
			x: {
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
					display: false,
					drawBorder: false
				}
			},
			y: {
				ticks: {
					font: {
						size: 12
					},
					color: getColor('slate.500', 0.8)
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
