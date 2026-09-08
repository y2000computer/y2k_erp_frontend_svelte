import { writable } from 'svelte/store';
import { type Themes } from '@/stores/theme';
import { icons } from '$lib/components/Lucide/Lucide.svelte';
import sideMenu from '@/main/side-menu';
import simpleMenu from '@/main/simple-menu';
import topMenu from '@/main/top-menu';

export interface Menu {
	icon: keyof typeof icons;
	title: string;
	badge?: number;
	pathname?: string;
	subMenu?: Menu[];
	ignore?: boolean;
}

export interface MenuState {
	menu: Array<Menu | 'divider'>;
}

export const menuStore = writable<MenuState>({
	menu: []
});

export const menu = (layout: Themes['layout']) => {
	if (layout == 'top-menu') {
		return topMenu;
	}

	if (layout == 'simple-menu') {
		return simpleMenu;
	}

	return sideMenu;
};
