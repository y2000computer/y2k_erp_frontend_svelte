<script lang="ts">
	import '@/assets/css/vendors/tabulator.css';
	import Lucide from '$lib/components/Lucide';
	import * as DropdownMenu from '$lib/components/DropdownMenu';
	import Button from '$lib/components/Button';
	import { FormInput, FormSelect } from '$lib/components/Form';
	import * as xlsx from 'xlsx';
	import { createIcons, icons } from 'lucide';
	import { TabulatorFull as Tabulator } from 'tabulator-tables';
	import { stringToHTML } from '@/utils/helper';
	import { onMount } from 'svelte';

	interface Response {
		name?: string;
		category?: string;
		images?: string[];
		status?: string;
	}

	let tableRef: HTMLDivElement;
	let tabulator: Tabulator;
	let filter = {
		field: 'name',
		type: 'like',
		value: ''
	};

	const imageAssets = import.meta.glob<{
		default: string;
	}>('/src/assets/images/fakers/*.{jpg,jpeg,png,svg}', { eager: true });
	const initTabulator = () => {
		if (tableRef) {
			tabulator = new Tabulator(tableRef, {
				ajaxURL: 'https://dummy-data.left4code.com',
				paginationMode: 'remote',
				filterMode: 'remote',
				sortMode: 'remote',
				printAsHtml: true,
				printStyled: true,
				pagination: true,
				paginationSize: 10,
				paginationSizeSelector: [10, 20, 30, 40],
				layout: 'fitColumns',
				responsiveLayout: 'collapse',
				placeholder: 'No matching records found',
				columns: [
					{
						title: '',
						formatter: 'responsiveCollapse',
						width: 40,
						minWidth: 30,
						hozAlign: 'center',
						resizable: false,
						headerSort: false
					},

					// For HTML table
					{
						title: 'PRODUCT NAME',
						minWidth: 200,
						responsive: 0,
						field: 'name',
						vertAlign: 'middle',
						print: false,
						download: false,
						formatter(cell) {
							const response: Response = cell.getData();
							return `<div>
                  <div class="font-medium whitespace-nowrap">${response.name}</div>
                  <div class="text-xs text-slate-500 whitespace-nowrap">${response.category}</div>
                </div>`;
						}
					},
					{
						title: 'IMAGES',
						minWidth: 200,
						field: 'images',
						hozAlign: 'center',
						headerHozAlign: 'center',
						vertAlign: 'middle',
						print: false,
						download: false,
						formatter(cell) {
							const response: Response = cell.getData();
							return response.images
								? `<div class="flex lg:justify-center">
                      <div class="w-10 h-10 intro-x image-fit">
                        <img alt="Midone Tailwind HTML Admin Template" class="rounded-full shadow-[0px_0px_0px_2px_#fff,_1px_1px_5px_rgba(0,0,0,0.32)] dark:shadow-[0px_0px_0px_2px_#3f4865,_1px_1px_5px_rgba(0,0,0,0.32)]" src="${
													imageAssets['/src/assets/images/fakers/' + response.images[0]].default
												}">
                      </div>
                      <div class="w-10 h-10 -ml-5 intro-x image-fit">
                        <img alt="Midone Tailwind HTML Admin Template" class="rounded-full shadow-[0px_0px_0px_2px_#fff,_1px_1px_5px_rgba(0,0,0,0.32)] dark:shadow-[0px_0px_0px_2px_#3f4865,_1px_1px_5px_rgba(0,0,0,0.32)]" src="${
													imageAssets['/src/assets/images/fakers/' + response.images[1]].default
												}">
                      </div>
                      <div class="w-10 h-10 -ml-5 intro-x image-fit">
                        <img alt="Midone Tailwind HTML Admin Template" class="rounded-full shadow-[0px_0px_0px_2px_#fff,_1px_1px_5px_rgba(0,0,0,0.32)] dark:shadow-[0px_0px_0px_2px_#3f4865,_1px_1px_5px_rgba(0,0,0,0.32)]" src="${
													imageAssets['/src/assets/images/fakers/' + response.images[2]].default
												}">
                      </div>
                  </div>`
								: '';
						}
					},
					{
						title: 'REMAINING STOCK',
						minWidth: 200,
						field: 'remaining_stock',
						hozAlign: 'center',
						headerHozAlign: 'center',
						vertAlign: 'middle',
						print: false,
						download: false
					},
					{
						title: 'STATUS',
						minWidth: 200,
						field: 'status',
						hozAlign: 'center',
						headerHozAlign: 'center',
						vertAlign: 'middle',
						print: false,
						download: false,
						formatter(cell) {
							const response: Response = cell.getData();
							return `<div class="flex items-center lg:justify-center ${
								response.status ? 'text-success' : 'text-danger'
							}">
                  <i data-lucide="check-square" class="w-4 h-4 mr-2"></i> ${
										response.status ? 'Active' : 'Inactive'
									}
                </div>`;
						}
					},
					{
						title: 'ACTIONS',
						minWidth: 200,
						field: 'actions',
						responsive: 1,
						hozAlign: 'center',
						headerHozAlign: 'center',
						vertAlign: 'middle',
						print: false,
						download: false,
						formatter() {
							const a = stringToHTML(`<div class="flex items-center lg:justify-center">
                    <a class="flex items-center mr-3" href="javascript:;">
                      <i data-lucide="check-square" class="w-4 h-4 mr-1"></i> Edit
                    </a>
                    <a class="flex items-center text-danger" href="javascript:;">
                      <i data-lucide="trash-2" class="w-4 h-4 mr-1"></i> Delete
                    </a>
                  </div>`);
							a.addEventListener('click', function () {
								// On click actions
							});
							return a;
						}
					},

					// For print format
					{
						title: 'PRODUCT NAME',
						field: 'name',
						visible: false,
						print: true,
						download: true
					},
					{
						title: 'CATEGORY',
						field: 'category',
						visible: false,
						print: true,
						download: true
					},
					{
						title: 'REMAINING STOCK',
						field: 'remaining_stock',
						visible: false,
						print: true,
						download: true
					},
					{
						title: 'STATUS',
						field: 'status',
						visible: false,
						print: true,
						download: true,
						formatterPrint(cell) {
							return cell.getValue() ? 'Active' : 'Inactive';
						}
					},
					{
						title: 'IMAGE 1',
						field: 'images',
						visible: false,
						print: true,
						download: true,
						formatterPrint(cell) {
							return cell.getValue()[0];
						}
					},
					{
						title: 'IMAGE 2',
						field: 'images',
						visible: false,
						print: true,
						download: true,
						formatterPrint(cell) {
							return cell.getValue()[1];
						}
					},
					{
						title: 'IMAGE 3',
						field: 'images',
						visible: false,
						print: true,
						download: true,
						formatterPrint(cell) {
							return cell.getValue()[2];
						}
					}
				]
			});
		}

		tabulator?.on('renderComplete', () => {
			createIcons({
				icons,
				attrs: {
					'stroke-width': 1.5
				},
				nameAttr: 'data-lucide'
			});
		});
	};

	// Redraw table onresize
	const reInitOnResizeWindow = () => {
		window.addEventListener('resize', () => {
			if (tabulator) {
				tabulator.redraw();
				createIcons({
					icons,
					attrs: {
						'stroke-width': 1.5
					},
					nameAttr: 'data-lucide'
				});
			}
		});
	};

	// Filter function
	const onFilter = () => {
		if (tabulator) {
			tabulator.setFilter(filter.field, filter.type, filter.value);
		}
	};

	// On reset filter
	const onResetFilter = () => {
		filter = {
			...filter,
			field: 'name',
			type: 'like',
			value: ''
		};
		onFilter();
	};

	// Export
	const onExportCsv = () => {
		if (tabulator) {
			tabulator.download('csv', 'data.csv');
		}
	};

	const onExportJson = () => {
		if (tabulator) {
			tabulator.download('json', 'data.json');
		}
	};

	const onExportXlsx = () => {
		if (tabulator) {
			(window as any).XLSX = xlsx;
			tabulator.download('xlsx', 'data.xlsx', {
				sheetName: 'Products'
			});
		}
	};

	const onExportHtml = () => {
		if (tabulator) {
			tabulator.download('html', 'data.html', {
				style: true
			});
		}
	};

	// Print
	const onPrint = () => {
		if (tabulator) {
			tabulator.print();
		}
	};

	onMount(() => {
		initTabulator();
		reInitOnResizeWindow();
	});
