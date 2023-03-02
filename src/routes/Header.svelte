<script lang="ts">
	import { base } from '$app/paths';
</script>

<header>
	<a href={`/about/`}>About</a>
	<a href={`/`}>Home</a>
	<a href={`/projects/`}>Projects</a>
	<a href={`/contact/`}>Contact</a>
</header>

<style>
	header {
		background: var(--primary-color);
		margin-bottom: 10px;
	}
	a {
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
