<script lang="ts">
	import Header from './Header.svelte';
	import './styles.css';
	import './animations.css';
</script>

<body>
	<Header />
	<slot />
</body>

<style>
	body {
		text-align: center;
		margin: 0 auto;
		max-width: 100rem;
		background: var(--primary-light);
	}
</style>
