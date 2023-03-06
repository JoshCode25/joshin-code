<script lang="ts">
	import { allProjectNames } from '$lib/stores/pageInfo';
	import { slide } from 'svelte/transition';
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
		background: var(--primary-dark);
		margin-bottom: 10px;
	}
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
</style>
