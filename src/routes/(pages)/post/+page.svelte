<script lang="ts">
	import _ from 'lodash';
	import clsx from 'clsx';
	import fakerData from '@/utils/faker';
	import Button from '$lib/components/Button';
	import { FormInput, FormLabel, FormSwitch } from '$lib/components/Form';
	import Lucide from '$lib/components/Lucide';
	import Tippy from '$lib/components/Tippy';
	import Litepicker from '$lib/components/Litepicker';
	import TomSelect from '$lib/components/TomSelect';
	import { ClassicEditor } from '$lib/components/Ckeditor';
	import * as Tabs from '$lib/components/Tabs';
	import * as DropdownMenu from '$lib/components/DropdownMenu';

	let categories = ['1', '2'];
	let tags = ['1', '2'];
	let salesReportFilter = '';
	let editorData = '<p>Content of the editor.</p>';
</script>

<div>
	<div class="flex flex-col items-center mt-8 intro-y sm:flex-row">
		<h2 class="mr-auto text-lg font-medium">Add New Post</h2>
		<div class="flex w-full mt-4 sm:w-auto sm:mt-0">
			<DropdownMenu.Root>
				<DropdownMenu.Trigger asChild let:builder>
					<div use:builder.action {...builder} class="mr-2">
						<Button class="flex items-center !box">
							English <Lucide icon="ChevronDown" class="w-4 h-4 ml-2" />
						</Button>
					</div>
				</DropdownMenu.Trigger>
				<DropdownMenu.Content class="w-40">
					<DropdownMenu.Item>
						<Lucide icon="Activity" class="w-4 h-4 mr-2" />
						<span class="truncate">English</span>
					</DropdownMenu.Item>
					<DropdownMenu.Item>
						<Lucide icon="Activity" class="w-4 h-4 mr-2" />
						<span class="truncate">Indonesian</span>
					</DropdownMenu.Item>
				</DropdownMenu.Content>
			</DropdownMenu.Root>
			<Button type="button" class="flex items-center ml-auto mr-2 !box sm:ml-0">
				<Lucide icon="Eye" class="w-4 h-4 mr-2" /> Preview
			</Button>
			<DropdownMenu.Root>
				<DropdownMenu.Trigger asChild let:builder>
					<div use:builder.action {...builder}>
						<Button variant="primary" class="flex items-center shadow-md">
							Save <Lucide icon="ChevronDown" class="w-4 h-4 ml-2" />
						</Button>
					</div>
				</DropdownMenu.Trigger>
				<DropdownMenu.Content class="w-40">
					<DropdownMenu.Item>
						<Lucide icon="FileText" class="w-4 h-4 mr-2" /> As New Post
					</DropdownMenu.Item>
					<DropdownMenu.Item>
						<Lucide icon="FileText" class="w-4 h-4 mr-2" /> As Draft
					</DropdownMenu.Item>
					<DropdownMenu.Item>
						<Lucide icon="FileText" class="w-4 h-4 mr-2" /> Export to PDF
					</DropdownMenu.Item>
					<DropdownMenu.Item>
						<Lucide icon="FileText" class="w-4 h-4 mr-2" /> Export to Word
					</DropdownMenu.Item>
				</DropdownMenu.Content>
			</DropdownMenu.Root>
		</div>
	</div>
	<div class="grid grid-cols-12 gap-5 mt-5 intro-y">
		<!-- BEGIN: Post Content -->
		<div class="col-span-12 intro-y lg:col-span-8">
			<FormInput type="text" class="px-4 py-3 pr-10 intro-y !box" placeholder="Title" />
			<Tabs.Root value="content" class="mt-5 overflow-hidden intro-y box">
				<Tabs.List
					class="flex-col border-b-0 border-transparent dark:border-transparent sm:flex-row bg-slate-200 dark:bg-darkmode-800"
				>
					<Tabs.Trigger
						value="content"
						class={clsx([
							'flex items-center justify-center w-full px-0 py-0 sm:w-40 text-slate-500',
							'data-[state=inactive]:hover:border-transparent data-[state=inactive]:hover:bg-transparent data-[state=inactive]:hover:text-slate-600 data-[state=inactive]:hover:dark:bg-transparent data-[state=inactive]:hover:dark:text-slate-300',
							'data-[state=active]:text-primary data-[state=active]:border-transparent data-[state=active]:dark:bg-darkmode-600 data-[state=active]:dark:border-x-transparent data-[state=active]:dark:border-t-transparent data-[state=active]:dark:text-white'
						])}
					>
						<Tippy
							content="Fill in the article content"
							class="flex items-center justify-center w-full py-4"
							aria-controls="content"
							aria-selected="true"
						>
							<Lucide icon="FileText" class="w-4 h-4 mr-2" />
							Content
						</Tippy>
					</Tabs.Trigger>
					<Tabs.Trigger
						value="meta-title"
						class={clsx([
							'flex items-center justify-center w-full px-0 py-0 sm:w-40 text-slate-500',
							'data-[state=inactive]:hover:border-transparent data-[state=inactive]:hover:bg-transparent data-[state=inactive]:hover:text-slate-600 data-[state=inactive]:hover:dark:bg-transparent data-[state=inactive]:hover:dark:text-slate-300',
							'data-[state=active]:text-primary data-[state=active]:border-transparent data-[state=active]:dark:bg-darkmode-600 data-[state=active]:dark:border-x-transparent data-[state=active]:dark:border-t-transparent data-[state=active]:dark:text-white'
						])}
					>
						<Tippy
							content="Adjust the meta title"
							class="flex items-center justify-center w-full py-4"
							aria-selected="false"
						>
							<Lucide icon="Code" class="w-4 h-4 mr-2" /> Meta Title
						</Tippy>
					</Tabs.Trigger>
					<Tabs.Trigger
						value="align-left"
						class={clsx([
							'flex items-center justify-center w-full px-0 py-0 sm:w-40 text-slate-500',
							'data-[state=inactive]:hover:border-transparent data-[state=inactive]:hover:bg-transparent data-[state=inactive]:hover:text-slate-600 data-[state=inactive]:hover:dark:bg-transparent data-[state=inactive]:hover:dark:text-slate-300',
							'data-[state=active]:text-primary data-[state=active]:border-transparent data-[state=active]:dark:bg-darkmode-600 data-[state=active]:dark:border-x-transparent data-[state=active]:dark:border-t-transparent data-[state=active]:dark:text-white'
						])}
					>
						<Tippy
							content="Use search keywords"
							class="flex items-center justify-center w-full py-4"
							aria-selected="false"
						>
							<Lucide icon="AlignLeft" class="w-4 h-4 mr-2" />
							Keywords
						</Tippy>
					</Tabs.Trigger>
				</Tabs.List>
				<Tabs.Content value="content" class="p-5">
					<div class="p-5 border rounded-md border-slate-200/60 dark:border-darkmode-400">
						<div
							class="flex items-center pb-5 font-medium border-b border-slate-200/60 dark:border-darkmode-400"
						>
							<Lucide icon="ChevronDown" class="w-4 h-4 mr-2" /> Text Content
						</div>
						<div class="mt-5">
							<ClassicEditor bind:value={editorData} />
						</div>
					</div>
					<div class="p-5 mt-5 border rounded-md border-slate-200/60 dark:border-darkmode-400">
						<div
							class="flex items-center pb-5 font-medium border-b border-slate-200/60 dark:border-darkmode-400"
						>
							<Lucide icon="ChevronDown" class="w-4 h-4 mr-2" />
							Caption & Images
						</div>
						<div class="mt-5">
							<div>
								<FormLabel htmlFor="post-form-7">Caption</FormLabel>
								<FormInput id="post-form-7" type="text" placeholder="Write caption" />
							</div>
							<div class="mt-3">
								<FormLabel>Upload Image</FormLabel>
								<div class="pt-4 border-2 border-dashed rounded-md dark:border-darkmode-400">
									<div class="flex flex-wrap px-4">
										{#each _.take(fakerData, 4) as faker, fakerKey}
											<div class="relative w-24 h-24 mb-5 mr-5 cursor-pointer image-fit zoom-in">
												<img
													class="rounded-md"
													alt="Midone Tailwind HTML Admin Template"
													src={faker.images[0]}
												/>
												<Tippy
													as="div"
													content="Remove this image?"
													class="absolute top-0 right-0 flex items-center justify-center w-5 h-5 -mt-2 -mr-2 text-white rounded-full bg-danger"
												>
													<Lucide icon="X" class="w-4 h-4" />
												</Tippy>
											</div>
										{/each}
									</div>
									<div class="relative flex items-center px-4 pb-4 cursor-pointer">
										<Lucide icon="Image" class="w-4 h-4 mr-2" />
										<span class="mr-1 text-primary"> Upload a file </span>
										or drag and drop
										<FormInput type="file" class="absolute top-0 left-0 w-full h-full opacity-0" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</Tabs.Content>
			</Tabs.Root>
		</div>
		<!-- END: Post Content -->
		<!-- BEGIN: Post Info -->
		<div class="col-span-12 lg:col-span-4">
			<div class="p-5 intro-y box">
				<div>
					<FormLabel>Written By</FormLabel>
					<DropdownMenu.Root>
						<DropdownMenu.Trigger asChild let:builder>
							<div use:builder.action {...builder} class="[&>div:nth-child(2)]:w-full">
								<Button
									variant="outline-secondary"
									class="flex items-center justify-start w-full dark:bg-darkmode-800 dark:border-darkmode-800"
									role="button"
								>
									<div class="w-6 h-6 mr-3 image-fit">
										<img
											class="rounded"
											alt="Midone Tailwind HTML Admin Template"
											src={fakerData[0].photos[0]}
										/>
									</div>
									<div class="truncate">{fakerData[0].users[0].name}</div>
									<Lucide icon="ChevronDown" class="w-4 h-4 ml-auto" />
								</Button>
							</div>
						</DropdownMenu.Trigger>
						<DropdownMenu.Content class="w-72">
							{#each _.take(fakerData, 5) as faker, fakerKey}
								<DropdownMenu.Item>
									<div class="absolute w-6 h-6 mr-3 image-fit">
										<img
											class="rounded"
											alt="Midone Tailwind HTML Admin Template"
											src={faker.photos[0]}
										/>
									</div>
									<div class="pl-1 ml-8">{faker.users[0].name}</div>
								</DropdownMenu.Item>
							{/each}
						</DropdownMenu.Content>
					</DropdownMenu.Root>
				</div>
				<div class="mt-3">
					<FormLabel htmlFor="post-form-2">Post Date</FormLabel>
					<Litepicker
						bind:value={salesReportFilter}
						options={{
							autoApply: false,
							showWeekNumbers: true,
							dropdowns: {
								minYear: 1990,
								maxYear: null,
								months: true,
								years: true
							}
						}}
					/>
				</div>
				<div class="mt-3">
					<FormLabel htmlFor="post-form-3">Categories</FormLabel>
					<TomSelect id="post-form-3" bind:value={categories} class="w-full" multiple>
						<option value="1">Horror</option>
						<option value="2">Sci-fi</option>
						<option value="3">Action</option>
						<option value="4">Drama</option>
						<option value="5">Comedy</option>
					</TomSelect>
				</div>
				<div class="mt-3">
					<FormLabel htmlFor="post-form-4">Tags</FormLabel>
					<TomSelect id="post-form-4" bind:value={tags} class="w-full" multiple>
						<option value="1">Leonardo DiCaprio</option>
						<option value="2">Johnny Deep</option>
						<option value="3">Robert Downey, Jr</option>
						<option value="4">Samuel L. Jackson</option>
						<option value="5">Morgan Freeman</option>
					</TomSelect>
				</div>
				<FormSwitch class="flex flex-col items-start mt-3">
					<FormSwitch.Label htmlFor="post-form-5" class="mb-2 ml-0">Published</FormSwitch.Label>
					<FormSwitch.Input id="post-form-5" type="checkbox" />
				</FormSwitch>
				<FormSwitch class="flex flex-col items-start mt-3">
					<FormSwitch.Label htmlFor="post-form-6" class="mb-2 ml-0">
						Show Author Name
					</FormSwitch.Label>
					<FormSwitch.Input id="post-form-6" type="checkbox" />
				</FormSwitch>
			</div>
		</div>
		<!-- END: Post Info -->
	</div>
</div>
