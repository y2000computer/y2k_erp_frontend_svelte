<script lang="ts">
	import _ from 'lodash';
	import fakerData from '@/utils/faker';
	import Button from '$lib/components/Button';
	import { FormInput, FormLabel } from '$lib/components/Form';
	import Lucide from '$lib/components/Lucide';
	import * as DropdownMenu from '$lib/components/DropdownMenu';
</script>

<div>
	<div class="flex items-center mt-8 intro-y">
		<h2 class="mr-auto text-lg font-medium">Change Password</h2>
	</div>
	<div class="grid grid-cols-12 gap-6">
		<!-- BEGIN: Profile Menu -->
		<div class="flex flex-col-reverse col-span-12 lg:col-span-4 2xl:col-span-3 lg:block">
			<div class="mt-5 intro-y box">
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
		</div>
		<!-- END: Profile Menu -->
		<div class="col-span-12 lg:col-span-8 2xl:col-span-9">
			<!-- BEGIN: Change Password -->
			<div class="intro-y box lg:mt-5">
				<div class="flex items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
					<h2 class="mr-auto text-base font-medium">Change Password</h2>
				</div>
				<div class="p-5">
					<div>
						<FormLabel htmlFor="change-password-form-1">Old Password</FormLabel>
						<FormInput id="change-password-form-1" type="password" placeholder="Input text" />
					</div>
					<div class="mt-3">
						<FormLabel htmlFor="change-password-form-2">New Password</FormLabel>
						<FormInput id="change-password-form-2" type="password" placeholder="Input text" />
					</div>
					<div class="mt-3">
						<FormLabel htmlFor="change-password-form-3">Confirm New Password</FormLabel>
						<FormInput id="change-password-form-3" type="password" placeholder="Input text" />
					</div>
					<Button variant="primary" type="button" class="mt-4">Change Password</Button>
				</div>
			</div>
			<!-- END: Change Password -->
		</div>
	</div>
</div>
