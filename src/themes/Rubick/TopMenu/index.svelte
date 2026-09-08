<script lang="ts">
	import '@/assets/css/themes/rubick/top-nav.css';
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
		'rubick px-5 sm:px-8 py-5',
		"before:content-[''] before:bg-gradient-to-b before:from-theme-1 before:to-theme-2 dark:before:from-darkmode-800 dark:before:to-darkmode-800 before:fixed before:inset-0 before:z-[-1]"
	])}
>
	<MobileMenu />
	<!-- BEGIN: Top Bar -->
	<div
		class="border-b border-white/[0.08] mt-[2.2rem] md:-mt-5 -mx-3 sm:-mx-8 px-3 sm:px-8 pt-3 md:pt-0 mb-10"
	>
		<div class="flex items-center h-[70px] z-[51] relative">
			<!-- BEGIN: Logo -->
			<a href="/" class="hidden -intro-x md:flex">
				<img alt="Midone Tailwind HTML Admin Template" class="w-6" src={logoUrl} />
				<span class="ml-3 text-lg text-white"> Rubick </span>
			</a>
			<!-- END: Logo -->
			<!-- BEGIN: Breadcrumb -->
			<Breadcrumb
				light
				class="h-full md:ml-10 md:pl-10 md:border-l border-white/[0.08] mr-auto -intro-x"
			>
				<Breadcrumb.Link to="/">Application</Breadcrumb.Link>
				<Breadcrumb.Link to="/" active={true}>Dashboard</Breadcrumb.Link>
			</Breadcrumb>
			<!-- END: Breadcrumb -->
			<!-- BEGIN: Search -->
			<div class="relative mr-3 intro-x sm:mr-6">
				<div class="hidden sm:block">
					<FormInput
						type="text"
						class="border-transparent w-56 shadow-none rounded-full bg-slate-200 pr-8 transition-[width] duration-300 ease-in-out focus:border-transparent focus:w-72 dark:bg-darkmode-400/70"
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
				<DropdownMenu.Content class="relative w-56 mt-px bg-black">
					<div
						class="before:block before:absolute before:bg-primary/80 before:inset-0 before:rounded-md before:z-[-1] text-white z-[99]"
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
		</div>
	</div>
	<!-- END: Top Bar -->
	<!-- BEGIN: Top Menu -->
	<nav class="relative z-50 hidden top-nav md:block">
		<ul class="pb-3 xl:pb-0 xl:px-[50px] flex flex-wrap">
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
		class="rounded-[30px] min-w-0 min-h-screen flex-1 pb-10 bg-slate-100 dark:bg-darkmode-700 px-4 md:px-[22px] max-w-full md:max-w-auto before:content-[''] before:w-full before:h-px before:block"
	>
		<slot />
	</div>
	<!-- END: Content -->
</div>
