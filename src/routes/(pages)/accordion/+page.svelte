<script lang="ts">
	import Preview from '$lib/components/Preview';
	import * as Accordion from '$lib/components/Accordion';
	import { FormSwitch } from '$lib/components/Form';
</script>

<div>
	<div class="flex items-center mt-8 intro-y">
		<h2 class="mr-auto text-lg font-medium">Accordion</h2>
	</div>
	<div class="grid grid-cols-12 gap-6 mt-5 intro-y">
		<div class="col-span-12 lg:col-span-6">
			<!-- BEGIN: Basic Accordion -->
			<Preview let:toggle class="intro-y box">
				<div
					class="flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60 dark:border-darkmode-400"
				>
					<h2 class="mr-auto text-base font-medium">Basic Accordion</h2>
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
						<Accordion.Root value="item-1">
							<Accordion.Item value="item-1">
								<Accordion.Trigger
									>OpenSSL Essentials: Working with SSL Certificates, Private Keys</Accordion.Trigger
								>
								<Accordion.Content class="leading-relaxed text-slate-600 dark:text-slate-500">
									Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
									Ipsum has been the industry's standard dummy text ever since the 1500s, when an
									unknown printer took a galley of type and scrambled it to make a type specimen
									book. It has survived not only five centuries, but also the leap into electronic
									typesetting, remaining essentially unchanged.
								</Accordion.Content>
							</Accordion.Item>
							<Accordion.Item value="item-2">
								<Accordion.Trigger
									>Understanding IP Addresses, Subnets, and CIDR Notation</Accordion.Trigger
								>
								<Accordion.Content class="leading-relaxed text-slate-600 dark:text-slate-500">
									Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
									Ipsum has been the industry's standard dummy text ever since the 1500s, when an
									unknown printer took a galley of type and scrambled it to make a type specimen
									book. It has survived not only five centuries, but also the leap into electronic
									typesetting, remaining essentially unchanged.
								</Accordion.Content>
							</Accordion.Item>
							<Accordion.Item value="item-3">
								<Accordion.Trigger>How To Troubleshoot Common HTTP Error Codes</Accordion.Trigger>
								<Accordion.Content class="leading-relaxed text-slate-600 dark:text-slate-500">
									Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
									Ipsum has been the industry's standard dummy text ever since the 1500s, when an
									unknown printer took a galley of type and scrambled it to make a type specimen
									book. It has survived not only five centuries, but also the leap into electronic
									typesetting, remaining essentially unchanged.
								</Accordion.Content>
							</Accordion.Item>
							<Accordion.Item value="item-4">
								<Accordion.Trigger>An Introduction to Securing your Linux VPS</Accordion.Trigger>
								<Accordion.Content class="leading-relaxed text-slate-600 dark:text-slate-500">
									Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
									Ipsum has been the industry's standard dummy text ever since the 1500s, when an
									unknown printer took a galley of type and scrambled it to make a type specimen
									book. It has survived not only five centuries, but also the leap into electronic
									typesetting, remaining essentially unchanged.
								</Accordion.Content>
							</Accordion.Item>
						</Accordion.Root>
					</Preview.Panel>
					<Preview.Panel type="source">
						<Preview.Highlight>
							{`
                <Accordion.Root value="item-1">
					<Accordion.Item value="item-1">
						<Accordion.Trigger
							>OpenSSL Essentials: Working with SSL Certificates, Private Keys</Accordion.Trigger
						>
						<Accordion.Content class="leading-relaxed text-slate-600 dark:text-slate-500">
							Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
							has been the industry's standard dummy text ever since the 1500s, when an unknown
							printer took a galley of type and scrambled it to make a type specimen book. It has
							survived not only five centuries, but also the leap into electronic typesetting,
							remaining essentially unchanged.
						</Accordion.Content>
					</Accordion.Item>
					<Accordion.Item value="item-2">
						<Accordion.Trigger
							>Understanding IP Addresses, Subnets, and CIDR Notation</Accordion.Trigger
						>
						<Accordion.Content class="leading-relaxed text-slate-600 dark:text-slate-500">
							Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
							has been the industry's standard dummy text ever since the 1500s, when an unknown
							printer took a galley of type and scrambled it to make a type specimen book. It has
							survived not only five centuries, but also the leap into electronic typesetting,
							remaining essentially unchanged.
						</Accordion.Content>
					</Accordion.Item>
					<Accordion.Item value="item-3">
						<Accordion.Trigger>How To Troubleshoot Common HTTP Error Codes</Accordion.Trigger>
						<Accordion.Content class="leading-relaxed text-slate-600 dark:text-slate-500">
							Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
							has been the industry's standard dummy text ever since the 1500s, when an unknown
							printer took a galley of type and scrambled it to make a type specimen book. It has
							survived not only five centuries, but also the leap into electronic typesetting,
							remaining essentially unchanged.
						</Accordion.Content>
					</Accordion.Item>
					<Accordion.Item value="item-4">
						<Accordion.Trigger>An Introduction to Securing your Linux VPS</Accordion.Trigger>
						<Accordion.Content class="leading-relaxed text-slate-600 dark:text-slate-500">
							Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
							has been the industry's standard dummy text ever since the 1500s, when an unknown
							printer took a galley of type and scrambled it to make a type specimen book. It has
							survived not only five centuries, but also the leap into electronic typesetting,
							remaining essentially unchanged.
						</Accordion.Content>
					</Accordion.Item>
				</Accordion.Root>
                `}
						</Preview.Highlight>
					</Preview.Panel>
				</div>
			</Preview>
			<!-- END: Basic Accordion -->
			<!-- BEGIN: Boxed Accordion -->
			<Preview let:toggle class="mt-5 intro-y box">
				<div
					class="flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60 dark:border-darkmode-400"
				>
					<h2 class="mr-auto text-base font-medium">Boxed Accordion</h2>
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
						<Accordion.Root value="item-1" variant="boxed">
							<Accordion.Item value="item-1">
								<Accordion.Trigger
									>OpenSSL Essentials: Working with SSL Certificates, Private Keys</Accordion.Trigger
								>
								<Accordion.Content class="leading-relaxed text-slate-600 dark:text-slate-500">
									Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
									Ipsum has been the industry's standard dummy text ever since the 1500s, when an
									unknown printer took a galley of type and scrambled it to make a type specimen
									book. It has survived not only five centuries, but also the leap into electronic
									typesetting, remaining essentially unchanged.
								</Accordion.Content>
							</Accordion.Item>
							<Accordion.Item value="item-2">
								<Accordion.Trigger
									>Understanding IP Addresses, Subnets, and CIDR Notation</Accordion.Trigger
								>
								<Accordion.Content class="leading-relaxed text-slate-600 dark:text-slate-500">
									Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
									Ipsum has been the industry's standard dummy text ever since the 1500s, when an
									unknown printer took a galley of type and scrambled it to make a type specimen
									book. It has survived not only five centuries, but also the leap into electronic
									typesetting, remaining essentially unchanged.
								</Accordion.Content>
							</Accordion.Item>
							<Accordion.Item value="item-3">
								<Accordion.Trigger>How To Troubleshoot Common HTTP Error Codes</Accordion.Trigger>
								<Accordion.Content class="leading-relaxed text-slate-600 dark:text-slate-500">
									Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
									Ipsum has been the industry's standard dummy text ever since the 1500s, when an
									unknown printer took a galley of type and scrambled it to make a type specimen
									book. It has survived not only five centuries, but also the leap into electronic
									typesetting, remaining essentially unchanged.
								</Accordion.Content>
							</Accordion.Item>
							<Accordion.Item value="item-4">
								<Accordion.Trigger>An Introduction to Securing your Linux VPS</Accordion.Trigger>
								<Accordion.Content class="leading-relaxed text-slate-600 dark:text-slate-500">
									Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
									Ipsum has been the industry's standard dummy text ever since the 1500s, when an
									unknown printer took a galley of type and scrambled it to make a type specimen
									book. It has survived not only five centuries, but also the leap into electronic
									typesetting, remaining essentially unchanged.
								</Accordion.Content>
							</Accordion.Item>
						</Accordion.Root>
					</Preview.Panel>
					<Preview.Panel type="source">
						<Preview.Highlight>
							{`
                <Accordion.Root value="item-1" variant="boxed">
					<Accordion.Item value="item-1">
						<Accordion.Trigger
							>OpenSSL Essentials: Working with SSL Certificates, Private Keys</Accordion.Trigger
						>
						<Accordion.Content class="leading-relaxed text-slate-600 dark:text-slate-500">
							Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
							has been the industry's standard dummy text ever since the 1500s, when an unknown
							printer took a galley of type and scrambled it to make a type specimen book. It has
							survived not only five centuries, but also the leap into electronic typesetting,
							remaining essentially unchanged.
						</Accordion.Content>
					</Accordion.Item>
					<Accordion.Item value="item-2">
						<Accordion.Trigger
							>Understanding IP Addresses, Subnets, and CIDR Notation</Accordion.Trigger
						>
						<Accordion.Content class="leading-relaxed text-slate-600 dark:text-slate-500">
							Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
							has been the industry's standard dummy text ever since the 1500s, when an unknown
							printer took a galley of type and scrambled it to make a type specimen book. It has
							survived not only five centuries, but also the leap into electronic typesetting,
							remaining essentially unchanged.
						</Accordion.Content>
					</Accordion.Item>
					<Accordion.Item value="item-3">
						<Accordion.Trigger>How To Troubleshoot Common HTTP Error Codes</Accordion.Trigger>
						<Accordion.Content class="leading-relaxed text-slate-600 dark:text-slate-500">
							Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
							has been the industry's standard dummy text ever since the 1500s, when an unknown
							printer took a galley of type and scrambled it to make a type specimen book. It has
							survived not only five centuries, but also the leap into electronic typesetting,
							remaining essentially unchanged.
						</Accordion.Content>
					</Accordion.Item>
					<Accordion.Item value="item-4">
						<Accordion.Trigger>An Introduction to Securing your Linux VPS</Accordion.Trigger>
						<Accordion.Content class="leading-relaxed text-slate-600 dark:text-slate-500">
							Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
							has been the industry's standard dummy text ever since the 1500s, when an unknown
							printer took a galley of type and scrambled it to make a type specimen book. It has
							survived not only five centuries, but also the leap into electronic typesetting,
							remaining essentially unchanged.
						</Accordion.Content>
					</Accordion.Item>
				</Accordion.Root>
                `}
						</Preview.Highlight>
					</Preview.Panel>
				</div>
			</Preview>
			<!-- END: Boxed Accordion -->
		</div>
	</div>
</div>
