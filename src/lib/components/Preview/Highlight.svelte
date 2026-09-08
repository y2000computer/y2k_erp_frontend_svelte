<script context="module" lang="ts">
	import { twMerge } from 'tailwind-merge';
	import type { HTMLAttributes } from 'svelte/elements';
	import Button from '../Button';

	export interface HighlightProps extends HTMLAttributes<HTMLDivElement> {
		className?: string;
		copyButton?: boolean;
		type?: 'html' | 'javascript';
	}
</script>

<script lang="ts">
	import _ from 'lodash';
	import Lucide from '../Lucide';
	import jsBeautify from 'js-beautify';
	import hljs from 'highlight.js';
	import { onMount } from 'svelte';

	let className: HighlightProps['className'] = undefined;
	let copyButton: HighlightProps['copyButton'] = true;
	let type: HighlightProps['type'] = 'html';

	export { className as class, copyButton, type };

	let copyText = 'Copy example code';
	let highlightRef: HTMLDivElement;
	let copySourceEl: HTMLTextAreaElement;
	let copySource = '';

	const copyCode = () => {
		copyText = 'Copied!';
		setTimeout(() => {
			copyText = 'Copy example code';
		}, 1500);

		copySourceEl?.select();
		copySourceEl?.setSelectionRange(0, 99999);
		document.execCommand('copy');
	};

	onMount(() => {
		if (highlightRef) {
			const codeEl = highlightRef.querySelectorAll('code')[0];
			let source = codeEl.innerHTML;

			// Format for beautify
			source = _.replace(source, /&lt;/g, '<');
			source = _.replace(source, /&gt;/g, '>');

			// Beautify code
			source = jsBeautify.html(source);

			// Save for copy code function
			copySource = source;

			// Format for highlight.js
			source = _.replace(source, /</g, '&lt;');
			source = _.replace(source, />/g, '&gt;');

			codeEl.innerHTML = source;

			hljs.highlightElement(codeEl);
		}
	});
</script>

<div>
	{#if copyButton}
		<Button
			variant="outline-secondary"
			className={twMerge(['py-1 px-2', className])}
			on:click={() => {
				copyCode();
			}}
		>
			<Lucide icon="File" class="w-4 h-4 mr-2" />
			{copyText}
		</Button>
		<div
			bind:this={highlightRef}
			class={twMerge([
				'rounded-md overflow-hidden relative',
				copyButton && 'mt-3',
				!copyButton && className
			])}
		>
			<pre class="relative grid">
      <code
					class={twMerge([
						'text-xs leading-relaxed [&.hljs]:bg-slate-50 [&.hljs]:px-5 [&.hljs]:py-4',
						'[&.hljs]:dark:text-slate-200 [&.hljs]:dark:bg-darkmode-700 [&.hljs_.hljs-string]:dark:text-slate-200 [&.hljs_.hljs-tag]:dark:text-slate-200 [&.hljs_.hljs-name]:dark:text-emerald-500 [&.hljs_.hljs-attr]:dark:text-sky-500',
						"before:content-['HTML'] before:font-roboto before:font-medium before:px-4 before:py-2 before:block before:absolute before:top-0 before:right-0 before:rounded-bl before:bg-slate-200 before:bg-opacity-70 before:dark:bg-darkmode-400",
						"[&.javascript]:before:content-['JS']",
						type
					])}>
        <slot />
      </code>
      <textarea
					bind:this={copySourceEl}
					value={copySource}
					class="absolute w-0 h-0 p-0 -mt-1 -ml-1"
				/>
    </pre>
		</div>
	{/if}
</div>
