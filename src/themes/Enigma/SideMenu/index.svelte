<script lang="ts">
	import '@/assets/css/themes/enigma/side-nav.css';
	import MobileMenu from '@/components/MobileMenu';
	import TopBar from '@/components/Themes/Enigma/TopBar';
	import Lucide from '$lib/components/Lucide';
	import { page } from '$app/stores';
	import { menuStore, menu } from '@/stores/menu';
	import { type FormattedMenu, linkTo, nestedMenu } from './side-menu';
	import Tippy from '$lib/components/Tippy';
	import { slide } from 'svelte/transition';
	import { onMount } from 'svelte';
	import clsx from 'clsx';

	let windowWidth = window.innerWidth;

	let formattedMenu: Array<FormattedMenu | 'divider'> = [];
	const sideMenu = () => nestedMenu(menu('side-menu'), $page.url);

	$: {
		if ($menuStore || $page) {
			formattedMenu = sideMenu();
		}
	}

	onMount(() => {
		window.addEventListener('resize', () => {
			windowWidth = window.innerWidth;
		});
	});
</script>

<div
	class={clsx([
		'enigma py-5 px-5 md:py-0 sm:px-8 md:px-0',
		"before:content-[''] before:bg-gradient-to-b before:from-theme-1 before:to-theme-2 dark:before:from-darkmode-800 dark:before:to-darkmode-800 md:before:bg-none md:bg-slate-200 md:dark:bg-darkmode-800 before:fixed before:inset-0 before:z-[-1]"
	])}
>
	<MobileMenu />
	<TopBar layout="side-menu" />
	<div class="flex overflow-hidden">
		<!-- BEGIN: Side Menu -->
		<nav
			class="side-nav z-50 -mt-4 hidden w-[105px] overflow-x-hidden px-5 pb-16 pt-32 md:block xl:w-[260px]"
		>
			<ul>
				{#each formattedMenu as menu, menuKey}
					{#if menu == 'divider'}
						<li class="my-6 side-nav__divider"></li>
					{:else}
						<li>
							<Tippy
								as="a"
								content={menu.title}
								options={{
									placement: 'right'
								}}
								disable={windowWidth > 1260}
								href={menu.subMenu ? '#' : menu.pathname}
								on:click={(e) => {
									e.preventDefault();
									linkTo(menu);
									formattedMenu = [...formattedMenu];
								}}
								class={clsx([menu.active ? 'side-menu side-menu--active' : 'side-menu'])}
							>
								<div class="side-menu__icon">
									<Lucide icon={menu.icon} />
								</div>
								<div class="side-menu__title">
									{menu.title}
									{#if menu.subMenu}
										<div
											class={clsx([
												'side-menu__sub-icon',
												{ 'transform rotate-180': menu.activeDropdown }
											])}
										>
											<Lucide icon="ChevronDown" />
										</div>
									{/if}
								</div>
							</Tippy>
							{#if menu.subMenu && menu.activeDropdown}
								<ul
									class={clsx([menu.activeDropdown && 'side-menu__sub-open'])}
									transition:slide|local={{ duration: 300 }}
								>
									{#each menu.subMenu as subMenu, subMenuKey}
										<li>
											<Tippy
												as="a"
												content={subMenu.title}
												options={{
													placement: 'right'
												}}
												disable={windowWidth > 1260}
												href={subMenu.subMenu ? '#' : subMenu.pathname}
												class={clsx([subMenu.active ? 'side-menu side-menu--active' : 'side-menu'])}
												on:click={(e) => {
													e.preventDefault();
													linkTo(subMenu);
													formattedMenu = [...formattedMenu];
												}}
											>
												<div class="side-menu__icon">
													<Lucide icon={subMenu.icon} />
												</div>
												<div class="side-menu__title">
													{subMenu.title}
													{#if subMenu.subMenu}
														<div
															class={clsx([
																'side-menu__sub-icon',
																subMenu.activeDropdown && 'transform rotate-180'
															])}
														>
															<Lucide icon="ChevronDown" />
														</div>
													{/if}
												</div>
											</Tippy>
											{#if subMenu.subMenu && subMenu.activeDropdown}
												<ul
													class={clsx([subMenu.activeDropdown && 'side-menu__sub-open'])}
													transition:slide|local={{ duration: 300 }}
												>
													{#each subMenu.subMenu as lastSubMenu, lastSubMenuKey}
														<li>
															<Tippy
																as="a"
																content={lastSubMenu.title}
																options={{
																	placement: 'right'
																}}
																disable={windowWidth > 1260}
																href={lastSubMenu.subMenu ? '#' : lastSubMenu.pathname}
																class={clsx([
																	lastSubMenu.active ? 'side-menu side-menu--active' : 'side-menu'
																])}
																on:click={(e) => {
																	e.preventDefault();
																	linkTo(lastSubMenu);
																	formattedMenu = [...formattedMenu];
																}}
															>
																<div class="side-menu__icon">
																	<Lucide icon={lastSubMenu.icon} />
																</div>
																<div class="side-menu__title">
																	{lastSubMenu.title}
																	{#if lastSubMenu.subMenu}
																		<div
																			class={clsx([
																				'side-menu__sub-icon',
																				lastSubMenu.activeDropdown && 'transform rotate-180'
																			])}
																		>
																			<Lucide icon="ChevronDown" />
																		</div>
																	{/if}
																</div>
															</Tippy>
														</li>
													{/each}
												</ul>
											{/if}
										</li>
									{/each}
								</ul>
							{/if}
						</li>
					{/if}
				{/each}
			</ul>
		</nav>
		<!-- END: Side Menu -->
		<!-- BEGIN: Content -->
		<div
			class={clsx([
				'max-w-full md:max-w-none rounded-[30px] md:rounded-none px-4 md:px-[22px] min-w-0 min-h-screen bg-slate-100 flex-1 md:pt-20 pb-10 mt-5 md:mt-1 relative dark:bg-darkmode-700',
				"before:content-[''] before:w-full before:h-px before:block"
			])}
		>
			<slot />
		</div>
		<!-- END: Content -->
	</div>
</div>
