import FormCheck from './FormCheck.svelte';
import Input from './Input.svelte';
import Label from './Label.svelte';

const FormCheckComponent = Object.assign(FormCheck, {
	Input: Input,
	Label: Label
});

export default FormCheckComponent;
