<script lang="ts">
	import '@/assets/css/themes/tinker/top-nav.css';
	import logoUrl from '@/assets/images/logo.svg';
	import Lucide from '$lib/components/Lucide';
	import Breadcrumb from '$lib/components/Breadcrumb';
	import { FormInput } from '$lib/components/Form';
	import * as DropdownMenu from '$lib/components/DropdownMenu';
	import * as Popover from '$lib/components/Popover';
	import { page } from '$app/stores';
	import MobileMenu from '@/components/MobileMenu';
	import { menuStore, menu } from '@/stores/menu';
	import { type FormattedMenu, nestedMenu, linkTo } from './top-menu';
	import fakerData from '@/utils/faker';
	import { fade } from 'svelte/transition';
	import clsx from 'clsx';
	import _ from 'lodash';

	let formattedMenu: Array<FormattedMenu | 'divider'> = [];
	const topMenu = () => nestedMenu(menu('top-menu'), $page.url);

	$: {
		if ($menuStore || $page) {
			formattedMenu = topMenu();
		}
	}

	let searchDropdown = false;
	const showSearchDropdown = () => {
		searchDropdown = true;
	};
	const hideSearchDropdown = () => {
		searchDropdown = false;
	};
</script>

<div
	class={clsx([
		'tinker md:bg-black/[0.15] dark:bg-transparent relative py-5 px-5 md:py-0 sm:px-8 md:px-0',
		"after:content-[''] after:bg-gradient-to-b after:from-theme-1 after:to-theme-2 dark:after:from-darkmode-800 dark:after:to-darkmode-800 after:fixed after:inset-0 after:z-[-2]"
	])}
