<script lang="ts">
	import Lucide from '$lib/components/Lucide';
	import * as Sheet from '$lib/components/Sheet';
	import { darkModeStore, setDarkMode } from '@/stores/dark-mode';
	import { colorSchemeStore, setColorScheme, type ColorSchemes } from '@/stores/color-scheme';
	import { themeStore, setTheme, setLayout, type Themes } from '@/stores/theme';
	import clsx from 'clsx';

	let themeSwitcherSlideover = false;

	const themes: Array<Themes['name']> = ['rubick', 'icewall', 'tinker', 'enigma'];
	const layouts: Array<Themes['layout']> = ['side-menu', 'simple-menu', 'top-menu'];
	const colorSchemes: Array<ColorSchemes> = ['default', 'theme-1', 'theme-2', 'theme-3', 'theme-4'];

	const themeImages = import.meta.glob<{
		default: string;
	}>('/src/assets/images/themes/*.{jpg,jpeg,png,svg}', { eager: true });
	const layoutImages = import.meta.glob<{
		default: string;
	}>('/src/assets/images/layouts/*.{jpg,jpeg,png,svg}', { eager: true });

	const setDarkModeClass = () => {
		const el = document.querySelectorAll('html')[0];
		$darkModeStore.value ? el.classList.add('dark') : el.classList.remove('dark');
	};

	const switchDarkMode = (darkMode: boolean) => {
		setDarkMode(darkMode);
		setDarkModeClass();
	};

	const setColorSchemeClass = () => {
		const el = document.querySelectorAll('html')[0];
		el.setAttribute('class', $colorSchemeStore.value);
		$darkModeStore.value && el.classList.add('dark');
	};

	const switchColorScheme = (colorScheme: ColorSchemes) => {
		setColorScheme(colorScheme);
		setColorSchemeClass();
	};

	const switchTheme = (theme: Themes['name']) => {
		setTheme(theme);
	};
	const switchLayout = (layout: Themes['layout']) => {
		setLayout(layout);
	};

	setDarkModeClass();
	setColorSchemeClass();
</script>

