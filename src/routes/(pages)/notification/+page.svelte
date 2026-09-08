<script lang="ts">
	import Preview from '$lib/components/Preview';
	import Lucide from '$lib/components/Lucide';
	import Notification from '$lib/components/Notification';
	import { type NotificationElement } from '$lib/components/Notification';
	import { FormSwitch } from '$lib/components/Form';
	import Button from '$lib/components/Button';
	import fakerData from '@/utils/faker';

	// Basic non sticky notification
	let basicNonStickyNotification: NotificationElement;
	const basicNonStickyNotificationToggle = () => {
		// Show notification
		basicNonStickyNotification.showToast && basicNonStickyNotification.showToast();
	};

	// Basic sticky notification
	let basicStickyNotification: NotificationElement;
	const basicStickyNotificationToggle = () => {
		// Show notification
		basicStickyNotification.showToast && basicStickyNotification.showToast();
	};

	// Success notification
	let successNotification: NotificationElement;
	const successNotificationToggle = () => {
		// Show notification
		successNotification.showToast && successNotification.showToast();
	};

	// Notification with actions
	let notificationWithActions: NotificationElement;
	const notificationWithActionsToggle = () => {
		// Show notification
		notificationWithActions.showToast && notificationWithActions.showToast();
	};

	// Notification with avatar
	let notificationWithAvatar: NotificationElement;
	const notificationWithAvatarToggle = () => {
		// Show notification
		notificationWithAvatar.showToast && notificationWithAvatar.showToast();
	};

	// Notification with split buttons
	let notificationWithSplitButtons: NotificationElement;
	const notificationWithSplitButtonsToggle = () => {
		// Show notification
		notificationWithSplitButtons.showToast && notificationWithSplitButtons.showToast();
	};

	// Notification with buttons below
	let notificationWithButtonsBelow: NotificationElement;
	const notificationWithButtonsBelowToggle = () => {
		// Show notification
		notificationWithButtonsBelow.showToast && notificationWithButtonsBelow.showToast();
	};
</script>

