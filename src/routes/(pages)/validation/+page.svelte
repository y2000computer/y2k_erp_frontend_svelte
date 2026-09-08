<script lang="ts">
	import Preview from '$lib/components/Preview';
	import { FormSwitch, FormLabel, FormInput, FormTextarea } from '$lib/components/Form';
	import Button from '$lib/components/Button';
	import Notification from '$lib/components/Notification';
	import Lucide from '$lib/components/Lucide';
	import Toastify from 'toastify-js';
	import clsx from 'clsx';
	import { form, field } from 'svelte-forms';
	import * as validators from 'svelte-forms/validators';

	const errorMessage = {
		required: (field: string) => `${field} is a required field`,
		min: (field: string, min: number) => `${field} must be at least ${min} characters`,
		email: (field: string) => `${field} must be a valid email`,
		max: (field: string, max: number) => `${field} must be less than or equal to ${max}`,
		url: (field: string) => `${field} must be a valid URL`
	};

	const name = field('name', '', [validators.required(), validators.min(2)]);
	const email = field('email', '', [validators.required(), validators.email()]);
	const password = field('password', '', [validators.required(), validators.min(6)]);
	const age = field('age', '', [validators.required(), validators.max(3)]);
	const url = field('url', '', [validators.url()]);
	const comment = field('comment', '', [validators.required(), validators.min(10)]);

	const validationForm = form(name, email, password, age, url, comment);

	const onSubmit = async (event: SubmitEvent) => {
		event.preventDefault();
		await validationForm.validate();
		if (!$validationForm.valid) {
			const failedEl = document
				.querySelectorAll('#failed-notification-content')[0]
				.cloneNode(true) as HTMLElement;
			failedEl.classList.remove('hidden');
			Toastify({
				node: failedEl,
				duration: 3000,
				newWindow: true,
				close: true,
				gravity: 'top',
				position: 'right',
				stopOnFocus: true
			}).showToast();
		} else {
			const successEl = document
				.querySelectorAll('#success-notification-content')[0]
				.cloneNode(true) as HTMLElement;
			successEl.classList.remove('hidden');
			Toastify({
				node: successEl,
				duration: 3000,
				newWindow: true,
				close: true,
				gravity: 'top',
				position: 'right',
				stopOnFocus: true
			}).showToast();
		}
	};
</script>

<div class="flex items-center mt-8 intro-y">
	<h2 class="mr-auto text-lg font-medium">Form Validation</h2>