<div>
	<Sheet.Root bind:open={themeSwitcherSlideover}>
		<Sheet.Content
			class="w-72 sm:w-[460px] sm:max-w-full rounded-[0.75rem_0_0_0.75rem/1.1rem_0_0_1.1rem] overflow-y-auto"
		>
			<div class="flex flex-col">
				<div class="px-8 pt-6 pb-8">
					<div class="text-base font-medium">Templates</div>
					<div class="text-slate-500 mt-0.5">Choose your templates</div>
					<div class="grid grid-cols-2 mt-5 gap-y-3.5 gap-x-5">
						{#each themes as theme, themeKey}
							<div>
								<a
									href="/"
									on:click={(e) => {
										e.preventDefault();
										switchTheme(theme);
									}}
									class={clsx([
										'block h-28 cursor-pointer bg-slate-50 box p-1',
										$themeStore.value.name == theme && 'border-2 border-theme-1/60'
									])}
								>
									<div class="w-full h-full overflow-hidden rounded-md">
										{#if themeImages[`/src/assets/images/themes/${theme}.png`] !== undefined}
											<img
												alt=""
												class="w-full h-full"
												src={themeImages[`/src/assets/images/themes/${theme}.png`].default}
											/>
										{/if}
									</div>
								</a>
								<div class="mt-2.5 capitalize text-center text-xs">
									{theme}
								</div>
							</div>
						{/each}
					</div>
				</div>
				<div class="border-b border-dashed"></div>
				<div class="px-8 pt-6 pb-8">
					<div class="text-base font-medium">Layouts</div>
					<div class="text-slate-500 mt-0.5">Choose your layout</div>
					<div class="mt-5 grid grid-cols-3 gap-x-5 gap-y-3.5">
						{#each layouts as layout, layoutKey}
							<div>
								<a
									href="/"
									on:click={(e) => {
										e.preventDefault();
										switchLayout(layout);
									}}
									class={clsx([
										'block h-24 cursor-pointer bg-slate-50 box p-1',
										$themeStore.value.layout == layout && 'border-2 border-theme-1/60'
									])}
								>
									<div class="w-full h-full overflow-hidden rounded-md">
										{#if layoutImages[`/src/assets/images/layouts/${layout}.png`] !== undefined}
											<img
												alt=""
												class="w-full h-full"
												src={layoutImages['/src/assets/images/layouts/' + layout + '.png'].default}
											/>
										{/if}
									</div>
								</a>
								<div class="mt-2.5 capitalize text-center text-xs">
									{layout.replace('-', ' ')}
								</div>
							</div>
						{/each}
					</div>
				</div>
				<div class="border-b border-dashed"></div>
				<div class="px-8 pt-6 pb-8">
					<div class="text-base font-medium">Color Schemes</div>
					<div class="text-slate-500 mt-0.5">Choose your color schemes</div>
					<div class="grid grid-cols-2 sm:grid-cols-4 gap-x-4 gap-y-3.5 mt-5">
						{#each colorSchemes as colorScheme, colorKey}
							<div>
								<a
									href="/"
									on:click={(e) => {
										e.preventDefault();
										switchColorScheme(colorScheme);
									}}
									class={clsx([
										'block h-12 cursor-pointer bg-slate-50 box rounded-full p-1 border-slate-300/80',
										$colorSchemeStore.value == colorScheme && 'border-2 border-theme-1/60'
									])}
								>
									<div class="h-full overflow-hidden rounded-full">
										<div class="flex items-center h-full gap-1 -mx-2">
											<div class={clsx(['w-1/2 h-[140%] bg-theme-1 rotate-12', colorScheme])}></div>
											<div class={clsx(['w-1/2 h-[140%] bg-theme-2 rotate-12', colorScheme])}></div>
										</div>
									</div>
								</a>
							</div>
						{/each}
					</div>
				</div>
				<div class="border-b border-dashed"></div>
				<div class="px-8 pt-6 pb-8">
					<div class="text-base font-medium">Appearance</div>
					<div class="mt-0.5 text-slate-500">Choose your appearance</div>
					<div class="mt-5 grid grid-cols-2 gap-3.5">
						<div>
							<a
								href="/"
								on:click={(e) => {
									e.preventDefault();
									switchDarkMode(false);
								}}
								class={clsx([
									'h-12 cursor-pointer bg-slate-50 box p-1 border-slate-300/80 block',
									'[&.active]:border-2 [&.active]:border-theme-1/60',
									!$darkModeStore.value ? 'active' : ''
								])}
							>
								<div class="h-full overflow-hidden rounded-md bg-slate-200"></div>
							</a>
							<div class="mt-2.5 text-center text-xs capitalize">Light</div>
						</div>
						<div>
							<a
								href="/"
								on:click={(e) => {
									e.preventDefault();
									switchDarkMode(true);
								}}
								class={clsx([
									'h-12 cursor-pointer bg-slate-50 box p-1 border-slate-300/80 block',
									'[&.active]:border-2 [&.active]:border-theme-1/60',
									$darkModeStore.value ? 'active' : ''
								])}
							>
								<div class="h-full overflow-hidden rounded-md bg-slate-900"></div>
							</a>
							<div class="mt-2.5 text-center text-xs capitalize">Dark</div>
						</div>
					</div>
				</div>
			</div>
		</Sheet.Content>
	</Sheet.Root>
	<a
		href="/"
		on:click={(e) => {
			e.preventDefault();
			themeSwitcherSlideover = true;
		}}
		class="fixed bottom-0 right-0 z-50 flex items-center justify-center mb-5 mr-5 text-white rounded-full shadow-lg cursor-pointer w-14 h-14 bg-theme-1"
	>
		<Lucide class="w-5 h-5 animate-spin" icon="Settings" />
	</a>
</div>
