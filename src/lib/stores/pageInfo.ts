import { type Readable, readable } from 'svelte/store';

export const allProjectNames: Readable<string[][]> = readable([
	['Mythic Circus', 'mythic_circus'],
	["Vhere's Valdo", 'vheres_valdo'],
	['Pokemon Rumble', 'pokemon_rumble'],
	['Algomancy', 'algomancy']
]);
