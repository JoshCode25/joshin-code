<script lang="ts">
	let projectNameArray: string[][] = [
		['Mythic Circus', 'mythic_circus'],
		["Vhere's Valdo", 'vheres_valdo'],
		['Pokemon Rumble', 'pokemon_rumble'],
		['Algomancy', 'algomancy']
	];
</script>

<h1>List of active/formerly active/futurely active Projects</h1>

<ul>
	{#each projectNameArray as project}
		<li>
			<a href={`/projects/${project[1]}`}>{project[0]}</a>
		</li>
	{/each}
</ul>
