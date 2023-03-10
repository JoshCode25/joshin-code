<script lang="ts">
	import { fly } from 'svelte/transition';

	const displayList: Array<string> = ['josh', 'figures', 'trees', 'land', 'flocks', 'cities'];
	let displayNumber = 0;
	const maxDisplayAdvance = 3;
	let displayName: string;
	$: displayName = displayList[displayNumber];

	function toggleDisplayName(): void {
		let displayAdvance: number = Math.floor(Math.random() * maxDisplayAdvance + 1);
		console.log(displayNumber, displayAdvance);
		if (displayNumber + displayAdvance > displayList.length - 1) {
			displayNumber = displayNumber + displayAdvance - displayList.length;
		} else {
			displayNumber = displayNumber + displayAdvance;
		}
		console.log(displayNumber);
	}
</script>

<button class="reset" on:click={toggleDisplayName}>
	<h3>developing</h3>
	<h4>
		<span class="glow">{'<'}</span>
		{#key displayName}
			<span class="inlineBlock" in:fly={{ y: 20 }}>{displayName}</span>
		{/key}
		<span class="glow">{'/>'}</span>
	</h4>
</button>

<style>
	button {
		margin: 1rem 2rem;
		text-align: left;
	}

	h3,
	h4 {
		font-size: 2rem;
		color: var(--primary-light);
	}
	.glow {
		animation-name: glow;
		animation-duration: 4s;
		animation-iteration-count: infinite;
	}
	.inlineBlock {
		display: inline-block;
	}
</style>
