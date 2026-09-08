<script lang="ts">
	import Preview from '$lib/components/Preview';
	import * as DropdownMenu from '$lib/components/DropdownMenu';
	import * as Sheet from '$lib/components/Sheet';
	import { FormLabel, FormInput, FormSelect, FormSwitch } from '$lib/components/Form';
	import Button from '$lib/components/Button';
	import Lucide from '$lib/components/Lucide';

	let basicSlideoverPreview = false;
	let smallSlideoverSizePreview = false;
	let mediumSlideoverSizePreview = false;
	let largeSlideoverSizePreview = false;
	let superlargeSlideoverSizePreview = false;
	let programmaticallySlideover = false;
	let buttonSlideoverPreview = false;
	let overlappingSlideoverPreview = false;
	let nextOverlappingSlideoverPreview = false;
	let headerFooterSlideoverPreview = false;
</script>

<div>
	<div class="flex items-center mt-8 intro-y">
		<h2 class="mr-auto text-lg font-medium">Slide Over</h2>
	</div>
	<div class="grid grid-cols-12 gap-6 mt-5">
		<div class="col-span-12 intro-y lg:col-span-6">
			<!-- BEGIN: Blank Slide Over -->
			<Preview let:toggle class="intro-y box">
				<div
					class="flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60 dark:border-darkmode-400"
				>
					<h2 class="mr-auto text-base font-medium">Blank Slide Over</h2>
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
				<div id="blank-slideover" class="p-5">
					<Preview.Panel>
						<!-- BEGIN: Slide Over Toggle -->
						<div class="text-center">
							<Button
								as="a"
								href="#top"
								variant="primary"
								on:click={(event) => {
									event.preventDefault();
									basicSlideoverPreview = true;
								}}
							>
								Show Slide Over
							</Button>
						</div>
						<!-- END: Slide Over Toggle -->
						<!-- BEGIN: Slide Over Content -->
						<Sheet.Root bind:open={basicSlideoverPreview}>
							<Sheet.Content>
								<Sheet.Header class="p-5">
									<Sheet.Title>
										<h2 class="mr-auto text-base font-medium">Blank Slide Over</h2>
									</Sheet.Title>
								</Sheet.Header>
								<div class="p-5">This is totally awesome blank slide over!</div>
							</Sheet.Content>
						</Sheet.Root>
						<!-- END: Slide Over Content -->
					</Preview.Panel>
					<Preview.Panel type="source">
						<Preview.Highlight>
							{`
                  <!-- BEGIN: Slide Over Toggle -->
                  <div class="text-center">
                    <Button
                      as="a"
                      href="#top"
                      variant="primary"
                      on:click={(event) => {
                        event.preventDefault();
                        basicSlideoverPreview = true
                      }}
                    >
                      Show Slide Over
                    </Button>
                  </div>
                  <!-- END: Slide Over Toggle -->
                  <!-- BEGIN: Slide Over Content -->
                  <Sheet.Root bind:open={basicSlideoverPreview}>
                    <Sheet.Content>
                        <Sheet.Header class="p-5">
                            <Sheet.Title>
                                <h2 class="mr-auto text-base font-medium">Blank Slide Over</h2>
                            </Sheet.Title>
                        </Sheet.Header>
                        <div class="p-5">This is totally awesome blank slide over!</div>
                    </Sheet.Content>
                </Sheet.Root>
                  <!-- END: Slide Over Content -->
                  `}
						</Preview.Highlight>
					</Preview.Panel>
				</div>
			</Preview>
			<!-- END: Blank Slide Over -->
			<!-- BEGIN: Slide Over Size -->
			<Preview let:toggle class="mt-5 intro-y box">
				<div
					class="flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60 dark:border-darkmode-400"
				>
					<h2 class="mr-auto text-base font-medium">Slide Over Size</h2>
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
				<div id="slideover-size" class="p-5">
					<Preview.Panel>
						<div class="text-center">
							<!-- BEGIN: Small Slide Over Toggle -->
							<Button
								as="a"
								href="#top"
								variant="primary"
								on:click={(event) => {
									event.preventDefault();
									smallSlideoverSizePreview = true;
								}}
								class="mb-2 mr-1"
							>
								Show Small Slide Over
							</Button>
							<!-- END: Small Slide Over Toggle -->
							<!-- BEGIN: Medium Slide Over Toggle -->
							<Button
								as="a"
								href="#top"
								variant="primary"
								on:click={(event) => {
									event.preventDefault();
									mediumSlideoverSizePreview = true;
								}}
								class="mb-2 mr-1"
							>
								Show Medium Slide Over
							</Button>
							<!-- END: Medium Slide Over Toggle -->
							<!-- BEGIN: Large Slide Over Toggle -->
							<Button
								as="a"
								href="#top"
								variant="primary"
								on:click={(event) => {
									event.preventDefault();
									largeSlideoverSizePreview = true;
								}}
								class="mb-2 mr-1"
							>
								Show Large Slide Over
							</Button>
							<!-- END: Large Slide Over Toggle -->
							<!-- BEGIN: Super Large Slide Over Toggle -->
							<Button
								as="a"
								href="#top"
								variant="primary"
								on:click={(event) => {
									event.preventDefault();
									superlargeSlideoverSizePreview = true;
								}}
								class="mb-2 mr-1"
							>
								Show Superlarge Slide Over
							</Button>
							<!-- END: Super Large Slide Over Toggle -->
						</div>
						<!-- BEGIN: Small Slide Over Content -->
						<Sheet.Root size="sm" bind:open={smallSlideoverSizePreview}>
							<Sheet.Content>
								<Sheet.Header class="p-5">
									<Sheet.Title>
										<h2 class="mr-auto text-base font-medium">Small Slide Over</h2>
									</Sheet.Title>
								</Sheet.Header>
								<div class="p-5">This is totally awesome small slide over!</div>
							</Sheet.Content>
						</Sheet.Root>
						<!-- END: Small Slide Over Content -->
						<!-- BEGIN: Medium Slide Over Content -->
						<Sheet.Root bind:open={mediumSlideoverSizePreview}>
							<Sheet.Content>
								<Sheet.Header class="p-5">
									<Sheet.Title>
										<h2 class="mr-auto text-base font-medium">Medium Slide Over</h2>
									</Sheet.Title>
								</Sheet.Header>
								<div class="p-5">This is totally awesome medium slide over!</div>
							</Sheet.Content>
						</Sheet.Root>
						<!-- END: Medium Slide Over Content -->
						<!-- BEGIN: Large Slide Over Content -->
						<Sheet.Root size="lg" bind:open={largeSlideoverSizePreview}>
							<Sheet.Content>
								<Sheet.Header class="p-5">
									<Sheet.Title>
										<h2 class="mr-auto text-base font-medium">Large Slide Over</h2>
									</Sheet.Title>
								</Sheet.Header>
								<div class="p-5">This is totally awesome large slide over!</div>
							</Sheet.Content>
						</Sheet.Root>
						<!-- END: Large Slide Over Content -->
						<!-- BEGIN: Super Large Slide Over Content -->
						<Sheet.Root size="xl" bind:open={superlargeSlideoverSizePreview}>
							<Sheet.Content>
								<Sheet.Header class="p-5">
									<Sheet.Title>
										<h2 class="mr-auto text-base font-medium">Superlarge Slide Over</h2>
									</Sheet.Title>
								</Sheet.Header>
								<div class="p-5">This is totally awesome superlarge slide over!</div>
							</Sheet.Content>
						</Sheet.Root>
						<!-- END: Super Large Slide Over Content -->
					</Preview.Panel>
					<Preview.Panel type="source">
						<Preview.Highlight>
							{`
                  <div class="text-center">
                    <!-- BEGIN: Small Slide Over Toggle -->
                    <Button
                      as="a"
                      href="#top"
                      variant="primary"
                      on:click={(event) => {
                        event.preventDefault();
                        smallSlideoverSizePreview = true
                      }}
                      class="mb-2 mr-1"
                    >
                      Show Small Slide Over
                    </Button>
                    <!-- END: Small Slide Over Toggle -->
                    <!-- BEGIN: Medium Slide Over Toggle -->
                    <Button
                      as="a"
                      href="#top"
                      variant="primary"
                      on:click={(event) => {
                        event.preventDefault();
                        mediumSlideoverSizePreview = true
                      }}
                      class="mb-2 mr-1"
                    >
                      Show Medium Slide Over
                    </Button>
                    <!-- END: Medium Slide Over Toggle -->
                    <!-- BEGIN: Large Slide Over Toggle -->
                    <Button
                      as="a"
                      href="#top"
                      variant="primary"
                      on:click={(event) => {
                        event.preventDefault();
                        largeSlideoverSizePreview = true
                      }}
                      class="mb-2 mr-1"
                    >
                      Show Large Slide Over
                    </Button>
                    <!-- END: Large Slide Over Toggle -->
                    <!-- BEGIN: Super Large Slide Over Toggle -->
                    <Button
                      as="a"
                      href="#top"
                      variant="primary"
                      on:click={(event) => {
                        event.preventDefault();
                        superlargeSlideoverSizePreview = true
                      }}
                      class="mb-2 mr-1"
                    >
                      Show Superlarge Slide Over
                    </Button>
                    <!-- END: Super Large Slide Over Toggle -->
                  </div>
                  <!-- BEGIN: Small Slide Over Content -->
                    <Sheet.Root size="sm" bind:open={smallSlideoverSizePreview}>
                        <Sheet.Content>
                            <Sheet.Header class="p-5">
                                <Sheet.Title>
                                    <h2 class="mr-auto text-base font-medium">Small Slide Over</h2>
                                </Sheet.Title>
                            </Sheet.Header>
                            <div class="p-5">This is totally awesome small slide over!</div>
                        </Sheet.Content>
                    </Sheet.Root>
                    <!-- END: Small Slide Over Content -->
                    <!-- BEGIN: Medium Slide Over Content -->
                    <Sheet.Root bind:open={mediumSlideoverSizePreview}>
                        <Sheet.Content>
                            <Sheet.Header class="p-5">
                                <Sheet.Title>
                                    <h2 class="mr-auto text-base font-medium">Medium Slide Over</h2>
                                </Sheet.Title>
                            </Sheet.Header>
                            <div class="p-5">This is totally awesome medium slide over!</div>
                        </Sheet.Content>
                    </Sheet.Root>
                    <!-- END: Medium Slide Over Content -->
                    <!-- BEGIN: Large Slide Over Content -->
                    <Sheet.Root size="lg" bind:open={largeSlideoverSizePreview}>
                        <Sheet.Content>
                            <Sheet.Header class="p-5">
                                <Sheet.Title>
                                    <h2 class="mr-auto text-base font-medium">Large Slide Over</h2>
                                </Sheet.Title>
                            </Sheet.Header>
                            <div class="p-5">This is totally awesome large slide over!</div>
                        </Sheet.Content>
                    </Sheet.Root>
                    <!-- END: Large Slide Over Content -->
                    <!-- BEGIN: Super Large Slide Over Content -->
                    <Sheet.Root size="xl" bind:open={superlargeSlideoverSizePreview}>
                        <Sheet.Content>
                            <Sheet.Header class="p-5">
                                <Sheet.Title>
                                    <h2 class="mr-auto text-base font-medium">Superlarge Slide Over</h2>
                                </Sheet.Title>
                            </Sheet.Header>
                            <div class="p-5">This is totally awesome superlarge slide over!</div>
                        </Sheet.Content>
                    </Sheet.Root>
                    <!-- END: Super Large Slide Over Content -->
                  `}
						</Preview.Highlight>
					</Preview.Panel>
				</div>
			</Preview>
			<!-- END: Slide Over Size -->
			<!-- BEGIN: Slide Over With Close Button -->
			<Preview let:toggle class="mt-5 intro-y box">
				<div
					class="flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60 dark:border-darkmode-400"
				>
					<h2 class="mr-auto text-base font-medium">Slide Over With Close Button</h2>
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
				<div id="button-slideover" class="p-5">
					<Preview.Panel>
						<!-- BEGIN: Modal Toggle -->
						<div class="text-center">
							<Button
								as="a"
								href="#top"
								variant="primary"
								on:click={(event) => {
									event.preventDefault();
									buttonSlideoverPreview = true;
								}}
							>
								Show Slide Over
							</Button>
						</div>
						<!-- END: Modal Toggle -->
						<!-- BEGIN: Modal Content -->
						<Sheet.Root bind:open={buttonSlideoverPreview}>
							<Sheet.Content>
								<Sheet.Header class="p-5">
									<Sheet.Title>
										<h2 class="mr-auto text-base font-medium">Slide Over With Close Button</h2>
									</Sheet.Title>
								</Sheet.Header>
								<div class="p-5">This is totally awesome slide over with close button!</div>
							</Sheet.Content>
						</Sheet.Root>
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
                        buttonSlideoverPreview = true
                      }}
                    >
                      Show Slide Over
                    </Button>
                  </div>
                  <!-- END: Modal Toggle -->
                  <!-- BEGIN: Modal Content -->
                  <Sheet.Root bind:open={buttonSlideoverPreview}>
                        <Sheet.Content>
                            <Sheet.Header class="p-5">
                                <Sheet.Title>
                                    <h2 class="mr-auto text-base font-medium">Slide Over With Close Button</h2>
                                </Sheet.Title>
                            </Sheet.Header>
                            <div class="p-5">This is totally awesome slide over with close button!</div>
                        </Sheet.Content>
                    </Sheet.Root>
                  <!-- END: Modal Content -->
                  `}
						</Preview.Highlight>
					</Preview.Panel>
				</div>
			</Preview>
			<!-- END: Slide Over With Close Button -->
		</div>
		<div class="col-span-12 intro-y lg:col-span-6">
			<!-- BEGIN: Overlapping Slide Over -->
			<Preview let:toggle class="intro-y box">
				<div
					class="flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60 dark:border-darkmode-400"
				>
					<h2 class="mr-auto text-base font-medium">Overlapping Slide Over</h2>
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
				<div id="overlapping-slideover" class="p-5">
					<Preview.Panel>
						<!-- BEGIN: Slide Over Toggle -->
						<div class="text-center">
							<Button
								as="a"
								href="#top"
								variant="primary"
								on:click={(event) => {
									event.preventDefault();
									overlappingSlideoverPreview = true;
								}}
							>
								Show Slide Over
							</Button>
						</div>
						<!-- END: Slide Over Toggle -->
						<!-- BEGIN: Slide Over Content -->
						<Sheet.Root bind:open={overlappingSlideoverPreview}>
							<Sheet.Content>
								<Sheet.Header class="p-5">
									<Sheet.Title>
										<h2 class="mr-auto text-base font-medium">Overlapping Slide Over</h2>
									</Sheet.Title>
								</Sheet.Header>
								<div class="px-5 py-10">
									<div class="text-center">
										<div class="mb-5">Click button bellow to show overlapping slide over!</div>
										<!-- BEGIN: Overlapping Slide Over Toggle -->
										<Button
											as="a"
											href="#top"
											variant="primary"
											on:click={(event) => {
												event.preventDefault();
												nextOverlappingSlideoverPreview = true;
											}}
										>
											Show Overlapping Slide Over
										</Button>
										<!-- END: Overlapping Slide Over Toggle -->
										<!-- BEGIN: Overlapping Slide Over Content -->
										<Sheet.Root bind:open={nextOverlappingSlideoverPreview}>
											<Sheet.Content>
												<Sheet.Header class="p-5">
													<Sheet.Title>
														<h2 class="mr-auto text-base font-medium">Overlapping Slide Over</h2>
													</Sheet.Title>
												</Sheet.Header>
												<div class="text-center">
													This is totally awesome overlapping slide over!
												</div>
											</Sheet.Content>
										</Sheet.Root>
										<!-- END: Overlapping Slide Over Content -->
									</div>
								</div>
							</Sheet.Content>
						</Sheet.Root>
						<!-- END: Slide Over Content -->
					</Preview.Panel>
					<Preview.Panel type="source">
						<Preview.Highlight>
							{`
                  <!-- BEGIN: Slide Over Toggle -->
                  <div class="text-center">
                    <Button
                      as="a"
                      href="#top"
                      variant="primary"
                      on:click={(event) => {
                        event.preventDefault();
                        overlappingSlideoverPreview = true
                      }}
                    >
                      Show Slide Over
                    </Button>
                  </div>
                  <!-- END: Slide Over Toggle -->
                  <!-- BEGIN: Slide Over Content -->
                  <Sheet.Root bind:open={overlappingSlideoverPreview}>
                        <Sheet.Content>
                            <Sheet.Header class="p-5">
                                <Sheet.Title>
                                    <h2 class="mr-auto text-base font-medium">Overlapping Slide Over</h2>
                                </Sheet.Title>
                            </Sheet.Header>
                            <div class="px-5 py-10">
                                <div class="text-center">
                                    <div class="mb-5">Click button bellow to show overlapping slide over!</div>
                                    <!-- BEGIN: Overlapping Slide Over Toggle -->
                                    <Button
                                        as="a"
                                        href="#top"
                                        variant="primary"
                                        on:click={(event) => {
                                            event.preventDefault();
                                            nextOverlappingSlideoverPreview = true;
                                        }}
                                    >
                                        Show Overlapping Slide Over
                                    </Button>
                                    <!-- END: Overlapping Slide Over Toggle -->
                                    <!-- BEGIN: Overlapping Slide Over Content -->
                                    <Sheet.Root bind:open={nextOverlappingSlideoverPreview}>
                                        <Sheet.Content>
                                            <Sheet.Header class="p-5">
                                                <Sheet.Title>
                                                    <h2 class="mr-auto text-base font-medium">Overlapping Slide Over</h2>
                                                </Sheet.Title>
                                            </Sheet.Header>
                                            <div class="text-center">
                                                This is totally awesome overlapping slide over!
                                            </div>
                                        </Sheet.Content>
                                    </Sheet.Root>
                                    <!-- END: Overlapping Slide Over Content -->
                                </div>
                            </div>
                        </Sheet.Content>
                    </Sheet.Root>
                  <!-- END: Slide Over Content -->
                  `}
						</Preview.Highlight>
					</Preview.Panel>
				</div>
			</Preview>
			<!-- END: Overlapping Slide Over -->
			<!-- BEGIN: Header & Footer Slide Over -->
			<Preview let:toggle class="mt-5 intro-y box">
				<div
					class="flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60 dark:border-darkmode-400"
				>
					<h2 class="mr-auto text-base font-medium">Header & Footer Slide Over</h2>
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
				<div id="header-footer-slideover" class="p-5">
					<Preview.Panel>
						<!-- BEGIN: Slide Over Toggle -->
						<div class="text-center">
							<Button
								as="a"
								href="#top"
								variant="primary"
								on:click={(event) => {
									event.preventDefault();
									headerFooterSlideoverPreview = true;
								}}
							>
								Show Slide Over
							</Button>
						</div>
						<!-- END: Slide Over Toggle -->
						<!-- BEGIN: Slide Over Content -->
						<Sheet.Root staticBackdrop bind:open={headerFooterSlideoverPreview}>
							<Sheet.Content withClose={false}>
								<Sheet.Header class="p-5">
									<Sheet.Title>
										<h2 class="mr-auto text-base font-medium">Broadcast Message</h2>
										<Button variant="outline-secondary" class="hidden sm:flex">
											<Lucide icon="File" class="w-4 h-4 mr-2" />
											Download Docs
										</Button>
										<DropdownMenu.Root>
											<DropdownMenu.Trigger asChild let:builder>
												<a class="block w-5 h-5 sm:hidden" href="/" use:builder.action {...builder}>
													<Lucide icon="EllipsisVertical" class="w-5 h-5 text-slate-500" />
												</a>
											</DropdownMenu.Trigger>
											<DropdownMenu.Content class="w-40">
												<DropdownMenu.Item>
													<Lucide icon="File" class="w-4 h-4 mr-2" />
													Download Docs
												</DropdownMenu.Item>
											</DropdownMenu.Content>
										</DropdownMenu.Root>
									</Sheet.Title>
								</Sheet.Header>
								<!-- BEGIN: Slide Over Body -->
								<div class="flex-1 p-5 overflow-y-auto">
									<div>
										<FormLabel htmlFor="modal-form-1">From</FormLabel>
										<FormInput id="modal-form-1" type="text" placeholder="example@gmail.com" />
									</div>
									<div class="mt-3">
										<FormLabel htmlFor="modal-form-2">To</FormLabel>
										<FormInput id="modal-form-2" type="text" placeholder="example@gmail.com" />
									</div>
									<div class="mt-3">
										<FormLabel htmlFor="modal-form-3">Subject</FormLabel>
										<FormInput id="modal-form-3" type="text" placeholder="Important Meeting" />
									</div>
									<div class="mt-3">
										<FormLabel htmlFor="modal-form-4">Has the Words</FormLabel>
										<FormInput
											id="modal-form-4"
											type="text"
											placeholder="Job, Work, Documentation"
										/>
									</div>
									<div class="mt-3">
										<FormLabel htmlFor="modal-form-5">Doesn't Have</FormLabel>
										<FormInput
											id="modal-form-5"
											type="text"
											placeholder="Job, Work, Documentation"
										/>
									</div>
									<div class="mt-3">
										<FormLabel htmlFor="modal-form-6">Size</FormLabel>
										<FormSelect id="modal-form-6">
											<option>10</option>
											<option>25</option>
											<option>35</option>
											<option>50</option>
										</FormSelect>
									</div>
								</div>
								<!-- END: Slide Over Body -->
								<!-- BEGIN: Slide Over Footer -->
								<Sheet.Footer>
									<Button
										variant="outline-secondary"
										type="button"
										on:click={() => {
											headerFooterSlideoverPreview = false;
										}}
										class="w-20 mr-1"
									>
										Cancel
									</Button>
									<Button variant="primary" type="button" class="w-20">Send</Button>
								</Sheet.Footer>
							</Sheet.Content>
						</Sheet.Root>
						<!-- END: Slide Over Content -->
					</Preview.Panel>
					<Preview.Panel type="source">
						<Preview.Highlight>
							{`
                  <!-- BEGIN: Slide Over Toggle -->
                  <div class="text-center">
                    <Button
                      as="a"
                      href="#top"
                      variant="primary"
                      on:click={(event) => {
                        event.preventDefault();
                        headerFooterSlideoverPreview = true
                      }}
                    >
                      Show Slide Over
                    </Button>
                  </div>
                  <!-- END: Slide Over Toggle -->
                  <!-- BEGIN: Slide Over Content -->
                  <Sheet.Root staticBackdrop bind:open={headerFooterSlideoverPreview}>
                        <Sheet.Content withClose={false}>
                            <Sheet.Header class="p-5">
                                <Sheet.Title>
                                    <h2 class="mr-auto text-base font-medium">Broadcast Message</h2>
                                    <Button variant="outline-secondary" class="hidden sm:flex">
                                        <Lucide icon="File" class="w-4 h-4 mr-2" />
                                        Download Docs
                                    </Button>
                                    <DropdownMenu.Root>
                                        <DropdownMenu.Trigger asChild let:builder>
                                            <a class="block w-5 h-5 sm:hidden" href="/" use:builder.action {...builder}>
                                                <Lucide icon="EllipsisVertical" class="w-5 h-5 text-slate-500" />
                                            </a>
                                        </DropdownMenu.Trigger>
                                        <DropdownMenu.Content class="w-40">
                                            <DropdownMenu.Item>
                                                <Lucide icon="File" class="w-4 h-4 mr-2" />
                                                Download Docs
                                            </DropdownMenu.Item>
                                        </DropdownMenu.Content>
                                    </DropdownMenu.Root>
                                </Sheet.Title>
                            </Sheet.Header>
                            <!-- BEGIN: Slide Over Body -->
                            <div class="flex-1 p-5 overflow-y-auto">
                                <div>
                                    <FormLabel htmlFor="modal-form-1">From</FormLabel>
                                    <FormInput id="modal-form-1" type="text" placeholder="example@gmail.com" />
                                </div>
                                <div class="mt-3">
                                    <FormLabel htmlFor="modal-form-2">To</FormLabel>
                                    <FormInput id="modal-form-2" type="text" placeholder="example@gmail.com" />
                                </div>
                                <div class="mt-3">
                                    <FormLabel htmlFor="modal-form-3">Subject</FormLabel>
                                    <FormInput id="modal-form-3" type="text" placeholder="Important Meeting" />
                                </div>
                                <div class="mt-3">
                                    <FormLabel htmlFor="modal-form-4">Has the Words</FormLabel>
                                    <FormInput
                                        id="modal-form-4"
                                        type="text"
                                        placeholder="Job, Work, Documentation"
                                    />
                                </div>
                                <div class="mt-3">
                                    <FormLabel htmlFor="modal-form-5">Doesn't Have</FormLabel>
                                    <FormInput
                                        id="modal-form-5"
                                        type="text"
                                        placeholder="Job, Work, Documentation"
                                    />
                                </div>
                                <div class="mt-3">
                                    <FormLabel htmlFor="modal-form-6">Size</FormLabel>
                                    <FormSelect id="modal-form-6">
                                        <option>10</option>
                                        <option>25</option>
                                        <option>35</option>
                                        <option>50</option>
                                    </FormSelect>
                                </div>
                            </div>
                            <!-- END: Slide Over Body -->
                            <!-- BEGIN: Slide Over Footer -->
                            <Sheet.Footer>
                                <Button
                                    variant="outline-secondary"
                                    type="button"
                                    on:click={() => {
                                        headerFooterSlideoverPreview = false;
                                    }}
                                    class="w-20 mr-1"
                                >
                                    Cancel
                                </Button>
                                <Button variant="primary" type="button" class="w-20">Send</Button>
                            </Sheet.Footer>
                        </Sheet.Content>
                    </Sheet.Root>
                  <!-- END: Slide Over Content -->
                  `}
						</Preview.Highlight>
					</Preview.Panel>
				</div>
			</Preview>
			<!-- END: Header & Footer Slide Over -->
			<!-- BEGIN: Programmatically Show/Hide Slide Over -->
			<Preview let:toggle class="mt-5 intro-y box">
				<div
					class="flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60 dark:border-darkmode-400"
				>
					<h2 class="mr-auto text-base font-medium">Programmatically Show/Hide Slide Over</h2>
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
				<div id="programmatically-show-hide-slideover" class="p-5">
					<Preview.Panel>
						<!-- BEGIN: Show Slide Over Toggle -->
						<div class="text-center">
							<Button
								as="a"
								id="programmatically-show-slideover"
								href="#top"
								variant="primary"
								class="mb-2 mr-1"
								on:click={(event) => {
									event.preventDefault();
									programmaticallySlideover = true;
								}}
							>
								Show Slide Over
							</Button>
						</div>
						<!-- END: Show Slide Over Toggle -->
						<!-- BEGIN: Slide Over Content -->
						<Sheet.Root size="lg" bind:open={programmaticallySlideover}>
							<Sheet.Content>
								<Sheet.Header class="p-5">
									<Sheet.Title>
										<h2 class="mr-auto text-base font-medium">
											Programmatically Show/Hide Slide Over
										</h2>
									</Sheet.Title>
								</Sheet.Header>
								<div class="p-10 text-center">
									<!-- BEGIN: Hide Slide Over Toggle -->
									<Button
										as="a"
										id="programmatically-hide-slideover"
										href="#top"
										variant="primary"
										class="mr-1"
										on:click={(event) => {
											event.preventDefault();
											programmaticallySlideover = false;
										}}
									>
										Hide Slide Over
									</Button>
									<!-- END: Hide Slide Over Toggle -->
									<!-- BEGIN: Toggle Slide Over Toggle -->
									<Button
										as="a"
										id="programmatically-toggle-slideover"
										href="#top"
										variant="primary"
										class="mt-2 mr-1 sm:mt-0"
										on:click={(event) => {
											event.preventDefault();
											programmaticallySlideover = !programmaticallySlideover;
										}}
									>
										Toggle Slide Over
									</Button>
									<!-- END: Toggle Slide Over Toggle -->
								</div>
							</Sheet.Content>
						</Sheet.Root>
						<!-- END: Slide Over Content -->
					</Preview.Panel>
					<Preview.Panel type="source">
						<Preview.Highlight>
							{`
                  <!-- BEGIN: Show Slide Over Toggle -->
                  <div class="text-center">
                    <Button
                      as="a"
                      id="programmatically-show-slideover"
                      href="#top"
                      variant="primary"
                      class="mb-2 mr-1"
                      on:click={(event) => {
                        event.preventDefault();
                        programmaticallySlideover = true
                      }}
                    >
                      Show Slide Over
                    </Button>
                  </div>
                  <!-- END: Show Slide Over Toggle -->
                  <!-- BEGIN: Slide Over Content -->
                  <Sheet.Root size="lg" bind:open={programmaticallySlideover}>
                        <Sheet.Content>
                            <Sheet.Header class="p-5">
                                <Sheet.Title>
                                    <h2 class="mr-auto text-base font-medium">
                                        Programmatically Show/Hide Slide Over
                                    </h2>
                                </Sheet.Title>
                            </Sheet.Header>
                            <div class="p-10 text-center">
                                <!-- BEGIN: Hide Slide Over Toggle -->
                                <Button
                                    as="a"
                                    id="programmatically-hide-slideover"
                                    href="#top"
                                    variant="primary"
                                    class="mr-1"
                                    on:click={(event) => {
                                        event.preventDefault();
                                        programmaticallySlideover = false;
                                    }}
                                >
                                    Hide Slide Over
                                </Button>
                                <!-- END: Hide Slide Over Toggle -->
                                <!-- BEGIN: Toggle Slide Over Toggle -->
                                <Button
                                    as="a"
                                    id="programmatically-toggle-slideover"
                                    href="#top"
                                    variant="primary"
                                    class="mt-2 mr-1 sm:mt-0"
                                    on:click={(event) => {
                                        event.preventDefault();
                                        programmaticallySlideover = !programmaticallySlideover;
                                    }}
                                >
                                    Toggle Slide Over
                                </Button>
                                <!-- END: Toggle Slide Over Toggle -->
                            </div>
                        </Sheet.Content>
                    </Sheet.Root>
                  <!-- END: Slide Over Content -->
                  `}
						</Preview.Highlight>
					</Preview.Panel>
				</div>
			</Preview>
			<!-- END: Programmatically Show/Hide Slide Over -->
		</div>
	</div>
</div>
