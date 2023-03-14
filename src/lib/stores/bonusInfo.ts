import { writable, type Writable } from 'svelte/store';

interface DevelopingDisplay {
	displayActive: boolean;
	displayName: string;
}

const developingList = ['josh', 'curiosity', 'TBD', 'empathy', 'tenacity'];

export const developingDisplay: Writable<DevelopingDisplay> = writable({
	displayActive: false,
	displayName: developingList[0]
});
