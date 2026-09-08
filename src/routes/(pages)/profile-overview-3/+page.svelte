<script lang="ts">
	import _ from 'lodash';
	import clsx from 'clsx';
	import fakerData from '@/utils/faker';
	import Button from '$lib/components/Button';
	import { FormSwitch } from '$lib/components/Form';
	import Progress from '$lib/components/Progress';
	import TinySlider, { type TinySliderElement } from '$lib/components/TinySlider';
	import Lucide from '$lib/components/Lucide';
	import ReportLineChart from '@/components/ReportLineChart';
	import * as Tabs from '$lib/components/Tabs';
	import * as DropdownMenu from '$lib/components/DropdownMenu';

	let announcementRef: TinySliderElement;
	let newProjectsRef: TinySliderElement;
	let todaySchedulesRef: TinySliderElement;

	const prevAnnouncement = () => {
		announcementRef.tns?.goTo('prev');
	};
	const nextAnnouncement = () => {
		announcementRef.tns?.goTo('next');
	};
	const prevNewProjects = () => {
		newProjectsRef.tns?.goTo('prev');
	};
	const nextNewProjects = () => {
		newProjectsRef.tns?.goTo('next');
	};
	const prevTodaySchedules = () => {
		todaySchedulesRef.tns?.goTo('prev');
	};
	const nextTodaySchedules = () => {
		todaySchedulesRef.tns?.goTo('next');
	};
</script>

