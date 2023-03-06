<script lang="ts">
	import { slide } from 'svelte/transition';

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

	let isDisplayOpen: boolean = true;
	let clientLeft: number;
	$: console.log(clientLeft);

	function openDisplay() {
		isDisplayOpen = true;
	}

	function closeDisplay() {
		isDisplayOpen = false;
	}
</script>

<a
	bind:offsetWidth={clientLeft}
	href={buttonInfo.buttonUrl}
	on:mouseenter={openDisplay}
	on:mouseleave={closeDisplay}
>
	{buttonInfo.buttonName}
</a>
{#if isDisplayOpen}
	<ul class="projectSlide" on:mouseenter={openDisplay} on:mouseleave={closeDisplay}>
		{#each buttonInfo.displayInfo as info}
			<li transition:slide>
				<a href={info.url}>{info.name}</a>
			</li>
		{/each}
	</ul>
{/if}

<style>
	a {
		color: var(--primary-color);
		background: var(--primary-dark);
		display: inline-block;
		padding: 20px;
		font-size: 2.5rem;
		font-weight: bold;
	}
	a:hover {
		color: var(--secondary-color);
		cursor: pointer;
	}
	li > a {
		width: 100%;
	}
	.projectSlide {
		position: absolute;
		top: 68.8;
		width: 200px;
		text-align: left;
	}
</style>
