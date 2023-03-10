<script lang="ts">
	import { allProjectNames } from '$lib/stores/pageInfo';
	import Logo from '$lib/components/Logo.svelte';
	import NavButton from '$lib/components/NavButton.svelte';

	const projectsDisplayInfo = {
		buttonName: 'Projects',
		buttonUrl: '/projects',
		displayInfo: $allProjectNames
	};
</script>

<header>
	<Logo />
	<div class="flexWrapper navWrapper">
		<a href={`/about/`}>About</a>
		<a href={`/`}>Home</a>
		<NavButton buttonInfo={projectsDisplayInfo} />
		<a href={`/contact/`}>Contact</a>
	</div>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
		gap: 2rem;
		background: var(--primary-dark);
		margin-bottom: 1rem;
	}

	.flexWrapper {
		margin: 0 2rem;
		display: flex;
		justify-content: space-around;
		gap: 2rem;
	}
</style>
