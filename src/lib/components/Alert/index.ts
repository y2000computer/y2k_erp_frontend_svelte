import Alert from './Alert.svelte';
import DismissButton from './DismissButton.svelte';

const AlertComponent = Object.assign(Alert, {
	DismissButton: DismissButton
});

export default AlertComponent;
