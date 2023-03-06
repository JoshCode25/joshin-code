<script lang="ts">
	import { allProjectNames } from '$lib/stores/pageInfo';
	import NavButton from '$lib/components/NavButton.svelte';

	const projectsDisplayInfo = {
		buttonName: 'Projects',
		buttonUrl: '/projects',
		displayInfo: $allProjectNames
	};

	let isDisplayingProjects: boolean = true;

	function openDisplayingProjects() {
		isDisplayingProjects = true;
	}

	function closeDisplayingProjects() {
		isDisplayingProjects = false;
	}
</script>

<header>
	<a href={`/about/`}>About</a>
	<a href={`/`}>Home</a>
	<NavButton buttonInfo={projectsDisplayInfo} />
	<a href={`/contact/`}>Contact</a>
</header>

<style>
	header {
		display: flex;
		justify-content: center;
		gap: 2rem;
		background: var(--primary-dark);
		margin-bottom: 1rem;
	}
	a {
		color: var(--primary-color);
		background: var(--primary-dark);
		padding: 20px;
		font-size: 2.5rem;
		font-weight: bold;
		transition: color 0.2s;
	}
	a:hover {
		color: var(--secondary-color);
		cursor: pointer;
	}
</style>
