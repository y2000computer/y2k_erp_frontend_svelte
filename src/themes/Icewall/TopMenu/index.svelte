<script lang="ts">
	import '@/assets/css/themes/icewall/top-nav.css';
	import Lucide from '$lib/components/Lucide';
	import TopBar from '@/components/Themes/Icewall/TopBar';
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
		'icewall px-5 sm:px-8 py-5 relative',
		"after:content-[''] after:bg-gradient-to-b after:from-theme-1 after:to-theme-2 dark:after:from-darkmode-800 dark:after:to-darkmode-800 after:fixed after:inset-0 after:z-[-2]"
	])}
>
	<MobileMenu />
	<TopBar />
	<!-- BEGIN: Top Menu -->
	<nav
		class="top-nav relative z-50 -mt-2 hidden translate-y-[35px] opacity-0 md:block xl:-mt-[3px] xl:px-6 xl:pt-[12px]"
	>
		<ul class="flex xl:h-[50px] flex-wrap">
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
			'wrapper relative',
			"before:content-[''] before:z-[-1] before:translate-y-[35px] before:opacity-0 before:w-[95%] before:rounded-[1.3rem] before:bg-transparent xl:before:bg-white/10 before:h-full before:-mt-4 before:absolute before:mx-auto before:inset-x-0 before:dark:bg-darkmode-400/50"
		])}
	>
		<div
			class={clsx([
				'wrapper-box bg-transparent xl:bg-theme-1 flex rounded-[1.3rem] md:pt-[80px] -mt-[7px] md:-mt-[67px] xl:-mt-[62px] dark:bg-transparent xl:dark:bg-darkmode-400 translate-y-[35px]',
				'before:hidden xl:before:block before:absolute before:inset-0 before:bg-black/[0.15] before:rounded-[1.3rem] before:z-[-1]'
			])}
		>
			<!-- BEGIN: Content -->
			<div
				class="md:max-w-auto min-h-screen min-w-0 max-w-full flex-1 rounded-[1.3rem] bg-slate-100 px-4 pb-10 shadow-sm before:block before:h-px before:w-full before:content-[''] dark:bg-darkmode-700 md:px-[22px]"
			>
				<slot />
			</div>
			<!-- END: Content -->
		</div>
	</div>
	<!-- END: Content -->
</div>