</script>

<div>
	<div class="flex flex-col items-center mt-8 intro-y sm:flex-row">
		<h2 class="mr-auto text-lg font-medium">Tabulator</h2>
		<div class="flex w-full mt-4 sm:w-auto sm:mt-0">
			<Button variant="primary" class="mr-2 shadow-md">Add New Product</Button>
			<DropdownMenu.Root>
				<DropdownMenu.Trigger asChild let:builder>
					<div class="ml-auto sm:ml-0" use:builder.action {...builder}>
						<Button class="px-2 font-normal !box">
							<span class="flex items-center justify-center w-5 h-5">
								<Lucide icon="Plus" class="w-4 h-4" />
							</span>
						</Button>
					</div>
				</DropdownMenu.Trigger>
				<DropdownMenu.Content class="w-40">
					<DropdownMenu.Item>
						<Lucide icon="FilePlus" class="w-4 h-4 mr-2" /> New Category
					</DropdownMenu.Item>
					<DropdownMenu.Item>
						<Lucide icon="UserPlus" class="w-4 h-4 mr-2" /> New Group
					</DropdownMenu.Item>
				</DropdownMenu.Content>
			</DropdownMenu.Root>
		</div>
	</div>
	<!-- BEGIN: HTML Table Data -->
	<div class="p-5 mt-5 intro-y box">
		<div class="flex flex-col sm:flex-row sm:items-end xl:items-start">
			<form
				id="tabulator-html-filter-form"
				class="xl:flex sm:mr-auto"
				on:submit={(e) => {
					e.preventDefault();
					onFilter();
				}}
			>
				<div class="items-center sm:flex sm:mr-4">
					<label for="" class="flex-none w-12 mr-2 xl:w-auto xl:flex-initial"> Field </label>
					<FormSelect
						id="tabulator-html-filter-field"
						bind:value={filter.field}
						class="w-full mt-2 2xl:w-full sm:mt-0 sm:w-auto"
					>
						<option value="name">Name</option>
						<option value="category">Category</option>
						<option value="remaining_stock">Remaining Stock</option>
					</FormSelect>
				</div>
				<div class="items-center mt-2 sm:flex sm:mr-4 xl:mt-0">
					<label for="" class="flex-none w-12 mr-2 xl:w-auto xl:flex-initial"> Type </label>
					<FormSelect
						id="tabulator-html-filter-type"
						bind:value={filter.type}
						class="w-full mt-2 sm:mt-0 sm:w-auto"
					>
						<option value="like">like</option>
						<option value="=">=</option>
						<option value="<">&lt;</option>
						<option value="<=">&lt;=</option>
						<option value=">">&gt;</option>
						<option value=">=">&gt;=</option>
						<option value="!=">!=</option>
					</FormSelect>
				</div>
				<div class="items-center mt-2 sm:flex sm:mr-4 xl:mt-0">
					<label for="" class="flex-none w-12 mr-2 xl:w-auto xl:flex-initial"> Value </label>
					<FormInput
						id="tabulator-html-filter-value"
						bind:value={filter.value}
						type="text"
						class="mt-2 sm:w-40 2xl:w-full sm:mt-0"
						placeholder="Search..."
					/>
				</div>
				<div class="mt-2 xl:mt-0">
					<Button
						id="tabulator-html-filter-go"
						variant="primary"
						type="button"
						class="w-full sm:w-16"
						on:click={onFilter}
					>
						Go
					</Button>
					<Button
						id="tabulator-html-filter-reset"
						variant="secondary"
						type="button"
						class="w-full mt-2 sm:w-16 sm:mt-0 sm:ml-1"
						on:click={onResetFilter}
					>
						Reset
					</Button>
				</div>
			</form>
			<div class="flex mt-5 sm:mt-0">
				<Button
					id="tabulator-print"
					variant="outline-secondary"
					class="w-1/2 mr-2 sm:w-auto"
					on:click={onPrint}
				>
					<Lucide icon="Printer" class="w-4 h-4 mr-2" /> Print
				</Button>
				<DropdownMenu.Root>
					<DropdownMenu.Trigger asChild let:builder>
						<div class="w-1/2 sm:w-auto" use:builder.action {...builder}>
							<Button variant="outline-secondary" class="w-full sm:w-auto">
								<Lucide icon="FileText" class="w-4 h-4 mr-2" /> Export
								<Lucide icon="ChevronDown" class="w-4 h-4 ml-auto sm:ml-2" />
							</Button>
						</div>
					</DropdownMenu.Trigger>
					<DropdownMenu.Content class="w-40">
						<DropdownMenu.Item on:click={onExportCsv}>
							<Lucide icon="FileText" class="w-4 h-4 mr-2" /> Export CSV
						</DropdownMenu.Item>
						<DropdownMenu.Item on:click={onExportJson}>
							<Lucide icon="FileText" class="w-4 h-4 mr-2" /> Export JSON
						</DropdownMenu.Item>
						<DropdownMenu.Item on:click={onExportXlsx}>
							<Lucide icon="FileText" class="w-4 h-4 mr-2" /> Export XLSX
						</DropdownMenu.Item>
						<DropdownMenu.Item on:click={onExportHtml}>
							<Lucide icon="FileText" class="w-4 h-4 mr-2" /> Export HTML
						</DropdownMenu.Item>
					</DropdownMenu.Content>
				</DropdownMenu.Root>
			</div>
		</div>
		<div class="overflow-x-auto scrollbar-hidden">
			<div id="tabulator" bind:this={tableRef} class="mt-5" />
		</div>
	</div>
	<!-- END: HTML Table Data -->
</div>
