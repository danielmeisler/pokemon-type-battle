import { msg } from '@lit/localize';

type Type =
	| 'normal'
	| 'fighting'
	| 'flying'
	| 'poison'
	| 'ground'
	| 'rock'
	| 'bug'
	| 'ghost'
	| 'steel'
	| 'fire'
	| 'water'
	| 'grass'
	| 'electric'
	| 'psychic'
	| 'ice'
	| 'dragon'
	| 'dark'
	| 'fairy';

interface PokemonType {
	label: string;
	color: string;
	icon: string;
	effective: Type[];
	ineffective: Type[];
	nullified: Type[];
}

type Types = Record<Type, PokemonType>;

const types: Types = {
	normal: {
		label: msg('Normal'),
		color: '#A0A2A0',
		icon: '/assets/types/normal.svg',
		effective: [],
		ineffective: ['rock', 'steel'],
		nullified: ['ghost'],
	},
	fighting: {
		label: msg('Fighting'),
		color: '#FF8100',
		icon: '/assets/types/fighting.svg',
		effective: [],
		ineffective: [],
		nullified: [],
	},
	flying: {
		label: msg('Flying'),
		color: '#82BAEF',
		icon: '/assets/types/flying.svg',
		effective: [],
		ineffective: [],
		nullified: [],
	},
	poison: {
		label: msg('Poison'),
		color: '#923FCC',
		icon: '/assets/types/poison.svg',
		effective: [],
		ineffective: [],
		nullified: [],
	},
	ground: {
		label: msg('Ground'),
		color: '#92501B',
		icon: '/assets/types/ground.svg',
		effective: [],
		ineffective: [],
		nullified: [],
	},
	rock: {
		label: msg('Rock'),
		color: '#B0AB82',
		icon: '/assets/types/rock.svg',
		effective: [],
		ineffective: [],
		nullified: [],
	},
	bug: {
		label: msg('Bug'),
		color: '#92A212',
		icon: '/assets/types/bug.svg',
		effective: [],
		ineffective: [],
		nullified: [],
	},
	ghost: {
		label: msg('Ghost'),
		color: '#713F71',
		icon: '/assets/types/ghost.svg',
		effective: [],
		ineffective: [],
		nullified: [],
	},
	steel: {
		label: msg('Steel'),
		color: '#60A2B9',
		icon: '/assets/types/steel.svg',
		effective: [],
		ineffective: [],
		nullified: [],
	},
	fire: {
		label: msg('Fire'),
		color: '#E72324',
		icon: '/assets/types/fire.svg',
		effective: [],
		ineffective: [],
		nullified: [],
	},
	water: {
		label: msg('Water'),
		color: '#2481EF',
		icon: '/assets/types/water.svg',
		effective: [],
		ineffective: [],
		nullified: [],
	},
	grass: {
		label: msg('Grass'),
		color: '#3CA124',
		icon: '/assets/types/grass.svg',
		effective: [],
		ineffective: [],
		nullified: [],
	},
	electric: {
		label: msg('Electric'),
		color: '#FAC100',
		icon: '/assets/types/electric.svg',
		effective: [],
		ineffective: [],
		nullified: [],
	},
	psychic: {
		label: msg('Psychic'),
		color: '#EF3F7A',
		icon: '/assets/types/psychic.svg',
		effective: [],
		ineffective: [],
		nullified: [],
	},
	ice: {
		label: msg('Ice'),
		color: '#3DD9FF',
		icon: '/assets/types/ice.svg',
		effective: [],
		ineffective: [],
		nullified: [],
	},
	dragon: {
		label: msg('Dragon'),
		color: '#4E5FE2',
		icon: '/assets/types/dragon.svg',
		effective: [],
		ineffective: [],
		nullified: [],
	},
	dark: {
		label: msg('Dark'),
		color: '#4E3F3C',
		icon: '/assets/types/dark.svg',
		effective: [],
		ineffective: [],
		nullified: [],
	},
	fairy: {
		label: msg('Fairy'),
		color: '#EF71EF',
		icon: '/assets/types/fairy.svg',
		effective: [],
		ineffective: [],
		nullified: [],
	},
};

export { types, type Type };