<div>
	<div class="flex items-center mt-8 intro-y">
		<h2 class="mr-auto text-lg font-medium">Profile Layout</h2>
	</div>
	<div class="grid grid-cols-12 gap-6 mt-5">
		<!-- BEGIN: Profile Menu -->
		<div class="flex flex-col-reverse col-span-12 lg:col-span-4 2xl:col-span-3 lg:block">
			<div class="mt-5 intro-y box lg:mt-0">
				<div class="relative flex items-center p-5">
					<div class="w-12 h-12 image-fit">
						<img
							alt="Midone Tailwind HTML Admin Template"
							class="rounded-full"
							src={fakerData[0].photos[0]}
						/>
					</div>
					<div class="ml-4 mr-auto">
						<div class="text-base font-medium">
							{fakerData[0].users[0].name}
						</div>
						<div class="text-slate-500">{fakerData[0].jobs[0]}</div>
					</div>
					<DropdownMenu.Root>
						<DropdownMenu.Trigger asChild let:builder>
							<a class="block w-5 h-5" href="/" use:builder.action {...builder}>
								<Lucide icon="EllipsisVertical" class="w-5 h-5 text-slate-500" />
							</a>
						</DropdownMenu.Trigger>
						<DropdownMenu.Content class="w-56">
							<DropdownMenu.Label>Export Options</DropdownMenu.Label>
							<DropdownMenu.Separator />
							<DropdownMenu.Item>
								<Lucide icon="Activity" class="w-4 h-4 mr-2" />
								English
							</DropdownMenu.Item>
							<DropdownMenu.Item>
								<Lucide icon="Box" class="w-4 h-4 mr-2" />
								Indonesia
								<div class="px-1 ml-auto text-xs text-white rounded-full bg-danger">10</div>
							</DropdownMenu.Item>
							<DropdownMenu.Item>
								<Lucide icon="LayoutDashboard" class="w-4 h-4 mr-2" />
								English
							</DropdownMenu.Item>
							<DropdownMenu.Item>
								<Lucide icon="PanelRight" class="w-4 h-4 mr-2" />
								Indonesia
							</DropdownMenu.Item>
							<DropdownMenu.Separator />
							<DropdownMenu.Label>
								<Button variant="primary" type="button" class="px-2 py-1">Settings</Button>
								<Button variant="secondary" type="button" class="px-2 py-1 ml-auto">
									View Profile
								</Button>
							</DropdownMenu.Label>
						</DropdownMenu.Content>
					</DropdownMenu.Root>
				</div>
				<div class="p-5 border-t border-slate-200/60 dark:border-darkmode-400">
					<a class="flex items-center font-medium text-primary" href="#top">
						<Lucide icon="Activity" class="w-4 h-4 mr-2" /> Personal Information
					</a>
					<a class="flex items-center mt-5" href="#top">
						<Lucide icon="Box" class="w-4 h-4 mr-2" /> Account Settings
					</a>
					<a class="flex items-center mt-5" href="#top">
						<Lucide icon="Lock" class="w-4 h-4 mr-2" /> Change Password
					</a>
					<a class="flex items-center mt-5" href="#top">
						<Lucide icon="Settings" class="w-4 h-4 mr-2" /> User Settings
					</a>
				</div>
				<div class="p-5 border-t border-slate-200/60 dark:border-darkmode-400">
					<a class="flex items-center" href="#top">
						<Lucide icon="Activity" class="w-4 h-4 mr-2" /> Email Settings
					</a>
					<a class="flex items-center mt-5" href="#top">
						<Lucide icon="Box" class="w-4 h-4 mr-2" /> Saved Credit Cards
					</a>
					<a class="flex items-center mt-5" href="#top">
						<Lucide icon="Lock" class="w-4 h-4 mr-2" /> Social Networks
					</a>
					<a class="flex items-center mt-5" href="#top">
						<Lucide icon="Settings" class="w-4 h-4 mr-2" /> Tax Information
					</a>
				</div>
				<div class="flex p-5 border-t border-slate-200/60 dark:border-darkmode-400">
					<Button variant="primary" type="button" class="px-2 py-1">New Group</Button>
					<Button variant="outline-secondary" type="button" class="px-2 py-1 ml-auto">
						New Quick Link
					</Button>
				</div>
			</div>
			<div class="p-5 mt-5 text-white intro-y box bg-primary">
				<div class="flex items-center">
					<div class="text-lg font-medium">Important Update</div>
					<div
						class="px-1 ml-auto text-xs bg-white rounded-md dark:bg-primary dark:text-white text-slate-700"
					>
						New
					</div>
				</div>
				<div class="mt-4">
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
					been the industry's standard dummy text ever since the 1500s.
				</div>
				<div class="flex mt-5 font-medium">
					<Button
						type="button"
						class="px-2 py-1 text-white border-white dark:text-slate-300 dark:bg-darkmode-400 dark:border-darkmode-400"
					>
						Take Action
					</Button>
					<Button
						type="button"
						class="px-2 py-1 ml-auto text-white border-transparent dark:border-transparent"
					>
						Dismiss
					</Button>
				</div>
			</div>
		</div>
		<!-- END: Profile Menu -->
		<div class="col-span-12 lg:col-span-8 2xl:col-span-9">
			<div class="grid grid-cols-12 gap-6">
				<!-- BEGIN: Daily Sales -->
				<div class="col-span-12 intro-y box 2xl:col-span-6">
					<div
						class="flex items-center px-5 py-5 border-b sm:py-3 border-slate-200/60 dark:border-darkmode-400"
					>
						<h2 class="mr-auto text-base font-medium">Daily Sales</h2>
						<DropdownMenu.Root>
							<DropdownMenu.Trigger asChild let:builder>
								<a class="block w-5 h-5 ml-auto sm:hidden" href="/" use:builder.action {...builder}>
									<Lucide icon="EllipsisVertical" class="w-5 h-5 text-slate-500" />
								</a>
							</DropdownMenu.Trigger>
							<DropdownMenu.Content class="w-40">
								<DropdownMenu.Item>
									<Lucide icon="File" class="w-4 h-4 mr-2" /> Download Excel
								</DropdownMenu.Item>
							</DropdownMenu.Content>
						</DropdownMenu.Root>
						<Button variant="outline-secondary" class="hidden sm:flex">
							<Lucide icon="File" class="w-4 h-4 mr-2" /> Download Excel
						</Button>
					</div>
					<div class="p-5">
						<div class="relative flex items-center">
							<div class="flex-none w-12 h-12 image-fit">
								<img
									alt="Midone Tailwind HTML Admin Template"
									class="rounded-full"
									src={fakerData[0].photos[0]}
								/>
							</div>
							<div class="ml-4 mr-auto">
								<a href="#top" class="font-medium">
									{fakerData[0].users[0].name}
								</a>
								<div class="mr-5 text-slate-500 sm:mr-5">Bootstrap 4 HTML Admin Template</div>
							</div>
							<div class="font-medium text-slate-600 dark:text-slate-500">+$19</div>
						</div>
						<div class="relative flex items-center mt-5">
							<div class="flex-none w-12 h-12 image-fit">
								<img
									alt="Midone Tailwind HTML Admin Template"
									class="rounded-full"
									src={fakerData[1].photos[0]}
								/>
							</div>
							<div class="ml-4 mr-auto">
								<a href="#top" class="font-medium">
									{fakerData[1].users[0].name}
								</a>
								<div class="mr-5 text-slate-500 sm:mr-5">Tailwind HTML Admin Template</div>
							</div>
							<div class="font-medium text-slate-600 dark:text-slate-500">+$25</div>
						</div>
						<div class="relative flex items-center mt-5">
							<div class="flex-none w-12 h-12 image-fit">
								<img
									alt="Midone Tailwind HTML Admin Template"
									class="rounded-full"
									src={fakerData[2].photos[0]}
								/>
							</div>
							<div class="ml-4 mr-auto">
								<a href="#top" class="font-medium">
									{fakerData[2].users[0].name}
								</a>
								<div class="mr-5 text-slate-500 sm:mr-5">Vuejs HTML Admin Template</div>
							</div>
							<div class="font-medium text-slate-600 dark:text-slate-500">+$21</div>
						</div>
					</div>
				</div>
				<!-- END: Daily Sales -->
				<!-- BEGIN: Announcement -->
				<div class="col-span-12 intro-y box 2xl:col-span-6">
					<div
						class="flex items-center px-5 py-3 border-b border-slate-200/60 dark:border-darkmode-400"
					>
						<h2 class="mr-auto text-base font-medium">Announcement</h2>
						<Button variant="outline-secondary" class="px-2 mr-2" on:click={prevAnnouncement}>
							<Lucide icon="ChevronLeft" class="w-4 h-4" />
						</Button>
						<Button variant="outline-secondary" class="px-2" on:click={nextAnnouncement}>
							<Lucide icon="ChevronRight" class="w-4 h-4" />
						</Button>
					</div>
					<TinySlider bind:ref={announcementRef} class="py-5">
						<div class="px-5">
							<div class="text-lg font-medium">Midone Admin Template</div>
							<div class="mt-2 text-slate-600 dark:text-slate-500">
								Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
								Ipsum has been the industry's standard dummy text ever. <br />
								<br />
								Lorem Ipsum is simply dummy text of the printing and typesetting industry since the 1500s.
							</div>
							<div class="flex items-center mt-5">
								<div
									class="px-3 py-2 font-medium rounded text-primary bg-primary/10 dark:bg-darkmode-400 dark:text-slate-300"
								>
									02 June 2021
								</div>
								<Button variant="outline-secondary" class="ml-auto">View Details</Button>
							</div>
						</div>
						<div class="px-5">
							<div class="text-lg font-medium">Midone Admin Template</div>
							<div class="mt-2 text-slate-600 dark:text-slate-500">
								Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
								Ipsum has been the industry's standard dummy text ever. <br />
								<br />
								Lorem Ipsum is simply dummy text of the printing and typesetting industry since the 1500s.
							</div>
							<div class="flex items-center mt-5">
								<div
									class="px-3 py-2 font-medium rounded text-primary bg-primary/10 dark:bg-darkmode-400 dark:text-slate-300"
								>
									02 June 2021
								</div>
								<Button variant="outline-secondary" class="ml-auto">View Details</Button>
							</div>
						</div>
						<div class="px-5">
							<div class="text-lg font-medium">Midone Admin Template</div>
							<div class="mt-2 text-slate-600 dark:text-slate-500">
								Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
								Ipsum has been the industry's standard dummy text ever. <br />
								<br />
								Lorem Ipsum is simply dummy text of the printing and typesetting industry since the 1500s.
							</div>
							<div class="flex items-center mt-5">
								<div
									class="px-3 py-2 font-medium rounded text-primary bg-primary/10 dark:bg-darkmode-400 dark:text-slate-300"
								>
									02 June 2021
								</div>
								<Button variant="secondary" class="ml-auto">View Details</Button>
							</div>
						</div>
					</TinySlider>
				</div>
				<!-- END: Announcement -->
				<!-- BEGIN: Projects -->
				<div class="col-span-12 intro-y box 2xl:col-span-6">
					<div
						class="flex items-center px-5 py-3 border-b border-slate-200/60 dark:border-darkmode-400"
					>
						<h2 class="mr-auto text-base font-medium">Projects</h2>
						<Button variant="outline-secondary" class="px-2 mr-2" on:click={prevNewProjects}>
							<Lucide icon="ChevronLeft" class="w-4 h-4" />
						</Button>
						<Button variant="outline-secondary" class="px-2" on:click={nextNewProjects}>
							<Lucide icon="ChevronRight" class="w-4 h-4" />
						</Button>
					</div>
					<TinySlider bind:ref={newProjectsRef} class="py-5">
						<div class="px-5">
							<div class="text-lg font-medium">Midone Admin Template</div>
							<div class="mt-2 text-slate-600 dark:text-slate-500">
								Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
								Ipsum has been the industry's standard dummy text ever since the 1500s.
							</div>
							<div class="mt-5">
								<div class="flex text-slate-500">
									<div class="mr-auto">Pending Tasks</div>
									<div>20%</div>
								</div>
								<Progress class="h-1 mt-2">
									<Progress.Bar
										class="w-1/2 bg-primary"
										role="progressbar"
										aria-valuenow={0}
										aria-valuemin={0}
										aria-valuemax={100}
									/>
								</Progress>
							</div>
						</div>
						<div class="px-5">
							<div class="text-lg font-medium">Midone Admin Template</div>
							<div class="mt-2 text-slate-600 dark:text-slate-500">
								Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
								Ipsum has been the industry's standard dummy text ever since the 1500s.
							</div>
							<div class="mt-5">
								<div class="flex text-slate-500">
									<div class="mr-auto">Pending Tasks</div>
									<div>20%</div>
								</div>
								<Progress class="h-1 mt-2">
									<Progress.Bar
										class="w-1/2 bg-primary"
										role="progressbar"
										aria-valuenow={0}
										aria-valuemin={0}
										aria-valuemax={100}
									/>
								</Progress>
							</div>
						</div>
						<div class="px-5">
							<div class="text-lg font-medium">Midone Admin Template</div>
							<div class="mt-2 text-slate-600 dark:text-slate-500">
								Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
								Ipsum has been the industry's standard dummy text ever since the 1500s.
							</div>
							<div class="mt-5">
								<div class="flex text-slate-500">
									<div class="mr-auto">Pending Tasks</div>
									<div>20%</div>
								</div>
								<Progress class="h-1 mt-2">
									<Progress.Bar
										class="w-1/2 bg-primary"
										role="progressbar"
										aria-valuenow={0}
										aria-valuemin={0}
										aria-valuemax={100}
									/>
								</Progress>
							</div>
						</div>
					</TinySlider>
				</div>
				<!-- END: Projects -->
				<!-- BEGIN: Today Schedules -->
				<div class="col-span-12 intro-y box 2xl:col-span-6">
					<div
						class="flex items-center px-5 py-3 border-b border-slate-200/60 dark:border-darkmode-400"
					>
						<h2 class="mr-auto text-base font-medium">Today Schedules</h2>
						<Button variant="outline-secondary" class="px-2 mr-2" on:click={prevTodaySchedules}>
							<Lucide icon="ChevronLeft" class="w-4 h-4" />
						</Button>
						<Button variant="outline-secondary" class="px-2" on:click={nextTodaySchedules}>
							<Lucide icon="ChevronRight" class="w-4 h-4" />
						</Button>
					</div>
					<TinySlider bind:ref={todaySchedulesRef} class="py-5">
						<div class="px-5 text-center sm:text-left">
							<div class="text-lg font-medium">Developing rest API with Laravel 7</div>
							<div class="mt-2 text-slate-600 dark:text-slate-500">
								Lorem Ipsum is simply dummy text of the printing and typesetting industry
							</div>
							<div class="mt-2">11:15AM - 12:30PM</div>
							<div class="flex flex-col items-center mt-5 sm:flex-row">
								<div class="flex items-center text-slate-500">
									<Lucide icon="MapPin" class="hidden w-4 h-4 mr-2 sm:block" />
									1396 Pooh Bear Lane, New Market
								</div>
								<Button
									variant="secondary"
									class="px-2 py-1 mt-3 sm:ml-auto sm:mt-0sm:ml-auto sm:mt-0"
								>
									View On Map
								</Button>
							</div>
						</div>
						<div class="px-5 text-center sm:text-left">
							<div class="text-lg font-medium">Developing rest API with Laravel 7</div>
							<div class="mt-2 text-slate-600 dark:text-slate-500">
								Lorem Ipsum is simply dummy text of the printing and typesetting industry
							</div>
							<div class="mt-2">11:15AM - 12:30PM</div>
							<div class="flex flex-col items-center mt-5 sm:flex-row">
								<div class="flex items-center text-slate-500">
									<Lucide icon="MapPin" class="hidden w-4 h-4 mr-2 sm:block" />
									1396 Pooh Bear Lane, New Market
								</div>
								<Button
									variant="secondary"
									class="px-2 py-1 mt-3 sm:ml-auto sm:mt-0sm:ml-auto sm:mt-0"
								>
									View On Map
								</Button>
							</div>
						</div>
						<div class="px-5 text-center sm:text-left">
							<div class="text-lg font-medium">Developing rest API with Laravel 7</div>
							<div class="mt-2 text-slate-600 dark:text-slate-500">
								Lorem Ipsum is simply dummy text of the printing and typesetting industry
							</div>
							<div class="mt-2">11:15AM - 12:30PM</div>
							<div class="flex flex-col items-center mt-5 sm:flex-row">
								<div class="flex items-center text-slate-500">
									<Lucide icon="MapPin" class="hidden w-4 h-4 mr-2 sm:block" />
									1396 Pooh Bear Lane, New Market
								</div>
								<Button
									variant="secondary"
									class="px-2 py-1 mt-3 sm:ml-auto sm:mt-0sm:ml-auto sm:mt-0"
								>
									View On Map
								</Button>
							</div>
						</div>
					</TinySlider>
				</div>
				<!-- END: Today Schedules -->
				<!-- BEGIN: Top Products -->
				<Tabs.Root value="laravel" class="col-span-12 intro-y box 2xl:col-span-6">
					<div class="flex items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
						<h2 class="mr-auto text-base font-medium">Top Products</h2>
						<DropdownMenu.Root>
							<DropdownMenu.Trigger asChild let:builder>
								<a class="block w-5 h-5 ml-auto" href="/" use:builder.action {...builder}>
									<Lucide icon="EllipsisVertical" class="w-5 h-5 text-slate-500" />
								</a>
							</DropdownMenu.Trigger>
							<DropdownMenu.Content class="w-40">
								<DropdownMenu.Item>
									<Lucide icon="Pencil" class="w-4 h-4 mr-2" /> New Chat
								</DropdownMenu.Item>
								<DropdownMenu.Item>
									<Lucide icon="Trash" class="w-4 h-4 mr-2" /> Delete
								</DropdownMenu.Item>
							</DropdownMenu.Content>
						</DropdownMenu.Root>
					</div>
					<div class="p-5">
						<Tabs.List variant="boxed-tabs" class="flex-col justify-center sm:flex-row">
							<Tabs.Trigger
								value="laravel"
								class="w-full px-0 py-2 mb-2 text-center cursor-pointer sm:w-20 sm:mb-0 sm:mx-2"
							>
								<Lucide icon="Box" class="block w-6 h-6 mx-auto mb-2" /> Laravel
							</Tabs.Trigger>
							<Tabs.Trigger
								value="symfony"
								class="w-full px-0 py-2 mb-2 text-center cursor-pointer sm:w-20 sm:mb-0 sm:mx-2"
							>
								<Lucide icon="Inbox" class="block w-6 h-6 mx-auto mb-2" /> Symfony
							</Tabs.Trigger>
							<Tabs.Trigger
								value="bootstrap"
								class="w-full px-0 py-2 mb-2 text-center cursor-pointer sm:w-20 sm:mb-0 sm:mx-2"
							>
								<Lucide icon="Activity" class="block w-6 h-6 mx-auto mb-2" /> Bootstrap
							</Tabs.Trigger>
						</Tabs.List>
						<div class="mt-8">
							<Tabs.Content value="laravel">
								<div class="flex flex-col items-center sm:flex-row">
									<div class="mr-auto">
										<a href="#top" class="font-medium"> Wordpress Template </a>
										<div class="mt-1 text-slate-500">HTML, PHP, Mysql</div>
									</div>
									<div class="flex items-center w-full mt-3 sm:w-auto sm:mt-0">
										<div class="px-2 mr-5 rounded bg-success/20 text-success">+20%</div>
										<Progress class="h-1 mt-2 sm:w-40">
											<Progress.Bar
												class="w-1/2 bg-primary"
												role="progressbar"
												aria-valuenow={0}
												aria-valuemin={0}
												aria-valuemax={100}
											/>
										</Progress>
									</div>
								</div>
								<div class="flex flex-col items-center mt-5 sm:flex-row">
									<div class="mr-auto">
										<a href="#top" class="font-medium"> Laravel Template </a>
										<div class="mt-1 text-slate-500">PHP, Mysql</div>
									</div>
									<div class="flex items-center w-full mt-3 sm:w-auto sm:mt-0">
										<div class="px-2 mr-5 rounded bg-success/20 text-success">+55%</div>
										<Progress class="h-1 mt-2 sm:w-40">
											<Progress.Bar
												class="w-2/3 bg-primary"
												role="progressbar"
												aria-valuenow={0}
												aria-valuemin={0}
												aria-valuemax={100}
											/>
										</Progress>
									</div>
								</div>
								<div class="flex flex-col items-center mt-5 sm:flex-row">
									<div class="mr-auto">
										<a href="#top" class="font-medium"> Tailwind HTML Template </a>
										<div class="mt-1 text-slate-500">HTML, CSS, JS</div>
									</div>
									<div class="flex items-center w-full mt-3 sm:w-auto sm:mt-0">
										<div class="px-2 mr-5 rounded bg-success/20 text-success">+40%</div>
										<Progress class="h-1 mt-2 sm:w-40">
											<Progress.Bar
												class="w-3/4 bg-primary"
												role="progressbar"
												aria-valuenow={0}
												aria-valuemin={0}
												aria-valuemax={100}
											/>
										</Progress>
									</div>
								</div>
							</Tabs.Content>
						</div>
					</div>
				</Tabs.Root>
				<!-- END: Top Products -->
				<!-- BEGIN: Work In Progress -->
				<Tabs.Root value="new" class="col-span-12 intro-y box 2xl:col-span-6">
					<div
						class="flex items-center px-5 py-5 border-b sm:py-0 border-slate-200/60 dark:border-darkmode-400"
					>
						<h2 class="mr-auto text-base font-medium">Work In Progress</h2>
						<Tabs.List variant="link-tabs" class="hidden w-auto ml-auto sm:flex">
							<Tabs.Trigger value="new" class="py-5 cursor-pointer">New</Tabs.Trigger>
							<Tabs.Trigger value="last-week" class="py-5 cursor-pointer">Last Week</Tabs.Trigger>
						</Tabs.List>
					</div>
					<div class="p-5">
						<Tabs.Content value="new">
							<div>
								<div class="flex">
									<div class="mr-auto">Pending Tasks</div>
									<div>20%</div>
								</div>
								<Progress class="h-1 mt-2">
									<Progress.Bar
										class="w-1/2 bg-primary"
										role="progressbar"
										aria-valuenow={0}
										aria-valuemin={0}
										aria-valuemax={100}
									/>
								</Progress>
							</div>
							<div class="mt-5">
								<div class="flex">
									<div class="mr-auto">Completed Tasks</div>
									<div>2 / 20</div>
								</div>
								<Progress class="h-1 mt-2">
									<Progress.Bar
										class="w-1/4 bg-primary"
										role="progressbar"
										aria-valuenow={0}
										aria-valuemin={0}
										aria-valuemax={100}
									/>
								</Progress>
							</div>
							<div class="mt-5">
								<div class="flex">
									<div class="mr-auto">Tasks In Progress</div>
									<div>42</div>
								</div>
								<Progress class="h-1 mt-2">
									<Progress.Bar
										class="w-3/4 bg-primary"
										role="progressbar"
										aria-valuenow={0}
										aria-valuemin={0}
										aria-valuemax={100}
									/>
								</Progress>
							</div>
							<div class="mt-5">
								<div class="flex">
									<div class="mr-auto">Tasks In Review</div>
									<div>70%</div>
								</div>
								<Progress class="h-1 mt-2">
									<Progress.Bar
										class="w-4/5 bg-primary"
										role="progressbar"
										aria-valuenow={0}
										aria-valuemin={0}
										aria-valuemax={100}
									/>
								</Progress>
							</div>
							<Button as="a" variant="secondary" href="#top" class="block w-40 mx-auto mt-5">
								View More Details
							</Button>
						</Tabs.Content>
					</div>
				</Tabs.Root>
				<!-- END: Work In Progress -->
				<!-- BEGIN: Latest Tasks -->
				<Tabs.Root value="new" class="col-span-12 intro-y box 2xl:col-span-6">
					<div
						class="flex items-center px-5 py-5 border-b sm:py-0 border-slate-200/60 dark:border-darkmode-400"
					>
						<h2 class="mr-auto text-base font-medium">Latest Tasks</h2>
						<Tabs.List variant="link-tabs" class="hidden w-auto ml-auto sm:flex">
							<Tabs.Trigger value="new" class="py-5 cursor-pointer">New</Tabs.Trigger>
							<Tabs.Trigger value="last-week" class="py-5 cursor-pointer">Last Week</Tabs.Trigger>
						</Tabs.List>
					</div>
					<div class="p-5">
						<Tabs.Content value="new">
							<div class="flex items-center">
								<div class="pl-4 border-l-2 border-primary dark:border-primary">
									<a href="#top" class="font-medium"> Create New Campaign </a>
									<div class="text-slate-500">10:00 AM</div>
								</div>
								<FormSwitch class="ml-auto">
									<FormSwitch.Input type="checkbox" />
								</FormSwitch>
							</div>
							<div class="flex items-center mt-5">
								<div class="pl-4 border-l-2 border-primary dark:border-primary">
									<a href="#top" class="font-medium"> Meeting With Client </a>
									<div class="text-slate-500">02:00 PM</div>
								</div>
								<FormSwitch class="ml-auto">
									<FormSwitch.Input type="checkbox" />
								</FormSwitch>
							</div>
							<div class="flex items-center mt-5">
								<div class="pl-4 border-l-2 border-primary dark:border-primary">
									<a href="#top" class="font-medium"> Create New Repository </a>
									<div class="text-slate-500">04:00 PM</div>
								</div>
								<FormSwitch class="ml-auto">
									<FormSwitch.Input type="checkbox" />
								</FormSwitch>
							</div>
							<div class="flex items-center mt-5">
								<div class="pl-4 border-l-2 border-primary dark:border-primary">
									<a href="#top" class="font-medium"> Meeting With Client </a>
									<div class="text-slate-500">10:00 AM</div>
								</div>
								<FormSwitch class="ml-auto">
									<FormSwitch.Input type="checkbox" />
								</FormSwitch>
							</div>
							<div class="flex items-center mt-5">
								<div class="pl-4 border-l-2 border-primary dark:border-primary">
									<a href="#top" class="font-medium"> Create New Repository </a>
									<div class="text-slate-500">11:00 PM</div>
								</div>
								<FormSwitch class="ml-auto">
									<FormSwitch.Input type="checkbox" />
								</FormSwitch>
							</div>
						</Tabs.Content>
					</div>
				</Tabs.Root>
				<!-- END: Latest Tasks -->
				<!-- BEGIN: General Statistics -->
				<div class="col-span-12 intro-y box 2xl:col-span-6">
					<div
						class="flex items-center px-5 py-5 border-b sm:py-3 border-slate-200/60 dark:border-darkmode-400"
					>
						<h2 class="mr-auto text-base font-medium">General Statistics</h2>
						<DropdownMenu.Root>
							<DropdownMenu.Trigger asChild let:builder>
								<a class="block w-5 h-5 ml-auto sm:hidden" href="/" use:builder.action {...builder}>
									<Lucide icon="EllipsisVertical" class="w-5 h-5 text-slate-500" />
								</a>
							</DropdownMenu.Trigger>
							<DropdownMenu.Trigger asChild let:builder>
								<div class="hidden font-normal sm:flex" use:builder.action {...builder}>
									<Button variant="outline-secondary">
										Export
										<Lucide icon="ChevronDown" class="w-4 h-4 ml-2" />
									</Button>
								</div>
							</DropdownMenu.Trigger>
							<DropdownMenu.Content class="w-40">
								<DropdownMenu.Label>Export Tools</DropdownMenu.Label>
								<DropdownMenu.Separator />
								<DropdownMenu.Item>
									<Lucide icon="Printer" class="w-4 h-4 mr-2" />
									Print
								</DropdownMenu.Item>
								<DropdownMenu.Item>
									<Lucide icon="ExternalLink" class="w-4 h-4 mr-2" />
									Excel
								</DropdownMenu.Item>
								<DropdownMenu.Item>
									<Lucide icon="FileText" class="w-4 h-4 mr-2" />
									CSV
								</DropdownMenu.Item>
								<DropdownMenu.Item>
									<Lucide icon="Archive" class="w-4 h-4 mr-2" />
									PDF
								</DropdownMenu.Item>
							</DropdownMenu.Content>
						</DropdownMenu.Root>
					</div>
					<div class="p-5">
						<div class="flex flex-col items-center sm:flex-row">
							<div class="flex flex-wrap mr-auto sm:flex-nowrap">
								<div class="flex items-center mb-1 mr-5 sm:mb-0">
									<div class="w-2 h-2 mr-3 rounded-full bg-pending" />
									<span>Author Sales</span>
								</div>
								<div class="flex items-center mb-1 mr-5 sm:mb-0">
									<div class="w-2 h-2 mr-3 rounded-full bg-primary" />
									<span>Product Profit</span>
								</div>
							</div>
							<DropdownMenu.Root>
								<DropdownMenu.Trigger asChild let:builder>
									<div class="mt-3 mr-auto sm:mt-0 sm:mr-0" use:builder.action {...builder}>
										<Button variant="outline-secondary" class="font-normal">
											Filter by Month
											<Lucide icon="ChevronDown" class="w-4 h-4 ml-2" />
										</Button>
									</div>
								</DropdownMenu.Trigger>
								<DropdownMenu.Content class="w-40">
									<DropdownMenu.Item>January</DropdownMenu.Item>
									<DropdownMenu.Item>February</DropdownMenu.Item>
									<DropdownMenu.Item>March</DropdownMenu.Item>
									<DropdownMenu.Item>June</DropdownMenu.Item>
									<DropdownMenu.Item>July</DropdownMenu.Item>
								</DropdownMenu.Content>
							</DropdownMenu.Root>
						</div>
						<div
							class={clsx([
								'mt-8 relative',
								"before:content-[''] before:block before:absolute before:w-16 before:left-0 before:top-0 before:bottom-0 before:ml-10 before:mb-7 before:bg-gradient-to-r before:from-white before:via-white/80 before:to-transparent before:dark:from-darkmode-600",
								"after:content-[''] after:block after:absolute after:w-16 after:right-0 after:top-0 after:bottom-0 after:mb-7 after:bg-gradient-to-l after:from-white after:via-white/80 after:to-transparent after:dark:from-darkmode-600"
							])}
						>
							<ReportLineChart height={212} />
						</div>
					</div>
				</div>
				<!-- END: General Statistics -->
			</div>
		</div>
	</div>
</div>
