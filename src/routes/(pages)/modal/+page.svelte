<script lang="ts">
	import Preview from '$lib/components/Preview';
	import { FormLabel, FormSwitch, FormInput, FormSelect } from '$lib/components/Form';
	import * as DropdownMenu from '$lib/components/DropdownMenu';
	import * as Dialog from '$lib/components/Dialog';
	import TinySlider from '$lib/components/TinySlider';
	import Button from '$lib/components/Button';
	import Lucide from '$lib/components/Lucide';
	import fakerData from '@/utils/faker';

	let basicModalPreview = false;
	let smallModalSizePreview = false;
	let mediumModalSizePreview = false;
	let largeModalSizePreview = false;
	let superlargeModalSizePreview = false;
	let programmaticallyModal = false;
	let warningModalPreview = false;
	let buttonModalPreview = false;
	let staticBackdropModalPreview = false;
	let overlappingModalPreview = false;
	let nextOverlappingModalPreview = false;
	let headerFooterModalPreview = false;
	let deleteModalPreview = false;
	let successModalPreview = false;
	let tinySliderModalPreview = false;
</script>

<div>
	<div class="flex items-center mt-8 intro-y">
		<h2 class="mr-auto text-lg font-medium">Modal</h2>
	</div>
	<div class="grid grid-cols-12 gap-6 mt-5">
		<div class="col-span-12 intro-y lg:col-span-6">
			<!-- BEGIN: Blank Modal -->
			<Preview let:toggle class="intro-y box">
				<div
					class="flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60 dark:border-darkmode-400"
				>
					<h2 class="mr-auto text-base font-medium">Blank Modal</h2>
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
						<!-- BEGIN: Modal Toggle -->
						<div class="text-center">
							<Button
								as="a"
								variant="primary"
								on:click={() => {
									basicModalPreview = true;
								}}
							>
								Show Modal
							</Button>
						</div>
						<!-- END: Modal Toggle -->
						<!-- BEGIN: Modal Content -->
						<Dialog.Root bind:open={basicModalPreview}>
							<Dialog.Content class="p-10 text-center">
								This is totally awesome blank modal!
							</Dialog.Content>
						</Dialog.Root>
						<!-- END: Modal Content -->
					</Preview.Panel>
					<Preview.Panel type="source">
						<Preview.Highlight>
							{`
                        <!-- BEGIN: Modal Toggle -->
						<div class="text-center">
							<Button
								as="a"
								variant="primary"
								on:click={() => {
									basicModalPreview = true;
								}}
							>
								Show Modal
							</Button>
						</div>
						<!-- END: Modal Toggle -->
						<!-- BEGIN: Modal Content -->
						<Dialog.Root bind:open={basicModalPreview}>
							<Dialog.Content class="p-10 text-center">
								This is totally awesome blank modal!
							</Dialog.Content>
						</Dialog.Root>
						<!-- END: Modal Content -->
                  `}
						</Preview.Highlight>
					</Preview.Panel>
				</div>
			</Preview>
			<!-- END: Blank Modal -->
			<!-- BEGIN: Modal Size -->
			<Preview let:toggle class="mt-5 intro-y box">
				<div
					class="flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60 dark:border-darkmode-400"
				>
					<h2 class="mr-auto text-base font-medium">Modal Size</h2>
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
						<div class="text-center">
							<!-- BEGIN: Small Modal Toggle -->
							<Button
								as="a"
								href="#top"
								variant="primary"
								on:click={(event) => {
									event.preventDefault();
									smallModalSizePreview = true;
								}}
								class="mb-2 mr-1"
							>
								Show Small Modal
							</Button>
							<!-- END: Small Modal Toggle -->
							<!-- BEGIN: Medium Modal Toggle -->
							<Button
								as="a"
								href="#top"
								variant="primary"
								on:click={(event) => {
									event.preventDefault();
									mediumModalSizePreview = true;
								}}
								class="mb-2 mr-1"
							>
								Show Medium Modal
							</Button>
							<!-- END: Medium Modal Toggle -->
							<!-- BEGIN: Large Modal Toggle -->
							<Button
								as="a"
								href="#top"
								variant="primary"
								on:click={(event) => {
									event.preventDefault();
									largeModalSizePreview = true;
								}}
								class="mb-2 mr-1"
							>
								Show Large Modal
							</Button>
							<!-- END: Large Modal Toggle -->
							<!-- BEGIN: Super Large Modal Toggle -->
							<Button
								as="a"
								href="#top"
								variant="primary"
								on:click={(event) => {
									event.preventDefault();
									superlargeModalSizePreview = true;
								}}
								class="mb-2 mr-1"
							>
								Show Superlarge Modal
							</Button>
							<!-- END: Super Large Modal Toggle -->
						</div>
						<!-- BEGIN: Small Modal Content -->
						<Dialog.Root size="sm" bind:open={smallModalSizePreview}>
							<Dialog.Content class="p-10 text-center">
								This is totally awesome small modal!
							</Dialog.Content>
						</Dialog.Root>
						<!-- END: Small Modal Content -->
						<!-- BEGIN: Medium Modal Content -->
						<Dialog.Root bind:open={mediumModalSizePreview}>
							<Dialog.Content class="p-10 text-center">
								This is totally awesome medium modal!
							</Dialog.Content>
						</Dialog.Root>
						<!-- END: Medium Modal Content -->
						<!-- BEGIN: Large Modal Content -->
						<Dialog.Root size="lg" bind:open={largeModalSizePreview}>
							<Dialog.Content class="p-10 text-center">
								This is totally awesome large modal!
							</Dialog.Content>
						</Dialog.Root>
						<!-- END: Large Modal Content -->
						<!-- BEGIN: Super Large Modal Content -->
						<Dialog.Root size="xl" bind:open={superlargeModalSizePreview}>
							<Dialog.Content class="p-10 text-center">
								This is totally awesome superlarge modal!
							</Dialog.Content>
						</Dialog.Root>
						<!-- END: Super Large Modal Content -->
					</Preview.Panel>
					<Preview.Panel type="source">
						<Preview.Highlight>
							{`
                  <div class="text-center">
                  <!-- BEGIN: Small Modal Toggle -->
                  <Button
                    as="a"
                    href="#top"
                    variant="primary"
                    on:click={(event) => {
                      event.preventDefault();
                      smallModalSizePreview = true;
                    }}
                    class="mb-2 mr-1"
                  >
                    Show Small Modal
                  </Button>
                  <!-- END: Small Modal Toggle -->
                  <!-- BEGIN: Medium Modal Toggle -->
                  <Button
                    as="a"
                    href="#top"
                    variant="primary"
                    on:click={(event) => {
                      event.preventDefault();
                      mediumModalSizePreview = true
                    }}
                    class="mb-2 mr-1"
                  >
                    Show Medium Modal
                  </Button>
                  <!-- END: Medium Modal Toggle -->
                  <!-- BEGIN: Large Modal Toggle -->
                  <Button
                    as="a"
                    href="#top"
                    variant="primary"
                    on:click={(event) => {
                      event.preventDefault();
                      largeModalSizePreview = true
                    }}
                    class="mb-2 mr-1"
                  >
                    Show Large Modal
                  </Button>
                  <!-- END: Large Modal Toggle -->
                  <!-- BEGIN: Super Large Modal Toggle -->
                  <Button
                    as="a"
                    href="#top"
                    variant="primary"
                    on:click={(event) => {
                      event.preventDefault();
                      superlargeModalSizePreview = true;
                    }}
                    class="mb-2 mr-1"
                  >
                    Show Superlarge Modal
                  </Button>
                  <!-- END: Super Large Modal Toggle -->
                </div>
                <!-- BEGIN: Small Modal Content -->
                <Dialog.Root size="sm" bind:open={smallModalSizePreview}>
                    <Dialog.Content class="p-10 text-center">
                        This is totally awesome small modal!
                    </Dialog.Content>
                </Dialog.Root>
                <!-- END: Small Modal Content -->
                <!-- BEGIN: Medium Modal Content -->
                <Dialog.Root bind:open={mediumModalSizePreview}>
                    <Dialog.Content class="p-10 text-center">
                        This is totally awesome medium modal!
                    </Dialog.Content>
                </Dialog.Root>
                <!-- END: Medium Modal Content -->
                <!-- BEGIN: Large Modal Content -->
                <Dialog.Root size="lg" bind:open={largeModalSizePreview}>
                    <Dialog.Content class="p-10 text-center">
                        This is totally awesome large modal!
                    </Dialog.Content>
                </Dialog.Root>
                <!-- END: Large Modal Content -->
                <!-- BEGIN: Super Large Modal Content -->
                <Dialog.Root size="xl" bind:open={superlargeModalSizePreview}>
                    <Dialog.Content class="p-10 text-center">
                        This is totally awesome superlarge modal!
                    </Dialog.Content>
                </Dialog.Root>
                <!-- END: Super Large Modal Content -->
                  `}
						</Preview.Highlight>
					</Preview.Panel>
				</div>
			</Preview>
			<!-- END: Modal Size -->
			<!-- BEGIN: Warning Modal -->
			<Preview let:toggle class="mt-5 intro-y box">
				<div
					class="flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60 dark:border-darkmode-400"
				>
					<h2 class="mr-auto text-base font-medium">Warning Modal</h2>
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
						<!-- BEGIN: Modal Toggle -->
						<div class="text-center">
							<Button
								as="a"
								href="#top"
								variant="primary"
								on:click={(event) => {
									event.preventDefault();
									warningModalPreview = true;
								}}
							>
								Show Modal
							</Button>
						</div>
						<!-- END: Modal Toggle -->
						<!-- BEGIN: Modal Content -->
						<Dialog.Root bind:open={warningModalPreview}>
							<Dialog.Content>
								<div class="p-5 text-center">
									<Lucide icon="CircleX" class="w-16 h-16 mx-auto mt-3 text-warning" />
									<div class="mt-5 text-3xl">Oops...</div>
									<div class="mt-2 text-slate-500">Something went wrong!</div>
								</div>
								<div class="px-5 pb-8 text-center">
									<Button
										type="button"
										variant="primary"
										on:click={() => {
											warningModalPreview = false;
										}}
										class="w-24"
									>
										Ok
									</Button>
								</div>
								<div class="p-5 text-center border-t border-slate-200/60 dark:border-darkmode-400">
									<a href="#top" class="text-primary"> Why do I have this issue? </a>
								</div>
							</Dialog.Content>
						</Dialog.Root>
						<!-- END: Modal Content -->
					</Preview.Panel>
					<Preview.Panel type="source">
						<Preview.Highlight>
							{`
                  <!-- BEGIN: Modal Toggle -->
                  <div class="text-center">
                    <Button
                      as="a"
                      href="#top"
                      variant="primary"
                      on:click={(event) => {
                        event.preventDefault();
                        warningModalPreview = true
                      }}
                    >
                      Show Modal
                    </Button>
                  </div>
                  <!-- END: Modal Toggle -->
                  <!-- BEGIN: Modal Content -->
                  <Dialog.Root bind:open={warningModalPreview}>
                    <Dialog.Content>
                        <div class="p-5 text-center">
                            <Lucide icon="CircleX" class="w-16 h-16 mx-auto mt-3 text-warning" />
                            <div class="mt-5 text-3xl">Oops...</div>
                            <div class="mt-2 text-slate-500">Something went wrong!</div>
                        </div>
                        <div class="px-5 pb-8 text-center">
                            <Button
                                type="button"
                                variant="primary"
                                on:click={() => {
                                    warningModalPreview = false;
                                }}
                                class="w-24"
                            >
                                Ok
                            </Button>
                        </div>
                        <div class="p-5 text-center border-t border-slate-200/60 dark:border-darkmode-400">
                            <a href="#top" class="text-primary"> Why do I have this issue? </a>
                        </div>
                    </Dialog.Content>
                </Dialog.Root>
                  <!-- END: Modal Content -->
                  `}
						</Preview.Highlight>
					</Preview.Panel>
				</div>
			</Preview>
			<!-- END: Warning Modal -->
			<!-- BEGIN: Modal With Close Button -->
			<Preview let:toggle class="mt-5 intro-y box">
				<div
					class="flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60 dark:border-darkmode-400"
				>
					<h2 class="mr-auto text-base font-medium">Modal With Close Button</h2>
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
						<!-- BEGIN: Modal Toggle -->
						<div class="text-center">
							<Button
								as="a"
								href="#top"
								variant="primary"
								on:click={(event) => {
									event.preventDefault();
									buttonModalPreview = true;
								}}
							>
								Show Modal
							</Button>
						</div>
						<!-- END: Modal Toggle -->
						<!-- BEGIN: Modal Content -->
						<Dialog.Root bind:open={buttonModalPreview}>
							<Dialog.Content>
								<a
									on:click={(event) => {
										event.preventDefault();
										buttonModalPreview = false;
									}}
									class="absolute top-0 right-0 mt-3 mr-3"
									href="#top"
								>
									<Lucide icon="X" class="w-8 h-8 text-slate-400" />
								</a>
								<div class="p-5 text-center">
									<Lucide icon="CircleCheck" class="w-16 h-16 mx-auto mt-3 text-success" />
									<div class="mt-5 text-3xl">Modal Example</div>
									<div class="mt-2 text-slate-500">Modal with close button</div>
								</div>
								<div class="px-5 pb-8 text-center">
									<Button
										type="button"
										variant="primary"
										on:click={() => {
											buttonModalPreview = false;
										}}
										class="w-24"
									>
										Ok
									</Button>
								</div>
							</Dialog.Content>
						</Dialog.Root>
						<!-- END: Modal Content -->
					</Preview.Panel>
					<Preview.Panel type="source">
						<Preview.Highlight>
							{`
                  <!-- BEGIN: Modal Toggle -->
                  <div class="text-center">
                    <Button
                      as="a"
                      href="#top"
                      variant="primary"
                      on:click={(event) => {
                        event.preventDefault();
                        buttonModalPreview = true
                      }}
                    >
                      Show Modal
                    </Button>
                  </div>
                  <!-- END: Modal Toggle -->
                  <!-- BEGIN: Modal Content -->
                  <Dialog.Root bind:open={buttonModalPreview}>
                    <Dialog.Content>
                        <a
                            on:click={(event) => {
                                event.preventDefault();
                                buttonModalPreview = false;
                            }}
                            class="absolute top-0 right-0 mt-3 mr-3"
                            href="#top"
                        >
                            <Lucide icon="X" class="w-8 h-8 text-slate-400" />
                        </a>
                        <div class="p-5 text-center">
                            <Lucide icon="CircleCheck" class="w-16 h-16 mx-auto mt-3 text-success" />
                            <div class="mt-5 text-3xl">Modal Example</div>
                            <div class="mt-2 text-slate-500">Modal with close button</div>
                        </div>
                        <div class="px-5 pb-8 text-center">
                            <Button
                                type="button"
                                variant="primary"
                                on:click={() => {
                                    buttonModalPreview = false;
                                }}
                                class="w-24"
                            >
                                Ok
                            </Button>
                        </div>
                    </Dialog.Content>
                </Dialog.Root>
                  <!-- END: Modal Content -->
                  `}
						</Preview.Highlight>
					</Preview.Panel>
				</div>
			</Preview>
			<!-- END: Modal With Close Button -->
			<!-- BEGIN: Static Backdrop Modal -->
			<Preview let:toggle class="mt-5 intro-y box">
				<div
					class="flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60 dark:border-darkmode-400"
				>
					<h2 class="mr-auto text-base font-medium">Static Backdrop Modal</h2>
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
						<!-- BEGIN: Modal Toggle -->
						<div class="text-center">
							<Button
								variant="primary"
								on:click={() => {
									staticBackdropModalPreview = true;
								}}
							>
								Show Modal
							</Button>
						</div>
						<!-- END: Modal Toggle -->
						<!-- BEGIN: Modal Content -->
						<Dialog.Root staticBackdrop bind:open={staticBackdropModalPreview}>
							<Dialog.Content class="px-5 py-10">
								<div class="text-center">
									<div class="mb-5">
										I will not close if you click outside me. Don't even try to press escape key.
									</div>
									<Button
										type="button"
										variant="primary"
										on:click={() => {
											staticBackdropModalPreview = false;
										}}
										class="w-24"
									>
										Ok
									</Button>
								</div>
							</Dialog.Content>
						</Dialog.Root>
						<!-- END: Modal Content -->
					</Preview.Panel>
					<Preview.Panel type="source">
						<Preview.Highlight>
							{`
                  <!-- BEGIN: Modal Toggle -->
                  <div class="text-center">
                    <Button
                      variant="primary"
                      on:click={() => {
                        staticBackdropModalPreview = true
                      }}
                    >
                      Show Modal
                    </Button>
                  </div>
                  <!-- END: Modal Toggle -->
                  <!-- BEGIN: Modal Content -->
                  <Dialog.Root staticBackdrop bind:open={staticBackdropModalPreview}>
                    <Dialog.Content class="px-5 py-10">
                        <div class="text-center">
                            <div class="mb-5">
                                I will not close if you click outside me. Don't even try to press escape key.
                            </div>
                            <Button
                                type="button"
                                variant="primary"
                                on:click={() => {
                                    staticBackdropModalPreview = false;
                                }}
                                class="w-24"
                            >
                                Ok
                            </Button>
                        </div>
                    </Dialog.Content>
                </Dialog.Root>
                  <!-- END: Modal Content -->
                  `}
						</Preview.Highlight>
					</Preview.Panel>
				</div>
			</Preview>
			<!-- END: Static Backdrop Modal -->
			<!-- BEGIN: Overlapping Modal -->
			<Preview let:toggle class="mt-5 intro-y box">
				<div
					class="flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60 dark:border-darkmode-400"
				>
					<h2 class="mr-auto text-base font-medium">Overlapping Modal</h2>
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
						<!-- BEGIN: Modal Toggle -->
						<div class="text-center">
							<Button
								as="a"
								href="#top"
								variant="primary"
								on:click={(event) => {
									event.preventDefault();
									overlappingModalPreview = true;
								}}
							>
								Show Modal
							</Button>
						</div>
						<!-- END: Modal Toggle -->
						<!-- BEGIN: Modal Content -->
						<Dialog.Root bind:open={overlappingModalPreview}>
							<Dialog.Content class="px-5 py-10">
								<div class="text-center">
									<div class="mb-5">Click button bellow to show overlapping modal!</div>
									<!-- BEGIN: Overlapping Modal Toggle -->
									<Button
										as="a"
										href="#top"
										variant="primary"
										on:click={(event) => {
											event.preventDefault();
											nextOverlappingModalPreview = true;
										}}
									>
										Show Overlapping Modal
									</Button>
									<!-- END: Overlapping Modal Toggle -->
								</div>
								<!-- BEGIN: Overlapping Modal Content -->
								<Dialog.Root bind:open={nextOverlappingModalPreview}>
									<Dialog.Content class="p-5 text-center">
										This is totally awesome overlapping modal!
									</Dialog.Content>
								</Dialog.Root>
								<!-- END: Overlapping Modal Content -->
							</Dialog.Content>
						</Dialog.Root>
						<!-- END: Modal Content -->
					</Preview.Panel>
					<Preview.Panel type="source">
						<Preview.Highlight>
							{`
                  <!-- BEGIN: Modal Toggle -->
                  <div class="text-center">
                    <Button
                      as="a"
                      href="#top"
                      variant="primary"
                      on:click={(event) => {
                        event.preventDefault();
                        overlappingModalPreview = true
                      }}
                    >
                      Show Modal
                    </Button>
                  </div>
                  <!-- END: Modal Toggle -->
                  <!-- BEGIN: Modal Content -->
                  <Dialog.Root bind:open={overlappingModalPreview}>
                    <Dialog.Content class="px-5 py-10">
                        <div class="text-center">
                            <div class="mb-5">Click button bellow to show overlapping modal!</div>
                            <!-- BEGIN: Overlapping Modal Toggle -->
                            <Button
                                as="a"
                                href="#top"
                                variant="primary"
                                on:click={(event) => {
                                    event.preventDefault();
                                    nextOverlappingModalPreview = true;
                                }}
                            >
                                Show Overlapping Modal
                            </Button>
                            <!-- END: Overlapping Modal Toggle -->
                        </div>
                        <!-- BEGIN: Overlapping Modal Content -->
                        <Dialog.Root bind:open={nextOverlappingModalPreview}>
                            <Dialog.Content class="p-5 text-center">
                                This is totally awesome overlapping modal!
                            </Dialog.Content>
                        </Dialog.Root>
                        <!-- END: Overlapping Modal Content -->
                    </Dialog.Content>
                </Dialog.Root>
                  <!-- END: Modal Content -->
                  `}
						</Preview.Highlight>
					</Preview.Panel>
				</div>
			</Preview>
			<!-- END: Overlapping Modal -->
		</div>
		<div class="col-span-12 intro-y lg:col-span-6">
			<!-- BEGIN: Header & Footer Modal -->
			<Preview let:toggle class="intro-y box">
				<div
					class="flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60 dark:border-darkmode-400"
				>
					<h2 class="mr-auto text-base font-medium">Header & Footer Modal</h2>
					<FormSwitch class="w-full mt-3 sm:w-auto sm:ml-auto sm:mt-0">
						<FormSwitch.Label htmlFor="show-example-7">Show example code</FormSwitch.Label>
						<FormSwitch.Input
							id="show-example-7"
							on:click={toggle}
							class="ml-3 mr-0"
							type="checkbox"
						/>
					</FormSwitch>
				</div>
				<div class="p-5">
					<Preview.Panel>
						<!-- BEGIN: Modal Toggle -->
						<div class="text-center">
							<Button
								as="a"
								href="#top"
								variant="primary"
								on:click={(event) => {
									event.preventDefault();
									headerFooterModalPreview = true;
								}}
							>
								Show Modal
							</Button>
						</div>
						<!-- END: Modal Toggle -->
						<!-- BEGIN: Modal Content -->
						<Dialog.Root bind:open={headerFooterModalPreview}>
							<Dialog.Content withClose={false}>
								<Dialog.Header>
									<h2 class="mr-auto text-base font-medium">Broadcast Message</h2>
									<Button variant="outline-secondary" class="hidden sm:flex">
										<Lucide icon="File" class="w-4 h-4 mr-2" />
										Download Docs
									</Button>
									<DropdownMenu.Root>
										<DropdownMenu.Trigger asChild let:builder>
											<div class="sm:hidden" use:builder.action {...builder}>
												<Button as="a" class="block w-5 h-5" href="#top">
													<Lucide icon="EllipsisVertical" class="w-5 h-5 text-slate-500" />
												</Button>
											</div>
										</DropdownMenu.Trigger>
										<DropdownMenu.Content class="w-40">
											<DropdownMenu.Item>
												<Lucide icon="File" class="w-4 h-4 mr-2" />
												Download Docs
											</DropdownMenu.Item>
										</DropdownMenu.Content>
									</DropdownMenu.Root>
								</Dialog.Header>
								<Dialog.Description class="grid grid-cols-12 gap-4 gap-y-3">
									<div class="col-span-12 sm:col-span-6">
										<FormLabel htmlFor="modal-form-1">From</FormLabel>
										<FormInput id="modal-form-1" type="text" placeholder="example@gmail.com" />
									</div>
									<div class="col-span-12 sm:col-span-6">
										<FormLabel htmlFor="modal-form-2">To</FormLabel>
										<FormInput id="modal-form-2" type="text" placeholder="example@gmail.com" />
									</div>
									<div class="col-span-12 sm:col-span-6">
										<FormLabel htmlFor="modal-form-3">Subject</FormLabel>
										<FormInput id="modal-form-3" type="text" placeholder="Important Meeting" />
									</div>
									<div class="col-span-12 sm:col-span-6">
										<FormLabel htmlFor="modal-form-4">Has the Words</FormLabel>
										<FormInput
											id="modal-form-4"
											type="text"
											placeholder="Job, Work, Documentation"
										/>
									</div>
									<div class="col-span-12 sm:col-span-6">
										<FormLabel htmlFor="modal-form-5">Doesn't Have</FormLabel>
										<FormInput
											id="modal-form-5"
											type="text"
											placeholder="Job, Work, Documentation"
										/>
									</div>
									<div class="col-span-12 sm:col-span-6">
										<FormLabel htmlFor="modal-form-6">Size</FormLabel>
										<FormSelect id="modal-form-6">
											<option>10</option>
											<option>25</option>
											<option>35</option>
											<option>50</option>
										</FormSelect>
									</div>
								</Dialog.Description>
								<Dialog.Footer>
									<Button
										type="button"
										variant="outline-secondary"
										on:click={() => {
											headerFooterModalPreview = false;
										}}
										class="w-20 mr-1"
									>
										Cancel
									</Button>
									<Button variant="primary" type="button" class="w-20">Send</Button>
								</Dialog.Footer>
							</Dialog.Content>
						</Dialog.Root>
						<!-- END: Modal Content -->
					</Preview.Panel>
					<Preview.Panel type="source">
						<Preview.Highlight>
							{`
                  <!-- BEGIN: Modal Toggle -->
                  <div class="text-center">
                    <Button
                      as="a"
                      href="#top"
                      variant="primary"
                      on:click={(event) => {
                        event.preventDefault();
                        headerFooterModalPreview = true
                      }}
                    >
                      Show Modal
                    </Button>
                  </div>
                  <!-- END: Modal Toggle -->
                  <!-- BEGIN: Modal Content -->
                  <Dialog.Root bind:open={headerFooterModalPreview}>
					<Dialog.Content withClose={false}>
						<Dialog.Header>
							<h2 class="mr-auto text-base font-medium">Broadcast Message</h2>
							<Button variant="outline-secondary" class="hidden sm:flex">
								<Lucide icon="File" class="w-4 h-4 mr-2" />
								Download Docs
							</Button>
							<DropdownMenu.Root>
								<DropdownMenu.Trigger asChild let:builder>
									<div class="sm:hidden" use:builder.action {...builder}>
										<Button as="a" class="block w-5 h-5" href="#top">
											<Lucide icon="EllipsisVertical" class="w-5 h-5 text-slate-500" />
										</Button>
									</div>
								</DropdownMenu.Trigger>
								<DropdownMenu.Content class="w-40">
									<DropdownMenu.Item>
										<Lucide icon="File" class="w-4 h-4 mr-2" />
										Download Docs
									</DropdownMenu.Item>
								</DropdownMenu.Content>
							</DropdownMenu.Root>
						</Dialog.Header>
						<Dialog.Description class="grid grid-cols-12 gap-4 gap-y-3">
							<div class="col-span-12 sm:col-span-6">
								<FormLabel htmlFor="modal-form-1">From</FormLabel>
								<FormInput id="modal-form-1" type="text" placeholder="example@gmail.com" />
							</div>
							<div class="col-span-12 sm:col-span-6">
								<FormLabel htmlFor="modal-form-2">To</FormLabel>
								<FormInput id="modal-form-2" type="text" placeholder="example@gmail.com" />
							</div>
							<div class="col-span-12 sm:col-span-6">
								<FormLabel htmlFor="modal-form-3">Subject</FormLabel>
								<FormInput id="modal-form-3" type="text" placeholder="Important Meeting" />
							</div>
							<div class="col-span-12 sm:col-span-6">
								<FormLabel htmlFor="modal-form-4">Has the Words</FormLabel>
								<FormInput
									id="modal-form-4"
									type="text"
									placeholder="Job, Work, Documentation"
								/>
							</div>
							<div class="col-span-12 sm:col-span-6">
								<FormLabel htmlFor="modal-form-5">Doesn't Have</FormLabel>
								<FormInput
									id="modal-form-5"
									type="text"
									placeholder="Job, Work, Documentation"
								/>
							</div>
							<div class="col-span-12 sm:col-span-6">
								<FormLabel htmlFor="modal-form-6">Size</FormLabel>
								<FormSelect id="modal-form-6">
									<option>10</option>
									<option>25</option>
									<option>35</option>
									<option>50</option>
								</FormSelect>
							</div>
						</Dialog.Description>
						<Dialog.Footer>
							<Button
								type="button"
								variant="outline-secondary"
								on:click={() => {
									headerFooterModalPreview = false;
								}}
								class="w-20 mr-1"
							>
								Cancel
							</Button>
							<Button variant="primary" type="button" class="w-20">Send</Button>
						</Dialog.Footer>
					</Dialog.Content>
				</Dialog.Root>
                  <!-- END: Modal Content -->
                  `}
						</Preview.Highlight>
					</Preview.Panel>
				</div>
			</Preview>
			<!-- END: Header & Footer Modal -->
			<!-- BEGIN: Delete Modal -->
			<Preview let:toggle class="mt-5 intro-y box">
				<div
					class="flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60 dark:border-darkmode-400"
				>
					<h2 class="mr-auto text-base font-medium">Delete Modal</h2>
					<FormSwitch class="w-full mt-3 sm:w-auto sm:ml-auto sm:mt-0">
						<FormSwitch.Label htmlFor="show-example-9">Show example code</FormSwitch.Label>
						<FormSwitch.Input
							id="show-example-9"
							on:click={toggle}
							class="ml-3 mr-0"
							type="checkbox"
						/>
					</FormSwitch>
				</div>
				<div class="p-5">
					<Preview.Panel>
						<!-- BEGIN: Modal Toggle -->
						<div class="text-center">
							<Button
								as="a"
								href="#top"
								variant="primary"
								on:click={(event) => {
									event.preventDefault();
									deleteModalPreview = true;
								}}
							>
								Show Modal
							</Button>
						</div>
						<!-- END: Modal Toggle -->
						<!-- BEGIN: Modal Content -->
						<Dialog.Root bind:open={deleteModalPreview}>
							<Dialog.Content>
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
										type="button"
										variant="outline-secondary"
										on:click={() => {
											deleteModalPreview = false;
										}}
										class="w-24 mr-1"
									>
										Cancel
									</Button>
									<Button type="button" variant="danger" class="w-24">Delete</Button>
								</div>
							</Dialog.Content>
						</Dialog.Root>
						<!-- END: Modal Content -->
					</Preview.Panel>
					<Preview.Panel type="source">
						<Preview.Highlight>
							{`
                  <!-- BEGIN: Modal Toggle -->
                  <div class="text-center">
                    <Button
                      as="a"
                      href="#top"
                      variant="primary"
                      on:click={(event) => {
                        event.preventDefault();
                        deleteModalPreview = true
                      }}
                    >
                      Show Modal
                    </Button>
                  </div>
                  <!-- END: Modal Toggle -->
                  <!-- BEGIN: Modal Content -->
                  <Dialog.Root bind:open={deleteModalPreview}>
                    <Dialog.Content>
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
                                type="button"
                                variant="outline-secondary"
                                on:click={() => {
                                    deleteModalPreview = false;
                                }}
                                class="w-24 mr-1"
                            >
                                Cancel
                            </Button>
                            <Button type="button" variant="danger" class="w-24">Delete</Button>
                        </div>
                    </Dialog.Content>
                </Dialog.Root>
                  <!-- END: Modal Content -->
                  `}
						</Preview.Highlight>
					</Preview.Panel>
				</div>
			</Preview>
			<!-- END: Delete Modal -->
			<!-- BEGIN: Success Modal -->
			<Preview let:toggle class="mt-5 intro-y box">
				<div
					class="flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60 dark:border-darkmode-400"
				>
					<h2 class="mr-auto text-base font-medium">Success Modal</h2>
					<FormSwitch class="w-full mt-3 sm:w-auto sm:ml-auto sm:mt-0">
						<FormSwitch.Label htmlFor="show-example-10">Show example code</FormSwitch.Label>
						<FormSwitch.Input
							id="show-example-10"
							on:click={toggle}
							class="ml-3 mr-0"
							type="checkbox"
						/>
					</FormSwitch>
				</div>
				<div class="p-5">
					<Preview.Panel>
						<!-- BEGIN: Modal Toggle -->
						<div class="text-center">
							<Button
								as="a"
								href="#top"
								variant="primary"
								on:click={(event) => {
									event.preventDefault();
									successModalPreview = true;
								}}
							>
								Show Modal
							</Button>
						</div>
						<!-- END: Modal Toggle -->
						<!-- BEGIN: Modal Content -->
						<Dialog.Root bind:open={successModalPreview}>
							<Dialog.Content>
								<div class="p-5 text-center">
									<Lucide icon="CircleCheck" class="w-16 h-16 mx-auto mt-3 text-success" />
									<div class="mt-5 text-3xl">Good job!</div>
									<div class="mt-2 text-slate-500">You clicked the button!</div>
								</div>
								<div class="px-5 pb-8 text-center">
									<Button
										type="button"
										variant="primary"
										on:click={() => {
											successModalPreview = false;
										}}
										class="w-24"
									>
										Ok
									</Button>
								</div>
							</Dialog.Content>
						</Dialog.Root>
						<!-- END: Modal Content -->
					</Preview.Panel>
					<Preview.Panel type="source">
						<Preview.Highlight>
							{`
                  <!-- BEGIN: Modal Toggle -->
                  <div class="text-center">
                    <Button
                      as="a"
                      href="#top"
                      variant="primary"
                      on:click={(event) => {
                        event.preventDefault();
                        successModalPreview = true
                      }}
                    >
                      Show Modal
                    </Button>
                  </div>
                  <!-- END: Modal Toggle -->
                  <!-- BEGIN: Modal Content -->
                  <Dialog.Root bind:open={successModalPreview}>
                    <Dialog.Content>
                        <div class="p-5 text-center">
                            <Lucide icon="CircleCheck" class="w-16 h-16 mx-auto mt-3 text-success" />
                            <div class="mt-5 text-3xl">Good job!</div>
                            <div class="mt-2 text-slate-500">You clicked the button!</div>
                        </div>
                        <div class="px-5 pb-8 text-center">
                            <Button
                                type="button"
                                variant="primary"
                                on:click={() => {
                                    successModalPreview = false;
                                }}
                                class="w-24"
                            >
                                Ok
                            </Button>
                        </div>
                    </Dialog.Content>
                </Dialog.Root>
                  <!-- END: Modal Content -->
                  `}
						</Preview.Highlight>
					</Preview.Panel>
				</div>
			</Preview>
			<!-- END: Success Modal -->
			<!-- BEGIN: Tiny Slider Modal -->
			<Preview let:toggle class="mt-5 intro-y box">
				<div
					class="flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60 dark:border-darkmode-400"
				>
					<h2 class="mr-auto text-base font-medium">Tiny Slider Modal</h2>
					<FormSwitch class="w-full mt-3 sm:w-auto sm:ml-auto sm:mt-0">
						<FormSwitch.Label htmlFor="show-example-11">Show example code</FormSwitch.Label>
						<FormSwitch.Input
							id="show-example-11"
							on:click={toggle}
							class="ml-3 mr-0"
							type="checkbox"
						/>
					</FormSwitch>
				</div>
				<div class="p-5">
					<Preview.Panel>
						<!-- BEGIN: Modal Toggle -->
						<div class="text-center">
							<Button
								as="a"
								href="#top"
								variant="primary"
								on:click={(event) => {
									event.preventDefault();
									tinySliderModalPreview = true;
								}}
							>
								Show Modal
							</Button>
						</div>
						<!-- END: Modal Toggle -->
						<!-- BEGIN: Modal Content -->
						<Dialog.Root bind:open={tinySliderModalPreview}>
							<Dialog.Content class="p-5">
								<div class="mx-6">
									<TinySlider
										options={{
											mouseDrag: true,
											autoplay: false,
											controls: true,
											center: true,
											items: 1,
											nav: false,
											speed: 500,
											responsive: {
												600: {
													items: 2
												}
											}
										}}
									>
										<div class="h-56 px-2">
											<div class="h-full overflow-hidden rounded-md image-fit">
												<img
													alt="Midone Tailwind HTML Admin Template"
													src={fakerData[0].images[0]}
												/>
											</div>
										</div>
										<div class="h-56 px-2">
											<div class="h-full overflow-hidden rounded-md image-fit">
												<img
													alt="Midone Tailwind HTML Admin Template"
													src={fakerData[0].images[1]}
												/>
											</div>
										</div>
										<div class="h-56 px-2">
											<div class="h-full overflow-hidden rounded-md image-fit">
												<img
													alt="Midone Tailwind HTML Admin Template"
													src={fakerData[0].images[2]}
												/>
											</div>
										</div>
										<div class="h-56 px-2">
											<div class="h-full overflow-hidden rounded-md image-fit">
												<img
													alt="Midone Tailwind HTML Admin Template"
													src={fakerData[0].images[3]}
												/>
											</div>
										</div>
									</TinySlider>
								</div>
							</Dialog.Content>
						</Dialog.Root>
						<!-- END: Modal Content -->
					</Preview.Panel>
					<Preview.Panel type="source">
						<Preview.Highlight>
							{`
                  <!-- BEGIN: Modal Toggle -->
                  <div class="text-center">
                    <Button
                      as="a"
                      href="#top"
                      variant="primary"
                      on:click={(event) => {
                        event.preventDefault();
                        tinySliderModalPreview = true
                      }}
                    >
                      Show Modal
                    </Button>
                  </div>
                  <!-- END: Modal Toggle -->
                  <!-- BEGIN: Modal Content -->
                  <Dialog.Root bind:open={tinySliderModalPreview}>
                    <Dialog.Content class="p-5">
                        <div class="mx-6">
                            <TinySlider
                                options={{
                                    mouseDrag: true,
                                    autoplay: false,
                                    controls: true,
                                    center: true,
                                    items: 1,
                                    nav: false,
                                    speed: 500,
                                    responsive: {
                                        600: {
                                            items: 2
                                        }
                                    }
                                }}
                            >
                                <div class="h-56 px-2">
                                    <div class="h-full overflow-hidden rounded-md image-fit">
                                        <img
                                            alt="Midone Tailwind HTML Admin Template"
                                            src={fakerData[0].images[0]}
                                        />
                                    </div>
                                </div>
                                <div class="h-56 px-2">
                                    <div class="h-full overflow-hidden rounded-md image-fit">
                                        <img
                                            alt="Midone Tailwind HTML Admin Template"
                                            src={fakerData[0].images[1]}
                                        />
                                    </div>
                                </div>
                                <div class="h-56 px-2">
                                    <div class="h-full overflow-hidden rounded-md image-fit">
                                        <img
                                            alt="Midone Tailwind HTML Admin Template"
                                            src={fakerData[0].images[2]}
                                        />
                                    </div>
                                </div>
                                <div class="h-56 px-2">
                                    <div class="h-full overflow-hidden rounded-md image-fit">
                                        <img
                                            alt="Midone Tailwind HTML Admin Template"
                                            src={fakerData[0].images[3]}
                                        />
                                    </div>
                                </div>
                            </TinySlider>
                        </div>
                    </Dialog.Content>
                </Dialog.Root>
                  <!-- END: Modal Content -->
                  `}
						</Preview.Highlight>
					</Preview.Panel>
				</div>
			</Preview>
			<!-- END: Tiny Slider Modal -->
			<!-- BEGIN: Programmatically Show/Hide Modal -->
			<Preview let:toggle class="mt-5 intro-y box">
				<div
					class="flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60 dark:border-darkmode-400"
				>
					<h2 class="mr-auto text-base font-medium">Programmatically Show/Hide Modal</h2>
					<FormSwitch class="w-full mt-3 sm:w-auto sm:ml-auto sm:mt-0">
						<FormSwitch.Label htmlFor="show-example-12">Show example code</FormSwitch.Label>
						<FormSwitch.Input
							id="show-example-12"
							on:click={toggle}
							class="ml-3 mr-0"
							type="checkbox"
						/>
					</FormSwitch>
				</div>
				<div class="p-5">
					<Preview.Panel>
						<!-- BEGIN: Show Modal Toggle -->
						<div class="text-center">
							<Button
								as="a"
								href="#top"
								variant="primary"
								class="mb-2 mr-1"
								on:click={(event) => {
									event.preventDefault();
									programmaticallyModal = true;
								}}
							>
								Show Modal
							</Button>
						</div>
						<!-- END: Show Modal Toggle -->
						<!-- BEGIN: Modal Content -->
						<Dialog.Root bind:open={programmaticallyModal}>
							<Dialog.Content class="p-10 text-center">
								<!-- BEGIN: Hide Modal Toggle -->
								<Button
									as="a"
									href="#top"
									variant="primary"
									class="mr-1"
									on:click={(event) => {
										event.preventDefault();
										programmaticallyModal = false;
									}}
								>
									Hide Modal
								</Button>
								<!-- END: Hide Modal Toggle -->
								<!-- BEGIN: Toggle Modal Toggle -->
								<Button
									as="a"
									href="#top"
									variant="primary"
									class="mr-1"
									on:click={(event) => {
										event.preventDefault();
										programmaticallyModal = !programmaticallyModal;
									}}
								>
									Toggle Modal
								</Button>
								<!-- END: Toggle Modal Toggle -->
							</Dialog.Content>
						</Dialog.Root>
						<!-- END: Modal Content -->
					</Preview.Panel>
					<Preview.Panel type="source">
						<Preview.Highlight>
							{`
                  <!-- BEGIN: Show Modal Toggle -->
                  <div class="text-center">
                    <Button
                      as="a"
                      href="#top"
                      variant="primary"
                      class="mb-2 mr-1"
                      on:click={(event) => {
                        event.preventDefault();
                        programmaticallyModal = true
                      }}
                    >
                      Show Modal
                    </Button>
                  </div>
                  <!-- END: Show Modal Toggle -->
                  <!-- BEGIN: Modal Content -->
                  <Dialog.Root bind:open={programmaticallyModal}>
                    <Dialog.Content class="p-10 text-center">
                        <!-- BEGIN: Hide Modal Toggle -->
                        <Button
                            as="a"
                            href="#top"
                            variant="primary"
                            class="mr-1"
                            on:click={(event) => {
                                event.preventDefault();
                                programmaticallyModal = false;
                            }}
                        >
                            Hide Modal
                        </Button>
                        <!-- END: Hide Modal Toggle -->
                        <!-- BEGIN: Toggle Modal Toggle -->
                        <Button
                            as="a"
                            href="#top"
                            variant="primary"
                            class="mr-1"
                            on:click={(event) => {
                                event.preventDefault();
                                programmaticallyModal = !programmaticallyModal;
                            }}
                        >
                            Toggle Modal
                        </Button>
                        <!-- END: Toggle Modal Toggle -->
                    </Dialog.Content>
                </Dialog.Root>
                  <!-- END: Modal Content -->
                  `}
						</Preview.Highlight>
					</Preview.Panel>
				</div>
			</Preview>
			<!-- END: Programmatically Show/Hide Modal -->
		</div>
	</div>
</div>
