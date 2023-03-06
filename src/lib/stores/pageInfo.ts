import { type Readable, readable } from 'svelte/store';

interface ProjectRouteInfo {
	name: string;
	url: string;
}

export const allProjectNames: Readable<ProjectRouteInfo[]> = readable([
	{ name: 'Mythic Circus', url: '/projects/mythic_circus' },
	{ name: "Vhere's Valdo", url: '/projects/vheres_valdo' },
	{ name: 'Pokemon Rumble', url: '/projects/pokemon_rumble' },
	{ name: 'Algomancy', url: '/projects/algomancy' },
	{ name: 'SVG Modifier', url: '/projects/svg_modifier' }
]);
