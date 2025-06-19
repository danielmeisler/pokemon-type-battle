import { msg } from '@lit/localize';

type Type =
	| 'normal'
	| 'fire'
	| 'water'
	| 'grass'
	| 'electric'
	| 'ice'
	| 'fighting'
	| 'poison'
	| 'ground'
	| 'flying'
	| 'psychich'
	| 'bug'
	| 'rock'
	| 'ghost'
	| 'dragon'
	| 'dark'
	| 'steel'
	| 'fairy';

interface PokemonType {
	label: string;
	color: string;
	icon: string;
	effective: Type[];
	weakness: Type[];
}

type Types = Record<Type, PokemonType>;

const types: Types = {
	normal: {
		label: msg('Normal'),
		color: '#A8A77A',
		icon: '/assets/types/normal.svg',
		effective: [],
		weakness: [],
	},
	// Gedanken machen zu Attack/Defend Effective/Weakness?...
};

export { types, type Type };
