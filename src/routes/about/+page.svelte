<script lang="ts">
	let personalFactsArray: Array<string> = [
		'I like to make things',
		'I like to make things I can see',
		'I like to make things that help others',
		'I like to make things I can interact with',
		'I like to learn new things',
		'I like to get up early in the morning',
		'I like to take time to observe/notice the beauty in normal things',
		'I like to write with numbers (code) and words (stories)'
	];
</script>

<h1>Some things to know about me</h1>

<ul>
	{#each personalFactsArray as fact}
		<li>{fact}</li>
	{/each}
</ul>
