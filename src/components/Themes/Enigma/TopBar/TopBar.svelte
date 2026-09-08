<script lang="ts">
	import logoUrl from '@/assets/images/logo.svg';
	import Breadcrumb from '$lib/components/Breadcrumb';
	import { FormInput } from '$lib/components/Form';
	import * as DropdownMenu from '$lib/components/DropdownMenu';
	import * as Popover from '$lib/components/Popover';
	import Lucide from '$lib/components/Lucide';
	import fakerData from '@/utils/faker';
	import { fade } from 'svelte/transition';
	import clsx from 'clsx';
	import _ from 'lodash';

	let layout: 'side-menu' | 'simple-menu' | 'top-menu' | undefined = undefined;

	export { layout };

	let searchDropdown = false;
	const showSearchDropdown = () => {
		searchDropdown = true;
	};
	const hideSearchDropdown = () => {
		searchDropdown = false;
	};
</script>

<!-- BEGIN: Top Bar -->
<div
	class={clsx([
		'h-[70px] md:h-[65px] z-[51] border-b border-white/[0.08] mt-12 md:mt-0 -mx-3 sm:-mx-8 md:-mx-0 px-3 md:border-b-0 relative md:fixed md:inset-x-0 md:top-0 sm:px-8 md:px-10 md:pt-10 md:bg-gradient-to-b md:from-slate-100 md:to-transparent dark:md:from-darkmode-700',
		layout == 'top-menu' && 'dark:md:from-darkmode-800',
		"before:content-[''] before:absolute before:h-[65px] before:inset-0 before:top-0 before:mx-7 before:bg-primary/30 before:mt-3 before:rounded-xl before:hidden before:md:block before:dark:bg-darkmode-600/30",
		"after:content-[''] after:absolute after:inset-0 after:h-[65px] after:mx-3 after:bg-primary after:mt-5 after:rounded-xl after:shadow-md after:hidden after:md:block after:dark:bg-darkmode-600"
	])}
>
	<div class="flex items-center h-full">
		<!-- BEGIN: Logo -->
		<a
			href="#top"
			class={clsx([
				'-intro-x hidden md:flex',
				layout == 'side-menu' && 'xl:w-[180px]',
				layout == 'simple-menu' && 'xl:w-auto',
				layout == 'top-menu' && 'w-auto'
			])}
		>
			<img class="w-6" src={logoUrl} alt="Enigma Tailwind HTML Admin Template" />
			<span
				class={clsx([
					'ml-3 text-lg text-white',
					layout == 'side-menu' && 'hidden xl:block',
					layout == 'simple-menu' && 'hidden'
				])}
			>
				Enigma
			</span>
		</a>
		<!-- END: Logo -->
		<!-- BEGIN: Breadcrumb -->
		<Breadcrumb
			light
			class={clsx([
				'h-[45px] md:ml-10 md:border-l border-white/[0.08] dark:border-white/[0.08] mr-auto -intro-x',
				layout != 'top-menu' && 'md:pl-6',
				layout == 'top-menu' && 'md:pl-10'
			])}
		>
			<Breadcrumb.Link to="/">Application</Breadcrumb.Link>
			<Breadcrumb.Link to="/" active={true}>Dashboard</Breadcrumb.Link>
		</Breadcrumb>
		<!-- END: Breadcrumb -->
		<!-- BEGIN: Search -->
		<div class="relative mr-3 intro-x sm:mr-6">
			<div class="relative hidden search sm:block">
				<FormInput
					type="text"
					class="w-56 rounded-full border-transparent bg-slate-200 pr-8 shadow-none transition-[width] duration-300 ease-in-out focus:w-72 focus:border-transparent dark:bg-darkmode-400"
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
				class="block w-8 h-8 overflow-hidden rounded-full shadow-lg image-fit zoom-in intro-x"
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
	</div>
</div>
<!-- END: Top Bar -->
