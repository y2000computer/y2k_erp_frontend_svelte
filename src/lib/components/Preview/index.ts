import Preview from './Preview.svelte';
import Panel from './Panel.svelte';
import Highlight from './Highlight.svelte';

const PreviewComponent = Object.assign(Preview, {
	Preview: Preview,
	Panel: Panel,
	Highlight: Highlight
});

export default PreviewComponent;
