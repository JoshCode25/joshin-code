<script lang="ts">
	import { slide } from 'svelte/transition';

	interface DisplayInfo {
		url: string;
		name: string;
	}

	export let buttonName: string;
	export let buttonUrl: string = '/';
	export let displayInfo: Array<DisplayInfo>;

	let isDisplayOpen: boolean = true;

	function openDisplay() {
		isDisplayOpen = true;
	}

	function closeDisplay() {
		isDisplayOpen = false;
	}
</script>

<a href={buttonUrl} on:mouseenter={openDisplay} on:mouseleave={closeDisplay}>
	{buttonName}
</a>
{#if isDisplayOpen}
	<ul class="projectSlide" on:mouseenter={openDisplay} on:mouseleave={closeDisplay}>
		{#each displayInfo as info}
			<li transition:slide>
				<a href={info.url}>{info.name}</a>
			</li>
		{/each}
	</ul>
{/if}
