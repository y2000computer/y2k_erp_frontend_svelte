import Progress from './Progress.svelte';
import Bar from './Bar.svelte';

const ProgressComponent = Object.assign(Progress, {
	Bar: Bar
});

export default ProgressComponent;
