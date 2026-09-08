<script lang="ts">
	import Preview from '$lib/components/Preview';
	import { FormInput, FormSwitch } from '$lib/components/Form';
	import _ from 'lodash';
	import Button from '$lib/components/Button';
	import Lucide from '$lib/components/Lucide';
	import * as DropdownMenu from '$lib/components/DropdownMenu';
	import * as Popover from '$lib/components/Popover';

	let popoverOpen: boolean = false;
</script>

<div>
	<div class="flex items-center mt-8 intro-y">
		<h2 class="mr-auto text-lg font-medium">Dropdown</h2>
	</div>
	<div class="grid grid-cols-12 gap-6 mt-5">
		<div class="col-span-12 lg:col-span-6">
			<!-- BEGIN: Basic Dropdown -->
			<Preview let:toggle class="intro-y box">
				<div
					class="flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60 dark:border-darkmode-400"
				>
					<h2 class="mr-auto text-base font-medium">Basic Dropdown</h2>
					<FormSwitch class="w-full mt-3 sm:w-auto sm:ml-auto sm:mt-0">
						<FormSwitch.Label htmlFor="show-example-1">Show example code</FormSwitch.Label>
						<FormSwitch.Input
							id="show-example-1"
							on:click={toggle}
							class="ml-3 mr-0"
							type="checkbox"
						/>
					</FormSwitch>
				</div>
				<div class="p-5">
					<Preview.Panel>
						<div class="flex justify-center">
							<DropdownMenu.Root>
								<DropdownMenu.Trigger asChild let:builder>
									<div use:builder.action {...builder}>
										<Button variant="primary">Show Dropdown</Button>
									</div>
								</DropdownMenu.Trigger>
								<DropdownMenu.Content class="w-40">
									<DropdownMenu.Item>New Dropdown</DropdownMenu.Item>
									<DropdownMenu.Item>Delete Dropdown</DropdownMenu.Item>
								</DropdownMenu.Content>
							</DropdownMenu.Root>
						</div>
					</Preview.Panel>
					<Preview.Panel type="source">
						<Preview.Highlight>
							{`
                <DropdownMenu.Root>
                  <DropdownMenu.Trigger asChild let:builder>
                    <div use:builder.action {...builder}>
                      <Button variant="primary">Show Dropdown</Button>
                    </div>
                  </DropdownMenu.Trigger>
                  <DropdownMenu.Content class="w-40">
                    <DropdownMenu.Item>New Dropdown</DropdownMenu.Item>
                    <DropdownMenu.Item>Delete Dropdown</DropdownMenu.Item>
                  </DropdownMenu.Content>
                </DropdownMenu.Root>
                  `}
						</Preview.Highlight>
					</Preview.Panel>
				</div>
			</Preview>
			<!-- END: Basic Dropdown -->
			<!-- BEGIN: Header & Footer Dropdown -->
			<Preview let:toggle class="mt-5 intro-y box">
				<div
					class="flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60 dark:border-darkmode-400"
				>
					<h2 class="mr-auto text-base font-medium">Header & Footer Dropdown</h2>
					<FormSwitch class="w-full mt-3 sm:w-auto sm:ml-auto sm:mt-0">
						<FormSwitch.Label htmlFor="show-example-2">Show example code</FormSwitch.Label>
						<FormSwitch.Input
							id="show-example-2"
							on:click={toggle}
							class="ml-3 mr-0"
							type="checkbox"
						/>
					</FormSwitch>
				</div>
				<div class="p-5">
					<Preview.Panel>
						<div class="flex justify-center">
							<DropdownMenu.Root>
								<DropdownMenu.Trigger asChild let:builder>
									<div use:builder.action {...builder}>
										<Button variant="primary">Show Dropdown</Button>
									</div>
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
										<Button type="button" variant="primary" class="px-2 py-1">Settings</Button>
										<Button type="button" variant="secondary" class="px-2 py-1 ml-auto">
											View Profile
										</Button>
									</DropdownMenu.Label>
								</DropdownMenu.Content>
							</DropdownMenu.Root>
						</div>
					</Preview.Panel>
					<Preview.Panel type="source">
						<Preview.Highlight>
							{`
                  <DropdownMenu.Root>
								<DropdownMenu.Trigger asChild let:builder>
									<div use:builder.action {...builder}>
										<Button variant="primary">Show Dropdown</Button>
									</div>
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
										<Button type="button" variant="primary" class="px-2 py-1">Settings</Button>
										<Button type="button" variant="secondary" class="px-2 py-1 ml-auto">
											View Profile
										</Button>
									</DropdownMenu.Label>
								</DropdownMenu.Content>
							</DropdownMenu.Root>
                  `}
						</Preview.Highlight>
					</Preview.Panel>
				</div>
			</Preview>
			<!-- END: Header & Footer Dropdown -->
			<!-- BEGIN: Icon Dropdown -->
			<Preview let:toggle class="mt-5 intro-y box">
				<div
					class="flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60 dark:border-darkmode-400"
				>
					<h2 class="mr-auto text-base font-medium">Icon Dropdown</h2>
					<FormSwitch class="w-full mt-3 sm:w-auto sm:ml-auto sm:mt-0">
						<FormSwitch.Label htmlFor="show-example-3">Show example code</FormSwitch.Label>
						<FormSwitch.Input
							id="show-example-3"
							on:click={toggle}
							class="ml-3 mr-0"
							type="checkbox"
						/>
					</FormSwitch>
				</div>
				<div class="p-5">
					<Preview.Panel>
						<div class="flex justify-center">
							<DropdownMenu.Root>
								<DropdownMenu.Trigger asChild let:builder>
									<div use:builder.action {...builder}>
										<Button variant="primary">Show Dropdown</Button>
									</div>
								</DropdownMenu.Trigger>
								<DropdownMenu.Content class="w-48">
									<DropdownMenu.Item>
										<Lucide icon="Pencil" class="w-4 h-4 mr-2" /> New Dropdown
									</DropdownMenu.Item>
									<DropdownMenu.Item>
										<Lucide icon="Trash" class="w-4 h-4 mr-2" />
										Delete Dropdown
									</DropdownMenu.Item>
								</DropdownMenu.Content>
							</DropdownMenu.Root>
						</div>
					</Preview.Panel>
					<Preview.Panel type="source">
						<Preview.Highlight>
							{`
                <DropdownMenu.Root>
                  <DropdownMenu.Trigger asChild let:builder>
                    <div use:builder.action {...builder}>
                      <Button variant="primary">Show Dropdown</Button>
                    </div>
                  </DropdownMenu.Trigger>
                  <DropdownMenu.Content class="w-48">
                    <DropdownMenu.Item>
                      <Lucide icon="Pencil" class="w-4 h-4 mr-2" /> New Dropdown
                    </DropdownMenu.Item>
                    <DropdownMenu.Item>
                      <Lucide icon="Trash" class="w-4 h-4 mr-2" />
                      Delete Dropdown
                    </DropdownMenu.Item>
                  </DropdownMenu.Content>
                </DropdownMenu.Root>
                  `}
						</Preview.Highlight>
					</Preview.Panel>
				</div>
			</Preview>
			<!-- END: Icon Dropdown -->
		</div>
		<div class="col-span-12 lg:col-span-6">
			<!-- BEGIN: Scrolled Dropdown -->
			<Preview let:toggle class="intro-y box">
				<div
					class="flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60 dark:border-darkmode-400"
				>
					<h2 class="mr-auto text-base font-medium">Scrolled Dropdown</h2>
					<FormSwitch class="w-full mt-3 sm:w-auto sm:ml-auto sm:mt-0">
						<FormSwitch.Label htmlFor="show-example-5">Show example code</FormSwitch.Label>
						<FormSwitch.Input
							id="show-example-5"
							on:click={toggle}
							class="ml-3 mr-0"
							type="checkbox"
						/>
					</FormSwitch>
				</div>
				<div class="p-5">
					<Preview.Panel>
						<div class="flex justify-center">
							<DropdownMenu.Root>
								<DropdownMenu.Trigger asChild let:builder>
									<div use:builder.action {...builder}>
										<Button variant="primary">Show Dropdown</Button>
									</div>
								</DropdownMenu.Trigger>
								<DropdownMenu.Content class="w-40 h-32 overflow-y-auto">
									<DropdownMenu.Item>January</DropdownMenu.Item>
									<DropdownMenu.Item>February</DropdownMenu.Item>
									<DropdownMenu.Item>March</DropdownMenu.Item>
									<DropdownMenu.Item>June</DropdownMenu.Item>
									<DropdownMenu.Item>July</DropdownMenu.Item>
								</DropdownMenu.Content>
							</DropdownMenu.Root>
						</div>
					</Preview.Panel>
					<Preview.Panel type="source">
						<Preview.Highlight>
							{`
                <DropdownMenu.Root>
                  <DropdownMenu.Trigger asChild let:builder>
                    <div use:builder.action {...builder}>
                      <Button variant="primary">Show Dropdown</Button>
                    </div>
                  </DropdownMenu.Trigger>
                  <DropdownMenu.Content class="w-40 h-32 overflow-y-auto">
                    <DropdownMenu.Item>January</DropdownMenu.Item>
                    <DropdownMenu.Item>February</DropdownMenu.Item>
                    <DropdownMenu.Item>March</DropdownMenu.Item>
                    <DropdownMenu.Item>June</DropdownMenu.Item>
                    <DropdownMenu.Item>July</DropdownMenu.Item>
                  </DropdownMenu.Content>
                </DropdownMenu.Root>
                  `}
						</Preview.Highlight>
					</Preview.Panel>
				</div>
			</Preview>
			<!-- END: Scrolled Dropdown -->
			<!-- BEGIN: Header & Icon Dropdown -->
			<Preview let:toggle class="mt-5 intro-y box">
				<div
					class="flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60 dark:border-darkmode-400"
				>
					<h2 class="mr-auto text-base font-medium">Header & Icon Dropdown</h2>
					<FormSwitch class="w-full mt-3 sm:w-auto sm:ml-auto sm:mt-0">
						<FormSwitch.Label htmlFor="show-example-6">Show example code</FormSwitch.Label>
						<FormSwitch.Input
							id="show-example-6"
							on:click={toggle}
							class="ml-3 mr-0"
							type="checkbox"
						/>
					</FormSwitch>
				</div>
				<div class="p-5">
					<Preview.Panel>
						<div class="flex justify-center">
							<DropdownMenu.Root>
								<DropdownMenu.Trigger asChild let:builder>
									<div use:builder.action {...builder}>
										<Button variant="primary">Show Dropdown</Button>
									</div>
								</DropdownMenu.Trigger>
								<DropdownMenu.Content class="w-40">
									<DropdownMenu.Label>Export Tools</DropdownMenu.Label>
									<DropdownMenu.Separator />
									<DropdownMenu.Item
										><Lucide icon="Printer" class="w-4 h-4 mr-2" />
										Print</DropdownMenu.Item
									>
									<DropdownMenu.Item
										><Lucide icon="ExternalLink" class="w-4 h-4 mr-2" />
										Excel</DropdownMenu.Item
									>
									<DropdownMenu.Item
										><Lucide icon="FileText" class="w-4 h-4 mr-2" />
										CSV</DropdownMenu.Item
									>
									<DropdownMenu.Item
										><Lucide icon="Archive" class="w-4 h-4 mr-2" />
										PDF</DropdownMenu.Item
									>
								</DropdownMenu.Content>
							</DropdownMenu.Root>
						</div>
					</Preview.Panel>
					<Preview.Panel type="source">
						<Preview.Highlight>
							{`
                <DropdownMenu.Root>
                  <DropdownMenu.Trigger asChild let:builder>
                    <div use:builder.action {...builder}>
                      <Button variant="primary">Show Dropdown</Button>
                    </div>
                  </DropdownMenu.Trigger>
                  <DropdownMenu.Content class="w-40">
                    <DropdownMenu.Label>Export Tools</DropdownMenu.Label>
                    <DropdownMenu.Separator />
                    <DropdownMenu.Item
                      ><Lucide icon="Printer" class="w-4 h-4 mr-2" />
                      Print</DropdownMenu.Item
                    >
                    <DropdownMenu.Item
                      ><Lucide icon="ExternalLink" class="w-4 h-4 mr-2" />
                      Excel</DropdownMenu.Item
                    >
                    <DropdownMenu.Item
                      ><Lucide icon="FileText" class="w-4 h-4 mr-2" />
                      CSV</DropdownMenu.Item
                    >
                    <DropdownMenu.Item
                      ><Lucide icon="Archive" class="w-4 h-4 mr-2" />
                      PDF</DropdownMenu.Item
                    >
                  </DropdownMenu.Content>
                </DropdownMenu.Root>
                  `}
						</Preview.Highlight>
					</Preview.Panel>
				</div>
			</Preview>
			<!-- END: Header & Icon Dropdown -->
			<!-- BEGIN: Dropdown with close button -->
			<Preview let:toggle class="mt-5 intro-y box">
				<div
					class="flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60 dark:border-darkmode-400"
				>
					<h2 class="mr-auto text-base font-medium">Dropdown with close button</h2>
					<FormSwitch class="w-full mt-3 sm:w-auto sm:ml-auto sm:mt-0">
						<FormSwitch.Label htmlFor="show-example-4">Show example code</FormSwitch.Label>
						<FormSwitch.Input
							id="show-example-4"
							on:click={toggle}
							class="ml-3 mr-0"
							type="checkbox"
						/>
					</FormSwitch>
				</div>
				<div class="p-5">
					<Preview.Panel>
						<div class="text-center">
							<Popover.Root open={popoverOpen}>
								<Popover.Trigger asChild let:builder>
									<div use:builder.action {...builder}>
										<Button variant="primary">
											Filter Dropdown
											<Lucide icon="ChevronDown" class="w-4 h-4 ml-2" />
										</Button>
									</div>
								</Popover.Trigger>
								<Popover.Content class="w-80">
									<div class="p-2">
										<div>
											<div class="text-xs text-left">From</div>
											<FormInput type="text" class="flex-1 mt-2" placeholder="example@gmail.com" />
										</div>
										<div class="mt-3">
											<div class="text-xs text-left">To</div>
											<FormInput type="text" class="flex-1 mt-2" placeholder="example@gmail.com" />
										</div>
										<div class="flex items-center mt-3">
											<Button
												variant="secondary"
												on:click={() => {
													popoverOpen = false;
												}}
												class="w-32 ml-auto"
											>
												Close
											</Button>
											<Button variant="primary" class="w-32 ml-2">Search</Button>
										</div>
									</div>
								</Popover.Content>
							</Popover.Root>
						</div>
					</Preview.Panel>
					<Preview.Panel type="source">
						<Preview.Highlight>
							{`
                <div class="text-center">
                  <Popover.Root open={popoverOpen}>
                    <Popover.Trigger asChild let:builder>
                      <div use:builder.action {...builder}>
                        <Button variant="primary">
                          Filter Dropdown
                          <Lucide icon="ChevronDown" class="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    </Popover.Trigger>
                    <Popover.Content class="w-80">
                      <div class="p-2">
                        <div>
                          <div class="text-xs text-left">From</div>
                          <FormInput type="text" class="flex-1 mt-2" placeholder="example@gmail.com" />
                        </div>
                        <div class="mt-3">
                          <div class="text-xs text-left">To</div>
                          <FormInput type="text" class="flex-1 mt-2" placeholder="example@gmail.com" />
                        </div>
                        <div class="flex items-center mt-3">
                          <Button
                            variant="secondary"
                            on:click={() => {
                              popoverOpen = false;
                            }}
                            class="w-32 ml-auto"
                          >
                            Close
                          </Button>
                          <Button variant="primary" class="w-32 ml-2">Search</Button>
                        </div>
                      </div>
                    </Popover.Content>
                  </Popover.Root>
                </div>
                  `}
						</Preview.Highlight>
					</Preview.Panel>
				</div>
			</Preview>
			<!-- END: Dropdown with close button -->
		</div>
	</div>
</div>
