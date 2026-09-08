import FormSwitch from './FormSwitch.svelte';
import Input from './Input.svelte';
import Label from './Label.svelte';

const FormSwitchComponent = Object.assign(FormSwitch, {
	Input: Input,
	Label: Label
});

export default FormSwitchComponent;