</div>
<div class="grid grid-cols-12 gap-6 mt-5">
	<div class="col-span-12 intro-y lg:col-span-6">
		<!-- BEGIN: Form Validation -->
		<Preview let:toggle class="intro-y box">
			<div
				class="flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60 dark:border-darkmode-400"
			>
				<h2 class="mr-auto text-base font-medium">Implementation</h2>
				<FormSwitch class="w-full mt-3 sm:w-auto sm:ml-auto sm:mt-0">
					<FormSwitch.Label htmlFor="show-example-1">Show example code</FormSwitch.Label>
					<FormSwitch.Input
						id="show-example-1"
						onClick={toggle}
						class="ml-3 mr-0"
						type="checkbox"
					/>
				</FormSwitch>
			</div>
			<div class="p-5">
				<Preview.Panel>
					<!-- BEGIN: Validation Form -->
					<form class="validate-form" on:submit={onSubmit}>
						<div class="input-form">
							<FormLabel htmlFor="validation-form-1" class="flex flex-col w-full sm:flex-row">
								Name
								<span class="mt-1 text-xs sm:ml-auto sm:mt-0 text-slate-500">
									Required, at least 2 characters
								</span>
							</FormLabel>
							<FormInput
								bind:value={$name.value}
								id="validation-form-1"
								type="text"
								name="name"
								placeholder="John Legend"
								class={clsx({
									'border-danger': $validationForm.errors.filter(
										(err) => err.split('.')[0] == 'name'
									).length
								})}
							/>
							{#if $validationForm.hasError('name.required')}
								<div class="mt-2 text-danger">
									{errorMessage['required']('Name')}
								</div>
							{/if}
							{#if $validationForm.hasError('name.min')}
								<div class="mt-2 text-danger">
									{errorMessage['min']('Name', 2)}
								</div>
							{/if}
						</div>
						<div class="mt-3 input-form">
							<FormLabel htmlFor="validation-form-2" class="flex flex-col w-full sm:flex-row">
								Email
								<span class="mt-1 text-xs sm:ml-auto sm:mt-0 text-slate-500">
									Required, email address format
								</span>
							</FormLabel>
							<FormInput
								bind:value={$email.value}
								id="validation-form-2"
								type="email"
								name="email"
								class={clsx({
									'border-danger': $validationForm.errors.filter(
										(err) => err.split('.')[0] == 'email'
									).length
								})}
								placeholder="example@gmail.com"
							/>
							{#if $validationForm.hasError('email.required')}
								<div class="mt-2 text-danger">
									{errorMessage['required']('Email')}
								</div>
							{/if}
							{#if $validationForm.hasError('email.not_an_email')}
								<div class="mt-2 text-danger">
									{errorMessage['email']('Email')}
								</div>
							{/if}
						</div>
						<div class="mt-3 input-form">
							<FormLabel htmlFor="validation-form-3" class="flex flex-col w-full sm:flex-row">
								Password
								<span class="mt-1 text-xs sm:ml-auto sm:mt-0 text-slate-500">
									Required, at least 6 characters
								</span>
							</FormLabel>
							<FormInput
								bind:value={$password.value}
								id="validation-form-3"
								type="password"
								name="password"
								class={clsx({
									'border-danger': $validationForm.errors.filter(
										(err) => err.split('.')[0] == 'password'
									).length
								})}
								placeholder="secret"
							/>
							{#if $validationForm.hasError('password.required')}
								<div class="mt-2 text-danger">
									{errorMessage['required']('Password')}
								</div>
							{/if}
							{#if $validationForm.hasError('password.min')}
								<div class="mt-2 text-danger">
									{errorMessage['min']('Password', 6)}
								</div>
							{/if}
						</div>
						<div class="mt-3 input-form">
							<FormLabel htmlFor="validation-form-4" class="flex flex-col w-full sm:flex-row">
								Age
								<span class="mt-1 text-xs sm:ml-auto sm:mt-0 text-slate-500">
									Required, integer only & maximum 3 characters
								</span>
							</FormLabel>
							<FormInput
								bind:value={$age.value}
								id="validation-form-4"
								type="number"
								name="age"
								class={clsx({
									'border-danger': $validationForm.errors.filter(
										(err) => err.split('.')[0] == 'age'
									).length
								})}
								placeholder="21"
							/>
							{#if $validationForm.hasError('age.required')}
								<div class="mt-2 text-danger">
									{errorMessage['required']('Age')}
								</div>
							{/if}
							{#if $validationForm.hasError('age.max')}
								<div class="mt-2 text-danger">
									{errorMessage['max']('Age', 3)}
								</div>
							{/if}
						</div>
						<div class="mt-3 input-form">
							<FormLabel htmlFor="validation-form-5" class="flex flex-col w-full sm:flex-row">
								Profile URL
								<span class="mt-1 text-xs sm:ml-auto sm:mt-0 text-slate-500">
									Optional, URL format
								</span>
							</FormLabel>
							<FormInput
								bind:value={$url.value}
								id="validation-form-5"
								type="text"
								name="url"
								class={clsx({
									'border-danger': $validationForm.errors.filter(
										(err) => err.split('.')[0] == 'url'
									).length
								})}
								placeholder="https://google.com"
							/>
							{#if $validationForm.hasError('url.url')}
								<div class="mt-2 text-danger">
									{errorMessage['url']('Url')}
								</div>
							{/if}
						</div>
						<div class="mt-3 input-form">
							<FormLabel htmlFor="validation-form-6" class="flex flex-col w-full sm:flex-row">
								Comment
								<span class="mt-1 text-xs sm:ml-auto sm:mt-0 text-slate-500">
									Required, at least 10 characters
								</span>
							</FormLabel>
							<FormTextarea
								bind:value={$comment.value}
								id="validation-form-6"
								name="comment"
								class={clsx({
									'border-danger': $validationForm.errors.filter(
										(err) => err.split('.')[0] == 'comment'
									).length
								})}
								placeholder="Type your comments"
							/>
							{#if $validationForm.hasError('comment.required')}
								<div class="mt-2 text-danger">
									{errorMessage['required']('Comment')}
								</div>
							{/if}
							{#if $validationForm.hasError('comment.min')}
								<div class="mt-2 text-danger">
									{errorMessage['min']('Comment', 10)}
								</div>
							{/if}
						</div>
						<Button variant="primary" type="submit" class="mt-5">Register</Button>
					</form>
					<!-- END: Validation Form -->
				</Preview.Panel>
				<Preview.Panel type="source">
					<Preview.Highlight type="javascript">
						{`
                    const schema = yup
                    .object({
                      name: yup.string().required().min(2),
                      email: yup.string().required().email(),
                      password: yup.string().required().min(6),
                      age: yup
                        .number()
                        .required()
                        .test(
                          "len",
                          "age must be less than or equal to 3",
                          (val) => val.toString().length <= 3
                        ),
                      url: yup.string().url(),
                      comment: yup.string().required().min(10),
                    })
                    .required();
                
                  const {
                    register,
                    trigger,
                    formState: { errors },
                  } = useForm({
                    mode: "onChange",
                    resolver: yupResolver(schema),
                  });
                  const onSubmit = async (event) => {
                    event.preventDefault();
                    const result = await trigger();
                    if (!result) {
                      Toastify({
                        node: dom("#failed-notification-content")
                          .clone()
                          .removeClass("hidden")[0],
                        duration: 3000,
                        newWindow: true,
                        close: true,
                        gravity: "top",
                        position: "right",
                        stopOnFocus: true,
                      }).showToast();
                    } else {
                      Toastify({
                        node: dom("#success-notification-content")
                          .clone()
                          .removeClass("hidden")[0],
                        duration: 3000,
                        newWindow: true,
                        close: true,
                        gravity: "top",
                        position: "right",
                        stopOnFocus: true,
                      }).showToast();
                    }
                  };
                    `}
					</Preview.Highlight>
				</Preview.Panel>
			</div>
		</Preview>
		<!-- END: Form Validation -->
		<!-- BEGIN: Success Notification Content -->
		<Notification id="success-notification-content" class="flex hidden">
			<Lucide icon="CircleCheck" class="text-success" />
			<div class="ml-4 mr-4">
				<div class="font-medium">Registration success!</div>
				<div class="mt-1 text-slate-500">Please check your e-mail for further info!</div>
			</div>
		</Notification>
		<!-- END: Success Notification Content -->
		<!-- BEGIN: Failed Notification Content -->
		<Notification id="failed-notification-content" class="flex hidden">
			<Lucide icon="CircleX" class="text-danger" />
			<div class="ml-4 mr-4">
				<div class="font-medium">Registration failed!</div>
				<div class="mt-1 text-slate-500">Please check the fileld form.</div>
			</div>
		</Notification>
		<!-- END: Failed Notification Content -->
	</div>
</div>
