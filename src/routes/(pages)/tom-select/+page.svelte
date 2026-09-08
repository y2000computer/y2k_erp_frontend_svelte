<script lang="ts">
	import Preview from '$lib/components/Preview';
	import TomSelect from '$lib/components/TomSelect';
	import { FormSwitch } from '$lib/components/Form';

	let select = '1';
	let selectMultiple = ['1', '3'];
	let selectHeader = ['2', '3', '5'];
</script>

<div>
	<div class="flex items-center mt-8 intro-y">
		<h2 class="mr-auto text-lg font-medium">Tom Select</h2>
	</div>
	<div class="grid grid-cols-12 gap-6 mt-5">
		<div class="col-span-12 intro-y lg:col-span-6">
			<!-- BEGIN: Basic Select -->
			<Preview let:toggle class="intro-y box">
				<div
					class="flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60 dark:border-darkmode-400"
				>
					<h2 class="mr-auto text-base font-medium">Basic Select</h2>
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
						<!-- BEGIN: Basic Select -->
						<div>
							<label for="">Basic</label>
							<div class="mt-2">
								<TomSelect
									bind:value={select}
									options={{
										placeholder: 'Select your favorite actors'
									}}
									class="w-full"
								>
									<option value="1">Leonardo DiCaprio</option>
									<option value="2">Johnny Deep</option>
									<option value="3">Robert Downey, Jr</option>
									<option value="4">Samuel L. Jackson</option>
									<option value="5">Morgan Freeman</option>
								</TomSelect>
							</div>
						</div>
						<!-- END: Basic Select -->
						<!-- BEGIN: Nested Select -->
						<div class="mt-3">
							<label for="">Nested</label>
							<div class="mt-2">
								<TomSelect
									bind:value={select}
									options={{
										placeholder: 'Select your favorite actors'
									}}
									class="w-full"
								>
									<optgroup label="American Actors">
										<option value="1">Leonardo DiCaprio</option>
										<option value="2">Johnny Deep</option>
										<option value="3">Robert Downey, Jr</option>
										<option value="4">Samuel L. Jackson</option>
										<option value="5">Morgan Freeman</option>
									</optgroup>
									<optgroup label="American Actresses">
										<option value="6">Scarlett Johansson</option>
										<option value="7">Jessica Alba</option>
										<option value="8">Jennifer Lawrence</option>
										<option value="9">Emma Stone</option>
										<option value="10">Angelina Jolie</option>
									</optgroup>
								</TomSelect>
							</div>
						</div>
						<!-- END: Nested Select -->
					</Preview.Panel>
					<Preview.Panel type="source">
						<Preview.Highlight>
							{`
                <!-- BEGIN: Basic Select -->
                <div>
                  <label for="">Basic</label>
                  <div class="mt-2">
                    <TomSelect
                      bind:value={select}
                      options={{
                        placeholder: "Select your favorite actors",
                      }}
                      class="w-full"
                    >
                      <option value="1">Leonardo DiCaprio</option>
                      <option value="2">Johnny Deep</option>
                      <option value="3">Robert Downey, Jr</option>
                      <option value="4">Samuel L. Jackson</option>
                      <option value="5">Morgan Freeman</option>
                    </TomSelect>
                  </div>
                </div>
                <!-- END: Basic Select -->
                <!-- BEGIN: Nested Select -->
                <div class="mt-3">
                  <label for="">Nested</label>
                  <div class="mt-2">
                    <TomSelect
                      bind:value={select}
                      options={{
                        placeholder: "Select your favorite actors",
                      }}
                      class="w-full"
                    >
                      <optgroup label="American Actors">
                        <option value="1">Leonardo DiCaprio</option>
                        <option value="2">Johnny Deep</option>
                        <option value="3">Robert Downey, Jr</option>
                        <option value="4">Samuel L. Jackson</option>
                        <option value="5">Morgan Freeman</option>
                      </optgroup>
                      <optgroup label="American Actresses">
                        <option value="6">Scarlett Johansson</option>
                        <option value="7">Jessica Alba</option>
                        <option value="8">Jennifer Lawrence</option>
                        <option value="9">Emma Stone</option>
                        <option value="10">Angelina Jolie</option>
                      </optgroup>
                    </TomSelect>
                  </div>
                </div>
                <!-- END: Nested Select -->
                `}
						</Preview.Highlight>
					</Preview.Panel>
				</div>
			</Preview>
			<!-- END: Basic Select -->
			<!-- BEGIN: Multiple Select -->
			<Preview let:toggle class="mt-5 intro-y box">
				<div
					class="flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60 dark:border-darkmode-400"
				>
					<h2 class="mr-auto text-base font-medium">Multiple Select</h2>
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
						<TomSelect
							bind:value={selectMultiple}
							options={{
								placeholder: 'Select your favorite actors'
							}}
							class="w-full"
							multiple
						>
							<option value="1">Leonardo DiCaprio</option>
							<option value="2">Johnny Deep</option>
							<option value="3">Robert Downey, Jr</option>
							<option value="4">Samuel L. Jackson</option>
							<option value="5">Morgan Freeman</option>
						</TomSelect>
					</Preview.Panel>
					<Preview.Panel type="source">
						<Preview.Highlight>
							{`
                <TomSelect
                  bind:value={selectMultiple}
                  options={{
                    placeholder: "Select your favorite actors",
                  }}
                  class="w-full"
                  multiple
                >
                  <option value="1">Leonardo DiCaprio</option>
                  <option value="2">Johnny Deep</option>
                  <option value="3">Robert Downey, Jr</option>
                  <option value="4">Samuel L. Jackson</option>
                  <option value="5">Morgan Freeman</option>
                </TomSelect>
                `}
						</Preview.Highlight>
					</Preview.Panel>
				</div>
			</Preview>
			<!-- END: Multiple Select -->
			<!-- BEGIN: Header -->
			<Preview let:toggle class="mt-5 intro-y box">
				<div
					class="flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60 dark:border-darkmode-400"
				>
					<h2 class="mr-auto text-base font-medium">Header</h2>
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
						<TomSelect
							bind:value={selectHeader}
							options={{
								placeholder: 'Select your favorite actors',
								plugins: {
									dropdown_header: {
										title: 'Actors'
									}
								}
							}}
							class="w-full"
							multiple
						>
							<option value="1">Leonardo DiCaprio</option>
							<option value="2">Johnny Deep</option>
							<option value="3">Robert Downey, Jr</option>
							<option value="4">Samuel L. Jackson</option>
							<option value="5">Morgan Freeman</option>
						</TomSelect>
					</Preview.Panel>
					<Preview.Panel type="source">
						<Preview.Highlight>
							{`
                <TomSelect
                  bind:value={selectHeader}
                  options={{
                    placeholder: "Select your favorite actors",
                    plugins: {
                      dropdown_header: {
                        title: "Actors",
                      },
                    },
                  }}
                  class="w-full"
                  multiple
                >
                  <option value="1">Leonardo DiCaprio</option>
                  <option value="2">Johnny Deep</option>
                  <option value="3">Robert Downey, Jr</option>
                  <option value="4">Samuel L. Jackson</option>
                  <option value="5">Morgan Freeman</option>
                </TomSelect>
                `}
						</Preview.Highlight>
					</Preview.Panel>
				</div>
			</Preview>
			<!-- END: Header -->
		</div>
		<div class="col-span-12 intro-y lg:col-span-6">
			<!-- BEGIN: Input Group -->
			<Preview let:toggle class="intro-y box">
				<div
					class="flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60 dark:border-darkmode-400"
				>
					<h2 class="mr-auto text-base font-medium">Input Group</h2>
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
						<div class="flex">
							<div
								class="z-30 flex items-center justify-center w-10 -mr-1 border rounded-l bg-slate-100 text-slate-600 dark:bg-darkmode-700 dark:border-darkmode-800 dark:text-slate-400"
							>
								@
							</div>
							<TomSelect bind:value={select} class="w-full">
								<option value="1">Leonardo DiCaprio</option>
								<option value="2">Johnny Deep</option>
								<option value="3">Robert Downey, Jr</option>
								<option value="4">Samuel L. Jackson</option>
								<option value="5">Morgan Freeman</option>
							</TomSelect>
						</div>
					</Preview.Panel>
					<Preview.Panel type="source">
						<Preview.Highlight>
							{`
                <div class="flex">
                  <div class="flex">
                    <div
                      class="z-30 flex items-center justify-center w-10 -mr-1 border rounded-l bg-slate-100 text-slate-600 dark:bg-darkmode-700 dark:border-darkmode-800 dark:text-slate-400"
                    >
                      @
                    </div>
                    <TomSelect
                      bind:value={select}
                      class="w-full"
                    >
                      <option value="1">Leonardo DiCaprio</option>
                      <option value="2">Johnny Deep</option>
                      <option value="3">Robert Downey, Jr</option>
                      <option value="4">Samuel L. Jackson</option>
                      <option value="5">Morgan Freeman</option>
                    </TomSelect>
                  </div>
                </div>
                `}
						</Preview.Highlight>
					</Preview.Panel>
				</div>
			</Preview>
			<!-- END: Input Group -->
			<!-- BEGIN: Disabled -->
			<Preview let:toggle class="mt-5 intro-y box">
				<div
					class="flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60 dark:border-darkmode-400"
				>
					<h2 class="mr-auto text-base font-medium">Disabled</h2>
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
						<TomSelect bind:value={select} class="w-full" disabled>
							<option value="1">Leonardo DiCaprio</option>
							<option value="2">Johnny Deep</option>
							<option value="3">Robert Downey, Jr</option>
							<option value="4">Samuel L. Jackson</option>
							<option value="5">Morgan Freeman</option>
						</TomSelect>
					</Preview.Panel>
					<Preview.Panel type="source">
						<Preview.Highlight>
							{`
                <TomSelect
                  bind:value={select}
                  class="w-full"
                  disabled
                >
                  <option value="1">Leonardo DiCaprio</option>
                  <option value="2">Johnny Deep</option>
                  <option value="3">Robert Downey, Jr</option>
                  <option value="4">Samuel L. Jackson</option>
                  <option value="5">Morgan Freeman</option>
                </TomSelect>
                `}
						</Preview.Highlight>
					</Preview.Panel>
				</div>
			</Preview>
			<!-- END: Disabled -->
			<!-- BEGIN: Disabled Option -->
			<Preview let:toggle class="mt-5 intro-y box">
				<div
					class="flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60 dark:border-darkmode-400"
				>
					<h2 class="mr-auto text-base font-medium">Disabled Option</h2>
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
						<TomSelect bind:value={select} class="w-full">
							<option value="1" disabled> Leonardo DiCaprio </option>
							<option value="2">Johnny Deep</option>
							<option value="3">Robert Downey, Jr</option>
							<option value="4" disabled> Samuel L. Jackson </option>
							<option value="5">Morgan Freeman</option>
						</TomSelect>
					</Preview.Panel>
					<Preview.Panel type="source">
						<Preview.Highlight>
							{`
                <TomSelect
                  bind:value={select}
                  class="w-full"
                >
                  <option value="1" disabled>Leonardo DiCaprio</option>
                  <option value="2">Johnny Deep</option>
                  <option value="3">Robert Downey, Jr</option>
                  <option value="4" disabled>Samuel L. Jackson</option>
                  <option value="5">Morgan Freeman</option>
                </TomSelect>
                `}
						</Preview.Highlight>
					</Preview.Panel>
				</div>
			</Preview>
			<!-- END: Disabled Option -->
		</div>
	</div>
</div>
