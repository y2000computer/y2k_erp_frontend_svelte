<script lang="ts">
	import _ from 'lodash';
	import clsx from 'clsx';
	import fakerData from '@/utils/faker';
	import Button from '$lib/components/Button';
	import { FormCheck, FormInput, FormLabel, FormSelect } from '$lib/components/Form';
	import Lucide from '$lib/components/Lucide';
	import * as DropdownMenu from '$lib/components/DropdownMenu';
</script>

<div>
	<div class="grid grid-cols-12 gap-6 mt-8">
		<div class="col-span-12 lg:col-span-3 2xl:col-span-2">
			<h2 class="mt-2 mr-auto text-lg font-medium intro-y">Inbox</h2>
			<!-- BEGIN: Inbox Menu -->
			<div class="p-5 mt-6 intro-y box bg-primary">
				<Button
					type="button"
					class="w-full mt-1 bg-white text-slate-600 dark:text-slate-300 dark:bg-darkmode-300 dark:border-darkmode-300"
				>
					<Lucide icon="Pencil" class="w-4 h-4 mr-2" /> Compose
				</Button>
				<div class="pt-6 mt-6 text-white border-t border-white/10 dark:border-darkmode-400">
					<a
						href="#top"
						class="flex items-center px-3 py-2 font-medium rounded-md bg-white/10 dark:bg-darkmode-700"
					>
						<Lucide icon="Mail" class="w-4 h-4 mr-2" /> Inbox
					</a>
					<a href="#top" class="flex items-center px-3 py-2 mt-2 rounded-md">
						<Lucide icon="Star" class="w-4 h-4 mr-2" /> Marked
					</a>
					<a href="#top" class="flex items-center px-3 py-2 mt-2 rounded-md">
						<Lucide icon="Inbox" class="w-4 h-4 mr-2" /> Draft
					</a>
					<a href="#top" class="flex items-center px-3 py-2 mt-2 rounded-md">
						<Lucide icon="Send" class="w-4 h-4 mr-2" /> Sent
					</a>
					<a href="#top" class="flex items-center px-3 py-2 mt-2 rounded-md">
						<Lucide icon="Trash" class="w-4 h-4 mr-2" /> Trash
					</a>
				</div>
				<div class="pt-4 mt-4 text-white border-t border-white/10 dark:border-darkmode-400">
					<a href="#top" class="flex items-center px-3 py-2 truncate">
						<div class="w-2 h-2 mr-3 rounded-full bg-pending" />
						Custom Work
					</a>
					<a href="#top" class="flex items-center px-3 py-2 mt-2 truncate rounded-md">
						<div class="w-2 h-2 mr-3 rounded-full bg-success" />
						Important Meetings
					</a>
					<a href="#top" class="flex items-center px-3 py-2 mt-2 truncate rounded-md">
						<div class="w-2 h-2 mr-3 rounded-full bg-warning" />
						Work
					</a>
					<a href="#top" class="flex items-center px-3 py-2 mt-2 truncate rounded-md">
						<div class="w-2 h-2 mr-3 rounded-full bg-pending" />
						Design
					</a>
					<a href="#top" class="flex items-center px-3 py-2 mt-2 truncate rounded-md">
						<div class="w-2 h-2 mr-3 rounded-full bg-danger" />
						Next Week
					</a>
					<a href="#top" class="flex items-center px-3 py-2 mt-2 truncate rounded-md">
						<Lucide icon="Plus" class="w-4 h-4 mr-2" /> Add New Label
					</a>
				</div>
			</div>
			<!-- END: Inbox Menu -->
		</div>
		<div class="col-span-12 lg:col-span-9 2xl:col-span-10">
			<!-- BEGIN: Inbox Filter -->
			<div class="flex flex-col-reverse items-center intro-y sm:flex-row">
				<div class="relative w-full mt-3 mr-auto sm:w-auto sm:mt-0">
					<Lucide
						icon="Search"
						class="absolute inset-y-0 left-0 z-10 w-4 h-4 my-auto ml-3 text-slate-500"
					/>
					<FormInput type="text" class="w-full px-10 sm:w-64 !box" placeholder="Search mail" />
					<DropdownMenu.Root>
						<DropdownMenu.Trigger asChild let:builder>
							<div
								use:builder.action
								{...builder}
								class="absolute inset-y-0 right-0 flex items-center mr-3"
							>
								<Button
									as="a"
									role="button"
									class="block w-4 h-4 p-0 border-0 shadow-none"
									href="#"
								>
									<Lucide icon="ChevronDown" class="w-4 h-4 cursor-pointer text-slate-500" />
								</Button>
							</div>
						</DropdownMenu.Trigger>
						<DropdownMenu.Content class="pt-2 w-[478px]">
							<div class="grid grid-cols-12 gap-4 p-3 gap-y-3">
								<div class="col-span-6">
									<FormLabel htmlFor="input-filter-1" class="text-xs">From</FormLabel>
									<FormInput
										id="input-filter-1"
										type="text"
										class="flex-1"
										placeholder="example@gmail.com"
									/>
								</div>
								<div class="col-span-6">
									<FormLabel htmlFor="input-filter-2" class="text-xs">To</FormLabel>
									<FormInput
										id="input-filter-2"
										type="text"
										class="flex-1"
										placeholder="example@gmail.com"
									/>
								</div>
								<div class="col-span-6">
									<FormLabel htmlFor="input-filter-3" class="text-xs">Subject</FormLabel>
									<FormInput
										id="input-filter-3"
										type="text"
										class="flex-1"
										placeholder="Important Meeting"
									/>
								</div>
								<div class="col-span-6">
									<FormLabel htmlFor="input-filter-4" class="text-xs">Has the Words</FormLabel>
									<FormInput
										id="input-filter-4"
										type="text"
										class="flex-1"
										placeholder="Job, Work, Documentation"
									/>
								</div>
								<div class="col-span-6">
									<FormLabel htmlFor="input-filter-5" class="text-xs">Doesn't Have</FormLabel>
									<FormInput
										id="input-filter-5"
										type="text"
										class="flex-1"
										placeholder="Job, Work, Documentation"
									/>
								</div>
								<div class="col-span-6">
									<FormLabel htmlFor="input-filter-6" class="text-xs">Size</FormLabel>
									<FormSelect id="input-filter-6" class="flex-1">
										<option>10</option>
										<option>25</option>
										<option>35</option>
										<option>50</option>
									</FormSelect>
								</div>
								<div class="flex items-center col-span-12 mt-3">
									<Button variant="secondary" class="w-32 ml-auto">Create Filter</Button>
									<Button variant="primary" class="w-32 ml-2">Search</Button>
								</div>
							</div>
						</DropdownMenu.Content>
					</DropdownMenu.Root>
				</div>
				<div class="flex w-full sm:w-auto">
					<Button variant="primary" class="mr-2 shadow-md">Start a Video Call</Button>
					<DropdownMenu.Root>
						<DropdownMenu.Trigger asChild let:builder>
							<div use:builder.action {...builder}>
								<Button class="px-2 !box">
									<span class="flex items-center justify-center w-5 h-5">
										<Lucide icon="Plus" class="w-4 h-4" />
									</span>
								</Button>
							</div>
						</DropdownMenu.Trigger>
						<DropdownMenu.Content class="w-40">
							<DropdownMenu.Item>
								<Lucide icon="User" class="w-4 h-4 mr-2" /> Contacts
							</DropdownMenu.Item>
							<DropdownMenu.Item>
								<Lucide icon="Settings" class="w-4 h-4 mr-2" /> Settings
							</DropdownMenu.Item>
						</DropdownMenu.Content>
					</DropdownMenu.Root>
				</div>
			</div>
			<!-- END: Inbox Filter -->
			<!-- BEGIN: Inbox Content -->
			<div class="mt-5 intro-y box">
				<div
					class="flex flex-col-reverse p-5 border-b sm:flex-row text-slate-500 border-slate-200/60"
				>
					<div
						class="flex items-center px-5 pt-5 mt-3 -mx-5 border-t sm:mt-0 sm:border-0 border-slate-200/60 sm:pt-0 sm:mx-0 sm:px-0"
					>
						<FormCheck.Input class="border-slate-400 checked:border-primary" type="checkbox" />
						<DropdownMenu.Root>
							<DropdownMenu.Trigger asChild let:builder>
								<a class="block w-5 h-5 ml-1" href="#top" use:builder.action {...builder}>
									<Lucide icon="ChevronDown" class="w-5 h-5" />
								</a>
							</DropdownMenu.Trigger>
							<DropdownMenu.Content class="w-32 text-slate-800 dark:text-slate-300">
								<DropdownMenu.Item>All</DropdownMenu.Item>
								<DropdownMenu.Item>None</DropdownMenu.Item>
								<DropdownMenu.Item>Read</DropdownMenu.Item>
								<DropdownMenu.Item>Unread</DropdownMenu.Item>
								<DropdownMenu.Item>Starred</DropdownMenu.Item>
								<DropdownMenu.Item>Unstarred</DropdownMenu.Item>
							</DropdownMenu.Content>
						</DropdownMenu.Root>
						<a href="#top" class="flex items-center justify-center w-5 h-5 ml-5">
							<Lucide icon="RefreshCw" class="w-4 h-4" />
						</a>
						<a href="#top" class="flex items-center justify-center w-5 h-5 ml-5">
							<Lucide icon="EllipsisVertical" class="w-4 h-4" />
						</a>
					</div>
					<div class="flex items-center sm:ml-auto">
						<div class="">1 - 50 of 5,238</div>
						<a href="#top" class="flex items-center justify-center w-5 h-5 ml-5">
							<Lucide icon="ChevronLeft" class="w-4 h-4" />
						</a>
						<a href="#top" class="flex items-center justify-center w-5 h-5 ml-5">
							<Lucide icon="ChevronRight" class="w-4 h-4" />
						</a>
						<a href="#top" class="flex items-center justify-center w-5 h-5 ml-5">
							<Lucide icon="Settings" class="w-4 h-4" />
						</a>
					</div>
				</div>
				<div class="overflow-x-auto sm:overflow-x-visible">
					{#each fakerData as faker, fakerKey}
						<div class="intro-y">
							<div
								class={clsx([
									'transition duration-200 ease-in-out transform cursor-pointer inline-block sm:block border-b border-slate-200/60 dark:border-darkmode-400',
									'hover:scale-[1.02] hover:relative hover:z-20 hover:shadow-md hover:border-0 hover:rounded',
									!faker.trueFalse[0] &&
										'bg-slate-100 text-slate-600 dark:text-slate-500 dark:bg-darkmode-400/70',
									faker.trueFalse[0] &&
										'bg-white text-slate-800 dark:text-slate-300 dark:bg-darkmode-600'
								])}
							>
								<div class="flex px-5 py-3">
									<div class="flex items-center flex-none mr-5 w-72">
										<FormCheck.Input
											class="flex-none border-slate-400 checked:border-primary"
											type="checkbox"
											checked={faker.trueFalse[0]}
											on:change={() => {}}
										/>
										<a
											href="#top"
											class="flex items-center justify-center flex-none w-5 h-5 ml-4 text-slate-400"
										>
											<Lucide icon="Star" class="w-4 h-4" />
										</a>
										<a
											href="#top"
											class="flex items-center justify-center flex-none w-5 h-5 ml-2 text-slate-400"
										>
											<Lucide icon="Bookmark" class="w-4 h-4" />
										</a>
										<div class="relative flex-none w-6 h-6 ml-5 image-fit">
											<img
												alt="Midone Tailwind HTML Admin Template"
												class="rounded-full"
												src={faker.photos[0]}
											/>
										</div>
										<div class={clsx(['ml-3 truncate', faker.trueFalse[0] && 'font-medium'])}>
											{faker.users[0].name}
										</div>
									</div>
									<div class="w-64 truncate sm:w-auto">
										<span class={clsx(['ml-3 truncate', faker.trueFalse[0] && 'font-medium'])}>
											{faker.news[0].superShortContent}
										</span>
										{faker.news[0].shortContent}
									</div>
									<div
										class={clsx([
											'pl-10 ml-auto whitespace-nowrap',
											faker.trueFalse[0] && 'font-medium'
										])}
									>
										{faker.times[0]}
									</div>
								</div>
							</div>
						</div>
					{/each}
				</div>
				<div
					class="flex flex-col items-center p-5 text-center sm:flex-row sm:text-left text-slate-500"
				>
					<div>4.41 GB (25%) of 17 GB used Manage</div>
					<div class="mt-2 sm:ml-auto sm:mt-0">Last account activity: 36 minutes ago</div>
				</div>
			</div>
			<!-- END: Inbox Content -->
		</div>
	</div>
</div>
