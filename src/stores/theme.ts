import { writable } from 'svelte/store';
import RubickSideMenu from '@/themes/Rubick/SideMenu/index.svelte';
import RubickSimpleMenu from '@/themes/Rubick/SimpleMenu/index.svelte';
import RubickTopMenu from '@/themes/Rubick/TopMenu/index.svelte';
import IcewallSideMenu from '@/themes/Icewall/SideMenu/index.svelte';
import IcewallSimpleMenu from '@/themes/Icewall/SimpleMenu/index.svelte';
import IcewallTopMenu from '@/themes/Icewall/TopMenu/index.svelte';
import TinkerSideMenu from '@/themes/Tinker/SideMenu/index.svelte';
import TinkerSimpleMenu from '@/themes/Tinker/SimpleMenu/index.svelte';
import TinkerTopMenu from '@/themes/Tinker/TopMenu/index.svelte';
import EnigmaSideMenu from '@/themes/Enigma/SideMenu/index.svelte';
import EnigmaSimpleMenu from '@/themes/Enigma/SimpleMenu/index.svelte';
import EnigmaTopMenu from '@/themes/Enigma/TopMenu/index.svelte';

export const themes = [
	{
		name: 'rubick',
		layout: 'side-menu',
		component: RubickSideMenu
	},
	{
		name: 'rubick',
		layout: 'simple-menu',
		component: RubickSimpleMenu
	},
	{
		name: 'rubick',
		layout: 'top-menu',
		component: RubickTopMenu
	},
	{
		name: 'icewall',
		layout: 'side-menu',
		component: IcewallSideMenu
	},
	{
		name: 'icewall',
		layout: 'simple-menu',
		component: IcewallSimpleMenu
	},
	{
		name: 'icewall',
		layout: 'top-menu',
		component: IcewallTopMenu
	},
	{
		name: 'tinker',
		layout: 'side-menu',
		component: TinkerSideMenu
	},
	{
		name: 'tinker',
		layout: 'simple-menu',
		component: TinkerSimpleMenu
	},
	{
		name: 'tinker',
		layout: 'top-menu',
		component: TinkerTopMenu
	},
	{
		name: 'enigma',
		layout: 'side-menu',
		component: EnigmaSideMenu
	},
	{
		name: 'enigma',
		layout: 'simple-menu',
		component: EnigmaSimpleMenu
	},
	{
		name: 'enigma',
		layout: 'top-menu',
		component: EnigmaTopMenu
	}
] as const;

export type Themes = (typeof themes)[number];

interface ThemeState {
	value: {
		name: Themes['name'];
		layout: Themes['layout'];
	};
}

export const getTheme = (search?: { name: Themes['name']; layout: Themes['layout'] }) => {
	const searchValues =
		search === undefined
			? {
					name: localStorage.getItem('theme'),
					layout: localStorage.getItem('layout')
				}
			: search;
	return (
		themes.filter((item) => {
			return item.name === searchValues.name && item.layout === searchValues.layout;
		})[0] || themes[0]
	);
};

export const themeStore = writable<ThemeState>({
	value: {
		name: localStorage.getItem('theme') === null ? themes[0].name : getTheme().name,
		layout: localStorage.getItem('layout') === null ? themes[0].layout : getTheme().layout
	}
});

export const theme = () => {
	if (localStorage.getItem('theme') === null) {
		localStorage.setItem('theme', 'rubick');
	}

	if (localStorage.getItem('layout') === null) {
		localStorage.setItem('layout', 'side-menu');
	}

	return themeStore;
};

export const setTheme = (theme: Themes['name']) => {
	localStorage.setItem('theme', theme);
	themeStore.update((store) => {
		return {
			value: {
				name: theme,
				layout: store.value.layout
			}
		};
	});
};

export const setLayout = (layout: Themes['layout']) => {
	localStorage.setItem('layout', layout);
	themeStore.update((store) => {
		return {
			value: {
				name: store.value.name,
				layout: layout
			}
		};
	});
};
