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
		color: '#919AA2',
		icon: '/assets/types/normal.svg',
		effective: [],
		ineffective: ['rock', 'steel'],
		nullified: ['ghost'],
	},
	fighting: {
		label: msg('Fighting'),
		color: '#CF3E69',
		icon: '/assets/types/fighting.svg',
		effective: ['normal', 'rock', 'steel', 'ice', 'dark'],
		ineffective: ['flying', 'poison', 'bug', 'psychic', 'fairy'],
		nullified: ['ghost'],
	},
	flying: {
		label: msg('Flying'),
		color: '#90AADE',
		icon: '/assets/types/flying.svg',
		effective: ['fighting', 'bug', 'grass'],
		ineffective: ['rock', 'steel', 'electric'],
		nullified: [],
	},
	poison: {
		label: msg('Poison'),
		color: '#AC6AC9',
		icon: '/assets/types/poison.svg',
		effective: ['grass', 'fairy'],
		ineffective: ['poison', 'ground', 'rock', 'ghost'],
		nullified: ['steel'],
	},
	ground: {
		label: msg('Ground'),
		color: '#DA7844',
		icon: '/assets/types/ground.svg',
		effective: ['poison', 'rock', 'steel', 'fire', 'electric'],
		ineffective: ['bug', 'grass'],
		nullified: ['flying'],
	},
	rock: {
		label: msg('Rock'),
		color: '#C8B88C',
		icon: '/assets/types/rock.svg',
		effective: ['flying', 'bug', 'fire', 'ice'],
		ineffective: ['fighting', 'ground', 'steel'],
		nullified: [],
	},
	bug: {
		label: msg('Bug'),
		color: '#91C228',
		icon: '/assets/types/bug.svg',
		effective: ['grass', 'psychic', 'dark'],
		ineffective: ['fighting', 'flying', 'poison', 'ghost', 'steel', 'fire', 'fairy'],
		nullified: [],
	},
	ghost: {
		label: msg('Ghost'),
		color: '#5169AE',
		icon: '/assets/types/ghost.svg',
		effective: ['ghost', 'psychic'],
		ineffective: ['dark'],
		nullified: ['normal'],
	},
	steel: {
		label: msg('Steel'),
		color: '#5A8FA2',
		icon: '/assets/types/steel.svg',
		effective: ['rock', 'ice', 'fairy'],
		ineffective: ['steel', 'fire', 'water', 'electric'],
		nullified: [],
	},
	fire: {
		label: msg('Fire'),
		color: '#FF9D53',
		icon: '/assets/types/fire.svg',
		effective: ['bug', 'steel', 'grass', 'ice'],
		ineffective: ['rock', 'fire', 'water', 'dragon'],
		nullified: [],
	},
	water: {
		label: msg('Water'),
		color: '#4C91D6',
		icon: '/assets/types/water.svg',
		effective: ['ground', 'rock', 'fire'],
		ineffective: ['water', 'grass', 'dragon'],
		nullified: [],
	},
	grass: {
		label: msg('Grass'),
		color: '#63BC5B',
		icon: '/assets/types/grass.svg',
		effective: ['ground', 'rock', 'water'],
		ineffective: ['flying', 'poison', 'bug', 'steel', 'fire', 'grass', 'dragon'],
		nullified: [],
	},
	electric: {
		label: msg('Electric'),
		color: '#F3D338',
		icon: '/assets/types/electric.svg',
		effective: ['flying', 'water'],
		ineffective: ['grass', 'electric', 'dragon'],
		nullified: ['ground'],
	},
	psychic: {
		label: msg('Psychic'),
		color: '#F97277',
		icon: '/assets/types/psychic.svg',
		effective: ['fighting', 'poison'],
		ineffective: ['steel', 'psychic'],
		nullified: ['dark'],
	},
	ice: {
		label: msg('Ice'),
		color: '#75CFC1',
		icon: '/assets/types/ice.svg',
		effective: ['flying', 'ground', 'grass', 'dragon'],
		ineffective: ['steel', 'fire', 'water', 'ice'],
		nullified: [],
	},
	dragon: {
		label: msg('Dragon'),
		color: '#036DC5',
		icon: '/assets/types/dragon.svg',
		effective: ['dragon'],
		ineffective: ['steel'],
		nullified: ['fairy'],
	},
	dark: {
		label: msg('Dark'),
		color: '#5A5266',
		icon: '/assets/types/dark.svg',
		effective: ['ghost', 'psychic'],
		ineffective: ['fighting', 'dark', 'fairy'],
		nullified: [],
	},
	fairy: {
		label: msg('Fairy'),
		color: '#ED90E7',
		icon: '/assets/types/fairy.svg',
		effective: ['fighting', 'dragon', 'dark'],
		ineffective: ['poison', 'steel', 'fire'],
		nullified: [],
	},
};

export { types, type PokemonType, type Type };
