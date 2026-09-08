<script lang="ts">
	import '@/assets/css/themes/icewall/side-nav.css';
	import Lucide from '$lib/components/Lucide';
	import TopBar from '@/components/Themes/Icewall/TopBar';
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
		'icewall px-5 sm:px-8 py-5 relative',
		"after:content-[''] after:bg-gradient-to-b after:from-theme-1 after:to-theme-2 dark:after:from-darkmode-800 dark:after:to-darkmode-800 after:fixed after:inset-0 after:z-[-2]"
	])}
>
	<MobileMenu />
	<TopBar />
	<div
		class={clsx([
			'wrapper relative',
			"before:content-[''] before:z-[-1] before:translate-y-[35px] before:opacity-0 before:w-[95%] before:rounded-[1.3rem] before:bg-white/10 before:h-full before:-mt-4 before:absolute before:mx-auto before:inset-x-0 before:dark:bg-darkmode-400/50"
		])}
	>
		<div
			class={clsx([
				'wrapper-box bg-gradient-to-b from-theme-1 to-theme-2 flex rounded-[1.3rem] -mt-[7px] md:mt-0 dark:from-darkmode-400 dark:to-darkmode-400 translate-y-[35px]',
				'before:block before:absolute before:inset-0 before:bg-black/[0.15] before:rounded-[1.3rem] before:z-[-1]'
			])}
		>
			<!-- BEGIN: Side Menu -->
			<nav
				class="side-nav side-nav--simple hidden md:block w-[100px] px-5 pt-8 pb-16 overflow-x-hidden"
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
													class={clsx([
														subMenu.active ? 'side-menu side-menu--active' : 'side-menu'
													])}
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
			<!-- END: Side Menu -->
			<!-- BEGIN: Content -->
			<div
				class="md:max-w-auto min-h-screen min-w-0 max-w-full flex-1 rounded-[1.3rem] bg-slate-100 px-4 pb-10 shadow-sm before:block before:h-px before:w-full before:content-[''] dark:bg-darkmode-700 md:px-[22px]"
			>
				<slot />
			</div>
			<!-- END: Content -->
		</div>
	</div>
</div>
