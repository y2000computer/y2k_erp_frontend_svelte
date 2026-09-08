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
	let options: ChartOptions<'line'>;

	$: data = {
		labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
		datasets: [
			{
				label: '# of Votes',
				data: [0, 200, 250, 200, 700, 550, 650, 1050, 950, 1100, 900, 1200],
				borderWidth: 2,
				borderColor: $colorSchemeStore.value ? getColor('primary', 0.8) : '',
				backgroundColor: 'transparent',
				pointBorderColor: 'transparent',
				tension: 0.4
			},
			{
				label: '# of Votes',
				data: [0, 300, 400, 560, 320, 600, 720, 850, 690, 805, 1200, 1010],
				borderWidth: 2,
				borderDash: [2, 2],
				borderColor: $darkModeStore.value ? getColor('darkmode.100') : getColor('slate.400'),
				backgroundColor: 'transparent',
				pointBorderColor: 'transparent',
				tension: 0.4
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
