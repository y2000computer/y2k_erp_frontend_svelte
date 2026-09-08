<script lang="ts">
	import _ from 'lodash';
	import fakerData from '@/utils/faker';
	import Button from '$lib/components/Button';
	import { FormSwitch } from '$lib/components/Form';
	import Progress from '$lib/components/Progress';
	import TinySlider, { type TinySliderElement } from '$lib/components/TinySlider';
	import Lucide from '$lib/components/Lucide';
	import FileIcon from '$lib/components/FileIcon';
	import * as Tabs from '$lib/components/Tabs';
	import * as DropdownMenu from '$lib/components/DropdownMenu';

	let newProductsRef: TinySliderElement;
	let newAuthorsRef: TinySliderElement;

	const prevNewProducts = () => {
		newProductsRef.tns?.goTo('prev');
	};
	const nextNewProducts = () => {
		newProductsRef.tns?.goTo('next');
	};
	const prevNewAuthors = () => {
		newAuthorsRef.tns?.goTo('prev');
	};
	const nextNewAuthors = () => {
		newAuthorsRef.tns?.goTo('next');
	};
</script>

<div>
	<div class="flex items-center mt-8 intro-y">
		<h2 class="mr-auto text-lg font-medium">Profile Layout</h2>
	</div>
	<Tabs.Root value="1">
		<!-- BEGIN: Profile Info -->
		<div class="px-5 pt-5 mt-5 intro-y box">
			<div
				class="flex flex-col pb-5 -mx-5 border-b lg:flex-row border-slate-200/60 dark:border-darkmode-400"
			>
				<div class="flex items-center justify-center flex-1 px-5 lg:justify-start">
					<div class="relative flex-none w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 image-fit">
						<img
							alt="Midone Tailwind HTML Admin Template"
							class="rounded-full"
							src={fakerData[0].photos[0]}
						/>
					</div>
					<div class="ml-5">
						<div class="w-24 text-lg font-medium truncate sm:w-40 sm:whitespace-normal">
							{fakerData[0].users[0].name}
						</div>
						<div class="text-slate-500">{fakerData[0].jobs[0]}</div>
					</div>
				</div>
				<div
					class="flex-1 px-5 pt-5 mt-6 border-t border-l border-r lg:mt-0 border-slate-200/60 dark:border-darkmode-400 lg:border-t-0 lg:pt-0"
				>
					<div class="font-medium text-center lg:text-left lg:mt-3">Contact Details</div>
					<div class="flex flex-col items-center justify-center mt-4 lg:items-start">
						<div class="flex items-center truncate sm:whitespace-normal">
							<Lucide icon="Mail" class="w-4 h-4 mr-2" />
							{fakerData[0].users[0].email}
						</div>
						<div class="flex items-center mt-3 truncate sm:whitespace-normal">
							<Lucide icon="Instagram" class="w-4 h-4 mr-2" /> Instagram
							{fakerData[0].users[0].name}
						</div>
						<div class="flex items-center mt-3 truncate sm:whitespace-normal">
							<Lucide icon="Twitter" class="w-4 h-4 mr-2" /> Twitter
							{fakerData[0].users[0].name}
						</div>
					</div>
				</div>
				<div
					class="flex items-center justify-center flex-1 px-5 pt-5 mt-6 border-t lg:mt-0 lg:border-0 border-slate-200/60 dark:border-darkmode-400 lg:pt-0"
				>
					<div class="w-20 py-3 text-center rounded-md">
						<div class="text-xl font-medium text-primary">201</div>
						<div class="text-slate-500">Orders</div>
					</div>
					<div class="w-20 py-3 text-center rounded-md">
						<div class="text-xl font-medium text-primary">1k</div>
						<div class="text-slate-500">Purchases</div>
					</div>
					<div class="w-20 py-3 text-center rounded-md">
						<div class="text-xl font-medium text-primary">492</div>
						<div class="text-slate-500">Reviews</div>
					</div>
				</div>
			</div>
			<Tabs.List
				variant="link-tabs"
				class="flex-col justify-center text-center sm:flex-row lg:justify-start"
			>
				<Tabs.Trigger value="1" class="flex items-center py-4 cursor-pointer"
					><Lucide icon="User" class="w-4 h-4 mr-2" /> Profile</Tabs.Trigger
				>
				<Tabs.Trigger value="2" class="flex items-center py-4 cursor-pointer"
					><Lucide icon="Shield" class="w-4 h-4 mr-2" /> Account</Tabs.Trigger
				>
				<Tabs.Trigger value="3" class="flex items-center py-4 cursor-pointer"
					><Lucide icon="Lock" class="w-4 h-4 mr-2" /> Change Password</Tabs.Trigger
				>
				<Tabs.Trigger value="4" class="flex items-center py-4 cursor-pointer"
					><Lucide icon="Settings" class="w-4 h-4 mr-2" /> Settings</Tabs.Trigger
				>
			</Tabs.List>
		</div>
		<!-- END: Profile Info -->
		<div class="mt-5">
			<Tabs.Content value="1">
				<div class="grid grid-cols-12 gap-6">
					<!-- BEGIN: Latest Uploads -->
					<div class="col-span-12 intro-y box lg:col-span-6">
						<div
							class="flex items-center px-5 py-5 border-b sm:py-3 border-slate-200/60 dark:border-darkmode-400"
						>
							<h2 class="mr-auto text-base font-medium">Latest Uploads</h2>
							<DropdownMenu.Root>
								<DropdownMenu.Trigger asChild let:builder>
									<a
										class="block w-5 h-5 ml-auto sm:hidden"
										href="/"
										use:builder.action
										{...builder}
									>
										<Lucide icon="EllipsisVertical" class="w-5 h-5 text-slate-500" />
									</a>
								</DropdownMenu.Trigger>
								<DropdownMenu.Content class="w-40">
									<DropdownMenu.Item>All Files</DropdownMenu.Item>
								</DropdownMenu.Content>
							</DropdownMenu.Root>
							<Button variant="outline-secondary" class="hidden sm:flex">All Files</Button>
						</div>
						<div class="p-5">
							<div class="flex items-center">
								<FileIcon class="w-12 file" variant="directory" />
								<div class="ml-4">
									<a class="font-medium" href="#top"> Documentation </a>
									<div class="text-slate-500 text-xs mt-0.5">40 KB</div>
								</div>
								<DropdownMenu.Root>
									<DropdownMenu.Trigger asChild let:builder>
										<a class="block w-5 h-5 ml-auto" href="/" use:builder.action {...builder}>
											<Lucide icon="EllipsisVertical" class="w-5 h-5 text-slate-500" />
										</a>
									</DropdownMenu.Trigger>
									<DropdownMenu.Content class="w-40">
										<DropdownMenu.Item>
											<Lucide icon="Users" class="w-4 h-4 mr-2" /> Share File
										</DropdownMenu.Item>
										<DropdownMenu.Item>
											<Lucide icon="Trash" class="w-4 h-4 mr-2" />
										</DropdownMenu.Item>
									</DropdownMenu.Content>
								</DropdownMenu.Root>
							</div>
							<div class="flex items-center mt-5">
								<FileIcon class="w-12 text-xs file" variant="file" type="MP3" />
								<div class="ml-4">
									<a class="font-medium" href="#top"> Celine Dion - Ashes </a>
									<div class="text-slate-500 text-xs mt-0.5">40 KB</div>
								</div>
								<DropdownMenu.Root>
									<DropdownMenu.Trigger asChild let:builder>
										<a class="block w-5 h-5 ml-auto" href="/" use:builder.action {...builder}>
											<Lucide icon="EllipsisVertical" class="w-5 h-5 text-slate-500" />
										</a>
									</DropdownMenu.Trigger>
									<DropdownMenu.Content class="w-40">
										<DropdownMenu.Item>
											<Lucide icon="Users" class="w-4 h-4 mr-2" /> Share File
										</DropdownMenu.Item>
										<DropdownMenu.Item>
											<Lucide icon="Trash" class="w-4 h-4 mr-2" />
										</DropdownMenu.Item>
									</DropdownMenu.Content>
								</DropdownMenu.Root>
							</div>
							<div class="flex items-center mt-5">
								<FileIcon class="w-12 file" variant="empty-directory" />
								<div class="ml-4">
									<a class="font-medium" href="#top"> Resources </a>
									<div class="text-slate-500 text-xs mt-0.5">0 KB</div>
								</div>
								<DropdownMenu.Root>
									<DropdownMenu.Trigger asChild let:builder>
										<a class="block w-5 h-5 ml-auto" href="/" use:builder.action {...builder}>
											<Lucide icon="EllipsisVertical" class="w-5 h-5 text-slate-500" />
										</a>
									</DropdownMenu.Trigger>
									<DropdownMenu.Content class="w-40">
										<DropdownMenu.Item>
											<Lucide icon="Users" class="w-4 h-4 mr-2" /> Share File
										</DropdownMenu.Item>
										<DropdownMenu.Item>
											<Lucide icon="Trash" class="w-4 h-4 mr-2" />
										</DropdownMenu.Item>
									</DropdownMenu.Content>
								</DropdownMenu.Root>
							</div>
						</div>
					</div>
					<!-- END: Latest Uploads -->
					<!-- BEGIN: Work In Progress -->
					<Tabs.Root value="new" class="col-span-12 intro-y box lg:col-span-6">
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
								<Button as="a" variant="secondary" href="#top" class="block w-40 mx-auto mt-5">
									View More Details
								</Button>
							</Tabs.Content>
						</div>
					</Tabs.Root>
					<!-- END: Work In Progress -->
					<!-- BEGIN: Daily Sales -->
					<div class="col-span-12 intro-y box lg:col-span-6">
						<div
							class="flex items-center px-5 py-5 border-b sm:py-3 border-slate-200/60 dark:border-darkmode-400"
						>
							<h2 class="mr-auto text-base font-medium">Daily Sales</h2>
							<DropdownMenu.Root>
								<DropdownMenu.Trigger asChild let:builder>
									<a
										class="block w-5 h-5 ml-auto sm:hidden"
										href="/"
										use:builder.action
										{...builder}
									>
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
					<!-- BEGIN: Latest Tasks -->
					<Tabs.Root value="new" class="col-span-12 intro-y box lg:col-span-6">
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
							</Tabs.Content>
						</div>
					</Tabs.Root>
					<!-- END: Latest Tasks -->
					<!-- BEGIN: New Products -->
					<div class="col-span-12 intro-y box">
						<div
							class="flex items-center px-5 py-3 border-b border-slate-200/60 dark:border-darkmode-400"
						>
							<h2 class="mr-auto text-base font-medium">New Products</h2>
							<Button variant="outline-secondary" class="px-2 mr-2" on:click={prevNewProducts}>
								<Lucide icon="ChevronLeft" class="w-4 h-4" />
							</Button>
							<Button variant="outline-secondary" class="px-2" on:click={nextNewProducts}>
								<Lucide icon="ChevronRight" class="w-4 h-4" />
							</Button>
						</div>
						<div id="new-products" class="py-5 tiny-slider">
							<TinySlider bind:ref={newProductsRef}>
								{#each _.take(fakerData, 5) as faker, fakerKey}
									<div class="px-5">
										<div class="flex flex-col items-center pb-5 lg:flex-row">
											<div
												class="flex flex-col items-center pr-5 sm:flex-row lg:border-r border-slate-200/60 dark:border-darkmode-400"
											>
												<div class="sm:mr-5">
													<div class="w-20 h-20 image-fit">
														<img
															alt="Midone Tailwind HTML Admin Template"
															class="rounded-full"
															src={faker.images[0]}
														/>
													</div>
												</div>
												<div class="mt-3 mr-auto text-center sm:text-left sm:mt-0">
													<a href="#top" class="text-lg font-medium">
														{faker.products[0].name}
													</a>
													<div class="mt-1 text-slate-500 sm:mt-0">
														{faker.news[0].shortContent}
													</div>
												</div>
											</div>
											<div
												class="flex items-center justify-center flex-1 w-full px-5 pt-4 mt-6 border-t lg:w-auto lg:mt-0 lg:pt-0 lg:border-t-0 border-slate-200/60 dark:border-darkmode-400"
											>
												<div class="w-20 py-3 text-center rounded-md">
													<div class="text-xl font-medium text-primary">
														{faker.totals[0]}
													</div>
													<div class="text-slate-500">Orders</div>
												</div>
												<div class="w-20 py-3 text-center rounded-md">
													<div class="text-xl font-medium text-primary">
														{faker.totals[1]}k
													</div>
													<div class="text-slate-500">Purchases</div>
												</div>
												<div class="w-20 py-3 text-center rounded-md">
													<div class="text-xl font-medium text-primary">
														{faker.totals[0]}
													</div>
													<div class="text-slate-500">Reviews</div>
												</div>
											</div>
										</div>
										<div
											class="flex flex-col items-center pt-5 border-t sm:flex-row border-slate-200/60 dark:border-darkmode-400"
										>
											<div
												class="flex items-center justify-center w-full pb-5 border-b sm:w-auto sm:justify-start sm:border-b-0 border-slate-200/60 dark:border-darkmode-400 sm:pb-0"
											>
												<div
													class="px-3 py-2 mr-3 font-medium rounded text-primary bg-primary/10 dark:bg-darkmode-400 dark:text-slate-300"
												>
													{faker.dates[0]}
												</div>
												<div class="text-slate-500">Date of Release</div>
											</div>
											<div class="flex mt-5 sm:ml-auto sm:mt-0">
												<Button variant="secondary" class="w-20 ml-auto">Preview</Button>
												<Button variant="secondary" class="w-20 ml-2">Details</Button>
											</div>
										</div>
									</div>{/each}
							</TinySlider>
						</div>
					</div>
					<!-- END: New Products -->
					<!-- BEGIN: New Authors -->
					<div class="col-span-12 intro-y box">
						<div
							class="flex items-center px-5 py-3 border-b border-slate-200/60 dark:border-darkmode-400"
						>
							<h2 class="mr-auto text-base font-medium">New Authors</h2>
							<Button variant="outline-secondary" class="px-2 mr-2" on:click={prevNewAuthors}>
								<Lucide icon="ChevronLeft" class="w-4 h-4" />
							</Button>
							<Button variant="outline-secondary" class="px-2" on:click={nextNewAuthors}>
								<Lucide icon="ChevronRight" class="w-4 h-4" />
							</Button>
						</div>
						<div id="new-authors" class="py-5 tiny-slider">
							<TinySlider bind:ref={newAuthorsRef}>
								{#each _.take(fakerData, 5) as faker, fakerKey}
									<div class="px-5">
										<div class="flex flex-col items-center pb-5 lg:flex-row">
											<div
												class="flex flex-col items-center flex-1 pr-5 sm:flex-row lg:border-r border-slate-200/60 dark:border-darkmode-400"
											>
												<div class="sm:mr-5">
													<div class="w-20 h-20 image-fit">
														<img
															alt="Midone Tailwind HTML Admin Template"
															class="rounded-full"
															src={faker.photos[0]}
														/>
													</div>
												</div>
												<div class="mt-3 mr-auto text-center sm:text-left sm:mt-0">
													<a href="#top" class="text-lg font-medium">
														{faker.users[0].name}
													</a>
													<div class="mt-1 text-slate-500 sm:mt-0">
														{faker.jobs[0]}
													</div>
												</div>
											</div>
											<div
												class="flex flex-col items-center justify-center flex-1 w-full px-5 pt-4 mt-6 border-t lg:w-auto lg:mt-0 lg:pt-0 lg:items-start lg:border-t-0 border-slate-200/60 dark:border-darkmode-400"
											>
												<div class="flex items-center">
													<a
														href="#top"
														class="flex items-center justify-center w-8 h-8 mr-2 border rounded-full text-slate-400"
													>
														<Lucide icon="Facebook" class="w-3 h-3 fill-current" />
													</a>
													{faker.users[0].email}
												</div>
												<div class="flex items-center mt-2">
													<a
														href="#top"
														class="flex items-center justify-center w-8 h-8 mr-2 border rounded-full text-slate-400"
													>
														<Lucide icon="Twitter" class="w-3 h-3 fill-current" />
													</a>
													{faker.users[0].name}
												</div>
											</div>
										</div>
										<div
											class="flex flex-col items-center pt-5 border-t sm:flex-row border-slate-200/60 dark:border-darkmode-400"
										>
											<div
												class="flex items-center justify-center w-full pb-5 border-b sm:w-auto sm:justify-start sm:border-b-0 border-slate-200/60 dark:border-darkmode-400 sm:pb-0"
											>
												<div
													class="px-3 py-2 mr-3 font-medium rounded text-primary bg-primary/10 dark:bg-darkmode-400 dark:text-slate-300"
												>
													{faker.dates[0]}
												</div>
												<div class="text-slate-500">Joined Date</div>
											</div>
											<div class="flex mt-5 sm:ml-auto sm:mt-0">
												<Button variant="secondary" class="w-20 ml-auto">Message</Button>
												<Button variant="secondary" class="w-20 ml-2">Profile</Button>
											</div>
										</div>
									</div>
								{/each}
							</TinySlider>
						</div>
					</div>
					<!-- END: New Authors -->
				</div>
			</Tabs.Content>
		</div>
	</Tabs.Root>
</div>
