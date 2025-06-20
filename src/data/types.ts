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
		effective: ['normal', 'rock', 'steel', 'ice', 'dark'],
		ineffective: ['flying', 'poison', 'bug', 'psychic', 'fairy'],
		nullified: ['ghost'],
	},
	flying: {
		label: msg('Flying'),
		color: '#82BAEF',
		icon: '/assets/types/flying.svg',
		effective: ['fighting', 'bug', 'grass'],
		ineffective: ['rock', 'steel', 'electric'],
		nullified: [],
	},
	poison: {
		label: msg('Poison'),
		color: '#923FCC',
		icon: '/assets/types/poison.svg',
		effective: ['grass', 'fairy'],
		ineffective: ['poison', 'ground', 'rock', 'ghost'],
		nullified: ['steel'],
	},
	ground: {
		label: msg('Ground'),
		color: '#92501B',
		icon: '/assets/types/ground.svg',
		effective: ['poison', 'rock', 'steel', 'fire', 'electric'],
		ineffective: ['bug', 'grass'],
		nullified: ['flying'],
	},
	rock: {
		label: msg('Rock'),
		color: '#B0AB82',
		icon: '/assets/types/rock.svg',
		effective: ['flying', 'bug', 'fire', 'ice'],
		ineffective: ['fighting', 'ground', 'steel'],
		nullified: [],
	},
	bug: {
		label: msg('Bug'),
		color: '#92A212',
		icon: '/assets/types/bug.svg',
		effective: ['grass', 'psychic', 'dark'],
		ineffective: ['fighting', 'flying', 'poison', 'ghost', 'steel', 'fire', 'fairy'],
		nullified: [],
	},
	ghost: {
		label: msg('Ghost'),
		color: '#713F71',
		icon: '/assets/types/ghost.svg',
		effective: ['ghost', 'psychic'],
		ineffective: ['dark'],
		nullified: ['normal'],
	},
	steel: {
		label: msg('Steel'),
		color: '#60A2B9',
		icon: '/assets/types/steel.svg',
		effective: ['rock', 'ice', 'fairy'],
		ineffective: ['steel', 'fire', 'water', 'electric'],
		nullified: [],
	},
	fire: {
		label: msg('Fire'),
		color: '#E72324',
		icon: '/assets/types/fire.svg',
		effective: ['bug', 'steel', 'grass', 'ice'],
		ineffective: ['rock', 'fire', 'water', 'dragon'],
		nullified: [],
	},
	water: {
		label: msg('Water'),
		color: '#2481EF',
		icon: '/assets/types/water.svg',
		effective: ['ground', 'rock', 'fire'],
		ineffective: ['water', 'grass', 'dragon'],
		nullified: [],
	},
	grass: {
		label: msg('Grass'),
		color: '#3CA124',
		icon: '/assets/types/grass.svg',
		effective: ['ground', 'rock', 'water'],
		ineffective: ['flying', 'poison', 'bug', 'steel', 'fire', 'grass', 'dragon'],
		nullified: [],
	},
	electric: {
		label: msg('Electric'),
		color: '#FAC100',
		icon: '/assets/types/electric.svg',
		effective: ['flying', 'water'],
		ineffective: ['grass', 'electric', 'dragon'],
		nullified: ['ground'],
	},
	psychic: {
		label: msg('Psychic'),
		color: '#EF3F7A',
		icon: '/assets/types/psychic.svg',
		effective: ['fighting', 'poison'],
		ineffective: ['steel', 'psychic'],
		nullified: ['dark'],
	},
	ice: {
		label: msg('Ice'),
		color: '#3DD9FF',
		icon: '/assets/types/ice.svg',
		effective: ['flying', 'ground', 'grass', 'dragon'],
		ineffective: ['steel', 'fire', 'water', 'ice'],
		nullified: [],
	},
	dragon: {
		label: msg('Dragon'),
		color: '#4E5FE2',
		icon: '/assets/types/dragon.svg',
		effective: ['dragon'],
		ineffective: ['steel'],
		nullified: ['fairy'],
	},
	dark: {
		label: msg('Dark'),
		color: '#4E3F3C',
		icon: '/assets/types/dark.svg',
		effective: ['ghost', 'psychic'],
		ineffective: ['fighting', 'dark', 'fairy'],
		nullified: [],
	},
	fairy: {
		label: msg('Fairy'),
		color: '#EF71EF',
		icon: '/assets/types/fairy.svg',
		effective: ['fighting', 'dragon', 'dark'],
		ineffective: ['poison', 'steel', 'fire'],
		nullified: [],
	},
};

export { types, type Type };
