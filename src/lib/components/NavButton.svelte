<script lang="ts">
	import { slide } from 'svelte/transition';
	import { navigating } from '$app/stores';
	import type { Readable } from 'svelte/store';

	interface ButtonInfo {
		buttonName: string;
		buttonUrl: string;
		displayInfo: Array<DisplayInfo>;
	}
	interface DisplayInfo {
		url: string;
		name: string;
	}

	export let buttonInfo: ButtonInfo = {
		buttonName: 'default',
		buttonUrl: '/',
		displayInfo: [{ url: '/', name: 'Home' }]
	};

	let isDisplayOpen: boolean = false;

	function openDisplay() {
		isDisplayOpen = true;
	}

	function closeDisplay() {
		isDisplayOpen = false;
	}

	$: if ($navigating !== null) {
		closeDisplay();
	}
</script>

<div>
	<a href={buttonInfo.buttonUrl} on:mouseenter={openDisplay} on:mouseleave={closeDisplay}>
		{buttonInfo.buttonName}
	</a>
	{#if isDisplayOpen}
		<ul on:mouseenter={openDisplay} on:mouseleave={closeDisplay}>
			{#each buttonInfo.displayInfo as info}
				<li transition:slide>
					<a href={info.url}>{info.name}</a>
				</li>
			{/each}
		</ul>
	{/if}
</div>

<style>
	a {
		color: var(--primary-light);
		padding: 20px;
		display: inline-block;
		font-size: 2.5rem;
		font-weight: bold;
	}
	a:hover {
		color: var(--primary-color);
		cursor: pointer;
	}
	ul {
		background: var(--primary-dark);
		position: absolute;
		text-align: left;
	}
	li > a {
		padding: 1rem;
		font-size: 2rem;
	}
</style>
