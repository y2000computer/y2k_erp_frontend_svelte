<script lang="ts">
	import Preview from '$lib/components/Preview';
	import * as Tabs from '$lib/components/Tabs';
	import { FormSwitch } from '$lib/components/Form';
</script>

<div>
	<div class="flex items-center mt-8 intro-y">
		<h2 class="mr-auto text-lg font-medium">Tab</h2>
	</div>
	<div class="grid grid-cols-12 gap-6 mt-5 intro-y">
		<div class="col-span-12 lg:col-span-6">
			<!-- BEGIN: Basic Tab -->
			<Preview let:toggle class="intro-y box">
				<div
					class="flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60 dark:border-darkmode-400"
				>
					<h2 class="mr-auto text-base font-medium">Basic Tab</h2>
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
						<Tabs.Root value="active">
							<Tabs.List variant="tabs">
								<Tabs.Trigger value="active" class="w-full py-2">Example Tab 1</Tabs.Trigger>
								<Tabs.Trigger value="inactive" class="w-full py-2">Example Tab 2</Tabs.Trigger>
							</Tabs.List>
							<div class="border-b border-l border-r">
								<Tabs.Content value="active" class="p-5 leading-relaxed">
									Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
									Ipsum has been the industry's standard dummy text ever since the 1500s, when an
									unknown printer took a galley of type and scrambled it to make a type specimen
									book. It has survived not only five centuries, but also the leap into electronic
									typesetting, remaining essentially unchanged. It was popularised in the 1960s with
									the release of Letraset sheets containing Lorem Ipsum passages, and more recently
									with desktop publishing software like Aldus PageMaker including versions of Lorem
									Ipsum.
								</Tabs.Content>
								<Tabs.Content value="inactive" class="p-5 leading-relaxed">
									It is a long established fact that a reader will be distracted by the readable
									content of a page when looking at its layout. The point of using Lorem Ipsum is
									that it has a more-or-less normal distribution of letters, as opposed to using
									'Content here, content here', making it look like readable English. Many desktop
									publishing packages and web page editors now use Lorem Ipsum as their default
									model text, and a search for 'lorem ipsum' will uncover many web sites still in
									their infancy. Various versions have evolved over the years, sometimes by
									accident, sometimes on purpose (injected humour and the like).
								</Tabs.Content>
							</div>
						</Tabs.Root>
					</Preview.Panel>
					<Preview.Panel type="source">
						<Preview.Highlight>
							{`
                  <Tabs.Root value="active">
						<Tabs.List variant="tabs">
							<Tabs.Trigger value="active" class="w-full py-2">Example Tab 1</Tabs.Trigger>
							<Tabs.Trigger value="inactive" class="w-full py-2">Example Tab 2</Tabs.Trigger>
						</Tabs.List>
						<div class="border-b border-l border-r">
							<Tabs.Content value="active" class="p-5 leading-relaxed">
								Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
								Ipsum has been the industry's standard dummy text ever since the 1500s, when an
								unknown printer took a galley of type and scrambled it to make a type specimen
								book. It has survived not only five centuries, but also the leap into electronic
								typesetting, remaining essentially unchanged. It was popularised in the 1960s with
								the release of Letraset sheets containing Lorem Ipsum passages, and more recently
								with desktop publishing software like Aldus PageMaker including versions of Lorem
								Ipsum.
							</Tabs.Content>
							<Tabs.Content value="inactive" class="p-5 leading-relaxed">
								It is a long established fact that a reader will be distracted by the readable
								content of a page when looking at its layout. The point of using Lorem Ipsum is
								that it has a more-or-less normal distribution of letters, as opposed to using
								'Content here, content here', making it look like readable English. Many desktop
								publishing packages and web page editors now use Lorem Ipsum as their default
								model text, and a search for 'lorem ipsum' will uncover many web sites still in
								their infancy. Various versions have evolved over the years, sometimes by
								accident, sometimes on purpose (injected humour and the like).
							</Tabs.Content>
						</div>
					</Tabs.Root>
                  `}
						</Preview.Highlight>
					</Preview.Panel>
				</div>
			</Preview>
			<!-- END: Basic Tab -->
			<!-- BEGIN: Boxed Tab -->
			<Preview let:toggle class="mt-5 intro-y box">
				<div
					class="flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60 dark:border-darkmode-400"
				>
					<h2 class="mr-auto text-base font-medium">Boxed Tab</h2>
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
						<Tabs.Root value="active">
							<Tabs.List variant="boxed-tabs">
								<Tabs.Trigger value="active" class="w-full py-2">Example Tab 1</Tabs.Trigger>
								<Tabs.Trigger value="inactive" class="w-full py-2">Example Tab 2</Tabs.Trigger>
							</Tabs.List>
							<div class="mt-5">
								<Tabs.Content value="active" class="leading-relaxed">
									Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
									Ipsum has been the industry's standard dummy text ever since the 1500s, when an
									unknown printer took a galley of type and scrambled it to make a type specimen
									book. It has survived not only five centuries, but also the leap into electronic
									typesetting, remaining essentially unchanged. It was popularised in the 1960s with
									the release of Letraset sheets containing Lorem Ipsum passages, and more recently
									with desktop publishing software like Aldus PageMaker including versions of Lorem
									Ipsum.
								</Tabs.Content>
								<Tabs.Content value="inactive" class="leading-relaxed">
									It is a long established fact that a reader will be distracted by the readable
									content of a page when looking at its layout. The point of using Lorem Ipsum is
									that it has a more-or-less normal distribution of letters, as opposed to using
									'Content here, content here', making it look like readable English. Many desktop
									publishing packages and web page editors now use Lorem Ipsum as their default
									model text, and a search for 'lorem ipsum' will uncover many web sites still in
									their infancy. Various versions have evolved over the years, sometimes by
									accident, sometimes on purpose (injected humour and the like).
								</Tabs.Content>
							</div>
						</Tabs.Root>
					</Preview.Panel>
					<Preview.Panel type="source">
						<Preview.Highlight>
							{`
                  <Tabs.Root value="active">
							<Tabs.List variant="boxed-tabs">
								<Tabs.Trigger value="active" class="w-full py-2">Example Tab 1</Tabs.Trigger>
								<Tabs.Trigger value="inactive" class="w-full py-2">Example Tab 2</Tabs.Trigger>
							</Tabs.List>
							<div class="mt-5">
								<Tabs.Content value="active" class="leading-relaxed">
									Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
									Ipsum has been the industry's standard dummy text ever since the 1500s, when an
									unknown printer took a galley of type and scrambled it to make a type specimen
									book. It has survived not only five centuries, but also the leap into electronic
									typesetting, remaining essentially unchanged. It was popularised in the 1960s with
									the release of Letraset sheets containing Lorem Ipsum passages, and more recently
									with desktop publishing software like Aldus PageMaker including versions of Lorem
									Ipsum.
								</Tabs.Content>
								<Tabs.Content value="inactive" class="leading-relaxed">
									It is a long established fact that a reader will be distracted by the readable
									content of a page when looking at its layout. The point of using Lorem Ipsum is
									that it has a more-or-less normal distribution of letters, as opposed to using
									'Content here, content here', making it look like readable English. Many desktop
									publishing packages and web page editors now use Lorem Ipsum as their default
									model text, and a search for 'lorem ipsum' will uncover many web sites still in
									their infancy. Various versions have evolved over the years, sometimes by
									accident, sometimes on purpose (injected humour and the like).
								</Tabs.Content>
							</div>
						</Tabs.Root>
                  `}
						</Preview.Highlight>
					</Preview.Panel>
				</div>
			</Preview>
			<!-- END: Boxed Tab -->
			<!-- BEGIN: Link Tab -->
			<Preview let:toggle class="mt-5 intro-y box">
				<div
					class="flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60 dark:border-darkmode-400"
				>
					<h2 class="mr-auto text-base font-medium">Link Tab</h2>
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
						<Tabs.Root value="active">
							<Tabs.List variant="link-tabs">
								<Tabs.Trigger value="active" class="w-full py-2">Example Tab 1</Tabs.Trigger>
								<Tabs.Trigger value="inactive" class="w-full py-2">Example Tab 2</Tabs.Trigger>
							</Tabs.List>
							<div class="mt-5">
								<Tabs.Content value="active" class="leading-relaxed">
									Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
									Ipsum has been the industry's standard dummy text ever since the 1500s, when an
									unknown printer took a galley of type and scrambled it to make a type specimen
									book. It has survived not only five centuries, but also the leap into electronic
									typesetting, remaining essentially unchanged. It was popularised in the 1960s with
									the release of Letraset sheets containing Lorem Ipsum passages, and more recently
									with desktop publishing software like Aldus PageMaker including versions of Lorem
									Ipsum.
								</Tabs.Content>
								<Tabs.Content value="inactive" class="leading-relaxed">
									It is a long established fact that a reader will be distracted by the readable
									content of a page when looking at its layout. The point of using Lorem Ipsum is
									that it has a more-or-less normal distribution of letters, as opposed to using
									'Content here, content here', making it look like readable English. Many desktop
									publishing packages and web page editors now use Lorem Ipsum as their default
									model text, and a search for 'lorem ipsum' will uncover many web sites still in
									their infancy. Various versions have evolved over the years, sometimes by
									accident, sometimes on purpose (injected humour and the like).
								</Tabs.Content>
							</div>
						</Tabs.Root>
					</Preview.Panel>
					<Preview.Panel type="source">
						<Preview.Highlight>
							{`
                  <Tabs.Root value="active">
							<Tabs.List variant="link-tabs">
								<Tabs.Trigger value="active" class="w-full py-2">Example Tab 1</Tabs.Trigger>
								<Tabs.Trigger value="inactive" class="w-full py-2">Example Tab 2</Tabs.Trigger>
							</Tabs.List>
							<div class="mt-5">
								<Tabs.Content value="active" class="leading-relaxed">
									Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
									Ipsum has been the industry's standard dummy text ever since the 1500s, when an
									unknown printer took a galley of type and scrambled it to make a type specimen
									book. It has survived not only five centuries, but also the leap into electronic
									typesetting, remaining essentially unchanged. It was popularised in the 1960s with
									the release of Letraset sheets containing Lorem Ipsum passages, and more recently
									with desktop publishing software like Aldus PageMaker including versions of Lorem
									Ipsum.
								</Tabs.Content>
								<Tabs.Content value="inactive" class="leading-relaxed">
									It is a long established fact that a reader will be distracted by the readable
									content of a page when looking at its layout. The point of using Lorem Ipsum is
									that it has a more-or-less normal distribution of letters, as opposed to using
									'Content here, content here', making it look like readable English. Many desktop
									publishing packages and web page editors now use Lorem Ipsum as their default
									model text, and a search for 'lorem ipsum' will uncover many web sites still in
									their infancy. Various versions have evolved over the years, sometimes by
									accident, sometimes on purpose (injected humour and the like).
								</Tabs.Content>
							</div>
						</Tabs.Root>
                  `}
						</Preview.Highlight>
					</Preview.Panel>
				</div>
			</Preview>
			<!-- END: Basic Tab -->
		</div>
	</div>
</div>
