import { toRGB } from './helper';
import tailwindColors from 'tailwindcss/colors';
import { flatten } from 'flat';

const colors = {
	...tailwindColors,
	primary: 'rgb(var(--color-primary) / <alpha-value>)',
	secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
	success: 'rgb(var(--color-success) / <alpha-value>)',
	info: 'rgb(var(--color-info) / <alpha-value>)',
	warning: 'rgb(var(--color-warning) / <alpha-value>)',
	pending: 'rgb(var(--color-pending) / <alpha-value>)',
	danger: 'rgb(var(--color-danger) / <alpha-value>)',
	light: 'rgb(var(--color-light) / <alpha-value>)',
	dark: 'rgb(var(--color-dark) / <alpha-value>)',
	darkmode: Object.fromEntries(
		[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map((shade) => [
			shade,
			`rgb(var(--color-darkmode-${shade}) / <alpha-value>)`
		])
	)
};

/** Get a value from Tailwind colors by flatten index, if not available the value will be taken from the CSS variable with (--color-) prefix. */
const getColor = (colorKey: string, opacity: number = 1) => {
	const flattenColors = flatten<
		typeof colors,
		{
			[key: string]: string;
		}
	>(colors);

	if (flattenColors[colorKey].search('var') === -1) {
		return `rgb(${toRGB(flattenColors[colorKey])} / ${opacity})`;
	} else {
		const cssVariableName = `--color-${flattenColors[colorKey].split('--color-')[1].split(')')[0]}`;
		return `rgb(${getComputedStyle(document.body).getPropertyValue(cssVariableName)} / ${opacity})`;
	}
};

export { getColor };
