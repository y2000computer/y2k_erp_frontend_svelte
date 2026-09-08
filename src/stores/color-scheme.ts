import { writable } from 'svelte/store';

const colorSchemes = ['default', 'theme-1', 'theme-2', 'theme-3', 'theme-4'] as const;

export type ColorSchemes = (typeof colorSchemes)[number];

interface ColorSchemeState {
	value: ColorSchemes;
}

const getColorScheme = () => {
	const colorScheme = localStorage.getItem('colorScheme');
	return colorSchemes.filter((item) => {
		return item === colorScheme;
	})[0];
};

export const colorSchemeStore = writable<ColorSchemeState>({
	value: localStorage.getItem('colorScheme') === null ? 'default' : getColorScheme()
});

export const colorScheme = () => {
	if (localStorage.getItem('colorScheme') === null) {
		localStorage.setItem('colorScheme', 'default');
	}

	return colorSchemeStore;
};

export const setColorScheme = (colorScheme: ColorSchemes) => {
	localStorage.setItem('colorScheme', colorScheme);
	colorSchemeStore.set({
		value: colorScheme
	});
};
