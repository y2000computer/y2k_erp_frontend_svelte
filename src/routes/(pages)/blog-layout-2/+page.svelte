<script lang="ts">
	import _ from 'lodash';
	import fakerData from '@/utils/faker';
	import Button from '$lib/components/Button';
	import Pagination from '$lib/components/Pagination';
	import { FormInput, FormSelect } from '$lib/components/Form';
	import Lucide from '$lib/components/Lucide';
	import Tippy from '$lib/components/Tippy';
	import * as DropdownMenu from '$lib/components/DropdownMenu';
</script>

<div>
	<div class="flex flex-col items-center mt-8 intro-y sm:flex-row">
		<h2 class="mr-auto text-lg font-medium">Blog Layout</h2>
		<div class="flex w-full mt-4 sm:w-auto sm:mt-0">
			<Button variant="primary" class="mr-2 shadow-md">Add New Post</Button>
			<DropdownMenu.Root>
				<DropdownMenu.Trigger asChild let:builder>
					<div class="ml-auto sm:ml-0" use:builder.action {...builder}>
						<Button class="px-2 !box">
							<span class="flex items-center justify-center w-5 h-5">
								<Lucide icon="Plus" class="w-4 h-4" />
							</span>
						</Button>
					</div>
				</DropdownMenu.Trigger>
				<DropdownMenu.Content class="w-40">
					<DropdownMenu.Item>
						<Lucide icon="Share2" class="w-4 h-4 mr-2" /> Share Post
					</DropdownMenu.Item>
					<DropdownMenu.Item>
						<Lucide icon="Download" class="w-4 h-4 mr-2" /> Download Post
					</DropdownMenu.Item>
				</DropdownMenu.Content>
			</DropdownMenu.Root>
		</div>
	</div>
	<div class="grid grid-cols-12 gap-6 mt-5 intro-y">
		<!-- BEGIN: Blog Layout -->
		{#each _.take(fakerData, 6) as faker, fakerKey}
			<div class="col-span-12 intro-y md:col-span-6 box">
				<div
					class="h-[320px] before:block before:absolute before:w-full before:h-full before:top-0 before:left-0 before:z-10 before:bg-gradient-to-t before:from-black/90 before:to-black/10 image-fit"
				>
					<img
						alt="Midone Tailwind HTML Admin Template"
						class="rounded-t-md"
						src={faker.images[0]}
					/>
					<div class="absolute z-10 flex items-center w-full px-5 pt-6">
						<div class="flex-none w-10 h-10 image-fit">
							<img
								alt="Midone Tailwind HTML Admin Template"
								class="rounded-full"
								src={faker.photos[0]}
							/>
						</div>
						<div class="ml-3 mr-auto text-white">
							<a href="#top" class="font-medium">
								{faker.users[0].name}
							</a>
							<div class="text-xs mt-0.5">
								{faker.formattedTimes[0]}
							</div>
						</div>
						<DropdownMenu.Root>
							<DropdownMenu.Trigger asChild let:builder>
								<a
									href="/"
									class="flex items-center justify-center w-8 h-8 ml-3 rounded-full bg-white/20"
									use:builder.action
									{...builder}
								>
									<Lucide icon="EllipsisVertical" class="w-4 h-4 text-white" />
								</a>
							</DropdownMenu.Trigger>
							<DropdownMenu.Content class="w-40">
								<DropdownMenu.Item>
									<Lucide icon="Pencil" class="w-4 h-4 mr-2" /> Edit Post
								</DropdownMenu.Item>
								<DropdownMenu.Item>
									<Lucide icon="Trash" class="w-4 h-4 mr-2" /> Delete Post
								</DropdownMenu.Item>
							</DropdownMenu.Content>
						</DropdownMenu.Root>
					</div>
					<div class="absolute bottom-0 z-10 px-5 pb-6 text-white">
						<span class="px-2 py-1 rounded bg-white/20">
							{faker.products[0].category}
						</span>
						<a href="#top" class="block mt-3 text-xl font-medium">
							{faker.news[0].title}
						</a>
					</div>
				</div>
				<div class="p-5 text-slate-600 dark:text-slate-500">
					{faker.news[0].shortContent}
				</div>
				<div
					class="flex items-center px-5 py-3 border-t border-slate-200/60 dark:border-darkmode-400"
				>
					<Tippy
						as="a"
						href="#top"
						class="flex items-center justify-center w-8 h-8 mr-2 border rounded-full intro-x border-slate-300 dark:border-darkmode-400 dark:bg-darkmode-300 dark:text-slate-300 text-slate-500"
						content="Bookmark"
					>
						<Lucide icon="Bookmark" class="w-3 h-3" />
					</Tippy>
					<div class="flex mr-2 intro-x">
						<div class="w-8 h-8 intro-x image-fit">
							<Tippy
								as="img"
								alt="Midone Tailwind HTML Admin Template"
								class="border border-white rounded-full zoom-in"
								src={faker.photos[0]}
								content={faker.users[0].name}
							/>
						</div>
						<div class="w-8 h-8 -ml-4 intro-x image-fit">
							<Tippy
								as="img"
								alt="Midone Tailwind HTML Admin Template"
								class="border border-white rounded-full zoom-in"
								src={faker.photos[1]}
								content={faker.users[1].name}
							/>
						</div>
						<div class="w-8 h-8 -ml-4 intro-x image-fit">
							<Tippy
								as="img"
								alt="Midone Tailwind HTML Admin Template"
								class="border border-white rounded-full zoom-in"
								src={faker.photos[2]}
								content={faker.users[2].name}
							/>
						</div>
					</div>
					<Tippy
						as="a"
						href="#top"
						class="flex items-center justify-center w-8 h-8 ml-auto rounded-full intro-x text-primary bg-primary/10 dark:bg-darkmode-300 dark:text-slate-300"
						content="Share"
					>
						<Lucide icon="Share2" class="w-3 h-3" />
					</Tippy>
					<Tippy
						as="a"
						href="#top"
						class="flex items-center justify-center w-8 h-8 ml-2 text-white rounded-full intro-x bg-primary"
						content="Download PDF"
					>
						<Lucide icon="Share" class="w-3 h-3" />
					</Tippy>
				</div>
				<div class="px-5 pt-3 pb-5 border-t border-slate-200/60 dark:border-darkmode-400">
					<div class="flex w-full text-xs text-slate-500 sm:text-sm">
						<div class="mr-2">
							Comments:
							<span class="font-medium">{faker.totals[0]}</span>
						</div>
						<div class="mr-2">
							Views: <span class="font-medium">{faker.totals[1]}k</span>
						</div>
						<div class="ml-auto">
							Likes: <span class="font-medium">{faker.totals[2]}k</span>
						</div>
					</div>
					<div class="flex items-center w-full mt-3">
						<div class="flex-none w-8 h-8 mr-3 image-fit">
							<img
								alt="Midone Tailwind HTML Admin Template"
								class="rounded-full"
								src={faker.photos[0]}
							/>
						</div>
						<div class="relative flex-1 text-slate-600 dark:text-slate-200">
							<FormInput
								rounded
								type="text"
								class="pr-10 border-transparent bg-slate-100"
								placeholder="Post a comment..."
							/>
							<Lucide icon="Smile" class="absolute inset-y-0 right-0 w-4 h-4 my-auto mr-3" />
						</div>
					</div>
				</div>
			</div>
		{/each}
		<!-- END: Blog Layout -->
		<!-- BEGIN: Pagiantion -->
		<div class="flex flex-wrap items-center col-span-12 intro-y sm:flex-row sm:flex-nowrap">
			<Pagination class="w-full sm:w-auto sm:mr-auto">
				<Pagination.Link>
					<Lucide icon="ChevronsLeft" class="w-4 h-4" />
				</Pagination.Link>
				<Pagination.Link>
					<Lucide icon="ChevronLeft" class="w-4 h-4" />
				</Pagination.Link>
				<Pagination.Link>...</Pagination.Link>
				<Pagination.Link>1</Pagination.Link>
				<Pagination.Link active>2</Pagination.Link>
				<Pagination.Link>3</Pagination.Link>
				<Pagination.Link>...</Pagination.Link>
				<Pagination.Link>
					<Lucide icon="ChevronRight" class="w-4 h-4" />
				</Pagination.Link>
				<Pagination.Link>
					<Lucide icon="ChevronsRight" class="w-4 h-4" />
				</Pagination.Link>
			</Pagination>
			<FormSelect class="w-20 mt-3 !box sm:mt-0">
				<option>10</option>
				<option>25</option>
				<option>35</option>
				<option>50</option>
			</FormSelect>
		</div>
		<!-- END: Pagiantion -->
	</div>
</div>