<div>
	<div class="flex items-center mt-8 intro-y">
		<h2 class="mr-auto text-lg font-medium">Notification</h2>
	</div>
	<div class="grid grid-cols-12 gap-6 mt-5">
		<div class="col-span-12 intro-y lg:col-span-6">
			<!-- BEGIN: Basic Notification -->
			<Preview let:toggle class="intro-y box">
				<div
					class="flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60 dark:border-darkmode-400"
				>
					<h2 class="mr-auto text-base font-medium">Basic Notification</h2>
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
						<div class="text-center">
							<!-- BEGIN: Basic Non Sticky Notification Content -->
							<Notification
								bind:ref={basicNonStickyNotification}
								options={{
									duration: 3000
								}}
								class="flex flex-col sm:flex-row"
							>
								<div class="font-medium">Yay! Updates Published!</div>
								<a
									class="mt-1 font-medium text-primary dark:text-slate-400 sm:mt-0 sm:ml-40"
									href="#top"
								>
									Review Changes
								</a>
							</Notification>
							<!-- END: Basic Non Sticky Notification Content -->
							<!-- BEGIN: Basic Sticky Notification Content -->
							<Notification bind:ref={basicStickyNotification} class="flex flex-col sm:flex-row">
								<div class="font-medium">Yay! Updates Published!</div>
								<a
									class="mt-1 font-medium text-primary dark:text-slate-400 sm:mt-0 sm:ml-40"
									href="#top"
								>
									Review Changes
								</a>
							</Notification>
							<!-- END: Basic Sticky Notification Content -->
							<!-- BEGIN: Notification Toggle -->
							<Button variant="primary" class="mr-1" on:click={basicNonStickyNotificationToggle}>
								Show Non Sticky Notification
							</Button>
							<Button
								variant="primary"
								class="mt-2 sm:mt-0"
								on:click={basicStickyNotificationToggle}
							>
								Show Sticky Notification
							</Button>
							<!-- END: Notification Toggle -->
						</div>
					</Preview.Panel>
					<Preview.Panel type="source">
						<Preview.Highlight>
							{`
                <div class="text-center">
                  <!-- BEGIN: Basic Non Sticky Notification Content -->
                  <Notification
                    bind:ref={basicNonStickyNotification}
                    options={{
                      duration: 3000,
                    }}
                    class="flex flex-col sm:flex-row"
                  >
                    <div class="font-medium">
                      Yay! Updates Published!
                    </div>
                    <a
                      class="mt-1 font-medium text-primary dark:text-slate-400 sm:mt-0 sm:ml-40"
                      href="#top"
                    >
                      Review Changes
                    </a>
                  </Notification>
                  <!-- END: Basic Non Sticky Notification Content -->
                  <!-- BEGIN: Basic Sticky Notification Content -->
                  <Notification
                    bind:ref={basicStickyNotification}
                    class="flex flex-col sm:flex-row"
                  >
                    <div class="font-medium">
                      Yay! Updates Published!
                    </div>
                    <a
                      class="mt-1 font-medium text-primary dark:text-slate-400 sm:mt-0 sm:ml-40"
                      href="#top"
                    >
                      Review Changes
                    </a>
                  </Notification>
                  <!-- END: Basic Sticky Notification Content -->
                  <!-- BEGIN: Notification Toggle -->
                  <Button
                    variant="primary"
                    class="mr-1"
                    on:click={basicNonStickyNotificationToggle}
                  >
                    Show Non Sticky Notification
                  </Button>
                  <Button
                    variant="primary"
                    class="mt-2 sm:mt-0"
                    on:click={basicStickyNotificationToggle}
                  >
                    Show Sticky Notification
                  </Button>
                  <!-- END: Notification Toggle -->
                </div>
                `}
						</Preview.Highlight>
						<Preview.Highlight type="javascript" class="mt-5">
							{`
                  // Basic non sticky notification
                  const basicNonStickyNotification = useRef<NotificationElement>();
                  const basicNonStickyNotificationToggle = () => {
                    // Show notification
                    basicNonStickyNotification.current.showToast && basicNonStickyNotification.current.showToast();
                  };
                
                  // Basic sticky notification
                  const basicStickyNotification = useRef<NotificationElement>();
                  const basicStickyNotificationToggle = () => {
                    // Show notification
                    basicStickyNotification.current.showToast && basicStickyNotification.current.showToast();
                  };
                  `}
						</Preview.Highlight>
					</Preview.Panel>
				</div>
			</Preview>
			<!-- END: Basic Notification -->
			<!-- BEGIN: Success Notification -->
			<Preview let:toggle class="mt-5 intro-y box">
				<div
					class="flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60 dark:border-darkmode-400"
				>
					<h2 class="mr-auto text-base font-medium">Success Notification</h2>
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
							<!-- BEGIN: Notification Content -->
							<Notification bind:ref={successNotification} class="flex">
								<Lucide icon="CircleCheck" class="text-success" />
								<div class="ml-4 mr-4">
									<div class="font-medium">Message Saved!</div>
									<div class="mt-1 text-slate-500">The message will be sent in 5 minutes.</div>
								</div>
							</Notification>
							<!-- END: Notification Content -->
							<!-- BEGIN: Notification Toggle -->
							<Button variant="primary" on:click={successNotificationToggle}>
								Show Notification
							</Button>
							<!-- END: Notification Toggle -->
						</div>
					</Preview.Panel>
					<Preview.Panel type="source">
						<Preview.Highlight>
							{`
                <div class="text-center">
                  <!-- BEGIN: Notification Content -->
                  <Notification
                    bind:ref={successNotification}
                    class="flex"
                  >
                    <Lucide icon="CheckCircle" class="text-success" />
                    <div class="ml-4 mr-4">
                      <div class="font-medium">Message Saved!</div>
                      <div class="mt-1 text-slate-500">
                        The message will be sent in 5 minutes.
                      </div>
                    </div>
                  </Notification>
                  <!-- END: Notification Content -->
                  <!-- BEGIN: Notification Toggle -->
                  <Button
                    variant="primary"
                    on:click={successNotificationToggle}
                  >
                    Show Notification
                  </Button>
                  <!-- END: Notification Toggle -->
                </div>
                `}
						</Preview.Highlight>
						<Preview.Highlight type="javascript" class="mt-5">
							{`
                  // Success notification
                  const successNotification = useRef<NotificationElement>();
                  const successNotificationToggle = () => {
                    // Show notification
                    successNotification.current.showToast && successNotification.current.showToast();
                  };
                  `}
						</Preview.Highlight>
					</Preview.Panel>
				</div>
			</Preview>
			<!-- END: Success Notification -->
			<!-- BEGIN: Notification With Actions -->
			<Preview let:toggle class="mt-5 intro-y box">
				<div
					class="flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60 dark:border-darkmode-400"
				>
					<h2 class="mr-auto text-base font-medium">Notification With Actions</h2>
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
						<div class="text-center">
							<!-- BEGIN: Notification Content -->
							<Notification bind:ref={notificationWithActions} class="flex">
								<Lucide icon="HardDrive" />
								<div class="ml-4 mr-4">
									<div class="font-medium">Storage Removed!</div>
									<div class="mt-1 text-slate-500">
										The server will restart in 30 seconds, don't make
										<br />
										changes during the update process!
									</div>
									<div class="font-medium flex mt-1.5">
										<a class="text-primary dark:text-slate-400" href="#top"> Restart Now </a>
										<a class="ml-3 text-slate-500" href="#top"> Cancel </a>
									</div>
								</div>
							</Notification>
							<!-- END: Notification Content -->
							<!-- BEGIN: Notification Toggle -->
							<Button variant="primary" on:click={notificationWithActionsToggle}>
								Show Notification
							</Button>
							<!-- END: Notification Toggle -->
						</div>
					</Preview.Panel>
					<Preview.Panel type="source">
						<Preview.Highlight>
							{`
                <div class="text-center">
                  <!-- BEGIN: Notification Content -->
                  <Notification
                    bind:ref={notificationWithActions}
                    class="flex"
                  >
                    <Lucide icon="HardDrive" />
                    <div class="ml-4 mr-4">
                      <div class="font-medium">Storage Removed!</div>
                      <div class="mt-1 text-slate-500">
                        The server will restart in 30 seconds, don't make
                        <br />
                        changes during the update process!
                      </div>
                      <div class="font-medium flex mt-1.5">
                        <a
                          class="text-primary dark:text-slate-400"
                          href="#top"
                        >
                          Restart Now
                        </a>
                        <a class="ml-3 text-slate-500" href="#top">
                          Cancel
                        </a>
                      </div>
                    </div>
                  </Notification>
                  <!-- END: Notification Content -->
                  <!-- BEGIN: Notification Toggle -->
                  <Button
                    variant="primary"
                    on:click={notificationWithActionsToggle}
                  >
                    Show Notification
                  </Button>
                  <!-- END: Notification Toggle -->
                </div>
                `}
						</Preview.Highlight>
						<Preview.Highlight type="javascript" class="mt-5">
							{`
                  // Notification with actions
                  const notificationWithActions = useRef<NotificationElement>();
                  const notificationWithActionsToggle = () => {
                    // Show notification
                    notificationWithActions.current.showToast && notificationWithActions.current.showToast();
                  };
                  `}
						</Preview.Highlight>
					</Preview.Panel>
				</div>
			</Preview>
		</div>
		<div class="col-span-12 intro-y lg:col-span-6">
			<!-- END: Notification With Actions -->
			<!-- BEGIN: Notification With Avatar -->
			<Preview let:toggle class="intro-y box">
				<div
					class="flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60 dark:border-darkmode-400"
				>
					<h2 class="mr-auto text-base font-medium">Notification With Avatar</h2>
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
							<!-- BEGIN: Notification Content -->
							<Notification
								bind:ref={notificationWithAvatar}
								options={{
									close: false
								}}
								class="flex"
							>
								<div class="flex-none w-10 h-10 overflow-hidden rounded-full image-fit">
									<img alt="Midone Tailwind HTML Admin Template" src={fakerData[0].photos[0]} />
								</div>
								<div class="ml-4 sm:mr-28">
									<div class="font-medium">
										{fakerData[0].users[0].name}
									</div>
									<div class="mt-1 text-slate-500">See you later! 😃😃😃</div>
								</div>
								<a
									data-dismiss="notification"
									class="absolute top-0 bottom-0 right-0 flex items-center px-6 font-medium border-l border-slate-200/60 dark:border-darkmode-400 text-primary dark:text-slate-400"
									href="#top"
								>
									Reply
								</a>
							</Notification>
							<!-- END: Notification Content -->
							<!-- BEGIN: Notification Toggle -->
							<Button variant="primary" on:click={notificationWithAvatarToggle}>
								Show Notification
							</Button>
							<!-- END: Notification Toggle -->
						</div>
					</Preview.Panel>
					<Preview.Panel type="source">
						<Preview.Highlight>
							{`
                <div class="text-center">
                  <!-- BEGIN: Notification Content -->
                  <Notification
                    bind:ref={notificationWithAvatar}
                    options={{
                      close: false,
                    }}
                    class="flex"
                  >
                    <div class="flex-none w-10 h-10 overflow-hidden rounded-full image-fit">
                      <img
                        alt="Midone Tailwind HTML Admin Template"
                        src={fakerData[0].photos[0]}
                      />
                    </div>
                    <div class="ml-4 sm:mr-28">
                      <div class="font-medium">
                        {fakerData[0].users[0].name}
                      </div>
                      <div class="mt-1 text-slate-500">
                        See you later! 😃😃😃
                      </div>
                    </div>
                    <a
                      data-dismiss="notification"
                      class="absolute top-0 bottom-0 right-0 flex items-center px-6 font-medium border-l border-slate-200/60 dark:border-darkmode-400 text-primary dark:text-slate-400"
                      href="#top"
                    >
                      Reply
                    </a>
                  </Notification>
                  <!-- END: Notification Content -->
                  <!-- BEGIN: Notification Toggle -->
                  <Button
                    variant="primary"
                    on:click={notificationWithAvatarToggle}
                  >
                    Show Notification
                  </Button>
                  <!-- END: Notification Toggle -->
                </div>
                `}
						</Preview.Highlight>
						<Preview.Highlight type="javascript" class="mt-5">
							{`
                  // Notification with avatar
                  const notificationWithAvatar = useRef<NotificationElement>();
                  const notificationWithAvatarToggle = () => {
                    // Show notification
                    notificationWithAvatar.current.showToast && notificationWithAvatar.current.showToast();
                  };
                  `}
						</Preview.Highlight>
					</Preview.Panel>
				</div>
			</Preview>
			<!-- END: Notification With Avatar -->
			<!-- BEGIN: Notification With Split Buttons -->
			<Preview let:toggle class="mt-5 intro-y box">
				<div
					class="flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60 dark:border-darkmode-400"
				>
					<h2 class="mr-auto text-base font-medium">Notification With Split Buttons</h2>
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
						<div class="text-center">
							<!-- BEGIN: Notification Content -->
							<Notification
								bind:ref={notificationWithSplitButtons}
								options={{
									close: false
								}}
								class="flex"
							>
								<div class="sm:mr-40">
									<div class="font-medium">Introducing new theme</div>
									<div class="mt-1 text-slate-500">Release version 2.3.3</div>
								</div>
								<div
									class="absolute top-0 bottom-0 right-0 flex flex-col border-l border-slate-200/60 dark:border-darkmode-400"
								>
									<a
										class="flex items-center justify-center flex-1 px-6 font-medium border-b text-primary dark:text-slate-400 border-slate-200/60 dark:border-darkmode-400"
										href="#top"
									>
										View Details
									</a>
									<a
										data-dismiss="notification"
										class="flex items-center justify-center flex-1 px-6 font-medium text-slate-500"
										href="#top"
									>
										Dismiss
									</a>
								</div>
							</Notification>
							<!-- END: Notification Content -->
							<!-- BEGIN: Notification Toggle -->
							<Button variant="primary" on:click={notificationWithSplitButtonsToggle}>
								Show Notification
							</Button>
							<!-- END: Notification Toggle -->
						</div>
					</Preview.Panel>
					<Preview.Panel type="source">
						<Preview.Highlight>
							{`
                <div class="text-center">
                  <!-- BEGIN: Notification Content -->
                  <Notification
                    bind:ref={notificationWithSplitButtons}
                    options={{
                      close: false,
                    }}
                    class="flex"
                  >
                    <div class="sm:mr-40">
                      <div class="font-medium">
                        Introducing new theme
                      </div>
                      <div class="mt-1 text-slate-500">
                        Release version 2.3.3
                      </div>
                    </div>
                    <div class="absolute top-0 bottom-0 right-0 flex flex-col border-l border-slate-200/60 dark:border-darkmode-400">
                      <a
                        class="flex items-center justify-center flex-1 px-6 font-medium border-b text-primary dark:text-slate-400 border-slate-200/60 dark:border-darkmode-400"
                        href="#top"
                      >
                        View Details
                      </a>
                      <a
                        data-dismiss="notification"
                        class="flex items-center justify-center flex-1 px-6 font-medium text-slate-500"
                        href="#top"
                      >
                        Dismiss
                      </a>
                    </div>
                  </Notification>
                  <!-- END: Notification Content -->
                  <!-- BEGIN: Notification Toggle -->
                  <Button
                    variant="primary"
                    on:click={notificationWithSplitButtonsToggle}
                  >
                    Show Notification
                  </Button>
                  <!-- END: Notification Toggle -->
                </div>
                `}
						</Preview.Highlight>
						<Preview.Highlight type="javascript" class="mt-5">
							{`
                  // Notification with split buttons
                  const notificationWithSplitButtons = useRef<NotificationElement>();
                  const notificationWithSplitButtonsToggle = () => {
                    // Show notification
                    notificationWithSplitButtons.current.showToast && notificationWithSplitButtons.current.showToast();
                  };
                  `}
						</Preview.Highlight>
					</Preview.Panel>
				</div>
			</Preview>
			<!-- END: Notification With Split Buttons -->
			<!-- BEGIN: Notification With Buttons Below -->
			<Preview let:toggle class="mt-5 intro-y box">
				<div
					class="flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60 dark:border-darkmode-400"
				>
					<h2 class="mr-auto text-base font-medium">Notification With Buttons Below</h2>
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
						<div class="text-center">
							<!-- BEGIN: Notification Content -->
							<Notification
								bind:ref={notificationWithButtonsBelow}
								options={{
									close: false
								}}
								class="flex"
							>
								<Lucide icon="FileText" />
								<div class="ml-4 mr-5 sm:mr-20">
									<div class="font-medium">
										{fakerData[0].users[0].name}
									</div>
									<div class="mt-1 text-slate-500">Sent you new documents.</div>
									<div class="mt-2.5">
										<Button variant="primary" as="a" class="px-2 py-1 mr-2" href="#top">
											Preview
										</Button>
										<Button variant="outline-secondary" as="a" class="px-2 py-1" href="#top">
											Download
										</Button>
									</div>
								</div>
							</Notification>
							<!-- END: Notification Content -->
							<!-- BEGIN: Notification Toggle -->
							<Button variant="primary" on:click={notificationWithButtonsBelowToggle}>
								Show Notification
							</Button>
							<!-- END: Notification Toggle -->
						</div>
					</Preview.Panel>
					<Preview.Panel type="source">
						<Preview.Highlight>
							{`
                <div class="text-center">
                  <!-- BEGIN: Notification Content -->
                  <Notification
                    bind:ref={notificationWithButtonsBelow}
                    options={{
                      close: false,
                    }}
                    class="flex"
                  >
                    <Lucide icon="FileText" />
                    <div class="ml-4 mr-5 sm:mr-20">
                      <div class="font-medium">
                        {fakerData[0].users[0].name}
                      </div>
                      <div class="mt-1 text-slate-500">
                        Sent you new documents.
                      </div>
                      <div class="mt-2.5">
                        <Button
                          variant="primary"
                          as="a"
                          class="px-2 py-1 mr-2"
                          href="#top"
                        >
                          Preview
                        </Button>
                        <Button
                          variant="outline-secondary"
                          as="a"
                          class="px-2 py-1"
                          href="#top"
                        >
                          Download
                        </Button>
                      </div>
                    </div>
                  </Notification>
                  <!-- END: Notification Content -->
                  <!-- BEGIN: Notification Toggle -->
                  <Button
                    variant="primary"
                    on:click={notificationWithButtonsBelowToggle}
                  >
                    Show Notification
                  </Button>
                  <!-- END: Notification Toggle -->
                </div>
                `}
						</Preview.Highlight>
						<Preview.Highlight type="javascript" class="mt-5">
							{`
                  // Notification with buttons below
                  const notificationWithButtonsBelow = useRef<NotificationElement>();
                  const notificationWithButtonsBelowToggle = () => {
                    // Show notification
                    notificationWithButtonsBelow.current.showToast && notificationWithButtonsBelow.current.showToast();
                  };
                  `}
						</Preview.Highlight>
					</Preview.Panel>
				</div>
			</Preview>
			<!-- END: Notification With Buttons Below -->
		</div>
	</div>
</div>
