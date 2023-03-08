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
	<div class="flexWrapper">
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
	a {
		color: var(--primary-light);
		background: var(--primary-dark);
		padding: 20px;
		font-size: 2.5rem;
		font-weight: bold;
		transition: color 0.2s;
	}
	a:hover {
		color: var(--primary-color);
		cursor: pointer;
	}
	.flexWrapper {
		margin: 0 2rem;
		display: flex;
		justify-content: space-around;
		gap: 2rem;
	}
</style>
