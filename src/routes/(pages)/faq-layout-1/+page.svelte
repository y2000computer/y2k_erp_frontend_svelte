<script lang="ts">
	import _ from 'lodash';
	import Lucide from '$lib/components/Lucide';
	import * as Accordion from '$lib/components/Accordion';
</script>

<div>
	<div class="flex items-center mt-8 intro-y">
		<h2 class="mr-auto text-lg font-medium">FAQ Layout</h2>
	</div>
	<div class="grid grid-cols-12 gap-6 mt-5">
		<!-- BEGIN: FAQ Menu -->
		<a
			href="#top"
			class="col-span-12 py-10 border-2 intro-y lg:col-span-4 box border-primary dark:border-primary"
		>
			<Lucide icon="Shield" class="block w-12 h-12 mx-auto text-primary" />
			<div class="mt-3 text-base font-medium text-center">Single Application</div>
			<div class="w-3/4 mx-auto mt-2 text-center text-slate-500">
				Lorem Ipsum is simply dummy text of the printing
			</div>
		</a>
		<a href="#top" class="col-span-12 py-10 intro-y lg:col-span-4 box">
			<Lucide icon="Send" class="block w-12 h-12 mx-auto text-primary" />
			<div class="mt-3 text-base font-medium text-center">Multi Application</div>
			<div class="w-3/4 mx-auto mt-2 text-center text-slate-500">
				Lorem Ipsum is simply dummy text of the printing
			</div>
		</a>
		<a href="#top" class="col-span-12 py-10 intro-y lg:col-span-4 box">
			<Lucide icon="TrendingUp" class="block w-12 h-12 mx-auto text-primary" />
			<div class="mt-3 text-base font-medium text-center">Custom License</div>
			<div class="w-3/4 mx-auto mt-2 text-center text-slate-500">
				Lorem Ipsum is simply dummy text of the printing
			</div>
		</a>
		<!-- END: FAQ Menu -->
		<!-- BEGIN: FAQ Content -->
		<div class="col-span-12 intro-y lg:col-span-6">
			<div class="box">
				<div class="flex items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
					<h2 class="mr-auto text-base font-medium">Working with Dropplets</h2>
				</div>
				<Accordion.Root value="item-1" class="p-5">
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
			</div>
			<div class="mt-6 box">
				<div class="flex items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
					<h2 class="mr-auto text-base font-medium">Working with Dropplets</h2>
				</div>
				<Accordion.Root value="item-1" class="p-5">
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
			</div>
		</div>
		<div class="col-span-12 intro-y lg:col-span-6">
			<div class="box">
				<div class="flex items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
					<h2 class="mr-auto text-base font-medium">Working with Dropplets</h2>
				</div>
				<Accordion.Root value="item-1" class="p-5">
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
			</div>
			<div class="mt-6 box">
				<div class="flex items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
					<h2 class="mr-auto text-base font-medium">Working with Dropplets</h2>
				</div>
				<Accordion.Root value="item-1" class="p-5">
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
			</div>
		</div>
		<!-- END: FAQ Content -->
	</div>
</div>
