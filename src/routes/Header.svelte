<script lang="ts">
	import { allProjectNames } from '$lib/stores/pageInfo';
	import { slide } from 'svelte/transition';

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
	<a
		href={`/projects/`}
		on:mouseenter={openDisplayingProjects}
		on:mouseleave={closeDisplayingProjects}>Projects</a
	>
	{#if isDisplayingProjects}
		<ul
			class="projectSlide"
			on:mouseenter={openDisplayingProjects}
			on:mouseleave={closeDisplayingProjects}
		>
			{#each $allProjectNames as project}
				<li transition:slide>
					<a href={`/projects/${project[1]}`}>{project[0]}</a>
				</li>
			{/each}
		</ul>
	{/if}
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
	.projectSlide {
		position: absolute;
		top: 68.8;
		width: 200px;
		text-align: left;
	}
</style>
