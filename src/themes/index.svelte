<script lang="ts">
	import { page } from '$app/stores';
	import ThemeSwitcher from '@/components/ThemeSwitcher';
	import { themeStore, getTheme, setTheme, themes, type Themes } from '@/stores/theme';

	const theme = $page.url.searchParams.get('theme') as Themes['name'];
	const switchTheme = (theme: Themes['name']) => {
		setTheme(theme);
	};
	const getComponent = () => getTheme($themeStore.value).component;
	let Component = getComponent();

	$: {
		Component = getTheme($themeStore.value).component;
	}

	if (theme && themes.map((theme) => theme.name).includes(theme)) {
		switchTheme(theme);
	}
</script>

<ThemeSwitcher />
<svelte:component this={Component}>
	<slot></slot>
</svelte:component>