>
	<MobileMenu />
	<!-- BEGIN: Top Bar -->
	<div
		class="relative z-[51] -mx-3 mt-12 mb-10 h-[70px] border-b border-white/[0.08] px-4 sm:-mx-8 sm:px-8 md:mx-0 md:mt-0 md:mb-8 md:px-6"
	>
		<div class="flex items-center h-full">
			<!-- BEGIN: Logo -->
			<a class="hidden -intro-x md:flex" href="#top">
				<img class="w-6" src={logoUrl} alt="Midone Tailwind HTML Admin Template" />
				<span class="ml-3 text-lg text-white"> Tinker </span>
			</a>
			<!-- END: Logo -->
			<!-- BEGIN: Breadcrumb -->
			<Breadcrumb
				light
				class="-intro-x mr-auto h-full border-white/[0.08] md:ml-10 md:border-l md:pl-10"
			>
				<Breadcrumb.Link to="/">Application</Breadcrumb.Link>
				<Breadcrumb.Link to="/" active={true}>Dashboard</Breadcrumb.Link>
			</Breadcrumb>
			<!-- END: Breadcrumb -->
			<!-- BEGIN: Search -->
			<div class="relative mr-3 intro-x sm:mr-6">
				<div class="hidden search sm:block">
					<FormInput
						type="text"
						class="w-56 rounded-full border-transparent bg-slate-200 pr-8 shadow-none transition-[width] duration-300 ease-in-out focus:w-72 focus:border-transparent dark:bg-darkmode-400/70"
						placeholder="Search..."
						on:focus={showSearchDropdown}
						on:blur={hideSearchDropdown}
					/>
					<Lucide
						icon="Search"
						class="absolute inset-y-0 right-0 w-5 h-5 my-auto mr-3 text-slate-600 dark:text-slate-500"
					/>
				</div>
				<a class="relative text-white/70 sm:hidden" href="#top">
					<Lucide icon="Search" class="w-5 h-5 dark:text-slate-500" />
				</a>
				{#if searchDropdown}
					<div
						class="absolute right-0 z-10 mt-[3px] w-[450px] p-5 box"
						transition:fade|local={{ duration: 300 }}
					>
						<div class="mb-2 font-medium">Pages</div>
						<div class="mb-5">
							<a href="#top" class="flex items-center">
								<div
									class="flex items-center justify-center w-8 h-8 rounded-full bg-success/20 dark:bg-success/10 text-success"
								>
									<Lucide icon="Inbox" class="w-4 h-4" />
								</div>
								<div class="ml-3">Mail Settings</div>
							</a>
							<a href="#top" class="flex items-center mt-2">
								<div
									class="flex items-center justify-center w-8 h-8 rounded-full bg-pending/10 text-pending"
								>
									<Lucide icon="Users" class="w-4 h-4" />
								</div>
								<div class="ml-3">Users & Permissions</div>
							</a>
							<a href="#top" class="flex items-center mt-2">
								<div
									class="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 dark:bg-primary/20 text-primary/80"
								>
									<Lucide icon="CreditCard" class="w-4 h-4" />
								</div>
								<div class="ml-3">Transactions Report</div>
							</a>
						</div>
						<div class="mb-2 font-medium">Users</div>
						<div class="mb-5">
							{#each _.take(fakerData, 4) as faker, fakerKey}
								<a href="#top" class="flex items-center mt-2">
									<div class="w-8 h-8 image-fit">
										<img
											alt="Midone Tailwind HTML Admin Template"
											class="rounded-full"
											src={faker.photos[0]}
										/>
									</div>
									<div class="ml-3">{faker.users[0].name}</div>
									<div class="w-48 ml-auto text-xs text-right truncate text-slate-500">
										{faker.users[0].email}
									</div>
								</a>
							{/each}
						</div>
						<div class="mb-2 font-medium">Products</div>
						{#each _.take(fakerData, 4) as faker, fakerKey}
							<a href="#top" class="flex items-center mt-2">
								<div class="w-8 h-8 image-fit">
									<img
										alt="Midone Tailwind HTML Admin Template"
										class="rounded-full"
										src={faker.images[0]}
									/>
								</div>
								<div class="ml-3">{faker.products[0].name}</div>
								<div class="w-48 ml-auto text-xs text-right truncate text-slate-500">
									{faker.products[0].category}
								</div>
							</a>
						{/each}
					</div>
				{/if}
			</div>
			<!-- END: Search -->
			<!-- BEGIN: Notifications -->
			<Popover.Root>
				<Popover.Trigger
					class="
						mr-4 intro-x sm:mr-6
						relative text-white/70 outline-none block
						before:content-[''] before:w-[8px] before:h-[8px] before:rounded-full before:absolute before:top-[-2px] before:right-0 before:bg-danger
					"
				>
					<Lucide icon="Bell" class="w-5 h-5 dark:text-slate-500" />
				</Popover.Trigger>
				<Popover.Content class="w-[280px] sm:w-[350px] p-5 mt-2 z-[99]">
					<div class="mb-5 font-medium">Notifications</div>
					{#each _.take(fakerData, 5) as faker, fakerKey}
						<div class={clsx(['cursor-pointer relative flex items-center', fakerKey && 'mt-5'])}>
							<div class="relative flex-none w-12 h-12 mr-1 image-fit">
								<img
									alt="Midone Tailwind HTML Admin Template"
									class="rounded-full"
									src={faker.photos[0]}
								/>
								<div
									class="absolute bottom-0 right-0 w-3 h-3 border-2 border-white rounded-full bg-success dark:border-darkmode-600"
								/>
							</div>
							<div class="ml-2 overflow-hidden">
								<div class="flex items-center">
									<a href="#top" class="mr-5 font-medium truncate">
										{faker.users[0].name}
									</a>
									<div class="ml-auto text-xs text-slate-400 whitespace-nowrap">
										{faker.times[0]}
									</div>
								</div>
								<div class="w-full truncate text-slate-500 mt-0.5">
									{faker.news[0].shortContent}
								</div>
							</div>
						</div>
					{/each}
				</Popover.Content>
			</Popover.Root>
			<!-- END: Notifications -->
			<!-- BEGIN: Account Menu -->
			<DropdownMenu.Root>
				<DropdownMenu.Trigger
					class="block w-8 h-8 overflow-hidden scale-110 rounded-full shadow-lg image-fit zoom-in intro-x"
				>
					<img alt="Midone Tailwind HTML Admin Template" src={fakerData[9].photos[0]} />
				</DropdownMenu.Trigger>
				<DropdownMenu.Content class="relative w-56 mt-px bg-black z-[99]">
					<div
						class="before:block before:absolute before:bg-primary/80 before:inset-0 before:rounded-md before:z-[-1] text-white"
					>
						<DropdownMenu.Label>
							<div class="font-normal">
								<div class="font-medium">{fakerData[0].users[0].name}</div>
								<div class="text-xs text-white/70 mt-0.5 dark:text-slate-500">
									{fakerData[0].jobs[0]}
								</div>
							</div>
						</DropdownMenu.Label>
						<DropdownMenu.Separator class="bg-white/[0.08]" />
						<DropdownMenu.Item class="hover:bg-white/5">
							<Lucide icon="User" class="w-4 h-4 mr-2" /> Profile
						</DropdownMenu.Item>
						<DropdownMenu.Item class="hover:bg-white/5">
							<Lucide icon="Pencil" class="w-4 h-4 mr-2" /> Add Account
						</DropdownMenu.Item>
						<DropdownMenu.Item class="hover:bg-white/5">
							<Lucide icon="Lock" class="w-4 h-4 mr-2" /> Reset Password
						</DropdownMenu.Item>
						<DropdownMenu.Item class="hover:bg-white/5">
							<Lucide icon="CircleHelp" class="w-4 h-4 mr-2" /> Help
						</DropdownMenu.Item>
						<DropdownMenu.Separator class="bg-white/[0.08]" />
						<DropdownMenu.Item class="hover:bg-white/5">
							<Lucide icon="ToggleRight" class="w-4 h-4 mr-2" /> Logout
						</DropdownMenu.Item>
					</div>
				</DropdownMenu.Content>
			</DropdownMenu.Root>
			<!-- END: Account Menu -->
			<!-- END: Account Menu -->
		</div>
	</div>
	<!-- END: Top Bar -->
	<!-- BEGIN: Top Menu -->
	<nav class="top-nav relative z-50 -mt-[3px] hidden translate-y-[50px] opacity-0 md:block">
		<ul class="flex h-[58px] flex-wrap px-6 xl:px-[50px]">
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
			'rounded-[30px] md:rounded-[35px_35px_0px_0px] min-w-0 min-h-screen max-w-full md:max-w-none bg-slate-100 flex-1 pb-10 px-4 md:px-6 relative mt-8 dark:bg-darkmode-700',
			"before:content-[''] before:w-full before:h-px before:block",
			"after:content-[''] after:z-[-1] after:rounded-[40px_40px_0px_0px] after:w-[97%] after:inset-y-0 after:absolute after:left-0 after:right-0 after:bg-white/10 after:-mt-4 after:mx-auto after:dark:bg-darkmode-400/50"
		])}
	>
		<slot />
	</div>
	<!-- END: Content -->
</div>
