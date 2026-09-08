<script lang="ts">
	import { type ChartData, type ChartOptions } from 'chart.js/auto';
	import { colorSchemeStore } from '@/stores/color-scheme';
	import Chart from '$lib/components/Chart';
	import { getColor } from '@/utils/colors';

	let width: number | undefined = undefined;
	let height: number | undefined = undefined;
	let lineColor: string | undefined = undefined;
	let className: string | undefined = undefined;

	export { width, height, lineColor, className as class };

	let data: ChartData;
	let options: ChartOptions<'line'>;

	$: data = {
		labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
		datasets: [
			{
				label: '# of Votes',
				data: [0, 200, 250, 200, 500, 450, 850, 1050, 950, 1100, 900, 1200],
				borderWidth: 2,
				borderDash: [2, 2],
				borderColor:
					$colorSchemeStore.value && lineColor?.length ? lineColor : getColor('slate.300'),
				backgroundColor: 'transparent',
				pointBorderColor: 'transparent'
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
					display: false,
					drawBorder: false
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
</script>

<Chart type="line" {width} {height} {data} {options} class={className} />
