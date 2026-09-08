<script lang="ts">
	import '@/assets/css/themes/rubick/side-nav.css';
	import logoUrl from '@/assets/images/logo.svg';
	import Lucide from '$lib/components/Lucide';
	import TopBar from '@/components/Themes/Rubick/TopBar';
	import MobileMenu from '@/components/MobileMenu';
	import { page } from '$app/stores';
	import { menuStore, menu } from '@/stores/menu';
	import { type FormattedMenu, linkTo, nestedMenu } from './simple-menu';
	import Tippy from '$lib/components/Tippy';
	import { slide } from 'svelte/transition';
	import clsx from 'clsx';

	let formattedMenu: Array<FormattedMenu | 'divider'> = [];
	const simpleMenu = () => nestedMenu(menu('simple-menu'), $page.url);

	$: {
		if ($menuStore || $page) {
			formattedMenu = simpleMenu();
		}
	}
</script>

<div
	class={clsx([
		'rubick px-5 sm:px-8 py-5',
		"before:content-[''] before:bg-gradient-to-b before:from-theme-1 before:to-theme-2 dark:before:from-darkmode-800 dark:before:to-darkmode-800 before:fixed before:inset-0 before:z-[-1]"
	])}
>
	<MobileMenu />
	<div class="flex mt-[4.7rem] md:mt-0">
		<!-- BEGIN: Simple Menu -->
		<nav class="side-nav side-nav--simple hidden w-[85px] overflow-x-hidden pr-5 pb-16 md:block">
			<a href="/" class="flex items-center pt-4 pl-5 intro-x">
				<img alt="Midone Tailwind HTML Admin Template" class="w-6" src={logoUrl} />
			</a>
			<div class="my-6 side-nav__divider" />
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
								href={menu.subMenu ? 'javascript:;' : menu.pathname}
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
												menu.activeDropdown && 'transform rotate-180'
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
												href={subMenu.subMenu ? 'javascript:;' : subMenu.pathname}
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
																href={lastSubMenu.subMenu ? 'javascript:;' : lastSubMenu.pathname}
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
		<!-- END: Simple Menu -->
		<!-- BEGIN: Content -->
		<div
			class="rounded-[30px] min-w-0 min-h-screen flex-1 pb-10 bg-slate-100 dark:bg-darkmode-700 px-4 md:px-[22px] max-w-full md:max-w-auto before:content-[''] before:w-full before:h-px before:block"
		>
			<TopBar />
			<slot />
		</div>
		<!-- END: Content -->
	</div>
</div>
