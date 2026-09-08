<script lang="ts">
	import '@/assets/css/themes/enigma/top-nav.css';
	import Lucide from '$lib/components/Lucide';
	import TopBar from '@/components/Themes/Enigma/TopBar';
	import { page } from '$app/stores';
	import MobileMenu from '@/components/MobileMenu';
	import { menuStore, menu } from '@/stores/menu';
	import { type FormattedMenu, nestedMenu, linkTo } from './top-menu';
	import clsx from 'clsx';
	import _ from 'lodash';

	let formattedMenu: Array<FormattedMenu | 'divider'> = [];
	const topMenu = () => nestedMenu(menu('top-menu'), $page.url);

	$: {
		if ($menuStore || $page) {
			formattedMenu = topMenu();
		}
	}
</script>

<div
	class={clsx([
		'enigma py-5 px-5 md:py-0 sm:px-8 md:px-0',
		"before:content-[''] before:bg-gradient-to-b before:from-theme-1 before:to-theme-2 dark:before:from-darkmode-800 dark:before:to-darkmode-800 md:before:bg-none md:bg-slate-200 md:dark:bg-darkmode-800 before:fixed before:inset-0 before:z-[-1]"
	])}
>
	<MobileMenu />
	<TopBar layout="top-menu" />
	<!-- BEGIN: Top Menu -->
	<nav class="relative z-50 hidden pt-32 -mt-4 top-nav md:block">
		<ul class="flex flex-wrap px-6 xl:px-[50px]">
			{#each formattedMenu as menu, menuKey}
				{#if menu !== 'divider'}
					<li>
						<a
							href={menu.subMenu ? '#top' : menu.pathname}
							class={clsx([menu.active ? 'top-menu top-menu--active' : 'top-menu'])}
							on:click={(event) => {
								event.preventDefault();
								linkTo(menu);
							}}
						>
							<div class="top-menu__icon">
								<Lucide icon={menu.icon} />
							</div>
							<div class="top-menu__title">
								{menu.title}
								{#if menu.subMenu}
									<Lucide class="top-menu__sub-icon" icon="ChevronDown" />
								{/if}
							</div>
						</a>
						{#if menu.subMenu}
							<ul class={clsx([menu.activeDropdown && 'side-menu__sub-open'])}>
								{#each menu.subMenu as subMenu, subMenuKey}
									<li>
										<a
											href={subMenu.subMenu ? '#top' : subMenu.pathname}
											class="top-menu"
											on:click={(event) => {
												event.preventDefault();
												linkTo(subMenu);
											}}
										>
											<div class="top-menu__icon">
												<Lucide icon={subMenu.icon} />
											</div>
											<div class="top-menu__title">
												{subMenu.title}
												{#if subMenu.subMenu}
													<Lucide class="top-menu__sub-icon" icon="ChevronDown" />
												{/if}
											</div>
										</a>
										{#if subMenu.subMenu}
											<ul class={clsx([subMenu.activeDropdown && 'top-menu__sub-open'])}>
												{#each subMenu.subMenu as lastSubMenu, lastSubMenuKey}
													<li>
														<a
															href={lastSubMenu.subMenu ? '#top' : lastSubMenu.pathname}
															class="top-menu"
															on:click={(event) => {
																event.preventDefault();
																linkTo(lastSubMenu);
															}}
														>
															<div class="top-menu__icon">
																<Lucide icon={lastSubMenu.icon} />
															</div>
															<div class="top-menu__title">
																{lastSubMenu.title}
															</div>
														</a>
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
	<!-- END: Top Menu -->
	<!-- BEGIN: Content -->
	<div
		class={clsx([
			'max-w-full md:max-w-none rounded-[30px] md:rounded-[35px_35px_0_0] px-4 md:px-[22px] min-w-0 min-h-screen bg-slate-100 flex-1 pb-10 mt-5 relative dark:bg-darkmode-700',
			"before:content-[''] before:w-full before:h-px before:block"
		])}
	>
		<slot />
	</div>
	<!-- END: Content -->
</div>
