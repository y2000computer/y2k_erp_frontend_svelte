<script lang="ts">
	import _ from 'lodash';
	import clsx from 'clsx';
	import fakerData from '@/utils/faker';
	import Button from '$lib/components/Button';
	import Pagination from '$lib/components/Pagination';
	import { FormCheck, FormInput, FormSelect } from '$lib/components/Form';
	import Lucide from '$lib/components/Lucide';
	import * as DropdownMenu from '$lib/components/DropdownMenu';
	import * as Dialog from '$lib/components/Dialog';
	import Table from '$lib/components/Table';

	let deleteConfirmationModal = false;
</script>

<div>
	<h2 class="mt-10 text-lg font-medium intro-y">Transaction List</h2>
	<div class="grid grid-cols-12 gap-6 mt-5">
		<div class="flex flex-wrap items-center col-span-12 mt-2 intro-y xl:flex-nowrap">
			<div class="flex w-full sm:w-auto">
				<div class="relative w-48 text-slate-500">
					<FormInput type="text" class="w-48 pr-10 !box" placeholder="Search by invoice..." />
					<Lucide icon="Search" class="absolute inset-y-0 right-0 w-4 h-4 my-auto mr-3" />
				</div>
				<FormSelect class="ml-2 !box">
					<option>Status</option>
					<option>Waiting Payment</option>
					<option>Confirmed</option>
					<option>Packing</option>
					<option>Delivered</option>
					<option>Completed</option>
				</FormSelect>
			</div>
			<div class="hidden mx-auto xl:block text-slate-500">Showing 1 to 10 of 150 entries</div>
			<div class="flex items-center w-full mt-3 xl:w-auto xl:mt-0">
				<Button variant="primary" class="mr-2 shadow-md">
					<Lucide icon="FileText" class="w-4 h-4 mr-2" /> Export to Excel
				</Button>
				<Button variant="primary" class="mr-2 shadow-md">
					<Lucide icon="FileText" class="w-4 h-4 mr-2" /> Export to PDF
				</Button>
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
							<Lucide icon="Printer" class="w-4 h-4 mr-2" /> Print
						</DropdownMenu.Item>
						<DropdownMenu.Item>
							<Lucide icon="FileText" class="w-4 h-4 mr-2" /> Export to Excel
						</DropdownMenu.Item>
						<DropdownMenu.Item>
							<Lucide icon="FileText" class="w-4 h-4 mr-2" /> Export to PDF
						</DropdownMenu.Item>
					</DropdownMenu.Content>
				</DropdownMenu.Root>
			</div>
		</div>
		<!-- BEGIN: Data List -->
		<div class="col-span-12 overflow-auto intro-y 2xl:overflow-visible">
			<Table class="border-spacing-y-[10px] border-separate -mt-2">
				<Table.Thead>
					<Table.Tr>
						<Table.Th class="border-b-0 whitespace-nowrap">
							<FormCheck.Input type="checkbox" />
						</Table.Th>
						<Table.Th class="border-b-0 whitespace-nowrap">INVOICE</Table.Th>
						<Table.Th class="border-b-0 whitespace-nowrap">BUYER NAME</Table.Th>
						<Table.Th class="text-center border-b-0 whitespace-nowrap">STATUS</Table.Th>
						<Table.Th class="border-b-0 whitespace-nowrap">PAYMENT</Table.Th>
						<Table.Th class="text-right border-b-0 whitespace-nowrap">
							<div class="pr-16">TOTAL TRANSACTION</div>
						</Table.Th>
						<Table.Th class="text-center border-b-0 whitespace-nowrap">ACTIONS</Table.Th>
					</Table.Tr>
				</Table.Thead>
				<Table.Tbody>
					{#each _.take(fakerData, 9) as faker, fakerKey}
						<Table.Tr key={fakerKey} class="intro-x">
							<Table.Td
								class="first:rounded-l-md last:rounded-r-md w-10 bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]"
							>
								<FormCheck.Input type="checkbox" />
							</Table.Td>
							<Table.Td
								class="first:rounded-l-md last:rounded-r-md w-40 !py-4 bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]"
							>
								<a href="#top" class="underline decoration-dotted whitespace-nowrap">
									{'#INV-' + faker.totals[0] + '807556'}
								</a>
							</Table.Td>
							<Table.Td
								class="first:rounded-l-md last:rounded-r-md w-40 bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]"
							>
								<a href="#top" class="font-medium whitespace-nowrap">
									{faker.users[0].name}
								</a>
								{#if faker.trueFalse[0]}
									<div class="text-slate-500 text-xs whitespace-nowrap mt-0.5">Ohio, Ohio</div>
								{:else}
									<div class="text-slate-500 text-xs whitespace-nowrap mt-0.5">California, LA</div>
								{/if}
							</Table.Td>
							<Table.Td
								class="first:rounded-l-md last:rounded-r-md text-center bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]"
							>
								<div
									class={clsx({
										'flex items-center justify-center whitespace-nowrap': true,
										'text-success': faker.trueFalse[0],
										'text-danger': !faker.trueFalse[0]
									})}
								>
									<Lucide icon="SquareCheck" class="w-4 h-4 mr-2" />
									{faker.trueFalse[0] ? 'Active' : 'Inactive'}
								</div>
							</Table.Td>
							<Table.Td
								class="first:rounded-l-md last:rounded-r-md bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]"
							>
								{#if faker.trueFalse[0]}
									<div class="whitespace-nowrap">Direct bank transfer</div>
									<div class="text-slate-500 text-xs whitespace-nowrap mt-0.5">25 March, 12:55</div>
								{:else}
									<div class="whitespace-nowrap">Checking payments</div>
									<div class="text-slate-500 text-xs whitespace-nowrap mt-0.5">30 March, 11:00</div>
								{/if}
							</Table.Td>
							<Table.Td
								class="first:rounded-l-md last:rounded-r-md w-40 text-right bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]"
							>
								<div class="pr-16">${faker.totals[0] + ',000,00'}</div>
							</Table.Td>
							<Table.Td
								class="first:rounded-l-md last:rounded-r-md bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b] py-0 relative before:block before:w-px before:h-8 before:bg-slate-200 before:absolute before:left-0 before:inset-y-0 before:my-auto before:dark:bg-darkmode-400"
							>
								<div class="flex items-center justify-center">
									<a class="flex items-center mr-5 text-primary whitespace-nowrap" href="#top">
										<Lucide icon="SquareCheck" class="w-4 h-4 mr-1" />
										View Details
									</a>
									<a
										class="flex items-center text-primary whitespace-nowrap"
										href="#top"
										on:click={(event) => {
											event.preventDefault();
											deleteConfirmationModal = true;
										}}
									>
										<Lucide icon="ArrowLeftRight" class="w-4 h-4 mr-1" />
										Change Status
									</a>
								</div>
							</Table.Td>
						</Table.Tr>
					{/each}
				</Table.Tbody>
			</Table>
		</div>
		<!-- END: Data List -->
		<!-- BEGIN: Pagination -->
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
		<!-- END: Pagination -->
	</div>
	<!-- BEGIN: Delete Confirmation Modal -->
	<Dialog.Root bind:open={deleteConfirmationModal}>
		<Dialog.Content class="sm:max-w-[425px]">
			<div class="p-5 text-center">
				<Lucide icon="CircleX" class="w-16 h-16 mx-auto mt-3 text-danger" />
				<div class="mt-5 text-3xl">Are you sure?</div>
				<div class="mt-2 text-slate-500">
					Do you really want to delete these records? <br />
					This process cannot be undone.
				</div>
			</div>
			<div class="px-5 pb-8 text-center">
				<Button
					variant="outline-secondary"
					type="button"
					on:click={() => {
						deleteConfirmationModal = false;
					}}
					class="w-24 mr-1"
				>
					Cancel
				</Button>
				<Button variant="danger" type="button" class="w-24">Delete</Button>
			</div>
		</Dialog.Content>
	</Dialog.Root>
	<!-- END: Delete Confirmation Modal -->
</div>
