export const Pokedex: {[k: string]: ModdedSpeciesData} = {
bulbasaur: {
	"num": -1,
	"name": "Bulbasaur",
	"types": [
		"Grass",
		"Poison"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 45,
		"atk": 49,
		"def": 49,
		"spa": 65,
		"spd": 65,
		"spe": 45
	},
	"abilities": {
		"0": "Overgrow",
		"H": "Chlorophyll"
	},
	"weightkg": 6.9,
	"evos": [
		"Ivysaur"
	],
	"eggGroups": [
		"Monster",
		"Grass"
	]
},
ivysaur: {
	"num": -2,
	"name": "Ivysaur",
	"types": [
		"Grass",
		"Poison"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 60,
		"atk": 62,
		"def": 63,
		"spa": 80,
		"spd": 80,
		"spe": 60
	},
	"abilities": {
		"0": "Overgrow",
		"H": "Chlorophyll"
	},
	"weightkg": 13,
	"prevo": "Bulbasaur",
	"evoLevel": 16,
	"evos": [
		"Venusaur"
	],
	"eggGroups": [
		"Monster",
		"Grass"
	]
},
venusaur: {
	"num": -3,
	"name": "Venusaur",
	"types": [
		"Grass",
		"Poison"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 80,
		"atk": 82,
		"def": 83,
		"spa": 100,
		"spd": 100,
		"spe": 80
	},
	"abilities": {
		"0": "Overgrow",
		"H": "Chlorophyll"
	},
	"weightkg": 100,
	"prevo": "Ivysaur",
	"evoLevel": 32,
	"eggGroups": [
		"Monster",
		"Grass"
	],
	"otherFormes": [
		"Venusaur-Mega"
	],
	"formeOrder": [
		"Venusaur",
		"Venusaur-Mega"
	],
	"canGigantamax": "G-Max Vine Lash"
},
venusaurmega: {
	"num": -3,
	"name": "Venusaur-Mega",
	"baseSpecies": "Venusaur",
	"forme": "Mega",
	"types": [
		"Grass",
		"Poison"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 80,
		"atk": 91,
		"def": 103,
		"spa": 110,
		"spd": 110,
		"spe": 80
	},
	"abilities": {
		"0": "Thick Fat"
	},
	"weightkg": 155.5,
	"eggGroups": [
		"Monster",
		"Grass"
	],
	// "requiredItem": "Venusaurite"
},
charmander: {
	"num": -4,
	"name": "Charmander",
	"types": [
		"Fire"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 39,
		"atk": 52,
		"def": 43,
		"spa": 55,
		"spd": 55,
		"spe": 65
	},
	"abilities": {
		"0": "Blaze",
		"H": "Solar Power"
	},
	"weightkg": 8.5,
	"evos": [
		"Charmeleon"
	],
	"eggGroups": [
		"Monster",
		"Dragon"
	]
},
charmeleon: {
	"num": -5,
	"name": "Charmeleon",
	"types": [
		"Fire"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 58,
		"atk": 64,
		"def": 58,
		"spa": 72,
		"spd": 72,
		"spe": 80
	},
	"abilities": {
		"0": "Blaze",
		"H": "Solar Power"
	},
	"weightkg": 19,
	"prevo": "Charmander",
	"evoLevel": 16,
	"evos": [
		"Charizard"
	],
	"eggGroups": [
		"Monster",
		"Dragon"
	]
},
charizard: {
	"num": -6,
	"name": "Charizard",
	"types": [
		"Fire",
		"Flying"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 78,
		"atk": 84,
		"def": 78,
		"spa": 97,
		"spd": 97,
		"spe": 100
	},
	"abilities": {
		"0": "Blaze",
		"H": "Solar Power"
	},
	"weightkg": 90.5,
	"prevo": "Charmeleon",
	"evoLevel": 36,
	"eggGroups": [
		"Monster",
		"Dragon"
	],
	"otherFormes": [
		"Charizard-Mega-X",
		"Charizard-Mega-Y"
	],
	"formeOrder": [
		"Charizard",
		"Charizard-Mega-X",
		"Charizard-Mega-Y"
	],
	"canGigantamax": "G-Max Wildfire"
},
charizardmegax: {
	"num": -6,
	"name": "Charizard-Mega-X",
	"baseSpecies": "Charizard",
	"forme": "Mega-X",
	"types": [
		"Fire",
		"Dragon"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 78,
		"atk": 107,
		"def": 94,
		"spa": 102,
		"spd": 102,
		"spe": 100
	},
	"abilities": {
		"0": "Tough Claws"
	},
	"weightkg": 110.5,
	"eggGroups": [
		"Monster",
		"Dragon"
	],
	// "requiredItem": "Charizardite X"
},
charizardmegay: {
	"num": -6,
	"name": "Charizard-Mega-Y",
	"baseSpecies": "Charizard",
	"forme": "Mega-Y",
	"types": [
		"Fire",
		"Flying"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 78,
		"atk": 94,
		"def": 78,
		"spa": 117,
		"spd": 117,
		"spe": 100
	},
	"abilities": {
		"0": "Drought"
	},
	"weightkg": 100.5,
	"eggGroups": [
		"Monster",
		"Dragon"
	],
	// "requiredItem": "Charizardite Y"
},
squirtle: {
	"num": -7,
	"name": "Squirtle",
	"types": [
		"Water"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 44,
		"atk": 48,
		"def": 65,
		"spa": 57,
		"spd": 57,
		"spe": 43
	},
	"abilities": {
		"0": "Torrent",
		"H": "Rain Dish"
	},
	"weightkg": 9,
	"evos": [
		"Wartortle"
	],
	"eggGroups": [
		"Monster",
		"Water 1"
	]
},
wartortle: {
	"num": -8,
	"name": "Wartortle",
	"types": [
		"Water"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 59,
		"atk": 63,
		"def": 80,
		"spa": 72,
		"spd": 72,
		"spe": 58
	},
	"abilities": {
		"0": "Torrent",
		"H": "Rain Dish"
	},
	"weightkg": 22.5,
	"prevo": "Squirtle",
	"evoLevel": 16,
	"evos": [
		"Blastoise"
	],
	"eggGroups": [
		"Monster",
		"Water 1"
	]
},
blastoise: {
	"num": -9,
	"name": "Blastoise",
	"types": [
		"Water"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 79,
		"atk": 83,
		"def": 100,
		"spa": 95,
		"spd": 95,
		"spe": 78
	},
	"abilities": {
		"0": "Torrent",
		"H": "Rain Dish"
	},
	"weightkg": 85.5,
	"prevo": "Wartortle",
	"evoLevel": 36,
	"eggGroups": [
		"Monster",
		"Water 1"
	],
	"otherFormes": [
		"Blastoise-Mega"
	],
	"formeOrder": [
		"Blastoise",
		"Blastoise-Mega"
	],
	"canGigantamax": "G-Max Cannonade"
},
blastoisemega: {
	"num": -9,
	"name": "Blastoise-Mega",
	"baseSpecies": "Blastoise",
	"forme": "Mega",
	"types": [
		"Water"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 79,
		"atk": 93,
		"def": 110,
		"spa": 110,
		"spd": 110,
		"spe": 78
	},
	"abilities": {
		"0": "Mega Launcher"
	},
	"weightkg": 101.1,
	"eggGroups": [
		"Monster",
		"Water 1"
	],
	// "requiredItem": "Blastoisinite"
},
caterpie: {
	"num": -10,
	"name": "Caterpie",
	"types": [
		"Bug"
	],
	"baseStats": {
		"hp": 45,
		"atk": 30,
		"def": 35,
		"spa": 20,
		"spd": 20,
		"spe": 45
	},
	"abilities": {
		"0": "Shield Dust",
		"H": "Run Away"
	},
	"weightkg": 2.9,
	"evos": [
		"Metapod"
	],
	"eggGroups": [
		"Bug"
	]
},
metapod: {
	"num": -11,
	"name": "Metapod",
	"types": [
		"Bug"
	],
	"baseStats": {
		"hp": 50,
		"atk": 20,
		"def": 55,
		"spa": 25,
		"spd": 25,
		"spe": 30
	},
	"abilities": {
		"0": "Shed Skin"
	},
	"weightkg": 9.9,
	"prevo": "Caterpie",
	"evoLevel": 7,
	"evos": [
		"Butterfree"
	],
	"eggGroups": [
		"Bug"
	]
},
butterfree: {
	"num": -12,
	"name": "Butterfree",
	"types": [
		"Bug",
		"Flying"
	],
	"baseStats": {
		"hp": 60,
		"atk": 45,
		"def": 50,
		"spa": 85,
		"spd": 85,
		"spe": 70
	},
	"abilities": {
		"0": "Compound Eyes",
		"H": "Tinted Lens"
	},
	"weightkg": 32,
	"prevo": "Metapod",
	"evoLevel": 10,
	"eggGroups": [
		"Bug"
	],
	"canGigantamax": "G-Max Befuddle"
},
weedle: {
	"num": -13,
	"name": "Weedle",
	"types": [
		"Bug",
		"Poison"
	],
	"baseStats": {
		"hp": 40,
		"atk": 35,
		"def": 30,
		"spa": 20,
		"spd": 20,
		"spe": 50
	},
	"abilities": {
		"0": "Shield Dust",
		"H": "Run Away"
	},
	"weightkg": 3.2,
	"evos": [
		"Kakuna"
	],
	"eggGroups": [
		"Bug"
	]
},
kakuna: {
	"num": -14,
	"name": "Kakuna",
	"types": [
		"Bug",
		"Poison"
	],
	"baseStats": {
		"hp": 45,
		"atk": 25,
		"def": 50,
		"spa": 25,
		"spd": 25,
		"spe": 35
	},
	"abilities": {
		"0": "Shed Skin"
	},
	"weightkg": 10,
	"prevo": "Weedle",
	"evoLevel": 7,
	"evos": [
		"Beedrill"
	],
	"eggGroups": [
		"Bug"
	]
},
beedrill: {
	"num": -15,
	"name": "Beedrill",
	"types": [
		"Bug",
		"Poison"
	],
	"baseStats": {
		"hp": 65,
		"atk": 90,
		"def": 40,
		"spa": 62,
		"spd": 62,
		"spe": 75
	},
	"abilities": {
		"0": "Swarm",
		"H": "Sniper"
	},
	"weightkg": 29.5,
	"prevo": "Kakuna",
	"evoLevel": 10,
	"eggGroups": [
		"Bug"
	],
	"otherFormes": [
		"Beedrill-Mega"
	],
	"formeOrder": [
		"Beedrill",
		"Beedrill-Mega"
	]
},
beedrillmega: {
	"num": -15,
	"name": "Beedrill-Mega",
	"baseSpecies": "Beedrill",
	"forme": "Mega",
	"types": [
		"Bug",
		"Poison"
	],
	"baseStats": {
		"hp": 65,
		"atk": 120,
		"def": 40,
		"spa": 54,
		"spd": 54,
		"spe": 110
	},
	"abilities": {
		"0": "Adaptability"
	},
	"weightkg": 40.5,
	"eggGroups": [
		"Bug"
	],
	// "requiredItem": "Beedrillite"
},
pidgey: {
	"num": -16,
	"name": "Pidgey",
	"types": [
		"Normal",
		"Flying"
	],
	"baseStats": {
		"hp": 40,
		"atk": 45,
		"def": 40,
		"spa": 35,
		"spd": 35,
		"spe": 56
	},
	"abilities": {
		"0": "Keen Eye",
		"1": "Tangled Feet",
		"H": "Big Pecks"
	},
	"weightkg": 1.8,
	"evos": [
		"Pidgeotto"
	],
	"eggGroups": [
		"Flying"
	]
},
pidgeotto: {
	"num": -17,
	"name": "Pidgeotto",
	"types": [
		"Normal",
		"Flying"
	],
	"baseStats": {
		"hp": 63,
		"atk": 60,
		"def": 55,
		"spa": 50,
		"spd": 50,
		"spe": 71
	},
	"abilities": {
		"0": "Keen Eye",
		"1": "Tangled Feet",
		"H": "Big Pecks"
	},
	"weightkg": 30,
	"prevo": "Pidgey",
	"evoLevel": 18,
	"evos": [
		"Pidgeot"
	],
	"eggGroups": [
		"Flying"
	]
},
pidgeot: {
	"num": -18,
	"name": "Pidgeot",
	"types": [
		"Normal",
		"Flying"
	],
	"baseStats": {
		"hp": 83,
		"atk": 80,
		"def": 75,
		"spa": 70,
		"spd": 70,
		"spe": 101
	},
	"abilities": {
		"0": "Keen Eye",
		"1": "Tangled Feet",
		"H": "Big Pecks"
	},
	"weightkg": 39.5,
	"prevo": "Pidgeotto",
	"evoLevel": 36,
	"eggGroups": [
		"Flying"
	],
	"otherFormes": [
		"Pidgeot-Mega"
	],
	"formeOrder": [
		"Pidgeot",
		"Pidgeot-Mega"
	]
},
pidgeotmega: {
	"num": -18,
	"name": "Pidgeot-Mega",
	"baseSpecies": "Pidgeot",
	"forme": "Mega",
	"types": [
		"Normal",
		"Flying"
	],
	"baseStats": {
		"hp": 83,
		"atk": 80,
		"def": 77,
		"spa": 88,
		"spd": 88,
		"spe": 111
	},
	"abilities": {
		"0": "No Guard"
	},
	"weightkg": 50.5,
	"eggGroups": [
		"Flying"
	],
	// "requiredItem": "Pidgeotite"
},
rattata: {
	"num": -19,
	"name": "Rattata",
	"types": [
		"Normal"
	],
	"baseStats": {
		"hp": 30,
		"atk": 56,
		"def": 35,
		"spa": 30,
		"spd": 30,
		"spe": 72
	},
	"abilities": {
		"0": "Run Away",
		"1": "Guts",
		"H": "Hustle"
	},
	"weightkg": 3.5,
	"evos": [
		"Raticate"
	],
	"eggGroups": [
		"Field"
	],
	"otherFormes": [
		"Rattata-Alola"
	],
	"formeOrder": [
		"Rattata",
		"Rattata-Alola"
	]
},
rattataalola: {
	"num": -19,
	"name": "Rattata-Alola",
	"baseSpecies": "Rattata",
	"forme": "Alola",
	"types": [
		"Normal"
	],
	"baseStats": {
		"hp": 30,
		"atk": 56,
		"def": 35,
		"spa": 30,
		"spd": 30,
		"spe": 72
	},
	"abilities": {
		"0": "Gluttony",
		"1": "Hustle",
		"H": "Thick Fat"
	},
	"weightkg": 3.8,
	"evos": [
		"Raticate-Alola"
	],
	"eggGroups": [
		"Field"
	]
},
raticate: {
	"num": -20,
	"name": "Raticate",
	"types": [
		"Normal"
	],
	"baseStats": {
		"hp": 55,
		"atk": 81,
		"def": 60,
		"spa": 60,
		"spd": 60,
		"spe": 97
	},
	"abilities": {
		"0": "Run Away",
		"1": "Guts",
		"H": "Hustle"
	},
	"weightkg": 18.5,
	"prevo": "Rattata",
	"evoLevel": 20,
	"eggGroups": [
		"Field"
	],
	"otherFormes": [
		"Raticate-Alola",
		"Raticate-Alola-Totem"
	],
	"formeOrder": [
		"Raticate",
		"Raticate-Alola",
		"Raticate-Alola-Totem"
	]
},
raticatealola: {
	"num": -20,
	"name": "Raticate-Alola",
	"baseSpecies": "Raticate",
	"forme": "Alola",
	"types": [
		"Normal"
	],
	"baseStats": {
		"hp": 75,
		"atk": 71,
		"def": 70,
		"spa": 60,
		"spd": 60,
		"spe": 77
	},
	"abilities": {
		"0": "Gluttony",
		"1": "Hustle",
		"H": "Thick Fat"
	},
	"weightkg": 25.5,
	"prevo": "Rattata-Alola",
	"evoLevel": 20,
	"evoCondition": "at night",
	"eggGroups": [
		"Field"
	]
},
spearow: {
	"num": -21,
	"name": "Spearow",
	"types": [
		"Normal",
		"Flying"
	],
	"baseStats": {
		"hp": 40,
		"atk": 60,
		"def": 30,
		"spa": 31,
		"spd": 31,
		"spe": 70
	},
	"abilities": {
		"0": "Keen Eye",
		"H": "Sniper"
	},
	"weightkg": 2,
	"evos": [
		"Fearow"
	],
	"eggGroups": [
		"Flying"
	]
},
fearow: {
	"num": -22,
	"name": "Fearow",
	"types": [
		"Normal",
		"Flying"
	],
	"baseStats": {
		"hp": 65,
		"atk": 90,
		"def": 65,
		"spa": 61,
		"spd": 61,
		"spe": 100
	},
	"abilities": {
		"0": "Keen Eye",
		"H": "Sniper"
	},
	"weightkg": 38,
	"prevo": "Spearow",
	"evoLevel": 20,
	"eggGroups": [
		"Flying"
	]
},
ekans: {
	"num": -23,
	"name": "Ekans",
	"types": [
		"Poison"
	],
	"baseStats": {
		"hp": 35,
		"atk": 60,
		"def": 44,
		"spa": 47,
		"spd": 47,
		"spe": 55
	},
	"abilities": {
		"0": "Intimidate",
		"1": "Shed Skin",
		"H": "Unnerve"
	},
	"weightkg": 6.9,
	"evos": [
		"Arbok"
	],
	"eggGroups": [
		"Field",
		"Dragon"
	]
},
arbok: {
	"num": -24,
	"name": "Arbok",
	"types": [
		"Poison"
	],
	"baseStats": {
		"hp": 60,
		"atk": 95,
		"def": 69,
		"spa": 72,
		"spd": 72,
		"spe": 80
	},
	"abilities": {
		"0": "Intimidate",
		"1": "Shed Skin",
		"H": "Unnerve"
	},
	"weightkg": 65,
	"prevo": "Ekans",
	"evoLevel": 22,
	"eggGroups": [
		"Field",
		"Dragon"
	]
},
pikachu: {
	"num": -25,
	"name": "Pikachu",
	"types": [
		"Electric"
	],
	"baseStats": {
		"hp": 35,
		"atk": 55,
		"def": 40,
		"spa": 50,
		"spd": 50,
		"spe": 90
	},
	"abilities": {
		"0": "Static",
		"H": "Lightning Rod"
	},
	"weightkg": 6,
	"prevo": "Pichu",
	"evoType": "levelFriendship",
	"evos": [
		"Raichu",
		"Raichu-Alola"
	],
	"eggGroups": [
		"Field",
		"Fairy"
	],
	"otherFormes": [
		"Pikachu-Cosplay",
		"Pikachu-Rock-Star",
		"Pikachu-Belle",
		"Pikachu-Pop-Star",
		"Pikachu-PhD",
		"Pikachu-Libre",
		"Pikachu-Original",
		"Pikachu-Hoenn",
		"Pikachu-Sinnoh",
		"Pikachu-Unova",
		"Pikachu-Kalos",
		"Pikachu-Alola",
		"Pikachu-Partner",
		"Pikachu-Starter",
		"Pikachu-World"
	],
	"formeOrder": [
		"Pikachu",
		"Pikachu-Original",
		"Pikachu-Hoenn",
		"Pikachu-Sinnoh",
		"Pikachu-Unova",
		"Pikachu-Kalos",
		"Pikachu-Alola",
		"Pikachu-Partner",
		"Pikachu-Starter",
		"Pikachu-World",
		"Pikachu-Rock-Star",
		"Pikachu-Belle",
		"Pikachu-Pop-Star",
		"Pikachu-PhD",
		"Pikachu-Libre",
		"Pikachu-Cosplay"
	],
	"canGigantamax": "G-Max Volt Crash"
},
pikachucosplay: {
	"num": -25,
	"name": "Pikachu-Cosplay",
	"baseSpecies": "Pikachu",
	"forme": "Cosplay",
	"types": [
		"Electric"
	],
	"gender": "F",
	"baseStats": {
		"hp": 35,
		"atk": 55,
		"def": 40,
		"spa": 50,
		"spd": 50,
		"spe": 90
	},
	"abilities": {
		"0": "Lightning Rod"
	},
	"weightkg": 6,
	"eggGroups": [
		"Undiscovered"
	],
	"gen": 6
},
pikachurockstar: {
	"num": -25,
	"name": "Pikachu-Rock-Star",
	"baseSpecies": "Pikachu",
	"forme": "Rock-Star",
	"types": [
		"Electric"
	],
	"gender": "F",
	"baseStats": {
		"hp": 35,
		"atk": 55,
		"def": 40,
		"spa": 50,
		"spd": 50,
		"spe": 90
	},
	"abilities": {
		"0": "Lightning Rod"
	},
	"weightkg": 6,
	"eggGroups": [
		"Undiscovered"
	],
	"changesFrom": "Pikachu-Cosplay",
	"gen": 6
},
pikachubelle: {
	"num": -25,
	"name": "Pikachu-Belle",
	"baseSpecies": "Pikachu",
	"forme": "Belle",
	"types": [
		"Electric"
	],
	"gender": "F",
	"baseStats": {
		"hp": 35,
		"atk": 55,
		"def": 40,
		"spa": 50,
		"spd": 50,
		"spe": 90
	},
	"abilities": {
		"0": "Lightning Rod"
	},
	"weightkg": 6,
	"eggGroups": [
		"Undiscovered"
	],
	"changesFrom": "Pikachu-Cosplay",
	"gen": 6
},
pikachupopstar: {
	"num": -25,
	"name": "Pikachu-Pop-Star",
	"baseSpecies": "Pikachu",
	"forme": "Pop-Star",
	"types": [
		"Electric"
	],
	"gender": "F",
	"baseStats": {
		"hp": 35,
		"atk": 55,
		"def": 40,
		"spa": 50,
		"spd": 50,
		"spe": 90
	},
	"abilities": {
		"0": "Lightning Rod"
	},
	"weightkg": 6,
	"eggGroups": [
		"Undiscovered"
	],
	"changesFrom": "Pikachu-Cosplay",
	"gen": 6
},
pikachuphd: {
	"num": -25,
	"name": "Pikachu-PhD",
	"baseSpecies": "Pikachu",
	"forme": "PhD",
	"types": [
		"Electric"
	],
	"gender": "F",
	"baseStats": {
		"hp": 35,
		"atk": 55,
		"def": 40,
		"spa": 50,
		"spd": 50,
		"spe": 90
	},
	"abilities": {
		"0": "Lightning Rod"
	},
	"weightkg": 6,
	"eggGroups": [
		"Undiscovered"
	],
	"changesFrom": "Pikachu-Cosplay",
	"gen": 6
},
pikachulibre: {
	"num": -25,
	"name": "Pikachu-Libre",
	"baseSpecies": "Pikachu",
	"forme": "Libre",
	"types": [
		"Electric"
	],
	"gender": "F",
	"baseStats": {
		"hp": 35,
		"atk": 55,
		"def": 40,
		"spa": 50,
		"spd": 50,
		"spe": 90
	},
	"abilities": {
		"0": "Lightning Rod"
	},
	"weightkg": 6,
	"eggGroups": [
		"Undiscovered"
	],
	"changesFrom": "Pikachu-Cosplay",
	"gen": 6
},
pikachuoriginal: {
	"num": -25,
	"name": "Pikachu-Original",
	"baseSpecies": "Pikachu",
	"forme": "Original",
	"types": [
		"Electric"
	],
	"gender": "M",
	"baseStats": {
		"hp": 35,
		"atk": 55,
		"def": 40,
		"spa": 50,
		"spd": 50,
		"spe": 90
	},
	"abilities": {
		"0": "Static",
		"H": "Lightning Rod"
	},
	"weightkg": 6,
	"eggGroups": [
		"Undiscovered"
	],
	"gen": 7
},
pikachuhoenn: {
	"num": -25,
	"name": "Pikachu-Hoenn",
	"baseSpecies": "Pikachu",
	"forme": "Hoenn",
	"types": [
		"Electric"
	],
	"gender": "M",
	"baseStats": {
		"hp": 35,
		"atk": 55,
		"def": 40,
		"spa": 50,
		"spd": 50,
		"spe": 90
	},
	"abilities": {
		"0": "Static",
		"H": "Lightning Rod"
	},
	"weightkg": 6,
	"eggGroups": [
		"Undiscovered"
	],
	"gen": 7
},
pikachusinnoh: {
	"num": -25,
	"name": "Pikachu-Sinnoh",
	"baseSpecies": "Pikachu",
	"forme": "Sinnoh",
	"types": [
		"Electric"
	],
	"gender": "M",
	"baseStats": {
		"hp": 35,
		"atk": 55,
		"def": 40,
		"spa": 50,
		"spd": 50,
		"spe": 90
	},
	"abilities": {
		"0": "Static",
		"H": "Lightning Rod"
	},
	"weightkg": 6,
	"eggGroups": [
		"Undiscovered"
	],
	"gen": 7
},
pikachuunova: {
	"num": -25,
	"name": "Pikachu-Unova",
	"baseSpecies": "Pikachu",
	"forme": "Unova",
	"types": [
		"Electric"
	],
	"gender": "M",
	"baseStats": {
		"hp": 35,
		"atk": 55,
		"def": 40,
		"spa": 50,
		"spd": 50,
		"spe": 90
	},
	"abilities": {
		"0": "Static",
		"H": "Lightning Rod"
	},
	"weightkg": 6,
	"eggGroups": [
		"Undiscovered"
	],
	"gen": 7
},
pikachukalos: {
	"num": -25,
	"name": "Pikachu-Kalos",
	"baseSpecies": "Pikachu",
	"forme": "Kalos",
	"types": [
		"Electric"
	],
	"gender": "M",
	"baseStats": {
		"hp": 35,
		"atk": 55,
		"def": 40,
		"spa": 50,
		"spd": 50,
		"spe": 90
	},
	"abilities": {
		"0": "Static",
		"H": "Lightning Rod"
	},
	"weightkg": 6,
	"eggGroups": [
		"Undiscovered"
	],
	"gen": 7
},
pikachualola: {
	"num": -25,
	"name": "Pikachu-Alola",
	"baseSpecies": "Pikachu",
	"forme": "Alola",
	"types": [
		"Electric"
	],
	"gender": "M",
	"baseStats": {
		"hp": 35,
		"atk": 55,
		"def": 40,
		"spa": 50,
		"spd": 50,
		"spe": 90
	},
	"abilities": {
		"0": "Static",
		"H": "Lightning Rod"
	},
	"weightkg": 6,
	"eggGroups": [
		"Undiscovered"
	],
	"gen": 7
},
pikachupartner: {
	"num": -25,
	"name": "Pikachu-Partner",
	"baseSpecies": "Pikachu",
	"forme": "Partner",
	"types": [
		"Electric"
	],
	"gender": "M",
	"baseStats": {
		"hp": 35,
		"atk": 55,
		"def": 40,
		"spa": 50,
		"spd": 50,
		"spe": 90
	},
	"abilities": {
		"0": "Static",
		"H": "Lightning Rod"
	},
	"weightkg": 6,
	"eggGroups": [
		"Undiscovered"
	],
	"gen": 7
},
pikachustarter: {
	"num": -25,
	"name": "Pikachu-Starter",
	"baseSpecies": "Pikachu",
	"forme": "Starter",
	"types": [
		"Electric"
	],
	"baseStats": {
		"hp": 45,
		"atk": 80,
		"def": 50,
		"spa": 67,
		"spd": 67,
		"spe": 120
	},
	"abilities": {
		"0": "Static",
		"H": "Lightning Rod"
	},
	"weightkg": 6,
	"eggGroups": [
		"Undiscovered"
	]
},
pikachuworld: {
	"num": -25,
	"name": "Pikachu-World",
	"baseSpecies": "Pikachu",
	"forme": "World",
	"types": [
		"Electric"
	],
	"gender": "M",
	"baseStats": {
		"hp": 35,
		"atk": 55,
		"def": 40,
		"spa": 50,
		"spd": 50,
		"spe": 90
	},
	"abilities": {
		"0": "Static",
		"H": "Lightning Rod"
	},
	"weightkg": 6,
	"eggGroups": [
		"Undiscovered"
	],
	"gen": 8
},
raichu: {
	"num": -26,
	"name": "Raichu",
	"types": [
		"Electric"
	],
	"baseStats": {
		"hp": 60,
		"atk": 90,
		"def": 55,
		"spa": 85,
		"spd": 85,
		"spe": 110
	},
	"abilities": {
		"0": "Static",
		"H": "Lightning Rod"
	},
	"weightkg": 30,
	"prevo": "Pikachu",
	"evoType": "useItem",
	"evoItem": "Thunder Stone",
	"eggGroups": [
		"Field",
		"Fairy"
	],
	"otherFormes": [
		"Raichu-Alola"
	],
	"formeOrder": [
		"Raichu",
		"Raichu-Alola"
	]
},
raichualola: {
	"num": -26,
	"name": "Raichu-Alola",
	"baseSpecies": "Raichu",
	"forme": "Alola",
	"types": [
		"Electric",
		"Psychic"
	],
	"baseStats": {
		"hp": 60,
		"atk": 85,
		"def": 50,
		"spa": 90,
		"spd": 90,
		"spe": 110
	},
	"abilities": {
		"0": "Surge Surfer"
	},
	"weightkg": 21,
	"prevo": "Pikachu",
	"evoType": "useItem",
	"evoItem": "Thunder Stone",
	"eggGroups": [
		"Field",
		"Fairy"
	]
},
sandshrew: {
	"num": -27,
	"name": "Sandshrew",
	"types": [
		"Ground"
	],
	"baseStats": {
		"hp": 50,
		"atk": 75,
		"def": 85,
		"spa": 25,
		"spd": 25,
		"spe": 40
	},
	"abilities": {
		"0": "Sand Veil",
		"H": "Sand Rush"
	},
	"weightkg": 12,
	"evos": [
		"Sandslash"
	],
	"eggGroups": [
		"Field"
	],
	"otherFormes": [
		"Sandshrew-Alola"
	],
	"formeOrder": [
		"Sandshrew",
		"Sandshrew-Alola"
	]
},
sandshrewalola: {
	"num": -27,
	"name": "Sandshrew-Alola",
	"baseSpecies": "Sandshrew",
	"forme": "Alola",
	"types": [
		"Ice",
		"Rock"
	],
	"baseStats": {
		"hp": 50,
		"atk": 75,
		"def": 90,
		"spa": 22,
		"spd": 22,
		"spe": 40
	},
	"abilities": {
		"0": "Snow Cloak",
		"H": "Slush Rush"
	},
	"weightkg": 40,
	"evos": [
		"Sandslash-Alola"
	],
	"eggGroups": [
		"Field"
	]
},
sandslash: {
	"num": -28,
	"name": "Sandslash",
	"types": [
		"Ground"
	],
	"baseStats": {
		"hp": 75,
		"atk": 100,
		"def": 110,
		"spa": 50,
		"spd": 50,
		"spe": 65
	},
	"abilities": {
		"0": "Sand Veil",
		"H": "Sand Rush"
	},
	"weightkg": 29.5,
	"prevo": "Sandshrew",
	"evoLevel": 22,
	"eggGroups": [
		"Field"
	],
	"otherFormes": [
		"Sandslash-Alola"
	],
	"formeOrder": [
		"Sandslash",
		"Sandslash-Alola"
	]
},
sandslashalola: {
	"num": -28,
	"name": "Sandslash-Alola",
	"baseSpecies": "Sandslash",
	"forme": "Alola",
	"types": [
		"Ice",
		"Rock"
	],
	"baseStats": {
		"hp": 75,
		"atk": 100,
		"def": 120,
		"spa": 45,
		"spd": 45,
		"spe": 65
	},
	"abilities": {
		"0": "Snow Cloak",
		"H": "Slush Rush"
	},
	"weightkg": 55,
	"prevo": "Sandshrew-Alola",
	"evoType": "useItem",
	"evoItem": "Ice Stone",
	"eggGroups": [
		"Field"
	]
},
nidoranf: {
	"num": -29,
	"name": "Nidoran-F",
	"types": [
		"Poison"
	],
	"gender": "F",
	"baseStats": {
		"hp": 55,
		"atk": 47,
		"def": 52,
		"spa": 40,
		"spd": 40,
		"spe": 41
	},
	"abilities": {
		"0": "Poison Point",
		"1": "Rivalry",
		"H": "Hustle"
	},
	"weightkg": 7,
	"evos": [
		"Nidorina"
	],
	"eggGroups": [
		"Monster",
		"Field"
	]
},
nidorina: {
	"num": -30,
	"name": "Nidorina",
	"types": [
		"Poison"
	],
	"gender": "F",
	"baseStats": {
		"hp": 70,
		"atk": 62,
		"def": 67,
		"spa": 55,
		"spd": 55,
		"spe": 56
	},
	"abilities": {
		"0": "Poison Point",
		"1": "Rivalry",
		"H": "Hustle"
	},
	"weightkg": 20,
	"prevo": "Nidoran-F",
	"evoLevel": 16,
	"evos": [
		"Nidoqueen"
	],
	"eggGroups": [
		"Undiscovered"
	]
},
nidoqueen: {
	"num": -31,
	"name": "Nidoqueen",
	"types": [
		"Poison",
		"Ground"
	],
	"gender": "F",
	"baseStats": {
		"hp": 90,
		"atk": 92,
		"def": 87,
		"spa": 80,
		"spd": 80,
		"spe": 76
	},
	"abilities": {
		"0": "Poison Point",
		"1": "Rivalry",
		"H": "Sheer Force"
	},
	"weightkg": 60,
	"prevo": "Nidorina",
	"evoType": "useItem",
	"evoItem": "Moon Stone",
	"eggGroups": [
		"Undiscovered"
	]
},
nidoranm: {
	"num": -32,
	"name": "Nidoran-M",
	"types": [
		"Poison"
	],
	"gender": "M",
	"baseStats": {
		"hp": 46,
		"atk": 57,
		"def": 40,
		"spa": 40,
		"spd": 40,
		"spe": 50
	},
	"abilities": {
		"0": "Poison Point",
		"1": "Rivalry",
		"H": "Hustle"
	},
	"weightkg": 9,
	"evos": [
		"Nidorino"
	],
	"eggGroups": [
		"Monster",
		"Field"
	]
},
nidorino: {
	"num": -33,
	"name": "Nidorino",
	"types": [
		"Poison"
	],
	"gender": "M",
	"baseStats": {
		"hp": 61,
		"atk": 72,
		"def": 57,
		"spa": 55,
		"spd": 55,
		"spe": 65
	},
	"abilities": {
		"0": "Poison Point",
		"1": "Rivalry",
		"H": "Hustle"
	},
	"weightkg": 19.5,
	"prevo": "Nidoran-M",
	"evoLevel": 16,
	"evos": [
		"Nidoking"
	],
	"eggGroups": [
		"Monster",
		"Field"
	]
},
nidoking: {
	"num": -34,
	"name": "Nidoking",
	"types": [
		"Poison",
		"Ground"
	],
	"gender": "M",
	"baseStats": {
		"hp": 81,
		"atk": 102,
		"def": 77,
		"spa": 80,
		"spd": 80,
		"spe": 85
	},
	"abilities": {
		"0": "Poison Point",
		"1": "Rivalry",
		"H": "Sheer Force"
	},
	"weightkg": 62,
	"prevo": "Nidorino",
	"evoType": "useItem",
	"evoItem": "Moon Stone",
	"eggGroups": [
		"Monster",
		"Field"
	]
},
clefairy: {
	"num": -35,
	"name": "Clefairy",
	"types": [
		"Normal"
	],
	"genderRatio": {
		"M": 0.25,
		"F": 0.75
	},
	"baseStats": {
		"hp": 70,
		"atk": 45,
		"def": 48,
		"spa": 62,
		"spd": 62,
		"spe": 35
	},
	"abilities": {
		"0": "Cute Charm",
		"1": "Magic Guard",
		"H": "Friend Guard"
	},
	"weightkg": 7.5,
	"prevo": "Cleffa",
	"evoType": "levelFriendship",
	"evos": [
		"Clefable"
	],
	"eggGroups": [
		"Fairy"
	]
},
clefable: {
	"num": -36,
	"name": "Clefable",
	"types": [
		"Normal"
	],
	"genderRatio": {
		"M": 0.25,
		"F": 0.75
	},
	"baseStats": {
		"hp": 95,
		"atk": 70,
		"def": 73,
		"spa": 92,
		"spd": 92,
		"spe": 60
	},
	"abilities": {
		"0": "Cute Charm",
		"1": "Magic Guard",
		"H": "Unaware"
	},
	"weightkg": 40,
	"prevo": "Clefairy",
	"evoType": "useItem",
	"evoItem": "Moon Stone",
	"eggGroups": [
		"Fairy"
	]
},
vulpix: {
	"num": -37,
	"name": "Vulpix",
	"types": [
		"Fire"
	],
	"genderRatio": {
		"M": 0.25,
		"F": 0.75
	},
	"baseStats": {
		"hp": 38,
		"atk": 41,
		"def": 40,
		"spa": 57,
		"spd": 57,
		"spe": 65
	},
	"abilities": {
		"0": "Flash Fire",
		"H": "Drought"
	},
	"weightkg": 9.9,
	"evos": [
		"Ninetales"
	],
	"eggGroups": [
		"Field"
	],
	"otherFormes": [
		"Vulpix-Alola"
	],
	"formeOrder": [
		"Vulpix",
		"Vulpix-Alola"
	]
},
vulpixalola: {
	"num": -37,
	"name": "Vulpix-Alola",
	"baseSpecies": "Vulpix",
	"forme": "Alola",
	"types": [
		"Ice"
	],
	"genderRatio": {
		"M": 0.25,
		"F": 0.75
	},
	"baseStats": {
		"hp": 38,
		"atk": 41,
		"def": 40,
		"spa": 57,
		"spd": 57,
		"spe": 65
	},
	"abilities": {
		"0": "Snow Cloak",
		"H": "Snow Warning"
	},
	"weightkg": 9.9,
	"evos": [
		"Ninetales-Alola"
	],
	"eggGroups": [
		"Field"
	]
},
ninetales: {
	"num": -38,
	"name": "Ninetales",
	"types": [
		"Fire"
	],
	"genderRatio": {
		"M": 0.25,
		"F": 0.75
	},
	"baseStats": {
		"hp": 73,
		"atk": 76,
		"def": 75,
		"spa": 90,
		"spd": 90,
		"spe": 100
	},
	"abilities": {
		"0": "Flash Fire",
		"H": "Drought"
	},
	"weightkg": 19.9,
	"prevo": "Vulpix",
	"evoType": "useItem",
	"evoItem": "Fire Stone",
	"eggGroups": [
		"Field"
	],
	"otherFormes": [
		"Ninetales-Alola"
	],
	"formeOrder": [
		"Ninetales",
		"Ninetales-Alola"
	]
},
ninetalesalola: {
	"num": -38,
	"name": "Ninetales-Alola",
	"baseSpecies": "Ninetales",
	"forme": "Alola",
	"types": [
		"Ice",
		"Normal"
	],
	"genderRatio": {
		"M": 0.25,
		"F": 0.75
	},
	"baseStats": {
		"hp": 73,
		"atk": 67,
		"def": 75,
		"spa": 90,
		"spd": 90,
		"spe": 109
	},
	"abilities": {
		"0": "Snow Cloak",
		"H": "Snow Warning"
	},
	"weightkg": 19.9,
	"prevo": "Vulpix-Alola",
	"evoType": "useItem",
	"evoItem": "Ice Stone",
	"eggGroups": [
		"Field"
	]
},
jigglypuff: {
	"num": -39,
	"name": "Jigglypuff",
	"types": [
		"Normal"
	],
	"genderRatio": {
		"M": 0.25,
		"F": 0.75
	},
	"baseStats": {
		"hp": 115,
		"atk": 45,
		"def": 20,
		"spa": 35,
		"spd": 35,
		"spe": 20
	},
	"abilities": {
		"0": "Cute Charm",
		"1": "Competitive",
		"H": "Friend Guard"
	},
	"weightkg": 5.5,
	"prevo": "Igglybuff",
	"evoType": "levelFriendship",
	"evos": [
		"Wigglytuff"
	],
	"eggGroups": [
		"Fairy"
	]
},
wigglytuff: {
	"num": -40,
	"name": "Wigglytuff",
	"types": [
		"Normal"
	],
	"genderRatio": {
		"M": 0.25,
		"F": 0.75
	},
	"baseStats": {
		"hp": 140,
		"atk": 70,
		"def": 45,
		"spa": 67,
		"spd": 67,
		"spe": 45
	},
	"abilities": {
		"0": "Cute Charm",
		"1": "Competitive",
		"H": "Frisk"
	},
	"weightkg": 12,
	"prevo": "Jigglypuff",
	"evoType": "useItem",
	"evoItem": "Moon Stone",
	"eggGroups": [
		"Fairy"
	]
},
zubat: {
	"num": -41,
	"name": "Zubat",
	"types": [
		"Poison",
		"Flying"
	],
	"baseStats": {
		"hp": 40,
		"atk": 45,
		"def": 35,
		"spa": 35,
		"spd": 35,
		"spe": 55
	},
	"abilities": {
		"0": "Inner Focus",
		"H": "Infiltrator"
	},
	"weightkg": 7.5,
	"evos": [
		"Golbat"
	],
	"eggGroups": [
		"Flying"
	]
},
golbat: {
	"num": -42,
	"name": "Golbat",
	"types": [
		"Poison",
		"Flying"
	],
	"baseStats": {
		"hp": 75,
		"atk": 80,
		"def": 70,
		"spa": 70,
		"spd": 70,
		"spe": 90
	},
	"abilities": {
		"0": "Inner Focus",
		"H": "Infiltrator"
	},
	"weightkg": 55,
	"prevo": "Zubat",
	"evoLevel": 22,
	"evos": [
		"Crobat"
	],
	"eggGroups": [
		"Flying"
	]
},
oddish: {
	"num": -43,
	"name": "Oddish",
	"types": [
		"Grass",
		"Poison"
	],
	"baseStats": {
		"hp": 45,
		"atk": 50,
		"def": 55,
		"spa": 70,
		"spd": 70,
		"spe": 30
	},
	"abilities": {
		"0": "Chlorophyll",
		"H": "Run Away"
	},
	"weightkg": 5.4,
	"evos": [
		"Gloom"
	],
	"eggGroups": [
		"Grass"
	]
},
gloom: {
	"num": -44,
	"name": "Gloom",
	"types": [
		"Grass",
		"Poison"
	],
	"baseStats": {
		"hp": 60,
		"atk": 65,
		"def": 70,
		"spa": 80,
		"spd": 80,
		"spe": 40
	},
	"abilities": {
		"0": "Chlorophyll",
		"H": "Stench"
	},
	"weightkg": 8.6,
	"prevo": "Oddish",
	"evoLevel": 21,
	"evos": [
		"Vileplume",
		"Bellossom"
	],
	"eggGroups": [
		"Grass"
	]
},
vileplume: {
	"num": -45,
	"name": "Vileplume",
	"types": [
		"Grass",
		"Poison"
	],
	"baseStats": {
		"hp": 75,
		"atk": 80,
		"def": 85,
		"spa": 100,
		"spd": 100,
		"spe": 50
	},
	"abilities": {
		"0": "Chlorophyll",
		"H": "Effect Spore"
	},
	"weightkg": 18.6,
	"prevo": "Gloom",
	"evoType": "useItem",
	"evoItem": "Leaf Stone",
	"eggGroups": [
		"Grass"
	]
},
paras: {
	"num": -46,
	"name": "Paras",
	"types": [
		"Bug",
		"Grass"
	],
	"baseStats": {
		"hp": 35,
		"atk": 70,
		"def": 55,
		"spa": 50,
		"spd": 50,
		"spe": 25
	},
	"abilities": {
		"0": "Effect Spore",
		"1": "Dry Skin",
		"H": "Damp"
	},
	"weightkg": 5.4,
	"evos": [
		"Parasect"
	],
	"eggGroups": [
		"Bug",
		"Grass"
	]
},
parasect: {
	"num": -47,
	"name": "Parasect",
	"types": [
		"Bug",
		"Grass"
	],
	"baseStats": {
		"hp": 60,
		"atk": 95,
		"def": 80,
		"spa": 70,
		"spd": 70,
		"spe": 30
	},
	"abilities": {
		"0": "Effect Spore",
		"1": "Dry Skin",
		"H": "Damp"
	},
	"weightkg": 29.5,
	"prevo": "Paras",
	"evoLevel": 24,
	"eggGroups": [
		"Bug",
		"Grass"
	]
},
venonat: {
	"num": -48,
	"name": "Venonat",
	"types": [
		"Bug",
		"Poison"
	],
	"baseStats": {
		"hp": 60,
		"atk": 55,
		"def": 50,
		"spa": 47,
		"spd": 47,
		"spe": 45
	},
	"abilities": {
		"0": "Compound Eyes",
		"1": "Tinted Lens",
		"H": "Run Away"
	},
	"weightkg": 30,
	"evos": [
		"Venomoth"
	],
	"eggGroups": [
		"Bug"
	]
},
venomoth: {
	"num": -49,
	"name": "Venomoth",
	"types": [
		"Bug",
		"Poison"
	],
	"baseStats": {
		"hp": 70,
		"atk": 65,
		"def": 60,
		"spa": 82,
		"spd": 82,
		"spe": 90
	},
	"abilities": {
		"0": "Shield Dust",
		"1": "Tinted Lens",
		"H": "Wonder Skin"
	},
	"weightkg": 12.5,
	"prevo": "Venonat",
	"evoLevel": 31,
	"eggGroups": [
		"Bug"
	]
},
diglett: {
	"num": -50,
	"name": "Diglett",
	"types": [
		"Ground"
	],
	"baseStats": {
		"hp": 10,
		"atk": 55,
		"def": 25,
		"spa": 40,
		"spd": 40,
		"spe": 95
	},
	"abilities": {
		"0": "Sand Veil",
		"1": "Arena Trap",
		"H": "Sand Force"
	},
	"weightkg": 0.8,
	"evos": [
		"Dugtrio"
	],
	"eggGroups": [
		"Field"
	],
	"otherFormes": [
		"Diglett-Alola"
	],
	"formeOrder": [
		"Diglett",
		"Diglett-Alola"
	]
},
diglettalola: {
	"num": -50,
	"name": "Diglett-Alola",
	"baseSpecies": "Diglett",
	"forme": "Alola",
	"types": [
		"Ground",
		"Rock"
	],
	"baseStats": {
		"hp": 10,
		"atk": 55,
		"def": 30,
		"spa": 40,
		"spd": 40,
		"spe": 90
	},
	"abilities": {
		"0": "Sand Veil",
		"1": "Tangling Hair",
		"H": "Sand Force"
	},
	"weightkg": 1,
	"evos": [
		"Dugtrio-Alola"
	],
	"eggGroups": [
		"Field"
	]
},
dugtrio: {
	"num": -51,
	"name": "Dugtrio",
	"types": [
		"Ground"
	],
	"baseStats": {
		"hp": 35,
		"atk": 100,
		"def": 50,
		"spa": 60,
		"spd": 60,
		"spe": 120
	},
	"abilities": {
		"0": "Sand Veil",
		"1": "Arena Trap",
		"H": "Sand Force"
	},
	"weightkg": 33.3,
	"prevo": "Diglett",
	"evoLevel": 26,
	"eggGroups": [
		"Field"
	],
	"otherFormes": [
		"Dugtrio-Alola"
	],
	"formeOrder": [
		"Dugtrio",
		"Dugtrio-Alola"
	]
},
dugtrioalola: {
	"num": -51,
	"name": "Dugtrio-Alola",
	"baseSpecies": "Dugtrio",
	"forme": "Alola",
	"types": [
		"Ground",
		"Rock"
	],
	"baseStats": {
		"hp": 35,
		"atk": 100,
		"def": 60,
		"spa": 60,
		"spd": 60,
		"spe": 110
	},
	"abilities": {
		"0": "Sand Veil",
		"1": "Tangling Hair",
		"H": "Sand Force"
	},
	"weightkg": 66.6,
	"prevo": "Diglett-Alola",
	"evoLevel": 26,
	"eggGroups": [
		"Field"
	]
},
meowth: {
	"num": -52,
	"name": "Meowth",
	"types": [
		"Normal"
	],
	"baseStats": {
		"hp": 40,
		"atk": 45,
		"def": 35,
		"spa": 40,
		"spd": 40,
		"spe": 90
	},
	"abilities": {
		"0": "Pickup",
		"1": "Technician",
		"H": "Unnerve"
	},
	"weightkg": 4.2,
	"evos": [
		"Persian"
	],
	"eggGroups": [
		"Field"
	],
	"otherFormes": [
		"Meowth-Alola",
		"Meowth-Galar"
	],
	"formeOrder": [
		"Meowth",
		"Meowth-Alola",
		"Meowth-Galar"
	],
	"canGigantamax": "G-Max Gold Rush"
},
meowthalola: {
	"num": -52,
	"name": "Meowth-Alola",
	"baseSpecies": "Meowth",
	"forme": "Alola",
	"types": [
		"Normal"
	],
	"baseStats": {
		"hp": 40,
		"atk": 35,
		"def": 35,
		"spa": 45,
		"spd": 45,
		"spe": 90
	},
	"abilities": {
		"0": "Pickup",
		"1": "Technician",
		"H": "Rattled"
	},
	"weightkg": 4.2,
	"evos": [
		"Persian-Alola"
	],
	"eggGroups": [
		"Field"
	]
},
meowthgalar: {
	"num": -52,
	"name": "Meowth-Galar",
	"baseSpecies": "Meowth",
	"forme": "Galar",
	"types": [
		"Rock"
	],
	"baseStats": {
		"hp": 50,
		"atk": 65,
		"def": 55,
		"spa": 40,
		"spd": 40,
		"spe": 40
	},
	"abilities": {
		"0": "Pickup",
		"1": "Tough Claws",
		"H": "Unnerve"
	},
	"weightkg": 7.5,
	"evos": [
		"Perrserker"
	],
	"eggGroups": [
		"Field"
	]
},
persian: {
	"num": -53,
	"name": "Persian",
	"types": [
		"Normal"
	],
	"baseStats": {
		"hp": 65,
		"atk": 70,
		"def": 60,
		"spa": 65,
		"spd": 65,
		"spe": 115
	},
	"abilities": {
		"0": "Limber",
		"1": "Technician",
		"H": "Unnerve"
	},
	"weightkg": 32,
	"prevo": "Meowth",
	"evoLevel": 28,
	"eggGroups": [
		"Field"
	],
	"otherFormes": [
		"Persian-Alola"
	],
	"formeOrder": [
		"Persian",
		"Persian-Alola"
	]
},
persianalola: {
	"num": -53,
	"name": "Persian-Alola",
	"baseSpecies": "Persian",
	"forme": "Alola",
	"types": [
		"Normal"
	],
	"baseStats": {
		"hp": 65,
		"atk": 60,
		"def": 60,
		"spa": 70,
		"spd": 70,
		"spe": 115
	},
	"abilities": {
		"0": "Fur Coat",
		"1": "Technician",
		"H": "Rattled"
	},
	"weightkg": 33,
	"prevo": "Meowth-Alola",
	"evoType": "levelFriendship",
	"eggGroups": [
		"Field"
	]
},
psyduck: {
	"num": -54,
	"name": "Psyduck",
	"types": [
		"Water"
	],
	"baseStats": {
		"hp": 50,
		"atk": 52,
		"def": 48,
		"spa": 57,
		"spd": 57,
		"spe": 55
	},
	"abilities": {
		"0": "Damp",
		"1": "Cloud Nine",
		"H": "Swift Swim"
	},
	"weightkg": 19.6,
	"evos": [
		"Golduck"
	],
	"eggGroups": [
		"Water 1",
		"Field"
	]
},
golduck: {
	"num": -55,
	"name": "Golduck",
	"types": [
		"Water"
	],
	"baseStats": {
		"hp": 80,
		"atk": 82,
		"def": 78,
		"spa": 87,
		"spd": 87,
		"spe": 85
	},
	"abilities": {
		"0": "Damp",
		"1": "Cloud Nine",
		"H": "Swift Swim"
	},
	"weightkg": 76.6,
	"prevo": "Psyduck",
	"evoLevel": 33,
	"eggGroups": [
		"Water 1",
		"Field"
	]
},
mankey: {
	"num": -56,
	"name": "Mankey",
	"types": [
		"Fighting"
	],
	"baseStats": {
		"hp": 40,
		"atk": 80,
		"def": 35,
		"spa": 40,
		"spd": 40,
		"spe": 70
	},
	"abilities": {
		"0": "Vital Spirit",
		"1": "Anger Point",
		"H": "Defiant"
	},
	"weightkg": 28,
	"evos": [
		"Primeape"
	],
	"eggGroups": [
		"Field"
	]
},
primeape: {
	"num": -57,
	"name": "Primeape",
	"types": [
		"Fighting"
	],
	"baseStats": {
		"hp": 65,
		"atk": 105,
		"def": 60,
		"spa": 65,
		"spd": 65,
		"spe": 95
	},
	"abilities": {
		"0": "Vital Spirit",
		"1": "Anger Point",
		"H": "Defiant"
	},
	"weightkg": 32,
	"prevo": "Mankey",
	"evoLevel": 28,
	"eggGroups": [
		"Field"
	]
},
growlithe: {
	"num": -58,
	"name": "Growlithe",
	"types": [
		"Fire"
	],
	"genderRatio": {
		"M": 0.75,
		"F": 0.25
	},
	"baseStats": {
		"hp": 55,
		"atk": 70,
		"def": 45,
		"spa": 60,
		"spd": 60,
		"spe": 60
	},
	"abilities": {
		"0": "Intimidate",
		"1": "Flash Fire",
		"H": "Justified"
	},
	"weightkg": 19,
	"evos": [
		"Arcanine"
	],
	"eggGroups": [
		"Field"
	],
	"otherFormes": [
		"Growlithe-Hisui"
	],
	"formeOrder": [
		"Growlithe",
		"Growlithe-Hisui"
	]
},
growlithehisui: {
	"num": -58,
	"name": "Growlithe-Hisui",
	"baseSpecies": "Growlithe",
	"forme": "Hisui",
	"types": [
		"Fire",
		"Rock"
	],
	"genderRatio": {
		"M": 0.75,
		"F": 0.25
	},
	"baseStats": {
		"hp": 60,
		"atk": 75,
		"def": 45,
		"spa": 57,
		"spd": 57,
		"spe": 55
	},
	"abilities": {
		"0": "Intimidate",
		"1": "Flash Fire",
		"H": "Justified"
	},
	"weightkg": 22.7,
	"evos": [
		"Arcanine-Hisui"
	],
	"eggGroups": [
		"Field"
	]
},
arcanine: {
	"num": -59,
	"name": "Arcanine",
	"types": [
		"Fire"
	],
	"genderRatio": {
		"M": 0.75,
		"F": 0.25
	},
	"baseStats": {
		"hp": 90,
		"atk": 110,
		"def": 80,
		"spa": 90,
		"spd": 90,
		"spe": 95
	},
	"abilities": {
		"0": "Intimidate",
		"1": "Flash Fire",
		"H": "Justified"
	},
	"weightkg": 155,
	"prevo": "Growlithe",
	"evoType": "useItem",
	"evoItem": "Fire Stone",
	"eggGroups": [
		"Field"
	],
	"otherFormes": [
		"Arcanine-Hisui"
	],
	"formeOrder": [
		"Arcanine",
		"Arcanine-Hisui"
	]
},
arcaninehisui: {
	"num": -59,
	"name": "Arcanine-Hisui",
	"baseSpecies": "Arcanine",
	"forme": "Hisui",
	"types": [
		"Fire",
		"Rock"
	],
	"genderRatio": {
		"M": 0.75,
		"F": 0.25
	},
	"baseStats": {
		"hp": 95,
		"atk": 115,
		"def": 80,
		"spa": 87,
		"spd": 87,
		"spe": 90
	},
	"abilities": {
		"0": "Intimidate",
		"1": "Flash Fire",
		"H": "Justified"
	},
	"weightkg": 168,
	"prevo": "Growlithe-Hisui",
	"evoType": "useItem",
	"evoItem": "Fire Stone",
	"eggGroups": [
		"Field"
	]
},
poliwag: {
	"num": -60,
	"name": "Poliwag",
	"types": [
		"Water"
	],
	"baseStats": {
		"hp": 40,
		"atk": 50,
		"def": 40,
		"spa": 40,
		"spd": 40,
		"spe": 90
	},
	"abilities": {
		"0": "Water Absorb",
		"1": "Damp",
		"H": "Swift Swim"
	},
	"weightkg": 12.4,
	"evos": [
		"Poliwhirl"
	],
	"eggGroups": [
		"Water 1"
	]
},
poliwhirl: {
	"num": -61,
	"name": "Poliwhirl",
	"types": [
		"Water"
	],
	"baseStats": {
		"hp": 65,
		"atk": 65,
		"def": 65,
		"spa": 50,
		"spd": 50,
		"spe": 90
	},
	"abilities": {
		"0": "Water Absorb",
		"1": "Damp",
		"H": "Swift Swim"
	},
	"weightkg": 20,
	"prevo": "Poliwag",
	"evoLevel": 25,
	"evos": [
		"Poliwrath",
		"Politoed"
	],
	"eggGroups": [
		"Water 1"
	]
},
poliwrath: {
	"num": -62,
	"name": "Poliwrath",
	"types": [
		"Water",
		"Fighting"
	],
	"baseStats": {
		"hp": 90,
		"atk": 95,
		"def": 95,
		"spa": 80,
		"spd": 80,
		"spe": 70
	},
	"abilities": {
		"0": "Water Absorb",
		"1": "Damp",
		"H": "Swift Swim"
	},
	"weightkg": 54,
	"prevo": "Poliwhirl",
	"evoType": "useItem",
	"evoItem": "Water Stone",
	"eggGroups": [
		"Water 1"
	]
},
abra: {
	"num": -63,
	"name": "Abra",
	"types": [
		"Psychic"
	],
	"genderRatio": {
		"M": 0.75,
		"F": 0.25
	},
	"baseStats": {
		"hp": 25,
		"atk": 20,
		"def": 15,
		"spa": 80,
		"spd": 80,
		"spe": 90
	},
	"abilities": {
		"0": "Synchronize",
		"1": "Inner Focus",
		"H": "Magic Guard"
	},
	"weightkg": 19.5,
	"evos": [
		"Kadabra"
	],
	"eggGroups": [
		"Human-Like"
	]
},
kadabra: {
	"num": -64,
	"name": "Kadabra",
	"types": [
		"Psychic"
	],
	"genderRatio": {
		"M": 0.75,
		"F": 0.25
	},
	"baseStats": {
		"hp": 40,
		"atk": 35,
		"def": 30,
		"spa": 95,
		"spd": 95,
		"spe": 105
	},
	"abilities": {
		"0": "Synchronize",
		"1": "Inner Focus",
		"H": "Magic Guard"
	},
	"weightkg": 56.5,
	"prevo": "Abra",
	"evoLevel": 16,
	"evos": [
		"Alakazam"
	],
	"eggGroups": [
		"Human-Like"
	]
},
alakazam: {
	"num": -65,
	"name": "Alakazam",
	"types": [
		"Psychic"
	],
	"genderRatio": {
		"M": 0.75,
		"F": 0.25
	},
	"baseStats": {
		"hp": 55,
		"atk": 50,
		"def": 45,
		"spa": 115,
		"spd": 115,
		"spe": 120
	},
	"abilities": {
		"0": "Synchronize",
		"1": "Inner Focus",
		"H": "Magic Guard"
	},
	"weightkg": 48,
	"prevo": "Kadabra",
	"evoType": "trade",
	"eggGroups": [
		"Human-Like"
	],
	"otherFormes": [
		"Alakazam-Mega"
	],
	"formeOrder": [
		"Alakazam",
		"Alakazam-Mega"
	]
},
alakazammega: {
	"num": -65,
	"name": "Alakazam-Mega",
	"baseSpecies": "Alakazam",
	"forme": "Mega",
	"types": [
		"Psychic"
	],
	"genderRatio": {
		"M": 0.75,
		"F": 0.25
	},
	"baseStats": {
		"hp": 55,
		"atk": 50,
		"def": 55,
		"spa": 127,
		"spd": 127,
		"spe": 135
	},
	"abilities": {
		"0": "Trace"
	},
	"weightkg": 48,
	"eggGroups": [
		"Human-Like"
	],
	// "requiredItem": "Alakazite"
},
machop: {
	"num": -66,
	"name": "Machop",
	"types": [
		"Fighting"
	],
	"genderRatio": {
		"M": 0.75,
		"F": 0.25
	},
	"baseStats": {
		"hp": 70,
		"atk": 80,
		"def": 50,
		"spa": 35,
		"spd": 35,
		"spe": 35
	},
	"abilities": {
		"0": "Guts",
		"1": "No Guard",
		"H": "Steadfast"
	},
	"weightkg": 19.5,
	"evos": [
		"Machoke"
	],
	"eggGroups": [
		"Human-Like"
	]
},
machoke: {
	"num": -67,
	"name": "Machoke",
	"types": [
		"Fighting"
	],
	"genderRatio": {
		"M": 0.75,
		"F": 0.25
	},
	"baseStats": {
		"hp": 80,
		"atk": 100,
		"def": 70,
		"spa": 55,
		"spd": 55,
		"spe": 45
	},
	"abilities": {
		"0": "Guts",
		"1": "No Guard",
		"H": "Steadfast"
	},
	"weightkg": 70.5,
	"prevo": "Machop",
	"evoLevel": 28,
	"evos": [
		"Machamp"
	],
	"eggGroups": [
		"Human-Like"
	]
},
machamp: {
	"num": -68,
	"name": "Machamp",
	"types": [
		"Fighting"
	],
	"genderRatio": {
		"M": 0.75,
		"F": 0.25
	},
	"baseStats": {
		"hp": 90,
		"atk": 130,
		"def": 80,
		"spa": 75,
		"spd": 75,
		"spe": 55
	},
	"abilities": {
		"0": "Guts",
		"1": "No Guard",
		"H": "Steadfast"
	},
	"weightkg": 130,
	"prevo": "Machoke",
	"evoType": "trade",
	"eggGroups": [
		"Human-Like"
	],
	"canGigantamax": "G-Max Chi Strike"
},
bellsprout: {
	"num": -69,
	"name": "Bellsprout",
	"types": [
		"Grass",
		"Poison"
	],
	"baseStats": {
		"hp": 50,
		"atk": 75,
		"def": 35,
		"spa": 50,
		"spd": 50,
		"spe": 40
	},
	"abilities": {
		"0": "Chlorophyll",
		"H": "Gluttony"
	},
	"weightkg": 4,
	"evos": [
		"Weepinbell"
	],
	"eggGroups": [
		"Grass"
	]
},
weepinbell: {
	"num": -70,
	"name": "Weepinbell",
	"types": [
		"Grass",
		"Poison"
	],
	"baseStats": {
		"hp": 65,
		"atk": 90,
		"def": 50,
		"spa": 65,
		"spd": 65,
		"spe": 55
	},
	"abilities": {
		"0": "Chlorophyll",
		"H": "Gluttony"
	},
	"weightkg": 6.4,
	"prevo": "Bellsprout",
	"evoLevel": 21,
	"evos": [
		"Victreebel"
	],
	"eggGroups": [
		"Grass"
	]
},
victreebel: {
	"num": -71,
	"name": "Victreebel",
	"types": [
		"Grass",
		"Poison"
	],
	"baseStats": {
		"hp": 80,
		"atk": 105,
		"def": 65,
		"spa": 85,
		"spd": 85,
		"spe": 70
	},
	"abilities": {
		"0": "Chlorophyll",
		"H": "Gluttony"
	},
	"weightkg": 15.5,
	"prevo": "Weepinbell",
	"evoType": "useItem",
	"evoItem": "Leaf Stone",
	"eggGroups": [
		"Grass"
	]
},
tentacool: {
	"num": -72,
	"name": "Tentacool",
	"types": [
		"Water",
		"Poison"
	],
	"baseStats": {
		"hp": 40,
		"atk": 40,
		"def": 35,
		"spa": 75,
		"spd": 75,
		"spe": 70
	},
	"abilities": {
		"0": "Clear Body",
		"1": "Liquid Ooze",
		"H": "Rain Dish"
	},
	"weightkg": 45.5,
	"evos": [
		"Tentacruel"
	],
	"eggGroups": [
		"Water 3"
	]
},
tentacruel: {
	"num": -73,
	"name": "Tentacruel",
	"types": [
		"Water",
		"Poison"
	],
	"baseStats": {
		"hp": 80,
		"atk": 70,
		"def": 65,
		"spa": 100,
		"spd": 100,
		"spe": 100
	},
	"abilities": {
		"0": "Clear Body",
		"1": "Liquid Ooze",
		"H": "Rain Dish"
	},
	"weightkg": 55,
	"prevo": "Tentacool",
	"evoLevel": 30,
	"eggGroups": [
		"Water 3"
	]
},
geodude: {
	"num": -74,
	"name": "Geodude",
	"types": [
		"Rock",
		"Ground"
	],
	"baseStats": {
		"hp": 40,
		"atk": 80,
		"def": 100,
		"spa": 30,
		"spd": 30,
		"spe": 20
	},
	"abilities": {
		"0": "Rock Head",
		"1": "Sturdy",
		"H": "Sand Veil"
	},
	"weightkg": 20,
	"evos": [
		"Graveler"
	],
	"eggGroups": [
		"Mineral"
	],
	"otherFormes": [
		"Geodude-Alola"
	],
	"formeOrder": [
		"Geodude",
		"Geodude-Alola"
	]
},
geodudealola: {
	"num": -74,
	"name": "Geodude-Alola",
	"baseSpecies": "Geodude",
	"forme": "Alola",
	"types": [
		"Rock",
		"Electric"
	],
	"baseStats": {
		"hp": 40,
		"atk": 80,
		"def": 100,
		"spa": 30,
		"spd": 30,
		"spe": 20
	},
	"abilities": {
		"0": "Magnet Pull",
		"1": "Sturdy",
		"H": "Galvanize"
	},
	"weightkg": 20.3,
	"evos": [
		"Graveler-Alola"
	],
	"eggGroups": [
		"Mineral"
	]
},
graveler: {
	"num": -75,
	"name": "Graveler",
	"types": [
		"Rock",
		"Ground"
	],
	"baseStats": {
		"hp": 55,
		"atk": 95,
		"def": 115,
		"spa": 45,
		"spd": 45,
		"spe": 35
	},
	"abilities": {
		"0": "Rock Head",
		"1": "Sturdy",
		"H": "Sand Veil"
	},
	"weightkg": 105,
	"prevo": "Geodude",
	"evoLevel": 25,
	"evos": [
		"Golem"
	],
	"eggGroups": [
		"Mineral"
	],
	"otherFormes": [
		"Graveler-Alola"
	],
	"formeOrder": [
		"Graveler",
		"Graveler-Alola"
	]
},
graveleralola: {
	"num": -75,
	"name": "Graveler-Alola",
	"baseSpecies": "Graveler",
	"forme": "Alola",
	"types": [
		"Rock",
		"Electric"
	],
	"baseStats": {
		"hp": 55,
		"atk": 95,
		"def": 115,
		"spa": 45,
		"spd": 45,
		"spe": 35
	},
	"abilities": {
		"0": "Magnet Pull",
		"1": "Sturdy",
		"H": "Galvanize"
	},
	"weightkg": 110,
	"prevo": "Geodude-Alola",
	"evoLevel": 25,
	"evos": [
		"Golem-Alola"
	],
	"eggGroups": [
		"Mineral"
	]
},
golem: {
	"num": -76,
	"name": "Golem",
	"types": [
		"Rock",
		"Ground"
	],
	"baseStats": {
		"hp": 80,
		"atk": 120,
		"def": 130,
		"spa": 60,
		"spd": 60,
		"spe": 45
	},
	"abilities": {
		"0": "Rock Head",
		"1": "Sturdy",
		"H": "Sand Veil"
	},
	"weightkg": 300,
	"prevo": "Graveler",
	"evoType": "trade",
	"eggGroups": [
		"Mineral"
	],
	"otherFormes": [
		"Golem-Alola"
	],
	"formeOrder": [
		"Golem",
		"Golem-Alola"
	]
},
golemalola: {
	"num": -76,
	"name": "Golem-Alola",
	"baseSpecies": "Golem",
	"forme": "Alola",
	"types": [
		"Rock",
		"Electric"
	],
	"baseStats": {
		"hp": 80,
		"atk": 120,
		"def": 130,
		"spa": 60,
		"spd": 60,
		"spe": 45
	},
	"abilities": {
		"0": "Magnet Pull",
		"1": "Sturdy",
		"H": "Galvanize"
	},
	"weightkg": 316,
	"prevo": "Graveler-Alola",
	"evoType": "trade",
	"eggGroups": [
		"Mineral"
	]
},
ponyta: {
	"num": -77,
	"name": "Ponyta",
	"types": [
		"Fire"
	],
	"baseStats": {
		"hp": 50,
		"atk": 85,
		"def": 55,
		"spa": 65,
		"spd": 65,
		"spe": 90
	},
	"abilities": {
		"0": "Run Away",
		"1": "Flash Fire",
		"H": "Flame Body"
	},
	"weightkg": 30,
	"evos": [
		"Rapidash"
	],
	"eggGroups": [
		"Field"
	],
	"otherFormes": [
		"Ponyta-Galar"
	],
	"formeOrder": [
		"Ponyta",
		"Ponyta-Galar"
	]
},
ponytagalar: {
	"num": -77,
	"name": "Ponyta-Galar",
	"baseSpecies": "Ponyta",
	"forme": "Galar",
	"types": [
		"Psychic"
	],
	"baseStats": {
		"hp": 50,
		"atk": 85,
		"def": 55,
		"spa": 65,
		"spd": 65,
		"spe": 90
	},
	"abilities": {
		"0": "Run Away",
		"1": "Pastel Veil",
		"H": "Anticipation"
	},
	"weightkg": 24,
	"evos": [
		"Rapidash-Galar"
	],
	"eggGroups": [
		"Field"
	]
},
rapidash: {
	"num": -78,
	"name": "Rapidash",
	"types": [
		"Fire"
	],
	"baseStats": {
		"hp": 65,
		"atk": 100,
		"def": 70,
		"spa": 80,
		"spd": 80,
		"spe": 105
	},
	"abilities": {
		"0": "Run Away",
		"1": "Flash Fire",
		"H": "Flame Body"
	},
	"weightkg": 95,
	"prevo": "Ponyta",
	"evoLevel": 40,
	"eggGroups": [
		"Field"
	],
	"otherFormes": [
		"Rapidash-Galar"
	],
	"formeOrder": [
		"Rapidash",
		"Rapidash-Galar"
	]
},
rapidashgalar: {
	"num": -78,
	"name": "Rapidash-Galar",
	"baseSpecies": "Rapidash",
	"forme": "Galar",
	"types": [
		"Psychic",
		"Normal"
	],
	"baseStats": {
		"hp": 65,
		"atk": 100,
		"def": 70,
		"spa": 80,
		"spd": 80,
		"spe": 105
	},
	"abilities": {
		"0": "Run Away",
		"1": "Pastel Veil",
		"H": "Anticipation"
	},
	"weightkg": 80,
	"prevo": "Ponyta-Galar",
	"evoLevel": 40,
	"eggGroups": [
		"Field"
	]
},
slowpoke: {
	"num": -79,
	"name": "Slowpoke",
	"types": [
		"Water",
		"Psychic"
	],
	"baseStats": {
		"hp": 90,
		"atk": 65,
		"def": 65,
		"spa": 40,
		"spd": 40,
		"spe": 15
	},
	"abilities": {
		"0": "Oblivious",
		"1": "Own Tempo",
		"H": "Regenerator"
	},
	"weightkg": 36,
	"evos": [
		"Slowbro",
		"Slowking"
	],
	"eggGroups": [
		"Monster",
		"Water 1"
	],
	"otherFormes": [
		"Slowpoke-Galar"
	],
	"formeOrder": [
		"Slowpoke",
		"Slowpoke-Galar"
	]
},
slowpokegalar: {
	"num": -79,
	"name": "Slowpoke-Galar",
	"baseSpecies": "Slowpoke",
	"forme": "Galar",
	"types": [
		"Psychic"
	],
	"baseStats": {
		"hp": 90,
		"atk": 65,
		"def": 65,
		"spa": 40,
		"spd": 40,
		"spe": 15
	},
	"abilities": {
		"0": "Gluttony",
		"1": "Own Tempo",
		"H": "Regenerator"
	},
	"weightkg": 36,
	"evos": [
		"Slowbro-Galar",
		"Slowking-Galar"
	],
	"eggGroups": [
		"Monster",
		"Water 1"
	]
},
slowbro: {
	"num": -80,
	"name": "Slowbro",
	"types": [
		"Water",
		"Psychic"
	],
	"baseStats": {
		"hp": 95,
		"atk": 75,
		"def": 110,
		"spa": 90,
		"spd": 90,
		"spe": 30
	},
	"abilities": {
		"0": "Oblivious",
		"1": "Own Tempo",
		"H": "Regenerator"
	},
	"weightkg": 78.5,
	"prevo": "Slowpoke",
	"evoLevel": 37,
	"eggGroups": [
		"Monster",
		"Water 1"
	],
	"otherFormes": [
		"Slowbro-Mega",
		"Slowbro-Galar"
	],
	"formeOrder": [
		"Slowbro",
		"Slowbro-Mega",
		"Slowbro-Galar"
	]
},
slowbromega: {
	"num": -80,
	"name": "Slowbro-Mega",
	"baseSpecies": "Slowbro",
	"forme": "Mega",
	"types": [
		"Water",
		"Psychic"
	],
	"baseStats": {
		"hp": 95,
		"atk": 75,
		"def": 145,
		"spa": 97,
		"spd": 97,
		"spe": 30
	},
	"abilities": {
		"0": "Shell Armor"
	},
	"weightkg": 120,
	"eggGroups": [
		"Monster",
		"Water 1"
	],
	// "requiredItem": "Slowbronite"
},
slowbrogalar: {
	"num": -80,
	"name": "Slowbro-Galar",
	"baseSpecies": "Slowbro",
	"forme": "Galar",
	"types": [
		"Poison",
		"Psychic"
	],
	"baseStats": {
		"hp": 95,
		"atk": 100,
		"def": 95,
		"spa": 85,
		"spd": 85,
		"spe": 30
	},
	"abilities": {
		"0": "Quick Draw",
		"1": "Own Tempo",
		"H": "Regenerator"
	},
	"weightkg": 70.5,
	"prevo": "Slowpoke-Galar",
	"evoType": "useItem",
	"evoItem": "Galarica Cuff",
	"eggGroups": [
		"Monster",
		"Water 1"
	]
},
magnemite: {
	"num": -81,
	"name": "Magnemite",
	"types": [
		"Electric",
		"Rock"
	],
	"gender": "N",
	"baseStats": {
		"hp": 25,
		"atk": 35,
		"def": 70,
		"spa": 75,
		"spd": 75,
		"spe": 45
	},
	"abilities": {
		"0": "Magnet Pull",
		"1": "Sturdy",
		"H": "Analytic"
	},
	"weightkg": 6,
	"evos": [
		"Magneton"
	],
	"eggGroups": [
		"Mineral"
	]
},
magneton: {
	"num": -82,
	"name": "Magneton",
	"types": [
		"Electric",
		"Rock"
	],
	"gender": "N",
	"baseStats": {
		"hp": 50,
		"atk": 60,
		"def": 95,
		"spa": 95,
		"spd": 95,
		"spe": 70
	},
	"abilities": {
		"0": "Magnet Pull",
		"1": "Sturdy",
		"H": "Analytic"
	},
	"weightkg": 60,
	"prevo": "Magnemite",
	"evoLevel": 30,
	"evos": [
		"Magnezone"
	],
	"eggGroups": [
		"Mineral"
	]
},
farfetchd: {
	"num": -83,
	"name": "Farfetch’d",
	"types": [
		"Normal",
		"Flying"
	],
	"baseStats": {
		"hp": 52,
		"atk": 90,
		"def": 55,
		"spa": 60,
		"spd": 60,
		"spe": 60
	},
	"abilities": {
		"0": "Keen Eye",
		"1": "Inner Focus",
		"H": "Defiant"
	},
	"weightkg": 15,
	"eggGroups": [
		"Flying",
		"Field"
	],
	"otherFormes": [
		"Farfetch’d-Galar"
	],
	"formeOrder": [
		"Farfetch’d",
		"Farfetch’d-Galar"
	]
},
farfetchdgalar: {
	"num": -83,
	"name": "Farfetch’d-Galar",
	"baseSpecies": "Farfetch’d",
	"forme": "Galar",
	"types": [
		"Fighting"
	],
	"baseStats": {
		"hp": 52,
		"atk": 95,
		"def": 55,
		"spa": 60,
		"spd": 60,
		"spe": 55
	},
	"abilities": {
		"0": "Steadfast",
		"H": "Scrappy"
	},
	"weightkg": 15,
	"evos": [
		"Sirfetch’d"
	],
	"eggGroups": [
		"Flying",
		"Field"
	]
},
doduo: {
	"num": -84,
	"name": "Doduo",
	"types": [
		"Normal",
		"Flying"
	],
	"baseStats": {
		"hp": 35,
		"atk": 85,
		"def": 45,
		"spa": 35,
		"spd": 35,
		"spe": 75
	},
	"abilities": {
		"0": "Run Away",
		"1": "Early Bird",
		"H": "Tangled Feet"
	},
	"weightkg": 39.2,
	"evos": [
		"Dodrio"
	],
	"eggGroups": [
		"Flying"
	]
},
dodrio: {
	"num": -85,
	"name": "Dodrio",
	"types": [
		"Normal",
		"Flying"
	],
	"baseStats": {
		"hp": 60,
		"atk": 110,
		"def": 70,
		"spa": 60,
		"spd": 60,
		"spe": 110
	},
	"abilities": {
		"0": "Run Away",
		"1": "Early Bird",
		"H": "Tangled Feet"
	},
	"weightkg": 85.2,
	"prevo": "Doduo",
	"evoLevel": 31,
	"eggGroups": [
		"Flying"
	]
},
seel: {
	"num": -86,
	"name": "Seel",
	"types": [
		"Water"
	],
	"baseStats": {
		"hp": 65,
		"atk": 45,
		"def": 55,
		"spa": 57,
		"spd": 57,
		"spe": 45
	},
	"abilities": {
		"0": "Thick Fat",
		"1": "Hydration",
		"H": "Ice Body"
	},
	"weightkg": 90,
	"evos": [
		"Dewgong"
	],
	"eggGroups": [
		"Water 1",
		"Field"
	]
},
dewgong: {
	"num": -87,
	"name": "Dewgong",
	"types": [
		"Water",
		"Ice"
	],
	"baseStats": {
		"hp": 90,
		"atk": 70,
		"def": 80,
		"spa": 82,
		"spd": 82,
		"spe": 70
	},
	"abilities": {
		"0": "Thick Fat",
		"1": "Hydration",
		"H": "Ice Body"
	},
	"weightkg": 120,
	"prevo": "Seel",
	"evoLevel": 34,
	"eggGroups": [
		"Water 1",
		"Field"
	]
},
grimer: {
	"num": -88,
	"name": "Grimer",
	"types": [
		"Poison"
	],
	"baseStats": {
		"hp": 80,
		"atk": 80,
		"def": 50,
		"spa": 45,
		"spd": 45,
		"spe": 25
	},
	"abilities": {
		"0": "Stench",
		"1": "Sticky Hold",
		"H": "Poison Touch"
	},
	"weightkg": 30,
	"evos": [
		"Muk"
	],
	"eggGroups": [
		"Amorphous"
	],
	"otherFormes": [
		"Grimer-Alola"
	],
	"formeOrder": [
		"Grimer",
		"Grimer-Alola"
	]
},
grimeralola: {
	"num": -88,
	"name": "Grimer-Alola",
	"baseSpecies": "Grimer",
	"forme": "Alola",
	"types": [
		"Poison",
		"Normal"
	],
	"baseStats": {
		"hp": 80,
		"atk": 80,
		"def": 50,
		"spa": 45,
		"spd": 45,
		"spe": 25
	},
	"abilities": {
		"0": "Poison Touch",
		"1": "Gluttony",
		"H": "Power of Alchemy"
	},
	"weightkg": 42,
	"evos": [
		"Muk-Alola"
	],
	"eggGroups": [
		"Amorphous"
	]
},
muk: {
	"num": -89,
	"name": "Muk",
	"types": [
		"Poison"
	],
	"baseStats": {
		"hp": 105,
		"atk": 105,
		"def": 75,
		"spa": 82,
		"spd": 82,
		"spe": 50
	},
	"abilities": {
		"0": "Stench",
		"1": "Sticky Hold",
		"H": "Poison Touch"
	},
	"weightkg": 30,
	"prevo": "Grimer",
	"evoLevel": 38,
	"eggGroups": [
		"Amorphous"
	],
	"otherFormes": [
		"Muk-Alola"
	],
	"formeOrder": [
		"Muk",
		"Muk-Alola"
	]
},
mukalola: {
	"num": -89,
	"name": "Muk-Alola",
	"baseSpecies": "Muk",
	"forme": "Alola",
	"types": [
		"Poison",
		"Normal"
	],
	"baseStats": {
		"hp": 105,
		"atk": 105,
		"def": 75,
		"spa": 82,
		"spd": 82,
		"spe": 50
	},
	"abilities": {
		"0": "Poison Touch",
		"1": "Gluttony",
		"H": "Power of Alchemy"
	},
	"weightkg": 52,
	"prevo": "Grimer-Alola",
	"evoLevel": 38,
	"eggGroups": [
		"Amorphous"
	]
},
shellder: {
	"num": -90,
	"name": "Shellder",
	"types": [
		"Water"
	],
	"baseStats": {
		"hp": 30,
		"atk": 65,
		"def": 100,
		"spa": 35,
		"spd": 35,
		"spe": 40
	},
	"abilities": {
		"0": "Shell Armor",
		"1": "Skill Link",
		"H": "Overcoat"
	},
	"weightkg": 4,
	"evos": [
		"Cloyster"
	],
	"eggGroups": [
		"Water 3"
	]
},
cloyster: {
	"num": -91,
	"name": "Cloyster",
	"types": [
		"Water",
		"Ice"
	],
	"baseStats": {
		"hp": 50,
		"atk": 95,
		"def": 180,
		"spa": 65,
		"spd": 65,
		"spe": 70
	},
	"abilities": {
		"0": "Shell Armor",
		"1": "Skill Link",
		"H": "Overcoat"
	},
	"weightkg": 132.5,
	"prevo": "Shellder",
	"evoType": "useItem",
	"evoItem": "Water Stone",
	"eggGroups": [
		"Water 3"
	]
},
gastly: {
	"num": -92,
	"name": "Gastly",
	"types": [
		"Ghost",
		"Poison"
	],
	"baseStats": {
		"hp": 30,
		"atk": 35,
		"def": 30,
		"spa": 67,
		"spd": 67,
		"spe": 80
	},
	"abilities": {
		"0": "Levitate"
	},
	"weightkg": 0.1,
	"evos": [
		"Haunter"
	],
	"eggGroups": [
		"Amorphous"
	]
},
haunter: {
	"num": -93,
	"name": "Haunter",
	"types": [
		"Ghost",
		"Poison"
	],
	"baseStats": {
		"hp": 45,
		"atk": 50,
		"def": 45,
		"spa": 85,
		"spd": 85,
		"spe": 95
	},
	"abilities": {
		"0": "Levitate"
	},
	"weightkg": 0.1,
	"prevo": "Gastly",
	"evoLevel": 25,
	"evos": [
		"Gengar"
	],
	"eggGroups": [
		"Amorphous"
	]
},
gengar: {
	"num": -94,
	"name": "Gengar",
	"types": [
		"Ghost",
		"Poison"
	],
	"baseStats": {
		"hp": 60,
		"atk": 65,
		"def": 60,
		"spa": 102,
		"spd": 102,
		"spe": 110
	},
	"abilities": {
		"0": "Cursed Body"
	},
	"weightkg": 40.5,
	"prevo": "Haunter",
	"evoType": "trade",
	"eggGroups": [
		"Amorphous"
	],
	"otherFormes": [
		"Gengar-Mega"
	],
	"formeOrder": [
		"Gengar",
		"Gengar-Mega"
	],
	"canGigantamax": "G-Max Terror"
},
gengarmega: {
	"num": -94,
	"name": "Gengar-Mega",
	"baseSpecies": "Gengar",
	"forme": "Mega",
	"types": [
		"Ghost",
		"Poison"
	],
	"baseStats": {
		"hp": 60,
		"atk": 65,
		"def": 70,
		"spa": 117,
		"spd": 117,
		"spe": 120
	},
	"abilities": {
		"0": "Shadow Tag"
	},
	"weightkg": 40.5,
	"eggGroups": [
		"Amorphous"
	],
	// "requiredItem": "Gengarite"
},
onix: {
	"num": -95,
	"name": "Onix",
	"types": [
		"Rock",
		"Ground"
	],
	"baseStats": {
		"hp": 35,
		"atk": 45,
		"def": 160,
		"spa": 37,
		"spd": 37,
		"spe": 70
	},
	"abilities": {
		"0": "Rock Head",
		"1": "Sturdy",
		"H": "Weak Armor"
	},
	"weightkg": 210,
	"evos": [
		"Steelix"
	],
	"eggGroups": [
		"Mineral"
	]
},
drowzee: {
	"num": -96,
	"name": "Drowzee",
	"types": [
		"Psychic"
	],
	"baseStats": {
		"hp": 60,
		"atk": 48,
		"def": 45,
		"spa": 66,
		"spd": 66,
		"spe": 42
	},
	"abilities": {
		"0": "Insomnia",
		"1": "Forewarn",
		"H": "Inner Focus"
	},
	"weightkg": 32.4,
	"evos": [
		"Hypno"
	],
	"eggGroups": [
		"Human-Like"
	]
},
hypno: {
	"num": -97,
	"name": "Hypno",
	"types": [
		"Psychic"
	],
	"baseStats": {
		"hp": 85,
		"atk": 73,
		"def": 70,
		"spa": 94,
		"spd": 94,
		"spe": 67
	},
	"abilities": {
		"0": "Insomnia",
		"1": "Forewarn",
		"H": "Inner Focus"
	},
	"weightkg": 75.6,
	"prevo": "Drowzee",
	"evoLevel": 26,
	"eggGroups": [
		"Human-Like"
	]
},
krabby: {
	"num": -98,
	"name": "Krabby",
	"types": [
		"Water"
	],
	"baseStats": {
		"hp": 30,
		"atk": 105,
		"def": 90,
		"spa": 25,
		"spd": 25,
		"spe": 50
	},
	"abilities": {
		"0": "Hyper Cutter",
		"1": "Shell Armor",
		"H": "Sheer Force"
	},
	"weightkg": 6.5,
	"evos": [
		"Kingler"
	],
	"eggGroups": [
		"Water 3"
	]
},
kingler: {
	"num": -99,
	"name": "Kingler",
	"types": [
		"Water"
	],
	"baseStats": {
		"hp": 55,
		"atk": 130,
		"def": 115,
		"spa": 50,
		"spd": 50,
		"spe": 75
	},
	"abilities": {
		"0": "Hyper Cutter",
		"1": "Shell Armor",
		"H": "Sheer Force"
	},
	"weightkg": 60,
	"prevo": "Krabby",
	"evoLevel": 28,
	"eggGroups": [
		"Water 3"
	],
	"canGigantamax": "G-Max Foam Burst"
},
voltorb: {
	"num": -100,
	"name": "Voltorb",
	"types": [
		"Electric"
	],
	"gender": "N",
	"baseStats": {
		"hp": 40,
		"atk": 30,
		"def": 50,
		"spa": 55,
		"spd": 55,
		"spe": 100
	},
	"abilities": {
		"0": "Soundproof",
		"1": "Static",
		"H": "Aftermath"
	},
	"weightkg": 10.4,
	"evos": [
		"Electrode"
	],
	"eggGroups": [
		"Mineral"
	],
	"otherFormes": [
		"Voltorb-Hisui"
	],
	"formeOrder": [
		"Voltorb",
		"Voltorb-Hisui"
	]
},
voltorbhisui: {
	"num": -100,
	"name": "Voltorb-Hisui",
	"baseSpecies": "Voltorb",
	"forme": "Hisui",
	"types": [
		"Electric",
		"Grass"
	],
	"gender": "N",
	"baseStats": {
		"hp": 40,
		"atk": 30,
		"def": 50,
		"spa": 55,
		"spd": 55,
		"spe": 100
	},
	"abilities": {
		"0": "Soundproof",
		"1": "Static",
		"H": "Aftermath"
	},
	"weightkg": 13,
	"evos": [
		"Electrode-Hisui"
	],
	"eggGroups": [
		"Mineral"
	]
},
electrode: {
	"num": -101,
	"name": "Electrode",
	"types": [
		"Electric"
	],
	"gender": "N",
	"baseStats": {
		"hp": 60,
		"atk": 50,
		"def": 70,
		"spa": 80,
		"spd": 80,
		"spe": 150
	},
	"abilities": {
		"0": "Soundproof",
		"1": "Static",
		"H": "Aftermath"
	},
	"weightkg": 66.6,
	"prevo": "Voltorb",
	"evoLevel": 30,
	"eggGroups": [
		"Mineral"
	],
	"otherFormes": [
		"Electrode-Hisui"
	],
	"formeOrder": [
		"Electrode",
		"Electrode-Hisui"
	]
},
electrodehisui: {
	"num": -101,
	"name": "Electrode-Hisui",
	"baseSpecies": "Electrode",
	"forme": "Hisui",
	"types": [
		"Electric",
		"Grass"
	],
	"gender": "N",
	"baseStats": {
		"hp": 60,
		"atk": 50,
		"def": 70,
		"spa": 80,
		"spd": 80,
		"spe": 150
	},
	"abilities": {
		"0": "Soundproof",
		"1": "Static",
		"H": "Aftermath"
	},
	"weightkg": 71,
	"prevo": "Voltorb-Hisui",
	"evoType": "useItem",
	"evoItem": "Leaf Stone",
	"eggGroups": [
		"Mineral"
	]
},
exeggcute: {
	"num": -102,
	"name": "Exeggcute",
	"types": [
		"Grass",
		"Psychic"
	],
	"baseStats": {
		"hp": 60,
		"atk": 40,
		"def": 80,
		"spa": 52,
		"spd": 52,
		"spe": 40
	},
	"abilities": {
		"0": "Chlorophyll",
		"H": "Harvest"
	},
	"weightkg": 2.5,
	"evos": [
		"Exeggutor",
		"Exeggutor-Alola"
	],
	"eggGroups": [
		"Grass"
	]
},
exeggutor: {
	"num": -103,
	"name": "Exeggutor",
	"types": [
		"Grass",
		"Psychic"
	],
	"baseStats": {
		"hp": 95,
		"atk": 95,
		"def": 85,
		"spa": 100,
		"spd": 100,
		"spe": 55
	},
	"abilities": {
		"0": "Chlorophyll",
		"H": "Harvest"
	},
	"weightkg": 120,
	"prevo": "Exeggcute",
	"evoType": "useItem",
	"evoItem": "Leaf Stone",
	"eggGroups": [
		"Grass"
	],
	"otherFormes": [
		"Exeggutor-Alola"
	],
	"formeOrder": [
		"Exeggutor",
		"Exeggutor-Alola"
	]
},
exeggutoralola: {
	"num": -103,
	"name": "Exeggutor-Alola",
	"baseSpecies": "Exeggutor",
	"forme": "Alola",
	"types": [
		"Grass",
		"Dragon"
	],
	"baseStats": {
		"hp": 95,
		"atk": 105,
		"def": 85,
		"spa": 100,
		"spd": 100,
		"spe": 45
	},
	"abilities": {
		"0": "Frisk",
		"H": "Harvest"
	},
	"weightkg": 415.6,
	"prevo": "Exeggcute",
	"evoType": "useItem",
	"evoItem": "Leaf Stone",
	"eggGroups": [
		"Grass"
	]
},
cubone: {
	"num": -104,
	"name": "Cubone",
	"types": [
		"Ground"
	],
	"baseStats": {
		"hp": 50,
		"atk": 50,
		"def": 95,
		"spa": 45,
		"spd": 45,
		"spe": 35
	},
	"abilities": {
		"0": "Rock Head",
		"1": "Lightning Rod",
		"H": "Battle Armor"
	},
	"weightkg": 6.5,
	"evos": [
		"Marowak",
		"Marowak-Alola"
	],
	"eggGroups": [
		"Monster"
	]
},
marowak: {
	"num": -105,
	"name": "Marowak",
	"types": [
		"Ground"
	],
	"baseStats": {
		"hp": 60,
		"atk": 80,
		"def": 110,
		"spa": 65,
		"spd": 65,
		"spe": 45
	},
	"abilities": {
		"0": "Rock Head",
		"1": "Lightning Rod",
		"H": "Battle Armor"
	},
	"weightkg": 45,
	"prevo": "Cubone",
	"evoLevel": 28,
	"eggGroups": [
		"Monster"
	],
	"otherFormes": [
		"Marowak-Alola",
		"Marowak-Alola-Totem"
	],
	"formeOrder": [
		"Marowak",
		"Marowak-Alola",
		"Marowak-Alola-Totem"
	]
},
marowakalola: {
	"num": -105,
	"name": "Marowak-Alola",
	"baseSpecies": "Marowak",
	"forme": "Alola",
	"types": [
		"Fire",
		"Ghost"
	],
	"baseStats": {
		"hp": 60,
		"atk": 80,
		"def": 110,
		"spa": 65,
		"spd": 65,
		"spe": 45
	},
	"abilities": {
		"0": "Cursed Body",
		"1": "Lightning Rod",
		"H": "Rock Head"
	},
	"weightkg": 34,
	"prevo": "Cubone",
	"evoLevel": 28,
	"evoCondition": "at night",
	"eggGroups": [
		"Monster"
	]
},
hitmonlee: {
	"num": -106,
	"name": "Hitmonlee",
	"types": [
		"Fighting"
	],
	"gender": "M",
	"baseStats": {
		"hp": 50,
		"atk": 120,
		"def": 53,
		"spa": 72,
		"spd": 72,
		"spe": 87
	},
	"abilities": {
		"0": "Limber",
		"1": "Reckless",
		"H": "Unburden"
	},
	"weightkg": 49.8,
	"prevo": "Tyrogue",
	"evoLevel": 20,
	"evoCondition": "with an Atk stat > its Def stat",
	"eggGroups": [
		"Human-Like"
	]
},
hitmonchan: {
	"num": -107,
	"name": "Hitmonchan",
	"types": [
		"Fighting"
	],
	"gender": "M",
	"baseStats": {
		"hp": 50,
		"atk": 105,
		"def": 79,
		"spa": 72,
		"spd": 72,
		"spe": 76
	},
	"abilities": {
		"0": "Keen Eye",
		"1": "Iron Fist",
		"H": "Inner Focus"
	},
	"weightkg": 50.2,
	"prevo": "Tyrogue",
	"evoLevel": 20,
	"evoCondition": "with an Atk stat < its Def stat",
	"eggGroups": [
		"Human-Like"
	]
},
lickitung: {
	"num": -108,
	"name": "Lickitung",
	"types": [
		"Normal"
	],
	"baseStats": {
		"hp": 90,
		"atk": 55,
		"def": 75,
		"spa": 67,
		"spd": 67,
		"spe": 30
	},
	"abilities": {
		"0": "Own Tempo",
		"1": "Oblivious",
		"H": "Cloud Nine"
	},
	"weightkg": 65.5,
	"evos": [
		"Lickilicky"
	],
	"eggGroups": [
		"Monster"
	]
},
koffing: {
	"num": -109,
	"name": "Koffing",
	"types": [
		"Poison"
	],
	"baseStats": {
		"hp": 40,
		"atk": 65,
		"def": 95,
		"spa": 52,
		"spd": 52,
		"spe": 35
	},
	"abilities": {
		"0": "Levitate",
		"1": "Neutralizing Gas",
		"H": "Stench"
	},
	"weightkg": 1,
	"evos": [
		"Weezing",
		"Weezing-Galar"
	],
	"eggGroups": [
		"Amorphous"
	]
},
weezing: {
	"num": -110,
	"name": "Weezing",
	"types": [
		"Poison"
	],
	"baseStats": {
		"hp": 65,
		"atk": 90,
		"def": 120,
		"spa": 77,
		"spd": 77,
		"spe": 60
	},
	"abilities": {
		"0": "Levitate",
		"1": "Neutralizing Gas",
		"H": "Stench"
	},
	"weightkg": 9.5,
	"prevo": "Koffing",
	"evoLevel": 35,
	"eggGroups": [
		"Amorphous"
	],
	"otherFormes": [
		"Weezing-Galar"
	],
	"formeOrder": [
		"Weezing",
		"Weezing-Galar"
	]
},
weezinggalar: {
	"num": -110,
	"name": "Weezing-Galar",
	"baseSpecies": "Weezing",
	"forme": "Galar",
	"types": [
		"Poison",
		"Normal"
	],
	"baseStats": {
		"hp": 65,
		"atk": 90,
		"def": 120,
		"spa": 77,
		"spd": 77,
		"spe": 60
	},
	"abilities": {
		"0": "Levitate",
		"1": "Neutralizing Gas",
		"H": "Misty Surge"
	},
	"weightkg": 16,
	"prevo": "Koffing",
	"evoLevel": 35,
	"eggGroups": [
		"Amorphous"
	]
},
rhyhorn: {
	"num": -111,
	"name": "Rhyhorn",
	"types": [
		"Ground",
		"Rock"
	],
	"baseStats": {
		"hp": 80,
		"atk": 85,
		"def": 95,
		"spa": 30,
		"spd": 30,
		"spe": 25
	},
	"abilities": {
		"0": "Lightning Rod",
		"1": "Rock Head",
		"H": "Reckless"
	},
	"weightkg": 115,
	"evos": [
		"Rhydon"
	],
	"eggGroups": [
		"Monster",
		"Field"
	]
},
rhydon: {
	"num": -112,
	"name": "Rhydon",
	"types": [
		"Ground",
		"Rock"
	],
	"baseStats": {
		"hp": 105,
		"atk": 130,
		"def": 120,
		"spa": 45,
		"spd": 45,
		"spe": 40
	},
	"abilities": {
		"0": "Lightning Rod",
		"1": "Rock Head",
		"H": "Reckless"
	},
	"weightkg": 120,
	"prevo": "Rhyhorn",
	"evoLevel": 42,
	"evos": [
		"Rhyperior"
	],
	"eggGroups": [
		"Monster",
		"Field"
	]
},
chansey: {
	"num": -113,
	"name": "Chansey",
	"types": [
		"Normal"
	],
	"gender": "F",
	"baseStats": {
		"hp": 250,
		"atk": 5,
		"def": 5,
		"spa": 70,
		"spd": 70,
		"spe": 50
	},
	"abilities": {
		"0": "Natural Cure",
		"1": "Serene Grace",
		"H": "Healer"
	},
	"weightkg": 34.6,
	"prevo": "Happiny",
	"evoType": "levelHold",
	"evoItem": "Oval Stone",
	"evoCondition": "during the day",
	"evos": [
		"Blissey"
	],
	"eggGroups": [
		"Fairy"
	],
	"canHatch": true
},
tangela: {
	"num": -114,
	"name": "Tangela",
	"types": [
		"Grass"
	],
	"baseStats": {
		"hp": 65,
		"atk": 55,
		"def": 115,
		"spa": 70,
		"spd": 70,
		"spe": 60
	},
	"abilities": {
		"0": "Chlorophyll",
		"1": "Leaf Guard",
		"H": "Regenerator"
	},
	"weightkg": 35,
	"evos": [
		"Tangrowth"
	],
	"eggGroups": [
		"Grass"
	]
},
kangaskhan: {
	"num": -115,
	"name": "Kangaskhan",
	"types": [
		"Normal"
	],
	"gender": "F",
	"baseStats": {
		"hp": 105,
		"atk": 95,
		"def": 80,
		"spa": 60,
		"spd": 60,
		"spe": 90
	},
	"abilities": {
		"0": "Early Bird",
		"1": "Scrappy",
		"H": "Inner Focus"
	},
	"weightkg": 80,
	"eggGroups": [
		"Monster"
	],
	"otherFormes": [
		"Kangaskhan-Mega"
	],
	"formeOrder": [
		"Kangaskhan",
		"Kangaskhan-Mega"
	]
},
kangaskhanmega: {
	"num": -115,
	"name": "Kangaskhan-Mega",
	"baseSpecies": "Kangaskhan",
	"forme": "Mega",
	"types": [
		"Normal"
	],
	"gender": "F",
	"baseStats": {
		"hp": 105,
		"atk": 110,
		"def": 90,
		"spa": 70,
		"spd": 70,
		"spe": 95
	},
	"abilities": {
		"0": "Parental Bond"
	},
	"weightkg": 100,
	"eggGroups": [
		"Monster"
	],
	// "requiredItem": "Kangaskhanite"
},
horsea: {
	"num": -116,
	"name": "Horsea",
	"types": [
		"Water"
	],
	"baseStats": {
		"hp": 30,
		"atk": 40,
		"def": 70,
		"spa": 47,
		"spd": 47,
		"spe": 60
	},
	"abilities": {
		"0": "Swift Swim",
		"1": "Sniper",
		"H": "Damp"
	},
	"weightkg": 8,
	"evos": [
		"Seadra"
	],
	"eggGroups": [
		"Water 1",
		"Dragon"
	]
},
seadra: {
	"num": -117,
	"name": "Seadra",
	"types": [
		"Water"
	],
	"baseStats": {
		"hp": 55,
		"atk": 65,
		"def": 95,
		"spa": 70,
		"spd": 70,
		"spe": 85
	},
	"abilities": {
		"0": "Poison Point",
		"1": "Sniper",
		"H": "Damp"
	},
	"weightkg": 25,
	"prevo": "Horsea",
	"evoLevel": 32,
	"evos": [
		"Kingdra"
	],
	"eggGroups": [
		"Water 1",
		"Dragon"
	]
},
goldeen: {
	"num": -118,
	"name": "Goldeen",
	"types": [
		"Water"
	],
	"baseStats": {
		"hp": 45,
		"atk": 67,
		"def": 60,
		"spa": 42,
		"spd": 42,
		"spe": 63
	},
	"abilities": {
		"0": "Swift Swim",
		"1": "Water Veil",
		"H": "Lightning Rod"
	},
	"weightkg": 15,
	"evos": [
		"Seaking"
	],
	"eggGroups": [
		"Water 2"
	]
},
seaking: {
	"num": -119,
	"name": "Seaking",
	"types": [
		"Water"
	],
	"baseStats": {
		"hp": 80,
		"atk": 92,
		"def": 65,
		"spa": 72,
		"spd": 72,
		"spe": 68
	},
	"abilities": {
		"0": "Swift Swim",
		"1": "Water Veil",
		"H": "Lightning Rod"
	},
	"weightkg": 39,
	"prevo": "Goldeen",
	"evoLevel": 33,
	"eggGroups": [
		"Water 2"
	]
},
staryu: {
	"num": -120,
	"name": "Staryu",
	"types": [
		"Water"
	],
	"gender": "N",
	"baseStats": {
		"hp": 30,
		"atk": 45,
		"def": 55,
		"spa": 62,
		"spd": 62,
		"spe": 85
	},
	"abilities": {
		"0": "Illuminate",
		"1": "Natural Cure",
		"H": "Analytic"
	},
	"weightkg": 34.5,
	"evos": [
		"Starmie"
	],
	"eggGroups": [
		"Water 3"
	]
},
starmie: {
	"num": -121,
	"name": "Starmie",
	"types": [
		"Water",
		"Psychic"
	],
	"gender": "N",
	"baseStats": {
		"hp": 60,
		"atk": 75,
		"def": 85,
		"spa": 92,
		"spd": 92,
		"spe": 115
	},
	"abilities": {
		"0": "Illuminate",
		"1": "Natural Cure",
		"H": "Analytic"
	},
	"weightkg": 80,
	"prevo": "Staryu",
	"evoType": "useItem",
	"evoItem": "Water Stone",
	"eggGroups": [
		"Water 3"
	]
},
mrmime: {
	"num": -122,
	"name": "Mr. Mime",
	"types": [
		"Psychic",
		"Normal"
	],
	"baseStats": {
		"hp": 40,
		"atk": 45,
		"def": 65,
		"spa": 110,
		"spd": 110,
		"spe": 90
	},
	"abilities": {
		"0": "Soundproof",
		"1": "Filter",
		"H": "Technician"
	},
	"weightkg": 54.5,
	"prevo": "Mime Jr.",
	"evoType": "levelMove",
	"evoMove": "Mimic",
	"eggGroups": [
		"Human-Like"
	],
	"canHatch": true,
	"otherFormes": [
		"Mr. Mime-Galar"
	],
	"formeOrder": [
		"Mr. Mime",
		"Mr. Mime-Galar"
	]
},
mrmimegalar: {
	"num": -122,
	"name": "Mr. Mime-Galar",
	"baseSpecies": "Mr. Mime",
	"forme": "Galar",
	"types": [
		"Ice",
		"Psychic"
	],
	"baseStats": {
		"hp": 50,
		"atk": 65,
		"def": 65,
		"spa": 90,
		"spd": 90,
		"spe": 100
	},
	"abilities": {
		"0": "Vital Spirit",
		"1": "Screen Cleaner",
		"H": "Ice Body"
	},
	"weightkg": 56.8,
	"prevo": "Mime Jr.",
	"evoType": "levelMove",
	"evoMove": "Mimic",
	"evos": [
		"Mr. Rime"
	],
	"eggGroups": [
		"Human-Like"
	],
	"canHatch": true
},
scyther: {
	"num": -123,
	"name": "Scyther",
	"types": [
		"Bug",
		"Flying"
	],
	"baseStats": {
		"hp": 70,
		"atk": 110,
		"def": 80,
		"spa": 67,
		"spd": 67,
		"spe": 105
	},
	"abilities": {
		"0": "Swarm",
		"1": "Technician",
		"H": "Steadfast"
	},
	"weightkg": 56,
	"evos": [
		"Scizor",
		"Kleavor"
	],
	"eggGroups": [
		"Bug"
	]
},
jynx: {
	"num": -124,
	"name": "Jynx",
	"types": [
		"Ice",
		"Psychic"
	],
	"gender": "F",
	"baseStats": {
		"hp": 65,
		"atk": 50,
		"def": 35,
		"spa": 105,
		"spd": 105,
		"spe": 95
	},
	"abilities": {
		"0": "Oblivious",
		"1": "Forewarn",
		"H": "Dry Skin"
	},
	"weightkg": 40.6,
	"prevo": "Smoochum",
	"evoLevel": 30,
	"eggGroups": [
		"Human-Like"
	]
},
electabuzz: {
	"num": -125,
	"name": "Electabuzz",
	"types": [
		"Electric"
	],
	"genderRatio": {
		"M": 0.75,
		"F": 0.25
	},
	"baseStats": {
		"hp": 65,
		"atk": 83,
		"def": 57,
		"spa": 90,
		"spd": 90,
		"spe": 105
	},
	"abilities": {
		"0": "Static",
		"H": "Vital Spirit"
	},
	"weightkg": 30,
	"prevo": "Elekid",
	"evoLevel": 30,
	"evos": [
		"Electivire"
	],
	"eggGroups": [
		"Human-Like"
	]
},
magmar: {
	"num": -126,
	"name": "Magmar",
	"types": [
		"Fire"
	],
	"genderRatio": {
		"M": 0.75,
		"F": 0.25
	},
	"baseStats": {
		"hp": 65,
		"atk": 95,
		"def": 57,
		"spa": 92,
		"spd": 92,
		"spe": 93
	},
	"abilities": {
		"0": "Flame Body",
		"H": "Vital Spirit"
	},
	"weightkg": 44.5,
	"prevo": "Magby",
	"evoLevel": 30,
	"evos": [
		"Magmortar"
	],
	"eggGroups": [
		"Human-Like"
	]
},
pinsir: {
	"num": -127,
	"name": "Pinsir",
	"types": [
		"Bug"
	],
	"baseStats": {
		"hp": 65,
		"atk": 125,
		"def": 100,
		"spa": 62,
		"spd": 62,
		"spe": 85
	},
	"abilities": {
		"0": "Hyper Cutter",
		"1": "Mold Breaker",
		"H": "Moxie"
	},
	"weightkg": 55,
	"eggGroups": [
		"Bug"
	],
	"otherFormes": [
		"Pinsir-Mega"
	],
	"formeOrder": [
		"Pinsir",
		"Pinsir-Mega"
	]
},
pinsirmega: {
	"num": -127,
	"name": "Pinsir-Mega",
	"baseSpecies": "Pinsir",
	"forme": "Mega",
	"types": [
		"Bug",
		"Flying"
	],
	"baseStats": {
		"hp": 65,
		"atk": 140,
		"def": 110,
		"spa": 69,
		"spd": 69,
		"spe": 95
	},
	"abilities": {
		"0": "Aerilate"
	},
	"weightkg": 59,
	"eggGroups": [
		"Bug"
	],
	// "requiredItem": "Pinsirite"
},
tauros: {
	"num": -128,
	"name": "Tauros",
	"types": [
		"Normal"
	],
	"gender": "M",
	"baseStats": {
		"hp": 75,
		"atk": 100,
		"def": 95,
		"spa": 55,
		"spd": 55,
		"spe": 110
	},
	"abilities": {
		"0": "Intimidate",
		"1": "Anger Point",
		"H": "Sheer Force"
	},
	"weightkg": 88.4,
	"eggGroups": [
		"Field"
	]
},
magikarp: {
	"num": -129,
	"name": "Magikarp",
	"types": [
		"Water"
	],
	"baseStats": {
		"hp": 20,
		"atk": 10,
		"def": 55,
		"spa": 17,
		"spd": 17,
		"spe": 80
	},
	"abilities": {
		"0": "Swift Swim",
		"H": "Rattled"
	},
	"weightkg": 10,
	"evos": [
		"Gyarados"
	],
	"eggGroups": [
		"Water 2",
		"Dragon"
	]
},
gyarados: {
	"num": -130,
	"name": "Gyarados",
	"types": [
		"Water",
		"Flying"
	],
	"baseStats": {
		"hp": 95,
		"atk": 125,
		"def": 79,
		"spa": 80,
		"spd": 80,
		"spe": 81
	},
	"abilities": {
		"0": "Intimidate",
		"H": "Moxie"
	},
	"weightkg": 235,
	"prevo": "Magikarp",
	"evoLevel": 20,
	"eggGroups": [
		"Water 2",
		"Dragon"
	],
	"otherFormes": [
		"Gyarados-Mega"
	],
	"formeOrder": [
		"Gyarados",
		"Gyarados-Mega"
	]
},
gyaradosmega: {
	"num": -130,
	"name": "Gyarados-Mega",
	"baseSpecies": "Gyarados",
	"forme": "Mega",
	"types": [
		"Water",
		"Normal"
	],
	"baseStats": {
		"hp": 95,
		"atk": 140,
		"def": 94,
		"spa": 90,
		"spd": 90,
		"spe": 81
	},
	"abilities": {
		"0": "Mold Breaker"
	},
	"weightkg": 305,
	"eggGroups": [
		"Water 2",
		"Dragon"
	],
	// "requiredItem": "Gyaradosite"
},
lapras: {
	"num": -131,
	"name": "Lapras",
	"types": [
		"Water",
		"Ice"
	],
	"baseStats": {
		"hp": 130,
		"atk": 85,
		"def": 80,
		"spa": 90,
		"spd": 90,
		"spe": 60
	},
	"abilities": {
		"0": "Water Absorb",
		"1": "Shell Armor",
		"H": "Hydration"
	},
	"weightkg": 220,
	"eggGroups": [
		"Monster",
		"Water 1"
	],
	"canGigantamax": "G-Max Resonance"
},
ditto: {
	"num": -132,
	"name": "Ditto",
	"types": [
		"Normal"
	],
	"gender": "N",
	"baseStats": {
		"hp": 48,
		"atk": 48,
		"def": 48,
		"spa": 48,
		"spd": 48,
		"spe": 48
	},
	"abilities": {
		"0": "Limber",
		"H": "Imposter"
	},
	"weightkg": 4,
	"eggGroups": [
		"Ditto"
	]
},
eevee: {
	"num": -133,
	"name": "Eevee",
	"types": [
		"Normal"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 55,
		"atk": 55,
		"def": 50,
		"spa": 55,
		"spd": 55,
		"spe": 55
	},
	"abilities": {
		"0": "Run Away",
		"1": "Adaptability",
		"H": "Anticipation"
	},
	"weightkg": 6.5,
	"evos": [
		"Vaporeon",
		"Jolteon",
		"Flareon",
		"Espeon",
		"Umbreon",
		"Leafeon",
		"Glaceon",
		"Sylveon"
	],
	"eggGroups": [
		"Field"
	],
	"otherFormes": [
		"Eevee-Starter"
	],
	"formeOrder": [
		"Eevee",
		"Eevee-Starter"
	],
	"canGigantamax": "G-Max Cuddle"
},
eeveestarter: {
	"num": -133,
	"name": "Eevee-Starter",
	"baseSpecies": "Eevee",
	"forme": "Starter",
	"types": [
		"Normal"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 65,
		"atk": 75,
		"def": 70,
		"spa": 75,
		"spd": 75,
		"spe": 75
	},
	"abilities": {
		"0": "Run Away",
		"1": "Adaptability",
		"H": "Anticipation"
	},
	"weightkg": 6.5,
	"eggGroups": [
		"Undiscovered"
	]
},
vaporeon: {
	"num": -134,
	"name": "Vaporeon",
	"types": [
		"Water"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 130,
		"atk": 65,
		"def": 60,
		"spa": 102,
		"spd": 102,
		"spe": 65
	},
	"abilities": {
		"0": "Water Absorb",
		"H": "Hydration"
	},
	"weightkg": 29,
	"prevo": "Eevee",
	"evoType": "useItem",
	"evoItem": "Water Stone",
	"eggGroups": [
		"Field"
	]
},
jolteon: {
	"num": -135,
	"name": "Jolteon",
	"types": [
		"Electric"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 65,
		"atk": 65,
		"def": 60,
		"spa": 102,
		"spd": 102,
		"spe": 130
	},
	"abilities": {
		"0": "Volt Absorb",
		"H": "Quick Feet"
	},
	"weightkg": 24.5,
	"prevo": "Eevee",
	"evoType": "useItem",
	"evoItem": "Thunder Stone",
	"eggGroups": [
		"Field"
	]
},
flareon: {
	"num": -136,
	"name": "Flareon",
	"types": [
		"Fire"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 65,
		"atk": 130,
		"def": 60,
		"spa": 102,
		"spd": 102,
		"spe": 65
	},
	"abilities": {
		"0": "Flash Fire",
		"H": "Guts"
	},
	"weightkg": 25,
	"prevo": "Eevee",
	"evoType": "useItem",
	"evoItem": "Fire Stone",
	"eggGroups": [
		"Field"
	]
},
porygon: {
	"num": -137,
	"name": "Porygon",
	"types": [
		"Normal"
	],
	"gender": "N",
	"baseStats": {
		"hp": 65,
		"atk": 60,
		"def": 70,
		"spa": 80,
		"spd": 80,
		"spe": 40
	},
	"abilities": {
		"0": "Trace",
		"1": "Download",
		"H": "Analytic"
	},
	"weightkg": 36.5,
	"evos": [
		"Porygon2"
	],
	"eggGroups": [
		"Mineral"
	]
},
omanyte: {
	"num": -138,
	"name": "Omanyte",
	"types": [
		"Rock",
		"Water"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 35,
		"atk": 40,
		"def": 100,
		"spa": 72,
		"spd": 72,
		"spe": 35
	},
	"abilities": {
		"0": "Swift Swim",
		"1": "Shell Armor",
		"H": "Weak Armor"
	},
	"weightkg": 7.5,
	"evos": [
		"Omastar"
	],
	"eggGroups": [
		"Water 1",
		"Water 3"
	]
},
omastar: {
	"num": -139,
	"name": "Omastar",
	"types": [
		"Rock",
		"Water"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 70,
		"atk": 60,
		"def": 125,
		"spa": 92,
		"spd": 92,
		"spe": 55
	},
	"abilities": {
		"0": "Swift Swim",
		"1": "Shell Armor",
		"H": "Weak Armor"
	},
	"weightkg": 35,
	"prevo": "Omanyte",
	"evoLevel": 40,
	"eggGroups": [
		"Water 1",
		"Water 3"
	]
},
kabuto: {
	"num": -140,
	"name": "Kabuto",
	"types": [
		"Rock",
		"Water"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 30,
		"atk": 80,
		"def": 90,
		"spa": 50,
		"spd": 50,
		"spe": 55
	},
	"abilities": {
		"0": "Swift Swim",
		"1": "Battle Armor",
		"H": "Weak Armor"
	},
	"weightkg": 11.5,
	"evos": [
		"Kabutops"
	],
	"eggGroups": [
		"Water 1",
		"Water 3"
	]
},
kabutops: {
	"num": -141,
	"name": "Kabutops",
	"types": [
		"Rock",
		"Water"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 60,
		"atk": 115,
		"def": 105,
		"spa": 67,
		"spd": 67,
		"spe": 80
	},
	"abilities": {
		"0": "Swift Swim",
		"1": "Battle Armor",
		"H": "Weak Armor"
	},
	"weightkg": 40.5,
	"prevo": "Kabuto",
	"evoLevel": 40,
	"eggGroups": [
		"Water 1",
		"Water 3"
	]
},
aerodactyl: {
	"num": -142,
	"name": "Aerodactyl",
	"types": [
		"Rock",
		"Flying"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 80,
		"atk": 105,
		"def": 65,
		"spa": 67,
		"spd": 67,
		"spe": 130
	},
	"abilities": {
		"0": "Rock Head",
		"1": "Pressure",
		"H": "Unnerve"
	},
	"weightkg": 59,
	"eggGroups": [
		"Flying"
	],
	"otherFormes": [
		"Aerodactyl-Mega"
	],
	"formeOrder": [
		"Aerodactyl",
		"Aerodactyl-Mega"
	]
},
aerodactylmega: {
	"num": -142,
	"name": "Aerodactyl-Mega",
	"baseSpecies": "Aerodactyl",
	"forme": "Mega",
	"types": [
		"Rock",
		"Flying"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 80,
		"atk": 120,
		"def": 75,
		"spa": 74,
		"spd": 74,
		"spe": 140
	},
	"abilities": {
		"0": "Tough Claws"
	},
	"weightkg": 79,
	"eggGroups": [
		"Flying"
	],
	// "requiredItem": "Aerodactylite"
},
snorlax: {
	"num": -143,
	"name": "Snorlax",
	"types": [
		"Normal"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 160,
		"atk": 110,
		"def": 65,
		"spa": 87,
		"spd": 87,
		"spe": 30
	},
	"abilities": {
		"0": "Immunity",
		"1": "Thick Fat",
		"H": "Gluttony"
	},
	"weightkg": 460,
	"prevo": "Munchlax",
	"evoType": "levelFriendship",
	"eggGroups": [
		"Monster"
	],
	"canHatch": true,
	"canGigantamax": "G-Max Replenish"
},
articuno: {
	"num": -144,
	"name": "Articuno",
	"types": [
		"Ice",
		"Flying"
	],
	"gender": "N",
	"baseStats": {
		"hp": 90,
		"atk": 85,
		"def": 100,
		"spa": 110,
		"spd": 110,
		"spe": 85
	},
	"abilities": {
		"0": "Pressure",
		"H": "Snow Cloak"
	},
	"weightkg": 55.4,
	"tags": [
		"Sub-Legendary"
	],
	"eggGroups": [
		"Undiscovered"
	],
	"otherFormes": [
		"Articuno-Galar"
	],
	"formeOrder": [
		"Articuno",
		"Articuno-Galar"
	]
},
articunogalar: {
	"num": -144,
	"name": "Articuno-Galar",
	"baseSpecies": "Articuno",
	"forme": "Galar",
	"types": [
		"Psychic",
		"Flying"
	],
	"gender": "N",
	"baseStats": {
		"hp": 90,
		"atk": 85,
		"def": 85,
		"spa": 112,
		"spd": 112,
		"spe": 95
	},
	"abilities": {
		"0": "Competitive"
	},
	"weightkg": 50.9,
	"eggGroups": [
		"Undiscovered"
	]
},
zapdos: {
	"num": -145,
	"name": "Zapdos",
	"types": [
		"Electric",
		"Flying"
	],
	"gender": "N",
	"baseStats": {
		"hp": 90,
		"atk": 90,
		"def": 85,
		"spa": 107,
		"spd": 107,
		"spe": 100
	},
	"abilities": {
		"0": "Pressure",
		"H": "Static"
	},
	"weightkg": 52.6,
	"tags": [
		"Sub-Legendary"
	],
	"eggGroups": [
		"Undiscovered"
	],
	"otherFormes": [
		"Zapdos-Galar"
	],
	"formeOrder": [
		"Zapdos",
		"Zapdos-Galar"
	]
},
zapdosgalar: {
	"num": -145,
	"name": "Zapdos-Galar",
	"baseSpecies": "Zapdos",
	"forme": "Galar",
	"types": [
		"Fighting",
		"Flying"
	],
	"gender": "N",
	"baseStats": {
		"hp": 90,
		"atk": 125,
		"def": 90,
		"spa": 87,
		"spd": 87,
		"spe": 100
	},
	"abilities": {
		"0": "Defiant"
	},
	"weightkg": 58.2,
	"eggGroups": [
		"Undiscovered"
	]
},
moltres: {
	"num": -146,
	"name": "Moltres",
	"types": [
		"Fire",
		"Flying"
	],
	"gender": "N",
	"baseStats": {
		"hp": 90,
		"atk": 100,
		"def": 90,
		"spa": 105,
		"spd": 105,
		"spe": 90
	},
	"abilities": {
		"0": "Pressure",
		"H": "Flame Body"
	},
	"weightkg": 60,
	"tags": [
		"Sub-Legendary"
	],
	"eggGroups": [
		"Undiscovered"
	],
	"otherFormes": [
		"Moltres-Galar"
	],
	"formeOrder": [
		"Moltres",
		"Moltres-Galar"
	]
},
moltresgalar: {
	"num": -146,
	"name": "Moltres-Galar",
	"baseSpecies": "Moltres",
	"forme": "Galar",
	"types": [
		"Normal",
		"Flying"
	],
	"gender": "N",
	"baseStats": {
		"hp": 90,
		"atk": 85,
		"def": 90,
		"spa": 112,
		"spd": 112,
		"spe": 90
	},
	"abilities": {
		"0": "Berserk"
	},
	"weightkg": 66,
	"eggGroups": [
		"Undiscovered"
	]
},
dratini: {
	"num": -147,
	"name": "Dratini",
	"types": [
		"Dragon"
	],
	"baseStats": {
		"hp": 41,
		"atk": 64,
		"def": 45,
		"spa": 50,
		"spd": 50,
		"spe": 50
	},
	"abilities": {
		"0": "Shed Skin",
		"H": "Marvel Scale"
	},
	"weightkg": 3.3,
	"evos": [
		"Dragonair"
	],
	"eggGroups": [
		"Water 1",
		"Dragon"
	]
},
dragonair: {
	"num": -148,
	"name": "Dragonair",
	"types": [
		"Dragon"
	],
	"baseStats": {
		"hp": 61,
		"atk": 84,
		"def": 65,
		"spa": 70,
		"spd": 70,
		"spe": 70
	},
	"abilities": {
		"0": "Shed Skin",
		"H": "Marvel Scale"
	},
	"weightkg": 16.5,
	"prevo": "Dratini",
	"evoLevel": 30,
	"evos": [
		"Dragonite"
	],
	"eggGroups": [
		"Water 1",
		"Dragon"
	]
},
dragonite: {
	"num": -149,
	"name": "Dragonite",
	"types": [
		"Dragon",
		"Flying"
	],
	"baseStats": {
		"hp": 91,
		"atk": 134,
		"def": 95,
		"spa": 100,
		"spd": 100,
		"spe": 80
	},
	"abilities": {
		"0": "Inner Focus",
		"H": "Multiscale"
	},
	"weightkg": 210,
	"prevo": "Dragonair",
	"evoLevel": 55,
	"eggGroups": [
		"Water 1",
		"Dragon"
	]
},
mewtwo: {
	"num": -150,
	"name": "Mewtwo",
	"types": [
		"Psychic"
	],
	"gender": "N",
	"baseStats": {
		"hp": 106,
		"atk": 110,
		"def": 90,
		"spa": 122,
		"spd": 122,
		"spe": 130
	},
	"abilities": {
		"0": "Pressure",
		"H": "Unnerve"
	},
	"weightkg": 122,
	"eggGroups": [
		"Undiscovered"
	],
	"tags": [
		"Restricted Legendary"
	],
	"otherFormes": [
		"Mewtwo-Mega-X",
		"Mewtwo-Mega-Y"
	],
	"formeOrder": [
		"Mewtwo",
		"Mewtwo-Mega-X",
		"Mewtwo-Mega-Y"
	]
},
mewtwomegax: {
	"num": -150,
	"name": "Mewtwo-Mega-X",
	"baseSpecies": "Mewtwo",
	"forme": "Mega-X",
	"types": [
		"Psychic",
		"Fighting"
	],
	"gender": "N",
	"baseStats": {
		"hp": 106,
		"atk": 150,
		"def": 95,
		"spa": 124,
		"spd": 124,
		"spe": 130
	},
	"abilities": {
		"0": "Steadfast"
	},
	"weightkg": 127,
	"eggGroups": [
		"Undiscovered"
	],
	// "requiredItem": "Mewtwonite X"
},
mewtwomegay: {
	"num": -150,
	"name": "Mewtwo-Mega-Y",
	"baseSpecies": "Mewtwo",
	"forme": "Mega-Y",
	"types": [
		"Psychic"
	],
	"gender": "N",
	"baseStats": {
		"hp": 106,
		"atk": 130,
		"def": 80,
		"spa": 139,
		"spd": 139,
		"spe": 135
	},
	"abilities": {
		"0": "Insomnia"
	},
	"weightkg": 33,
	"eggGroups": [
		"Undiscovered"
	],
	// "requiredItem": "Mewtwonite Y"
},
mew: {
	"num": -151,
	"name": "Mew",
	"types": [
		"Psychic"
	],
	"gender": "N",
	"baseStats": {
		"hp": 100,
		"atk": 100,
		"def": 100,
		"spa": 100,
		"spd": 100,
		"spe": 100
	},
	"abilities": {
		"0": "Synchronize"
	},
	"weightkg": 4,
	"tags": [
		"Mythical"
	],
	"eggGroups": [
		"Undiscovered"
	]
},
chikorita: {
	"num": -152,
	"name": "Chikorita",
	"types": [
		"Grass"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 45,
		"atk": 49,
		"def": 65,
		"spa": 57,
		"spd": 57,
		"spe": 45
	},
	"abilities": {
		"0": "Overgrow",
		"H": "Leaf Guard"
	},
	"weightkg": 6.4,
	"evos": [
		"Bayleef"
	],
	"eggGroups": [
		"Monster",
		"Grass"
	]
},
bayleef: {
	"num": -153,
	"name": "Bayleef",
	"types": [
		"Grass"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 60,
		"atk": 62,
		"def": 80,
		"spa": 71,
		"spd": 71,
		"spe": 60
	},
	"abilities": {
		"0": "Overgrow",
		"H": "Leaf Guard"
	},
	"weightkg": 15.8,
	"prevo": "Chikorita",
	"evoLevel": 16,
	"evos": [
		"Meganium"
	],
	"eggGroups": [
		"Monster",
		"Grass"
	]
},
meganium: {
	"num": -154,
	"name": "Meganium",
	"types": [
		"Grass"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 80,
		"atk": 82,
		"def": 100,
		"spa": 91,
		"spd": 91,
		"spe": 80
	},
	"abilities": {
		"0": "Overgrow",
		"H": "Leaf Guard"
	},
	"weightkg": 100.5,
	"prevo": "Bayleef",
	"evoLevel": 32,
	"eggGroups": [
		"Monster",
		"Grass"
	]
},
cyndaquil: {
	"num": -155,
	"name": "Cyndaquil",
	"types": [
		"Fire"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 39,
		"atk": 52,
		"def": 43,
		"spa": 55,
		"spd": 55,
		"spe": 65
	},
	"abilities": {
		"0": "Blaze",
		"H": "Flash Fire"
	},
	"weightkg": 7.9,
	"evos": [
		"Quilava"
	],
	"eggGroups": [
		"Field"
	]
},
quilava: {
	"num": -156,
	"name": "Quilava",
	"types": [
		"Fire"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 58,
		"atk": 64,
		"def": 58,
		"spa": 72,
		"spd": 72,
		"spe": 80
	},
	"abilities": {
		"0": "Blaze",
		"H": "Flash Fire"
	},
	"weightkg": 19,
	"prevo": "Cyndaquil",
	"evoLevel": 14,
	"evos": [
		"Typhlosion",
		"Typhlosion-Hisui"
	],
	"eggGroups": [
		"Field"
	]
},
typhlosion: {
	"num": -157,
	"name": "Typhlosion",
	"types": [
		"Fire"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 78,
		"atk": 84,
		"def": 78,
		"spa": 97,
		"spd": 97,
		"spe": 100
	},
	"abilities": {
		"0": "Blaze",
		"H": "Flash Fire"
	},
	"weightkg": 79.5,
	"prevo": "Quilava",
	"evoLevel": 36,
	"eggGroups": [
		"Field"
	],
	"otherFormes": [
		"Typhlosion-Hisui"
	],
	"formeOrder": [
		"Typhlosion",
		"Typhlosion-Hisui"
	]
},
typhlosionhisui: {
	"num": -157,
	"name": "Typhlosion-Hisui",
	"baseSpecies": "Typhlosion",
	"forme": "Hisui",
	"types": [
		"Fire",
		"Ghost"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 73,
		"atk": 84,
		"def": 78,
		"spa": 102,
		"spd": 102,
		"spe": 95
	},
	"abilities": {
		"0": "Blaze",
		"H": "Flash Fire"
	},
	"weightkg": 69.8,
	"prevo": "Quilava",
	"evoLevel": 36,
	"eggGroups": [
		"Field"
	]
},
totodile: {
	"num": -158,
	"name": "Totodile",
	"types": [
		"Water"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 50,
		"atk": 65,
		"def": 64,
		"spa": 46,
		"spd": 46,
		"spe": 43
	},
	"abilities": {
		"0": "Torrent",
		"H": "Sheer Force"
	},
	"weightkg": 9.5,
	"evos": [
		"Croconaw"
	],
	"eggGroups": [
		"Monster",
		"Water 1"
	]
},
croconaw: {
	"num": -159,
	"name": "Croconaw",
	"types": [
		"Water"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 65,
		"atk": 80,
		"def": 80,
		"spa": 61,
		"spd": 61,
		"spe": 58
	},
	"abilities": {
		"0": "Torrent",
		"H": "Sheer Force"
	},
	"weightkg": 25,
	"prevo": "Totodile",
	"evoLevel": 18,
	"evos": [
		"Feraligatr"
	],
	"eggGroups": [
		"Monster",
		"Water 1"
	]
},
feraligatr: {
	"num": -160,
	"name": "Feraligatr",
	"types": [
		"Water"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 85,
		"atk": 105,
		"def": 100,
		"spa": 81,
		"spd": 81,
		"spe": 78
	},
	"abilities": {
		"0": "Torrent",
		"H": "Sheer Force"
	},
	"weightkg": 88.8,
	"prevo": "Croconaw",
	"evoLevel": 30,
	"eggGroups": [
		"Monster",
		"Water 1"
	]
},
sentret: {
	"num": -161,
	"name": "Sentret",
	"types": [
		"Normal"
	],
	"baseStats": {
		"hp": 35,
		"atk": 46,
		"def": 34,
		"spa": 40,
		"spd": 40,
		"spe": 20
	},
	"abilities": {
		"0": "Run Away",
		"1": "Keen Eye",
		"H": "Frisk"
	},
	"weightkg": 6,
	"evos": [
		"Furret"
	],
	"eggGroups": [
		"Field"
	]
},
furret: {
	"num": -162,
	"name": "Furret",
	"types": [
		"Normal"
	],
	"baseStats": {
		"hp": 85,
		"atk": 76,
		"def": 64,
		"spa": 50,
		"spd": 50,
		"spe": 90
	},
	"abilities": {
		"0": "Run Away",
		"1": "Keen Eye",
		"H": "Frisk"
	},
	"weightkg": 32.5,
	"prevo": "Sentret",
	"evoLevel": 15,
	"eggGroups": [
		"Field"
	]
},
hoothoot: {
	"num": -163,
	"name": "Hoothoot",
	"types": [
		"Normal",
		"Flying"
	],
	"baseStats": {
		"hp": 60,
		"atk": 30,
		"def": 30,
		"spa": 46,
		"spd": 46,
		"spe": 50
	},
	"abilities": {
		"0": "Insomnia",
		"1": "Keen Eye",
		"H": "Tinted Lens"
	},
	"weightkg": 21.2,
	"evos": [
		"Noctowl"
	],
	"eggGroups": [
		"Flying"
	]
},
noctowl: {
	"num": -164,
	"name": "Noctowl",
	"types": [
		"Normal",
		"Flying"
	],
	"baseStats": {
		"hp": 100,
		"atk": 50,
		"def": 50,
		"spa": 91,
		"spd": 91,
		"spe": 70
	},
	"abilities": {
		"0": "Insomnia",
		"1": "Keen Eye",
		"H": "Tinted Lens"
	},
	"weightkg": 40.8,
	"prevo": "Hoothoot",
	"evoLevel": 20,
	"eggGroups": [
		"Flying"
	]
},
ledyba: {
	"num": -165,
	"name": "Ledyba",
	"types": [
		"Bug",
		"Flying"
	],
	"baseStats": {
		"hp": 40,
		"atk": 20,
		"def": 30,
		"spa": 60,
		"spd": 60,
		"spe": 55
	},
	"abilities": {
		"0": "Swarm",
		"1": "Early Bird",
		"H": "Rattled"
	},
	"weightkg": 10.8,
	"evos": [
		"Ledian"
	],
	"eggGroups": [
		"Bug"
	]
},
ledian: {
	"num": -166,
	"name": "Ledian",
	"types": [
		"Bug",
		"Flying"
	],
	"baseStats": {
		"hp": 55,
		"atk": 35,
		"def": 50,
		"spa": 82,
		"spd": 82,
		"spe": 85
	},
	"abilities": {
		"0": "Swarm",
		"1": "Early Bird",
		"H": "Iron Fist"
	},
	"weightkg": 35.6,
	"prevo": "Ledyba",
	"evoLevel": 18,
	"eggGroups": [
		"Bug"
	]
},
spinarak: {
	"num": -167,
	"name": "Spinarak",
	"types": [
		"Bug",
		"Poison"
	],
	"baseStats": {
		"hp": 40,
		"atk": 60,
		"def": 40,
		"spa": 40,
		"spd": 40,
		"spe": 30
	},
	"abilities": {
		"0": "Swarm",
		"1": "Insomnia",
		"H": "Sniper"
	},
	"weightkg": 8.5,
	"evos": [
		"Ariados"
	],
	"eggGroups": [
		"Bug"
	]
},
ariados: {
	"num": -168,
	"name": "Ariados",
	"types": [
		"Bug",
		"Poison"
	],
	"baseStats": {
		"hp": 70,
		"atk": 90,
		"def": 70,
		"spa": 65,
		"spd": 65,
		"spe": 40
	},
	"abilities": {
		"0": "Swarm",
		"1": "Insomnia",
		"H": "Sniper"
	},
	"weightkg": 33.5,
	"prevo": "Spinarak",
	"evoLevel": 22,
	"eggGroups": [
		"Bug"
	]
},
crobat: {
	"num": -169,
	"name": "Crobat",
	"types": [
		"Poison",
		"Flying"
	],
	"baseStats": {
		"hp": 85,
		"atk": 90,
		"def": 80,
		"spa": 75,
		"spd": 75,
		"spe": 130
	},
	"abilities": {
		"0": "Inner Focus",
		"H": "Infiltrator"
	},
	"weightkg": 75,
	"prevo": "Golbat",
	"evoType": "levelFriendship",
	"eggGroups": [
		"Flying"
	]
},
chinchou: {
	"num": -170,
	"name": "Chinchou",
	"types": [
		"Water",
		"Electric"
	],
	"baseStats": {
		"hp": 75,
		"atk": 38,
		"def": 38,
		"spa": 56,
		"spd": 56,
		"spe": 67
	},
	"abilities": {
		"0": "Volt Absorb",
		"1": "Illuminate",
		"H": "Water Absorb"
	},
	"weightkg": 12,
	"evos": [
		"Lanturn"
	],
	"eggGroups": [
		"Water 2"
	]
},
lanturn: {
	"num": -171,
	"name": "Lanturn",
	"types": [
		"Water",
		"Electric"
	],
	"baseStats": {
		"hp": 125,
		"atk": 58,
		"def": 58,
		"spa": 76,
		"spd": 76,
		"spe": 67
	},
	"abilities": {
		"0": "Volt Absorb",
		"1": "Illuminate",
		"H": "Water Absorb"
	},
	"weightkg": 22.5,
	"prevo": "Chinchou",
	"evoLevel": 27,
	"eggGroups": [
		"Water 2"
	]
},
pichu: {
	"num": -172,
	"name": "Pichu",
	"types": [
		"Electric"
	],
	"baseStats": {
		"hp": 20,
		"atk": 40,
		"def": 15,
		"spa": 35,
		"spd": 35,
		"spe": 60
	},
	"abilities": {
		"0": "Static",
		"H": "Lightning Rod"
	},
	"weightkg": 2,
	"evos": [
		"Pikachu"
	],
	"eggGroups": [
		"Undiscovered"
	],
	"canHatch": true,
	"otherFormes": [
		"Pichu-Spiky-eared"
	],
	"formeOrder": [
		"Pichu",
		"Pichu-Spiky-eared"
	]
},
pichuspikyeared: {
	"num": -172,
	"name": "Pichu-Spiky-eared",
	"baseSpecies": "Pichu",
	"forme": "Spiky-eared",
	"types": [
		"Electric"
	],
	"baseStats": {
		"hp": 20,
		"atk": 40,
		"def": 15,
		"spa": 35,
		"spd": 35,
		"spe": 60
	},
	"abilities": {
		"0": "Static"
	},
	"weightkg": 2,
	"eggGroups": [
		"Undiscovered"
	],
	"gen": 4
},
cleffa: {
	"num": -173,
	"name": "Cleffa",
	"types": [
		"Normal"
	],
	"genderRatio": {
		"M": 0.25,
		"F": 0.75
	},
	"baseStats": {
		"hp": 50,
		"atk": 25,
		"def": 28,
		"spa": 50,
		"spd": 50,
		"spe": 15
	},
	"abilities": {
		"0": "Cute Charm",
		"1": "Magic Guard",
		"H": "Friend Guard"
	},
	"weightkg": 3,
	"evos": [
		"Clefairy"
	],
	"eggGroups": [
		"Undiscovered"
	],
	"canHatch": true
},
igglybuff: {
	"num": -174,
	"name": "Igglybuff",
	"types": [
		"Normal"
	],
	"genderRatio": {
		"M": 0.25,
		"F": 0.75
	},
	"baseStats": {
		"hp": 90,
		"atk": 30,
		"def": 15,
		"spa": 30,
		"spd": 30,
		"spe": 15
	},
	"abilities": {
		"0": "Cute Charm",
		"1": "Competitive",
		"H": "Friend Guard"
	},
	"weightkg": 1,
	"evos": [
		"Jigglypuff"
	],
	"eggGroups": [
		"Undiscovered"
	],
	"canHatch": true
},
togepi: {
	"num": -175,
	"name": "Togepi",
	"types": [
		"Normal"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 35,
		"atk": 20,
		"def": 65,
		"spa": 52,
		"spd": 52,
		"spe": 20
	},
	"abilities": {
		"0": "Hustle",
		"1": "Serene Grace",
		"H": "Super Luck"
	},
	"weightkg": 1.5,
	"evos": [
		"Togetic"
	],
	"eggGroups": [
		"Undiscovered"
	],
	"canHatch": true
},
togetic: {
	"num": -176,
	"name": "Togetic",
	"types": [
		"Normal",
		"Flying"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 55,
		"atk": 40,
		"def": 85,
		"spa": 92,
		"spd": 92,
		"spe": 40
	},
	"abilities": {
		"0": "Hustle",
		"1": "Serene Grace",
		"H": "Super Luck"
	},
	"weightkg": 3.2,
	"prevo": "Togepi",
	"evoType": "levelFriendship",
	"evos": [
		"Togekiss"
	],
	"eggGroups": [
		"Flying",
		"Fairy"
	]
},
natu: {
	"num": -177,
	"name": "Natu",
	"types": [
		"Psychic",
		"Flying"
	],
	"baseStats": {
		"hp": 40,
		"atk": 50,
		"def": 45,
		"spa": 57,
		"spd": 57,
		"spe": 70
	},
	"abilities": {
		"0": "Synchronize",
		"1": "Early Bird",
		"H": "Magic Bounce"
	},
	"weightkg": 2,
	"evos": [
		"Xatu"
	],
	"eggGroups": [
		"Flying"
	]
},
xatu: {
	"num": -178,
	"name": "Xatu",
	"types": [
		"Psychic",
		"Flying"
	],
	"baseStats": {
		"hp": 65,
		"atk": 75,
		"def": 70,
		"spa": 82,
		"spd": 82,
		"spe": 95
	},
	"abilities": {
		"0": "Synchronize",
		"1": "Early Bird",
		"H": "Magic Bounce"
	},
	"weightkg": 15,
	"prevo": "Natu",
	"evoLevel": 25,
	"eggGroups": [
		"Flying"
	]
},
mareep: {
	"num": -179,
	"name": "Mareep",
	"types": [
		"Electric"
	],
	"baseStats": {
		"hp": 55,
		"atk": 40,
		"def": 40,
		"spa": 55,
		"spd": 55,
		"spe": 35
	},
	"abilities": {
		"0": "Static",
		"H": "Plus"
	},
	"weightkg": 7.8,
	"evos": [
		"Flaaffy"
	],
	"eggGroups": [
		"Monster",
		"Field"
	]
},
flaaffy: {
	"num": -180,
	"name": "Flaaffy",
	"types": [
		"Electric"
	],
	"baseStats": {
		"hp": 70,
		"atk": 55,
		"def": 55,
		"spa": 70,
		"spd": 70,
		"spe": 45
	},
	"abilities": {
		"0": "Static",
		"H": "Plus"
	},
	"weightkg": 13.3,
	"prevo": "Mareep",
	"evoLevel": 15,
	"evos": [
		"Ampharos"
	],
	"eggGroups": [
		"Monster",
		"Field"
	]
},
ampharos: {
	"num": -181,
	"name": "Ampharos",
	"types": [
		"Electric"
	],
	"baseStats": {
		"hp": 90,
		"atk": 75,
		"def": 85,
		"spa": 102,
		"spd": 102,
		"spe": 55
	},
	"abilities": {
		"0": "Static",
		"H": "Plus"
	},
	"weightkg": 61.5,
	"prevo": "Flaaffy",
	"evoLevel": 30,
	"eggGroups": [
		"Monster",
		"Field"
	],
	"otherFormes": [
		"Ampharos-Mega"
	],
	"formeOrder": [
		"Ampharos",
		"Ampharos-Mega"
	]
},
ampharosmega: {
	"num": -181,
	"name": "Ampharos-Mega",
	"baseSpecies": "Ampharos",
	"forme": "Mega",
	"types": [
		"Electric",
		"Dragon"
	],
	"baseStats": {
		"hp": 90,
		"atk": 85,
		"def": 95,
		"spa": 119,
		"spd": 119,
		"spe": 50
	},
	"abilities": {
		"0": "Mold Breaker"
	},
	"weightkg": 61.5,
	"eggGroups": [
		"Monster",
		"Field"
	],
	// "requiredItem": "Ampharosite"
},
bellossom: {
	"num": -182,
	"name": "Bellossom",
	"types": [
		"Grass"
	],
	"baseStats": {
		"hp": 75,
		"atk": 80,
		"def": 95,
		"spa": 95,
		"spd": 95,
		"spe": 50
	},
	"abilities": {
		"0": "Chlorophyll",
		"H": "Healer"
	},
	"weightkg": 5.8,
	"prevo": "Gloom",
	"evoType": "useItem",
	"evoItem": "Sun Stone",
	"eggGroups": [
		"Grass"
	]
},
marill: {
	"num": -183,
	"name": "Marill",
	"types": [
		"Water",
		"Normal"
	],
	"baseStats": {
		"hp": 70,
		"atk": 20,
		"def": 50,
		"spa": 35,
		"spd": 35,
		"spe": 40
	},
	"abilities": {
		"0": "Thick Fat",
		"1": "Huge Power",
		"H": "Sap Sipper"
	},
	"weightkg": 8.5,
	"prevo": "Azurill",
	"evoType": "levelFriendship",
	"evos": [
		"Azumarill"
	],
	"eggGroups": [
		"Water 1",
		"Fairy"
	],
	"canHatch": true
},
azumarill: {
	"num": -184,
	"name": "Azumarill",
	"types": [
		"Water",
		"Normal"
	],
	"baseStats": {
		"hp": 100,
		"atk": 50,
		"def": 80,
		"spa": 70,
		"spd": 70,
		"spe": 50
	},
	"abilities": {
		"0": "Thick Fat",
		"1": "Huge Power",
		"H": "Sap Sipper"
	},
	"weightkg": 28.5,
	"prevo": "Marill",
	"evoLevel": 18,
	"eggGroups": [
		"Water 1",
		"Fairy"
	]
},
sudowoodo: {
	"num": -185,
	"name": "Sudowoodo",
	"types": [
		"Rock"
	],
	"baseStats": {
		"hp": 70,
		"atk": 100,
		"def": 115,
		"spa": 47,
		"spd": 47,
		"spe": 30
	},
	"abilities": {
		"0": "Sturdy",
		"1": "Rock Head",
		"H": "Rattled"
	},
	"weightkg": 38,
	"prevo": "Bonsly",
	"evoType": "levelMove",
	"evoMove": "Mimic",
	"eggGroups": [
		"Mineral"
	],
	"canHatch": true
},
politoed: {
	"num": -186,
	"name": "Politoed",
	"types": [
		"Water"
	],
	"baseStats": {
		"hp": 90,
		"atk": 75,
		"def": 75,
		"spa": 95,
		"spd": 95,
		"spe": 70
	},
	"abilities": {
		"0": "Water Absorb",
		"1": "Damp",
		"H": "Drizzle"
	},
	"weightkg": 33.9,
	"prevo": "Poliwhirl",
	"evoType": "trade",
	"evoItem": "King's Rock",
	"eggGroups": [
		"Water 1"
	]
},
hoppip: {
	"num": -187,
	"name": "Hoppip",
	"types": [
		"Grass",
		"Flying"
	],
	"baseStats": {
		"hp": 35,
		"atk": 35,
		"def": 40,
		"spa": 45,
		"spd": 45,
		"spe": 50
	},
	"abilities": {
		"0": "Chlorophyll",
		"1": "Leaf Guard",
		"H": "Infiltrator"
	},
	"weightkg": 0.5,
	"evos": [
		"Skiploom"
	],
	"eggGroups": [
		"Fairy",
		"Grass"
	]
},
skiploom: {
	"num": -188,
	"name": "Skiploom",
	"types": [
		"Grass",
		"Flying"
	],
	"baseStats": {
		"hp": 55,
		"atk": 45,
		"def": 50,
		"spa": 55,
		"spd": 55,
		"spe": 80
	},
	"abilities": {
		"0": "Chlorophyll",
		"1": "Leaf Guard",
		"H": "Infiltrator"
	},
	"weightkg": 1,
	"prevo": "Hoppip",
	"evoLevel": 18,
	"evos": [
		"Jumpluff"
	],
	"eggGroups": [
		"Fairy",
		"Grass"
	]
},
jumpluff: {
	"num": -189,
	"name": "Jumpluff",
	"types": [
		"Grass",
		"Flying"
	],
	"baseStats": {
		"hp": 75,
		"atk": 55,
		"def": 70,
		"spa": 75,
		"spd": 75,
		"spe": 110
	},
	"abilities": {
		"0": "Chlorophyll",
		"1": "Leaf Guard",
		"H": "Infiltrator"
	},
	"weightkg": 3,
	"prevo": "Skiploom",
	"evoLevel": 27,
	"eggGroups": [
		"Fairy",
		"Grass"
	]
},
aipom: {
	"num": -190,
	"name": "Aipom",
	"types": [
		"Normal"
	],
	"baseStats": {
		"hp": 55,
		"atk": 70,
		"def": 55,
		"spa": 47,
		"spd": 47,
		"spe": 85
	},
	"abilities": {
		"0": "Run Away",
		"1": "Pickup",
		"H": "Skill Link"
	},
	"weightkg": 11.5,
	"evos": [
		"Ambipom"
	],
	"eggGroups": [
		"Field"
	]
},
sunkern: {
	"num": -191,
	"name": "Sunkern",
	"types": [
		"Grass"
	],
	"baseStats": {
		"hp": 30,
		"atk": 30,
		"def": 30,
		"spa": 30,
		"spd": 30,
		"spe": 30
	},
	"abilities": {
		"0": "Chlorophyll",
		"1": "Solar Power",
		"H": "Early Bird"
	},
	"weightkg": 1.8,
	"evos": [
		"Sunflora"
	],
	"eggGroups": [
		"Grass"
	]
},
sunflora: {
	"num": -192,
	"name": "Sunflora",
	"types": [
		"Grass"
	],
	"baseStats": {
		"hp": 75,
		"atk": 75,
		"def": 55,
		"spa": 95,
		"spd": 95,
		"spe": 30
	},
	"abilities": {
		"0": "Chlorophyll",
		"1": "Solar Power",
		"H": "Early Bird"
	},
	"weightkg": 8.5,
	"prevo": "Sunkern",
	"evoType": "useItem",
	"evoItem": "Sun Stone",
	"eggGroups": [
		"Grass"
	]
},
yanma: {
	"num": -193,
	"name": "Yanma",
	"types": [
		"Bug",
		"Flying"
	],
	"baseStats": {
		"hp": 65,
		"atk": 65,
		"def": 45,
		"spa": 60,
		"spd": 60,
		"spe": 95
	},
	"abilities": {
		"0": "Speed Boost",
		"1": "Compound Eyes",
		"H": "Frisk"
	},
	"weightkg": 38,
	"evos": [
		"Yanmega"
	],
	"eggGroups": [
		"Bug"
	]
},
wooper: {
	"num": -194,
	"name": "Wooper",
	"types": [
		"Water",
		"Ground"
	],
	"baseStats": {
		"hp": 55,
		"atk": 45,
		"def": 45,
		"spa": 25,
		"spd": 25,
		"spe": 15
	},
	"abilities": {
		"0": "Damp",
		"1": "Water Absorb",
		"H": "Unaware"
	},
	"weightkg": 8.5,
	"evos": [
		"Quagsire"
	],
	"eggGroups": [
		"Water 1",
		"Field"
	]
},
quagsire: {
	"num": -195,
	"name": "Quagsire",
	"types": [
		"Water",
		"Ground"
	],
	"baseStats": {
		"hp": 95,
		"atk": 85,
		"def": 85,
		"spa": 65,
		"spd": 65,
		"spe": 35
	},
	"abilities": {
		"0": "Damp",
		"1": "Water Absorb",
		"H": "Unaware"
	},
	"weightkg": 75,
	"prevo": "Wooper",
	"evoLevel": 20,
	"eggGroups": [
		"Water 1",
		"Field"
	]
},
espeon: {
	"num": -196,
	"name": "Espeon",
	"types": [
		"Psychic"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 65,
		"atk": 65,
		"def": 60,
		"spa": 112,
		"spd": 112,
		"spe": 110
	},
	"abilities": {
		"0": "Synchronize",
		"H": "Magic Bounce"
	},
	"weightkg": 26.5,
	"prevo": "Eevee",
	"evoType": "levelFriendship",
	"evoCondition": "during the day",
	"eggGroups": [
		"Field"
	]
},
umbreon: {
	"num": -197,
	"name": "Umbreon",
	"types": [
		"Normal"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 95,
		"atk": 65,
		"def": 110,
		"spa": 95,
		"spd": 95,
		"spe": 65
	},
	"abilities": {
		"0": "Synchronize",
		"H": "Inner Focus"
	},
	"weightkg": 27,
	"prevo": "Eevee",
	"evoType": "levelFriendship",
	"evoCondition": "at night",
	"eggGroups": [
		"Field"
	]
},
murkrow: {
	"num": -198,
	"name": "Murkrow",
	"types": [
		"Normal",
		"Flying"
	],
	"baseStats": {
		"hp": 60,
		"atk": 85,
		"def": 42,
		"spa": 63,
		"spd": 63,
		"spe": 91
	},
	"abilities": {
		"0": "Insomnia",
		"1": "Super Luck",
		"H": "Prankster"
	},
	"weightkg": 2.1,
	"evos": [
		"Honchkrow"
	],
	"eggGroups": [
		"Flying"
	]
},
slowking: {
	"num": -199,
	"name": "Slowking",
	"types": [
		"Water",
		"Psychic"
	],
	"baseStats": {
		"hp": 95,
		"atk": 75,
		"def": 80,
		"spa": 105,
		"spd": 105,
		"spe": 30
	},
	"abilities": {
		"0": "Oblivious",
		"1": "Own Tempo",
		"H": "Regenerator"
	},
	"weightkg": 79.5,
	"prevo": "Slowpoke",
	"evoType": "trade",
	"evoItem": "King's Rock",
	"eggGroups": [
		"Monster",
		"Water 1"
	],
	"otherFormes": [
		"Slowking-Galar"
	],
	"formeOrder": [
		"Slowking",
		"Slowking-Galar"
	]
},
slowkinggalar: {
	"num": -199,
	"name": "Slowking-Galar",
	"baseSpecies": "Slowking",
	"forme": "Galar",
	"types": [
		"Poison",
		"Psychic"
	],
	"baseStats": {
		"hp": 95,
		"atk": 65,
		"def": 80,
		"spa": 110,
		"spd": 110,
		"spe": 30
	},
	"abilities": {
		"0": "Curious Medicine",
		"1": "Own Tempo",
		"H": "Regenerator"
	},
	"weightkg": 79.5,
	"prevo": "Slowpoke-Galar",
	"evoType": "useItem",
	"evoItem": "Galarica Wreath",
	"eggGroups": [
		"Monster",
		"Water 1"
	]
},
misdreavus: {
	"num": -200,
	"name": "Misdreavus",
	"types": [
		"Ghost"
	],
	"baseStats": {
		"hp": 60,
		"atk": 60,
		"def": 60,
		"spa": 85,
		"spd": 85,
		"spe": 85
	},
	"abilities": {
		"0": "Levitate"
	},
	"weightkg": 1,
	"evos": [
		"Mismagius"
	],
	"eggGroups": [
		"Amorphous"
	]
},
unown: {
	"num": -201,
	"name": "Unown",
	"baseForme": "A",
	"types": [
		"Psychic"
	],
	"gender": "N",
	"baseStats": {
		"hp": 48,
		"atk": 72,
		"def": 48,
		"spa": 60,
		"spd": 60,
		"spe": 48
	},
	"abilities": {
		"0": "Levitate"
	},
	"weightkg": 5,
	"eggGroups": [
		"Undiscovered"
	],
	"cosmeticFormes": [
		"Unown-B",
		"Unown-C",
		"Unown-D",
		"Unown-E",
		"Unown-F",
		"Unown-G",
		"Unown-H",
		"Unown-I",
		"Unown-J",
		"Unown-K",
		"Unown-L",
		"Unown-M",
		"Unown-N",
		"Unown-O",
		"Unown-P",
		"Unown-Q",
		"Unown-R",
		"Unown-S",
		"Unown-T",
		"Unown-U",
		"Unown-V",
		"Unown-W",
		"Unown-X",
		"Unown-Y",
		"Unown-Z",
		"Unown-Exclamation",
		"Unown-Question"
	],
	"formeOrder": [
		"Unown",
		"Unown-B",
		"Unown-C",
		"Unown-D",
		"Unown-E",
		"Unown-F",
		"Unown-G",
		"Unown-H",
		"Unown-I",
		"Unown-J",
		"Unown-K",
		"Unown-L",
		"Unown-M",
		"Unown-N",
		"Unown-O",
		"Unown-P",
		"Unown-Q",
		"Unown-R",
		"Unown-S",
		"Unown-T",
		"Unown-U",
		"Unown-V",
		"Unown-W",
		"Unown-X",
		"Unown-Y",
		"Unown-Z",
		"Unown-Exclamation",
		"Unown-Question"
	]
},
wobbuffet: {
	"num": -202,
	"name": "Wobbuffet",
	"types": [
		"Psychic"
	],
	"baseStats": {
		"hp": 190,
		"atk": 33,
		"def": 58,
		"spa": 45,
		"spd": 45,
		"spe": 33
	},
	"abilities": {
		"0": "Shadow Tag",
		"H": "Telepathy"
	},
	"weightkg": 28.5,
	"prevo": "Wynaut",
	"evoLevel": 15,
	"eggGroups": [
		"Amorphous"
	],
	"canHatch": true
},
girafarig: {
	"num": -203,
	"name": "Girafarig",
	"types": [
		"Normal",
		"Psychic"
	],
	"baseStats": {
		"hp": 70,
		"atk": 80,
		"def": 65,
		"spa": 77,
		"spd": 77,
		"spe": 85
	},
	"abilities": {
		"0": "Inner Focus",
		"1": "Early Bird",
		"H": "Sap Sipper"
	},
	"weightkg": 41.5,
	"eggGroups": [
		"Field"
	]
},
pineco: {
	"num": -204,
	"name": "Pineco",
	"types": [
		"Bug"
	],
	"baseStats": {
		"hp": 50,
		"atk": 65,
		"def": 90,
		"spa": 35,
		"spd": 35,
		"spe": 15
	},
	"abilities": {
		"0": "Sturdy",
		"H": "Overcoat"
	},
	"weightkg": 7.2,
	"evos": [
		"Forretress"
	],
	"eggGroups": [
		"Bug"
	]
},
forretress: {
	"num": -205,
	"name": "Forretress",
	"types": [
		"Bug",
		"Rock"
	],
	"baseStats": {
		"hp": 75,
		"atk": 90,
		"def": 140,
		"spa": 60,
		"spd": 60,
		"spe": 40
	},
	"abilities": {
		"0": "Sturdy",
		"H": "Overcoat"
	},
	"weightkg": 125.8,
	"prevo": "Pineco",
	"evoLevel": 31,
	"eggGroups": [
		"Bug"
	]
},
dunsparce: {
	"num": -206,
	"name": "Dunsparce",
	"types": [
		"Normal"
	],
	"baseStats": {
		"hp": 100,
		"atk": 70,
		"def": 70,
		"spa": 65,
		"spd": 65,
		"spe": 45
	},
	"abilities": {
		"0": "Serene Grace",
		"1": "Run Away",
		"H": "Rattled"
	},
	"weightkg": 14,
	"eggGroups": [
		"Field"
	]
},
gligar: {
	"num": -207,
	"name": "Gligar",
	"types": [
		"Ground",
		"Flying"
	],
	"baseStats": {
		"hp": 65,
		"atk": 75,
		"def": 105,
		"spa": 50,
		"spd": 50,
		"spe": 85
	},
	"abilities": {
		"0": "Hyper Cutter",
		"1": "Sand Veil",
		"H": "Immunity"
	},
	"weightkg": 64.8,
	"evos": [
		"Gliscor"
	],
	"eggGroups": [
		"Bug"
	]
},
steelix: {
	"num": -208,
	"name": "Steelix",
	"types": [
		"Rock",
		"Ground"
	],
	"baseStats": {
		"hp": 75,
		"atk": 85,
		"def": 200,
		"spa": 60,
		"spd": 60,
		"spe": 30
	},
	"abilities": {
		"0": "Rock Head",
		"1": "Sturdy",
		"H": "Sheer Force"
	},
	"weightkg": 400,
	"prevo": "Onix",
	"evoType": "trade",
	"evoItem": "Metal Coat",
	"eggGroups": [
		"Mineral"
	],
	"otherFormes": [
		"Steelix-Mega"
	],
	"formeOrder": [
		"Steelix",
		"Steelix-Mega"
	]
},
steelixmega: {
	"num": -208,
	"name": "Steelix-Mega",
	"baseSpecies": "Steelix",
	"forme": "Mega",
	"types": [
		"Rock",
		"Ground"
	],
	"baseStats": {
		"hp": 75,
		"atk": 105,
		"def": 215,
		"spa": 67,
		"spd": 67,
		"spe": 30
	},
	"abilities": {
		"0": "Sand Force"
	},
	"weightkg": 740,
	"eggGroups": [
		"Mineral"
	],
	// "requiredItem": "Steelixite"
},
snubbull: {
	"num": -209,
	"name": "Snubbull",
	"types": [
		"Normal"
	],
	"genderRatio": {
		"M": 0.25,
		"F": 0.75
	},
	"baseStats": {
		"hp": 60,
		"atk": 80,
		"def": 50,
		"spa": 40,
		"spd": 40,
		"spe": 30
	},
	"abilities": {
		"0": "Intimidate",
		"1": "Run Away",
		"H": "Rattled"
	},
	"weightkg": 7.8,
	"evos": [
		"Granbull"
	],
	"eggGroups": [
		"Field",
		"Fairy"
	]
},
granbull: {
	"num": -210,
	"name": "Granbull",
	"types": [
		"Normal"
	],
	"genderRatio": {
		"M": 0.25,
		"F": 0.75
	},
	"baseStats": {
		"hp": 90,
		"atk": 120,
		"def": 75,
		"spa": 60,
		"spd": 60,
		"spe": 45
	},
	"abilities": {
		"0": "Intimidate",
		"1": "Quick Feet",
		"H": "Rattled"
	},
	"weightkg": 48.7,
	"prevo": "Snubbull",
	"evoLevel": 23,
	"eggGroups": [
		"Field",
		"Fairy"
	]
},
qwilfish: {
	"num": -211,
	"name": "Qwilfish",
	"types": [
		"Water",
		"Poison"
	],
	"baseStats": {
		"hp": 65,
		"atk": 95,
		"def": 85,
		"spa": 55,
		"spd": 55,
		"spe": 85
	},
	"abilities": {
		"0": "Poison Point",
		"1": "Swift Swim",
		"H": "Intimidate"
	},
	"weightkg": 3.9,
	"eggGroups": [
		"Water 2"
	],
	"otherFormes": [
		"Qwilfish-Hisui"
	],
	"formeOrder": [
		"Qwilfish",
		"Qwilfish-Hisui"
	]
},
qwilfishhisui: {
	"num": -211,
	"name": "Qwilfish-Hisui",
	"baseSpecies": "Qwilfish",
	"forme": "Hisui",
	"types": [
		"Normal",
		"Poison"
	],
	"baseStats": {
		"hp": 65,
		"atk": 95,
		"def": 85,
		"spa": 55,
		"spd": 55,
		"spe": 85
	},
	"abilities": {
		"0": "Poison Point",
		"1": "Swift Swim",
		"H": "Intimidate"
	},
	"weightkg": 3.9,
	"evos": [
		"Overqwil"
	],
	"eggGroups": [
		"Water 2"
	]
},
scizor: {
	"num": -212,
	"name": "Scizor",
	"types": [
		"Bug",
		"Rock"
	],
	"baseStats": {
		"hp": 70,
		"atk": 130,
		"def": 100,
		"spa": 67,
		"spd": 67,
		"spe": 65
	},
	"abilities": {
		"0": "Swarm",
		"1": "Technician",
		"H": "Light Metal"
	},
	"weightkg": 118,
	"prevo": "Scyther",
	"evoType": "trade",
	"evoItem": "Metal Coat",
	"eggGroups": [
		"Bug"
	],
	"otherFormes": [
		"Scizor-Mega"
	],
	"formeOrder": [
		"Scizor",
		"Scizor-Mega"
	]
},
scizormega: {
	"num": -212,
	"name": "Scizor-Mega",
	"baseSpecies": "Scizor",
	"forme": "Mega",
	"types": [
		"Bug",
		"Rock"
	],
	"baseStats": {
		"hp": 70,
		"atk": 140,
		"def": 120,
		"spa": 74,
		"spd": 74,
		"spe": 70
	},
	"abilities": {
		"0": "Technician"
	},
	"weightkg": 125,
	"eggGroups": [
		"Bug"
	],
	// "requiredItem": "Scizorite"
},
shuckle: {
	"num": -213,
	"name": "Shuckle",
	"types": [
		"Bug",
		"Rock"
	],
	"baseStats": {
		"hp": 20,
		"atk": 10,
		"def": 230,
		"spa": 120,
		"spd": 120,
		"spe": 5
	},
	"abilities": {
		"0": "Sturdy",
		"1": "Gluttony",
		"H": "Contrary"
	},
	"weightkg": 20.5,
	"eggGroups": [
		"Bug"
	]
},
heracross: {
	"num": -214,
	"name": "Heracross",
	"types": [
		"Bug",
		"Fighting"
	],
	"baseStats": {
		"hp": 80,
		"atk": 125,
		"def": 75,
		"spa": 67,
		"spd": 67,
		"spe": 85
	},
	"abilities": {
		"0": "Swarm",
		"1": "Guts",
		"H": "Moxie"
	},
	"weightkg": 54,
	"eggGroups": [
		"Bug"
	],
	"otherFormes": [
		"Heracross-Mega"
	],
	"formeOrder": [
		"Heracross",
		"Heracross-Mega"
	]
},
heracrossmega: {
	"num": -214,
	"name": "Heracross-Mega",
	"baseSpecies": "Heracross",
	"forme": "Mega",
	"types": [
		"Bug",
		"Fighting"
	],
	"baseStats": {
		"hp": 80,
		"atk": 155,
		"def": 95,
		"spa": 69,
		"spd": 69,
		"spe": 80
	},
	"abilities": {
		"0": "Skill Link"
	},
	"weightkg": 62.5,
	"eggGroups": [
		"Bug"
	],
	// "requiredItem": "Heracronite"
},
sneasel: {
	"num": -215,
	"name": "Sneasel",
	"types": [
		"Normal",
		"Ice"
	],
	"baseStats": {
		"hp": 55,
		"atk": 95,
		"def": 55,
		"spa": 55,
		"spd": 55,
		"spe": 115
	},
	"abilities": {
		"0": "Inner Focus",
		"1": "Keen Eye",
		"H": "Pickpocket"
	},
	"weightkg": 28,
	"evos": [
		"Weavile"
	],
	"eggGroups": [
		"Field"
	],
	"otherFormes": [
		"Sneasel-Hisui"
	],
	"formeOrder": [
		"Sneasel",
		"Sneasel-Hisui"
	]
},
sneaselhisui: {
	"num": -215,
	"name": "Sneasel-Hisui",
	"baseSpecies": "Sneasel",
	"forme": "Hisui",
	"types": [
		"Fighting",
		"Poison"
	],
	"baseStats": {
		"hp": 55,
		"atk": 95,
		"def": 55,
		"spa": 55,
		"spd": 55,
		"spe": 115
	},
	"abilities": {
		"0": "Inner Focus",
		"1": "Keen Eye",
		"H": "Poison Touch"
	},
	"weightkg": 27,
	"evos": [
		"Sneasler"
	],
	"eggGroups": [
		"Field"
	]
},
teddiursa: {
	"num": -216,
	"name": "Teddiursa",
	"types": [
		"Normal"
	],
	"baseStats": {
		"hp": 60,
		"atk": 80,
		"def": 50,
		"spa": 50,
		"spd": 50,
		"spe": 40
	},
	"abilities": {
		"0": "Pickup",
		"1": "Quick Feet",
		"H": "Honey Gather"
	},
	"weightkg": 8.8,
	"evos": [
		"Ursaring"
	],
	"eggGroups": [
		"Field"
	]
},
ursaring: {
	"num": -217,
	"name": "Ursaring",
	"types": [
		"Normal"
	],
	"baseStats": {
		"hp": 90,
		"atk": 130,
		"def": 75,
		"spa": 75,
		"spd": 75,
		"spe": 55
	},
	"abilities": {
		"0": "Guts",
		"1": "Quick Feet",
		"H": "Unnerve"
	},
	"weightkg": 125.8,
	"prevo": "Teddiursa",
	"evoLevel": 30,
	"evos": [
		"Ursaluna"
	],
	"eggGroups": [
		"Field"
	]
},
slugma: {
	"num": -218,
	"name": "Slugma",
	"types": [
		"Fire"
	],
	"baseStats": {
		"hp": 40,
		"atk": 40,
		"def": 40,
		"spa": 55,
		"spd": 55,
		"spe": 20
	},
	"abilities": {
		"0": "Magma Armor",
		"1": "Flame Body",
		"H": "Weak Armor"
	},
	"weightkg": 35,
	"evos": [
		"Magcargo"
	],
	"eggGroups": [
		"Amorphous"
	]
},
magcargo: {
	"num": -219,
	"name": "Magcargo",
	"types": [
		"Fire",
		"Rock"
	],
	"baseStats": {
		"hp": 60,
		"atk": 50,
		"def": 120,
		"spa": 85,
		"spd": 85,
		"spe": 30
	},
	"abilities": {
		"0": "Magma Armor",
		"1": "Flame Body",
		"H": "Weak Armor"
	},
	"weightkg": 55,
	"prevo": "Slugma",
	"evoLevel": 38,
	"eggGroups": [
		"Amorphous"
	]
},
swinub: {
	"num": -220,
	"name": "Swinub",
	"types": [
		"Ice",
		"Ground"
	],
	"baseStats": {
		"hp": 50,
		"atk": 50,
		"def": 40,
		"spa": 30,
		"spd": 30,
		"spe": 50
	},
	"abilities": {
		"0": "Oblivious",
		"1": "Snow Cloak",
		"H": "Thick Fat"
	},
	"weightkg": 6.5,
	"evos": [
		"Piloswine"
	],
	"eggGroups": [
		"Field"
	]
},
piloswine: {
	"num": -221,
	"name": "Piloswine",
	"types": [
		"Ice",
		"Ground"
	],
	"baseStats": {
		"hp": 100,
		"atk": 100,
		"def": 80,
		"spa": 60,
		"spd": 60,
		"spe": 50
	},
	"abilities": {
		"0": "Oblivious",
		"1": "Snow Cloak",
		"H": "Thick Fat"
	},
	"weightkg": 55.8,
	"prevo": "Swinub",
	"evoLevel": 33,
	"evos": [
		"Mamoswine"
	],
	"eggGroups": [
		"Field"
	]
},
corsola: {
	"num": -222,
	"name": "Corsola",
	"types": [
		"Water",
		"Rock"
	],
	"genderRatio": {
		"M": 0.25,
		"F": 0.75
	},
	"baseStats": {
		"hp": 65,
		"atk": 55,
		"def": 95,
		"spa": 80,
		"spd": 80,
		"spe": 35
	},
	"abilities": {
		"0": "Hustle",
		"1": "Natural Cure",
		"H": "Regenerator"
	},
	"weightkg": 5,
	"eggGroups": [
		"Water 1",
		"Water 3"
	],
	"otherFormes": [
		"Corsola-Galar"
	],
	"formeOrder": [
		"Corsola",
		"Corsola-Galar"
	]
},
corsolagalar: {
	"num": -222,
	"name": "Corsola-Galar",
	"baseSpecies": "Corsola",
	"forme": "Galar",
	"types": [
		"Ghost"
	],
	"genderRatio": {
		"M": 0.25,
		"F": 0.75
	},
	"baseStats": {
		"hp": 60,
		"atk": 55,
		"def": 100,
		"spa": 82,
		"spd": 82,
		"spe": 30
	},
	"abilities": {
		"0": "Weak Armor",
		"H": "Cursed Body"
	},
	"weightkg": 0.5,
	"evos": [
		"Cursola"
	],
	"eggGroups": [
		"Water 1",
		"Water 3"
	]
},
remoraid: {
	"num": -223,
	"name": "Remoraid",
	"types": [
		"Water"
	],
	"baseStats": {
		"hp": 35,
		"atk": 65,
		"def": 35,
		"spa": 50,
		"spd": 50,
		"spe": 65
	},
	"abilities": {
		"0": "Hustle",
		"1": "Sniper",
		"H": "Moody"
	},
	"weightkg": 12,
	"evos": [
		"Octillery"
	],
	"eggGroups": [
		"Water 1",
		"Water 2"
	]
},
octillery: {
	"num": -224,
	"name": "Octillery",
	"types": [
		"Water"
	],
	"baseStats": {
		"hp": 75,
		"atk": 105,
		"def": 75,
		"spa": 90,
		"spd": 90,
		"spe": 45
	},
	"abilities": {
		"0": "Suction Cups",
		"1": "Sniper",
		"H": "Moody"
	},
	"weightkg": 28.5,
	"prevo": "Remoraid",
	"evoLevel": 25,
	"eggGroups": [
		"Water 1",
		"Water 2"
	]
},
delibird: {
	"num": -225,
	"name": "Delibird",
	"types": [
		"Ice",
		"Flying"
	],
	"baseStats": {
		"hp": 45,
		"atk": 55,
		"def": 45,
		"spa": 55,
		"spd": 55,
		"spe": 75
	},
	"abilities": {
		"0": "Vital Spirit",
		"1": "Hustle",
		"H": "Insomnia"
	},
	"weightkg": 16,
	"eggGroups": [
		"Water 1",
		"Field"
	]
},
mantine: {
	"num": -226,
	"name": "Mantine",
	"types": [
		"Water",
		"Flying"
	],
	"baseStats": {
		"hp": 85,
		"atk": 40,
		"def": 70,
		"spa": 110,
		"spd": 110,
		"spe": 70
	},
	"abilities": {
		"0": "Swift Swim",
		"1": "Water Absorb",
		"H": "Water Veil"
	},
	"weightkg": 220,
	"prevo": "Mantyke",
	"evoType": "levelExtra",
	"evoCondition": "with a Remoraid in party",
	"eggGroups": [
		"Water 1"
	],
	"canHatch": true
},
skarmory: {
	"num": -227,
	"name": "Skarmory",
	"types": [
		"Rock",
		"Flying"
	],
	"baseStats": {
		"hp": 65,
		"atk": 80,
		"def": 140,
		"spa": 55,
		"spd": 55,
		"spe": 70
	},
	"abilities": {
		"0": "Keen Eye",
		"1": "Sturdy",
		"H": "Weak Armor"
	},
	"weightkg": 50.5,
	"eggGroups": [
		"Flying"
	]
},
houndour: {
	"num": -228,
	"name": "Houndour",
	"types": [
		"Normal",
		"Fire"
	],
	"baseStats": {
		"hp": 45,
		"atk": 60,
		"def": 30,
		"spa": 65,
		"spd": 65,
		"spe": 65
	},
	"abilities": {
		"0": "Early Bird",
		"1": "Flash Fire",
		"H": "Unnerve"
	},
	"weightkg": 10.8,
	"evos": [
		"Houndoom"
	],
	"eggGroups": [
		"Field"
	]
},
houndoom: {
	"num": -229,
	"name": "Houndoom",
	"types": [
		"Normal",
		"Fire"
	],
	"baseStats": {
		"hp": 75,
		"atk": 90,
		"def": 50,
		"spa": 95,
		"spd": 95,
		"spe": 95
	},
	"abilities": {
		"0": "Early Bird",
		"1": "Flash Fire",
		"H": "Unnerve"
	},
	"weightkg": 35,
	"prevo": "Houndour",
	"evoLevel": 24,
	"eggGroups": [
		"Field"
	],
	"otherFormes": [
		"Houndoom-Mega"
	],
	"formeOrder": [
		"Houndoom",
		"Houndoom-Mega"
	]
},
houndoommega: {
	"num": -229,
	"name": "Houndoom-Mega",
	"baseSpecies": "Houndoom",
	"forme": "Mega",
	"types": [
		"Normal",
		"Fire"
	],
	"baseStats": {
		"hp": 75,
		"atk": 90,
		"def": 70,
		"spa": 104,
		"spd": 104,
		"spe": 105
	},
	"abilities": {
		"0": "Solar Power"
	},
	"weightkg": 49.5,
	"eggGroups": [
		"Field"
	],
	// "requiredItem": "Houndoominite"
},
kingdra: {
	"num": -230,
	"name": "Kingdra",
	"types": [
		"Water",
		"Dragon"
	],
	"baseStats": {
		"hp": 75,
		"atk": 95,
		"def": 95,
		"spa": 95,
		"spd": 95,
		"spe": 85
	},
	"abilities": {
		"0": "Swift Swim",
		"1": "Sniper",
		"H": "Damp"
	},
	"weightkg": 152,
	"prevo": "Seadra",
	"evoType": "trade",
	"evoItem": "Dragon Scale",
	"eggGroups": [
		"Water 1",
		"Dragon"
	]
},
phanpy: {
	"num": -231,
	"name": "Phanpy",
	"types": [
		"Ground"
	],
	"baseStats": {
		"hp": 90,
		"atk": 60,
		"def": 60,
		"spa": 40,
		"spd": 40,
		"spe": 40
	},
	"abilities": {
		"0": "Pickup",
		"H": "Sand Veil"
	},
	"weightkg": 33.5,
	"evos": [
		"Donphan"
	],
	"eggGroups": [
		"Field"
	]
},
donphan: {
	"num": -232,
	"name": "Donphan",
	"types": [
		"Ground"
	],
	"baseStats": {
		"hp": 90,
		"atk": 120,
		"def": 120,
		"spa": 60,
		"spd": 60,
		"spe": 50
	},
	"abilities": {
		"0": "Sturdy",
		"H": "Sand Veil"
	},
	"weightkg": 120,
	"prevo": "Phanpy",
	"evoLevel": 25,
	"eggGroups": [
		"Field"
	]
},
porygon2: {
	"num": -233,
	"name": "Porygon2",
	"types": [
		"Normal"
	],
	"gender": "N",
	"baseStats": {
		"hp": 85,
		"atk": 80,
		"def": 90,
		"spa": 100,
		"spd": 100,
		"spe": 60
	},
	"abilities": {
		"0": "Trace",
		"1": "Download",
		"H": "Analytic"
	},
	"weightkg": 32.5,
	"prevo": "Porygon",
	"evoType": "trade",
	"evoItem": "Up-Grade",
	"evos": [
		"Porygon-Z"
	],
	"eggGroups": [
		"Mineral"
	]
},
stantler: {
	"num": -234,
	"name": "Stantler",
	"types": [
		"Normal"
	],
	"baseStats": {
		"hp": 73,
		"atk": 95,
		"def": 62,
		"spa": 75,
		"spd": 75,
		"spe": 85
	},
	"abilities": {
		"0": "Intimidate",
		"1": "Frisk",
		"H": "Sap Sipper"
	},
	"weightkg": 71.2,
	"evos": [
		"Wyrdeer"
	],
	"eggGroups": [
		"Field"
	]
},
smeargle: {
	"num": -235,
	"name": "Smeargle",
	"types": [
		"Normal"
	],
	"baseStats": {
		"hp": 55,
		"atk": 20,
		"def": 35,
		"spa": 32,
		"spd": 32,
		"spe": 75
	},
	"abilities": {
		"0": "Own Tempo",
		"1": "Technician",
		"H": "Moody"
	},
	"weightkg": 58,
	"eggGroups": [
		"Field"
	]
},
tyrogue: {
	"num": -236,
	"name": "Tyrogue",
	"types": [
		"Fighting"
	],
	"gender": "M",
	"baseStats": {
		"hp": 35,
		"atk": 35,
		"def": 35,
		"spa": 35,
		"spd": 35,
		"spe": 35
	},
	"abilities": {
		"0": "Guts",
		"1": "Steadfast",
		"H": "Vital Spirit"
	},
	"weightkg": 21,
	"evos": [
		"Hitmonlee",
		"Hitmonchan",
		"Hitmontop"
	],
	"eggGroups": [
		"Undiscovered"
	],
	"canHatch": true
},
hitmontop: {
	"num": -237,
	"name": "Hitmontop",
	"types": [
		"Fighting"
	],
	"gender": "M",
	"baseStats": {
		"hp": 50,
		"atk": 95,
		"def": 95,
		"spa": 72,
		"spd": 72,
		"spe": 70
	},
	"abilities": {
		"0": "Intimidate",
		"1": "Technician",
		"H": "Steadfast"
	},
	"weightkg": 48,
	"prevo": "Tyrogue",
	"evoLevel": 20,
	"evoCondition": "with an Atk stat equal to its Def stat",
	"eggGroups": [
		"Human-Like"
	]
},
smoochum: {
	"num": -238,
	"name": "Smoochum",
	"types": [
		"Ice",
		"Psychic"
	],
	"gender": "F",
	"baseStats": {
		"hp": 45,
		"atk": 30,
		"def": 15,
		"spa": 75,
		"spd": 75,
		"spe": 65
	},
	"abilities": {
		"0": "Oblivious",
		"1": "Forewarn",
		"H": "Hydration"
	},
	"weightkg": 6,
	"evos": [
		"Jynx"
	],
	"eggGroups": [
		"Undiscovered"
	],
	"canHatch": true
},
elekid: {
	"num": -239,
	"name": "Elekid",
	"types": [
		"Electric"
	],
	"genderRatio": {
		"M": 0.75,
		"F": 0.25
	},
	"baseStats": {
		"hp": 45,
		"atk": 63,
		"def": 37,
		"spa": 60,
		"spd": 60,
		"spe": 95
	},
	"abilities": {
		"0": "Static",
		"H": "Vital Spirit"
	},
	"weightkg": 23.5,
	"evos": [
		"Electabuzz"
	],
	"eggGroups": [
		"Undiscovered"
	],
	"canHatch": true
},
magby: {
	"num": -240,
	"name": "Magby",
	"types": [
		"Fire"
	],
	"genderRatio": {
		"M": 0.75,
		"F": 0.25
	},
	"baseStats": {
		"hp": 45,
		"atk": 75,
		"def": 37,
		"spa": 62,
		"spd": 62,
		"spe": 83
	},
	"abilities": {
		"0": "Flame Body",
		"H": "Vital Spirit"
	},
	"weightkg": 21.4,
	"evos": [
		"Magmar"
	],
	"eggGroups": [
		"Undiscovered"
	],
	"canHatch": true
},
miltank: {
	"num": -241,
	"name": "Miltank",
	"types": [
		"Normal"
	],
	"gender": "F",
	"baseStats": {
		"hp": 95,
		"atk": 80,
		"def": 105,
		"spa": 55,
		"spd": 55,
		"spe": 100
	},
	"abilities": {
		"0": "Thick Fat",
		"1": "Scrappy",
		"H": "Sap Sipper"
	},
	"weightkg": 75.5,
	"eggGroups": [
		"Field"
	]
},
blissey: {
	"num": -242,
	"name": "Blissey",
	"types": [
		"Normal"
	],
	"gender": "F",
	"baseStats": {
		"hp": 255,
		"atk": 10,
		"def": 10,
		"spa": 105,
		"spd": 105,
		"spe": 55
	},
	"abilities": {
		"0": "Natural Cure",
		"1": "Serene Grace",
		"H": "Healer"
	},
	"weightkg": 46.8,
	"prevo": "Chansey",
	"evoType": "levelFriendship",
	"eggGroups": [
		"Fairy"
	]
},
raikou: {
	"num": -243,
	"name": "Raikou",
	"types": [
		"Electric"
	],
	"gender": "N",
	"baseStats": {
		"hp": 90,
		"atk": 85,
		"def": 75,
		"spa": 107,
		"spd": 107,
		"spe": 115
	},
	"abilities": {
		"0": "Pressure",
		"H": "Inner Focus"
	},
	"weightkg": 178,
	"tags": [
		"Sub-Legendary"
	],
	"eggGroups": [
		"Undiscovered"
	]
},
entei: {
	"num": -244,
	"name": "Entei",
	"types": [
		"Fire"
	],
	"gender": "N",
	"baseStats": {
		"hp": 115,
		"atk": 115,
		"def": 85,
		"spa": 82,
		"spd": 82,
		"spe": 100
	},
	"abilities": {
		"0": "Pressure",
		"H": "Inner Focus"
	},
	"weightkg": 198,
	"tags": [
		"Sub-Legendary"
	],
	"eggGroups": [
		"Undiscovered"
	]
},
suicune: {
	"num": -245,
	"name": "Suicune",
	"types": [
		"Water"
	],
	"gender": "N",
	"baseStats": {
		"hp": 100,
		"atk": 75,
		"def": 115,
		"spa": 102,
		"spd": 102,
		"spe": 85
	},
	"abilities": {
		"0": "Pressure",
		"H": "Inner Focus"
	},
	"weightkg": 187,
	"tags": [
		"Sub-Legendary"
	],
	"eggGroups": [
		"Undiscovered"
	]
},
larvitar: {
	"num": -246,
	"name": "Larvitar",
	"types": [
		"Rock",
		"Ground"
	],
	"baseStats": {
		"hp": 50,
		"atk": 64,
		"def": 50,
		"spa": 47,
		"spd": 47,
		"spe": 41
	},
	"abilities": {
		"0": "Guts",
		"H": "Sand Veil"
	},
	"weightkg": 72,
	"evos": [
		"Pupitar"
	],
	"eggGroups": [
		"Monster"
	]
},
pupitar: {
	"num": -247,
	"name": "Pupitar",
	"types": [
		"Rock",
		"Ground"
	],
	"baseStats": {
		"hp": 70,
		"atk": 84,
		"def": 70,
		"spa": 67,
		"spd": 67,
		"spe": 51
	},
	"abilities": {
		"0": "Shed Skin"
	},
	"weightkg": 152,
	"prevo": "Larvitar",
	"evoLevel": 30,
	"evos": [
		"Tyranitar"
	],
	"eggGroups": [
		"Monster"
	]
},
tyranitar: {
	"num": -248,
	"name": "Tyranitar",
	"types": [
		"Rock",
		"Normal"
	],
	"baseStats": {
		"hp": 100,
		"atk": 134,
		"def": 110,
		"spa": 97,
		"spd": 97,
		"spe": 61
	},
	"abilities": {
		"0": "Sand Stream",
		"H": "Unnerve"
	},
	"weightkg": 202,
	"prevo": "Pupitar",
	"evoLevel": 55,
	"eggGroups": [
		"Monster"
	],
	"otherFormes": [
		"Tyranitar-Mega"
	],
	"formeOrder": [
		"Tyranitar",
		"Tyranitar-Mega"
	]
},
tyranitarmega: {
	"num": -248,
	"name": "Tyranitar-Mega",
	"baseSpecies": "Tyranitar",
	"forme": "Mega",
	"types": [
		"Rock",
		"Normal"
	],
	"baseStats": {
		"hp": 100,
		"atk": 149,
		"def": 130,
		"spa": 102,
		"spd": 102,
		"spe": 66
	},
	"abilities": {
		"0": "Sand Stream"
	},
	"weightkg": 255,
	"eggGroups": [
		"Monster"
	],
	// "requiredItem": "Tyranitarite"
},
lugia: {
	"num": -249,
	"name": "Lugia",
	"types": [
		"Psychic",
		"Flying"
	],
	"gender": "N",
	"baseStats": {
		"hp": 106,
		"atk": 90,
		"def": 130,
		"spa": 122,
		"spd": 122,
		"spe": 110
	},
	"abilities": {
		"0": "Pressure",
		"H": "Multiscale"
	},
	"weightkg": 216,
	"tags": [
		"Restricted Legendary"
	],
	"eggGroups": [
		"Undiscovered"
	]
},
hooh: {
	"num": -250,
	"name": "Ho-Oh",
	"types": [
		"Fire",
		"Flying"
	],
	"gender": "N",
	"baseStats": {
		"hp": 106,
		"atk": 130,
		"def": 90,
		"spa": 132,
		"spd": 132,
		"spe": 90
	},
	"abilities": {
		"0": "Pressure",
		"H": "Regenerator"
	},
	"weightkg": 199,
	"tags": [
		"Restricted Legendary"
	],
	"eggGroups": [
		"Undiscovered"
	]
},
celebi: {
	"num": -251,
	"name": "Celebi",
	"types": [
		"Psychic",
		"Grass"
	],
	"gender": "N",
	"baseStats": {
		"hp": 100,
		"atk": 100,
		"def": 100,
		"spa": 100,
		"spd": 100,
		"spe": 100
	},
	"abilities": {
		"0": "Natural Cure"
	},
	"weightkg": 5,
	"tags": [
		"Mythical"
	],
	"eggGroups": [
		"Undiscovered"
	]
},
treecko: {
	"num": -252,
	"name": "Treecko",
	"types": [
		"Grass"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 40,
		"atk": 45,
		"def": 35,
		"spa": 60,
		"spd": 60,
		"spe": 70
	},
	"abilities": {
		"0": "Overgrow",
		"H": "Unburden"
	},
	"weightkg": 5,
	"evos": [
		"Grovyle"
	],
	"eggGroups": [
		"Monster",
		"Dragon"
	]
},
grovyle: {
	"num": -253,
	"name": "Grovyle",
	"types": [
		"Grass"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 50,
		"atk": 65,
		"def": 45,
		"spa": 75,
		"spd": 75,
		"spe": 95
	},
	"abilities": {
		"0": "Overgrow",
		"H": "Unburden"
	},
	"weightkg": 21.6,
	"prevo": "Treecko",
	"evoLevel": 16,
	"evos": [
		"Sceptile"
	],
	"eggGroups": [
		"Monster",
		"Dragon"
	]
},
sceptile: {
	"num": -254,
	"name": "Sceptile",
	"types": [
		"Grass"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 70,
		"atk": 85,
		"def": 65,
		"spa": 95,
		"spd": 95,
		"spe": 120
	},
	"abilities": {
		"0": "Overgrow",
		"H": "Unburden"
	},
	"weightkg": 52.2,
	"prevo": "Grovyle",
	"evoLevel": 36,
	"eggGroups": [
		"Monster",
		"Dragon"
	],
	"otherFormes": [
		"Sceptile-Mega"
	],
	"formeOrder": [
		"Sceptile",
		"Sceptile-Mega"
	]
},
sceptilemega: {
	"num": -254,
	"name": "Sceptile-Mega",
	"baseSpecies": "Sceptile",
	"forme": "Mega",
	"types": [
		"Grass",
		"Dragon"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 70,
		"atk": 97,
		"def": 70,
		"spa": 105,
		"spd": 105,
		"spe": 132
	},
	"abilities": {
		"0": "Lightning Rod"
	},
	"weightkg": 55.2,
	"eggGroups": [
		"Monster",
		"Dragon"
	],
	// "requiredItem": "Sceptilite"
},
torchic: {
	"num": -255,
	"name": "Torchic",
	"types": [
		"Fire"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 45,
		"atk": 60,
		"def": 40,
		"spa": 60,
		"spd": 60,
		"spe": 45
	},
	"abilities": {
		"0": "Blaze",
		"H": "Speed Boost"
	},
	"weightkg": 2.5,
	"evos": [
		"Combusken"
	],
	"eggGroups": [
		"Field"
	]
},
combusken: {
	"num": -256,
	"name": "Combusken",
	"types": [
		"Fire",
		"Fighting"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 60,
		"atk": 85,
		"def": 60,
		"spa": 72,
		"spd": 72,
		"spe": 55
	},
	"abilities": {
		"0": "Blaze",
		"H": "Speed Boost"
	},
	"weightkg": 19.5,
	"prevo": "Torchic",
	"evoLevel": 16,
	"evos": [
		"Blaziken"
	],
	"eggGroups": [
		"Field"
	]
},
blaziken: {
	"num": -257,
	"name": "Blaziken",
	"types": [
		"Fire",
		"Fighting"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 80,
		"atk": 120,
		"def": 70,
		"spa": 90,
		"spd": 90,
		"spe": 80
	},
	"abilities": {
		"0": "Blaze",
		"H": "Speed Boost"
	},
	"weightkg": 52,
	"prevo": "Combusken",
	"evoLevel": 36,
	"eggGroups": [
		"Field"
	],
	"otherFormes": [
		"Blaziken-Mega"
	],
	"formeOrder": [
		"Blaziken",
		"Blaziken-Mega"
	]
},
blazikenmega: {
	"num": -257,
	"name": "Blaziken-Mega",
	"baseSpecies": "Blaziken",
	"forme": "Mega",
	"types": [
		"Fire",
		"Fighting"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 80,
		"atk": 140,
		"def": 75,
		"spa": 97,
		"spd": 97,
		"spe": 90
	},
	"abilities": {
		"0": "Speed Boost"
	},
	"weightkg": 52,
	"eggGroups": [
		"Field"
	],
	// "requiredItem": "Blazikenite"
},
mudkip: {
	"num": -258,
	"name": "Mudkip",
	"types": [
		"Water"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 50,
		"atk": 70,
		"def": 50,
		"spa": 50,
		"spd": 50,
		"spe": 40
	},
	"abilities": {
		"0": "Torrent",
		"H": "Damp"
	},
	"weightkg": 7.6,
	"evos": [
		"Marshtomp"
	],
	"eggGroups": [
		"Monster",
		"Water 1"
	]
},
marshtomp: {
	"num": -259,
	"name": "Marshtomp",
	"types": [
		"Water",
		"Ground"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 70,
		"atk": 85,
		"def": 70,
		"spa": 65,
		"spd": 65,
		"spe": 50
	},
	"abilities": {
		"0": "Torrent",
		"H": "Damp"
	},
	"weightkg": 28,
	"prevo": "Mudkip",
	"evoLevel": 16,
	"evos": [
		"Swampert"
	],
	"eggGroups": [
		"Monster",
		"Water 1"
	]
},
swampert: {
	"num": -260,
	"name": "Swampert",
	"types": [
		"Water",
		"Ground"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 100,
		"atk": 110,
		"def": 90,
		"spa": 87,
		"spd": 87,
		"spe": 60
	},
	"abilities": {
		"0": "Torrent",
		"H": "Damp"
	},
	"weightkg": 81.9,
	"prevo": "Marshtomp",
	"evoLevel": 36,
	"eggGroups": [
		"Monster",
		"Water 1"
	],
	"otherFormes": [
		"Swampert-Mega"
	],
	"formeOrder": [
		"Swampert",
		"Swampert-Mega"
	]
},
swampertmega: {
	"num": -260,
	"name": "Swampert-Mega",
	"baseSpecies": "Swampert",
	"forme": "Mega",
	"types": [
		"Water",
		"Ground"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 100,
		"atk": 130,
		"def": 100,
		"spa": 94,
		"spd": 94,
		"spe": 65
	},
	"abilities": {
		"0": "Swift Swim"
	},
	"weightkg": 102,
	"eggGroups": [
		"Monster",
		"Water 1"
	],
	// "requiredItem": "Swampertite"
},
poochyena: {
	"num": -261,
	"name": "Poochyena",
	"types": [
		"Normal"
	],
	"baseStats": {
		"hp": 35,
		"atk": 55,
		"def": 35,
		"spa": 30,
		"spd": 30,
		"spe": 35
	},
	"abilities": {
		"0": "Run Away",
		"1": "Quick Feet",
		"H": "Rattled"
	},
	"weightkg": 13.6,
	"evos": [
		"Mightyena"
	],
	"eggGroups": [
		"Field"
	]
},
mightyena: {
	"num": -262,
	"name": "Mightyena",
	"types": [
		"Normal"
	],
	"baseStats": {
		"hp": 70,
		"atk": 90,
		"def": 70,
		"spa": 60,
		"spd": 60,
		"spe": 70
	},
	"abilities": {
		"0": "Intimidate",
		"1": "Quick Feet",
		"H": "Moxie"
	},
	"weightkg": 37,
	"prevo": "Poochyena",
	"evoLevel": 18,
	"eggGroups": [
		"Field"
	]
},
zigzagoon: {
	"num": -263,
	"name": "Zigzagoon",
	"types": [
		"Normal"
	],
	"baseStats": {
		"hp": 38,
		"atk": 30,
		"def": 41,
		"spa": 35,
		"spd": 35,
		"spe": 60
	},
	"abilities": {
		"0": "Pickup",
		"1": "Gluttony",
		"H": "Quick Feet"
	},
	"weightkg": 17.5,
	"evos": [
		"Linoone"
	],
	"eggGroups": [
		"Field"
	],
	"otherFormes": [
		"Zigzagoon-Galar"
	],
	"formeOrder": [
		"Zigzagoon",
		"Zigzagoon-Galar"
	]
},
zigzagoongalar: {
	"num": -263,
	"name": "Zigzagoon-Galar",
	"baseSpecies": "Zigzagoon",
	"forme": "Galar",
	"types": [
		"Normal"
	],
	"baseStats": {
		"hp": 38,
		"atk": 30,
		"def": 41,
		"spa": 35,
		"spd": 35,
		"spe": 60
	},
	"abilities": {
		"0": "Pickup",
		"1": "Gluttony",
		"H": "Quick Feet"
	},
	"weightkg": 17.5,
	"evos": [
		"Linoone-Galar"
	],
	"eggGroups": [
		"Field"
	]
},
linoone: {
	"num": -264,
	"name": "Linoone",
	"types": [
		"Normal"
	],
	"baseStats": {
		"hp": 78,
		"atk": 70,
		"def": 61,
		"spa": 55,
		"spd": 55,
		"spe": 100
	},
	"abilities": {
		"0": "Pickup",
		"1": "Gluttony",
		"H": "Quick Feet"
	},
	"weightkg": 32.5,
	"prevo": "Zigzagoon",
	"evoLevel": 20,
	"eggGroups": [
		"Field"
	],
	"otherFormes": [
		"Linoone-Galar"
	],
	"formeOrder": [
		"Linoone",
		"Linoone-Galar"
	]
},
linoonegalar: {
	"num": -264,
	"name": "Linoone-Galar",
	"baseSpecies": "Linoone",
	"forme": "Galar",
	"types": [
		"Normal"
	],
	"baseStats": {
		"hp": 78,
		"atk": 70,
		"def": 61,
		"spa": 55,
		"spd": 55,
		"spe": 100
	},
	"abilities": {
		"0": "Pickup",
		"1": "Gluttony",
		"H": "Quick Feet"
	},
	"weightkg": 32.5,
	"prevo": "Zigzagoon-Galar",
	"evoLevel": 20,
	"evos": [
		"Obstagoon"
	],
	"eggGroups": [
		"Field"
	]
},
wurmple: {
	"num": -265,
	"name": "Wurmple",
	"types": [
		"Bug"
	],
	"baseStats": {
		"hp": 45,
		"atk": 45,
		"def": 35,
		"spa": 25,
		"spd": 25,
		"spe": 20
	},
	"abilities": {
		"0": "Shield Dust",
		"H": "Run Away"
	},
	"weightkg": 3.6,
	"evos": [
		"Silcoon",
		"Cascoon"
	],
	"eggGroups": [
		"Bug"
	]
},
silcoon: {
	"num": -266,
	"name": "Silcoon",
	"types": [
		"Bug"
	],
	"baseStats": {
		"hp": 50,
		"atk": 35,
		"def": 55,
		"spa": 25,
		"spd": 25,
		"spe": 15
	},
	"abilities": {
		"0": "Shed Skin"
	},
	"weightkg": 10,
	"prevo": "Wurmple",
	"evoLevel": 7,
	"evos": [
		"Beautifly"
	],
	"eggGroups": [
		"Bug"
	]
},
beautifly: {
	"num": -267,
	"name": "Beautifly",
	"types": [
		"Bug",
		"Flying"
	],
	"baseStats": {
		"hp": 60,
		"atk": 70,
		"def": 50,
		"spa": 75,
		"spd": 75,
		"spe": 65
	},
	"abilities": {
		"0": "Swarm",
		"H": "Rivalry"
	},
	"weightkg": 28.4,
	"prevo": "Silcoon",
	"evoLevel": 10,
	"eggGroups": [
		"Bug"
	]
},
cascoon: {
	"num": -268,
	"name": "Cascoon",
	"types": [
		"Bug"
	],
	"baseStats": {
		"hp": 50,
		"atk": 35,
		"def": 55,
		"spa": 25,
		"spd": 25,
		"spe": 15
	},
	"abilities": {
		"0": "Shed Skin"
	},
	"weightkg": 11.5,
	"prevo": "Wurmple",
	"evoLevel": 7,
	"evos": [
		"Dustox"
	],
	"eggGroups": [
		"Bug"
	]
},
dustox: {
	"num": -269,
	"name": "Dustox",
	"types": [
		"Bug",
		"Poison"
	],
	"baseStats": {
		"hp": 60,
		"atk": 50,
		"def": 70,
		"spa": 70,
		"spd": 70,
		"spe": 65
	},
	"abilities": {
		"0": "Shield Dust",
		"H": "Compound Eyes"
	},
	"weightkg": 31.6,
	"prevo": "Cascoon",
	"evoLevel": 10,
	"eggGroups": [
		"Bug"
	]
},
lotad: {
	"num": -270,
	"name": "Lotad",
	"types": [
		"Water",
		"Grass"
	],
	"baseStats": {
		"hp": 40,
		"atk": 30,
		"def": 30,
		"spa": 45,
		"spd": 45,
		"spe": 30
	},
	"abilities": {
		"0": "Swift Swim",
		"1": "Rain Dish",
		"H": "Own Tempo"
	},
	"weightkg": 2.6,
	"evos": [
		"Lombre"
	],
	"eggGroups": [
		"Water 1",
		"Grass"
	]
},
lombre: {
	"num": -271,
	"name": "Lombre",
	"types": [
		"Water",
		"Grass"
	],
	"baseStats": {
		"hp": 60,
		"atk": 50,
		"def": 50,
		"spa": 65,
		"spd": 65,
		"spe": 50
	},
	"abilities": {
		"0": "Swift Swim",
		"1": "Rain Dish",
		"H": "Own Tempo"
	},
	"weightkg": 32.5,
	"prevo": "Lotad",
	"evoLevel": 14,
	"evos": [
		"Ludicolo"
	],
	"eggGroups": [
		"Water 1",
		"Grass"
	]
},
ludicolo: {
	"num": -272,
	"name": "Ludicolo",
	"types": [
		"Water",
		"Grass"
	],
	"baseStats": {
		"hp": 80,
		"atk": 70,
		"def": 70,
		"spa": 95,
		"spd": 95,
		"spe": 70
	},
	"abilities": {
		"0": "Swift Swim",
		"1": "Rain Dish",
		"H": "Own Tempo"
	},
	"weightkg": 55,
	"prevo": "Lombre",
	"evoType": "useItem",
	"evoItem": "Water Stone",
	"eggGroups": [
		"Water 1",
		"Grass"
	]
},
seedot: {
	"num": -273,
	"name": "Seedot",
	"types": [
		"Grass"
	],
	"baseStats": {
		"hp": 40,
		"atk": 40,
		"def": 50,
		"spa": 30,
		"spd": 30,
		"spe": 30
	},
	"abilities": {
		"0": "Chlorophyll",
		"1": "Early Bird",
		"H": "Pickpocket"
	},
	"weightkg": 4,
	"evos": [
		"Nuzleaf"
	],
	"eggGroups": [
		"Field",
		"Grass"
	]
},
nuzleaf: {
	"num": -274,
	"name": "Nuzleaf",
	"types": [
		"Grass",
		"Normal"
	],
	"baseStats": {
		"hp": 70,
		"atk": 70,
		"def": 40,
		"spa": 50,
		"spd": 50,
		"spe": 60
	},
	"abilities": {
		"0": "Chlorophyll",
		"1": "Early Bird",
		"H": "Pickpocket"
	},
	"weightkg": 28,
	"prevo": "Seedot",
	"evoLevel": 14,
	"evos": [
		"Shiftry"
	],
	"eggGroups": [
		"Field",
		"Grass"
	]
},
shiftry: {
	"num": -275,
	"name": "Shiftry",
	"types": [
		"Grass",
		"Normal"
	],
	"baseStats": {
		"hp": 90,
		"atk": 100,
		"def": 60,
		"spa": 75,
		"spd": 75,
		"spe": 80
	},
	"abilities": {
		"0": "Chlorophyll",
		"1": "Early Bird",
		"H": "Pickpocket"
	},
	"weightkg": 59.6,
	"prevo": "Nuzleaf",
	"evoType": "useItem",
	"evoItem": "Leaf Stone",
	"eggGroups": [
		"Field",
		"Grass"
	]
},
taillow: {
	"num": -276,
	"name": "Taillow",
	"types": [
		"Normal",
		"Flying"
	],
	"baseStats": {
		"hp": 40,
		"atk": 55,
		"def": 30,
		"spa": 30,
		"spd": 30,
		"spe": 85
	},
	"abilities": {
		"0": "Guts",
		"H": "Scrappy"
	},
	"weightkg": 2.3,
	"evos": [
		"Swellow"
	],
	"eggGroups": [
		"Flying"
	]
},
swellow: {
	"num": -277,
	"name": "Swellow",
	"types": [
		"Normal",
		"Flying"
	],
	"baseStats": {
		"hp": 60,
		"atk": 85,
		"def": 60,
		"spa": 62,
		"spd": 62,
		"spe": 125
	},
	"abilities": {
		"0": "Guts",
		"H": "Scrappy"
	},
	"weightkg": 19.8,
	"prevo": "Taillow",
	"evoLevel": 22,
	"eggGroups": [
		"Flying"
	]
},
wingull: {
	"num": -278,
	"name": "Wingull",
	"types": [
		"Water",
		"Flying"
	],
	"baseStats": {
		"hp": 40,
		"atk": 30,
		"def": 30,
		"spa": 42,
		"spd": 42,
		"spe": 85
	},
	"abilities": {
		"0": "Keen Eye",
		"1": "Hydration",
		"H": "Rain Dish"
	},
	"weightkg": 9.5,
	"evos": [
		"Pelipper"
	],
	"eggGroups": [
		"Water 1",
		"Flying"
	]
},
pelipper: {
	"num": -279,
	"name": "Pelipper",
	"types": [
		"Water",
		"Flying"
	],
	"baseStats": {
		"hp": 60,
		"atk": 50,
		"def": 100,
		"spa": 82,
		"spd": 82,
		"spe": 65
	},
	"abilities": {
		"0": "Keen Eye",
		"1": "Drizzle",
		"H": "Rain Dish"
	},
	"weightkg": 28,
	"prevo": "Wingull",
	"evoLevel": 25,
	"eggGroups": [
		"Water 1",
		"Flying"
	]
},
ralts: {
	"num": -280,
	"name": "Ralts",
	"types": [
		"Psychic",
		"Normal"
	],
	"baseStats": {
		"hp": 28,
		"atk": 25,
		"def": 25,
		"spa": 40,
		"spd": 40,
		"spe": 40
	},
	"abilities": {
		"0": "Synchronize",
		"1": "Trace",
		"H": "Telepathy"
	},
	"weightkg": 6.6,
	"evos": [
		"Kirlia"
	],
	"eggGroups": [
		"Human-Like",
		"Amorphous"
	]
},
kirlia: {
	"num": -281,
	"name": "Kirlia",
	"types": [
		"Psychic",
		"Normal"
	],
	"baseStats": {
		"hp": 38,
		"atk": 35,
		"def": 35,
		"spa": 60,
		"spd": 60,
		"spe": 50
	},
	"abilities": {
		"0": "Synchronize",
		"1": "Trace",
		"H": "Telepathy"
	},
	"weightkg": 20.2,
	"prevo": "Ralts",
	"evoLevel": 20,
	"evos": [
		"Gardevoir",
		"Gallade"
	],
	"eggGroups": [
		"Human-Like",
		"Amorphous"
	]
},
gardevoir: {
	"num": -282,
	"name": "Gardevoir",
	"types": [
		"Psychic",
		"Normal"
	],
	"baseStats": {
		"hp": 68,
		"atk": 65,
		"def": 65,
		"spa": 120,
		"spd": 120,
		"spe": 80
	},
	"abilities": {
		"0": "Synchronize",
		"1": "Trace",
		"H": "Telepathy"
	},
	"weightkg": 48.4,
	"prevo": "Kirlia",
	"evoLevel": 30,
	"eggGroups": [
		"Human-Like",
		"Amorphous"
	],
	"otherFormes": [
		"Gardevoir-Mega"
	],
	"formeOrder": [
		"Gardevoir",
		"Gardevoir-Mega"
	]
},
gardevoirmega: {
	"num": -282,
	"name": "Gardevoir-Mega",
	"baseSpecies": "Gardevoir",
	"forme": "Mega",
	"types": [
		"Psychic",
		"Normal"
	],
	"baseStats": {
		"hp": 68,
		"atk": 75,
		"def": 65,
		"spa": 134,
		"spd": 134,
		"spe": 90
	},
	"abilities": {
		"0": "Pixilate"
	},
	"weightkg": 48.4,
	"eggGroups": [
		"Amorphous"
	],
	// "requiredItem": "Gardevoirite"
},
surskit: {
	"num": -283,
	"name": "Surskit",
	"types": [
		"Bug",
		"Water"
	],
	"baseStats": {
		"hp": 40,
		"atk": 30,
		"def": 32,
		"spa": 51,
		"spd": 51,
		"spe": 65
	},
	"abilities": {
		"0": "Swift Swim",
		"H": "Rain Dish"
	},
	"weightkg": 1.7,
	"evos": [
		"Masquerain"
	],
	"eggGroups": [
		"Water 1",
		"Bug"
	]
},
masquerain: {
	"num": -284,
	"name": "Masquerain",
	"types": [
		"Bug",
		"Flying"
	],
	"baseStats": {
		"hp": 70,
		"atk": 60,
		"def": 62,
		"spa": 91,
		"spd": 91,
		"spe": 80
	},
	"abilities": {
		"0": "Intimidate",
		"H": "Unnerve"
	},
	"weightkg": 3.6,
	"prevo": "Surskit",
	"evoLevel": 22,
	"eggGroups": [
		"Water 1",
		"Bug"
	]
},
shroomish: {
	"num": -285,
	"name": "Shroomish",
	"types": [
		"Grass"
	],
	"baseStats": {
		"hp": 60,
		"atk": 40,
		"def": 60,
		"spa": 50,
		"spd": 50,
		"spe": 35
	},
	"abilities": {
		"0": "Effect Spore",
		"1": "Poison Heal",
		"H": "Quick Feet"
	},
	"weightkg": 4.5,
	"evos": [
		"Breloom"
	],
	"eggGroups": [
		"Fairy",
		"Grass"
	]
},
breloom: {
	"num": -286,
	"name": "Breloom",
	"types": [
		"Grass",
		"Fighting"
	],
	"baseStats": {
		"hp": 60,
		"atk": 130,
		"def": 80,
		"spa": 60,
		"spd": 60,
		"spe": 70
	},
	"abilities": {
		"0": "Effect Spore",
		"1": "Poison Heal",
		"H": "Technician"
	},
	"weightkg": 39.2,
	"prevo": "Shroomish",
	"evoLevel": 23,
	"eggGroups": [
		"Fairy",
		"Grass"
	]
},
slakoth: {
	"num": -287,
	"name": "Slakoth",
	"types": [
		"Normal"
	],
	"baseStats": {
		"hp": 60,
		"atk": 60,
		"def": 60,
		"spa": 35,
		"spd": 35,
		"spe": 30
	},
	"abilities": {
		"0": "Truant"
	},
	"weightkg": 24,
	"evos": [
		"Vigoroth"
	],
	"eggGroups": [
		"Field"
	]
},
vigoroth: {
	"num": -288,
	"name": "Vigoroth",
	"types": [
		"Normal"
	],
	"baseStats": {
		"hp": 80,
		"atk": 80,
		"def": 80,
		"spa": 55,
		"spd": 55,
		"spe": 90
	},
	"abilities": {
		"0": "Vital Spirit"
	},
	"weightkg": 46.5,
	"prevo": "Slakoth",
	"evoLevel": 18,
	"evos": [
		"Slaking"
	],
	"eggGroups": [
		"Field"
	]
},
slaking: {
	"num": -289,
	"name": "Slaking",
	"types": [
		"Normal"
	],
	"baseStats": {
		"hp": 150,
		"atk": 160,
		"def": 100,
		"spa": 80,
		"spd": 80,
		"spe": 100
	},
	"abilities": {
		"0": "Truant"
	},
	"weightkg": 130.5,
	"prevo": "Vigoroth",
	"evoLevel": 36,
	"eggGroups": [
		"Field"
	]
},
nincada: {
	"num": -290,
	"name": "Nincada",
	"types": [
		"Bug",
		"Ground"
	],
	"baseStats": {
		"hp": 31,
		"atk": 45,
		"def": 90,
		"spa": 30,
		"spd": 30,
		"spe": 40
	},
	"abilities": {
		"0": "Compound Eyes",
		"H": "Run Away"
	},
	"weightkg": 5.5,
	"evos": [
		"Ninjask",
		"Shedinja"
	],
	"eggGroups": [
		"Bug"
	]
},
ninjask: {
	"num": -291,
	"name": "Ninjask",
	"types": [
		"Bug",
		"Flying"
	],
	"baseStats": {
		"hp": 61,
		"atk": 90,
		"def": 45,
		"spa": 50,
		"spd": 50,
		"spe": 160
	},
	"abilities": {
		"0": "Speed Boost",
		"H": "Infiltrator"
	},
	"weightkg": 12,
	"prevo": "Nincada",
	"evoLevel": 20,
	"eggGroups": [
		"Bug"
	]
},
shedinja: {
	"num": -292,
	"name": "Shedinja",
	"types": [
		"Bug",
		"Ghost"
	],
	"gender": "N",
	"baseStats": {
		"hp": 1,
		"atk": 90,
		"def": 45,
		"spa": 30,
		"spd": 30,
		"spe": 40
	},
	"maxHP": 1,
	"abilities": {
		"0": "Wonder Guard"
	},
	"weightkg": 1.2,
	"prevo": "Nincada",
	"evoLevel": 20,
	"eggGroups": [
		"Mineral"
	]
},
whismur: {
	"num": -293,
	"name": "Whismur",
	"types": [
		"Normal"
	],
	"baseStats": {
		"hp": 64,
		"atk": 51,
		"def": 23,
		"spa": 37,
		"spd": 37,
		"spe": 28
	},
	"abilities": {
		"0": "Soundproof",
		"H": "Rattled"
	},
	"weightkg": 16.3,
	"evos": [
		"Loudred"
	],
	"eggGroups": [
		"Monster",
		"Field"
	]
},
loudred: {
	"num": -294,
	"name": "Loudred",
	"types": [
		"Normal"
	],
	"baseStats": {
		"hp": 84,
		"atk": 71,
		"def": 43,
		"spa": 57,
		"spd": 57,
		"spe": 48
	},
	"abilities": {
		"0": "Soundproof",
		"H": "Scrappy"
	},
	"weightkg": 40.5,
	"prevo": "Whismur",
	"evoLevel": 20,
	"evos": [
		"Exploud"
	],
	"eggGroups": [
		"Monster",
		"Field"
	]
},
exploud: {
	"num": -295,
	"name": "Exploud",
	"types": [
		"Normal"
	],
	"baseStats": {
		"hp": 104,
		"atk": 91,
		"def": 63,
		"spa": 82,
		"spd": 82,
		"spe": 68
	},
	"abilities": {
		"0": "Soundproof",
		"H": "Scrappy"
	},
	"weightkg": 84,
	"prevo": "Loudred",
	"evoLevel": 40,
	"eggGroups": [
		"Monster",
		"Field"
	]
},
makuhita: {
	"num": -296,
	"name": "Makuhita",
	"types": [
		"Fighting"
	],
	"genderRatio": {
		"M": 0.75,
		"F": 0.25
	},
	"baseStats": {
		"hp": 72,
		"atk": 60,
		"def": 30,
		"spa": 25,
		"spd": 25,
		"spe": 25
	},
	"abilities": {
		"0": "Thick Fat",
		"1": "Guts",
		"H": "Sheer Force"
	},
	"weightkg": 86.4,
	"evos": [
		"Hariyama"
	],
	"eggGroups": [
		"Human-Like"
	]
},
hariyama: {
	"num": -297,
	"name": "Hariyama",
	"types": [
		"Fighting"
	],
	"genderRatio": {
		"M": 0.75,
		"F": 0.25
	},
	"baseStats": {
		"hp": 144,
		"atk": 120,
		"def": 60,
		"spa": 50,
		"spd": 50,
		"spe": 50
	},
	"abilities": {
		"0": "Thick Fat",
		"1": "Guts",
		"H": "Sheer Force"
	},
	"weightkg": 253.8,
	"prevo": "Makuhita",
	"evoLevel": 24,
	"eggGroups": [
		"Human-Like"
	]
},
azurill: {
	"num": -298,
	"name": "Azurill",
	"types": [
		"Normal"
	],
	"genderRatio": {
		"M": 0.25,
		"F": 0.75
	},
	"baseStats": {
		"hp": 50,
		"atk": 20,
		"def": 40,
		"spa": 30,
		"spd": 30,
		"spe": 20
	},
	"abilities": {
		"0": "Thick Fat",
		"1": "Huge Power",
		"H": "Sap Sipper"
	},
	"weightkg": 2,
	"evos": [
		"Marill"
	],
	"eggGroups": [
		"Undiscovered"
	],
	"canHatch": true
},
nosepass: {
	"num": -299,
	"name": "Nosepass",
	"types": [
		"Rock"
	],
	"baseStats": {
		"hp": 30,
		"atk": 45,
		"def": 135,
		"spa": 67,
		"spd": 67,
		"spe": 30
	},
	"abilities": {
		"0": "Sturdy",
		"1": "Magnet Pull",
		"H": "Sand Force"
	},
	"weightkg": 97,
	"evos": [
		"Probopass"
	],
	"eggGroups": [
		"Mineral"
	]
},
skitty: {
	"num": -300,
	"name": "Skitty",
	"types": [
		"Normal"
	],
	"genderRatio": {
		"M": 0.25,
		"F": 0.75
	},
	"baseStats": {
		"hp": 50,
		"atk": 45,
		"def": 45,
		"spa": 35,
		"spd": 35,
		"spe": 50
	},
	"abilities": {
		"0": "Cute Charm",
		"1": "Normalize",
		"H": "Wonder Skin"
	},
	"weightkg": 11,
	"evos": [
		"Delcatty"
	],
	"eggGroups": [
		"Field",
		"Fairy"
	]
},
delcatty: {
	"num": -301,
	"name": "Delcatty",
	"types": [
		"Normal"
	],
	"genderRatio": {
		"M": 0.25,
		"F": 0.75
	},
	"baseStats": {
		"hp": 70,
		"atk": 65,
		"def": 65,
		"spa": 55,
		"spd": 55,
		"spe": 90
	},
	"abilities": {
		"0": "Cute Charm",
		"1": "Normalize",
		"H": "Wonder Skin"
	},
	"weightkg": 32.6,
	"prevo": "Skitty",
	"evoType": "useItem",
	"evoItem": "Moon Stone",
	"eggGroups": [
		"Field",
		"Fairy"
	]
},
sableye: {
	"num": -302,
	"name": "Sableye",
	"types": [
		"Normal",
		"Ghost"
	],
	"baseStats": {
		"hp": 50,
		"atk": 75,
		"def": 75,
		"spa": 65,
		"spd": 65,
		"spe": 50
	},
	"abilities": {
		"0": "Keen Eye",
		"1": "Stall",
		"H": "Prankster"
	},
	"weightkg": 11,
	"eggGroups": [
		"Human-Like"
	],
	"otherFormes": [
		"Sableye-Mega"
	],
	"formeOrder": [
		"Sableye",
		"Sableye-Mega"
	]
},
sableyemega: {
	"num": -302,
	"name": "Sableye-Mega",
	"baseSpecies": "Sableye",
	"forme": "Mega",
	"types": [
		"Normal",
		"Ghost"
	],
	"baseStats": {
		"hp": 50,
		"atk": 80,
		"def": 100,
		"spa": 82,
		"spd": 82,
		"spe": 35
	},
	"abilities": {
		"0": "Magic Bounce"
	},
	"weightkg": 161,
	"eggGroups": [
		"Human-Like"
	],
	// "requiredItem": "Sablenite"
},
mawile: {
	"num": -303,
	"name": "Mawile",
	"types": [
		"Rock",
		"Normal"
	],
	"baseStats": {
		"hp": 50,
		"atk": 85,
		"def": 85,
		"spa": 55,
		"spd": 55,
		"spe": 50
	},
	"abilities": {
		"0": "Hyper Cutter",
		"1": "Intimidate",
		"H": "Sheer Force"
	},
	"weightkg": 11.5,
	"eggGroups": [
		"Field",
		"Fairy"
	],
	"otherFormes": [
		"Mawile-Mega"
	],
	"formeOrder": [
		"Mawile",
		"Mawile-Mega"
	]
},
mawilemega: {
	"num": -303,
	"name": "Mawile-Mega",
	"baseSpecies": "Mawile",
	"forme": "Mega",
	"types": [
		"Rock",
		"Normal"
	],
	"baseStats": {
		"hp": 50,
		"atk": 95,
		"def": 105,
		"spa": 65,
		"spd": 65,
		"spe": 50
	},
	"abilities": {
		"0": "Huge Power"
	},
	"weightkg": 23.5,
	"eggGroups": [
		"Field",
		"Fairy"
	],
	// "requiredItem": "Mawilite"
},
aron: {
	"num": -304,
	"name": "Aron",
	"types": [
		"Rock"
	],
	"baseStats": {
		"hp": 50,
		"atk": 70,
		"def": 100,
		"spa": 40,
		"spd": 40,
		"spe": 30
	},
	"abilities": {
		"0": "Sturdy",
		"1": "Rock Head",
		"H": "Heavy Metal"
	},
	"weightkg": 60,
	"evos": [
		"Lairon"
	],
	"eggGroups": [
		"Monster"
	]
},
lairon: {
	"num": -305,
	"name": "Lairon",
	"types": [
		"Rock"
	],
	"baseStats": {
		"hp": 60,
		"atk": 90,
		"def": 140,
		"spa": 50,
		"spd": 50,
		"spe": 40
	},
	"abilities": {
		"0": "Sturdy",
		"1": "Rock Head",
		"H": "Heavy Metal"
	},
	"weightkg": 120,
	"prevo": "Aron",
	"evoLevel": 32,
	"evos": [
		"Aggron"
	],
	"eggGroups": [
		"Monster"
	]
},
aggron: {
	"num": -306,
	"name": "Aggron",
	"types": [
		"Rock"
	],
	"baseStats": {
		"hp": 70,
		"atk": 110,
		"def": 180,
		"spa": 60,
		"spd": 60,
		"spe": 50
	},
	"abilities": {
		"0": "Sturdy",
		"1": "Rock Head",
		"H": "Heavy Metal"
	},
	"weightkg": 360,
	"prevo": "Lairon",
	"evoLevel": 42,
	"eggGroups": [
		"Monster"
	],
	"otherFormes": [
		"Aggron-Mega"
	],
	"formeOrder": [
		"Aggron",
		"Aggron-Mega"
	]
},
aggronmega: {
	"num": -306,
	"name": "Aggron-Mega",
	"baseSpecies": "Aggron",
	"forme": "Mega",
	"types": [
		"Rock"
	],
	"baseStats": {
		"hp": 70,
		"atk": 125,
		"def": 205,
		"spa": 65,
		"spd": 65,
		"spe": 50
	},
	"abilities": {
		"0": "Filter"
	},
	"weightkg": 395,
	"eggGroups": [
		"Monster"
	],
	// "requiredItem": "Aggronite"
},
meditite: {
	"num": -307,
	"name": "Meditite",
	"types": [
		"Fighting",
		"Psychic"
	],
	"baseStats": {
		"hp": 30,
		"atk": 40,
		"def": 55,
		"spa": 47,
		"spd": 47,
		"spe": 60
	},
	"abilities": {
		"0": "Pure Power",
		"H": "Telepathy"
	},
	"weightkg": 11.2,
	"evos": [
		"Medicham"
	],
	"eggGroups": [
		"Human-Like"
	]
},
medicham: {
	"num": -308,
	"name": "Medicham",
	"types": [
		"Fighting",
		"Psychic"
	],
	"baseStats": {
		"hp": 60,
		"atk": 60,
		"def": 75,
		"spa": 67,
		"spd": 67,
		"spe": 80
	},
	"abilities": {
		"0": "Pure Power",
		"H": "Telepathy"
	},
	"weightkg": 31.5,
	"prevo": "Meditite",
	"evoLevel": 37,
	"eggGroups": [
		"Human-Like"
	],
	"otherFormes": [
		"Medicham-Mega"
	],
	"formeOrder": [
		"Medicham",
		"Medicham-Mega"
	]
},
medichammega: {
	"num": -308,
	"name": "Medicham-Mega",
	"baseSpecies": "Medicham",
	"forme": "Mega",
	"types": [
		"Fighting",
		"Psychic"
	],
	"baseStats": {
		"hp": 60,
		"atk": 80,
		"def": 80,
		"spa": 74,
		"spd": 74,
		"spe": 90
	},
	"abilities": {
		"0": "Pure Power"
	},
	"weightkg": 31.5,
	"eggGroups": [
		"Human-Like"
	],
	// "requiredItem": "Medichamite"
},
electrike: {
	"num": -309,
	"name": "Electrike",
	"types": [
		"Electric"
	],
	"baseStats": {
		"hp": 40,
		"atk": 45,
		"def": 40,
		"spa": 52,
		"spd": 52,
		"spe": 65
	},
	"abilities": {
		"0": "Static",
		"1": "Lightning Rod",
		"H": "Minus"
	},
	"weightkg": 15.2,
	"evos": [
		"Manectric"
	],
	"eggGroups": [
		"Field"
	]
},
manectric: {
	"num": -310,
	"name": "Manectric",
	"types": [
		"Electric"
	],
	"baseStats": {
		"hp": 70,
		"atk": 75,
		"def": 60,
		"spa": 82,
		"spd": 82,
		"spe": 105
	},
	"abilities": {
		"0": "Static",
		"1": "Lightning Rod",
		"H": "Minus"
	},
	"weightkg": 40.2,
	"prevo": "Electrike",
	"evoLevel": 26,
	"eggGroups": [
		"Field"
	],
	"otherFormes": [
		"Manectric-Mega"
	],
	"formeOrder": [
		"Manectric",
		"Manectric-Mega"
	]
},
manectricmega: {
	"num": -310,
	"name": "Manectric-Mega",
	"baseSpecies": "Manectric",
	"forme": "Mega",
	"types": [
		"Electric"
	],
	"baseStats": {
		"hp": 70,
		"atk": 75,
		"def": 70,
		"spa": 94,
		"spd": 94,
		"spe": 120
	},
	"abilities": {
		"0": "Intimidate"
	},
	"weightkg": 44,
	"eggGroups": [
		"Field"
	],
	// "requiredItem": "Manectite"
},
plusle: {
	"num": -311,
	"name": "Plusle",
	"types": [
		"Electric"
	],
	"baseStats": {
		"hp": 60,
		"atk": 50,
		"def": 40,
		"spa": 80,
		"spd": 80,
		"spe": 95
	},
	"abilities": {
		"0": "Plus",
		"H": "Lightning Rod"
	},
	"weightkg": 4.2,
	"eggGroups": [
		"Fairy"
	]
},
minun: {
	"num": -312,
	"name": "Minun",
	"types": [
		"Electric"
	],
	"baseStats": {
		"hp": 60,
		"atk": 40,
		"def": 50,
		"spa": 80,
		"spd": 80,
		"spe": 95
	},
	"abilities": {
		"0": "Minus",
		"H": "Volt Absorb"
	},
	"weightkg": 4.2,
	"eggGroups": [
		"Fairy"
	]
},
volbeat: {
	"num": -313,
	"name": "Volbeat",
	"types": [
		"Bug"
	],
	"gender": "M",
	"baseStats": {
		"hp": 65,
		"atk": 73,
		"def": 75,
		"spa": 66,
		"spd": 66,
		"spe": 85
	},
	"abilities": {
		"0": "Illuminate",
		"1": "Swarm",
		"H": "Prankster"
	},
	"weightkg": 17.7,
	"eggGroups": [
		"Bug",
		"Human-Like"
	]
},
illumise: {
	"num": -314,
	"name": "Illumise",
	"types": [
		"Bug"
	],
	"gender": "F",
	"baseStats": {
		"hp": 65,
		"atk": 47,
		"def": 75,
		"spa": 79,
		"spd": 79,
		"spe": 85
	},
	"abilities": {
		"0": "Oblivious",
		"1": "Tinted Lens",
		"H": "Prankster"
	},
	"weightkg": 17.7,
	"eggGroups": [
		"Bug",
		"Human-Like"
	]
},
roselia: {
	"num": -315,
	"name": "Roselia",
	"types": [
		"Grass",
		"Poison"
	],
	"baseStats": {
		"hp": 50,
		"atk": 60,
		"def": 45,
		"spa": 90,
		"spd": 90,
		"spe": 65
	},
	"abilities": {
		"0": "Natural Cure",
		"1": "Poison Point",
		"H": "Leaf Guard"
	},
	"weightkg": 2,
	"prevo": "Budew",
	"evoType": "levelFriendship",
	"evoCondition": "during the day",
	"evos": [
		"Roserade"
	],
	"eggGroups": [
		"Fairy",
		"Grass"
	],
	"canHatch": true
},
gulpin: {
	"num": -316,
	"name": "Gulpin",
	"types": [
		"Poison"
	],
	"baseStats": {
		"hp": 70,
		"atk": 43,
		"def": 53,
		"spa": 48,
		"spd": 48,
		"spe": 40
	},
	"abilities": {
		"0": "Liquid Ooze",
		"1": "Sticky Hold",
		"H": "Gluttony"
	},
	"weightkg": 10.3,
	"evos": [
		"Swalot"
	],
	"eggGroups": [
		"Amorphous"
	]
},
swalot: {
	"num": -317,
	"name": "Swalot",
	"types": [
		"Poison"
	],
	"baseStats": {
		"hp": 100,
		"atk": 73,
		"def": 83,
		"spa": 78,
		"spd": 78,
		"spe": 55
	},
	"abilities": {
		"0": "Liquid Ooze",
		"1": "Sticky Hold",
		"H": "Gluttony"
	},
	"weightkg": 80,
	"prevo": "Gulpin",
	"evoLevel": 26,
	"eggGroups": [
		"Amorphous"
	]
},
carvanha: {
	"num": -318,
	"name": "Carvanha",
	"types": [
		"Water",
		"Normal"
	],
	"baseStats": {
		"hp": 45,
		"atk": 90,
		"def": 20,
		"spa": 42,
		"spd": 42,
		"spe": 65
	},
	"abilities": {
		"0": "Rough Skin",
		"H": "Speed Boost"
	},
	"weightkg": 20.8,
	"evos": [
		"Sharpedo"
	],
	"eggGroups": [
		"Water 2"
	]
},
sharpedo: {
	"num": -319,
	"name": "Sharpedo",
	"types": [
		"Water",
		"Normal"
	],
	"baseStats": {
		"hp": 70,
		"atk": 120,
		"def": 40,
		"spa": 67,
		"spd": 67,
		"spe": 95
	},
	"abilities": {
		"0": "Rough Skin",
		"H": "Speed Boost"
	},
	"weightkg": 88.8,
	"prevo": "Carvanha",
	"evoLevel": 30,
	"eggGroups": [
		"Water 2"
	],
	"otherFormes": [
		"Sharpedo-Mega"
	],
	"formeOrder": [
		"Sharpedo",
		"Sharpedo-Mega"
	]
},
sharpedomega: {
	"num": -319,
	"name": "Sharpedo-Mega",
	"baseSpecies": "Sharpedo",
	"forme": "Mega",
	"types": [
		"Water",
		"Normal"
	],
	"baseStats": {
		"hp": 70,
		"atk": 130,
		"def": 55,
		"spa": 77,
		"spd": 77,
		"spe": 100
	},
	"abilities": {
		"0": "Strong Jaw"
	},
	"weightkg": 130.3,
	"eggGroups": [
		"Water 2"
	],
	// "requiredItem": "Sharpedonite"
},
wailmer: {
	"num": -320,
	"name": "Wailmer",
	"types": [
		"Water"
	],
	"baseStats": {
		"hp": 130,
		"atk": 70,
		"def": 35,
		"spa": 52,
		"spd": 52,
		"spe": 60
	},
	"abilities": {
		"0": "Water Veil",
		"1": "Oblivious",
		"H": "Pressure"
	},
	"weightkg": 130,
	"evos": [
		"Wailord"
	],
	"eggGroups": [
		"Field",
		"Water 2"
	]
},
wailord: {
	"num": -321,
	"name": "Wailord",
	"types": [
		"Water"
	],
	"baseStats": {
		"hp": 170,
		"atk": 90,
		"def": 45,
		"spa": 67,
		"spd": 67,
		"spe": 60
	},
	"abilities": {
		"0": "Water Veil",
		"1": "Oblivious",
		"H": "Pressure"
	},
	"weightkg": 398,
	"prevo": "Wailmer",
	"evoLevel": 40,
	"eggGroups": [
		"Field",
		"Water 2"
	]
},
numel: {
	"num": -322,
	"name": "Numel",
	"types": [
		"Fire",
		"Ground"
	],
	"baseStats": {
		"hp": 60,
		"atk": 60,
		"def": 40,
		"spa": 55,
		"spd": 55,
		"spe": 35
	},
	"abilities": {
		"0": "Oblivious",
		"1": "Simple",
		"H": "Own Tempo"
	},
	"weightkg": 24,
	"evos": [
		"Camerupt"
	],
	"eggGroups": [
		"Field"
	]
},
camerupt: {
	"num": -323,
	"name": "Camerupt",
	"types": [
		"Fire",
		"Ground"
	],
	"baseStats": {
		"hp": 70,
		"atk": 100,
		"def": 70,
		"spa": 90,
		"spd": 90,
		"spe": 40
	},
	"abilities": {
		"0": "Magma Armor",
		"1": "Solid Rock",
		"H": "Anger Point"
	},
	"weightkg": 220,
	"prevo": "Numel",
	"evoLevel": 33,
	"eggGroups": [
		"Field"
	],
	"otherFormes": [
		"Camerupt-Mega"
	],
	"formeOrder": [
		"Camerupt",
		"Camerupt-Mega"
	]
},
cameruptmega: {
	"num": -323,
	"name": "Camerupt-Mega",
	"baseSpecies": "Camerupt",
	"forme": "Mega",
	"types": [
		"Fire",
		"Ground"
	],
	"baseStats": {
		"hp": 70,
		"atk": 110,
		"def": 85,
		"spa": 107,
		"spd": 107,
		"spe": 30
	},
	"abilities": {
		"0": "Sheer Force"
	},
	"weightkg": 320.5,
	"eggGroups": [
		"Field"
	],
	// "requiredItem": "Cameruptite"
},
torkoal: {
	"num": -324,
	"name": "Torkoal",
	"types": [
		"Fire"
	],
	"baseStats": {
		"hp": 70,
		"atk": 85,
		"def": 140,
		"spa": 77,
		"spd": 77,
		"spe": 20
	},
	"abilities": {
		"0": "White Smoke",
		"1": "Drought",
		"H": "Shell Armor"
	},
	"weightkg": 80.4,
	"eggGroups": [
		"Field"
	]
},
spoink: {
	"num": -325,
	"name": "Spoink",
	"types": [
		"Psychic"
	],
	"baseStats": {
		"hp": 60,
		"atk": 25,
		"def": 35,
		"spa": 75,
		"spd": 75,
		"spe": 60
	},
	"abilities": {
		"0": "Thick Fat",
		"1": "Own Tempo",
		"H": "Gluttony"
	},
	"weightkg": 30.6,
	"evos": [
		"Grumpig"
	],
	"eggGroups": [
		"Field"
	]
},
grumpig: {
	"num": -326,
	"name": "Grumpig",
	"types": [
		"Psychic"
	],
	"baseStats": {
		"hp": 80,
		"atk": 45,
		"def": 65,
		"spa": 100,
		"spd": 100,
		"spe": 80
	},
	"abilities": {
		"0": "Thick Fat",
		"1": "Own Tempo",
		"H": "Gluttony"
	},
	"weightkg": 71.5,
	"prevo": "Spoink",
	"evoLevel": 32,
	"eggGroups": [
		"Field"
	]
},
spinda: {
	"num": -327,
	"name": "Spinda",
	"types": [
		"Normal"
	],
	"baseStats": {
		"hp": 60,
		"atk": 60,
		"def": 60,
		"spa": 60,
		"spd": 60,
		"spe": 60
	},
	"abilities": {
		"0": "Own Tempo",
		"1": "Tangled Feet",
		"H": "Contrary"
	},
	"weightkg": 5,
	"eggGroups": [
		"Field",
		"Human-Like"
	]
},
trapinch: {
	"num": -328,
	"name": "Trapinch",
	"types": [
		"Ground"
	],
	"baseStats": {
		"hp": 45,
		"atk": 100,
		"def": 45,
		"spa": 45,
		"spd": 45,
		"spe": 10
	},
	"abilities": {
		"0": "Hyper Cutter",
		"1": "Arena Trap",
		"H": "Sheer Force"
	},
	"weightkg": 15,
	"evos": [
		"Vibrava"
	],
	"eggGroups": [
		"Bug",
		"Dragon"
	]
},
vibrava: {
	"num": -329,
	"name": "Vibrava",
	"types": [
		"Ground",
		"Dragon"
	],
	"baseStats": {
		"hp": 50,
		"atk": 70,
		"def": 50,
		"spa": 50,
		"spd": 50,
		"spe": 70
	},
	"abilities": {
		"0": "Levitate"
	},
	"weightkg": 15.3,
	"prevo": "Trapinch",
	"evoLevel": 35,
	"evos": [
		"Flygon"
	],
	"eggGroups": [
		"Bug",
		"Dragon"
	]
},
flygon: {
	"num": -330,
	"name": "Flygon",
	"types": [
		"Ground",
		"Dragon"
	],
	"baseStats": {
		"hp": 80,
		"atk": 100,
		"def": 80,
		"spa": 80,
		"spd": 80,
		"spe": 100
	},
	"abilities": {
		"0": "Levitate"
	},
	"weightkg": 82,
	"prevo": "Vibrava",
	"evoLevel": 45,
	"eggGroups": [
		"Bug",
		"Dragon"
	]
},
cacnea: {
	"num": -331,
	"name": "Cacnea",
	"types": [
		"Grass"
	],
	"baseStats": {
		"hp": 50,
		"atk": 85,
		"def": 40,
		"spa": 62,
		"spd": 62,
		"spe": 35
	},
	"abilities": {
		"0": "Sand Veil",
		"H": "Water Absorb"
	},
	"weightkg": 51.3,
	"evos": [
		"Cacturne"
	],
	"eggGroups": [
		"Grass",
		"Human-Like"
	]
},
cacturne: {
	"num": -332,
	"name": "Cacturne",
	"types": [
		"Grass",
		"Normal"
	],
	"baseStats": {
		"hp": 70,
		"atk": 115,
		"def": 60,
		"spa": 87,
		"spd": 87,
		"spe": 55
	},
	"abilities": {
		"0": "Sand Veil",
		"H": "Water Absorb"
	},
	"weightkg": 77.4,
	"prevo": "Cacnea",
	"evoLevel": 32,
	"eggGroups": [
		"Grass",
		"Human-Like"
	]
},
swablu: {
	"num": -333,
	"name": "Swablu",
	"types": [
		"Normal",
		"Flying"
	],
	"baseStats": {
		"hp": 45,
		"atk": 40,
		"def": 60,
		"spa": 57,
		"spd": 57,
		"spe": 50
	},
	"abilities": {
		"0": "Natural Cure",
		"H": "Cloud Nine"
	},
	"weightkg": 1.2,
	"evos": [
		"Altaria"
	],
	"eggGroups": [
		"Flying",
		"Dragon"
	]
},
altaria: {
	"num": -334,
	"name": "Altaria",
	"types": [
		"Dragon",
		"Flying"
	],
	"baseStats": {
		"hp": 75,
		"atk": 70,
		"def": 90,
		"spa": 87,
		"spd": 87,
		"spe": 80
	},
	"abilities": {
		"0": "Natural Cure",
		"H": "Cloud Nine"
	},
	"weightkg": 20.6,
	"prevo": "Swablu",
	"evoLevel": 35,
	"eggGroups": [
		"Flying",
		"Dragon"
	],
	"otherFormes": [
		"Altaria-Mega"
	],
	"formeOrder": [
		"Altaria",
		"Altaria-Mega"
	]
},
altariamega: {
	"num": -334,
	"name": "Altaria-Mega",
	"baseSpecies": "Altaria",
	"forme": "Mega",
	"types": [
		"Dragon",
		"Normal"
	],
	"baseStats": {
		"hp": 75,
		"atk": 90,
		"def": 100,
		"spa": 97,
		"spd": 97,
		"spe": 80
	},
	"abilities": {
		"0": "Pixilate"
	},
	"weightkg": 20.6,
	"eggGroups": [
		"Flying",
		"Dragon"
	],
	// "requiredItem": "Altarianite"
},
zangoose: {
	"num": -335,
	"name": "Zangoose",
	"types": [
		"Normal"
	],
	"baseStats": {
		"hp": 73,
		"atk": 115,
		"def": 60,
		"spa": 60,
		"spd": 60,
		"spe": 90
	},
	"abilities": {
		"0": "Immunity",
		"H": "Toxic Boost"
	},
	"weightkg": 40.3,
	"eggGroups": [
		"Field"
	]
},
seviper: {
	"num": -336,
	"name": "Seviper",
	"types": [
		"Poison"
	],
	"baseStats": {
		"hp": 73,
		"atk": 100,
		"def": 60,
		"spa": 80,
		"spd": 80,
		"spe": 65
	},
	"abilities": {
		"0": "Shed Skin",
		"H": "Infiltrator"
	},
	"weightkg": 52.5,
	"eggGroups": [
		"Field",
		"Dragon"
	]
},
lunatone: {
	"num": -337,
	"name": "Lunatone",
	"types": [
		"Rock",
		"Psychic"
	],
	"gender": "N",
	"baseStats": {
		"hp": 90,
		"atk": 55,
		"def": 65,
		"spa": 90,
		"spd": 90,
		"spe": 70
	},
	"abilities": {
		"0": "Levitate"
	},
	"weightkg": 168,
	"eggGroups": [
		"Mineral"
	]
},
solrock: {
	"num": -338,
	"name": "Solrock",
	"types": [
		"Rock",
		"Psychic"
	],
	"gender": "N",
	"baseStats": {
		"hp": 90,
		"atk": 95,
		"def": 85,
		"spa": 60,
		"spd": 60,
		"spe": 70
	},
	"abilities": {
		"0": "Levitate"
	},
	"weightkg": 154,
	"eggGroups": [
		"Mineral"
	]
},
barboach: {
	"num": -339,
	"name": "Barboach",
	"types": [
		"Water",
		"Ground"
	],
	"baseStats": {
		"hp": 50,
		"atk": 48,
		"def": 43,
		"spa": 43,
		"spd": 43,
		"spe": 60
	},
	"abilities": {
		"0": "Oblivious",
		"1": "Anticipation",
		"H": "Hydration"
	},
	"weightkg": 1.9,
	"evos": [
		"Whiscash"
	],
	"eggGroups": [
		"Water 2"
	]
},
whiscash: {
	"num": -340,
	"name": "Whiscash",
	"types": [
		"Water",
		"Ground"
	],
	"baseStats": {
		"hp": 110,
		"atk": 78,
		"def": 73,
		"spa": 73,
		"spd": 73,
		"spe": 60
	},
	"abilities": {
		"0": "Oblivious",
		"1": "Anticipation",
		"H": "Hydration"
	},
	"weightkg": 23.6,
	"prevo": "Barboach",
	"evoLevel": 30,
	"eggGroups": [
		"Water 2"
	]
},
corphish: {
	"num": -341,
	"name": "Corphish",
	"types": [
		"Water"
	],
	"baseStats": {
		"hp": 43,
		"atk": 80,
		"def": 65,
		"spa": 42,
		"spd": 42,
		"spe": 35
	},
	"abilities": {
		"0": "Hyper Cutter",
		"1": "Shell Armor",
		"H": "Adaptability"
	},
	"weightkg": 11.5,
	"evos": [
		"Crawdaunt"
	],
	"eggGroups": [
		"Water 1",
		"Water 3"
	]
},
crawdaunt: {
	"num": -342,
	"name": "Crawdaunt",
	"types": [
		"Water",
		"Normal"
	],
	"baseStats": {
		"hp": 63,
		"atk": 120,
		"def": 85,
		"spa": 72,
		"spd": 72,
		"spe": 55
	},
	"abilities": {
		"0": "Hyper Cutter",
		"1": "Shell Armor",
		"H": "Adaptability"
	},
	"weightkg": 32.8,
	"prevo": "Corphish",
	"evoLevel": 30,
	"eggGroups": [
		"Water 1",
		"Water 3"
	]
},
baltoy: {
	"num": -343,
	"name": "Baltoy",
	"types": [
		"Ground",
		"Psychic"
	],
	"gender": "N",
	"baseStats": {
		"hp": 40,
		"atk": 40,
		"def": 55,
		"spa": 55,
		"spd": 55,
		"spe": 55
	},
	"abilities": {
		"0": "Levitate"
	},
	"weightkg": 21.5,
	"evos": [
		"Claydol"
	],
	"eggGroups": [
		"Mineral"
	]
},
claydol: {
	"num": -344,
	"name": "Claydol",
	"types": [
		"Ground",
		"Psychic"
	],
	"gender": "N",
	"baseStats": {
		"hp": 60,
		"atk": 70,
		"def": 105,
		"spa": 95,
		"spd": 95,
		"spe": 75
	},
	"abilities": {
		"0": "Levitate"
	},
	"weightkg": 108,
	"prevo": "Baltoy",
	"evoLevel": 36,
	"eggGroups": [
		"Mineral"
	]
},
lileep: {
	"num": -345,
	"name": "Lileep",
	"types": [
		"Rock",
		"Grass"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 66,
		"atk": 41,
		"def": 77,
		"spa": 74,
		"spd": 74,
		"spe": 23
	},
	"abilities": {
		"0": "Suction Cups",
		"H": "Storm Drain"
	},
	"weightkg": 23.8,
	"evos": [
		"Cradily"
	],
	"eggGroups": [
		"Water 3"
	]
},
cradily: {
	"num": -346,
	"name": "Cradily",
	"types": [
		"Rock",
		"Grass"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 86,
		"atk": 81,
		"def": 97,
		"spa": 94,
		"spd": 94,
		"spe": 43
	},
	"abilities": {
		"0": "Suction Cups",
		"H": "Storm Drain"
	},
	"weightkg": 60.4,
	"prevo": "Lileep",
	"evoLevel": 40,
	"eggGroups": [
		"Water 3"
	]
},
anorith: {
	"num": -347,
	"name": "Anorith",
	"types": [
		"Rock",
		"Bug"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 45,
		"atk": 95,
		"def": 50,
		"spa": 45,
		"spd": 45,
		"spe": 75
	},
	"abilities": {
		"0": "Battle Armor",
		"H": "Swift Swim"
	},
	"weightkg": 12.5,
	"evos": [
		"Armaldo"
	],
	"eggGroups": [
		"Water 3"
	]
},
armaldo: {
	"num": -348,
	"name": "Armaldo",
	"types": [
		"Rock",
		"Bug"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 75,
		"atk": 125,
		"def": 100,
		"spa": 75,
		"spd": 75,
		"spe": 45
	},
	"abilities": {
		"0": "Battle Armor",
		"H": "Swift Swim"
	},
	"weightkg": 68.2,
	"prevo": "Anorith",
	"evoLevel": 40,
	"eggGroups": [
		"Water 3"
	]
},
feebas: {
	"num": -349,
	"name": "Feebas",
	"types": [
		"Water"
	],
	"baseStats": {
		"hp": 20,
		"atk": 15,
		"def": 20,
		"spa": 32,
		"spd": 32,
		"spe": 80
	},
	"abilities": {
		"0": "Swift Swim",
		"1": "Oblivious",
		"H": "Adaptability"
	},
	"weightkg": 7.4,
	"evos": [
		"Milotic"
	],
	"eggGroups": [
		"Water 1",
		"Dragon"
	]
},
milotic: {
	"num": -350,
	"name": "Milotic",
	"types": [
		"Water"
	],
	"baseStats": {
		"hp": 95,
		"atk": 60,
		"def": 79,
		"spa": 112,
		"spd": 112,
		"spe": 81
	},
	"abilities": {
		"0": "Marvel Scale",
		"1": "Competitive",
		"H": "Cute Charm"
	},
	"weightkg": 162,
	"prevo": "Feebas",
	"evoType": "trade",
	"evoItem": "Prism Scale",
	"eggGroups": [
		"Water 1",
		"Dragon"
	]
},
castform: {
	"num": -351,
	"name": "Castform",
	"types": [
		"Normal"
	],
	"baseStats": {
		"hp": 70,
		"atk": 70,
		"def": 70,
		"spa": 70,
		"spd": 70,
		"spe": 70
	},
	"abilities": {
		"0": "Forecast"
	},
	"weightkg": 0.8,
	"eggGroups": [
		"Fairy",
		"Amorphous"
	],
	"otherFormes": [
		"Castform-Sunny",
		"Castform-Rainy",
		"Castform-Snowy"
	],
	"formeOrder": [
		"Castform",
		"Castform-Sunny",
		"Castform-Rainy",
		"Castform-Snowy"
	]
},
castformsunny: {
	"num": -351,
	"name": "Castform-Sunny",
	"baseSpecies": "Castform",
	"forme": "Sunny",
	"types": [
		"Fire"
	],
	"baseStats": {
		"hp": 70,
		"atk": 70,
		"def": 70,
		"spa": 70,
		"spd": 70,
		"spe": 70
	},
	"abilities": {
		"0": "Forecast"
	},
	"weightkg": 0.8,
	"eggGroups": [
		"Fairy",
		"Amorphous"
	],
	// "requiredAbility": "Forecast",
	"battleOnly": "Castform"
},
castformrainy: {
	"num": -351,
	"name": "Castform-Rainy",
	"baseSpecies": "Castform",
	"forme": "Rainy",
	"types": [
		"Water"
	],
	"baseStats": {
		"hp": 70,
		"atk": 70,
		"def": 70,
		"spa": 70,
		"spd": 70,
		"spe": 70
	},
	"abilities": {
		"0": "Forecast"
	},
	"weightkg": 0.8,
	"eggGroups": [
		"Fairy",
		"Amorphous"
	],
	// "requiredAbility": "Forecast",
	"battleOnly": "Castform"
},
castformsnowy: {
	"num": -351,
	"name": "Castform-Snowy",
	"baseSpecies": "Castform",
	"forme": "Snowy",
	"types": [
		"Ice"
	],
	"baseStats": {
		"hp": 70,
		"atk": 70,
		"def": 70,
		"spa": 70,
		"spd": 70,
		"spe": 70
	},
	"abilities": {
		"0": "Forecast"
	},
	"weightkg": 0.8,
	"eggGroups": [
		"Fairy",
		"Amorphous"
	],
	// "requiredAbility": "Forecast",
	"battleOnly": "Castform"
},
kecleon: {
	"num": -352,
	"name": "Kecleon",
	"types": [
		"Normal"
	],
	"baseStats": {
		"hp": 60,
		"atk": 90,
		"def": 70,
		"spa": 90,
		"spd": 90,
		"spe": 40
	},
	"abilities": {
		"0": "Color Change",
		"H": "Protean"
	},
	"weightkg": 22,
	"eggGroups": [
		"Field"
	]
},
shuppet: {
	"num": -353,
	"name": "Shuppet",
	"types": [
		"Ghost"
	],
	"baseStats": {
		"hp": 44,
		"atk": 75,
		"def": 35,
		"spa": 48,
		"spd": 48,
		"spe": 45
	},
	"abilities": {
		"0": "Insomnia",
		"1": "Frisk",
		"H": "Cursed Body"
	},
	"weightkg": 2.3,
	"evos": [
		"Banette"
	],
	"eggGroups": [
		"Amorphous"
	]
},
banette: {
	"num": -354,
	"name": "Banette",
	"types": [
		"Ghost"
	],
	"baseStats": {
		"hp": 64,
		"atk": 115,
		"def": 65,
		"spa": 73,
		"spd": 73,
		"spe": 65
	},
	"abilities": {
		"0": "Insomnia",
		"1": "Frisk",
		"H": "Cursed Body"
	},
	"weightkg": 12.5,
	"prevo": "Shuppet",
	"evoLevel": 37,
	"eggGroups": [
		"Amorphous"
	],
	"otherFormes": [
		"Banette-Mega"
	],
	"formeOrder": [
		"Banette",
		"Banette-Mega"
	]
},
banettemega: {
	"num": -354,
	"name": "Banette-Mega",
	"baseSpecies": "Banette",
	"forme": "Mega",
	"types": [
		"Ghost"
	],
	"baseStats": {
		"hp": 64,
		"atk": 140,
		"def": 70,
		"spa": 80,
		"spd": 80,
		"spe": 70
	},
	"abilities": {
		"0": "Prankster"
	},
	"weightkg": 13,
	"eggGroups": [
		"Amorphous"
	],
	// "requiredItem": "Banettite"
},
duskull: {
	"num": -355,
	"name": "Duskull",
	"types": [
		"Ghost"
	],
	"baseStats": {
		"hp": 20,
		"atk": 40,
		"def": 90,
		"spa": 60,
		"spd": 60,
		"spe": 25
	},
	"abilities": {
		"0": "Levitate",
		"H": "Frisk"
	},
	"weightkg": 15,
	"evos": [
		"Dusclops"
	],
	"eggGroups": [
		"Amorphous"
	]
},
dusclops: {
	"num": -356,
	"name": "Dusclops",
	"types": [
		"Ghost"
	],
	"baseStats": {
		"hp": 40,
		"atk": 70,
		"def": 130,
		"spa": 95,
		"spd": 95,
		"spe": 25
	},
	"abilities": {
		"0": "Pressure",
		"H": "Frisk"
	},
	"weightkg": 30.6,
	"prevo": "Duskull",
	"evoLevel": 37,
	"evos": [
		"Dusknoir"
	],
	"eggGroups": [
		"Amorphous"
	]
},
tropius: {
	"num": -357,
	"name": "Tropius",
	"types": [
		"Grass",
		"Flying"
	],
	"baseStats": {
		"hp": 99,
		"atk": 68,
		"def": 83,
		"spa": 79,
		"spd": 79,
		"spe": 51
	},
	"abilities": {
		"0": "Chlorophyll",
		"1": "Solar Power",
		"H": "Harvest"
	},
	"weightkg": 100,
	"eggGroups": [
		"Monster",
		"Grass"
	]
},
chimecho: {
	"num": -358,
	"name": "Chimecho",
	"types": [
		"Psychic"
	],
	"baseStats": {
		"hp": 75,
		"atk": 50,
		"def": 80,
		"spa": 92,
		"spd": 92,
		"spe": 65
	},
	"abilities": {
		"0": "Levitate"
	},
	"weightkg": 1,
	"prevo": "Chingling",
	"evoType": "levelFriendship",
	"evoCondition": "at night",
	"eggGroups": [
		"Amorphous"
	],
	"canHatch": true
},
absol: {
	"num": -359,
	"name": "Absol",
	"types": [
		"Normal"
	],
	"baseStats": {
		"hp": 65,
		"atk": 130,
		"def": 60,
		"spa": 67,
		"spd": 67,
		"spe": 75
	},
	"abilities": {
		"0": "Pressure",
		"1": "Super Luck",
		"H": "Justified"
	},
	"weightkg": 47,
	"eggGroups": [
		"Field"
	],
	"otherFormes": [
		"Absol-Mega"
	],
	"formeOrder": [
		"Absol",
		"Absol-Mega"
	]
},
absolmega: {
	"num": -359,
	"name": "Absol-Mega",
	"baseSpecies": "Absol",
	"forme": "Mega",
	"types": [
		"Normal"
	],
	"baseStats": {
		"hp": 65,
		"atk": 140,
		"def": 60,
		"spa": 77,
		"spd": 77,
		"spe": 95
	},
	"abilities": {
		"0": "Magic Bounce"
	},
	"weightkg": 49,
	"eggGroups": [
		"Field"
	],
	// "requiredItem": "Absolite"
},
wynaut: {
	"num": -360,
	"name": "Wynaut",
	"types": [
		"Psychic"
	],
	"baseStats": {
		"hp": 95,
		"atk": 23,
		"def": 48,
		"spa": 35,
		"spd": 35,
		"spe": 23
	},
	"abilities": {
		"0": "Shadow Tag",
		"H": "Telepathy"
	},
	"weightkg": 14,
	"evos": [
		"Wobbuffet"
	],
	"eggGroups": [
		"Undiscovered"
	],
	"canHatch": true
},
snorunt: {
	"num": -361,
	"name": "Snorunt",
	"types": [
		"Ice"
	],
	"baseStats": {
		"hp": 50,
		"atk": 50,
		"def": 50,
		"spa": 50,
		"spd": 50,
		"spe": 50
	},
	"abilities": {
		"0": "Inner Focus",
		"1": "Ice Body",
		"H": "Moody"
	},
	"weightkg": 16.8,
	"evos": [
		"Glalie",
		"Froslass"
	],
	"eggGroups": [
		"Fairy",
		"Mineral"
	]
},
glalie: {
	"num": -362,
	"name": "Glalie",
	"types": [
		"Ice"
	],
	"baseStats": {
		"hp": 80,
		"atk": 80,
		"def": 80,
		"spa": 80,
		"spd": 80,
		"spe": 80
	},
	"abilities": {
		"0": "Inner Focus",
		"1": "Ice Body",
		"H": "Moody"
	},
	"weightkg": 256.5,
	"prevo": "Snorunt",
	"evoLevel": 42,
	"eggGroups": [
		"Fairy",
		"Mineral"
	],
	"otherFormes": [
		"Glalie-Mega"
	],
	"formeOrder": [
		"Glalie",
		"Glalie-Mega"
	]
},
glaliemega: {
	"num": -362,
	"name": "Glalie-Mega",
	"baseSpecies": "Glalie",
	"forme": "Mega",
	"types": [
		"Ice"
	],
	"baseStats": {
		"hp": 80,
		"atk": 100,
		"def": 80,
		"spa": 90,
		"spd": 90,
		"spe": 90
	},
	"abilities": {
		"0": "Refrigerate"
	},
	"weightkg": 350.2,
	"eggGroups": [
		"Fairy",
		"Mineral"
	],
	// "requiredItem": "Glalitite"
},
spheal: {
	"num": -363,
	"name": "Spheal",
	"types": [
		"Ice",
		"Water"
	],
	"baseStats": {
		"hp": 70,
		"atk": 40,
		"def": 50,
		"spa": 52,
		"spd": 52,
		"spe": 25
	},
	"abilities": {
		"0": "Thick Fat",
		"1": "Ice Body",
		"H": "Oblivious"
	},
	"weightkg": 39.5,
	"evos": [
		"Sealeo"
	],
	"eggGroups": [
		"Water 1",
		"Field"
	]
},
sealeo: {
	"num": -364,
	"name": "Sealeo",
	"types": [
		"Ice",
		"Water"
	],
	"baseStats": {
		"hp": 90,
		"atk": 60,
		"def": 70,
		"spa": 72,
		"spd": 72,
		"spe": 45
	},
	"abilities": {
		"0": "Thick Fat",
		"1": "Ice Body",
		"H": "Oblivious"
	},
	"weightkg": 87.6,
	"prevo": "Spheal",
	"evoLevel": 32,
	"evos": [
		"Walrein"
	],
	"eggGroups": [
		"Water 1",
		"Field"
	]
},
walrein: {
	"num": -365,
	"name": "Walrein",
	"types": [
		"Ice",
		"Water"
	],
	"baseStats": {
		"hp": 110,
		"atk": 80,
		"def": 90,
		"spa": 92,
		"spd": 92,
		"spe": 65
	},
	"abilities": {
		"0": "Thick Fat",
		"1": "Ice Body",
		"H": "Oblivious"
	},
	"weightkg": 150.6,
	"prevo": "Sealeo",
	"evoLevel": 44,
	"eggGroups": [
		"Water 1",
		"Field"
	]
},
clamperl: {
	"num": -366,
	"name": "Clamperl",
	"types": [
		"Water"
	],
	"baseStats": {
		"hp": 35,
		"atk": 64,
		"def": 85,
		"spa": 64,
		"spd": 64,
		"spe": 32
	},
	"abilities": {
		"0": "Shell Armor",
		"H": "Rattled"
	},
	"weightkg": 52.5,
	"evos": [
		"Huntail",
		"Gorebyss"
	],
	"eggGroups": [
		"Water 1"
	]
},
huntail: {
	"num": -367,
	"name": "Huntail",
	"types": [
		"Water"
	],
	"baseStats": {
		"hp": 55,
		"atk": 104,
		"def": 105,
		"spa": 84,
		"spd": 84,
		"spe": 52
	},
	"abilities": {
		"0": "Swift Swim",
		"H": "Water Veil"
	},
	"weightkg": 27,
	"prevo": "Clamperl",
	"evoType": "trade",
	"evoItem": "Deep Sea Tooth",
	"eggGroups": [
		"Water 1"
	]
},
gorebyss: {
	"num": -368,
	"name": "Gorebyss",
	"types": [
		"Water"
	],
	"baseStats": {
		"hp": 55,
		"atk": 84,
		"def": 105,
		"spa": 94,
		"spd": 94,
		"spe": 52
	},
	"abilities": {
		"0": "Swift Swim",
		"H": "Hydration"
	},
	"weightkg": 22.6,
	"prevo": "Clamperl",
	"evoType": "trade",
	"evoItem": "Deep Sea Scale",
	"eggGroups": [
		"Water 1"
	]
},
relicanth: {
	"num": -369,
	"name": "Relicanth",
	"types": [
		"Water",
		"Rock"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 100,
		"atk": 90,
		"def": 130,
		"spa": 55,
		"spd": 55,
		"spe": 55
	},
	"abilities": {
		"0": "Swift Swim",
		"1": "Rock Head",
		"H": "Sturdy"
	},
	"weightkg": 23.4,
	"eggGroups": [
		"Water 1",
		"Water 2"
	]
},
luvdisc: {
	"num": -370,
	"name": "Luvdisc",
	"types": [
		"Water"
	],
	"genderRatio": {
		"M": 0.25,
		"F": 0.75
	},
	"baseStats": {
		"hp": 43,
		"atk": 30,
		"def": 55,
		"spa": 52,
		"spd": 52,
		"spe": 97
	},
	"abilities": {
		"0": "Swift Swim",
		"H": "Hydration"
	},
	"weightkg": 8.7,
	"eggGroups": [
		"Water 2"
	]
},
bagon: {
	"num": -371,
	"name": "Bagon",
	"types": [
		"Dragon"
	],
	"baseStats": {
		"hp": 45,
		"atk": 75,
		"def": 60,
		"spa": 35,
		"spd": 35,
		"spe": 50
	},
	"abilities": {
		"0": "Rock Head",
		"H": "Sheer Force"
	},
	"weightkg": 42.1,
	"evos": [
		"Shelgon"
	],
	"eggGroups": [
		"Dragon"
	]
},
shelgon: {
	"num": -372,
	"name": "Shelgon",
	"types": [
		"Dragon"
	],
	"baseStats": {
		"hp": 65,
		"atk": 95,
		"def": 100,
		"spa": 55,
		"spd": 55,
		"spe": 50
	},
	"abilities": {
		"0": "Rock Head",
		"H": "Overcoat"
	},
	"weightkg": 110.5,
	"prevo": "Bagon",
	"evoLevel": 30,
	"evos": [
		"Salamence"
	],
	"eggGroups": [
		"Dragon"
	]
},
salamence: {
	"num": -373,
	"name": "Salamence",
	"types": [
		"Dragon",
		"Flying"
	],
	"baseStats": {
		"hp": 95,
		"atk": 135,
		"def": 80,
		"spa": 95,
		"spd": 95,
		"spe": 100
	},
	"abilities": {
		"0": "Intimidate",
		"H": "Moxie"
	},
	"weightkg": 102.6,
	"prevo": "Shelgon",
	"evoLevel": 50,
	"eggGroups": [
		"Dragon"
	],
	"otherFormes": [
		"Salamence-Mega"
	],
	"formeOrder": [
		"Salamence",
		"Salamence-Mega"
	]
},
salamencemega: {
	"num": -373,
	"name": "Salamence-Mega",
	"baseSpecies": "Salamence",
	"forme": "Mega",
	"types": [
		"Dragon",
		"Flying"
	],
	"baseStats": {
		"hp": 95,
		"atk": 140,
		"def": 105,
		"spa": 99,
		"spd": 99,
		"spe": 110
	},
	"abilities": {
		"0": "Aerilate"
	},
	"weightkg": 112.6,
	"eggGroups": [
		"Dragon"
	],
	// "requiredItem": "Salamencite"
},
beldum: {
	"num": -374,
	"name": "Beldum",
	"types": [
		"Rock",
		"Psychic"
	],
	"gender": "N",
	"baseStats": {
		"hp": 40,
		"atk": 55,
		"def": 80,
		"spa": 47,
		"spd": 47,
		"spe": 30
	},
	"abilities": {
		"0": "Clear Body",
		"H": "Light Metal"
	},
	"weightkg": 95.2,
	"evos": [
		"Metang"
	],
	"eggGroups": [
		"Mineral"
	]
},
metang: {
	"num": -375,
	"name": "Metang",
	"types": [
		"Rock",
		"Psychic"
	],
	"gender": "N",
	"baseStats": {
		"hp": 60,
		"atk": 75,
		"def": 100,
		"spa": 67,
		"spd": 67,
		"spe": 50
	},
	"abilities": {
		"0": "Clear Body",
		"H": "Light Metal"
	},
	"weightkg": 202.5,
	"prevo": "Beldum",
	"evoLevel": 20,
	"evos": [
		"Metagross"
	],
	"eggGroups": [
		"Mineral"
	]
},
metagross: {
	"num": -376,
	"name": "Metagross",
	"types": [
		"Rock",
		"Psychic"
	],
	"gender": "N",
	"baseStats": {
		"hp": 80,
		"atk": 135,
		"def": 130,
		"spa": 92,
		"spd": 92,
		"spe": 70
	},
	"abilities": {
		"0": "Clear Body",
		"H": "Light Metal"
	},
	"weightkg": 550,
	"prevo": "Metang",
	"evoLevel": 45,
	"eggGroups": [
		"Mineral"
	],
	"otherFormes": [
		"Metagross-Mega"
	],
	"formeOrder": [
		"Metagross",
		"Metagross-Mega"
	]
},
metagrossmega: {
	"num": -376,
	"name": "Metagross-Mega",
	"baseSpecies": "Metagross",
	"forme": "Mega",
	"types": [
		"Rock",
		"Psychic"
	],
	"gender": "N",
	"baseStats": {
		"hp": 80,
		"atk": 140,
		"def": 140,
		"spa": 99,
		"spd": 99,
		"spe": 90
	},
	"abilities": {
		"0": "Tough Claws"
	},
	"weightkg": 942.9,
	"eggGroups": [
		"Mineral"
	],
	// "requiredItem": "Metagrossite"
},
regirock: {
	"num": -377,
	"name": "Regirock",
	"types": [
		"Rock"
	],
	"gender": "N",
	"baseStats": {
		"hp": 80,
		"atk": 100,
		"def": 200,
		"spa": 75,
		"spd": 75,
		"spe": 50
	},
	"abilities": {
		"0": "Clear Body",
		"H": "Sturdy"
	},
	"weightkg": 230,
	"tags": [
		"Sub-Legendary"
	],
	"eggGroups": [
		"Undiscovered"
	]
},
regice: {
	"num": -378,
	"name": "Regice",
	"types": [
		"Ice"
	],
	"gender": "N",
	"baseStats": {
		"hp": 80,
		"atk": 50,
		"def": 100,
		"spa": 150,
		"spd": 150,
		"spe": 50
	},
	"abilities": {
		"0": "Clear Body",
		"H": "Ice Body"
	},
	"weightkg": 175,
	"tags": [
		"Sub-Legendary"
	],
	"eggGroups": [
		"Undiscovered"
	]
},
registeel: {
	"num": -379,
	"name": "Registeel",
	"types": [
		"Rock"
	],
	"gender": "N",
	"baseStats": {
		"hp": 80,
		"atk": 75,
		"def": 150,
		"spa": 112,
		"spd": 112,
		"spe": 50
	},
	"abilities": {
		"0": "Clear Body",
		"H": "Light Metal"
	},
	"weightkg": 205,
	"tags": [
		"Sub-Legendary"
	],
	"eggGroups": [
		"Undiscovered"
	]
},
latias: {
	"num": -380,
	"name": "Latias",
	"types": [
		"Dragon",
		"Psychic"
	],
	"gender": "F",
	"baseStats": {
		"hp": 80,
		"atk": 80,
		"def": 90,
		"spa": 120,
		"spd": 120,
		"spe": 110
	},
	"abilities": {
		"0": "Levitate"
	},
	"weightkg": 40,
	"tags": [
		"Sub-Legendary"
	],
	"eggGroups": [
		"Undiscovered"
	],
	"otherFormes": [
		"Latias-Mega"
	],
	"formeOrder": [
		"Latias",
		"Latias-Mega"
	]
},
latiasmega: {
	"num": -380,
	"name": "Latias-Mega",
	"baseSpecies": "Latias",
	"forme": "Mega",
	"types": [
		"Dragon",
		"Psychic"
	],
	"gender": "F",
	"baseStats": {
		"hp": 80,
		"atk": 90,
		"def": 105,
		"spa": 132,
		"spd": 132,
		"spe": 110
	},
	"abilities": {
		"0": "Levitate"
	},
	"weightkg": 52,
	"eggGroups": [
		"Undiscovered"
	],
	// "requiredItem": "Latiasite"
},
latios: {
	"num": -381,
	"name": "Latios",
	"types": [
		"Dragon",
		"Psychic"
	],
	"gender": "M",
	"baseStats": {
		"hp": 80,
		"atk": 90,
		"def": 80,
		"spa": 120,
		"spd": 120,
		"spe": 110
	},
	"abilities": {
		"0": "Levitate"
	},
	"weightkg": 60,
	"eggGroups": [
		"Undiscovered"
	],
	"tags": [
		"Sub-Legendary"
	],
	"otherFormes": [
		"Latios-Mega"
	],
	"formeOrder": [
		"Latios",
		"Latios-Mega"
	]
},
latiosmega: {
	"num": -381,
	"name": "Latios-Mega",
	"baseSpecies": "Latios",
	"forme": "Mega",
	"types": [
		"Dragon",
		"Psychic"
	],
	"gender": "M",
	"baseStats": {
		"hp": 80,
		"atk": 110,
		"def": 90,
		"spa": 130,
		"spd": 130,
		"spe": 110
	},
	"abilities": {
		"0": "Levitate"
	},
	"weightkg": 70,
	"eggGroups": [
		"Undiscovered"
	],
	// "requiredItem": "Latiosite"
},
kyogre: {
	"num": -382,
	"name": "Kyogre",
	"types": [
		"Water"
	],
	"gender": "N",
	"baseStats": {
		"hp": 100,
		"atk": 100,
		"def": 90,
		"spa": 145,
		"spd": 145,
		"spe": 90
	},
	"abilities": {
		"0": "Drizzle"
	},
	"weightkg": 352,
	"tags": [
		"Restricted Legendary"
	],
	"eggGroups": [
		"Undiscovered"
	],
	"otherFormes": [
		"Kyogre-Primal"
	],
	"formeOrder": [
		"Kyogre",
		"Kyogre-Primal"
	]
},
kyogreprimal: {
	"num": -382,
	"name": "Kyogre-Primal",
	"baseSpecies": "Kyogre",
	"forme": "Primal",
	"types": [
		"Water"
	],
	"gender": "N",
	"baseStats": {
		"hp": 100,
		"atk": 150,
		"def": 90,
		"spa": 170,
		"spd": 170,
		"spe": 90
	},
	"abilities": {
		"0": "Primordial Sea"
	},
	"weightkg": 430,
	"eggGroups": [
		"Undiscovered"
	],
	// "requiredItem": "Blue Orb"
},
groudon: {
	"num": -383,
	"name": "Groudon",
	"types": [
		"Ground"
	],
	"gender": "N",
	"baseStats": {
		"hp": 100,
		"atk": 150,
		"def": 140,
		"spa": 95,
		"spd": 95,
		"spe": 90
	},
	"abilities": {
		"0": "Drought"
	},
	"weightkg": 950,
	"tags": [
		"Restricted Legendary"
	],
	"eggGroups": [
		"Undiscovered"
	],
	"otherFormes": [
		"Groudon-Primal"
	],
	"formeOrder": [
		"Groudon",
		"Groudon-Primal"
	]
},
groudonprimal: {
	"num": -383,
	"name": "Groudon-Primal",
	"baseSpecies": "Groudon",
	"forme": "Primal",
	"types": [
		"Ground",
		"Fire"
	],
	"gender": "N",
	"baseStats": {
		"hp": 100,
		"atk": 180,
		"def": 160,
		"spa": 120,
		"spd": 120,
		"spe": 90
	},
	"abilities": {
		"0": "Desolate Land"
	},
	"weightkg": 999.7,
	"eggGroups": [
		"Undiscovered"
	],
	// "requiredItem": "Red Orb"
},
rayquaza: {
	"num": -384,
	"name": "Rayquaza",
	"types": [
		"Dragon",
		"Flying"
	],
	"gender": "N",
	"baseStats": {
		"hp": 105,
		"atk": 150,
		"def": 90,
		"spa": 120,
		"spd": 120,
		"spe": 95
	},
	"abilities": {
		"0": "Air Lock"
	},
	"weightkg": 206.5,
	"tags": [
		"Restricted Legendary"
	],
	"eggGroups": [
		"Undiscovered"
	],
	"otherFormes": [
		"Rayquaza-Mega"
	],
	"formeOrder": [
		"Rayquaza",
		"Rayquaza-Mega"
	]
},
rayquazamega: {
	"num": -384,
	"name": "Rayquaza-Mega",
	"baseSpecies": "Rayquaza",
	"forme": "Mega",
	"types": [
		"Dragon",
		"Flying"
	],
	"gender": "N",
	"baseStats": {
		"hp": 105,
		"atk": 165,
		"def": 95,
		"spa": 130,
		"spd": 130,
		"spe": 105
	},
	"abilities": {
		"0": "Delta Stream"
	},
	"weightkg": 392,
	"eggGroups": [
		"Undiscovered"
	],
	// "requiredMove": "Dragon Ascent"
},
jirachi: {
	"num": -385,
	"name": "Jirachi",
	"types": [
		"Rock",
		"Psychic"
	],
	"gender": "N",
	"baseStats": {
		"hp": 100,
		"atk": 100,
		"def": 100,
		"spa": 100,
		"spd": 100,
		"spe": 100
	},
	"abilities": {
		"0": "Serene Grace"
	},
	"weightkg": 1.1,
	"tags": [
		"Mythical"
	],
	"eggGroups": [
		"Undiscovered"
	]
},
deoxys: {
	"num": -386,
	"name": "Deoxys",
	"baseForme": "Normal",
	"types": [
		"Psychic"
	],
	"gender": "N",
	"baseStats": {
		"hp": 50,
		"atk": 150,
		"def": 50,
		"spa": 100,
		"spd": 100,
		"spe": 150
	},
	"abilities": {
		"0": "Pressure"
	},
	"weightkg": 60.8,
	"eggGroups": [
		"Undiscovered"
	],
	"tags": [
		"Mythical"
	],
	"otherFormes": [
		"Deoxys-Attack",
		"Deoxys-Defense",
		"Deoxys-Speed"
	],
	"formeOrder": [
		"Deoxys",
		"Deoxys-Attack",
		"Deoxys-Defense",
		"Deoxys-Speed"
	]
},
deoxysattack: {
	"num": -386,
	"name": "Deoxys-Attack",
	"baseSpecies": "Deoxys",
	"forme": "Attack",
	"types": [
		"Psychic"
	],
	"gender": "N",
	"baseStats": {
		"hp": 50,
		"atk": 180,
		"def": 20,
		"spa": 100,
		"spd": 100,
		"spe": 150
	},
	"abilities": {
		"0": "Pressure"
	},
	"weightkg": 60.8,
	"eggGroups": [
		"Undiscovered"
	],
	"changesFrom": "Deoxys"
},
deoxysdefense: {
	"num": -386,
	"name": "Deoxys-Defense",
	"baseSpecies": "Deoxys",
	"forme": "Defense",
	"types": [
		"Psychic"
	],
	"gender": "N",
	"baseStats": {
		"hp": 50,
		"atk": 70,
		"def": 160,
		"spa": 115,
		"spd": 115,
		"spe": 90
	},
	"abilities": {
		"0": "Pressure"
	},
	"weightkg": 60.8,
	"eggGroups": [
		"Undiscovered"
	],
	"changesFrom": "Deoxys"
},
deoxysspeed: {
	"num": -386,
	"name": "Deoxys-Speed",
	"baseSpecies": "Deoxys",
	"forme": "Speed",
	"types": [
		"Psychic"
	],
	"gender": "N",
	"baseStats": {
		"hp": 50,
		"atk": 95,
		"def": 90,
		"spa": 92,
		"spd": 92,
		"spe": 180
	},
	"abilities": {
		"0": "Pressure"
	},
	"weightkg": 60.8,
	"eggGroups": [
		"Undiscovered"
	],
	"changesFrom": "Deoxys"
},
turtwig: {
	"num": -387,
	"name": "Turtwig",
	"types": [
		"Grass"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 55,
		"atk": 68,
		"def": 64,
		"spa": 50,
		"spd": 50,
		"spe": 31
	},
	"abilities": {
		"0": "Overgrow",
		"H": "Shell Armor"
	},
	"weightkg": 10.2,
	"evos": [
		"Grotle"
	],
	"eggGroups": [
		"Monster",
		"Grass"
	]
},
grotle: {
	"num": -388,
	"name": "Grotle",
	"types": [
		"Grass"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 75,
		"atk": 89,
		"def": 85,
		"spa": 60,
		"spd": 60,
		"spe": 36
	},
	"abilities": {
		"0": "Overgrow",
		"H": "Shell Armor"
	},
	"weightkg": 97,
	"prevo": "Turtwig",
	"evoLevel": 18,
	"evos": [
		"Torterra"
	],
	"eggGroups": [
		"Monster",
		"Grass"
	]
},
torterra: {
	"num": -389,
	"name": "Torterra",
	"types": [
		"Grass",
		"Ground"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 95,
		"atk": 109,
		"def": 105,
		"spa": 80,
		"spd": 80,
		"spe": 56
	},
	"abilities": {
		"0": "Overgrow",
		"H": "Shell Armor"
	},
	"weightkg": 310,
	"prevo": "Grotle",
	"evoLevel": 32,
	"eggGroups": [
		"Monster",
		"Grass"
	]
},
chimchar: {
	"num": -390,
	"name": "Chimchar",
	"types": [
		"Fire"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 44,
		"atk": 58,
		"def": 44,
		"spa": 51,
		"spd": 51,
		"spe": 61
	},
	"abilities": {
		"0": "Blaze",
		"H": "Iron Fist"
	},
	"weightkg": 6.2,
	"evos": [
		"Monferno"
	],
	"eggGroups": [
		"Field",
		"Human-Like"
	]
},
monferno: {
	"num": -391,
	"name": "Monferno",
	"types": [
		"Fire",
		"Fighting"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 64,
		"atk": 78,
		"def": 52,
		"spa": 65,
		"spd": 65,
		"spe": 81
	},
	"abilities": {
		"0": "Blaze",
		"H": "Iron Fist"
	},
	"weightkg": 22,
	"prevo": "Chimchar",
	"evoLevel": 14,
	"evos": [
		"Infernape"
	],
	"eggGroups": [
		"Field",
		"Human-Like"
	]
},
infernape: {
	"num": -392,
	"name": "Infernape",
	"types": [
		"Fire",
		"Fighting"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 76,
		"atk": 104,
		"def": 71,
		"spa": 87,
		"spd": 87,
		"spe": 108
	},
	"abilities": {
		"0": "Blaze",
		"H": "Iron Fist"
	},
	"weightkg": 55,
	"prevo": "Monferno",
	"evoLevel": 36,
	"eggGroups": [
		"Field",
		"Human-Like"
	]
},
piplup: {
	"num": -393,
	"name": "Piplup",
	"types": [
		"Water"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 53,
		"atk": 51,
		"def": 53,
		"spa": 58,
		"spd": 58,
		"spe": 40
	},
	"abilities": {
		"0": "Torrent",
		"H": "Defiant"
	},
	"weightkg": 5.2,
	"evos": [
		"Prinplup"
	],
	"eggGroups": [
		"Water 1",
		"Field"
	]
},
prinplup: {
	"num": -394,
	"name": "Prinplup",
	"types": [
		"Water"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 64,
		"atk": 66,
		"def": 68,
		"spa": 78,
		"spd": 78,
		"spe": 50
	},
	"abilities": {
		"0": "Torrent",
		"H": "Defiant"
	},
	"weightkg": 23,
	"prevo": "Piplup",
	"evoLevel": 16,
	"evos": [
		"Empoleon"
	],
	"eggGroups": [
		"Water 1",
		"Field"
	]
},
empoleon: {
	"num": -395,
	"name": "Empoleon",
	"types": [
		"Water",
		"Rock"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 84,
		"atk": 86,
		"def": 88,
		"spa": 106,
		"spd": 106,
		"spe": 60
	},
	"abilities": {
		"0": "Torrent",
		"H": "Defiant"
	},
	"weightkg": 84.5,
	"prevo": "Prinplup",
	"evoLevel": 36,
	"eggGroups": [
		"Water 1",
		"Field"
	]
},
starly: {
	"num": -396,
	"name": "Starly",
	"types": [
		"Normal",
		"Flying"
	],
	"baseStats": {
		"hp": 40,
		"atk": 55,
		"def": 30,
		"spa": 30,
		"spd": 30,
		"spe": 60
	},
	"abilities": {
		"0": "Keen Eye",
		"H": "Reckless"
	},
	"weightkg": 2,
	"evos": [
		"Staravia"
	],
	"eggGroups": [
		"Flying"
	]
},
staravia: {
	"num": -397,
	"name": "Staravia",
	"types": [
		"Normal",
		"Flying"
	],
	"baseStats": {
		"hp": 55,
		"atk": 75,
		"def": 50,
		"spa": 40,
		"spd": 40,
		"spe": 80
	},
	"abilities": {
		"0": "Intimidate",
		"H": "Reckless"
	},
	"weightkg": 15.5,
	"prevo": "Starly",
	"evoLevel": 14,
	"evos": [
		"Staraptor"
	],
	"eggGroups": [
		"Flying"
	]
},
staraptor: {
	"num": -398,
	"name": "Staraptor",
	"types": [
		"Normal",
		"Flying"
	],
	"baseStats": {
		"hp": 85,
		"atk": 120,
		"def": 70,
		"spa": 55,
		"spd": 55,
		"spe": 100
	},
	"abilities": {
		"0": "Intimidate",
		"H": "Reckless"
	},
	"weightkg": 24.9,
	"prevo": "Staravia",
	"evoLevel": 34,
	"eggGroups": [
		"Flying"
	]
},
bidoof: {
	"num": -399,
	"name": "Bidoof",
	"types": [
		"Normal"
	],
	"baseStats": {
		"hp": 59,
		"atk": 45,
		"def": 40,
		"spa": 37,
		"spd": 37,
		"spe": 31
	},
	"abilities": {
		"0": "Simple",
		"1": "Unaware",
		"H": "Moody"
	},
	"weightkg": 20,
	"evos": [
		"Bibarel"
	],
	"eggGroups": [
		"Water 1",
		"Field"
	]
},
bibarel: {
	"num": -400,
	"name": "Bibarel",
	"types": [
		"Normal",
		"Water"
	],
	"baseStats": {
		"hp": 79,
		"atk": 85,
		"def": 60,
		"spa": 57,
		"spd": 57,
		"spe": 71
	},
	"abilities": {
		"0": "Simple",
		"1": "Unaware",
		"H": "Moody"
	},
	"weightkg": 31.5,
	"prevo": "Bidoof",
	"evoLevel": 15,
	"eggGroups": [
		"Water 1",
		"Field"
	]
},
kricketot: {
	"num": -401,
	"name": "Kricketot",
	"types": [
		"Bug"
	],
	"baseStats": {
		"hp": 37,
		"atk": 25,
		"def": 41,
		"spa": 33,
		"spd": 33,
		"spe": 25
	},
	"abilities": {
		"0": "Shed Skin",
		"H": "Run Away"
	},
	"weightkg": 2.2,
	"evos": [
		"Kricketune"
	],
	"eggGroups": [
		"Bug"
	]
},
kricketune: {
	"num": -402,
	"name": "Kricketune",
	"types": [
		"Bug"
	],
	"baseStats": {
		"hp": 77,
		"atk": 85,
		"def": 51,
		"spa": 53,
		"spd": 53,
		"spe": 65
	},
	"abilities": {
		"0": "Swarm",
		"H": "Technician"
	},
	"weightkg": 25.5,
	"prevo": "Kricketot",
	"evoLevel": 10,
	"eggGroups": [
		"Bug"
	]
},
shinx: {
	"num": -403,
	"name": "Shinx",
	"types": [
		"Electric"
	],
	"baseStats": {
		"hp": 45,
		"atk": 65,
		"def": 34,
		"spa": 37,
		"spd": 37,
		"spe": 45
	},
	"abilities": {
		"0": "Rivalry",
		"1": "Intimidate",
		"H": "Guts"
	},
	"weightkg": 9.5,
	"evos": [
		"Luxio"
	],
	"eggGroups": [
		"Field"
	]
},
luxio: {
	"num": -404,
	"name": "Luxio",
	"types": [
		"Electric"
	],
	"baseStats": {
		"hp": 60,
		"atk": 85,
		"def": 49,
		"spa": 54,
		"spd": 54,
		"spe": 60
	},
	"abilities": {
		"0": "Rivalry",
		"1": "Intimidate",
		"H": "Guts"
	},
	"weightkg": 30.5,
	"prevo": "Shinx",
	"evoLevel": 15,
	"evos": [
		"Luxray"
	],
	"eggGroups": [
		"Field"
	]
},
luxray: {
	"num": -405,
	"name": "Luxray",
	"types": [
		"Electric"
	],
	"baseStats": {
		"hp": 80,
		"atk": 120,
		"def": 79,
		"spa": 87,
		"spd": 87,
		"spe": 70
	},
	"abilities": {
		"0": "Rivalry",
		"1": "Intimidate",
		"H": "Guts"
	},
	"weightkg": 42,
	"prevo": "Luxio",
	"evoLevel": 30,
	"eggGroups": [
		"Field"
	]
},
budew: {
	"num": -406,
	"name": "Budew",
	"types": [
		"Grass",
		"Poison"
	],
	"baseStats": {
		"hp": 40,
		"atk": 30,
		"def": 35,
		"spa": 60,
		"spd": 60,
		"spe": 55
	},
	"abilities": {
		"0": "Natural Cure",
		"1": "Poison Point",
		"H": "Leaf Guard"
	},
	"weightkg": 1.2,
	"evos": [
		"Roselia"
	],
	"eggGroups": [
		"Undiscovered"
	],
	"canHatch": true
},
roserade: {
	"num": -407,
	"name": "Roserade",
	"types": [
		"Grass",
		"Poison"
	],
	"baseStats": {
		"hp": 60,
		"atk": 70,
		"def": 65,
		"spa": 115,
		"spd": 115,
		"spe": 90
	},
	"abilities": {
		"0": "Natural Cure",
		"1": "Poison Point",
		"H": "Technician"
	},
	"weightkg": 14.5,
	"prevo": "Roselia",
	"evoType": "useItem",
	"evoItem": "Shiny Stone",
	"eggGroups": [
		"Fairy",
		"Grass"
	]
},
cranidos: {
	"num": -408,
	"name": "Cranidos",
	"types": [
		"Rock"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 67,
		"atk": 125,
		"def": 40,
		"spa": 30,
		"spd": 30,
		"spe": 58
	},
	"abilities": {
		"0": "Mold Breaker",
		"H": "Sheer Force"
	},
	"weightkg": 31.5,
	"evos": [
		"Rampardos"
	],
	"eggGroups": [
		"Monster"
	]
},
rampardos: {
	"num": -409,
	"name": "Rampardos",
	"types": [
		"Rock"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 97,
		"atk": 165,
		"def": 60,
		"spa": 57,
		"spd": 57,
		"spe": 58
	},
	"abilities": {
		"0": "Mold Breaker",
		"H": "Sheer Force"
	},
	"weightkg": 102.5,
	"prevo": "Cranidos",
	"evoLevel": 30,
	"eggGroups": [
		"Monster"
	]
},
shieldon: {
	"num": -410,
	"name": "Shieldon",
	"types": [
		"Rock"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 30,
		"atk": 42,
		"def": 118,
		"spa": 65,
		"spd": 65,
		"spe": 30
	},
	"abilities": {
		"0": "Sturdy",
		"H": "Soundproof"
	},
	"weightkg": 57,
	"evos": [
		"Bastiodon"
	],
	"eggGroups": [
		"Monster"
	]
},
bastiodon: {
	"num": -411,
	"name": "Bastiodon",
	"types": [
		"Rock"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 60,
		"atk": 52,
		"def": 168,
		"spa": 92,
		"spd": 92,
		"spe": 30
	},
	"abilities": {
		"0": "Sturdy",
		"H": "Soundproof"
	},
	"weightkg": 149.5,
	"prevo": "Shieldon",
	"evoLevel": 30,
	"eggGroups": [
		"Monster"
	]
},
burmy: {
	"num": -412,
	"name": "Burmy",
	"baseForme": "Plant",
	"types": [
		"Bug"
	],
	"baseStats": {
		"hp": 40,
		"atk": 29,
		"def": 45,
		"spa": 37,
		"spd": 37,
		"spe": 36
	},
	"abilities": {
		"0": "Shed Skin",
		"H": "Overcoat"
	},
	"weightkg": 3.4,
	"evos": [
		"Wormadam",
		"Wormadam-Sandy",
		"Wormadam-Trash",
		"Mothim"
	],
	"eggGroups": [
		"Bug"
	],
	"cosmeticFormes": [
		"Burmy-Sandy",
		"Burmy-Trash"
	],
	"formeOrder": [
		"Burmy",
		"Burmy-Sandy",
		"Burmy-Trash"
	]
},
wormadam: {
	"num": -413,
	"name": "Wormadam",
	"baseForme": "Plant",
	"types": [
		"Bug",
		"Grass"
	],
	"gender": "F",
	"baseStats": {
		"hp": 60,
		"atk": 59,
		"def": 85,
		"spa": 92,
		"spd": 92,
		"spe": 36
	},
	"abilities": {
		"0": "Anticipation",
		"H": "Overcoat"
	},
	"weightkg": 6.5,
	"prevo": "Burmy",
	"evoLevel": 20,
	"eggGroups": [
		"Bug"
	],
	"otherFormes": [
		"Wormadam-Sandy",
		"Wormadam-Trash"
	],
	"formeOrder": [
		"Wormadam",
		"Wormadam-Sandy",
		"Wormadam-Trash"
	]
},
wormadamsandy: {
	"num": -413,
	"name": "Wormadam-Sandy",
	"baseSpecies": "Wormadam",
	"forme": "Sandy",
	"types": [
		"Bug",
		"Ground"
	],
	"gender": "F",
	"baseStats": {
		"hp": 60,
		"atk": 79,
		"def": 105,
		"spa": 72,
		"spd": 72,
		"spe": 36
	},
	"abilities": {
		"0": "Anticipation",
		"H": "Overcoat"
	},
	"weightkg": 6.5,
	"prevo": "Burmy",
	"evoLevel": 20,
	"eggGroups": [
		"Bug"
	]
},
wormadamtrash: {
	"num": -413,
	"name": "Wormadam-Trash",
	"baseSpecies": "Wormadam",
	"forme": "Trash",
	"types": [
		"Bug",
		"Rock"
	],
	"gender": "F",
	"baseStats": {
		"hp": 60,
		"atk": 69,
		"def": 95,
		"spa": 82,
		"spd": 82,
		"spe": 36
	},
	"abilities": {
		"0": "Anticipation",
		"H": "Overcoat"
	},
	"weightkg": 6.5,
	"prevo": "Burmy",
	"evoLevel": 20,
	"eggGroups": [
		"Bug"
	]
},
mothim: {
	"num": -414,
	"name": "Mothim",
	"types": [
		"Bug",
		"Flying"
	],
	"gender": "M",
	"baseStats": {
		"hp": 70,
		"atk": 94,
		"def": 50,
		"spa": 72,
		"spd": 72,
		"spe": 66
	},
	"abilities": {
		"0": "Swarm",
		"H": "Tinted Lens"
	},
	"weightkg": 23.3,
	"prevo": "Burmy",
	"evoLevel": 20,
	"eggGroups": [
		"Bug"
	]
},
combee: {
	"num": -415,
	"name": "Combee",
	"types": [
		"Bug",
		"Flying"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 30,
		"atk": 30,
		"def": 42,
		"spa": 36,
		"spd": 36,
		"spe": 70
	},
	"abilities": {
		"0": "Honey Gather",
		"H": "Hustle"
	},
	"weightkg": 5.5,
	"evos": [
		"Vespiquen"
	],
	"eggGroups": [
		"Bug"
	]
},
vespiquen: {
	"num": -416,
	"name": "Vespiquen",
	"types": [
		"Bug",
		"Flying"
	],
	"gender": "F",
	"baseStats": {
		"hp": 70,
		"atk": 80,
		"def": 102,
		"spa": 91,
		"spd": 91,
		"spe": 40
	},
	"abilities": {
		"0": "Pressure",
		"H": "Unnerve"
	},
	"weightkg": 38.5,
	"prevo": "Combee",
	"evoLevel": 21,
	"eggGroups": [
		"Bug"
	]
},
pachirisu: {
	"num": -417,
	"name": "Pachirisu",
	"types": [
		"Electric"
	],
	"baseStats": {
		"hp": 60,
		"atk": 45,
		"def": 70,
		"spa": 67,
		"spd": 67,
		"spe": 95
	},
	"abilities": {
		"0": "Run Away",
		"1": "Pickup",
		"H": "Volt Absorb"
	},
	"weightkg": 3.9,
	"eggGroups": [
		"Field",
		"Fairy"
	]
},
buizel: {
	"num": -418,
	"name": "Buizel",
	"types": [
		"Water"
	],
	"baseStats": {
		"hp": 55,
		"atk": 65,
		"def": 35,
		"spa": 45,
		"spd": 45,
		"spe": 85
	},
	"abilities": {
		"0": "Swift Swim",
		"H": "Water Veil"
	},
	"weightkg": 29.5,
	"evos": [
		"Floatzel"
	],
	"eggGroups": [
		"Water 1",
		"Field"
	]
},
floatzel: {
	"num": -419,
	"name": "Floatzel",
	"types": [
		"Water"
	],
	"baseStats": {
		"hp": 85,
		"atk": 105,
		"def": 55,
		"spa": 67,
		"spd": 67,
		"spe": 115
	},
	"abilities": {
		"0": "Swift Swim",
		"H": "Water Veil"
	},
	"weightkg": 33.5,
	"prevo": "Buizel",
	"evoLevel": 26,
	"eggGroups": [
		"Water 1",
		"Field"
	]
},
cherubi: {
	"num": -420,
	"name": "Cherubi",
	"types": [
		"Grass"
	],
	"baseStats": {
		"hp": 45,
		"atk": 35,
		"def": 45,
		"spa": 57,
		"spd": 57,
		"spe": 35
	},
	"abilities": {
		"0": "Chlorophyll"
	},
	"weightkg": 3.3,
	"evos": [
		"Cherrim"
	],
	"eggGroups": [
		"Fairy",
		"Grass"
	]
},
cherrim: {
	"num": -421,
	"name": "Cherrim",
	"baseForme": "Overcast",
	"types": [
		"Grass"
	],
	"baseStats": {
		"hp": 70,
		"atk": 60,
		"def": 70,
		"spa": 82,
		"spd": 82,
		"spe": 85
	},
	"abilities": {
		"0": "Flower Gift"
	},
	"weightkg": 9.3,
	"prevo": "Cherubi",
	"evoLevel": 25,
	"eggGroups": [
		"Fairy",
		"Grass"
	],
	"otherFormes": [
		"Cherrim-Sunshine"
	],
	"formeOrder": [
		"Cherrim",
		"Cherrim-Sunshine"
	]
},
cherrimsunshine: {
	"num": -421,
	"name": "Cherrim-Sunshine",
	"baseSpecies": "Cherrim",
	"forme": "Sunshine",
	"types": [
		"Grass"
	],
	"baseStats": {
		"hp": 70,
		"atk": 60,
		"def": 70,
		"spa": 82,
		"spd": 82,
		"spe": 85
	},
	"abilities": {
		"0": "Flower Gift"
	},
	"weightkg": 9.3,
	"eggGroups": [
		"Fairy",
		"Grass"
	],
	// "requiredAbility": "Flower Gift",
	"battleOnly": "Cherrim"
},
shellos: {
	"num": -422,
	"name": "Shellos",
	"baseForme": "West",
	"types": [
		"Water"
	],
	"baseStats": {
		"hp": 76,
		"atk": 48,
		"def": 48,
		"spa": 59,
		"spd": 59,
		"spe": 34
	},
	"abilities": {
		"0": "Sticky Hold",
		"1": "Storm Drain",
		"H": "Sand Force"
	},
	"weightkg": 6.3,
	"evos": [
		"Gastrodon"
	],
	"eggGroups": [
		"Water 1",
		"Amorphous"
	],
	"cosmeticFormes": [
		"Shellos-East"
	],
	"formeOrder": [
		"Shellos",
		"Shellos-East"
	]
},
gastrodon: {
	"num": -423,
	"name": "Gastrodon",
	"baseForme": "West",
	"types": [
		"Water",
		"Ground"
	],
	"baseStats": {
		"hp": 111,
		"atk": 83,
		"def": 68,
		"spa": 87,
		"spd": 87,
		"spe": 39
	},
	"abilities": {
		"0": "Sticky Hold",
		"1": "Storm Drain",
		"H": "Sand Force"
	},
	"weightkg": 29.9,
	"prevo": "Shellos",
	"evoLevel": 30,
	"eggGroups": [
		"Water 1",
		"Amorphous"
	],
	"cosmeticFormes": [
		"Gastrodon-East"
	],
	"formeOrder": [
		"Gastrodon",
		"Gastrodon-East"
	]
},
ambipom: {
	"num": -424,
	"name": "Ambipom",
	"types": [
		"Normal"
	],
	"baseStats": {
		"hp": 75,
		"atk": 100,
		"def": 66,
		"spa": 63,
		"spd": 63,
		"spe": 115
	},
	"abilities": {
		"0": "Technician",
		"1": "Pickup",
		"H": "Skill Link"
	},
	"weightkg": 20.3,
	"prevo": "Aipom",
	"evoType": "levelMove",
	"evoMove": "Double Hit",
	"eggGroups": [
		"Field"
	]
},
drifloon: {
	"num": -425,
	"name": "Drifloon",
	"types": [
		"Ghost",
		"Flying"
	],
	"baseStats": {
		"hp": 90,
		"atk": 50,
		"def": 34,
		"spa": 52,
		"spd": 52,
		"spe": 70
	},
	"abilities": {
		"0": "Aftermath",
		"1": "Unburden",
		"H": "Flare Boost"
	},
	"weightkg": 1.2,
	"evos": [
		"Drifblim"
	],
	"eggGroups": [
		"Amorphous"
	]
},
drifblim: {
	"num": -426,
	"name": "Drifblim",
	"types": [
		"Ghost",
		"Flying"
	],
	"baseStats": {
		"hp": 150,
		"atk": 80,
		"def": 44,
		"spa": 72,
		"spd": 72,
		"spe": 80
	},
	"abilities": {
		"0": "Aftermath",
		"1": "Unburden",
		"H": "Flare Boost"
	},
	"weightkg": 15,
	"prevo": "Drifloon",
	"evoLevel": 28,
	"eggGroups": [
		"Amorphous"
	]
},
buneary: {
	"num": -427,
	"name": "Buneary",
	"types": [
		"Normal"
	],
	"baseStats": {
		"hp": 55,
		"atk": 66,
		"def": 44,
		"spa": 50,
		"spd": 50,
		"spe": 85
	},
	"abilities": {
		"0": "Run Away",
		"1": "Klutz",
		"H": "Limber"
	},
	"weightkg": 5.5,
	"evos": [
		"Lopunny"
	],
	"eggGroups": [
		"Field",
		"Human-Like"
	]
},
lopunny: {
	"num": -428,
	"name": "Lopunny",
	"types": [
		"Normal"
	],
	"baseStats": {
		"hp": 65,
		"atk": 76,
		"def": 84,
		"spa": 75,
		"spd": 75,
		"spe": 105
	},
	"abilities": {
		"0": "Cute Charm",
		"1": "Klutz",
		"H": "Limber"
	},
	"weightkg": 33.3,
	"prevo": "Buneary",
	"evoType": "levelFriendship",
	"eggGroups": [
		"Field",
		"Human-Like"
	],
	"otherFormes": [
		"Lopunny-Mega"
	],
	"formeOrder": [
		"Lopunny",
		"Lopunny-Mega"
	]
},
lopunnymega: {
	"num": -428,
	"name": "Lopunny-Mega",
	"baseSpecies": "Lopunny",
	"forme": "Mega",
	"types": [
		"Normal",
		"Fighting"
	],
	"baseStats": {
		"hp": 65,
		"atk": 106,
		"def": 89,
		"spa": 74,
		"spd": 74,
		"spe": 120
	},
	"abilities": {
		"0": "Scrappy"
	},
	"weightkg": 28.3,
	"eggGroups": [
		"Field",
		"Human-Like"
	],
	// "requiredItem": "Lopunnite"
},
mismagius: {
	"num": -429,
	"name": "Mismagius",
	"types": [
		"Ghost"
	],
	"baseStats": {
		"hp": 60,
		"atk": 60,
		"def": 60,
		"spa": 105,
		"spd": 105,
		"spe": 105
	},
	"abilities": {
		"0": "Levitate"
	},
	"weightkg": 4.4,
	"prevo": "Misdreavus",
	"evoType": "useItem",
	"evoItem": "Dusk Stone",
	"eggGroups": [
		"Amorphous"
	]
},
honchkrow: {
	"num": -430,
	"name": "Honchkrow",
	"types": [
		"Normal",
		"Flying"
	],
	"baseStats": {
		"hp": 100,
		"atk": 125,
		"def": 52,
		"spa": 78,
		"spd": 78,
		"spe": 71
	},
	"abilities": {
		"0": "Insomnia",
		"1": "Super Luck",
		"H": "Moxie"
	},
	"weightkg": 27.3,
	"prevo": "Murkrow",
	"evoType": "useItem",
	"evoItem": "Dusk Stone",
	"eggGroups": [
		"Flying"
	]
},
glameow: {
	"num": -431,
	"name": "Glameow",
	"types": [
		"Normal"
	],
	"genderRatio": {
		"M": 0.25,
		"F": 0.75
	},
	"baseStats": {
		"hp": 49,
		"atk": 55,
		"def": 42,
		"spa": 39,
		"spd": 39,
		"spe": 85
	},
	"abilities": {
		"0": "Limber",
		"1": "Own Tempo",
		"H": "Keen Eye"
	},
	"weightkg": 3.9,
	"evos": [
		"Purugly"
	],
	"eggGroups": [
		"Field"
	]
},
purugly: {
	"num": -432,
	"name": "Purugly",
	"types": [
		"Normal"
	],
	"genderRatio": {
		"M": 0.25,
		"F": 0.75
	},
	"baseStats": {
		"hp": 71,
		"atk": 82,
		"def": 64,
		"spa": 61,
		"spd": 61,
		"spe": 112
	},
	"abilities": {
		"0": "Thick Fat",
		"1": "Own Tempo",
		"H": "Defiant"
	},
	"weightkg": 43.8,
	"prevo": "Glameow",
	"evoLevel": 38,
	"eggGroups": [
		"Field"
	]
},
chingling: {
	"num": -433,
	"name": "Chingling",
	"types": [
		"Psychic"
	],
	"baseStats": {
		"hp": 45,
		"atk": 30,
		"def": 50,
		"spa": 57,
		"spd": 57,
		"spe": 45
	},
	"abilities": {
		"0": "Levitate"
	},
	"weightkg": 0.6,
	"evos": [
		"Chimecho"
	],
	"eggGroups": [
		"Undiscovered"
	],
	"canHatch": true
},
stunky: {
	"num": -434,
	"name": "Stunky",
	"types": [
		"Poison",
		"Normal"
	],
	"baseStats": {
		"hp": 63,
		"atk": 63,
		"def": 47,
		"spa": 41,
		"spd": 41,
		"spe": 74
	},
	"abilities": {
		"0": "Stench",
		"1": "Aftermath",
		"H": "Keen Eye"
	},
	"weightkg": 19.2,
	"evos": [
		"Skuntank"
	],
	"eggGroups": [
		"Field"
	]
},
skuntank: {
	"num": -435,
	"name": "Skuntank",
	"types": [
		"Poison",
		"Normal"
	],
	"baseStats": {
		"hp": 103,
		"atk": 93,
		"def": 67,
		"spa": 66,
		"spd": 66,
		"spe": 84
	},
	"abilities": {
		"0": "Stench",
		"1": "Aftermath",
		"H": "Keen Eye"
	},
	"weightkg": 38,
	"prevo": "Stunky",
	"evoLevel": 34,
	"eggGroups": [
		"Field"
	]
},
bronzor: {
	"num": -436,
	"name": "Bronzor",
	"types": [
		"Rock",
		"Psychic"
	],
	"gender": "N",
	"baseStats": {
		"hp": 57,
		"atk": 24,
		"def": 86,
		"spa": 55,
		"spd": 55,
		"spe": 23
	},
	"abilities": {
		"0": "Levitate",
		"1": "Heatproof",
		"H": "Heavy Metal"
	},
	"weightkg": 60.5,
	"evos": [
		"Bronzong"
	],
	"eggGroups": [
		"Mineral"
	]
},
bronzong: {
	"num": -437,
	"name": "Bronzong",
	"types": [
		"Rock",
		"Psychic"
	],
	"gender": "N",
	"baseStats": {
		"hp": 67,
		"atk": 89,
		"def": 116,
		"spa": 97,
		"spd": 97,
		"spe": 33
	},
	"abilities": {
		"0": "Levitate",
		"1": "Heatproof",
		"H": "Heavy Metal"
	},
	"weightkg": 187,
	"prevo": "Bronzor",
	"evoLevel": 33,
	"eggGroups": [
		"Mineral"
	]
},
bonsly: {
	"num": -438,
	"name": "Bonsly",
	"types": [
		"Rock"
	],
	"baseStats": {
		"hp": 50,
		"atk": 80,
		"def": 95,
		"spa": 27,
		"spd": 27,
		"spe": 10
	},
	"abilities": {
		"0": "Sturdy",
		"1": "Rock Head",
		"H": "Rattled"
	},
	"weightkg": 15,
	"evos": [
		"Sudowoodo"
	],
	"eggGroups": [
		"Undiscovered"
	],
	"canHatch": true
},
mimejr: {
	"num": -439,
	"name": "Mime Jr.",
	"types": [
		"Psychic",
		"Normal"
	],
	"baseStats": {
		"hp": 20,
		"atk": 25,
		"def": 45,
		"spa": 80,
		"spd": 80,
		"spe": 60
	},
	"abilities": {
		"0": "Soundproof",
		"1": "Filter",
		"H": "Technician"
	},
	"weightkg": 13,
	"evos": [
		"Mr. Mime",
		"Mr. Mime-Galar"
	],
	"eggGroups": [
		"Undiscovered"
	],
	"canHatch": true
},
happiny: {
	"num": -440,
	"name": "Happiny",
	"types": [
		"Normal"
	],
	"gender": "F",
	"baseStats": {
		"hp": 100,
		"atk": 5,
		"def": 5,
		"spa": 40,
		"spd": 40,
		"spe": 30
	},
	"abilities": {
		"0": "Natural Cure",
		"1": "Serene Grace",
		"H": "Friend Guard"
	},
	"weightkg": 24.4,
	"evos": [
		"Chansey"
	],
	"eggGroups": [
		"Undiscovered"
	],
	"canHatch": true
},
chatot: {
	"num": -441,
	"name": "Chatot",
	"types": [
		"Normal",
		"Flying"
	],
	"baseStats": {
		"hp": 76,
		"atk": 65,
		"def": 45,
		"spa": 67,
		"spd": 67,
		"spe": 91
	},
	"abilities": {
		"0": "Keen Eye",
		"1": "Tangled Feet",
		"H": "Big Pecks"
	},
	"weightkg": 1.9,
	"eggGroups": [
		"Flying"
	]
},
spiritomb: {
	"num": -442,
	"name": "Spiritomb",
	"types": [
		"Ghost",
		"Normal"
	],
	"baseStats": {
		"hp": 50,
		"atk": 92,
		"def": 108,
		"spa": 100,
		"spd": 100,
		"spe": 35
	},
	"abilities": {
		"0": "Pressure",
		"H": "Infiltrator"
	},
	"weightkg": 108,
	"eggGroups": [
		"Amorphous"
	]
},
gible: {
	"num": -443,
	"name": "Gible",
	"types": [
		"Dragon",
		"Ground"
	],
	"baseStats": {
		"hp": 58,
		"atk": 70,
		"def": 45,
		"spa": 42,
		"spd": 42,
		"spe": 42
	},
	"abilities": {
		"0": "Sand Veil",
		"H": "Rough Skin"
	},
	"weightkg": 20.5,
	"evos": [
		"Gabite"
	],
	"eggGroups": [
		"Monster",
		"Dragon"
	]
},
gabite: {
	"num": -444,
	"name": "Gabite",
	"types": [
		"Dragon",
		"Ground"
	],
	"baseStats": {
		"hp": 68,
		"atk": 90,
		"def": 65,
		"spa": 52,
		"spd": 52,
		"spe": 82
	},
	"abilities": {
		"0": "Sand Veil",
		"H": "Rough Skin"
	},
	"weightkg": 56,
	"prevo": "Gible",
	"evoLevel": 24,
	"evos": [
		"Garchomp"
	],
	"eggGroups": [
		"Monster",
		"Dragon"
	]
},
garchomp: {
	"num": -445,
	"name": "Garchomp",
	"types": [
		"Dragon",
		"Ground"
	],
	"baseStats": {
		"hp": 108,
		"atk": 130,
		"def": 95,
		"spa": 82,
		"spd": 82,
		"spe": 102
	},
	"abilities": {
		"0": "Sand Veil",
		"H": "Rough Skin"
	},
	"weightkg": 95,
	"prevo": "Gabite",
	"evoLevel": 48,
	"eggGroups": [
		"Monster",
		"Dragon"
	],
	"otherFormes": [
		"Garchomp-Mega"
	],
	"formeOrder": [
		"Garchomp",
		"Garchomp-Mega"
	]
},
garchompmega: {
	"num": -445,
	"name": "Garchomp-Mega",
	"baseSpecies": "Garchomp",
	"forme": "Mega",
	"types": [
		"Dragon",
		"Ground"
	],
	"baseStats": {
		"hp": 108,
		"atk": 150,
		"def": 105,
		"spa": 94,
		"spd": 94,
		"spe": 97
	},
	"abilities": {
		"0": "Sand Force"
	},
	"weightkg": 95,
	"eggGroups": [
		"Monster",
		"Dragon"
	],
	// "requiredItem": "Garchompite"
},
munchlax: {
	"num": -446,
	"name": "Munchlax",
	"types": [
		"Normal"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 135,
		"atk": 85,
		"def": 40,
		"spa": 62,
		"spd": 62,
		"spe": 5
	},
	"abilities": {
		"0": "Pickup",
		"1": "Thick Fat",
		"H": "Gluttony"
	},
	"weightkg": 105,
	"evos": [
		"Snorlax"
	],
	"eggGroups": [
		"Undiscovered"
	],
	"canHatch": true
},
riolu: {
	"num": -447,
	"name": "Riolu",
	"types": [
		"Fighting"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 40,
		"atk": 70,
		"def": 40,
		"spa": 37,
		"spd": 37,
		"spe": 60
	},
	"abilities": {
		"0": "Steadfast",
		"1": "Inner Focus",
		"H": "Prankster"
	},
	"weightkg": 20.2,
	"evos": [
		"Lucario"
	],
	"eggGroups": [
		"Undiscovered"
	],
	"canHatch": true
},
lucario: {
	"num": -448,
	"name": "Lucario",
	"types": [
		"Fighting",
		"Rock"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 70,
		"atk": 110,
		"def": 70,
		"spa": 92,
		"spd": 92,
		"spe": 90
	},
	"abilities": {
		"0": "Steadfast",
		"1": "Inner Focus",
		"H": "Justified"
	},
	"weightkg": 54,
	"prevo": "Riolu",
	"evoType": "levelFriendship",
	"evoCondition": "during the day",
	"eggGroups": [
		"Field",
		"Human-Like"
	],
	"otherFormes": [
		"Lucario-Mega"
	],
	"formeOrder": [
		"Lucario",
		"Lucario-Mega"
	]
},
lucariomega: {
	"num": -448,
	"name": "Lucario-Mega",
	"baseSpecies": "Lucario",
	"forme": "Mega",
	"types": [
		"Fighting",
		"Rock"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 70,
		"atk": 127,
		"def": 79,
		"spa": 98,
		"spd": 98,
		"spe": 101
	},
	"abilities": {
		"0": "Adaptability"
	},
	"weightkg": 57.5,
	"eggGroups": [
		"Field",
		"Human-Like"
	],
	// "requiredItem": "Lucarionite"
},
hippopotas: {
	"num": -449,
	"name": "Hippopotas",
	"types": [
		"Ground"
	],
	"baseStats": {
		"hp": 68,
		"atk": 72,
		"def": 78,
		"spa": 40,
		"spd": 40,
		"spe": 32
	},
	"abilities": {
		"0": "Sand Stream",
		"H": "Sand Force"
	},
	"weightkg": 49.5,
	"evos": [
		"Hippowdon"
	],
	"eggGroups": [
		"Field"
	]
},
hippowdon: {
	"num": -450,
	"name": "Hippowdon",
	"types": [
		"Ground"
	],
	"baseStats": {
		"hp": 108,
		"atk": 112,
		"def": 118,
		"spa": 70,
		"spd": 70,
		"spe": 47
	},
	"abilities": {
		"0": "Sand Stream",
		"H": "Sand Force"
	},
	"weightkg": 300,
	"prevo": "Hippopotas",
	"evoLevel": 34,
	"eggGroups": [
		"Field"
	]
},
skorupi: {
	"num": -451,
	"name": "Skorupi",
	"types": [
		"Poison",
		"Bug"
	],
	"baseStats": {
		"hp": 40,
		"atk": 50,
		"def": 90,
		"spa": 42,
		"spd": 42,
		"spe": 65
	},
	"abilities": {
		"0": "Battle Armor",
		"1": "Sniper",
		"H": "Keen Eye"
	},
	"weightkg": 12,
	"evos": [
		"Drapion"
	],
	"eggGroups": [
		"Bug",
		"Water 3"
	]
},
drapion: {
	"num": -452,
	"name": "Drapion",
	"types": [
		"Poison",
		"Normal"
	],
	"baseStats": {
		"hp": 70,
		"atk": 90,
		"def": 110,
		"spa": 67,
		"spd": 67,
		"spe": 95
	},
	"abilities": {
		"0": "Battle Armor",
		"1": "Sniper",
		"H": "Keen Eye"
	},
	"weightkg": 61.5,
	"prevo": "Skorupi",
	"evoLevel": 40,
	"eggGroups": [
		"Bug",
		"Water 3"
	]
},
croagunk: {
	"num": -453,
	"name": "Croagunk",
	"types": [
		"Poison",
		"Fighting"
	],
	"baseStats": {
		"hp": 48,
		"atk": 61,
		"def": 40,
		"spa": 50,
		"spd": 50,
		"spe": 50
	},
	"abilities": {
		"0": "Anticipation",
		"1": "Dry Skin",
		"H": "Poison Touch"
	},
	"weightkg": 23,
	"evos": [
		"Toxicroak"
	],
	"eggGroups": [
		"Human-Like"
	]
},
toxicroak: {
	"num": -454,
	"name": "Toxicroak",
	"types": [
		"Poison",
		"Fighting"
	],
	"baseStats": {
		"hp": 83,
		"atk": 106,
		"def": 65,
		"spa": 75,
		"spd": 75,
		"spe": 85
	},
	"abilities": {
		"0": "Anticipation",
		"1": "Dry Skin",
		"H": "Poison Touch"
	},
	"weightkg": 44.4,
	"prevo": "Croagunk",
	"evoLevel": 37,
	"eggGroups": [
		"Human-Like"
	]
},
carnivine: {
	"num": -455,
	"name": "Carnivine",
	"types": [
		"Grass"
	],
	"baseStats": {
		"hp": 74,
		"atk": 100,
		"def": 72,
		"spa": 81,
		"spd": 81,
		"spe": 46
	},
	"abilities": {
		"0": "Levitate"
	},
	"weightkg": 27,
	"eggGroups": [
		"Grass"
	]
},
finneon: {
	"num": -456,
	"name": "Finneon",
	"types": [
		"Water"
	],
	"baseStats": {
		"hp": 49,
		"atk": 49,
		"def": 56,
		"spa": 55,
		"spd": 55,
		"spe": 66
	},
	"abilities": {
		"0": "Swift Swim",
		"1": "Storm Drain",
		"H": "Water Veil"
	},
	"weightkg": 7,
	"evos": [
		"Lumineon"
	],
	"eggGroups": [
		"Water 2"
	]
},
lumineon: {
	"num": -457,
	"name": "Lumineon",
	"types": [
		"Water"
	],
	"baseStats": {
		"hp": 69,
		"atk": 69,
		"def": 76,
		"spa": 77,
		"spd": 77,
		"spe": 91
	},
	"abilities": {
		"0": "Swift Swim",
		"1": "Storm Drain",
		"H": "Water Veil"
	},
	"weightkg": 24,
	"prevo": "Finneon",
	"evoLevel": 31,
	"eggGroups": [
		"Water 2"
	]
},
mantyke: {
	"num": -458,
	"name": "Mantyke",
	"types": [
		"Water",
		"Flying"
	],
	"baseStats": {
		"hp": 45,
		"atk": 20,
		"def": 50,
		"spa": 90,
		"spd": 90,
		"spe": 50
	},
	"abilities": {
		"0": "Swift Swim",
		"1": "Water Absorb",
		"H": "Water Veil"
	},
	"weightkg": 65,
	"evos": [
		"Mantine"
	],
	"eggGroups": [
		"Undiscovered"
	],
	"canHatch": true
},
snover: {
	"num": -459,
	"name": "Snover",
	"types": [
		"Grass",
		"Ice"
	],
	"baseStats": {
		"hp": 60,
		"atk": 62,
		"def": 50,
		"spa": 61,
		"spd": 61,
		"spe": 40
	},
	"abilities": {
		"0": "Snow Warning",
		"H": "Soundproof"
	},
	"weightkg": 50.5,
	"evos": [
		"Abomasnow"
	],
	"eggGroups": [
		"Monster",
		"Grass"
	]
},
abomasnow: {
	"num": -460,
	"name": "Abomasnow",
	"types": [
		"Grass",
		"Ice"
	],
	"baseStats": {
		"hp": 90,
		"atk": 92,
		"def": 75,
		"spa": 88,
		"spd": 88,
		"spe": 60
	},
	"abilities": {
		"0": "Snow Warning",
		"H": "Soundproof"
	},
	"weightkg": 135.5,
	"prevo": "Snover",
	"evoLevel": 40,
	"eggGroups": [
		"Monster",
		"Grass"
	],
	"otherFormes": [
		"Abomasnow-Mega"
	],
	"formeOrder": [
		"Abomasnow",
		"Abomasnow-Mega"
	]
},
abomasnowmega: {
	"num": -460,
	"name": "Abomasnow-Mega",
	"baseSpecies": "Abomasnow",
	"forme": "Mega",
	"types": [
		"Grass",
		"Ice"
	],
	"baseStats": {
		"hp": 90,
		"atk": 112,
		"def": 90,
		"spa": 103,
		"spd": 103,
		"spe": 45
	},
	"abilities": {
		"0": "Snow Warning"
	},
	"weightkg": 185,
	"eggGroups": [
		"Monster",
		"Grass"
	],
	// "requiredItem": "Abomasite"
},
weavile: {
	"num": -461,
	"name": "Weavile",
	"types": [
		"Normal",
		"Ice"
	],
	"baseStats": {
		"hp": 70,
		"atk": 120,
		"def": 65,
		"spa": 65,
		"spd": 65,
		"spe": 125
	},
	"abilities": {
		"0": "Pressure",
		"H": "Pickpocket"
	},
	"weightkg": 34,
	"prevo": "Sneasel",
	"evoType": "levelHold",
	"evoItem": "Razor Claw",
	"evoCondition": "at night",
	"eggGroups": [
		"Field"
	]
},
magnezone: {
	"num": -462,
	"name": "Magnezone",
	"types": [
		"Electric",
		"Rock"
	],
	"gender": "N",
	"baseStats": {
		"hp": 70,
		"atk": 70,
		"def": 115,
		"spa": 110,
		"spd": 110,
		"spe": 60
	},
	"abilities": {
		"0": "Magnet Pull",
		"1": "Sturdy",
		"H": "Analytic"
	},
	"weightkg": 180,
	"prevo": "Magneton",
	"evoType": "useItem",
	"evoItem": "Thunder Stone",
	"eggGroups": [
		"Mineral"
	]
},
lickilicky: {
	"num": -463,
	"name": "Lickilicky",
	"types": [
		"Normal"
	],
	"baseStats": {
		"hp": 110,
		"atk": 85,
		"def": 95,
		"spa": 87,
		"spd": 87,
		"spe": 50
	},
	"abilities": {
		"0": "Own Tempo",
		"1": "Oblivious",
		"H": "Cloud Nine"
	},
	"weightkg": 140,
	"prevo": "Lickitung",
	"evoType": "levelMove",
	"evoMove": "Rollout",
	"eggGroups": [
		"Monster"
	]
},
rhyperior: {
	"num": -464,
	"name": "Rhyperior",
	"types": [
		"Ground",
		"Rock"
	],
	"baseStats": {
		"hp": 115,
		"atk": 140,
		"def": 130,
		"spa": 55,
		"spd": 55,
		"spe": 40
	},
	"abilities": {
		"0": "Lightning Rod",
		"1": "Solid Rock",
		"H": "Reckless"
	},
	"weightkg": 282.8,
	"prevo": "Rhydon",
	"evoType": "trade",
	"evoItem": "Protector",
	"eggGroups": [
		"Monster",
		"Field"
	]
},
tangrowth: {
	"num": -465,
	"name": "Tangrowth",
	"types": [
		"Grass"
	],
	"baseStats": {
		"hp": 100,
		"atk": 100,
		"def": 125,
		"spa": 80,
		"spd": 80,
		"spe": 50
	},
	"abilities": {
		"0": "Chlorophyll",
		"1": "Leaf Guard",
		"H": "Regenerator"
	},
	"weightkg": 128.6,
	"prevo": "Tangela",
	"evoType": "levelMove",
	"evoMove": "Ancient Power",
	"eggGroups": [
		"Grass"
	]
},
electivire: {
	"num": -466,
	"name": "Electivire",
	"types": [
		"Electric"
	],
	"genderRatio": {
		"M": 0.75,
		"F": 0.25
	},
	"baseStats": {
		"hp": 75,
		"atk": 123,
		"def": 67,
		"spa": 90,
		"spd": 90,
		"spe": 95
	},
	"abilities": {
		"0": "Motor Drive",
		"H": "Vital Spirit"
	},
	"weightkg": 138.6,
	"prevo": "Electabuzz",
	"evoType": "trade",
	"evoItem": "Electirizer",
	"eggGroups": [
		"Human-Like"
	]
},
magmortar: {
	"num": -467,
	"name": "Magmortar",
	"types": [
		"Fire"
	],
	"genderRatio": {
		"M": 0.75,
		"F": 0.25
	},
	"baseStats": {
		"hp": 75,
		"atk": 95,
		"def": 67,
		"spa": 110,
		"spd": 110,
		"spe": 83
	},
	"abilities": {
		"0": "Flame Body",
		"H": "Vital Spirit"
	},
	"weightkg": 68,
	"prevo": "Magmar",
	"evoType": "trade",
	"evoItem": "Magmarizer",
	"eggGroups": [
		"Human-Like"
	]
},
togekiss: {
	"num": -468,
	"name": "Togekiss",
	"types": [
		"Normal",
		"Flying"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 85,
		"atk": 50,
		"def": 95,
		"spa": 117,
		"spd": 117,
		"spe": 80
	},
	"abilities": {
		"0": "Hustle",
		"1": "Serene Grace",
		"H": "Super Luck"
	},
	"weightkg": 38,
	"prevo": "Togetic",
	"evoType": "useItem",
	"evoItem": "Shiny Stone",
	"eggGroups": [
		"Flying",
		"Fairy"
	]
},
yanmega: {
	"num": -469,
	"name": "Yanmega",
	"types": [
		"Bug",
		"Flying"
	],
	"baseStats": {
		"hp": 86,
		"atk": 76,
		"def": 86,
		"spa": 86,
		"spd": 86,
		"spe": 95
	},
	"abilities": {
		"0": "Speed Boost",
		"1": "Tinted Lens",
		"H": "Frisk"
	},
	"weightkg": 51.5,
	"prevo": "Yanma",
	"evoType": "levelMove",
	"evoMove": "Ancient Power",
	"eggGroups": [
		"Bug"
	]
},
leafeon: {
	"num": -470,
	"name": "Leafeon",
	"types": [
		"Grass"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 65,
		"atk": 110,
		"def": 130,
		"spa": 62,
		"spd": 62,
		"spe": 95
	},
	"abilities": {
		"0": "Leaf Guard",
		"H": "Chlorophyll"
	},
	"weightkg": 25.5,
	"prevo": "Eevee",
	"evoType": "useItem",
	"evoItem": "Leaf Stone",
	"eggGroups": [
		"Field"
	]
},
glaceon: {
	"num": -471,
	"name": "Glaceon",
	"types": [
		"Ice"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 65,
		"atk": 60,
		"def": 110,
		"spa": 112,
		"spd": 112,
		"spe": 65
	},
	"abilities": {
		"0": "Snow Cloak",
		"H": "Ice Body"
	},
	"weightkg": 25.9,
	"prevo": "Eevee",
	"evoType": "useItem",
	"evoItem": "Ice Stone",
	"eggGroups": [
		"Field"
	]
},
gliscor: {
	"num": -472,
	"name": "Gliscor",
	"types": [
		"Ground",
		"Flying"
	],
	"baseStats": {
		"hp": 75,
		"atk": 95,
		"def": 125,
		"spa": 60,
		"spd": 60,
		"spe": 95
	},
	"abilities": {
		"0": "Hyper Cutter",
		"1": "Sand Veil",
		"H": "Poison Heal"
	},
	"weightkg": 42.5,
	"prevo": "Gligar",
	"evoType": "levelHold",
	"evoItem": "Razor Fang",
	"evoCondition": "at night",
	"eggGroups": [
		"Bug"
	]
},
mamoswine: {
	"num": -473,
	"name": "Mamoswine",
	"types": [
		"Ice",
		"Ground"
	],
	"baseStats": {
		"hp": 110,
		"atk": 130,
		"def": 80,
		"spa": 65,
		"spd": 65,
		"spe": 80
	},
	"abilities": {
		"0": "Oblivious",
		"1": "Snow Cloak",
		"H": "Thick Fat"
	},
	"weightkg": 291,
	"prevo": "Piloswine",
	"evoType": "levelMove",
	"evoMove": "Ancient Power",
	"eggGroups": [
		"Field"
	]
},
porygonz: {
	"num": -474,
	"name": "Porygon-Z",
	"types": [
		"Normal"
	],
	"gender": "N",
	"baseStats": {
		"hp": 85,
		"atk": 80,
		"def": 70,
		"spa": 105,
		"spd": 105,
		"spe": 90
	},
	"abilities": {
		"0": "Adaptability",
		"1": "Download",
		"H": "Analytic"
	},
	"weightkg": 34,
	"prevo": "Porygon2",
	"evoType": "trade",
	"evoItem": "Dubious Disc",
	"eggGroups": [
		"Mineral"
	]
},
gallade: {
	"num": -475,
	"name": "Gallade",
	"types": [
		"Psychic",
		"Fighting"
	],
	"gender": "M",
	"baseStats": {
		"hp": 68,
		"atk": 125,
		"def": 65,
		"spa": 90,
		"spd": 90,
		"spe": 80
	},
	"abilities": {
		"0": "Steadfast",
		"H": "Justified"
	},
	"weightkg": 52,
	"prevo": "Kirlia",
	"evoType": "useItem",
	"evoItem": "Dawn Stone",
	"eggGroups": [
		"Human-Like",
		"Amorphous"
	],
	"otherFormes": [
		"Gallade-Mega"
	],
	"formeOrder": [
		"Gallade",
		"Gallade-Mega"
	]
},
gallademega: {
	"num": -475,
	"name": "Gallade-Mega",
	"baseSpecies": "Gallade",
	"forme": "Mega",
	"types": [
		"Psychic",
		"Fighting"
	],
	"gender": "M",
	"baseStats": {
		"hp": 68,
		"atk": 145,
		"def": 80,
		"spa": 89,
		"spd": 89,
		"spe": 95
	},
	"abilities": {
		"0": "Inner Focus"
	},
	"weightkg": 56.4,
	"eggGroups": [
		"Amorphous"
	],
	// "requiredItem": "Galladite"
},
probopass: {
	"num": -476,
	"name": "Probopass",
	"types": [
		"Rock"
	],
	"baseStats": {
		"hp": 60,
		"atk": 55,
		"def": 145,
		"spa": 112,
		"spd": 112,
		"spe": 40
	},
	"abilities": {
		"0": "Sturdy",
		"1": "Magnet Pull",
		"H": "Sand Force"
	},
	"weightkg": 340,
	"prevo": "Nosepass",
	"evoType": "levelExtra",
	"evoCondition": "near a special magnetic field",
	"eggGroups": [
		"Mineral"
	]
},
dusknoir: {
	"num": -477,
	"name": "Dusknoir",
	"types": [
		"Ghost"
	],
	"baseStats": {
		"hp": 45,
		"atk": 100,
		"def": 135,
		"spa": 100,
		"spd": 100,
		"spe": 45
	},
	"abilities": {
		"0": "Pressure",
		"H": "Frisk"
	},
	"weightkg": 106.6,
	"prevo": "Dusclops",
	"evoType": "trade",
	"evoItem": "Reaper Cloth",
	"eggGroups": [
		"Amorphous"
	]
},
froslass: {
	"num": -478,
	"name": "Froslass",
	"types": [
		"Ice",
		"Ghost"
	],
	"gender": "F",
	"baseStats": {
		"hp": 70,
		"atk": 80,
		"def": 70,
		"spa": 75,
		"spd": 75,
		"spe": 110
	},
	"abilities": {
		"0": "Snow Cloak",
		"H": "Cursed Body"
	},
	"weightkg": 26.6,
	"prevo": "Snorunt",
	"evoType": "useItem",
	"evoItem": "Dawn Stone",
	"eggGroups": [
		"Fairy",
		"Mineral"
	]
},
rotom: {
	"num": -479,
	"name": "Rotom",
	"types": [
		"Electric",
		"Ghost"
	],
	"gender": "N",
	"baseStats": {
		"hp": 50,
		"atk": 50,
		"def": 77,
		"spa": 86,
		"spd": 86,
		"spe": 91
	},
	"abilities": {
		"0": "Levitate"
	},
	"weightkg": 0.3,
	"eggGroups": [
		"Amorphous"
	],
	"otherFormes": [
		"Rotom-Heat",
		"Rotom-Wash",
		"Rotom-Frost",
		"Rotom-Fan",
		"Rotom-Mow"
	],
	"formeOrder": [
		"Rotom",
		"Rotom-Heat",
		"Rotom-Wash",
		"Rotom-Frost",
		"Rotom-Fan",
		"Rotom-Mow"
	]
},
rotomheat: {
	"num": -479,
	"name": "Rotom-Heat",
	"baseSpecies": "Rotom",
	"forme": "Heat",
	"types": [
		"Electric",
		"Fire"
	],
	"gender": "N",
	"baseStats": {
		"hp": 50,
		"atk": 65,
		"def": 107,
		"spa": 106,
		"spd": 106,
		"spe": 86
	},
	"abilities": {
		"0": "Levitate"
	},
	"weightkg": 0.3,
	"eggGroups": [
		"Amorphous"
	],
	"changesFrom": "Rotom"
},
rotomwash: {
	"num": -479,
	"name": "Rotom-Wash",
	"baseSpecies": "Rotom",
	"forme": "Wash",
	"types": [
		"Electric",
		"Water"
	],
	"gender": "N",
	"baseStats": {
		"hp": 50,
		"atk": 65,
		"def": 107,
		"spa": 106,
		"spd": 106,
		"spe": 86
	},
	"abilities": {
		"0": "Levitate"
	},
	"weightkg": 0.3,
	"eggGroups": [
		"Amorphous"
	],
	"changesFrom": "Rotom"
},
rotomfrost: {
	"num": -479,
	"name": "Rotom-Frost",
	"baseSpecies": "Rotom",
	"forme": "Frost",
	"types": [
		"Electric",
		"Ice"
	],
	"gender": "N",
	"baseStats": {
		"hp": 50,
		"atk": 65,
		"def": 107,
		"spa": 106,
		"spd": 106,
		"spe": 86
	},
	"abilities": {
		"0": "Levitate"
	},
	"weightkg": 0.3,
	"eggGroups": [
		"Amorphous"
	],
	"changesFrom": "Rotom"
},
rotomfan: {
	"num": -479,
	"name": "Rotom-Fan",
	"baseSpecies": "Rotom",
	"forme": "Fan",
	"types": [
		"Electric",
		"Flying"
	],
	"gender": "N",
	"baseStats": {
		"hp": 50,
		"atk": 65,
		"def": 107,
		"spa": 106,
		"spd": 106,
		"spe": 86
	},
	"abilities": {
		"0": "Levitate"
	},
	"weightkg": 0.3,
	"eggGroups": [
		"Amorphous"
	],
	"changesFrom": "Rotom"
},
rotommow: {
	"num": -479,
	"name": "Rotom-Mow",
	"baseSpecies": "Rotom",
	"forme": "Mow",
	"types": [
		"Electric",
		"Grass"
	],
	"gender": "N",
	"baseStats": {
		"hp": 50,
		"atk": 65,
		"def": 107,
		"spa": 106,
		"spd": 106,
		"spe": 86
	},
	"abilities": {
		"0": "Levitate"
	},
	"weightkg": 0.3,
	"eggGroups": [
		"Amorphous"
	],
	"changesFrom": "Rotom"
},
uxie: {
	"num": -480,
	"name": "Uxie",
	"types": [
		"Psychic"
	],
	"gender": "N",
	"baseStats": {
		"hp": 75,
		"atk": 75,
		"def": 130,
		"spa": 102,
		"spd": 102,
		"spe": 95
	},
	"abilities": {
		"0": "Levitate"
	},
	"weightkg": 0.3,
	"tags": [
		"Sub-Legendary"
	],
	"eggGroups": [
		"Undiscovered"
	]
},
mesprit: {
	"num": -481,
	"name": "Mesprit",
	"types": [
		"Psychic"
	],
	"gender": "N",
	"baseStats": {
		"hp": 80,
		"atk": 105,
		"def": 105,
		"spa": 105,
		"spd": 105,
		"spe": 80
	},
	"abilities": {
		"0": "Levitate"
	},
	"weightkg": 0.3,
	"tags": [
		"Sub-Legendary"
	],
	"eggGroups": [
		"Undiscovered"
	]
},
azelf: {
	"num": -482,
	"name": "Azelf",
	"types": [
		"Psychic"
	],
	"gender": "N",
	"baseStats": {
		"hp": 75,
		"atk": 125,
		"def": 70,
		"spa": 97,
		"spd": 97,
		"spe": 115
	},
	"abilities": {
		"0": "Levitate"
	},
	"weightkg": 0.3,
	"tags": [
		"Sub-Legendary"
	],
	"eggGroups": [
		"Undiscovered"
	]
},
dialga: {
	"num": -483,
	"name": "Dialga",
	"types": [
		"Rock",
		"Dragon"
	],
	"gender": "N",
	"baseStats": {
		"hp": 100,
		"atk": 120,
		"def": 120,
		"spa": 125,
		"spd": 125,
		"spe": 90
	},
	"abilities": {
		"0": "Pressure",
		"H": "Telepathy"
	},
	"weightkg": 683,
	"tags": [
		"Restricted Legendary"
	],
	"eggGroups": [
		"Undiscovered"
	],
	"otherFormes": [
		"Dialga-Origin"
	],
	"formeOrder": [
		"Dialga",
		"Dialga-Origin"
	]
},
dialgaorigin: {
	"num": -483,
	"name": "Dialga-Origin",
	"baseSpecies": "Dialga",
	"forme": "Origin",
	"types": [
		"Rock",
		"Dragon"
	],
	"gender": "N",
	"baseStats": {
		"hp": 100,
		"atk": 100,
		"def": 120,
		"spa": 135,
		"spd": 135,
		"spe": 90
	},
	"abilities": {
		"0": "Pressure",
		"H": "Telepathy"
	},
	"weightkg": 850,
	"eggGroups": [
		"Undiscovered"
	],
	"gen": 8
},
palkia: {
	"num": -484,
	"name": "Palkia",
	"types": [
		"Water",
		"Dragon"
	],
	"gender": "N",
	"baseStats": {
		"hp": 90,
		"atk": 120,
		"def": 100,
		"spa": 135,
		"spd": 135,
		"spe": 100
	},
	"abilities": {
		"0": "Pressure",
		"H": "Telepathy"
	},
	"weightkg": 336,
	"tags": [
		"Restricted Legendary"
	],
	"eggGroups": [
		"Undiscovered"
	],
	"otherFormes": [
		"Palkia-Origin"
	],
	"formeOrder": [
		"Palkia",
		"Palkia-Origin"
	]
},
palkiaorigin: {
	"num": -484,
	"name": "Palkia-Origin",
	"baseSpecies": "Palkia",
	"forme": "Origin",
	"types": [
		"Water",
		"Dragon"
	],
	"gender": "N",
	"baseStats": {
		"hp": 90,
		"atk": 100,
		"def": 100,
		"spa": 135,
		"spd": 135,
		"spe": 120
	},
	"abilities": {
		"0": "Pressure",
		"H": "Telepathy"
	},
	"weightkg": 660,
	"eggGroups": [
		"Undiscovered"
	],
	"gen": 8
},
heatran: {
	"num": -485,
	"name": "Heatran",
	"types": [
		"Fire",
		"Rock"
	],
	"baseStats": {
		"hp": 91,
		"atk": 90,
		"def": 106,
		"spa": 118,
		"spd": 118,
		"spe": 77
	},
	"abilities": {
		"0": "Flash Fire",
		"H": "Flame Body"
	},
	"weightkg": 430,
	"tags": [
		"Sub-Legendary"
	],
	"eggGroups": [
		"Undiscovered"
	]
},
regigigas: {
	"num": -486,
	"name": "Regigigas",
	"types": [
		"Normal"
	],
	"gender": "N",
	"baseStats": {
		"hp": 110,
		"atk": 160,
		"def": 110,
		"spa": 95,
		"spd": 95,
		"spe": 100
	},
	"abilities": {
		"0": "Slow Start"
	},
	"weightkg": 420,
	"tags": [
		"Sub-Legendary"
	],
	"eggGroups": [
		"Undiscovered"
	]
},
giratina: {
	"num": -487,
	"name": "Giratina",
	"baseForme": "Altered",
	"types": [
		"Ghost",
		"Dragon"
	],
	"gender": "N",
	"baseStats": {
		"hp": 150,
		"atk": 100,
		"def": 120,
		"spa": 110,
		"spd": 110,
		"spe": 90
	},
	"abilities": {
		"0": "Pressure",
		"H": "Telepathy"
	},
	"weightkg": 750,
	"eggGroups": [
		"Undiscovered"
	],
	"tags": [
		"Restricted Legendary"
	],
	"otherFormes": [
		"Giratina-Origin"
	],
	"formeOrder": [
		"Giratina",
		"Giratina-Origin"
	]
},
giratinaorigin: {
	"num": -487,
	"name": "Giratina-Origin",
	"baseSpecies": "Giratina",
	"forme": "Origin",
	"types": [
		"Ghost",
		"Dragon"
	],
	"gender": "N",
	"baseStats": {
		"hp": 150,
		"atk": 120,
		"def": 100,
		"spa": 110,
		"spd": 110,
		"spe": 90
	},
	"abilities": {
		"0": "Levitate"
	},
	"weightkg": 650,
	"eggGroups": [
		"Undiscovered"
	],
	// "requiredItem": "Griseous Orb",
	"changesFrom": "Giratina"
},
cresselia: {
	"num": -488,
	"name": "Cresselia",
	"types": [
		"Psychic"
	],
	"gender": "F",
	"baseStats": {
		"hp": 120,
		"atk": 70,
		"def": 120,
		"spa": 102,
		"spd": 102,
		"spe": 85
	},
	"abilities": {
		"0": "Levitate"
	},
	"weightkg": 85.6,
	"tags": [
		"Sub-Legendary"
	],
	"eggGroups": [
		"Undiscovered"
	]
},
phione: {
	"num": -489,
	"name": "Phione",
	"types": [
		"Water"
	],
	"gender": "N",
	"baseStats": {
		"hp": 80,
		"atk": 80,
		"def": 80,
		"spa": 80,
		"spd": 80,
		"spe": 80
	},
	"abilities": {
		"0": "Hydration"
	},
	"weightkg": 3.1,
	"tags": [
		"Mythical"
	],
	"eggGroups": [
		"Water 1",
		"Fairy"
	]
},
manaphy: {
	"num": -490,
	"name": "Manaphy",
	"types": [
		"Water"
	],
	"gender": "N",
	"baseStats": {
		"hp": 100,
		"atk": 100,
		"def": 100,
		"spa": 100,
		"spd": 100,
		"spe": 100
	},
	"abilities": {
		"0": "Hydration"
	},
	"weightkg": 1.4,
	"tags": [
		"Mythical"
	],
	"eggGroups": [
		"Water 1",
		"Fairy"
	]
},
darkrai: {
	"num": -491,
	"name": "Darkrai",
	"types": [
		"Normal"
	],
	"gender": "N",
	"baseStats": {
		"hp": 70,
		"atk": 90,
		"def": 90,
		"spa": 112,
		"spd": 112,
		"spe": 125
	},
	"abilities": {
		"0": "Bad Dreams"
	},
	"weightkg": 50.5,
	"tags": [
		"Mythical"
	],
	"eggGroups": [
		"Undiscovered"
	]
},
shaymin: {
	"num": -492,
	"name": "Shaymin",
	"baseForme": "Land",
	"types": [
		"Grass"
	],
	"gender": "N",
	"baseStats": {
		"hp": 100,
		"atk": 100,
		"def": 100,
		"spa": 100,
		"spd": 100,
		"spe": 100
	},
	"abilities": {
		"0": "Natural Cure"
	},
	"weightkg": 2.1,
	"eggGroups": [
		"Undiscovered"
	],
	"tags": [
		"Mythical"
	],
	"otherFormes": [
		"Shaymin-Sky"
	],
	"formeOrder": [
		"Shaymin",
		"Shaymin-Sky"
	]
},
shayminsky: {
	"num": -492,
	"name": "Shaymin-Sky",
	"baseSpecies": "Shaymin",
	"forme": "Sky",
	"types": [
		"Grass",
		"Flying"
	],
	"gender": "N",
	"baseStats": {
		"hp": 100,
		"atk": 103,
		"def": 75,
		"spa": 97,
		"spd": 97,
		"spe": 127
	},
	"abilities": {
		"0": "Serene Grace"
	},
	"weightkg": 5.2,
	"eggGroups": [
		"Undiscovered"
	],
	"changesFrom": "Shaymin"
},
arceus: {
	"num": -493,
	"name": "Arceus",
	"baseForme": "Normal",
	"types": [
		"Normal"
	],
	"gender": "N",
	"baseStats": {
		"hp": 120,
		"atk": 120,
		"def": 120,
		"spa": 120,
		"spd": 120,
		"spe": 120
	},
	"abilities": {
		"0": "Multitype"
	},
	"weightkg": 320,
	"tags": [
		"Mythical"
	],
	"eggGroups": [
		"Undiscovered"
	],
	"otherFormes": [
		"Arceus-Bug",
		"Arceus-Dark",
		"Arceus-Dragon",
		"Arceus-Electric",
		"Arceus-Fairy",
		"Arceus-Fighting",
		"Arceus-Fire",
		"Arceus-Flying",
		"Arceus-Ghost",
		"Arceus-Grass",
		"Arceus-Ground",
		"Arceus-Ice",
		"Arceus-Poison",
		"Arceus-Psychic",
		"Arceus-Rock",
		"Arceus-Steel",
		"Arceus-Water"
	],
	"formeOrder": [
		"Arceus",
		"Arceus-Fighting",
		"Arceus-Flying",
		"Arceus-Poison",
		"Arceus-Ground",
		"Arceus-Rock",
		"Arceus-Bug",
		"Arceus-Ghost",
		"Arceus-Steel",
		"Arceus-Fire",
		"Arceus-Water",
		"Arceus-Grass",
		"Arceus-Electric",
		"Arceus-Psychic",
		"Arceus-Ice",
		"Arceus-Dragon",
		"Arceus-Dark",
		"Arceus-Fairy"
	]
},
arceusbug: {
	"num": -493,
	"name": "Arceus-Bug",
	"baseSpecies": "Arceus",
	"forme": "Bug",
	"types": [
		"Bug"
	],
	"gender": "N",
	"baseStats": {
		"hp": 120,
		"atk": 120,
		"def": 120,
		"spa": 120,
		"spd": 120,
		"spe": 120
	},
	"abilities": {
		"0": "Multitype"
	},
	"weightkg": 320,
	"eggGroups": [
		"Undiscovered"
	],
	// "requiredItems": [
//		"Insect Plate",
	//	"Buginium Z"
//	],
	"changesFrom": "Arceus"
},
arceusdark: {
	"num": -493,
	"name": "Arceus-Dark",
	"baseSpecies": "Arceus",
	"forme": "Dark",
	"types": [
		"Normal"
	],
	"gender": "N",
	"baseStats": {
		"hp": 120,
		"atk": 120,
		"def": 120,
		"spa": 120,
		"spd": 120,
		"spe": 120
	},
	"abilities": {
		"0": "Multitype"
	},
	"weightkg": 320,
	"eggGroups": [
		"Undiscovered"
	],
	// "requiredItems": [
//		"Dread Plate",
//		"Darkinium Z"
//	],
	"changesFrom": "Arceus"
},
arceusdragon: {
	"num": -493,
	"name": "Arceus-Dragon",
	"baseSpecies": "Arceus",
	"forme": "Dragon",
	"types": [
		"Dragon"
	],
	"gender": "N",
	"baseStats": {
		"hp": 120,
		"atk": 120,
		"def": 120,
		"spa": 120,
		"spd": 120,
		"spe": 120
	},
	"abilities": {
		"0": "Multitype"
	},
	"weightkg": 320,
	"eggGroups": [
		"Undiscovered"
	],
	// "requiredItems": [
//		"Draco Plate",
//		"Dragonium Z"
//	],
	"changesFrom": "Arceus"
},
arceuselectric: {
	"num": -493,
	"name": "Arceus-Electric",
	"baseSpecies": "Arceus",
	"forme": "Electric",
	"types": [
		"Electric"
	],
	"gender": "N",
	"baseStats": {
		"hp": 120,
		"atk": 120,
		"def": 120,
		"spa": 120,
		"spd": 120,
		"spe": 120
	},
	"abilities": {
		"0": "Multitype"
	},
	"weightkg": 320,
	"eggGroups": [
		"Undiscovered"
	],
	// "requiredItems": [
//		"Zap Plate",
//		"Electrium Z"
//	],
	"changesFrom": "Arceus"
},
arceusfairy: {
	"num": -493,
	"name": "Arceus-Fairy",
	"baseSpecies": "Arceus",
	"forme": "Fairy",
	"types": [
		"Normal"
	],
	"gender": "N",
	"baseStats": {
		"hp": 120,
		"atk": 120,
		"def": 120,
		"spa": 120,
		"spd": 120,
		"spe": 120
	},
	"abilities": {
		"0": "Multitype"
	},
	"weightkg": 320,
	"eggGroups": [
		"Undiscovered"
	],
	// "requiredItems": [
//		"Pixie Plate",
//		"Fairium Z"
//	],
	"changesFrom": "Arceus",
	"gen": 6
},
arceusfighting: {
	"num": -493,
	"name": "Arceus-Fighting",
	"baseSpecies": "Arceus",
	"forme": "Fighting",
	"types": [
		"Fighting"
	],
	"gender": "N",
	"baseStats": {
		"hp": 120,
		"atk": 120,
		"def": 120,
		"spa": 120,
		"spd": 120,
		"spe": 120
	},
	"abilities": {
		"0": "Multitype"
	},
	"weightkg": 320,
	"eggGroups": [
		"Undiscovered"
	],
	// "requiredItems": [
//		"Fist Plate",
//		"Fightinium Z"
//	],
	"changesFrom": "Arceus"
},
arceusfire: {
	"num": -493,
	"name": "Arceus-Fire",
	"baseSpecies": "Arceus",
	"forme": "Fire",
	"types": [
		"Fire"
	],
	"gender": "N",
	"baseStats": {
		"hp": 120,
		"atk": 120,
		"def": 120,
		"spa": 120,
		"spd": 120,
		"spe": 120
	},
	"abilities": {
		"0": "Multitype"
	},
	"weightkg": 320,
	"eggGroups": [
		"Undiscovered"
	],
	// "requiredItems": [
	//	"Flame Plate",
//		"Firium Z"
//	],
	"changesFrom": "Arceus"
},
arceusflying: {
	"num": -493,
	"name": "Arceus-Flying",
	"baseSpecies": "Arceus",
	"forme": "Flying",
	"types": [
		"Flying"
	],
	"gender": "N",
	"baseStats": {
		"hp": 120,
		"atk": 120,
		"def": 120,
		"spa": 120,
		"spd": 120,
		"spe": 120
	},
	"abilities": {
		"0": "Multitype"
	},
	"weightkg": 320,
	"eggGroups": [
		"Undiscovered"
	],
	// "requiredItems": [
	//	"Sky Plate",
//		"Flyinium Z"
//	],
	"changesFrom": "Arceus"
},
arceusghost: {
	"num": -493,
	"name": "Arceus-Ghost",
	"baseSpecies": "Arceus",
	"forme": "Ghost",
	"types": [
		"Ghost"
	],
	"gender": "N",
	"baseStats": {
		"hp": 120,
		"atk": 120,
		"def": 120,
		"spa": 120,
		"spd": 120,
		"spe": 120
	},
	"abilities": {
		"0": "Multitype"
	},
	"weightkg": 320,
	"eggGroups": [
		"Undiscovered"
	],
	// "requiredItems": [
	//	"Spooky Plate",
	//	"Ghostium Z"
//	],
	"changesFrom": "Arceus"
},
arceusgrass: {
	"num": -493,
	"name": "Arceus-Grass",
	"baseSpecies": "Arceus",
	"forme": "Grass",
	"types": [
		"Grass"
	],
	"gender": "N",
	"baseStats": {
		"hp": 120,
		"atk": 120,
		"def": 120,
		"spa": 120,
		"spd": 120,
		"spe": 120
	},
	"abilities": {
		"0": "Multitype"
	},
	"weightkg": 320,
	"eggGroups": [
		"Undiscovered"
	],
	// "requiredItems": [
	//	"Meadow Plate",
	//	"Grassium Z"
//	],
	"changesFrom": "Arceus"
},
arceusground: {
	"num": -493,
	"name": "Arceus-Ground",
	"baseSpecies": "Arceus",
	"forme": "Ground",
	"types": [
		"Ground"
	],
	"gender": "N",
	"baseStats": {
		"hp": 120,
		"atk": 120,
		"def": 120,
		"spa": 120,
		"spd": 120,
		"spe": 120
	},
	"abilities": {
		"0": "Multitype"
	},
	"weightkg": 320,
	"eggGroups": [
		"Undiscovered"
	],
	// "requiredItems": [
//		"Earth Plate",
//		"Groundium Z"
//	],
	"changesFrom": "Arceus"
},
arceusice: {
	"num": -493,
	"name": "Arceus-Ice",
	"baseSpecies": "Arceus",
	"forme": "Ice",
	"types": [
		"Ice"
	],
	"gender": "N",
	"baseStats": {
		"hp": 120,
		"atk": 120,
		"def": 120,
		"spa": 120,
		"spd": 120,
		"spe": 120
	},
	"abilities": {
		"0": "Multitype"
	},
	"weightkg": 320,
	"eggGroups": [
		"Undiscovered"
	],
	// "requiredItems": [
//		"Icicle Plate",
//		"Icium Z"
//	],
	"changesFrom": "Arceus"
},
arceuspoison: {
	"num": -493,
	"name": "Arceus-Poison",
	"baseSpecies": "Arceus",
	"forme": "Poison",
	"types": [
		"Poison"
	],
	"gender": "N",
	"baseStats": {
		"hp": 120,
		"atk": 120,
		"def": 120,
		"spa": 120,
		"spd": 120,
		"spe": 120
	},
	"abilities": {
		"0": "Multitype"
	},
	"weightkg": 320,
	"eggGroups": [
		"Undiscovered"
	],
	// "requiredItems": [
//		"Toxic Plate",
//		"Poisonium Z"
//	],
	"changesFrom": "Arceus"
},
arceuspsychic: {
	"num": -493,
	"name": "Arceus-Psychic",
	"baseSpecies": "Arceus",
	"forme": "Psychic",
	"types": [
		"Psychic"
	],
	"gender": "N",
	"baseStats": {
		"hp": 120,
		"atk": 120,
		"def": 120,
		"spa": 120,
		"spd": 120,
		"spe": 120
	},
	"abilities": {
		"0": "Multitype"
	},
	"weightkg": 320,
	"eggGroups": [
		"Undiscovered"
	],
	// "requiredItems": [
//		"Mind Plate",
//		"Psychium Z"
//	],
	"changesFrom": "Arceus"
},
arceusrock: {
	"num": -493,
	"name": "Arceus-Rock",
	"baseSpecies": "Arceus",
	"forme": "Rock",
	"types": [
		"Rock"
	],
	"gender": "N",
	"baseStats": {
		"hp": 120,
		"atk": 120,
		"def": 120,
		"spa": 120,
		"spd": 120,
		"spe": 120
	},
	"abilities": {
		"0": "Multitype"
	},
	"weightkg": 320,
	"eggGroups": [
		"Undiscovered"
	],
	// "requiredItems": [
//		"Stone Plate",
//		"Rockium Z"
//	],
	"changesFrom": "Arceus"
},
arceussteel: {
	"num": -493,
	"name": "Arceus-Steel",
	"baseSpecies": "Arceus",
	"forme": "Steel",
	"types": [
		"Rock"
	],
	"gender": "N",
	"baseStats": {
		"hp": 120,
		"atk": 120,
		"def": 120,
		"spa": 120,
		"spd": 120,
		"spe": 120
	},
	"abilities": {
		"0": "Multitype"
	},
	"weightkg": 320,
	"eggGroups": [
		"Undiscovered"
	],
	// "requiredItems": [
//		"Iron Plate",
//		"Steelium Z"
//	],
	"changesFrom": "Arceus"
},
arceuswater: {
	"num": -493,
	"name": "Arceus-Water",
	"baseSpecies": "Arceus",
	"forme": "Water",
	"types": [
		"Water"
	],
	"gender": "N",
	"baseStats": {
		"hp": 120,
		"atk": 120,
		"def": 120,
		"spa": 120,
		"spd": 120,
		"spe": 120
	},
	"abilities": {
		"0": "Multitype"
	},
	"weightkg": 320,
	"eggGroups": [
		"Undiscovered"
	],
	// "requiredItems": [
//		"Splash Plate",
//		"Waterium Z"
//	],
	"changesFrom": "Arceus"
},
victini: {
	"num": -494,
	"name": "Victini",
	"types": [
		"Psychic",
		"Fire"
	],
	"gender": "N",
	"baseStats": {
		"hp": 100,
		"atk": 100,
		"def": 100,
		"spa": 100,
		"spd": 100,
		"spe": 100
	},
	"abilities": {
		"0": "Victory Star"
	},
	"weightkg": 4,
	"tags": [
		"Mythical"
	],
	"eggGroups": [
		"Undiscovered"
	]
},
snivy: {
	"num": -495,
	"name": "Snivy",
	"types": [
		"Grass"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 45,
		"atk": 45,
		"def": 55,
		"spa": 50,
		"spd": 50,
		"spe": 63
	},
	"abilities": {
		"0": "Overgrow",
		"H": "Contrary"
	},
	"weightkg": 8.1,
	"evos": [
		"Servine"
	],
	"eggGroups": [
		"Field",
		"Grass"
	]
},
servine: {
	"num": -496,
	"name": "Servine",
	"types": [
		"Grass"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 60,
		"atk": 60,
		"def": 75,
		"spa": 67,
		"spd": 67,
		"spe": 83
	},
	"abilities": {
		"0": "Overgrow",
		"H": "Contrary"
	},
	"weightkg": 16,
	"prevo": "Snivy",
	"evoLevel": 17,
	"evos": [
		"Serperior"
	],
	"eggGroups": [
		"Field",
		"Grass"
	]
},
serperior: {
	"num": -497,
	"name": "Serperior",
	"types": [
		"Grass"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 75,
		"atk": 75,
		"def": 95,
		"spa": 85,
		"spd": 85,
		"spe": 113
	},
	"abilities": {
		"0": "Overgrow",
		"H": "Contrary"
	},
	"weightkg": 63,
	"prevo": "Servine",
	"evoLevel": 36,
	"eggGroups": [
		"Field",
		"Grass"
	]
},
tepig: {
	"num": -498,
	"name": "Tepig",
	"types": [
		"Fire"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 65,
		"atk": 63,
		"def": 45,
		"spa": 45,
		"spd": 45,
		"spe": 45
	},
	"abilities": {
		"0": "Blaze",
		"H": "Thick Fat"
	},
	"weightkg": 9.9,
	"evos": [
		"Pignite"
	],
	"eggGroups": [
		"Field"
	]
},
pignite: {
	"num": -499,
	"name": "Pignite",
	"types": [
		"Fire",
		"Fighting"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 90,
		"atk": 93,
		"def": 55,
		"spa": 62,
		"spd": 62,
		"spe": 55
	},
	"abilities": {
		"0": "Blaze",
		"H": "Thick Fat"
	},
	"weightkg": 55.5,
	"prevo": "Tepig",
	"evoLevel": 17,
	"evos": [
		"Emboar"
	],
	"eggGroups": [
		"Field"
	]
},
emboar: {
	"num": -500,
	"name": "Emboar",
	"types": [
		"Fire",
		"Fighting"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 110,
		"atk": 123,
		"def": 65,
		"spa": 82,
		"spd": 82,
		"spe": 65
	},
	"abilities": {
		"0": "Blaze",
		"H": "Reckless"
	},
	"weightkg": 150,
	"prevo": "Pignite",
	"evoLevel": 36,
	"eggGroups": [
		"Field"
	]
},
oshawott: {
	"num": -501,
	"name": "Oshawott",
	"types": [
		"Water"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 55,
		"atk": 55,
		"def": 45,
		"spa": 54,
		"spd": 54,
		"spe": 45
	},
	"abilities": {
		"0": "Torrent",
		"H": "Shell Armor"
	},
	"weightkg": 5.9,
	"evos": [
		"Dewott"
	],
	"eggGroups": [
		"Field"
	]
},
dewott: {
	"num": -502,
	"name": "Dewott",
	"types": [
		"Water"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 75,
		"atk": 75,
		"def": 60,
		"spa": 71,
		"spd": 71,
		"spe": 60
	},
	"abilities": {
		"0": "Torrent",
		"H": "Shell Armor"
	},
	"weightkg": 24.5,
	"prevo": "Oshawott",
	"evoLevel": 17,
	"evos": [
		"Samurott",
		"Samurott-Hisui"
	],
	"eggGroups": [
		"Field"
	]
},
samurott: {
	"num": -503,
	"name": "Samurott",
	"types": [
		"Water"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 95,
		"atk": 100,
		"def": 85,
		"spa": 89,
		"spd": 89,
		"spe": 70
	},
	"abilities": {
		"0": "Torrent",
		"H": "Shell Armor"
	},
	"weightkg": 94.6,
	"prevo": "Dewott",
	"evoLevel": 36,
	"eggGroups": [
		"Field"
	],
	"otherFormes": [
		"Samurott-Hisui"
	],
	"formeOrder": [
		"Samurott",
		"Samurott-Hisui"
	]
},
samurotthisui: {
	"num": -503,
	"name": "Samurott-Hisui",
	"baseSpecies": "Samurott",
	"forme": "Hisui",
	"types": [
		"Water",
		"Normal"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 90,
		"atk": 108,
		"def": 80,
		"spa": 82,
		"spd": 82,
		"spe": 85
	},
	"abilities": {
		"0": "Torrent",
		"H": "Shell Armor"
	},
	"weightkg": 58.2,
	"prevo": "Dewott",
	"evoLevel": 36,
	"eggGroups": [
		"Field"
	]
},
patrat: {
	"num": -504,
	"name": "Patrat",
	"types": [
		"Normal"
	],
	"baseStats": {
		"hp": 45,
		"atk": 55,
		"def": 39,
		"spa": 37,
		"spd": 37,
		"spe": 42
	},
	"abilities": {
		"0": "Run Away",
		"1": "Keen Eye",
		"H": "Analytic"
	},
	"weightkg": 11.6,
	"evos": [
		"Watchog"
	],
	"eggGroups": [
		"Field"
	]
},
watchog: {
	"num": -505,
	"name": "Watchog",
	"types": [
		"Normal"
	],
	"baseStats": {
		"hp": 60,
		"atk": 85,
		"def": 69,
		"spa": 64,
		"spd": 64,
		"spe": 77
	},
	"abilities": {
		"0": "Illuminate",
		"1": "Keen Eye",
		"H": "Analytic"
	},
	"weightkg": 27,
	"prevo": "Patrat",
	"evoLevel": 20,
	"eggGroups": [
		"Field"
	]
},
lillipup: {
	"num": -506,
	"name": "Lillipup",
	"types": [
		"Normal"
	],
	"baseStats": {
		"hp": 45,
		"atk": 60,
		"def": 45,
		"spa": 35,
		"spd": 35,
		"spe": 55
	},
	"abilities": {
		"0": "Vital Spirit",
		"1": "Pickup",
		"H": "Run Away"
	},
	"weightkg": 4.1,
	"evos": [
		"Herdier"
	],
	"eggGroups": [
		"Field"
	]
},
herdier: {
	"num": -507,
	"name": "Herdier",
	"types": [
		"Normal"
	],
	"baseStats": {
		"hp": 65,
		"atk": 80,
		"def": 65,
		"spa": 50,
		"spd": 50,
		"spe": 60
	},
	"abilities": {
		"0": "Intimidate",
		"1": "Sand Rush",
		"H": "Scrappy"
	},
	"weightkg": 14.7,
	"prevo": "Lillipup",
	"evoLevel": 16,
	"evos": [
		"Stoutland"
	],
	"eggGroups": [
		"Field"
	]
},
stoutland: {
	"num": -508,
	"name": "Stoutland",
	"types": [
		"Normal"
	],
	"baseStats": {
		"hp": 85,
		"atk": 110,
		"def": 90,
		"spa": 67,
		"spd": 67,
		"spe": 80
	},
	"abilities": {
		"0": "Intimidate",
		"1": "Sand Rush",
		"H": "Scrappy"
	},
	"weightkg": 61,
	"prevo": "Herdier",
	"evoLevel": 32,
	"eggGroups": [
		"Field"
	]
},
purrloin: {
	"num": -509,
	"name": "Purrloin",
	"types": [
		"Normal"
	],
	"baseStats": {
		"hp": 41,
		"atk": 50,
		"def": 37,
		"spa": 43,
		"spd": 43,
		"spe": 66
	},
	"abilities": {
		"0": "Limber",
		"1": "Unburden",
		"H": "Prankster"
	},
	"weightkg": 10.1,
	"evos": [
		"Liepard"
	],
	"eggGroups": [
		"Field"
	]
},
liepard: {
	"num": -510,
	"name": "Liepard",
	"types": [
		"Normal"
	],
	"baseStats": {
		"hp": 64,
		"atk": 88,
		"def": 50,
		"spa": 69,
		"spd": 69,
		"spe": 106
	},
	"abilities": {
		"0": "Limber",
		"1": "Unburden",
		"H": "Prankster"
	},
	"weightkg": 37.5,
	"prevo": "Purrloin",
	"evoLevel": 20,
	"eggGroups": [
		"Field"
	]
},
pansage: {
	"num": -511,
	"name": "Pansage",
	"types": [
		"Grass"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 50,
		"atk": 53,
		"def": 48,
		"spa": 50,
		"spd": 50,
		"spe": 64
	},
	"abilities": {
		"0": "Gluttony",
		"H": "Overgrow"
	},
	"weightkg": 10.5,
	"evos": [
		"Simisage"
	],
	"eggGroups": [
		"Field"
	]
},
simisage: {
	"num": -512,
	"name": "Simisage",
	"types": [
		"Grass"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 75,
		"atk": 98,
		"def": 63,
		"spa": 80,
		"spd": 80,
		"spe": 101
	},
	"abilities": {
		"0": "Gluttony",
		"H": "Overgrow"
	},
	"weightkg": 30.5,
	"prevo": "Pansage",
	"evoType": "useItem",
	"evoItem": "Leaf Stone",
	"eggGroups": [
		"Field"
	]
},
pansear: {
	"num": -513,
	"name": "Pansear",
	"types": [
		"Fire"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 50,
		"atk": 53,
		"def": 48,
		"spa": 50,
		"spd": 50,
		"spe": 64
	},
	"abilities": {
		"0": "Gluttony",
		"H": "Blaze"
	},
	"weightkg": 11,
	"evos": [
		"Simisear"
	],
	"eggGroups": [
		"Field"
	]
},
simisear: {
	"num": -514,
	"name": "Simisear",
	"types": [
		"Fire"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 75,
		"atk": 98,
		"def": 63,
		"spa": 80,
		"spd": 80,
		"spe": 101
	},
	"abilities": {
		"0": "Gluttony",
		"H": "Blaze"
	},
	"weightkg": 28,
	"prevo": "Pansear",
	"evoType": "useItem",
	"evoItem": "Fire Stone",
	"eggGroups": [
		"Field"
	]
},
panpour: {
	"num": -515,
	"name": "Panpour",
	"types": [
		"Water"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 50,
		"atk": 53,
		"def": 48,
		"spa": 50,
		"spd": 50,
		"spe": 64
	},
	"abilities": {
		"0": "Gluttony",
		"H": "Torrent"
	},
	"weightkg": 13.5,
	"evos": [
		"Simipour"
	],
	"eggGroups": [
		"Field"
	]
},
simipour: {
	"num": -516,
	"name": "Simipour",
	"types": [
		"Water"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 75,
		"atk": 98,
		"def": 63,
		"spa": 80,
		"spd": 80,
		"spe": 101
	},
	"abilities": {
		"0": "Gluttony",
		"H": "Torrent"
	},
	"weightkg": 29,
	"prevo": "Panpour",
	"evoType": "useItem",
	"evoItem": "Water Stone",
	"eggGroups": [
		"Field"
	]
},
munna: {
	"num": -517,
	"name": "Munna",
	"types": [
		"Psychic"
	],
	"baseStats": {
		"hp": 76,
		"atk": 25,
		"def": 45,
		"spa": 61,
		"spd": 61,
		"spe": 24
	},
	"abilities": {
		"0": "Forewarn",
		"1": "Synchronize",
		"H": "Telepathy"
	},
	"weightkg": 23.3,
	"evos": [
		"Musharna"
	],
	"eggGroups": [
		"Field"
	]
},
musharna: {
	"num": -518,
	"name": "Musharna",
	"types": [
		"Psychic"
	],
	"baseStats": {
		"hp": 116,
		"atk": 55,
		"def": 85,
		"spa": 101,
		"spd": 101,
		"spe": 29
	},
	"abilities": {
		"0": "Forewarn",
		"1": "Synchronize",
		"H": "Telepathy"
	},
	"weightkg": 60.5,
	"prevo": "Munna",
	"evoType": "useItem",
	"evoItem": "Moon Stone",
	"eggGroups": [
		"Field"
	]
},
pidove: {
	"num": -519,
	"name": "Pidove",
	"types": [
		"Normal",
		"Flying"
	],
	"baseStats": {
		"hp": 50,
		"atk": 55,
		"def": 50,
		"spa": 33,
		"spd": 33,
		"spe": 43
	},
	"abilities": {
		"0": "Big Pecks",
		"1": "Super Luck",
		"H": "Rivalry"
	},
	"weightkg": 2.1,
	"evos": [
		"Tranquill"
	],
	"eggGroups": [
		"Flying"
	]
},
tranquill: {
	"num": -520,
	"name": "Tranquill",
	"types": [
		"Normal",
		"Flying"
	],
	"baseStats": {
		"hp": 62,
		"atk": 77,
		"def": 62,
		"spa": 46,
		"spd": 46,
		"spe": 65
	},
	"abilities": {
		"0": "Big Pecks",
		"1": "Super Luck",
		"H": "Rivalry"
	},
	"weightkg": 15,
	"prevo": "Pidove",
	"evoLevel": 21,
	"evos": [
		"Unfezant"
	],
	"eggGroups": [
		"Flying"
	]
},
unfezant: {
	"num": -521,
	"name": "Unfezant",
	"types": [
		"Normal",
		"Flying"
	],
	"baseStats": {
		"hp": 80,
		"atk": 115,
		"def": 80,
		"spa": 60,
		"spd": 60,
		"spe": 93
	},
	"abilities": {
		"0": "Big Pecks",
		"1": "Super Luck",
		"H": "Rivalry"
	},
	"weightkg": 29,
	"prevo": "Tranquill",
	"evoLevel": 32,
	"eggGroups": [
		"Flying"
	]
},
blitzle: {
	"num": -522,
	"name": "Blitzle",
	"types": [
		"Electric"
	],
	"baseStats": {
		"hp": 45,
		"atk": 60,
		"def": 32,
		"spa": 41,
		"spd": 41,
		"spe": 76
	},
	"abilities": {
		"0": "Lightning Rod",
		"1": "Motor Drive",
		"H": "Sap Sipper"
	},
	"weightkg": 29.8,
	"evos": [
		"Zebstrika"
	],
	"eggGroups": [
		"Field"
	]
},
zebstrika: {
	"num": -523,
	"name": "Zebstrika",
	"types": [
		"Electric"
	],
	"baseStats": {
		"hp": 75,
		"atk": 100,
		"def": 63,
		"spa": 71,
		"spd": 71,
		"spe": 116
	},
	"abilities": {
		"0": "Lightning Rod",
		"1": "Motor Drive",
		"H": "Sap Sipper"
	},
	"weightkg": 79.5,
	"prevo": "Blitzle",
	"evoLevel": 27,
	"eggGroups": [
		"Field"
	]
},
roggenrola: {
	"num": -524,
	"name": "Roggenrola",
	"types": [
		"Rock"
	],
	"baseStats": {
		"hp": 55,
		"atk": 75,
		"def": 85,
		"spa": 25,
		"spd": 25,
		"spe": 15
	},
	"abilities": {
		"0": "Sturdy",
		"1": "Weak Armor",
		"H": "Sand Force"
	},
	"weightkg": 18,
	"evos": [
		"Boldore"
	],
	"eggGroups": [
		"Mineral"
	]
},
boldore: {
	"num": -525,
	"name": "Boldore",
	"types": [
		"Rock"
	],
	"baseStats": {
		"hp": 70,
		"atk": 105,
		"def": 105,
		"spa": 45,
		"spd": 45,
		"spe": 20
	},
	"abilities": {
		"0": "Sturdy",
		"1": "Weak Armor",
		"H": "Sand Force"
	},
	"weightkg": 102,
	"prevo": "Roggenrola",
	"evoLevel": 25,
	"evos": [
		"Gigalith"
	],
	"eggGroups": [
		"Mineral"
	]
},
gigalith: {
	"num": -526,
	"name": "Gigalith",
	"types": [
		"Rock"
	],
	"baseStats": {
		"hp": 85,
		"atk": 135,
		"def": 130,
		"spa": 70,
		"spd": 70,
		"spe": 25
	},
	"abilities": {
		"0": "Sturdy",
		"1": "Sand Stream",
		"H": "Sand Force"
	},
	"weightkg": 260,
	"prevo": "Boldore",
	"evoType": "trade",
	"eggGroups": [
		"Mineral"
	]
},
woobat: {
	"num": -527,
	"name": "Woobat",
	"types": [
		"Psychic",
		"Flying"
	],
	"baseStats": {
		"hp": 65,
		"atk": 45,
		"def": 43,
		"spa": 49,
		"spd": 49,
		"spe": 72
	},
	"abilities": {
		"0": "Unaware",
		"1": "Klutz",
		"H": "Simple"
	},
	"weightkg": 2.1,
	"evos": [
		"Swoobat"
	],
	"eggGroups": [
		"Flying",
		"Field"
	]
},
swoobat: {
	"num": -528,
	"name": "Swoobat",
	"types": [
		"Psychic",
		"Flying"
	],
	"baseStats": {
		"hp": 67,
		"atk": 57,
		"def": 55,
		"spa": 66,
		"spd": 66,
		"spe": 114
	},
	"abilities": {
		"0": "Unaware",
		"1": "Klutz",
		"H": "Simple"
	},
	"weightkg": 10.5,
	"prevo": "Woobat",
	"evoType": "levelFriendship",
	"eggGroups": [
		"Flying",
		"Field"
	]
},
drilbur: {
	"num": -529,
	"name": "Drilbur",
	"types": [
		"Ground"
	],
	"baseStats": {
		"hp": 60,
		"atk": 85,
		"def": 40,
		"spa": 37,
		"spd": 37,
		"spe": 68
	},
	"abilities": {
		"0": "Sand Rush",
		"1": "Sand Force",
		"H": "Mold Breaker"
	},
	"weightkg": 8.5,
	"evos": [
		"Excadrill"
	],
	"eggGroups": [
		"Field"
	]
},
excadrill: {
	"num": -530,
	"name": "Excadrill",
	"types": [
		"Ground",
		"Rock"
	],
	"baseStats": {
		"hp": 110,
		"atk": 135,
		"def": 60,
		"spa": 57,
		"spd": 57,
		"spe": 88
	},
	"abilities": {
		"0": "Sand Rush",
		"1": "Sand Force",
		"H": "Mold Breaker"
	},
	"weightkg": 40.4,
	"prevo": "Drilbur",
	"evoLevel": 31,
	"eggGroups": [
		"Field"
	]
},
audino: {
	"num": -531,
	"name": "Audino",
	"types": [
		"Normal"
	],
	"baseStats": {
		"hp": 103,
		"atk": 60,
		"def": 86,
		"spa": 73,
		"spd": 73,
		"spe": 50
	},
	"abilities": {
		"0": "Healer",
		"1": "Regenerator",
		"H": "Klutz"
	},
	"weightkg": 31,
	"eggGroups": [
		"Fairy"
	],
	"otherFormes": [
		"Audino-Mega"
	],
	"formeOrder": [
		"Audino",
		"Audino-Mega"
	]
},
audinomega: {
	"num": -531,
	"name": "Audino-Mega",
	"baseSpecies": "Audino",
	"forme": "Mega",
	"types": [
		"Normal"
	],
	"baseStats": {
		"hp": 103,
		"atk": 60,
		"def": 106,
		"spa": 87,
		"spd": 87,
		"spe": 50
	},
	"abilities": {
		"0": "Healer"
	},
	"weightkg": 32,
	"eggGroups": [
		"Fairy"
	],
	// "requiredItem": "Audinite"
},
timburr: {
	"num": -532,
	"name": "Timburr",
	"types": [
		"Fighting"
	],
	"genderRatio": {
		"M": 0.75,
		"F": 0.25
	},
	"baseStats": {
		"hp": 75,
		"atk": 80,
		"def": 55,
		"spa": 30,
		"spd": 30,
		"spe": 35
	},
	"abilities": {
		"0": "Guts",
		"1": "Sheer Force",
		"H": "Iron Fist"
	},
	"weightkg": 12.5,
	"evos": [
		"Gurdurr"
	],
	"eggGroups": [
		"Human-Like"
	]
},
gurdurr: {
	"num": -533,
	"name": "Gurdurr",
	"types": [
		"Fighting"
	],
	"genderRatio": {
		"M": 0.75,
		"F": 0.25
	},
	"baseStats": {
		"hp": 85,
		"atk": 105,
		"def": 85,
		"spa": 45,
		"spd": 45,
		"spe": 40
	},
	"abilities": {
		"0": "Guts",
		"1": "Sheer Force",
		"H": "Iron Fist"
	},
	"weightkg": 40,
	"prevo": "Timburr",
	"evoLevel": 25,
	"evos": [
		"Conkeldurr"
	],
	"eggGroups": [
		"Human-Like"
	]
},
conkeldurr: {
	"num": -534,
	"name": "Conkeldurr",
	"types": [
		"Fighting"
	],
	"genderRatio": {
		"M": 0.75,
		"F": 0.25
	},
	"baseStats": {
		"hp": 105,
		"atk": 140,
		"def": 95,
		"spa": 60,
		"spd": 60,
		"spe": 45
	},
	"abilities": {
		"0": "Guts",
		"1": "Sheer Force",
		"H": "Iron Fist"
	},
	"weightkg": 87,
	"prevo": "Gurdurr",
	"evoType": "trade",
	"eggGroups": [
		"Human-Like"
	]
},
tympole: {
	"num": -535,
	"name": "Tympole",
	"types": [
		"Water"
	],
	"baseStats": {
		"hp": 50,
		"atk": 50,
		"def": 40,
		"spa": 45,
		"spd": 45,
		"spe": 64
	},
	"abilities": {
		"0": "Swift Swim",
		"1": "Hydration",
		"H": "Water Absorb"
	},
	"weightkg": 4.5,
	"evos": [
		"Palpitoad"
	],
	"eggGroups": [
		"Water 1"
	]
},
palpitoad: {
	"num": -536,
	"name": "Palpitoad",
	"types": [
		"Water",
		"Ground"
	],
	"baseStats": {
		"hp": 75,
		"atk": 65,
		"def": 55,
		"spa": 60,
		"spd": 60,
		"spe": 69
	},
	"abilities": {
		"0": "Swift Swim",
		"1": "Hydration",
		"H": "Water Absorb"
	},
	"weightkg": 17,
	"prevo": "Tympole",
	"evoLevel": 25,
	"evos": [
		"Seismitoad"
	],
	"eggGroups": [
		"Water 1"
	]
},
seismitoad: {
	"num": -537,
	"name": "Seismitoad",
	"types": [
		"Water",
		"Ground"
	],
	"baseStats": {
		"hp": 105,
		"atk": 95,
		"def": 75,
		"spa": 80,
		"spd": 80,
		"spe": 74
	},
	"abilities": {
		"0": "Swift Swim",
		"1": "Poison Touch",
		"H": "Water Absorb"
	},
	"weightkg": 62,
	"prevo": "Palpitoad",
	"evoLevel": 36,
	"eggGroups": [
		"Water 1"
	]
},
throh: {
	"num": -538,
	"name": "Throh",
	"types": [
		"Fighting"
	],
	"gender": "M",
	"baseStats": {
		"hp": 120,
		"atk": 100,
		"def": 85,
		"spa": 57,
		"spd": 57,
		"spe": 45
	},
	"abilities": {
		"0": "Guts",
		"1": "Inner Focus",
		"H": "Mold Breaker"
	},
	"weightkg": 55.5,
	"eggGroups": [
		"Human-Like"
	]
},
sawk: {
	"num": -539,
	"name": "Sawk",
	"types": [
		"Fighting"
	],
	"gender": "M",
	"baseStats": {
		"hp": 75,
		"atk": 125,
		"def": 75,
		"spa": 52,
		"spd": 52,
		"spe": 85
	},
	"abilities": {
		"0": "Sturdy",
		"1": "Inner Focus",
		"H": "Mold Breaker"
	},
	"weightkg": 51,
	"eggGroups": [
		"Human-Like"
	]
},
sewaddle: {
	"num": -540,
	"name": "Sewaddle",
	"types": [
		"Bug",
		"Grass"
	],
	"baseStats": {
		"hp": 45,
		"atk": 53,
		"def": 70,
		"spa": 50,
		"spd": 50,
		"spe": 42
	},
	"abilities": {
		"0": "Swarm",
		"1": "Chlorophyll",
		"H": "Overcoat"
	},
	"weightkg": 2.5,
	"evos": [
		"Swadloon"
	],
	"eggGroups": [
		"Bug"
	]
},
swadloon: {
	"num": -541,
	"name": "Swadloon",
	"types": [
		"Bug",
		"Grass"
	],
	"baseStats": {
		"hp": 55,
		"atk": 63,
		"def": 90,
		"spa": 65,
		"spd": 65,
		"spe": 42
	},
	"abilities": {
		"0": "Leaf Guard",
		"1": "Chlorophyll",
		"H": "Overcoat"
	},
	"weightkg": 7.3,
	"prevo": "Sewaddle",
	"evoLevel": 20,
	"evos": [
		"Leavanny"
	],
	"eggGroups": [
		"Bug"
	]
},
leavanny: {
	"num": -542,
	"name": "Leavanny",
	"types": [
		"Bug",
		"Grass"
	],
	"baseStats": {
		"hp": 75,
		"atk": 103,
		"def": 80,
		"spa": 75,
		"spd": 75,
		"spe": 92
	},
	"abilities": {
		"0": "Swarm",
		"1": "Chlorophyll",
		"H": "Overcoat"
	},
	"weightkg": 20.5,
	"prevo": "Swadloon",
	"evoType": "levelFriendship",
	"eggGroups": [
		"Bug"
	]
},
venipede: {
	"num": -543,
	"name": "Venipede",
	"types": [
		"Bug",
		"Poison"
	],
	"baseStats": {
		"hp": 30,
		"atk": 45,
		"def": 59,
		"spa": 34,
		"spd": 34,
		"spe": 57
	},
	"abilities": {
		"0": "Poison Point",
		"1": "Swarm",
		"H": "Speed Boost"
	},
	"weightkg": 5.3,
	"evos": [
		"Whirlipede"
	],
	"eggGroups": [
		"Bug"
	]
},
whirlipede: {
	"num": -544,
	"name": "Whirlipede",
	"types": [
		"Bug",
		"Poison"
	],
	"baseStats": {
		"hp": 40,
		"atk": 55,
		"def": 99,
		"spa": 59,
		"spd": 59,
		"spe": 47
	},
	"abilities": {
		"0": "Poison Point",
		"1": "Swarm",
		"H": "Speed Boost"
	},
	"weightkg": 58.5,
	"prevo": "Venipede",
	"evoLevel": 22,
	"evos": [
		"Scolipede"
	],
	"eggGroups": [
		"Bug"
	]
},
scolipede: {
	"num": -545,
	"name": "Scolipede",
	"types": [
		"Bug",
		"Poison"
	],
	"baseStats": {
		"hp": 60,
		"atk": 100,
		"def": 89,
		"spa": 62,
		"spd": 62,
		"spe": 112
	},
	"abilities": {
		"0": "Poison Point",
		"1": "Swarm",
		"H": "Speed Boost"
	},
	"weightkg": 200.5,
	"prevo": "Whirlipede",
	"evoLevel": 30,
	"eggGroups": [
		"Bug"
	]
},
cottonee: {
	"num": -546,
	"name": "Cottonee",
	"types": [
		"Grass",
		"Normal"
	],
	"baseStats": {
		"hp": 40,
		"atk": 27,
		"def": 60,
		"spa": 43,
		"spd": 43,
		"spe": 66
	},
	"abilities": {
		"0": "Prankster",
		"1": "Infiltrator",
		"H": "Chlorophyll"
	},
	"weightkg": 0.6,
	"evos": [
		"Whimsicott"
	],
	"eggGroups": [
		"Fairy",
		"Grass"
	]
},
whimsicott: {
	"num": -547,
	"name": "Whimsicott",
	"types": [
		"Grass",
		"Normal"
	],
	"baseStats": {
		"hp": 60,
		"atk": 67,
		"def": 85,
		"spa": 76,
		"spd": 76,
		"spe": 116
	},
	"abilities": {
		"0": "Prankster",
		"1": "Infiltrator",
		"H": "Chlorophyll"
	},
	"weightkg": 6.6,
	"prevo": "Cottonee",
	"evoType": "useItem",
	"evoItem": "Sun Stone",
	"eggGroups": [
		"Fairy",
		"Grass"
	]
},
petilil: {
	"num": -548,
	"name": "Petilil",
	"types": [
		"Grass"
	],
	"gender": "F",
	"baseStats": {
		"hp": 45,
		"atk": 35,
		"def": 50,
		"spa": 60,
		"spd": 60,
		"spe": 30
	},
	"abilities": {
		"0": "Chlorophyll",
		"1": "Own Tempo",
		"H": "Leaf Guard"
	},
	"weightkg": 6.6,
	"evos": [
		"Lilligant",
		"Lilligant-Hisui"
	],
	"eggGroups": [
		"Grass"
	]
},
lilligant: {
	"num": -549,
	"name": "Lilligant",
	"types": [
		"Grass"
	],
	"gender": "F",
	"baseStats": {
		"hp": 70,
		"atk": 60,
		"def": 75,
		"spa": 92,
		"spd": 92,
		"spe": 90
	},
	"abilities": {
		"0": "Chlorophyll",
		"1": "Own Tempo",
		"H": "Leaf Guard"
	},
	"weightkg": 16.3,
	"prevo": "Petilil",
	"evoType": "useItem",
	"evoItem": "Sun Stone",
	"eggGroups": [
		"Grass"
	],
	"otherFormes": [
		"Lilligant-Hisui"
	],
	"formeOrder": [
		"Lilligant",
		"Lilligant-Hisui"
	]
},
lilliganthisui: {
	"num": -549,
	"name": "Lilligant-Hisui",
	"baseSpecies": "Lilligant",
	"forme": "Hisui",
	"types": [
		"Grass",
		"Fighting"
	],
	"gender": "F",
	"baseStats": {
		"hp": 70,
		"atk": 105,
		"def": 75,
		"spa": 62,
		"spd": 62,
		"spe": 105
	},
	"abilities": {
		"0": "Chlorophyll",
		"1": "Hustle",
		"H": "Leaf Guard"
	},
	"weightkg": 19.2,
	"prevo": "Petilil",
	"evoType": "useItem",
	"evoItem": "Sun Stone",
	"eggGroups": [
		"Grass"
	]
},
basculin: {
	"num": -550,
	"name": "Basculin",
	"baseForme": "Red-Striped",
	"types": [
		"Water"
	],
	"baseStats": {
		"hp": 70,
		"atk": 92,
		"def": 65,
		"spa": 67,
		"spd": 67,
		"spe": 98
	},
	"abilities": {
		"0": "Reckless",
		"1": "Adaptability",
		"H": "Mold Breaker"
	},
	"weightkg": 18,
	"eggGroups": [
		"Water 2"
	],
	"otherFormes": [
		"Basculin-Blue-Striped",
		"Basculin-White-Striped"
	],
	"formeOrder": [
		"Basculin",
		"Basculin-Blue-Striped",
		"Basculin-White-Striped"
	]
},
basculinbluestriped: {
	"num": -550,
	"name": "Basculin-Blue-Striped",
	"baseSpecies": "Basculin",
	"forme": "Blue-Striped",
	"types": [
		"Water"
	],
	"baseStats": {
		"hp": 70,
		"atk": 92,
		"def": 65,
		"spa": 67,
		"spd": 67,
		"spe": 98
	},
	"abilities": {
		"0": "Rock Head",
		"1": "Adaptability",
		"H": "Mold Breaker"
	},
	"weightkg": 18,
	"eggGroups": [
		"Water 2"
	]
},
basculinwhitestriped: {
	"num": -550,
	"name": "Basculin-White-Striped",
	"baseSpecies": "Basculin",
	"forme": "White-Striped",
	"types": [
		"Water"
	],
	"baseStats": {
		"hp": 70,
		"atk": 92,
		"def": 65,
		"spa": 67,
		"spd": 67,
		"spe": 98
	},
	"abilities": {
		"0": "Rattled",
		"1": "Adaptability",
		"H": "Mold Breaker"
	},
	"weightkg": 18,
	"evos": [
		"Basculegion",
		"Basculegion-F"
	],
	"eggGroups": [
		"Water 2"
	],
	"gen": 8
},
sandile: {
	"num": -551,
	"name": "Sandile",
	"types": [
		"Ground",
		"Normal"
	],
	"baseStats": {
		"hp": 50,
		"atk": 72,
		"def": 35,
		"spa": 35,
		"spd": 35,
		"spe": 65
	},
	"abilities": {
		"0": "Intimidate",
		"1": "Moxie",
		"H": "Anger Point"
	},
	"weightkg": 15.2,
	"evos": [
		"Krokorok"
	],
	"eggGroups": [
		"Field"
	]
},
krokorok: {
	"num": -552,
	"name": "Krokorok",
	"types": [
		"Ground",
		"Normal"
	],
	"baseStats": {
		"hp": 60,
		"atk": 82,
		"def": 45,
		"spa": 45,
		"spd": 45,
		"spe": 74
	},
	"abilities": {
		"0": "Intimidate",
		"1": "Moxie",
		"H": "Anger Point"
	},
	"weightkg": 33.4,
	"prevo": "Sandile",
	"evoLevel": 29,
	"evos": [
		"Krookodile"
	],
	"eggGroups": [
		"Field"
	]
},
krookodile: {
	"num": -553,
	"name": "Krookodile",
	"types": [
		"Ground",
		"Normal"
	],
	"baseStats": {
		"hp": 95,
		"atk": 117,
		"def": 80,
		"spa": 67,
		"spd": 67,
		"spe": 92
	},
	"abilities": {
		"0": "Intimidate",
		"1": "Moxie",
		"H": "Anger Point"
	},
	"weightkg": 96.3,
	"prevo": "Krokorok",
	"evoLevel": 40,
	"eggGroups": [
		"Field"
	]
},
darumaka: {
	"num": -554,
	"name": "Darumaka",
	"types": [
		"Fire"
	],
	"baseStats": {
		"hp": 70,
		"atk": 90,
		"def": 45,
		"spa": 30,
		"spd": 30,
		"spe": 50
	},
	"abilities": {
		"0": "Hustle",
		"H": "Inner Focus"
	},
	"weightkg": 37.5,
	"evos": [
		"Darmanitan"
	],
	"eggGroups": [
		"Field"
	],
	"otherFormes": [
		"Darumaka-Galar"
	],
	"formeOrder": [
		"Darumaka",
		"Darumaka-Galar"
	]
},
darumakagalar: {
	"num": -554,
	"name": "Darumaka-Galar",
	"baseSpecies": "Darumaka",
	"forme": "Galar",
	"types": [
		"Ice"
	],
	"baseStats": {
		"hp": 70,
		"atk": 90,
		"def": 45,
		"spa": 30,
		"spd": 30,
		"spe": 50
	},
	"abilities": {
		"0": "Hustle",
		"H": "Inner Focus"
	},
	"weightkg": 40,
	"evos": [
		"Darmanitan-Galar"
	],
	"eggGroups": [
		"Field"
	]
},
darmanitan: {
	"num": -555,
	"name": "Darmanitan",
	"baseForme": "Standard",
	"types": [
		"Fire"
	],
	"baseStats": {
		"hp": 105,
		"atk": 140,
		"def": 55,
		"spa": 42,
		"spd": 42,
		"spe": 95
	},
	"abilities": {
		"0": "Sheer Force",
		"H": "Zen Mode"
	},
	"weightkg": 92.9,
	"prevo": "Darumaka",
	"evoLevel": 35,
	"eggGroups": [
		"Field"
	],
	"otherFormes": [
		"Darmanitan-Zen",
		"Darmanitan-Galar",
		"Darmanitan-Galar-Zen"
	],
	"formeOrder": [
		"Darmanitan",
		"Darmanitan-Zen",
		"Darmanitan-Galar",
		"Darmanitan-Galar-Zen"
	]
},
darmanitanzen: {
	"num": -555,
	"name": "Darmanitan-Zen",
	"baseSpecies": "Darmanitan",
	"forme": "Zen",
	"types": [
		"Fire",
		"Psychic"
	],
	"baseStats": {
		"hp": 105,
		"atk": 30,
		"def": 105,
		"spa": 122,
		"spd": 122,
		"spe": 55
	},
	"abilities": {
		"0": "Zen Mode"
	},
	"weightkg": 92.9,
	"eggGroups": [
		"Field"
	],
	// "requiredAbility": "Zen Mode",
	"battleOnly": "Darmanitan"
},
darmanitangalar: {
	"num": -555,
	"name": "Darmanitan-Galar",
	"baseSpecies": "Darmanitan",
	"forme": "Galar",
	"types": [
		"Ice"
	],
	"baseStats": {
		"hp": 105,
		"atk": 140,
		"def": 55,
		"spa": 42,
		"spd": 42,
		"spe": 95
	},
	"abilities": {
		"0": "Gorilla Tactics",
		"H": "Zen Mode"
	},
	"weightkg": 120,
	"prevo": "Darumaka-Galar",
	"evoType": "useItem",
	"evoItem": "Ice Stone",
	"eggGroups": [
		"Field"
	]
},
darmanitangalarzen: {
	"num": -555,
	"name": "Darmanitan-Galar-Zen",
	"baseSpecies": "Darmanitan",
	"forme": "Galar-Zen",
	"types": [
		"Ice",
		"Fire"
	],
	"baseStats": {
		"hp": 105,
		"atk": 160,
		"def": 55,
		"spa": 42,
		"spd": 42,
		"spe": 135
	},
	"abilities": {
		"0": "Zen Mode"
	},
	"weightkg": 120,
	"eggGroups": [
		"Field"
	],
	// "requiredAbility": "Zen Mode",
	"battleOnly": "Darmanitan-Galar"
},
maractus: {
	"num": -556,
	"name": "Maractus",
	"types": [
		"Grass"
	],
	"baseStats": {
		"hp": 75,
		"atk": 86,
		"def": 67,
		"spa": 86,
		"spd": 86,
		"spe": 60
	},
	"abilities": {
		"0": "Water Absorb",
		"1": "Chlorophyll",
		"H": "Storm Drain"
	},
	"weightkg": 28,
	"eggGroups": [
		"Grass"
	]
},
dwebble: {
	"num": -557,
	"name": "Dwebble",
	"types": [
		"Bug",
		"Rock"
	],
	"baseStats": {
		"hp": 50,
		"atk": 65,
		"def": 85,
		"spa": 35,
		"spd": 35,
		"spe": 55
	},
	"abilities": {
		"0": "Sturdy",
		"1": "Shell Armor",
		"H": "Weak Armor"
	},
	"weightkg": 14.5,
	"evos": [
		"Crustle"
	],
	"eggGroups": [
		"Bug",
		"Mineral"
	]
},
crustle: {
	"num": -558,
	"name": "Crustle",
	"types": [
		"Bug",
		"Rock"
	],
	"baseStats": {
		"hp": 70,
		"atk": 105,
		"def": 125,
		"spa": 70,
		"spd": 70,
		"spe": 45
	},
	"abilities": {
		"0": "Sturdy",
		"1": "Shell Armor",
		"H": "Weak Armor"
	},
	"weightkg": 200,
	"prevo": "Dwebble",
	"evoLevel": 34,
	"eggGroups": [
		"Bug",
		"Mineral"
	]
},
scraggy: {
	"num": -559,
	"name": "Scraggy",
	"types": [
		"Normal",
		"Fighting"
	],
	"baseStats": {
		"hp": 50,
		"atk": 75,
		"def": 70,
		"spa": 52,
		"spd": 52,
		"spe": 48
	},
	"abilities": {
		"0": "Shed Skin",
		"1": "Moxie",
		"H": "Intimidate"
	},
	"weightkg": 11.8,
	"evos": [
		"Scrafty"
	],
	"eggGroups": [
		"Field",
		"Dragon"
	]
},
scrafty: {
	"num": -560,
	"name": "Scrafty",
	"types": [
		"Normal",
		"Fighting"
	],
	"baseStats": {
		"hp": 65,
		"atk": 90,
		"def": 115,
		"spa": 80,
		"spd": 80,
		"spe": 58
	},
	"abilities": {
		"0": "Shed Skin",
		"1": "Moxie",
		"H": "Intimidate"
	},
	"weightkg": 30,
	"prevo": "Scraggy",
	"evoLevel": 39,
	"eggGroups": [
		"Field",
		"Dragon"
	]
},
sigilyph: {
	"num": -561,
	"name": "Sigilyph",
	"types": [
		"Psychic",
		"Flying"
	],
	"baseStats": {
		"hp": 72,
		"atk": 58,
		"def": 80,
		"spa": 91,
		"spd": 91,
		"spe": 97
	},
	"abilities": {
		"0": "Wonder Skin",
		"1": "Magic Guard",
		"H": "Tinted Lens"
	},
	"weightkg": 14,
	"eggGroups": [
		"Flying"
	]
},
yamask: {
	"num": -562,
	"name": "Yamask",
	"types": [
		"Ghost"
	],
	"baseStats": {
		"hp": 38,
		"atk": 30,
		"def": 85,
		"spa": 60,
		"spd": 60,
		"spe": 30
	},
	"abilities": {
		"0": "Mummy"
	},
	"weightkg": 1.5,
	"evos": [
		"Cofagrigus"
	],
	"eggGroups": [
		"Mineral",
		"Amorphous"
	],
	"otherFormes": [
		"Yamask-Galar"
	],
	"formeOrder": [
		"Yamask",
		"Yamask-Galar"
	]
},
yamaskgalar: {
	"num": -562,
	"name": "Yamask-Galar",
	"baseSpecies": "Yamask",
	"forme": "Galar",
	"types": [
		"Ground",
		"Ghost"
	],
	"baseStats": {
		"hp": 38,
		"atk": 55,
		"def": 85,
		"spa": 47,
		"spd": 47,
		"spe": 30
	},
	"abilities": {
		"0": "Wandering Spirit"
	},
	"weightkg": 1.5,
	"evos": [
		"Runerigus"
	],
	"eggGroups": [
		"Mineral",
		"Amorphous"
	]
},
cofagrigus: {
	"num": -563,
	"name": "Cofagrigus",
	"types": [
		"Ghost"
	],
	"baseStats": {
		"hp": 58,
		"atk": 50,
		"def": 145,
		"spa": 100,
		"spd": 100,
		"spe": 30
	},
	"abilities": {
		"0": "Mummy"
	},
	"weightkg": 76.5,
	"prevo": "Yamask",
	"evoLevel": 34,
	"eggGroups": [
		"Mineral",
		"Amorphous"
	]
},
tirtouga: {
	"num": -564,
	"name": "Tirtouga",
	"types": [
		"Water",
		"Rock"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 54,
		"atk": 78,
		"def": 103,
		"spa": 49,
		"spd": 49,
		"spe": 22
	},
	"abilities": {
		"0": "Solid Rock",
		"1": "Sturdy",
		"H": "Swift Swim"
	},
	"weightkg": 16.5,
	"evos": [
		"Carracosta"
	],
	"eggGroups": [
		"Water 1",
		"Water 3"
	]
},
carracosta: {
	"num": -565,
	"name": "Carracosta",
	"types": [
		"Water",
		"Rock"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 74,
		"atk": 108,
		"def": 133,
		"spa": 74,
		"spd": 74,
		"spe": 32
	},
	"abilities": {
		"0": "Solid Rock",
		"1": "Sturdy",
		"H": "Swift Swim"
	},
	"weightkg": 81,
	"prevo": "Tirtouga",
	"evoLevel": 37,
	"eggGroups": [
		"Water 1",
		"Water 3"
	]
},
archen: {
	"num": -566,
	"name": "Archen",
	"types": [
		"Rock",
		"Flying"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 55,
		"atk": 112,
		"def": 45,
		"spa": 59,
		"spd": 59,
		"spe": 70
	},
	"abilities": {
		"0": "Defeatist"
	},
	"weightkg": 9.5,
	"evos": [
		"Archeops"
	],
	"eggGroups": [
		"Flying",
		"Water 3"
	]
},
archeops: {
	"num": -567,
	"name": "Archeops",
	"types": [
		"Rock",
		"Flying"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 75,
		"atk": 140,
		"def": 65,
		"spa": 88,
		"spd": 88,
		"spe": 110
	},
	"abilities": {
		"0": "Defeatist"
	},
	"weightkg": 32,
	"prevo": "Archen",
	"evoLevel": 37,
	"eggGroups": [
		"Flying",
		"Water 3"
	]
},
trubbish: {
	"num": -568,
	"name": "Trubbish",
	"types": [
		"Poison"
	],
	"baseStats": {
		"hp": 50,
		"atk": 50,
		"def": 62,
		"spa": 51,
		"spd": 51,
		"spe": 65
	},
	"abilities": {
		"0": "Stench",
		"1": "Sticky Hold",
		"H": "Aftermath"
	},
	"weightkg": 31,
	"evos": [
		"Garbodor"
	],
	"eggGroups": [
		"Mineral"
	]
},
garbodor: {
	"num": -569,
	"name": "Garbodor",
	"types": [
		"Poison"
	],
	"baseStats": {
		"hp": 80,
		"atk": 95,
		"def": 82,
		"spa": 71,
		"spd": 71,
		"spe": 75
	},
	"abilities": {
		"0": "Stench",
		"1": "Weak Armor",
		"H": "Aftermath"
	},
	"weightkg": 107.3,
	"prevo": "Trubbish",
	"evoLevel": 36,
	"eggGroups": [
		"Mineral"
	],
	"canGigantamax": "G-Max Malodor"
},
zorua: {
	"num": -570,
	"name": "Zorua",
	"types": [
		"Normal"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 40,
		"atk": 65,
		"def": 40,
		"spa": 60,
		"spd": 60,
		"spe": 65
	},
	"abilities": {
		"0": "Illusion"
	},
	"weightkg": 12.5,
	"evos": [
		"Zoroark"
	],
	"eggGroups": [
		"Field"
	],
	"otherFormes": [
		"Zorua-Hisui"
	],
	"formeOrder": [
		"Zorua",
		"Zorua-Hisui"
	]
},
zoruahisui: {
	"num": -570,
	"name": "Zorua-Hisui",
	"baseSpecies": "Zorua",
	"forme": "Hisui",
	"types": [
		"Normal",
		"Ghost"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 35,
		"atk": 60,
		"def": 40,
		"spa": 62,
		"spd": 62,
		"spe": 70
	},
	"abilities": {
		"0": "Illusion"
	},
	"weightkg": 12.5,
	"evos": [
		"Zoroark-Hisui"
	],
	"eggGroups": [
		"Field"
	]
},
zoroark: {
	"num": -571,
	"name": "Zoroark",
	"types": [
		"Normal"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 60,
		"atk": 105,
		"def": 60,
		"spa": 90,
		"spd": 90,
		"spe": 105
	},
	"abilities": {
		"0": "Illusion"
	},
	"weightkg": 81.1,
	"prevo": "Zorua",
	"evoLevel": 30,
	"eggGroups": [
		"Field"
	],
	"otherFormes": [
		"Zoroark-Hisui"
	],
	"formeOrder": [
		"Zoroark",
		"Zoroark-Hisui"
	]
},
zoroarkhisui: {
	"num": -571,
	"name": "Zoroark-Hisui",
	"baseSpecies": "Zoroark",
	"forme": "Hisui",
	"types": [
		"Normal",
		"Ghost"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 55,
		"atk": 100,
		"def": 60,
		"spa": 92,
		"spd": 92,
		"spe": 110
	},
	"abilities": {
		"0": "Illusion"
	},
	"weightkg": 73,
	"prevo": "Zorua-Hisui",
	"evoLevel": 30,
	"eggGroups": [
		"Field"
	]
},
minccino: {
	"num": -572,
	"name": "Minccino",
	"types": [
		"Normal"
	],
	"genderRatio": {
		"M": 0.25,
		"F": 0.75
	},
	"baseStats": {
		"hp": 55,
		"atk": 50,
		"def": 40,
		"spa": 40,
		"spd": 40,
		"spe": 75
	},
	"abilities": {
		"0": "Cute Charm",
		"1": "Technician",
		"H": "Skill Link"
	},
	"weightkg": 5.8,
	"evos": [
		"Cinccino"
	],
	"eggGroups": [
		"Field"
	]
},
cinccino: {
	"num": -573,
	"name": "Cinccino",
	"types": [
		"Normal"
	],
	"genderRatio": {
		"M": 0.25,
		"F": 0.75
	},
	"baseStats": {
		"hp": 75,
		"atk": 95,
		"def": 60,
		"spa": 62,
		"spd": 62,
		"spe": 115
	},
	"abilities": {
		"0": "Cute Charm",
		"1": "Technician",
		"H": "Skill Link"
	},
	"weightkg": 7.5,
	"prevo": "Minccino",
	"evoType": "useItem",
	"evoItem": "Shiny Stone",
	"eggGroups": [
		"Field"
	]
},
gothita: {
	"num": -574,
	"name": "Gothita",
	"types": [
		"Psychic"
	],
	"genderRatio": {
		"M": 0.25,
		"F": 0.75
	},
	"baseStats": {
		"hp": 45,
		"atk": 30,
		"def": 50,
		"spa": 60,
		"spd": 60,
		"spe": 45
	},
	"abilities": {
		"0": "Frisk",
		"1": "Competitive",
		"H": "Shadow Tag"
	},
	"weightkg": 5.8,
	"evos": [
		"Gothorita"
	],
	"eggGroups": [
		"Human-Like"
	]
},
gothorita: {
	"num": -575,
	"name": "Gothorita",
	"types": [
		"Psychic"
	],
	"genderRatio": {
		"M": 0.25,
		"F": 0.75
	},
	"baseStats": {
		"hp": 60,
		"atk": 45,
		"def": 70,
		"spa": 80,
		"spd": 80,
		"spe": 55
	},
	"abilities": {
		"0": "Frisk",
		"1": "Competitive",
		"H": "Shadow Tag"
	},
	"weightkg": 18,
	"prevo": "Gothita",
	"evoLevel": 32,
	"evos": [
		"Gothitelle"
	],
	"eggGroups": [
		"Human-Like"
	]
},
gothitelle: {
	"num": -576,
	"name": "Gothitelle",
	"types": [
		"Psychic"
	],
	"genderRatio": {
		"M": 0.25,
		"F": 0.75
	},
	"baseStats": {
		"hp": 70,
		"atk": 55,
		"def": 95,
		"spa": 102,
		"spd": 102,
		"spe": 65
	},
	"abilities": {
		"0": "Frisk",
		"1": "Competitive",
		"H": "Shadow Tag"
	},
	"weightkg": 44,
	"prevo": "Gothorita",
	"evoLevel": 41,
	"eggGroups": [
		"Human-Like"
	]
},
solosis: {
	"num": -577,
	"name": "Solosis",
	"types": [
		"Psychic"
	],
	"baseStats": {
		"hp": 45,
		"atk": 30,
		"def": 40,
		"spa": 77,
		"spd": 77,
		"spe": 20
	},
	"abilities": {
		"0": "Overcoat",
		"1": "Magic Guard",
		"H": "Regenerator"
	},
	"weightkg": 1,
	"evos": [
		"Duosion"
	],
	"eggGroups": [
		"Amorphous"
	]
},
duosion: {
	"num": -578,
	"name": "Duosion",
	"types": [
		"Psychic"
	],
	"baseStats": {
		"hp": 65,
		"atk": 40,
		"def": 50,
		"spa": 92,
		"spd": 92,
		"spe": 30
	},
	"abilities": {
		"0": "Overcoat",
		"1": "Magic Guard",
		"H": "Regenerator"
	},
	"weightkg": 8,
	"prevo": "Solosis",
	"evoLevel": 32,
	"evos": [
		"Reuniclus"
	],
	"eggGroups": [
		"Amorphous"
	]
},
reuniclus: {
	"num": -579,
	"name": "Reuniclus",
	"types": [
		"Psychic"
	],
	"baseStats": {
		"hp": 110,
		"atk": 65,
		"def": 75,
		"spa": 105,
		"spd": 105,
		"spe": 30
	},
	"abilities": {
		"0": "Overcoat",
		"1": "Magic Guard",
		"H": "Regenerator"
	},
	"weightkg": 20.1,
	"prevo": "Duosion",
	"evoLevel": 41,
	"eggGroups": [
		"Amorphous"
	]
},
ducklett: {
	"num": -580,
	"name": "Ducklett",
	"types": [
		"Water",
		"Flying"
	],
	"baseStats": {
		"hp": 62,
		"atk": 44,
		"def": 50,
		"spa": 47,
		"spd": 47,
		"spe": 55
	},
	"abilities": {
		"0": "Keen Eye",
		"1": "Big Pecks",
		"H": "Hydration"
	},
	"weightkg": 5.5,
	"evos": [
		"Swanna"
	],
	"eggGroups": [
		"Water 1",
		"Flying"
	]
},
swanna: {
	"num": -581,
	"name": "Swanna",
	"types": [
		"Water",
		"Flying"
	],
	"baseStats": {
		"hp": 75,
		"atk": 87,
		"def": 63,
		"spa": 75,
		"spd": 75,
		"spe": 98
	},
	"abilities": {
		"0": "Keen Eye",
		"1": "Big Pecks",
		"H": "Hydration"
	},
	"weightkg": 24.2,
	"prevo": "Ducklett",
	"evoLevel": 35,
	"eggGroups": [
		"Water 1",
		"Flying"
	]
},
vanillite: {
	"num": -582,
	"name": "Vanillite",
	"types": [
		"Ice"
	],
	"baseStats": {
		"hp": 36,
		"atk": 50,
		"def": 50,
		"spa": 62,
		"spd": 62,
		"spe": 44
	},
	"abilities": {
		"0": "Ice Body",
		"1": "Snow Cloak",
		"H": "Weak Armor"
	},
	"weightkg": 5.7,
	"evos": [
		"Vanillish"
	],
	"eggGroups": [
		"Mineral"
	]
},
vanillish: {
	"num": -583,
	"name": "Vanillish",
	"types": [
		"Ice"
	],
	"baseStats": {
		"hp": 51,
		"atk": 65,
		"def": 65,
		"spa": 77,
		"spd": 77,
		"spe": 59
	},
	"abilities": {
		"0": "Ice Body",
		"1": "Snow Cloak",
		"H": "Weak Armor"
	},
	"weightkg": 41,
	"prevo": "Vanillite",
	"evoLevel": 35,
	"evos": [
		"Vanilluxe"
	],
	"eggGroups": [
		"Mineral"
	]
},
vanilluxe: {
	"num": -584,
	"name": "Vanilluxe",
	"types": [
		"Ice"
	],
	"baseStats": {
		"hp": 71,
		"atk": 95,
		"def": 85,
		"spa": 102,
		"spd": 102,
		"spe": 79
	},
	"abilities": {
		"0": "Ice Body",
		"1": "Snow Warning",
		"H": "Weak Armor"
	},
	"weightkg": 57.5,
	"prevo": "Vanillish",
	"evoLevel": 47,
	"eggGroups": [
		"Mineral"
	]
},
deerling: {
	"num": -585,
	"name": "Deerling",
	"baseForme": "Spring",
	"types": [
		"Normal",
		"Grass"
	],
	"baseStats": {
		"hp": 60,
		"atk": 60,
		"def": 50,
		"spa": 45,
		"spd": 45,
		"spe": 75
	},
	"abilities": {
		"0": "Chlorophyll",
		"1": "Sap Sipper",
		"H": "Serene Grace"
	},
	"weightkg": 19.5,
	"evos": [
		"Sawsbuck"
	],
	"eggGroups": [
		"Field"
	],
	"cosmeticFormes": [
		"Deerling-Summer",
		"Deerling-Autumn",
		"Deerling-Winter"
	],
	"formeOrder": [
		"Deerling",
		"Deerling-Summer",
		"Deerling-Autumn",
		"Deerling-Winter"
	]
},
sawsbuck: {
	"num": -586,
	"name": "Sawsbuck",
	"baseForme": "Spring",
	"types": [
		"Normal",
		"Grass"
	],
	"baseStats": {
		"hp": 80,
		"atk": 100,
		"def": 70,
		"spa": 65,
		"spd": 65,
		"spe": 95
	},
	"abilities": {
		"0": "Chlorophyll",
		"1": "Sap Sipper",
		"H": "Serene Grace"
	},
	"weightkg": 92.5,
	"prevo": "Deerling",
	"evoLevel": 34,
	"eggGroups": [
		"Field"
	],
	"cosmeticFormes": [
		"Sawsbuck-Summer",
		"Sawsbuck-Autumn",
		"Sawsbuck-Winter"
	],
	"formeOrder": [
		"Sawsbuck",
		"Sawsbuck-Summer",
		"Sawsbuck-Autumn",
		"Sawsbuck-Winter"
	]
},
emolga: {
	"num": -587,
	"name": "Emolga",
	"types": [
		"Electric",
		"Flying"
	],
	"baseStats": {
		"hp": 55,
		"atk": 75,
		"def": 60,
		"spa": 67,
		"spd": 67,
		"spe": 103
	},
	"abilities": {
		"0": "Static",
		"H": "Motor Drive"
	},
	"weightkg": 5,
	"eggGroups": [
		"Field"
	]
},
karrablast: {
	"num": -588,
	"name": "Karrablast",
	"types": [
		"Bug"
	],
	"baseStats": {
		"hp": 50,
		"atk": 75,
		"def": 45,
		"spa": 42,
		"spd": 42,
		"spe": 60
	},
	"abilities": {
		"0": "Swarm",
		"1": "Shed Skin",
		"H": "No Guard"
	},
	"weightkg": 5.9,
	"evos": [
		"Escavalier"
	],
	"eggGroups": [
		"Bug"
	]
},
escavalier: {
	"num": -589,
	"name": "Escavalier",
	"types": [
		"Bug",
		"Rock"
	],
	"baseStats": {
		"hp": 70,
		"atk": 135,
		"def": 105,
		"spa": 82,
		"spd": 82,
		"spe": 20
	},
	"abilities": {
		"0": "Swarm",
		"1": "Shell Armor",
		"H": "Overcoat"
	},
	"weightkg": 33,
	"prevo": "Karrablast",
	"evoType": "trade",
	"evoCondition": "with a Shelmet",
	"eggGroups": [
		"Bug"
	]
},
foongus: {
	"num": -590,
	"name": "Foongus",
	"types": [
		"Grass",
		"Poison"
	],
	"baseStats": {
		"hp": 69,
		"atk": 55,
		"def": 45,
		"spa": 55,
		"spd": 55,
		"spe": 15
	},
	"abilities": {
		"0": "Effect Spore",
		"H": "Regenerator"
	},
	"weightkg": 1,
	"evos": [
		"Amoonguss"
	],
	"eggGroups": [
		"Grass"
	]
},
amoonguss: {
	"num": -591,
	"name": "Amoonguss",
	"types": [
		"Grass",
		"Poison"
	],
	"baseStats": {
		"hp": 114,
		"atk": 85,
		"def": 70,
		"spa": 82,
		"spd": 82,
		"spe": 30
	},
	"abilities": {
		"0": "Effect Spore",
		"H": "Regenerator"
	},
	"weightkg": 10.5,
	"prevo": "Foongus",
	"evoLevel": 39,
	"eggGroups": [
		"Grass"
	]
},
frillish: {
	"num": -592,
	"name": "Frillish",
	"types": [
		"Water",
		"Ghost"
	],
	"baseStats": {
		"hp": 55,
		"atk": 40,
		"def": 50,
		"spa": 75,
		"spd": 75,
		"spe": 40
	},
	"abilities": {
		"0": "Water Absorb",
		"1": "Cursed Body",
		"H": "Damp"
	},
	"weightkg": 33,
	"evos": [
		"Jellicent"
	],
	"eggGroups": [
		"Amorphous"
	]
},
jellicent: {
	"num": -593,
	"name": "Jellicent",
	"types": [
		"Water",
		"Ghost"
	],
	"baseStats": {
		"hp": 100,
		"atk": 60,
		"def": 70,
		"spa": 95,
		"spd": 95,
		"spe": 60
	},
	"abilities": {
		"0": "Water Absorb",
		"1": "Cursed Body",
		"H": "Damp"
	},
	"weightkg": 135,
	"prevo": "Frillish",
	"evoLevel": 40,
	"eggGroups": [
		"Amorphous"
	]
},
alomomola: {
	"num": -594,
	"name": "Alomomola",
	"types": [
		"Water"
	],
	"baseStats": {
		"hp": 165,
		"atk": 75,
		"def": 80,
		"spa": 42,
		"spd": 42,
		"spe": 65
	},
	"abilities": {
		"0": "Healer",
		"1": "Hydration",
		"H": "Regenerator"
	},
	"weightkg": 31.6,
	"eggGroups": [
		"Water 1",
		"Water 2"
	]
},
joltik: {
	"num": -595,
	"name": "Joltik",
	"types": [
		"Bug",
		"Electric"
	],
	"baseStats": {
		"hp": 50,
		"atk": 47,
		"def": 50,
		"spa": 53,
		"spd": 53,
		"spe": 65
	},
	"abilities": {
		"0": "Compound Eyes",
		"1": "Unnerve",
		"H": "Swarm"
	},
	"weightkg": 0.6,
	"evos": [
		"Galvantula"
	],
	"eggGroups": [
		"Bug"
	]
},
galvantula: {
	"num": -596,
	"name": "Galvantula",
	"types": [
		"Bug",
		"Electric"
	],
	"baseStats": {
		"hp": 70,
		"atk": 77,
		"def": 60,
		"spa": 78,
		"spd": 78,
		"spe": 108
	},
	"abilities": {
		"0": "Compound Eyes",
		"1": "Unnerve",
		"H": "Swarm"
	},
	"weightkg": 14.3,
	"prevo": "Joltik",
	"evoLevel": 36,
	"eggGroups": [
		"Bug"
	]
},
ferroseed: {
	"num": -597,
	"name": "Ferroseed",
	"types": [
		"Grass",
		"Rock"
	],
	"baseStats": {
		"hp": 44,
		"atk": 50,
		"def": 91,
		"spa": 55,
		"spd": 55,
		"spe": 10
	},
	"abilities": {
		"0": "Iron Barbs"
	},
	"weightkg": 18.8,
	"evos": [
		"Ferrothorn"
	],
	"eggGroups": [
		"Grass",
		"Mineral"
	]
},
ferrothorn: {
	"num": -598,
	"name": "Ferrothorn",
	"types": [
		"Grass",
		"Rock"
	],
	"baseStats": {
		"hp": 74,
		"atk": 94,
		"def": 131,
		"spa": 85,
		"spd": 85,
		"spe": 20
	},
	"abilities": {
		"0": "Iron Barbs",
		"H": "Anticipation"
	},
	"weightkg": 110,
	"prevo": "Ferroseed",
	"evoLevel": 40,
	"eggGroups": [
		"Grass",
		"Mineral"
	]
},
klink: {
	"num": -599,
	"name": "Klink",
	"types": [
		"Rock"
	],
	"gender": "N",
	"baseStats": {
		"hp": 40,
		"atk": 55,
		"def": 70,
		"spa": 52,
		"spd": 52,
		"spe": 30
	},
	"abilities": {
		"0": "Plus",
		"1": "Minus",
		"H": "Clear Body"
	},
	"weightkg": 21,
	"evos": [
		"Klang"
	],
	"eggGroups": [
		"Mineral"
	]
},
klang: {
	"num": -600,
	"name": "Klang",
	"types": [
		"Rock"
	],
	"gender": "N",
	"baseStats": {
		"hp": 60,
		"atk": 80,
		"def": 95,
		"spa": 77,
		"spd": 77,
		"spe": 50
	},
	"abilities": {
		"0": "Plus",
		"1": "Minus",
		"H": "Clear Body"
	},
	"weightkg": 51,
	"prevo": "Klink",
	"evoLevel": 38,
	"evos": [
		"Klinklang"
	],
	"eggGroups": [
		"Mineral"
	]
},
klinklang: {
	"num": -601,
	"name": "Klinklang",
	"types": [
		"Rock"
	],
	"gender": "N",
	"baseStats": {
		"hp": 60,
		"atk": 100,
		"def": 115,
		"spa": 77,
		"spd": 77,
		"spe": 90
	},
	"abilities": {
		"0": "Plus",
		"1": "Minus",
		"H": "Clear Body"
	},
	"weightkg": 81,
	"prevo": "Klang",
	"evoLevel": 49,
	"eggGroups": [
		"Mineral"
	]
},
tynamo: {
	"num": -602,
	"name": "Tynamo",
	"types": [
		"Electric"
	],
	"baseStats": {
		"hp": 35,
		"atk": 55,
		"def": 40,
		"spa": 42,
		"spd": 42,
		"spe": 60
	},
	"abilities": {
		"0": "Levitate"
	},
	"weightkg": 0.3,
	"evos": [
		"Eelektrik"
	],
	"eggGroups": [
		"Amorphous"
	]
},
eelektrik: {
	"num": -603,
	"name": "Eelektrik",
	"types": [
		"Electric"
	],
	"baseStats": {
		"hp": 65,
		"atk": 85,
		"def": 70,
		"spa": 72,
		"spd": 72,
		"spe": 40
	},
	"abilities": {
		"0": "Levitate"
	},
	"weightkg": 22,
	"prevo": "Tynamo",
	"evoLevel": 39,
	"evos": [
		"Eelektross"
	],
	"eggGroups": [
		"Amorphous"
	]
},
eelektross: {
	"num": -604,
	"name": "Eelektross",
	"types": [
		"Electric"
	],
	"baseStats": {
		"hp": 85,
		"atk": 115,
		"def": 80,
		"spa": 92,
		"spd": 92,
		"spe": 50
	},
	"abilities": {
		"0": "Levitate"
	},
	"weightkg": 80.5,
	"prevo": "Eelektrik",
	"evoType": "useItem",
	"evoItem": "Thunder Stone",
	"eggGroups": [
		"Amorphous"
	]
},
elgyem: {
	"num": -605,
	"name": "Elgyem",
	"types": [
		"Psychic"
	],
	"baseStats": {
		"hp": 55,
		"atk": 55,
		"def": 55,
		"spa": 70,
		"spd": 70,
		"spe": 30
	},
	"abilities": {
		"0": "Telepathy",
		"1": "Synchronize",
		"H": "Analytic"
	},
	"weightkg": 9,
	"evos": [
		"Beheeyem"
	],
	"eggGroups": [
		"Human-Like"
	]
},
beheeyem: {
	"num": -606,
	"name": "Beheeyem",
	"types": [
		"Psychic"
	],
	"baseStats": {
		"hp": 75,
		"atk": 75,
		"def": 75,
		"spa": 110,
		"spd": 110,
		"spe": 40
	},
	"abilities": {
		"0": "Telepathy",
		"1": "Synchronize",
		"H": "Analytic"
	},
	"weightkg": 34.5,
	"prevo": "Elgyem",
	"evoLevel": 42,
	"eggGroups": [
		"Human-Like"
	]
},
litwick: {
	"num": -607,
	"name": "Litwick",
	"types": [
		"Ghost",
		"Fire"
	],
	"baseStats": {
		"hp": 50,
		"atk": 30,
		"def": 55,
		"spa": 60,
		"spd": 60,
		"spe": 20
	},
	"abilities": {
		"0": "Flash Fire",
		"1": "Flame Body",
		"H": "Infiltrator"
	},
	"weightkg": 3.1,
	"evos": [
		"Lampent"
	],
	"eggGroups": [
		"Amorphous"
	]
},
lampent: {
	"num": -608,
	"name": "Lampent",
	"types": [
		"Ghost",
		"Fire"
	],
	"baseStats": {
		"hp": 60,
		"atk": 40,
		"def": 60,
		"spa": 77,
		"spd": 77,
		"spe": 55
	},
	"abilities": {
		"0": "Flash Fire",
		"1": "Flame Body",
		"H": "Infiltrator"
	},
	"weightkg": 13,
	"prevo": "Litwick",
	"evoLevel": 41,
	"evos": [
		"Chandelure"
	],
	"eggGroups": [
		"Amorphous"
	]
},
chandelure: {
	"num": -609,
	"name": "Chandelure",
	"types": [
		"Ghost",
		"Fire"
	],
	"baseStats": {
		"hp": 60,
		"atk": 55,
		"def": 90,
		"spa": 117,
		"spd": 117,
		"spe": 80
	},
	"abilities": {
		"0": "Flash Fire",
		"1": "Flame Body",
		"H": "Infiltrator"
	},
	"weightkg": 34.3,
	"prevo": "Lampent",
	"evoType": "useItem",
	"evoItem": "Dusk Stone",
	"eggGroups": [
		"Amorphous"
	]
},
axew: {
	"num": -610,
	"name": "Axew",
	"types": [
		"Dragon"
	],
	"baseStats": {
		"hp": 46,
		"atk": 87,
		"def": 60,
		"spa": 35,
		"spd": 35,
		"spe": 57
	},
	"abilities": {
		"0": "Rivalry",
		"1": "Mold Breaker",
		"H": "Unnerve"
	},
	"weightkg": 18,
	"evos": [
		"Fraxure"
	],
	"eggGroups": [
		"Monster",
		"Dragon"
	]
},
fraxure: {
	"num": -611,
	"name": "Fraxure",
	"types": [
		"Dragon"
	],
	"baseStats": {
		"hp": 66,
		"atk": 117,
		"def": 70,
		"spa": 45,
		"spd": 45,
		"spe": 67
	},
	"abilities": {
		"0": "Rivalry",
		"1": "Mold Breaker",
		"H": "Unnerve"
	},
	"weightkg": 36,
	"prevo": "Axew",
	"evoLevel": 38,
	"evos": [
		"Haxorus"
	],
	"eggGroups": [
		"Monster",
		"Dragon"
	]
},
haxorus: {
	"num": -612,
	"name": "Haxorus",
	"types": [
		"Dragon"
	],
	"baseStats": {
		"hp": 76,
		"atk": 147,
		"def": 90,
		"spa": 65,
		"spd": 65,
		"spe": 97
	},
	"abilities": {
		"0": "Rivalry",
		"1": "Mold Breaker",
		"H": "Unnerve"
	},
	"weightkg": 105.5,
	"prevo": "Fraxure",
	"evoLevel": 48,
	"eggGroups": [
		"Monster",
		"Dragon"
	]
},
cubchoo: {
	"num": -613,
	"name": "Cubchoo",
	"types": [
		"Ice"
	],
	"baseStats": {
		"hp": 55,
		"atk": 70,
		"def": 40,
		"spa": 50,
		"spd": 50,
		"spe": 40
	},
	"abilities": {
		"0": "Snow Cloak",
		"1": "Slush Rush",
		"H": "Rattled"
	},
	"weightkg": 8.5,
	"evos": [
		"Beartic"
	],
	"eggGroups": [
		"Field"
	]
},
beartic: {
	"num": -614,
	"name": "Beartic",
	"types": [
		"Ice"
	],
	"baseStats": {
		"hp": 95,
		"atk": 130,
		"def": 80,
		"spa": 75,
		"spd": 75,
		"spe": 50
	},
	"abilities": {
		"0": "Snow Cloak",
		"1": "Slush Rush",
		"H": "Swift Swim"
	},
	"weightkg": 260,
	"prevo": "Cubchoo",
	"evoLevel": 37,
	"eggGroups": [
		"Field"
	]
},
cryogonal: {
	"num": -615,
	"name": "Cryogonal",
	"types": [
		"Ice"
	],
	"gender": "N",
	"baseStats": {
		"hp": 80,
		"atk": 50,
		"def": 50,
		"spa": 115,
		"spd": 115,
		"spe": 105
	},
	"abilities": {
		"0": "Levitate"
	},
	"weightkg": 148,
	"eggGroups": [
		"Mineral"
	]
},
shelmet: {
	"num": -616,
	"name": "Shelmet",
	"types": [
		"Bug"
	],
	"baseStats": {
		"hp": 50,
		"atk": 40,
		"def": 85,
		"spa": 52,
		"spd": 52,
		"spe": 25
	},
	"abilities": {
		"0": "Hydration",
		"1": "Shell Armor",
		"H": "Overcoat"
	},
	"weightkg": 7.7,
	"evos": [
		"Accelgor"
	],
	"eggGroups": [
		"Bug"
	]
},
accelgor: {
	"num": -617,
	"name": "Accelgor",
	"types": [
		"Bug"
	],
	"baseStats": {
		"hp": 80,
		"atk": 70,
		"def": 40,
		"spa": 80,
		"spd": 80,
		"spe": 145
	},
	"abilities": {
		"0": "Hydration",
		"1": "Sticky Hold",
		"H": "Unburden"
	},
	"weightkg": 25.3,
	"prevo": "Shelmet",
	"evoType": "trade",
	"evoCondition": "with a Karrablast",
	"eggGroups": [
		"Bug"
	]
},
stunfisk: {
	"num": -618,
	"name": "Stunfisk",
	"types": [
		"Ground",
		"Electric"
	],
	"baseStats": {
		"hp": 109,
		"atk": 66,
		"def": 84,
		"spa": 90,
		"spd": 90,
		"spe": 32
	},
	"abilities": {
		"0": "Static",
		"1": "Limber",
		"H": "Sand Veil"
	},
	"weightkg": 11,
	"eggGroups": [
		"Water 1",
		"Amorphous"
	],
	"otherFormes": [
		"Stunfisk-Galar"
	],
	"formeOrder": [
		"Stunfisk",
		"Stunfisk-Galar"
	]
},
stunfiskgalar: {
	"num": -618,
	"name": "Stunfisk-Galar",
	"baseSpecies": "Stunfisk",
	"forme": "Galar",
	"types": [
		"Ground",
		"Rock"
	],
	"baseStats": {
		"hp": 109,
		"atk": 81,
		"def": 99,
		"spa": 75,
		"spd": 75,
		"spe": 32
	},
	"abilities": {
		"0": "Mimicry"
	},
	"weightkg": 20.5,
	"eggGroups": [
		"Water 1",
		"Amorphous"
	]
},
mienfoo: {
	"num": -619,
	"name": "Mienfoo",
	"types": [
		"Fighting"
	],
	"baseStats": {
		"hp": 45,
		"atk": 85,
		"def": 50,
		"spa": 52,
		"spd": 52,
		"spe": 65
	},
	"abilities": {
		"0": "Inner Focus",
		"1": "Regenerator",
		"H": "Reckless"
	},
	"weightkg": 20,
	"evos": [
		"Mienshao"
	],
	"eggGroups": [
		"Field",
		"Human-Like"
	]
},
mienshao: {
	"num": -620,
	"name": "Mienshao",
	"types": [
		"Fighting"
	],
	"baseStats": {
		"hp": 65,
		"atk": 125,
		"def": 60,
		"spa": 77,
		"spd": 77,
		"spe": 105
	},
	"abilities": {
		"0": "Inner Focus",
		"1": "Regenerator",
		"H": "Reckless"
	},
	"weightkg": 35.5,
	"prevo": "Mienfoo",
	"evoLevel": 50,
	"eggGroups": [
		"Field",
		"Human-Like"
	]
},
druddigon: {
	"num": -621,
	"name": "Druddigon",
	"types": [
		"Dragon"
	],
	"baseStats": {
		"hp": 77,
		"atk": 120,
		"def": 90,
		"spa": 75,
		"spd": 75,
		"spe": 48
	},
	"abilities": {
		"0": "Rough Skin",
		"1": "Sheer Force",
		"H": "Mold Breaker"
	},
	"weightkg": 139,
	"eggGroups": [
		"Monster",
		"Dragon"
	]
},
golett: {
	"num": -622,
	"name": "Golett",
	"types": [
		"Ground",
		"Ghost"
	],
	"gender": "N",
	"baseStats": {
		"hp": 59,
		"atk": 74,
		"def": 50,
		"spa": 42,
		"spd": 42,
		"spe": 35
	},
	"abilities": {
		"0": "Iron Fist",
		"1": "Klutz",
		"H": "No Guard"
	},
	"weightkg": 92,
	"evos": [
		"Golurk"
	],
	"eggGroups": [
		"Mineral"
	]
},
golurk: {
	"num": -623,
	"name": "Golurk",
	"types": [
		"Ground",
		"Ghost"
	],
	"gender": "N",
	"baseStats": {
		"hp": 89,
		"atk": 124,
		"def": 80,
		"spa": 67,
		"spd": 67,
		"spe": 55
	},
	"abilities": {
		"0": "Iron Fist",
		"1": "Klutz",
		"H": "No Guard"
	},
	"weightkg": 330,
	"prevo": "Golett",
	"evoLevel": 43,
	"eggGroups": [
		"Mineral"
	]
},
pawniard: {
	"num": -624,
	"name": "Pawniard",
	"types": [
		"Normal",
		"Rock"
	],
	"baseStats": {
		"hp": 45,
		"atk": 85,
		"def": 70,
		"spa": 40,
		"spd": 40,
		"spe": 60
	},
	"abilities": {
		"0": "Defiant",
		"1": "Inner Focus",
		"H": "Pressure"
	},
	"weightkg": 10.2,
	"evos": [
		"Bisharp"
	],
	"eggGroups": [
		"Human-Like"
	]
},
bisharp: {
	"num": -625,
	"name": "Bisharp",
	"types": [
		"Normal",
		"Rock"
	],
	"baseStats": {
		"hp": 65,
		"atk": 125,
		"def": 100,
		"spa": 65,
		"spd": 65,
		"spe": 70
	},
	"abilities": {
		"0": "Defiant",
		"1": "Inner Focus",
		"H": "Pressure"
	},
	"weightkg": 70,
	"prevo": "Pawniard",
	"evoLevel": 52,
	"eggGroups": [
		"Human-Like"
	]
},
bouffalant: {
	"num": -626,
	"name": "Bouffalant",
	"types": [
		"Normal"
	],
	"baseStats": {
		"hp": 95,
		"atk": 110,
		"def": 95,
		"spa": 67,
		"spd": 67,
		"spe": 55
	},
	"abilities": {
		"0": "Reckless",
		"1": "Sap Sipper",
		"H": "Soundproof"
	},
	"weightkg": 94.6,
	"eggGroups": [
		"Field"
	]
},
rufflet: {
	"num": -627,
	"name": "Rufflet",
	"types": [
		"Normal",
		"Flying"
	],
	"gender": "M",
	"baseStats": {
		"hp": 70,
		"atk": 83,
		"def": 50,
		"spa": 43,
		"spd": 43,
		"spe": 60
	},
	"abilities": {
		"0": "Keen Eye",
		"1": "Sheer Force",
		"H": "Hustle"
	},
	"weightkg": 10.5,
	"evos": [
		"Braviary",
		"Braviary-Hisui"
	],
	"eggGroups": [
		"Flying"
	]
},
braviary: {
	"num": -628,
	"name": "Braviary",
	"types": [
		"Normal",
		"Flying"
	],
	"gender": "M",
	"baseStats": {
		"hp": 100,
		"atk": 123,
		"def": 75,
		"spa": 66,
		"spd": 66,
		"spe": 80
	},
	"abilities": {
		"0": "Keen Eye",
		"1": "Sheer Force",
		"H": "Defiant"
	},
	"weightkg": 41,
	"prevo": "Rufflet",
	"evoLevel": 54,
	"eggGroups": [
		"Flying"
	],
	"otherFormes": [
		"Braviary-Hisui"
	],
	"formeOrder": [
		"Braviary",
		"Braviary-Hisui"
	]
},
braviaryhisui: {
	"num": -628,
	"name": "Braviary-Hisui",
	"baseSpecies": "Braviary",
	"forme": "Hisui",
	"types": [
		"Psychic",
		"Flying"
	],
	"gender": "M",
	"baseStats": {
		"hp": 110,
		"atk": 83,
		"def": 70,
		"spa": 91,
		"spd": 91,
		"spe": 65
	},
	"abilities": {
		"0": "Keen Eye",
		"1": "Sheer Force",
		"H": "Defiant"
	},
	"weightkg": 43.4,
	"prevo": "Rufflet",
	"evoLevel": 54,
	"eggGroups": [
		"Flying"
	]
},
vullaby: {
	"num": -629,
	"name": "Vullaby",
	"types": [
		"Normal",
		"Flying"
	],
	"gender": "F",
	"baseStats": {
		"hp": 70,
		"atk": 55,
		"def": 75,
		"spa": 55,
		"spd": 55,
		"spe": 60
	},
	"abilities": {
		"0": "Big Pecks",
		"1": "Overcoat",
		"H": "Weak Armor"
	},
	"weightkg": 9,
	"evos": [
		"Mandibuzz"
	],
	"eggGroups": [
		"Flying"
	]
},
mandibuzz: {
	"num": -630,
	"name": "Mandibuzz",
	"types": [
		"Normal",
		"Flying"
	],
	"gender": "F",
	"baseStats": {
		"hp": 110,
		"atk": 65,
		"def": 105,
		"spa": 75,
		"spd": 75,
		"spe": 80
	},
	"abilities": {
		"0": "Big Pecks",
		"1": "Overcoat",
		"H": "Weak Armor"
	},
	"weightkg": 39.5,
	"prevo": "Vullaby",
	"evoLevel": 54,
	"eggGroups": [
		"Flying"
	]
},
heatmor: {
	"num": -631,
	"name": "Heatmor",
	"types": [
		"Fire"
	],
	"baseStats": {
		"hp": 85,
		"atk": 97,
		"def": 66,
		"spa": 85,
		"spd": 85,
		"spe": 65
	},
	"abilities": {
		"0": "Gluttony",
		"1": "Flash Fire",
		"H": "White Smoke"
	},
	"weightkg": 58,
	"eggGroups": [
		"Field"
	]
},
durant: {
	"num": -632,
	"name": "Durant",
	"types": [
		"Bug",
		"Rock"
	],
	"baseStats": {
		"hp": 58,
		"atk": 109,
		"def": 112,
		"spa": 48,
		"spd": 48,
		"spe": 109
	},
	"abilities": {
		"0": "Swarm",
		"1": "Hustle",
		"H": "Truant"
	},
	"weightkg": 33,
	"eggGroups": [
		"Bug"
	]
},
deino: {
	"num": -633,
	"name": "Deino",
	"types": [
		"Normal",
		"Dragon"
	],
	"baseStats": {
		"hp": 52,
		"atk": 65,
		"def": 50,
		"spa": 47,
		"spd": 47,
		"spe": 38
	},
	"abilities": {
		"0": "Hustle"
	},
	"weightkg": 17.3,
	"evos": [
		"Zweilous"
	],
	"eggGroups": [
		"Dragon"
	]
},
zweilous: {
	"num": -634,
	"name": "Zweilous",
	"types": [
		"Normal",
		"Dragon"
	],
	"baseStats": {
		"hp": 72,
		"atk": 85,
		"def": 70,
		"spa": 67,
		"spd": 67,
		"spe": 58
	},
	"abilities": {
		"0": "Hustle"
	},
	"weightkg": 50,
	"prevo": "Deino",
	"evoLevel": 50,
	"evos": [
		"Hydreigon"
	],
	"eggGroups": [
		"Dragon"
	]
},
hydreigon: {
	"num": -635,
	"name": "Hydreigon",
	"types": [
		"Normal",
		"Dragon"
	],
	"baseStats": {
		"hp": 92,
		"atk": 105,
		"def": 90,
		"spa": 107,
		"spd": 107,
		"spe": 98
	},
	"abilities": {
		"0": "Levitate"
	},
	"weightkg": 160,
	"prevo": "Zweilous",
	"evoLevel": 64,
	"eggGroups": [
		"Dragon"
	]
},
larvesta: {
	"num": -636,
	"name": "Larvesta",
	"types": [
		"Bug",
		"Fire"
	],
	"baseStats": {
		"hp": 55,
		"atk": 85,
		"def": 55,
		"spa": 52,
		"spd": 52,
		"spe": 60
	},
	"abilities": {
		"0": "Flame Body",
		"H": "Swarm"
	},
	"weightkg": 28.8,
	"evos": [
		"Volcarona"
	],
	"eggGroups": [
		"Bug"
	]
},
volcarona: {
	"num": -637,
	"name": "Volcarona",
	"types": [
		"Bug",
		"Fire"
	],
	"baseStats": {
		"hp": 85,
		"atk": 60,
		"def": 65,
		"spa": 120,
		"spd": 120,
		"spe": 100
	},
	"abilities": {
		"0": "Flame Body",
		"H": "Swarm"
	},
	"weightkg": 46,
	"prevo": "Larvesta",
	"evoLevel": 59,
	"eggGroups": [
		"Bug"
	]
},
cobalion: {
	"num": -638,
	"name": "Cobalion",
	"types": [
		"Rock",
		"Fighting"
	],
	"gender": "N",
	"baseStats": {
		"hp": 91,
		"atk": 90,
		"def": 129,
		"spa": 81,
		"spd": 81,
		"spe": 108
	},
	"abilities": {
		"0": "Justified"
	},
	"weightkg": 250,
	"tags": [
		"Sub-Legendary"
	],
	"eggGroups": [
		"Undiscovered"
	]
},
terrakion: {
	"num": -639,
	"name": "Terrakion",
	"types": [
		"Rock",
		"Fighting"
	],
	"gender": "N",
	"baseStats": {
		"hp": 91,
		"atk": 129,
		"def": 90,
		"spa": 81,
		"spd": 81,
		"spe": 108
	},
	"abilities": {
		"0": "Justified"
	},
	"weightkg": 260,
	"tags": [
		"Sub-Legendary"
	],
	"eggGroups": [
		"Undiscovered"
	]
},
virizion: {
	"num": -640,
	"name": "Virizion",
	"types": [
		"Grass",
		"Fighting"
	],
	"gender": "N",
	"baseStats": {
		"hp": 91,
		"atk": 90,
		"def": 72,
		"spa": 109,
		"spd": 109,
		"spe": 108
	},
	"abilities": {
		"0": "Justified"
	},
	"weightkg": 200,
	"tags": [
		"Sub-Legendary"
	],
	"eggGroups": [
		"Undiscovered"
	]
},
tornadus: {
	"num": -641,
	"name": "Tornadus",
	"baseForme": "Incarnate",
	"types": [
		"Flying"
	],
	"gender": "M",
	"baseStats": {
		"hp": 79,
		"atk": 115,
		"def": 70,
		"spa": 102,
		"spd": 102,
		"spe": 111
	},
	"abilities": {
		"0": "Prankster",
		"H": "Defiant"
	},
	"weightkg": 63,
	"tags": [
		"Sub-Legendary"
	],
	"eggGroups": [
		"Undiscovered"
	],
	"otherFormes": [
		"Tornadus-Therian"
	],
	"formeOrder": [
		"Tornadus",
		"Tornadus-Therian"
	]
},
tornadustherian: {
	"num": -641,
	"name": "Tornadus-Therian",
	"baseSpecies": "Tornadus",
	"forme": "Therian",
	"types": [
		"Flying"
	],
	"gender": "M",
	"baseStats": {
		"hp": 79,
		"atk": 100,
		"def": 80,
		"spa": 100,
		"spd": 100,
		"spe": 121
	},
	"abilities": {
		"0": "Regenerator"
	},
	"weightkg": 63,
	"eggGroups": [
		"Undiscovered"
	],
	"changesFrom": "Tornadus"
},
thundurus: {
	"num": -642,
	"name": "Thundurus",
	"baseForme": "Incarnate",
	"types": [
		"Electric",
		"Flying"
	],
	"gender": "M",
	"baseStats": {
		"hp": 79,
		"atk": 115,
		"def": 70,
		"spa": 102,
		"spd": 102,
		"spe": 111
	},
	"abilities": {
		"0": "Prankster",
		"H": "Defiant"
	},
	"weightkg": 61,
	"tags": [
		"Sub-Legendary"
	],
	"eggGroups": [
		"Undiscovered"
	],
	"otherFormes": [
		"Thundurus-Therian"
	],
	"formeOrder": [
		"Thundurus",
		"Thundurus-Therian"
	]
},
thundurustherian: {
	"num": -642,
	"name": "Thundurus-Therian",
	"baseSpecies": "Thundurus",
	"forme": "Therian",
	"types": [
		"Electric",
		"Flying"
	],
	"gender": "M",
	"baseStats": {
		"hp": 79,
		"atk": 105,
		"def": 70,
		"spa": 112,
		"spd": 112,
		"spe": 101
	},
	"abilities": {
		"0": "Volt Absorb"
	},
	"weightkg": 61,
	"eggGroups": [
		"Undiscovered"
	],
	"changesFrom": "Thundurus"
},
reshiram: {
	"num": -643,
	"name": "Reshiram",
	"types": [
		"Dragon",
		"Fire"
	],
	"gender": "N",
	"baseStats": {
		"hp": 100,
		"atk": 120,
		"def": 100,
		"spa": 135,
		"spd": 135,
		"spe": 90
	},
	"abilities": {
		"0": "Turboblaze"
	},
	"weightkg": 330,
	"tags": [
		"Restricted Legendary"
	],
	"eggGroups": [
		"Undiscovered"
	]
},
zekrom: {
	"num": -644,
	"name": "Zekrom",
	"types": [
		"Dragon",
		"Electric"
	],
	"gender": "N",
	"baseStats": {
		"hp": 100,
		"atk": 150,
		"def": 120,
		"spa": 110,
		"spd": 110,
		"spe": 90
	},
	"abilities": {
		"0": "Teravolt"
	},
	"weightkg": 345,
	"tags": [
		"Restricted Legendary"
	],
	"eggGroups": [
		"Undiscovered"
	]
},
landorus: {
	"num": -645,
	"name": "Landorus",
	"baseForme": "Incarnate",
	"types": [
		"Ground",
		"Flying"
	],
	"gender": "M",
	"baseStats": {
		"hp": 89,
		"atk": 125,
		"def": 90,
		"spa": 97,
		"spd": 97,
		"spe": 101
	},
	"abilities": {
		"0": "Sand Force",
		"H": "Sheer Force"
	},
	"weightkg": 68,
	"tags": [
		"Sub-Legendary"
	],
	"eggGroups": [
		"Undiscovered"
	],
	"otherFormes": [
		"Landorus-Therian"
	],
	"formeOrder": [
		"Landorus",
		"Landorus-Therian"
	]
},
landorustherian: {
	"num": -645,
	"name": "Landorus-Therian",
	"baseSpecies": "Landorus",
	"forme": "Therian",
	"types": [
		"Ground",
		"Flying"
	],
	"gender": "M",
	"baseStats": {
		"hp": 89,
		"atk": 145,
		"def": 90,
		"spa": 92,
		"spd": 92,
		"spe": 91
	},
	"abilities": {
		"0": "Intimidate"
	},
	"weightkg": 68,
	"eggGroups": [
		"Undiscovered"
	],
	"changesFrom": "Landorus"
},
kyurem: {
	"num": -646,
	"name": "Kyurem",
	"types": [
		"Dragon",
		"Ice"
	],
	"gender": "N",
	"baseStats": {
		"hp": 125,
		"atk": 130,
		"def": 90,
		"spa": 110,
		"spd": 110,
		"spe": 95
	},
	"abilities": {
		"0": "Pressure"
	},
	"weightkg": 325,
	"eggGroups": [
		"Undiscovered"
	],
	"tags": [
		"Restricted Legendary"
	],
	"otherFormes": [
		"Kyurem-Black",
		"Kyurem-White"
	],
	"formeOrder": [
		"Kyurem",
		"Kyurem-White",
		"Kyurem-Black"
	]
},
kyuremblack: {
	"num": -646,
	"name": "Kyurem-Black",
	"baseSpecies": "Kyurem",
	"forme": "Black",
	"types": [
		"Dragon",
		"Ice"
	],
	"gender": "N",
	"baseStats": {
		"hp": 125,
		"atk": 170,
		"def": 100,
		"spa": 105,
		"spd": 105,
		"spe": 95
	},
	"abilities": {
		"0": "Teravolt"
	},
	"weightkg": 325,
	"eggGroups": [
		"Undiscovered"
	],
	"changesFrom": "Kyurem"
},
kyuremwhite: {
	"num": -646,
	"name": "Kyurem-White",
	"baseSpecies": "Kyurem",
	"forme": "White",
	"types": [
		"Dragon",
		"Ice"
	],
	"gender": "N",
	"baseStats": {
		"hp": 125,
		"atk": 120,
		"def": 90,
		"spa": 135,
		"spd": 135,
		"spe": 95
	},
	"abilities": {
		"0": "Turboblaze"
	},
	"weightkg": 325,
	"eggGroups": [
		"Undiscovered"
	],
	"changesFrom": "Kyurem"
},
keldeo: {
	"num": -647,
	"name": "Keldeo",
	"baseForme": "Ordinary",
	"types": [
		"Water",
		"Fighting"
	],
	"gender": "N",
	"baseStats": {
		"hp": 91,
		"atk": 72,
		"def": 90,
		"spa": 109,
		"spd": 109,
		"spe": 108
	},
	"abilities": {
		"0": "Justified"
	},
	"weightkg": 48.5,
	"eggGroups": [
		"Undiscovered"
	],
	"tags": [
		"Mythical"
	],
	"otherFormes": [
		"Keldeo-Resolute"
	],
	"formeOrder": [
		"Keldeo",
		"Keldeo-Resolute"
	]
},
keldeoresolute: {
	"num": -647,
	"name": "Keldeo-Resolute",
	"baseSpecies": "Keldeo",
	"forme": "Resolute",
	"types": [
		"Water",
		"Fighting"
	],
	"gender": "N",
	"baseStats": {
		"hp": 91,
		"atk": 72,
		"def": 90,
		"spa": 109,
		"spd": 109,
		"spe": 108
	},
	"abilities": {
		"0": "Justified"
	},
	"weightkg": 48.5,
	"eggGroups": [
		"Undiscovered"
	],
	// "requiredMove": "Secret Sword",
	"changesFrom": "Keldeo"
},
meloetta: {
	"num": -648,
	"name": "Meloetta",
	"baseForme": "Aria",
	"types": [
		"Normal",
		"Psychic"
	],
	"gender": "N",
	"baseStats": {
		"hp": 100,
		"atk": 77,
		"def": 77,
		"spa": 128,
		"spd": 128,
		"spe": 90
	},
	"abilities": {
		"0": "Serene Grace"
	},
	"weightkg": 6.5,
	"eggGroups": [
		"Undiscovered"
	],
	"tags": [
		"Mythical"
	],
	"otherFormes": [
		"Meloetta-Pirouette"
	],
	"formeOrder": [
		"Meloetta",
		"Meloetta-Pirouette"
	]
},
meloettapirouette: {
	"num": -648,
	"name": "Meloetta-Pirouette",
	"baseSpecies": "Meloetta",
	"forme": "Pirouette",
	"types": [
		"Normal",
		"Fighting"
	],
	"gender": "N",
	"baseStats": {
		"hp": 100,
		"atk": 128,
		"def": 90,
		"spa": 77,
		"spd": 77,
		"spe": 128
	},
	"abilities": {
		"0": "Serene Grace"
	},
	"weightkg": 6.5,
	"eggGroups": [
		"Undiscovered"
	],
	// "requiredMove": "Relic Song",
	"battleOnly": "Meloetta"
},
genesect: {
	"num": -649,
	"name": "Genesect",
	"types": [
		"Bug",
		"Rock"
	],
	"gender": "N",
	"baseStats": {
		"hp": 71,
		"atk": 120,
		"def": 95,
		"spa": 107,
		"spd": 107,
		"spe": 99
	},
	"abilities": {
		"0": "Download"
	},
	"weightkg": 82.5,
	"eggGroups": [
		"Undiscovered"
	],
	"tags": [
		"Mythical"
	],
	"otherFormes": [
		"Genesect-Douse",
		"Genesect-Shock",
		"Genesect-Burn",
		"Genesect-Chill"
	],
	"formeOrder": [
		"Genesect",
		"Genesect-Douse",
		"Genesect-Shock",
		"Genesect-Burn",
		"Genesect-Chill"
	]
},
genesectdouse: {
	"num": -649,
	"name": "Genesect-Douse",
	"baseSpecies": "Genesect",
	"forme": "Douse",
	"types": [
		"Bug",
		"Rock"
	],
	"gender": "N",
	"baseStats": {
		"hp": 71,
		"atk": 120,
		"def": 95,
		"spa": 107,
		"spd": 107,
		"spe": 99
	},
	"abilities": {
		"0": "Download"
	},
	"weightkg": 82.5,
	"eggGroups": [
		"Undiscovered"
	],
	// "requiredItem": "Douse Drive",
	"changesFrom": "Genesect"
},
genesectshock: {
	"num": -649,
	"name": "Genesect-Shock",
	"baseSpecies": "Genesect",
	"forme": "Shock",
	"types": [
		"Bug",
		"Rock"
	],
	"gender": "N",
	"baseStats": {
		"hp": 71,
		"atk": 120,
		"def": 95,
		"spa": 107,
		"spd": 107,
		"spe": 99
	},
	"abilities": {
		"0": "Download"
	},
	"weightkg": 82.5,
	"eggGroups": [
		"Undiscovered"
	],
	// "requiredItem": "Shock Drive",
	"changesFrom": "Genesect"
},
genesectburn: {
	"num": -649,
	"name": "Genesect-Burn",
	"baseSpecies": "Genesect",
	"forme": "Burn",
	"types": [
		"Bug",
		"Rock"
	],
	"gender": "N",
	"baseStats": {
		"hp": 71,
		"atk": 120,
		"def": 95,
		"spa": 107,
		"spd": 107,
		"spe": 99
	},
	"abilities": {
		"0": "Download"
	},
	"weightkg": 82.5,
	"eggGroups": [
		"Undiscovered"
	],
	// "requiredItem": "Burn Drive",
	"changesFrom": "Genesect"
},
genesectchill: {
	"num": -649,
	"name": "Genesect-Chill",
	"baseSpecies": "Genesect",
	"forme": "Chill",
	"types": [
		"Bug",
		"Rock"
	],
	"gender": "N",
	"baseStats": {
		"hp": 71,
		"atk": 120,
		"def": 95,
		"spa": 107,
		"spd": 107,
		"spe": 99
	},
	"abilities": {
		"0": "Download"
	},
	"weightkg": 82.5,
	"eggGroups": [
		"Undiscovered"
	],
	// "requiredItem": "Chill Drive",
	"changesFrom": "Genesect"
},
chespin: {
	"num": -650,
	"name": "Chespin",
	"types": [
		"Grass"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 56,
		"atk": 61,
		"def": 65,
		"spa": 46,
		"spd": 46,
		"spe": 38
	},
	"abilities": {
		"0": "Overgrow",
		"H": "Bulletproof"
	},
	"weightkg": 9,
	"evos": [
		"Quilladin"
	],
	"eggGroups": [
		"Field"
	]
},
quilladin: {
	"num": -651,
	"name": "Quilladin",
	"types": [
		"Grass"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 61,
		"atk": 78,
		"def": 95,
		"spa": 57,
		"spd": 57,
		"spe": 57
	},
	"abilities": {
		"0": "Overgrow",
		"H": "Bulletproof"
	},
	"weightkg": 29,
	"prevo": "Chespin",
	"evoLevel": 16,
	"evos": [
		"Chesnaught"
	],
	"eggGroups": [
		"Field"
	]
},
chesnaught: {
	"num": -652,
	"name": "Chesnaught",
	"types": [
		"Grass",
		"Fighting"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 88,
		"atk": 107,
		"def": 122,
		"spa": 74,
		"spd": 74,
		"spe": 64
	},
	"abilities": {
		"0": "Overgrow",
		"H": "Bulletproof"
	},
	"weightkg": 90,
	"prevo": "Quilladin",
	"evoLevel": 36,
	"eggGroups": [
		"Field"
	]
},
fennekin: {
	"num": -653,
	"name": "Fennekin",
	"types": [
		"Fire"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 40,
		"atk": 45,
		"def": 40,
		"spa": 61,
		"spd": 61,
		"spe": 60
	},
	"abilities": {
		"0": "Blaze",
		"H": "Magician"
	},
	"weightkg": 9.4,
	"evos": [
		"Braixen"
	],
	"eggGroups": [
		"Field"
	]
},
braixen: {
	"num": -654,
	"name": "Braixen",
	"types": [
		"Fire"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 59,
		"atk": 59,
		"def": 58,
		"spa": 80,
		"spd": 80,
		"spe": 73
	},
	"abilities": {
		"0": "Blaze",
		"H": "Magician"
	},
	"weightkg": 14.5,
	"prevo": "Fennekin",
	"evoLevel": 16,
	"evos": [
		"Delphox"
	],
	"eggGroups": [
		"Field"
	]
},
delphox: {
	"num": -655,
	"name": "Delphox",
	"types": [
		"Fire",
		"Psychic"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 75,
		"atk": 69,
		"def": 72,
		"spa": 107,
		"spd": 107,
		"spe": 104
	},
	"abilities": {
		"0": "Blaze",
		"H": "Magician"
	},
	"weightkg": 39,
	"prevo": "Braixen",
	"evoLevel": 36,
	"eggGroups": [
		"Field"
	]
},
froakie: {
	"num": -656,
	"name": "Froakie",
	"types": [
		"Water"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 41,
		"atk": 56,
		"def": 40,
		"spa": 53,
		"spd": 53,
		"spe": 71
	},
	"abilities": {
		"0": "Torrent",
		"H": "Protean"
	},
	"weightkg": 7,
	"evos": [
		"Frogadier"
	],
	"eggGroups": [
		"Water 1"
	]
},
frogadier: {
	"num": -657,
	"name": "Frogadier",
	"types": [
		"Water"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 54,
		"atk": 63,
		"def": 52,
		"spa": 69,
		"spd": 69,
		"spe": 97
	},
	"abilities": {
		"0": "Torrent",
		"H": "Protean"
	},
	"weightkg": 10.9,
	"prevo": "Froakie",
	"evoLevel": 16,
	"evos": [
		"Greninja"
	],
	"eggGroups": [
		"Water 1"
	]
},
greninja: {
	"num": -658,
	"name": "Greninja",
	"types": [
		"Water",
		"Normal"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 72,
		"atk": 95,
		"def": 67,
		"spa": 87,
		"spd": 87,
		"spe": 122
	},
	"abilities": {
		"0": "Torrent",
		"H": "Protean",
		"S": "Battle Bond"
	},
	"weightkg": 40,
	"prevo": "Frogadier",
	"evoLevel": 36,
	"eggGroups": [
		"Water 1"
	],
	"otherFormes": [
		"Greninja-Ash"
	],
	"formeOrder": [
		"Greninja",
		"Greninja",
		"Greninja-Ash"
	]
},
greninjaash: {
	"num": -658,
	"name": "Greninja-Ash",
	"baseSpecies": "Greninja",
	"forme": "Ash",
	"types": [
		"Water",
		"Normal"
	],
	"gender": "M",
	"baseStats": {
		"hp": 72,
		"atk": 145,
		"def": 67,
		"spa": 112,
		"spd": 112,
		"spe": 132
	},
	"abilities": {
		"0": "Battle Bond"
	},
	"weightkg": 40,
	"eggGroups": [
		"Undiscovered"
	],
	// "requiredAbility": "Battle Bond",
	"battleOnly": "Greninja",
	"gen": 7
},
bunnelby: {
	"num": -659,
	"name": "Bunnelby",
	"types": [
		"Normal"
	],
	"baseStats": {
		"hp": 38,
		"atk": 36,
		"def": 38,
		"spa": 34,
		"spd": 34,
		"spe": 57
	},
	"abilities": {
		"0": "Pickup",
		"1": "Cheek Pouch",
		"H": "Huge Power"
	},
	"weightkg": 5,
	"evos": [
		"Diggersby"
	],
	"eggGroups": [
		"Field"
	]
},
diggersby: {
	"num": -660,
	"name": "Diggersby",
	"types": [
		"Normal",
		"Ground"
	],
	"baseStats": {
		"hp": 85,
		"atk": 56,
		"def": 77,
		"spa": 63,
		"spd": 63,
		"spe": 78
	},
	"abilities": {
		"0": "Pickup",
		"1": "Cheek Pouch",
		"H": "Huge Power"
	},
	"weightkg": 42.4,
	"prevo": "Bunnelby",
	"evoLevel": 20,
	"eggGroups": [
		"Field"
	]
},
fletchling: {
	"num": -661,
	"name": "Fletchling",
	"types": [
		"Normal",
		"Flying"
	],
	"baseStats": {
		"hp": 45,
		"atk": 50,
		"def": 43,
		"spa": 39,
		"spd": 39,
		"spe": 62
	},
	"abilities": {
		"0": "Big Pecks",
		"H": "Gale Wings"
	},
	"weightkg": 1.7,
	"evos": [
		"Fletchinder"
	],
	"eggGroups": [
		"Flying"
	]
},
fletchinder: {
	"num": -662,
	"name": "Fletchinder",
	"types": [
		"Fire",
		"Flying"
	],
	"baseStats": {
		"hp": 62,
		"atk": 73,
		"def": 55,
		"spa": 54,
		"spd": 54,
		"spe": 84
	},
	"abilities": {
		"0": "Flame Body",
		"H": "Gale Wings"
	},
	"weightkg": 16,
	"prevo": "Fletchling",
	"evoLevel": 17,
	"evos": [
		"Talonflame"
	],
	"eggGroups": [
		"Flying"
	]
},
talonflame: {
	"num": -663,
	"name": "Talonflame",
	"types": [
		"Fire",
		"Flying"
	],
	"baseStats": {
		"hp": 78,
		"atk": 81,
		"def": 71,
		"spa": 71,
		"spd": 71,
		"spe": 126
	},
	"abilities": {
		"0": "Flame Body",
		"H": "Gale Wings"
	},
	"weightkg": 24.5,
	"prevo": "Fletchinder",
	"evoLevel": 35,
	"eggGroups": [
		"Flying"
	]
},
scatterbug: {
	"num": -664,
	"name": "Scatterbug",
	"types": [
		"Bug"
	],
	"baseStats": {
		"hp": 38,
		"atk": 35,
		"def": 40,
		"spa": 26,
		"spd": 26,
		"spe": 35
	},
	"abilities": {
		"0": "Shield Dust",
		"1": "Compound Eyes",
		"H": "Friend Guard"
	},
	"weightkg": 2.5,
	"evos": [
		"Spewpa"
	],
	"eggGroups": [
		"Bug"
	]
},
spewpa: {
	"num": -665,
	"name": "Spewpa",
	"types": [
		"Bug"
	],
	"baseStats": {
		"hp": 45,
		"atk": 22,
		"def": 60,
		"spa": 28,
		"spd": 28,
		"spe": 29
	},
	"abilities": {
		"0": "Shed Skin",
		"H": "Friend Guard"
	},
	"weightkg": 8.4,
	"prevo": "Scatterbug",
	"evoLevel": 9,
	"evos": [
		"Vivillon"
	],
	"eggGroups": [
		"Bug"
	]
},
vivillon: {
	"num": -666,
	"name": "Vivillon",
	"baseForme": "Meadow",
	"types": [
		"Bug",
		"Flying"
	],
	"baseStats": {
		"hp": 80,
		"atk": 52,
		"def": 50,
		"spa": 70,
		"spd": 70,
		"spe": 89
	},
	"abilities": {
		"0": "Shield Dust",
		"1": "Compound Eyes",
		"H": "Friend Guard"
	},
	"weightkg": 17,
	"prevo": "Spewpa",
	"evoLevel": 12,
	"eggGroups": [
		"Bug"
	],
	"otherFormes": [
		"Vivillon-Fancy",
		"Vivillon-Pokeball"
	],
	"cosmeticFormes": [
		"Vivillon-Archipelago",
		"Vivillon-Continental",
		"Vivillon-Elegant",
		"Vivillon-Garden",
		"Vivillon-High Plains",
		"Vivillon-Icy Snow",
		"Vivillon-Jungle",
		"Vivillon-Marine",
		"Vivillon-Modern",
		"Vivillon-Monsoon",
		"Vivillon-Ocean",
		"Vivillon-Polar",
		"Vivillon-River",
		"Vivillon-Sandstorm",
		"Vivillon-Savanna",
		"Vivillon-Sun",
		"Vivillon-Tundra"
	],
	"formeOrder": [
		"Vivillon-Icy Snow",
		"Vivillon-Polar",
		"Vivillon-Tundra",
		"Vivillon-Continental",
		"Vivillon-Garden",
		"Vivillon-Elegant",
		"Vivillon",
		"Vivillon-Modern",
		"Vivillon-Marine",
		"Vivillon-Archipelago",
		"Vivillon-High Plains",
		"Vivillon-Sandstorm",
		"Vivillon-River",
		"Vivillon-Monsoon",
		"Vivillon-Savanna",
		"Vivillon-Sun",
		"Vivillon-Ocean",
		"Vivillon-Jungle",
		"Vivillon-Fancy",
		"Vivillon-Pokeball"
	]
},
vivillonfancy: {
	"num": -666,
	"name": "Vivillon-Fancy",
	"baseSpecies": "Vivillon",
	"forme": "Fancy",
	"types": [
		"Bug",
		"Flying"
	],
	"baseStats": {
		"hp": 80,
		"atk": 52,
		"def": 50,
		"spa": 70,
		"spd": 70,
		"spe": 89
	},
	"abilities": {
		"0": "Shield Dust",
		"1": "Compound Eyes"
	},
	"weightkg": 17,
	"eggGroups": [
		"Bug"
	]
},
vivillonpokeball: {
	"num": -666,
	"name": "Vivillon-Pokeball",
	"baseSpecies": "Vivillon",
	"forme": "Pokeball",
	"types": [
		"Bug",
		"Flying"
	],
	"baseStats": {
		"hp": 80,
		"atk": 52,
		"def": 50,
		"spa": 70,
		"spd": 70,
		"spe": 89
	},
	"abilities": {
		"0": "Shield Dust",
		"1": "Compound Eyes"
	},
	"weightkg": 17,
	"eggGroups": [
		"Bug"
	]
},
litleo: {
	"num": -667,
	"name": "Litleo",
	"types": [
		"Fire",
		"Normal"
	],
	"genderRatio": {
		"M": 0.125,
		"F": 0.875
	},
	"baseStats": {
		"hp": 62,
		"atk": 50,
		"def": 58,
		"spa": 63,
		"spd": 63,
		"spe": 72
	},
	"abilities": {
		"0": "Rivalry",
		"1": "Unnerve",
		"H": "Moxie"
	},
	"weightkg": 13.5,
	"evos": [
		"Pyroar"
	],
	"eggGroups": [
		"Field"
	]
},
pyroar: {
	"num": -668,
	"name": "Pyroar",
	"types": [
		"Fire",
		"Normal"
	],
	"genderRatio": {
		"M": 0.125,
		"F": 0.875
	},
	"baseStats": {
		"hp": 86,
		"atk": 68,
		"def": 72,
		"spa": 87,
		"spd": 87,
		"spe": 106
	},
	"abilities": {
		"0": "Rivalry",
		"1": "Unnerve",
		"H": "Moxie"
	},
	"weightkg": 81.5,
	"prevo": "Litleo",
	"evoLevel": 35,
	"eggGroups": [
		"Field"
	]
},
flabebe: {
	"num": -669,
	"name": "Flabébé",
	"baseForme": "Red",
	"types": [
		"Normal"
	],
	"gender": "F",
	"baseStats": {
		"hp": 44,
		"atk": 38,
		"def": 39,
		"spa": 70,
		"spd": 70,
		"spe": 42
	},
	"abilities": {
		"0": "Flower Veil",
		"H": "Symbiosis"
	},
	"weightkg": 0.1,
	"evos": [
		"Floette"
	],
	"eggGroups": [
		"Fairy"
	],
	"cosmeticFormes": [
		"Flabébé-Blue",
		"Flabébé-Orange",
		"Flabébé-White",
		"Flabébé-Yellow"
	],
	"formeOrder": [
		"Flabébé",
		"Flabébé-Blue",
		"Flabébé-Orange",
		"Flabébé-White",
		"Flabébé-Yellow"
	]
},
floette: {
	"num": -670,
	"name": "Floette",
	"baseForme": "Red",
	"types": [
		"Normal"
	],
	"gender": "F",
	"baseStats": {
		"hp": 54,
		"atk": 45,
		"def": 47,
		"spa": 86,
		"spd": 86,
		"spe": 52
	},
	"abilities": {
		"0": "Flower Veil",
		"H": "Symbiosis"
	},
	"weightkg": 0.9,
	"prevo": "Flabébé",
	"evoLevel": 19,
	"evos": [
		"Florges"
	],
	"eggGroups": [
		"Fairy"
	],
	"otherFormes": [
		"Floette-Eternal"
	],
	"cosmeticFormes": [
		"Floette-Blue",
		"Floette-Orange",
		"Floette-White",
		"Floette-Yellow"
	],
	"formeOrder": [
		"Floette",
		"Floette-Blue",
		"Floette-Orange",
		"Floette-White",
		"Floette-Yellow",
		"Floette-Eternal"
	]
},
floetteeternal: {
	"num": -670,
	"name": "Floette-Eternal",
	"baseSpecies": "Floette",
	"forme": "Eternal",
	"types": [
		"Normal"
	],
	"gender": "F",
	"baseStats": {
		"hp": 74,
		"atk": 65,
		"def": 67,
		"spa": 126,
		"spd": 126,
		"spe": 92
	},
	"abilities": {
		"0": "Flower Veil"
	},
	"weightkg": 0.9,
	"eggGroups": [
		"Undiscovered"
	]
},
florges: {
	"num": -671,
	"name": "Florges",
	"baseForme": "Red",
	"types": [
		"Normal"
	],
	"gender": "F",
	"baseStats": {
		"hp": 78,
		"atk": 65,
		"def": 68,
		"spa": 133,
		"spd": 133,
		"spe": 75
	},
	"abilities": {
		"0": "Flower Veil",
		"H": "Symbiosis"
	},
	"weightkg": 10,
	"prevo": "Floette",
	"evoType": "useItem",
	"evoItem": "Shiny Stone",
	"eggGroups": [
		"Fairy"
	],
	"cosmeticFormes": [
		"Florges-Blue",
		"Florges-Orange",
		"Florges-White",
		"Florges-Yellow"
	],
	"formeOrder": [
		"Florges",
		"Florges-Blue",
		"Florges-Orange",
		"Florges-White",
		"Florges-Yellow"
	]
},
skiddo: {
	"num": -672,
	"name": "Skiddo",
	"types": [
		"Grass"
	],
	"baseStats": {
		"hp": 66,
		"atk": 65,
		"def": 48,
		"spa": 59,
		"spd": 59,
		"spe": 52
	},
	"abilities": {
		"0": "Sap Sipper",
		"H": "Grass Pelt"
	},
	"weightkg": 31,
	"evos": [
		"Gogoat"
	],
	"eggGroups": [
		"Field"
	]
},
gogoat: {
	"num": -673,
	"name": "Gogoat",
	"types": [
		"Grass"
	],
	"baseStats": {
		"hp": 123,
		"atk": 100,
		"def": 62,
		"spa": 89,
		"spd": 89,
		"spe": 68
	},
	"abilities": {
		"0": "Sap Sipper",
		"H": "Grass Pelt"
	},
	"weightkg": 91,
	"prevo": "Skiddo",
	"evoLevel": 32,
	"eggGroups": [
		"Field"
	]
},
pancham: {
	"num": -674,
	"name": "Pancham",
	"types": [
		"Fighting"
	],
	"baseStats": {
		"hp": 67,
		"atk": 82,
		"def": 62,
		"spa": 47,
		"spd": 47,
		"spe": 43
	},
	"abilities": {
		"0": "Iron Fist",
		"1": "Mold Breaker",
		"H": "Scrappy"
	},
	"weightkg": 8,
	"evos": [
		"Pangoro"
	],
	"eggGroups": [
		"Field",
		"Human-Like"
	]
},
pangoro: {
	"num": -675,
	"name": "Pangoro",
	"types": [
		"Fighting",
		"Normal"
	],
	"baseStats": {
		"hp": 95,
		"atk": 124,
		"def": 78,
		"spa": 70,
		"spd": 70,
		"spe": 58
	},
	"abilities": {
		"0": "Iron Fist",
		"1": "Mold Breaker",
		"H": "Scrappy"
	},
	"weightkg": 136,
	"prevo": "Pancham",
	"evoLevel": 32,
	"evoCondition": "with a Dark-type in the party",
	"eggGroups": [
		"Field",
		"Human-Like"
	]
},
furfrou: {
	"num": -676,
	"name": "Furfrou",
	"baseForme": "Natural",
	"types": [
		"Normal"
	],
	"baseStats": {
		"hp": 75,
		"atk": 80,
		"def": 60,
		"spa": 77,
		"spd": 77,
		"spe": 102
	},
	"abilities": {
		"0": "Fur Coat"
	},
	"weightkg": 28,
	"eggGroups": [
		"Field"
	],
	"cosmeticFormes": [
		"Furfrou-Dandy",
		"Furfrou-Debutante",
		"Furfrou-Diamond",
		"Furfrou-Heart",
		"Furfrou-Kabuki",
		"Furfrou-La Reine",
		"Furfrou-Matron",
		"Furfrou-Pharaoh",
		"Furfrou-Star"
	],
	"formeOrder": [
		"Furfrou",
		"Furfrou-Heart",
		"Furfrou-Star",
		"Furfrou-Diamond",
		"Furfrou-Debutante",
		"Furfrou-Matron",
		"Furfrou-Dandy",
		"Furfrou-La Reine",
		"Furfrou-Kabuki",
		"Furfrou-Pharaoh"
	]
},
espurr: {
	"num": -677,
	"name": "Espurr",
	"types": [
		"Psychic"
	],
	"baseStats": {
		"hp": 62,
		"atk": 48,
		"def": 54,
		"spa": 61,
		"spd": 61,
		"spe": 68
	},
	"abilities": {
		"0": "Keen Eye",
		"1": "Infiltrator",
		"H": "Own Tempo"
	},
	"weightkg": 3.5,
	"evos": [
		"Meowstic",
		"Meowstic-F"
	],
	"eggGroups": [
		"Field"
	]
},
meowstic: {
	"num": -678,
	"name": "Meowstic",
	"baseForme": "M",
	"types": [
		"Psychic"
	],
	"gender": "M",
	"baseStats": {
		"hp": 74,
		"atk": 48,
		"def": 76,
		"spa": 82,
		"spd": 82,
		"spe": 104
	},
	"abilities": {
		"0": "Keen Eye",
		"1": "Infiltrator",
		"H": "Prankster"
	},
	"weightkg": 8.5,
	"prevo": "Espurr",
	"evoLevel": 25,
	"eggGroups": [
		"Field"
	],
	"otherFormes": [
		"Meowstic-F"
	],
	"formeOrder": [
		"Meowstic",
		"Meowstic-F"
	]
},
meowsticf: {
	"num": -678,
	"name": "Meowstic-F",
	"baseSpecies": "Meowstic",
	"forme": "F",
	"types": [
		"Psychic"
	],
	"gender": "F",
	"baseStats": {
		"hp": 74,
		"atk": 48,
		"def": 76,
		"spa": 82,
		"spd": 82,
		"spe": 104
	},
	"abilities": {
		"0": "Keen Eye",
		"1": "Infiltrator",
		"H": "Competitive"
	},
	"weightkg": 8.5,
	"prevo": "Espurr",
	"evoLevel": 25,
	"eggGroups": [
		"Field"
	]
},
honedge: {
	"num": -679,
	"name": "Honedge",
	"types": [
		"Rock",
		"Ghost"
	],
	"baseStats": {
		"hp": 45,
		"atk": 80,
		"def": 100,
		"spa": 36,
		"spd": 36,
		"spe": 28
	},
	"abilities": {
		"0": "No Guard"
	},
	"weightkg": 2,
	"evos": [
		"Doublade"
	],
	"eggGroups": [
		"Mineral"
	]
},
doublade: {
	"num": -680,
	"name": "Doublade",
	"types": [
		"Rock",
		"Ghost"
	],
	"baseStats": {
		"hp": 59,
		"atk": 110,
		"def": 150,
		"spa": 47,
		"spd": 47,
		"spe": 35
	},
	"abilities": {
		"0": "No Guard"
	},
	"weightkg": 4.5,
	"prevo": "Honedge",
	"evoLevel": 35,
	"evos": [
		"Aegislash"
	],
	"eggGroups": [
		"Mineral"
	]
},
aegislash: {
	"num": -681,
	"name": "Aegislash",
	"baseForme": "Shield",
	"types": [
		"Rock",
		"Ghost"
	],
	"baseStats": {
		"hp": 60,
		"atk": 50,
		"def": 140,
		"spa": 95,
		"spd": 95,
		"spe": 60
	},
	"abilities": {
		"0": "Stance Change"
	},
	"weightkg": 53,
	"prevo": "Doublade",
	"evoType": "useItem",
	"evoItem": "Dusk Stone",
	"eggGroups": [
		"Mineral"
	],
	"otherFormes": [
		"Aegislash-Blade"
	],
	"formeOrder": [
		"Aegislash",
		"Aegislash-Blade"
	]
},
aegislashblade: {
	"num": -681,
	"name": "Aegislash-Blade",
	"baseSpecies": "Aegislash",
	"forme": "Blade",
	"types": [
		"Rock",
		"Ghost"
	],
	"baseStats": {
		"hp": 60,
		"atk": 140,
		"def": 50,
		"spa": 95,
		"spd": 95,
		"spe": 60
	},
	"abilities": {
		"0": "Stance Change"
	},
	"weightkg": 53,
	"eggGroups": [
		"Mineral"
	],
	// "requiredAbility": "Stance Change",
	"battleOnly": "Aegislash"
},
spritzee: {
	"num": -682,
	"name": "Spritzee",
	"types": [
		"Normal"
	],
	"baseStats": {
		"hp": 78,
		"atk": 52,
		"def": 60,
		"spa": 64,
		"spd": 64,
		"spe": 23
	},
	"abilities": {
		"0": "Healer",
		"H": "Aroma Veil"
	},
	"weightkg": 0.5,
	"evos": [
		"Aromatisse"
	],
	"eggGroups": [
		"Fairy"
	]
},
aromatisse: {
	"num": -683,
	"name": "Aromatisse",
	"types": [
		"Normal"
	],
	"baseStats": {
		"hp": 101,
		"atk": 72,
		"def": 72,
		"spa": 94,
		"spd": 94,
		"spe": 29
	},
	"abilities": {
		"0": "Healer",
		"H": "Aroma Veil"
	},
	"weightkg": 15.5,
	"prevo": "Spritzee",
	"evoType": "trade",
	"evoItem": "Sachet",
	"eggGroups": [
		"Fairy"
	]
},
swirlix: {
	"num": -684,
	"name": "Swirlix",
	"types": [
		"Normal"
	],
	"baseStats": {
		"hp": 62,
		"atk": 48,
		"def": 66,
		"spa": 58,
		"spd": 58,
		"spe": 49
	},
	"abilities": {
		"0": "Sweet Veil",
		"H": "Unburden"
	},
	"weightkg": 3.5,
	"evos": [
		"Slurpuff"
	],
	"eggGroups": [
		"Fairy"
	]
},
slurpuff: {
	"num": -685,
	"name": "Slurpuff",
	"types": [
		"Normal"
	],
	"baseStats": {
		"hp": 82,
		"atk": 80,
		"def": 86,
		"spa": 80,
		"spd": 80,
		"spe": 72
	},
	"abilities": {
		"0": "Sweet Veil",
		"H": "Unburden"
	},
	"weightkg": 5,
	"prevo": "Swirlix",
	"evoType": "trade",
	"evoItem": "Whipped Dream",
	"eggGroups": [
		"Fairy"
	]
},
inkay: {
	"num": -686,
	"name": "Inkay",
	"types": [
		"Normal",
		"Psychic"
	],
	"baseStats": {
		"hp": 53,
		"atk": 54,
		"def": 53,
		"spa": 41,
		"spd": 41,
		"spe": 45
	},
	"abilities": {
		"0": "Contrary",
		"1": "Suction Cups",
		"H": "Infiltrator"
	},
	"weightkg": 3.5,
	"evos": [
		"Malamar"
	],
	"eggGroups": [
		"Water 1",
		"Water 2"
	]
},
malamar: {
	"num": -687,
	"name": "Malamar",
	"types": [
		"Normal",
		"Psychic"
	],
	"baseStats": {
		"hp": 86,
		"atk": 92,
		"def": 88,
		"spa": 71,
		"spd": 71,
		"spe": 73
	},
	"abilities": {
		"0": "Contrary",
		"1": "Suction Cups",
		"H": "Infiltrator"
	},
	"weightkg": 47,
	"prevo": "Inkay",
	"evoLevel": 30,
	"evoCondition": "with the console turned upside-down",
	"eggGroups": [
		"Water 1",
		"Water 2"
	]
},
binacle: {
	"num": -688,
	"name": "Binacle",
	"types": [
		"Rock",
		"Water"
	],
	"baseStats": {
		"hp": 42,
		"atk": 52,
		"def": 67,
		"spa": 47,
		"spd": 47,
		"spe": 50
	},
	"abilities": {
		"0": "Tough Claws",
		"1": "Sniper",
		"H": "Pickpocket"
	},
	"weightkg": 31,
	"evos": [
		"Barbaracle"
	],
	"eggGroups": [
		"Water 3"
	]
},
barbaracle: {
	"num": -689,
	"name": "Barbaracle",
	"types": [
		"Rock",
		"Water"
	],
	"baseStats": {
		"hp": 72,
		"atk": 105,
		"def": 115,
		"spa": 70,
		"spd": 70,
		"spe": 68
	},
	"abilities": {
		"0": "Tough Claws",
		"1": "Sniper",
		"H": "Pickpocket"
	},
	"weightkg": 96,
	"prevo": "Binacle",
	"evoLevel": 39,
	"eggGroups": [
		"Water 3"
	]
},
skrelp: {
	"num": -690,
	"name": "Skrelp",
	"types": [
		"Poison",
		"Water"
	],
	"baseStats": {
		"hp": 50,
		"atk": 60,
		"def": 60,
		"spa": 60,
		"spd": 60,
		"spe": 30
	},
	"abilities": {
		"0": "Poison Point",
		"1": "Poison Touch",
		"H": "Adaptability"
	},
	"weightkg": 7.3,
	"evos": [
		"Dragalge"
	],
	"eggGroups": [
		"Water 1",
		"Dragon"
	]
},
dragalge: {
	"num": -691,
	"name": "Dragalge",
	"types": [
		"Poison",
		"Dragon"
	],
	"baseStats": {
		"hp": 65,
		"atk": 75,
		"def": 90,
		"spa": 110,
		"spd": 110,
		"spe": 44
	},
	"abilities": {
		"0": "Poison Point",
		"1": "Poison Touch",
		"H": "Adaptability"
	},
	"weightkg": 81.5,
	"prevo": "Skrelp",
	"evoLevel": 48,
	"eggGroups": [
		"Water 1",
		"Dragon"
	]
},
clauncher: {
	"num": -692,
	"name": "Clauncher",
	"types": [
		"Water"
	],
	"baseStats": {
		"hp": 50,
		"atk": 53,
		"def": 62,
		"spa": 60,
		"spd": 60,
		"spe": 44
	},
	"abilities": {
		"0": "Mega Launcher"
	},
	"weightkg": 8.3,
	"evos": [
		"Clawitzer"
	],
	"eggGroups": [
		"Water 1",
		"Water 3"
	]
},
clawitzer: {
	"num": -693,
	"name": "Clawitzer",
	"types": [
		"Water"
	],
	"baseStats": {
		"hp": 71,
		"atk": 73,
		"def": 88,
		"spa": 104,
		"spd": 104,
		"spe": 59
	},
	"abilities": {
		"0": "Mega Launcher"
	},
	"weightkg": 35.3,
	"prevo": "Clauncher",
	"evoLevel": 37,
	"eggGroups": [
		"Water 1",
		"Water 3"
	]
},
helioptile: {
	"num": -694,
	"name": "Helioptile",
	"types": [
		"Electric",
		"Normal"
	],
	"baseStats": {
		"hp": 44,
		"atk": 38,
		"def": 33,
		"spa": 52,
		"spd": 52,
		"spe": 70
	},
	"abilities": {
		"0": "Dry Skin",
		"1": "Sand Veil",
		"H": "Solar Power"
	},
	"weightkg": 6,
	"evos": [
		"Heliolisk"
	],
	"eggGroups": [
		"Monster",
		"Dragon"
	]
},
heliolisk: {
	"num": -695,
	"name": "Heliolisk",
	"types": [
		"Electric",
		"Normal"
	],
	"baseStats": {
		"hp": 62,
		"atk": 55,
		"def": 52,
		"spa": 101,
		"spd": 101,
		"spe": 109
	},
	"abilities": {
		"0": "Dry Skin",
		"1": "Sand Veil",
		"H": "Solar Power"
	},
	"weightkg": 21,
	"prevo": "Helioptile",
	"evoType": "useItem",
	"evoItem": "Sun Stone",
	"eggGroups": [
		"Monster",
		"Dragon"
	]
},
tyrunt: {
	"num": -696,
	"name": "Tyrunt",
	"types": [
		"Rock",
		"Dragon"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 58,
		"atk": 89,
		"def": 77,
		"spa": 45,
		"spd": 45,
		"spe": 48
	},
	"abilities": {
		"0": "Strong Jaw",
		"H": "Sturdy"
	},
	"weightkg": 26,
	"evos": [
		"Tyrantrum"
	],
	"eggGroups": [
		"Monster",
		"Dragon"
	]
},
tyrantrum: {
	"num": -697,
	"name": "Tyrantrum",
	"types": [
		"Rock",
		"Dragon"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 82,
		"atk": 121,
		"def": 119,
		"spa": 64,
		"spd": 64,
		"spe": 71
	},
	"abilities": {
		"0": "Strong Jaw",
		"H": "Rock Head"
	},
	"weightkg": 270,
	"prevo": "Tyrunt",
	"evoLevel": 39,
	"evoCondition": "during the day",
	"eggGroups": [
		"Monster",
		"Dragon"
	]
},
amaura: {
	"num": -698,
	"name": "Amaura",
	"types": [
		"Rock",
		"Ice"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 77,
		"atk": 59,
		"def": 50,
		"spa": 65,
		"spd": 65,
		"spe": 46
	},
	"abilities": {
		"0": "Refrigerate",
		"H": "Snow Warning"
	},
	"weightkg": 25.2,
	"evos": [
		"Aurorus"
	],
	"eggGroups": [
		"Monster"
	]
},
aurorus: {
	"num": -699,
	"name": "Aurorus",
	"types": [
		"Rock",
		"Ice"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 123,
		"atk": 77,
		"def": 72,
		"spa": 95,
		"spd": 95,
		"spe": 58
	},
	"abilities": {
		"0": "Refrigerate",
		"H": "Snow Warning"
	},
	"weightkg": 225,
	"prevo": "Amaura",
	"evoLevel": 39,
	"evoCondition": "at night",
	"eggGroups": [
		"Monster"
	]
},
sylveon: {
	"num": -700,
	"name": "Sylveon",
	"types": [
		"Normal"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 95,
		"atk": 65,
		"def": 65,
		"spa": 120,
		"spd": 120,
		"spe": 60
	},
	"abilities": {
		"0": "Cute Charm",
		"H": "Pixilate"
	},
	"weightkg": 23.5,
	"prevo": "Eevee",
	"evoType": "levelExtra",
	"evoCondition": "with a Fairy-type move and two levels of Affection",
	"eggGroups": [
		"Field"
	]
},
hawlucha: {
	"num": -701,
	"name": "Hawlucha",
	"types": [
		"Fighting",
		"Flying"
	],
	"baseStats": {
		"hp": 78,
		"atk": 92,
		"def": 75,
		"spa": 68,
		"spd": 68,
		"spe": 118
	},
	"abilities": {
		"0": "Limber",
		"1": "Unburden",
		"H": "Mold Breaker"
	},
	"weightkg": 21.5,
	"eggGroups": [
		"Flying",
		"Human-Like"
	]
},
dedenne: {
	"num": -702,
	"name": "Dedenne",
	"types": [
		"Electric",
		"Normal"
	],
	"baseStats": {
		"hp": 67,
		"atk": 58,
		"def": 57,
		"spa": 74,
		"spd": 74,
		"spe": 101
	},
	"abilities": {
		"0": "Cheek Pouch",
		"1": "Pickup",
		"H": "Plus"
	},
	"weightkg": 2.2,
	"eggGroups": [
		"Field",
		"Fairy"
	]
},
carbink: {
	"num": -703,
	"name": "Carbink",
	"types": [
		"Rock",
		"Normal"
	],
	"gender": "N",
	"baseStats": {
		"hp": 50,
		"atk": 50,
		"def": 150,
		"spa": 100,
		"spd": 100,
		"spe": 50
	},
	"abilities": {
		"0": "Clear Body",
		"H": "Sturdy"
	},
	"weightkg": 5.7,
	"eggGroups": [
		"Fairy",
		"Mineral"
	]
},
goomy: {
	"num": -704,
	"name": "Goomy",
	"types": [
		"Dragon"
	],
	"baseStats": {
		"hp": 45,
		"atk": 50,
		"def": 35,
		"spa": 65,
		"spd": 65,
		"spe": 40
	},
	"abilities": {
		"0": "Sap Sipper",
		"1": "Hydration",
		"H": "Gooey"
	},
	"weightkg": 2.8,
	"evos": [
		"Sliggoo",
		"Sliggoo-Hisui"
	],
	"eggGroups": [
		"Dragon"
	]
},
sliggoo: {
	"num": -705,
	"name": "Sliggoo",
	"types": [
		"Dragon"
	],
	"baseStats": {
		"hp": 68,
		"atk": 75,
		"def": 53,
		"spa": 98,
		"spd": 98,
		"spe": 60
	},
	"abilities": {
		"0": "Sap Sipper",
		"1": "Hydration",
		"H": "Gooey"
	},
	"weightkg": 17.5,
	"prevo": "Goomy",
	"evoLevel": 40,
	"evos": [
		"Goodra"
	],
	"eggGroups": [
		"Dragon"
	],
	"otherFormes": [
		"Sliggoo-Hisui"
	],
	"formeOrder": [
		"Sliggoo",
		"Sliggoo-Hisui"
	]
},
sliggoohisui: {
	"num": -705,
	"name": "Sliggoo-Hisui",
	"baseSpecies": "Sliggoo",
	"forme": "Hisui",
	"types": [
		"Rock",
		"Dragon"
	],
	"baseStats": {
		"hp": 58,
		"atk": 75,
		"def": 83,
		"spa": 98,
		"spd": 98,
		"spe": 40
	},
	"abilities": {
		"0": "Sap Sipper",
		"1": "Overcoat",
		"H": "Gooey"
	},
	"weightkg": 68.5,
	"prevo": "Goomy",
	"evoLevel": 40,
	"evos": [
		"Goodra-Hisui"
	],
	"eggGroups": [
		"Dragon"
	]
},
goodra: {
	"num": -706,
	"name": "Goodra",
	"types": [
		"Dragon"
	],
	"baseStats": {
		"hp": 90,
		"atk": 100,
		"def": 70,
		"spa": 130,
		"spd": 130,
		"spe": 80
	},
	"abilities": {
		"0": "Sap Sipper",
		"1": "Hydration",
		"H": "Gooey"
	},
	"weightkg": 150.5,
	"prevo": "Sliggoo",
	"evoLevel": 50,
	"eggGroups": [
		"Dragon"
	],
	"otherFormes": [
		"Goodra-Hisui"
	],
	"formeOrder": [
		"Goodra",
		"Goodra-Hisui"
	]
},
goodrahisui: {
	"num": -706,
	"name": "Goodra-Hisui",
	"baseSpecies": "Goodra",
	"forme": "Hisui",
	"types": [
		"Rock",
		"Dragon"
	],
	"baseStats": {
		"hp": 80,
		"atk": 100,
		"def": 100,
		"spa": 130,
		"spd": 130,
		"spe": 60
	},
	"abilities": {
		"0": "Sap Sipper",
		"1": "Overcoat",
		"H": "Gooey"
	},
	"weightkg": 334.1,
	"prevo": "Sliggoo-Hisui",
	"evoLevel": 50,
	"eggGroups": [
		"Dragon"
	]
},
klefki: {
	"num": -707,
	"name": "Klefki",
	"types": [
		"Rock",
		"Normal"
	],
	"baseStats": {
		"hp": 57,
		"atk": 80,
		"def": 91,
		"spa": 83,
		"spd": 83,
		"spe": 75
	},
	"abilities": {
		"0": "Prankster",
		"H": "Magician"
	},
	"weightkg": 3,
	"eggGroups": [
		"Mineral"
	]
},
phantump: {
	"num": -708,
	"name": "Phantump",
	"types": [
		"Ghost",
		"Grass"
	],
	"baseStats": {
		"hp": 43,
		"atk": 70,
		"def": 48,
		"spa": 55,
		"spd": 55,
		"spe": 38
	},
	"abilities": {
		"0": "Natural Cure",
		"1": "Frisk",
		"H": "Harvest"
	},
	"weightkg": 7,
	"evos": [
		"Trevenant"
	],
	"eggGroups": [
		"Grass",
		"Amorphous"
	]
},
trevenant: {
	"num": -709,
	"name": "Trevenant",
	"types": [
		"Ghost",
		"Grass"
	],
	"baseStats": {
		"hp": 85,
		"atk": 110,
		"def": 76,
		"spa": 73,
		"spd": 73,
		"spe": 56
	},
	"abilities": {
		"0": "Natural Cure",
		"1": "Frisk",
		"H": "Harvest"
	},
	"weightkg": 71,
	"prevo": "Phantump",
	"evoType": "trade",
	"eggGroups": [
		"Grass",
		"Amorphous"
	]
},
pumpkaboo: {
	"num": -710,
	"name": "Pumpkaboo",
	"baseForme": "Average",
	"types": [
		"Ghost",
		"Grass"
	],
	"baseStats": {
		"hp": 49,
		"atk": 66,
		"def": 70,
		"spa": 49,
		"spd": 49,
		"spe": 51
	},
	"abilities": {
		"0": "Pickup",
		"1": "Frisk",
		"H": "Insomnia"
	},
	"weightkg": 5,
	"evos": [
		"Gourgeist"
	],
	"eggGroups": [
		"Amorphous"
	],
	"otherFormes": [
		"Pumpkaboo-Small",
		"Pumpkaboo-Large",
		"Pumpkaboo-Super"
	],
	"formeOrder": [
		"Pumpkaboo",
		"Pumpkaboo-Small",
		"Pumpkaboo-Large",
		"Pumpkaboo-Super"
	]
},
pumpkaboosmall: {
	"num": -710,
	"name": "Pumpkaboo-Small",
	"baseSpecies": "Pumpkaboo",
	"forme": "Small",
	"types": [
		"Ghost",
		"Grass"
	],
	"baseStats": {
		"hp": 44,
		"atk": 66,
		"def": 70,
		"spa": 49,
		"spd": 49,
		"spe": 56
	},
	"abilities": {
		"0": "Pickup",
		"1": "Frisk",
		"H": "Insomnia"
	},
	"weightkg": 3.5,
	"evos": [
		"Gourgeist-Small"
	],
	"eggGroups": [
		"Amorphous"
	]
},
pumpkaboolarge: {
	"num": -710,
	"name": "Pumpkaboo-Large",
	"baseSpecies": "Pumpkaboo",
	"forme": "Large",
	"types": [
		"Ghost",
		"Grass"
	],
	"baseStats": {
		"hp": 54,
		"atk": 66,
		"def": 70,
		"spa": 49,
		"spd": 49,
		"spe": 46
	},
	"abilities": {
		"0": "Pickup",
		"1": "Frisk",
		"H": "Insomnia"
	},
	"weightkg": 7.5,
	"evos": [
		"Gourgeist-Large"
	],
	"eggGroups": [
		"Amorphous"
	]
},
pumpkaboosuper: {
	"num": -710,
	"name": "Pumpkaboo-Super",
	"baseSpecies": "Pumpkaboo",
	"forme": "Super",
	"types": [
		"Ghost",
		"Grass"
	],
	"baseStats": {
		"hp": 59,
		"atk": 66,
		"def": 70,
		"spa": 49,
		"spd": 49,
		"spe": 41
	},
	"abilities": {
		"0": "Pickup",
		"1": "Frisk",
		"H": "Insomnia"
	},
	"weightkg": 15,
	"evos": [
		"Gourgeist-Super"
	],
	"eggGroups": [
		"Amorphous"
	]
},
gourgeist: {
	"num": -711,
	"name": "Gourgeist",
	"baseForme": "Average",
	"types": [
		"Ghost",
		"Grass"
	],
	"baseStats": {
		"hp": 65,
		"atk": 90,
		"def": 122,
		"spa": 66,
		"spd": 66,
		"spe": 84
	},
	"abilities": {
		"0": "Pickup",
		"1": "Frisk",
		"H": "Insomnia"
	},
	"weightkg": 12.5,
	"prevo": "Pumpkaboo",
	"evoType": "trade",
	"eggGroups": [
		"Amorphous"
	],
	"otherFormes": [
		"Gourgeist-Small",
		"Gourgeist-Large",
		"Gourgeist-Super"
	],
	"formeOrder": [
		"Gourgeist",
		"Gourgeist-Small",
		"Gourgeist-Large",
		"Gourgeist-Super"
	]
},
gourgeistsmall: {
	"num": -711,
	"name": "Gourgeist-Small",
	"baseSpecies": "Gourgeist",
	"forme": "Small",
	"types": [
		"Ghost",
		"Grass"
	],
	"baseStats": {
		"hp": 55,
		"atk": 85,
		"def": 122,
		"spa": 66,
		"spd": 66,
		"spe": 99
	},
	"abilities": {
		"0": "Pickup",
		"1": "Frisk",
		"H": "Insomnia"
	},
	"weightkg": 9.5,
	"prevo": "Pumpkaboo-Small",
	"evoType": "trade",
	"eggGroups": [
		"Amorphous"
	]
},
gourgeistlarge: {
	"num": -711,
	"name": "Gourgeist-Large",
	"baseSpecies": "Gourgeist",
	"forme": "Large",
	"types": [
		"Ghost",
		"Grass"
	],
	"baseStats": {
		"hp": 75,
		"atk": 95,
		"def": 122,
		"spa": 66,
		"spd": 66,
		"spe": 69
	},
	"abilities": {
		"0": "Pickup",
		"1": "Frisk",
		"H": "Insomnia"
	},
	"weightkg": 14,
	"prevo": "Pumpkaboo-Large",
	"evoType": "trade",
	"eggGroups": [
		"Amorphous"
	]
},
gourgeistsuper: {
	"num": -711,
	"name": "Gourgeist-Super",
	"baseSpecies": "Gourgeist",
	"forme": "Super",
	"types": [
		"Ghost",
		"Grass"
	],
	"baseStats": {
		"hp": 85,
		"atk": 100,
		"def": 122,
		"spa": 66,
		"spd": 66,
		"spe": 54
	},
	"abilities": {
		"0": "Pickup",
		"1": "Frisk",
		"H": "Insomnia"
	},
	"weightkg": 39,
	"prevo": "Pumpkaboo-Super",
	"evoType": "trade",
	"eggGroups": [
		"Amorphous"
	]
},
bergmite: {
	"num": -712,
	"name": "Bergmite",
	"types": [
		"Ice"
	],
	"baseStats": {
		"hp": 55,
		"atk": 69,
		"def": 85,
		"spa": 33,
		"spd": 33,
		"spe": 28
	},
	"abilities": {
		"0": "Own Tempo",
		"1": "Ice Body",
		"H": "Sturdy"
	},
	"weightkg": 99.5,
	"evos": [
		"Avalugg",
		"Avalugg-Hisui"
	],
	"eggGroups": [
		"Monster",
		"Mineral"
	]
},
avalugg: {
	"num": -713,
	"name": "Avalugg",
	"types": [
		"Ice"
	],
	"baseStats": {
		"hp": 95,
		"atk": 117,
		"def": 184,
		"spa": 45,
		"spd": 45,
		"spe": 28
	},
	"abilities": {
		"0": "Own Tempo",
		"1": "Ice Body",
		"H": "Sturdy"
	},
	"weightkg": 505,
	"prevo": "Bergmite",
	"evoLevel": 37,
	"eggGroups": [
		"Monster",
		"Mineral"
	],
	"otherFormes": [
		"Avalugg-Hisui"
	],
	"formeOrder": [
		"Avalugg",
		"Avalugg-Hisui"
	]
},
avalugghisui: {
	"num": -713,
	"name": "Avalugg-Hisui",
	"baseSpecies": "Avalugg",
	"forme": "Hisui",
	"types": [
		"Ice",
		"Rock"
	],
	"baseStats": {
		"hp": 95,
		"atk": 127,
		"def": 184,
		"spa": 35,
		"spd": 35,
		"spe": 38
	},
	"abilities": {
		"0": "Strong Jaw",
		"1": "Ice Body",
		"H": "Sturdy"
	},
	"weightkg": 262.4,
	"prevo": "Bergmite",
	"evoLevel": 37,
	"eggGroups": [
		"Monster",
		"Mineral"
	]
},
noibat: {
	"num": -714,
	"name": "Noibat",
	"types": [
		"Flying",
		"Dragon"
	],
	"baseStats": {
		"hp": 40,
		"atk": 30,
		"def": 35,
		"spa": 42,
		"spd": 42,
		"spe": 55
	},
	"abilities": {
		"0": "Frisk",
		"1": "Infiltrator",
		"H": "Telepathy"
	},
	"weightkg": 8,
	"evos": [
		"Noivern"
	],
	"eggGroups": [
		"Flying",
		"Dragon"
	]
},
noivern: {
	"num": -715,
	"name": "Noivern",
	"types": [
		"Flying",
		"Dragon"
	],
	"baseStats": {
		"hp": 85,
		"atk": 70,
		"def": 80,
		"spa": 88,
		"spd": 88,
		"spe": 123
	},
	"abilities": {
		"0": "Frisk",
		"1": "Infiltrator",
		"H": "Telepathy"
	},
	"weightkg": 85,
	"prevo": "Noibat",
	"evoLevel": 48,
	"eggGroups": [
		"Flying",
		"Dragon"
	]
},
xerneas: {
	"num": -716,
	"name": "Xerneas",
	"baseForme": "Active",
	"types": [
		"Normal"
	],
	"gender": "N",
	"baseStats": {
		"hp": 126,
		"atk": 131,
		"def": 95,
		"spa": 114,
		"spd": 114,
		"spe": 99
	},
	"abilities": {
		"0": "Fairy Aura"
	},
	"weightkg": 215,
	"eggGroups": [
		"Undiscovered"
	],
	"tags": [
		"Restricted Legendary"
	],
	"otherFormes": [
		"Xerneas-Neutral"
	],
	"formeOrder": [
		"Xerneas-Neutral",
		"Xerneas"
	]
},
xerneasneutral: {
	"num": -716,
	"name": "Xerneas-Neutral",
	"baseSpecies": "Xerneas",
	"forme": "Neutral",
	"types": [
		"Normal"
	],
	"gender": "N",
	"baseStats": {
		"hp": 126,
		"atk": 131,
		"def": 95,
		"spa": 114,
		"spd": 114,
		"spe": 99
	},
	"abilities": {
		"0": "Fairy Aura"
	},
	"weightkg": 215,
	"eggGroups": [
		"Undiscovered"
	]
},
yveltal: {
	"num": -717,
	"name": "Yveltal",
	"types": [
		"Normal",
		"Flying"
	],
	"gender": "N",
	"baseStats": {
		"hp": 126,
		"atk": 131,
		"def": 95,
		"spa": 114,
		"spd": 114,
		"spe": 99
	},
	"abilities": {
		"0": "Dark Aura"
	},
	"weightkg": 203,
	"tags": [
		"Restricted Legendary"
	],
	"eggGroups": [
		"Undiscovered"
	]
},
zygarde: {
	"num": -718,
	"name": "Zygarde",
	"baseForme": "50%",
	"types": [
		"Dragon",
		"Ground"
	],
	"gender": "N",
	"baseStats": {
		"hp": 108,
		"atk": 100,
		"def": 121,
		"spa": 88,
		"spd": 88,
		"spe": 95
	},
	"abilities": {
		"0": "Aura Break",
		"S": "Power Construct"
	},
	"weightkg": 305,
	"tags": [
		"Restricted Legendary"
	],
	"eggGroups": [
		"Undiscovered"
	],
	"otherFormes": [
		"Zygarde-10%",
		"Zygarde-Complete"
	],
	"formeOrder": [
		"Zygarde",
		"Zygarde-10%",
		"Zygarde-10%",
		"Zygarde",
		"Zygarde-Complete"
	]
},
zygarde10: {
	"num": -718,
	"name": "Zygarde-10%",
	"baseSpecies": "Zygarde",
	"forme": "10%",
	"types": [
		"Dragon",
		"Ground"
	],
	"gender": "N",
	"baseStats": {
		"hp": 54,
		"atk": 100,
		"def": 71,
		"spa": 73,
		"spd": 73,
		"spe": 115
	},
	"abilities": {
		"0": "Aura Break",
		"S": "Power Construct"
	},
	"weightkg": 33.5,
	"eggGroups": [
		"Undiscovered"
	],
	"changesFrom": "Zygarde",
	"gen": 7
},
zygardecomplete: {
	"num": -718,
	"name": "Zygarde-Complete",
	"baseSpecies": "Zygarde",
	"forme": "Complete",
	"types": [
		"Dragon",
		"Ground"
	],
	"gender": "N",
	"baseStats": {
		"hp": 216,
		"atk": 100,
		"def": 121,
		"spa": 93,
		"spd": 93,
		"spe": 85
	},
	"abilities": {
		"0": "Power Construct"
	},
	"weightkg": 610,
	"eggGroups": [
		"Undiscovered"
	],
	// "requiredAbility": "Power Construct",
	"battleOnly": [
		"Zygarde",
		"Zygarde-10%"
	],
	"gen": 7
},
diancie: {
	"num": -719,
	"name": "Diancie",
	"types": [
		"Rock",
		"Normal"
	],
	"gender": "N",
	"baseStats": {
		"hp": 50,
		"atk": 100,
		"def": 150,
		"spa": 125,
		"spd": 125,
		"spe": 50
	},
	"abilities": {
		"0": "Clear Body"
	},
	"weightkg": 8.8,
	"eggGroups": [
		"Undiscovered"
	],
	"tags": [
		"Mythical"
	],
	"otherFormes": [
		"Diancie-Mega"
	],
	"formeOrder": [
		"Diancie",
		"Diancie-Mega"
	]
},
dianciemega: {
	"num": -719,
	"name": "Diancie-Mega",
	"baseSpecies": "Diancie",
	"forme": "Mega",
	"types": [
		"Rock",
		"Normal"
	],
	"gender": "N",
	"baseStats": {
		"hp": 50,
		"atk": 130,
		"def": 130,
		"spa": 129,
		"spd": 129,
		"spe": 80
	},
	"abilities": {
		"0": "Magic Bounce"
	},
	"weightkg": 27.8,
	"eggGroups": [
		"Undiscovered"
	],
	// "requiredItem": "Diancite"
},
hoopa: {
	"num": -720,
	"name": "Hoopa",
	"baseForme": "Confined",
	"types": [
		"Psychic",
		"Ghost"
	],
	"gender": "N",
	"baseStats": {
		"hp": 80,
		"atk": 110,
		"def": 60,
		"spa": 140,
		"spd": 140,
		"spe": 70
	},
	"abilities": {
		"0": "Magician"
	},
	"weightkg": 9,
	"eggGroups": [
		"Undiscovered"
	],
	"tags": [
		"Mythical"
	],
	"otherFormes": [
		"Hoopa-Unbound"
	],
	"formeOrder": [
		"Hoopa",
		"Hoopa-Unbound"
	]
},
hoopaunbound: {
	"num": -720,
	"name": "Hoopa-Unbound",
	"baseSpecies": "Hoopa",
	"forme": "Unbound",
	"types": [
		"Psychic",
		"Normal"
	],
	"gender": "N",
	"baseStats": {
		"hp": 80,
		"atk": 160,
		"def": 60,
		"spa": 150,
		"spd": 150,
		"spe": 80
	},
	"abilities": {
		"0": "Magician"
	},
	"weightkg": 490,
	"eggGroups": [
		"Undiscovered"
	],
	"changesFrom": "Hoopa"
},
volcanion: {
	"num": -721,
	"name": "Volcanion",
	"types": [
		"Fire",
		"Water"
	],
	"gender": "N",
	"baseStats": {
		"hp": 80,
		"atk": 110,
		"def": 120,
		"spa": 110,
		"spd": 110,
		"spe": 70
	},
	"abilities": {
		"0": "Water Absorb"
	},
	"weightkg": 195,
	"tags": [
		"Mythical"
	],
	"eggGroups": [
		"Undiscovered"
	]
},
rowlet: {
	"num": -722,
	"name": "Rowlet",
	"types": [
		"Grass",
		"Flying"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 68,
		"atk": 55,
		"def": 55,
		"spa": 50,
		"spd": 50,
		"spe": 42
	},
	"abilities": {
		"0": "Overgrow",
		"H": "Long Reach"
	},
	"weightkg": 1.5,
	"evos": [
		"Dartrix"
	],
	"eggGroups": [
		"Flying"
	]
},
dartrix: {
	"num": -723,
	"name": "Dartrix",
	"types": [
		"Grass",
		"Flying"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 78,
		"atk": 75,
		"def": 75,
		"spa": 70,
		"spd": 70,
		"spe": 52
	},
	"abilities": {
		"0": "Overgrow",
		"H": "Long Reach"
	},
	"weightkg": 16,
	"prevo": "Rowlet",
	"evoLevel": 17,
	"evos": [
		"Decidueye",
		"Decidueye-Hisui"
	],
	"eggGroups": [
		"Flying"
	]
},
decidueye: {
	"num": -724,
	"name": "Decidueye",
	"types": [
		"Grass",
		"Ghost"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 78,
		"atk": 107,
		"def": 75,
		"spa": 100,
		"spd": 100,
		"spe": 70
	},
	"abilities": {
		"0": "Overgrow",
		"H": "Long Reach"
	},
	"weightkg": 36.6,
	"prevo": "Dartrix",
	"evoLevel": 34,
	"eggGroups": [
		"Flying"
	],
	"otherFormes": [
		"Decidueye-Hisui"
	],
	"formeOrder": [
		"Decidueye",
		"Decidueye-Hisui"
	]
},
decidueyehisui: {
	"num": -724,
	"name": "Decidueye-Hisui",
	"baseSpecies": "Decidueye",
	"forme": "Hisui",
	"types": [
		"Grass",
		"Fighting"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 88,
		"atk": 112,
		"def": 80,
		"spa": 95,
		"spd": 95,
		"spe": 60
	},
	"abilities": {
		"0": "Overgrow",
		"H": "Long Reach"
	},
	"weightkg": 37,
	"prevo": "Dartrix",
	"evoLevel": 36,
	"eggGroups": [
		"Flying"
	]
},
litten: {
	"num": -725,
	"name": "Litten",
	"types": [
		"Fire"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 45,
		"atk": 65,
		"def": 40,
		"spa": 50,
		"spd": 50,
		"spe": 70
	},
	"abilities": {
		"0": "Blaze",
		"H": "Intimidate"
	},
	"weightkg": 4.3,
	"evos": [
		"Torracat"
	],
	"eggGroups": [
		"Field"
	]
},
torracat: {
	"num": -726,
	"name": "Torracat",
	"types": [
		"Fire"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 65,
		"atk": 85,
		"def": 50,
		"spa": 65,
		"spd": 65,
		"spe": 90
	},
	"abilities": {
		"0": "Blaze",
		"H": "Intimidate"
	},
	"weightkg": 25,
	"prevo": "Litten",
	"evoLevel": 17,
	"evos": [
		"Incineroar"
	],
	"eggGroups": [
		"Field"
	]
},
incineroar: {
	"num": -727,
	"name": "Incineroar",
	"types": [
		"Fire",
		"Normal"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 95,
		"atk": 115,
		"def": 90,
		"spa": 85,
		"spd": 85,
		"spe": 60
	},
	"abilities": {
		"0": "Blaze",
		"H": "Intimidate"
	},
	"weightkg": 83,
	"prevo": "Torracat",
	"evoLevel": 34,
	"eggGroups": [
		"Field"
	]
},
popplio: {
	"num": -728,
	"name": "Popplio",
	"types": [
		"Water"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 50,
		"atk": 54,
		"def": 54,
		"spa": 61,
		"spd": 61,
		"spe": 40
	},
	"abilities": {
		"0": "Torrent",
		"H": "Liquid Voice"
	},
	"weightkg": 7.5,
	"evos": [
		"Brionne"
	],
	"eggGroups": [
		"Water 1",
		"Field"
	]
},
brionne: {
	"num": -729,
	"name": "Brionne",
	"types": [
		"Water"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 60,
		"atk": 69,
		"def": 69,
		"spa": 86,
		"spd": 86,
		"spe": 50
	},
	"abilities": {
		"0": "Torrent",
		"H": "Liquid Voice"
	},
	"weightkg": 17.5,
	"prevo": "Popplio",
	"evoLevel": 17,
	"evos": [
		"Primarina"
	],
	"eggGroups": [
		"Water 1",
		"Field"
	]
},
primarina: {
	"num": -730,
	"name": "Primarina",
	"types": [
		"Water",
		"Normal"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 80,
		"atk": 74,
		"def": 74,
		"spa": 121,
		"spd": 121,
		"spe": 60
	},
	"abilities": {
		"0": "Torrent",
		"H": "Liquid Voice"
	},
	"weightkg": 44,
	"prevo": "Brionne",
	"evoLevel": 34,
	"eggGroups": [
		"Water 1",
		"Field"
	]
},
pikipek: {
	"num": -731,
	"name": "Pikipek",
	"types": [
		"Normal",
		"Flying"
	],
	"baseStats": {
		"hp": 35,
		"atk": 75,
		"def": 30,
		"spa": 30,
		"spd": 30,
		"spe": 65
	},
	"abilities": {
		"0": "Keen Eye",
		"1": "Skill Link",
		"H": "Pickup"
	},
	"weightkg": 1.2,
	"evos": [
		"Trumbeak"
	],
	"eggGroups": [
		"Flying"
	]
},
trumbeak: {
	"num": -732,
	"name": "Trumbeak",
	"types": [
		"Normal",
		"Flying"
	],
	"baseStats": {
		"hp": 55,
		"atk": 85,
		"def": 50,
		"spa": 45,
		"spd": 45,
		"spe": 75
	},
	"abilities": {
		"0": "Keen Eye",
		"1": "Skill Link",
		"H": "Pickup"
	},
	"weightkg": 14.8,
	"prevo": "Pikipek",
	"evoLevel": 14,
	"evos": [
		"Toucannon"
	],
	"eggGroups": [
		"Flying"
	]
},
toucannon: {
	"num": -733,
	"name": "Toucannon",
	"types": [
		"Normal",
		"Flying"
	],
	"baseStats": {
		"hp": 80,
		"atk": 120,
		"def": 75,
		"spa": 75,
		"spd": 75,
		"spe": 60
	},
	"abilities": {
		"0": "Keen Eye",
		"1": "Skill Link",
		"H": "Sheer Force"
	},
	"weightkg": 26,
	"prevo": "Trumbeak",
	"evoLevel": 28,
	"eggGroups": [
		"Flying"
	]
},
yungoos: {
	"num": -734,
	"name": "Yungoos",
	"types": [
		"Normal"
	],
	"baseStats": {
		"hp": 48,
		"atk": 70,
		"def": 30,
		"spa": 30,
		"spd": 30,
		"spe": 45
	},
	"abilities": {
		"0": "Stakeout",
		"1": "Strong Jaw",
		"H": "Adaptability"
	},
	"weightkg": 6,
	"evos": [
		"Gumshoos"
	],
	"eggGroups": [
		"Field"
	]
},
gumshoos: {
	"num": -735,
	"name": "Gumshoos",
	"types": [
		"Normal"
	],
	"baseStats": {
		"hp": 88,
		"atk": 110,
		"def": 60,
		"spa": 57,
		"spd": 57,
		"spe": 45
	},
	"abilities": {
		"0": "Stakeout",
		"1": "Strong Jaw",
		"H": "Adaptability"
	},
	"weightkg": 14.2,
	"prevo": "Yungoos",
	"evoLevel": 20,
	"evoCondition": "during the day",
	"eggGroups": [
		"Field"
	],
	"otherFormes": [
		"Gumshoos-Totem"
	],
	"formeOrder": [
		"Gumshoos",
		"Gumshoos-Totem"
	]
},
gumshoostotem: {
	"num": -735,
	"name": "Gumshoos-Totem",
	"baseSpecies": "Gumshoos",
	"forme": "Totem",
	"types": [
		"Normal"
	],
	"baseStats": {
		"hp": 88,
		"atk": 110,
		"def": 60,
		"spa": 57,
		"spd": 57,
		"spe": 45
	},
	"abilities": {
		"0": "Adaptability"
	},
	"weightkg": 60,
	"eggGroups": [
		"Field"
	]
},
grubbin: {
	"num": -736,
	"name": "Grubbin",
	"types": [
		"Bug"
	],
	"baseStats": {
		"hp": 47,
		"atk": 62,
		"def": 45,
		"spa": 50,
		"spd": 50,
		"spe": 46
	},
	"abilities": {
		"0": "Swarm"
	},
	"weightkg": 4.4,
	"evos": [
		"Charjabug"
	],
	"eggGroups": [
		"Bug"
	]
},
charjabug: {
	"num": -737,
	"name": "Charjabug",
	"types": [
		"Bug",
		"Electric"
	],
	"baseStats": {
		"hp": 57,
		"atk": 82,
		"def": 95,
		"spa": 65,
		"spd": 65,
		"spe": 36
	},
	"abilities": {
		"0": "Battery"
	},
	"weightkg": 10.5,
	"prevo": "Grubbin",
	"evoLevel": 20,
	"evos": [
		"Vikavolt"
	],
	"eggGroups": [
		"Bug"
	]
},
vikavolt: {
	"num": -738,
	"name": "Vikavolt",
	"types": [
		"Bug",
		"Electric"
	],
	"baseStats": {
		"hp": 77,
		"atk": 70,
		"def": 90,
		"spa": 110,
		"spd": 110,
		"spe": 43
	},
	"abilities": {
		"0": "Levitate"
	},
	"weightkg": 45,
	"prevo": "Charjabug",
	"evoType": "useItem",
	"evoItem": "Thunder Stone",
	"eggGroups": [
		"Bug"
	],
	"otherFormes": [
		"Vikavolt-Totem"
	],
	"formeOrder": [
		"Vikavolt",
		"Vikavolt-Totem"
	]
},
vikavolttotem: {
	"num": -738,
	"name": "Vikavolt-Totem",
	"baseSpecies": "Vikavolt",
	"forme": "Totem",
	"types": [
		"Bug",
		"Electric"
	],
	"baseStats": {
		"hp": 77,
		"atk": 70,
		"def": 90,
		"spa": 110,
		"spd": 110,
		"spe": 43
	},
	"abilities": {
		"0": "Levitate"
	},
	"weightkg": 147.5,
	"eggGroups": [
		"Bug"
	]
},
crabrawler: {
	"num": -739,
	"name": "Crabrawler",
	"types": [
		"Fighting"
	],
	"baseStats": {
		"hp": 47,
		"atk": 82,
		"def": 57,
		"spa": 44,
		"spd": 44,
		"spe": 63
	},
	"abilities": {
		"0": "Hyper Cutter",
		"1": "Iron Fist",
		"H": "Anger Point"
	},
	"weightkg": 7,
	"evos": [
		"Crabominable"
	],
	"eggGroups": [
		"Water 3"
	]
},
crabominable: {
	"num": -740,
	"name": "Crabominable",
	"types": [
		"Fighting",
		"Ice"
	],
	"baseStats": {
		"hp": 97,
		"atk": 132,
		"def": 77,
		"spa": 64,
		"spd": 64,
		"spe": 43
	},
	"abilities": {
		"0": "Hyper Cutter",
		"1": "Iron Fist",
		"H": "Anger Point"
	},
	"weightkg": 180,
	"prevo": "Crabrawler",
	"evoType": "levelExtra",
	"evoCondition": "at Mount Lanakila",
	"eggGroups": [
		"Water 3"
	]
},
oricorio: {
	"num": -741,
	"name": "Oricorio",
	"baseForme": "Baile",
	"types": [
		"Fire",
		"Flying"
	],
	"genderRatio": {
		"M": 0.25,
		"F": 0.75
	},
	"baseStats": {
		"hp": 75,
		"atk": 70,
		"def": 70,
		"spa": 84,
		"spd": 84,
		"spe": 93
	},
	"abilities": {
		"0": "Dancer"
	},
	"weightkg": 3.4,
	"eggGroups": [
		"Flying"
	],
	"otherFormes": [
		"Oricorio-Pom-Pom",
		"Oricorio-Pa'u",
		"Oricorio-Sensu"
	],
	"formeOrder": [
		"Oricorio",
		"Oricorio-Pom-Pom",
		"Oricorio-Pa'u",
		"Oricorio-Sensu"
	]
},
oricoriopompom: {
	"num": -741,
	"name": "Oricorio-Pom-Pom",
	"baseSpecies": "Oricorio",
	"forme": "Pom-Pom",
	"types": [
		"Electric",
		"Flying"
	],
	"genderRatio": {
		"M": 0.25,
		"F": 0.75
	},
	"baseStats": {
		"hp": 75,
		"atk": 70,
		"def": 70,
		"spa": 84,
		"spd": 84,
		"spe": 93
	},
	"abilities": {
		"0": "Dancer"
	},
	"weightkg": 3.4,
	"eggGroups": [
		"Flying"
	],
	"changesFrom": "Oricorio"
},
oricoriopau: {
	"num": -741,
	"name": "Oricorio-Pa'u",
	"baseSpecies": "Oricorio",
	"forme": "Pa'u",
	"types": [
		"Psychic",
		"Flying"
	],
	"genderRatio": {
		"M": 0.25,
		"F": 0.75
	},
	"baseStats": {
		"hp": 75,
		"atk": 70,
		"def": 70,
		"spa": 84,
		"spd": 84,
		"spe": 93
	},
	"abilities": {
		"0": "Dancer"
	},
	"weightkg": 3.4,
	"eggGroups": [
		"Flying"
	],
	"changesFrom": "Oricorio"
},
oricoriosensu: {
	"num": -741,
	"name": "Oricorio-Sensu",
	"baseSpecies": "Oricorio",
	"forme": "Sensu",
	"types": [
		"Ghost",
		"Flying"
	],
	"genderRatio": {
		"M": 0.25,
		"F": 0.75
	},
	"baseStats": {
		"hp": 75,
		"atk": 70,
		"def": 70,
		"spa": 84,
		"spd": 84,
		"spe": 93
	},
	"abilities": {
		"0": "Dancer"
	},
	"weightkg": 3.4,
	"eggGroups": [
		"Flying"
	],
	"changesFrom": "Oricorio"
},
cutiefly: {
	"num": -742,
	"name": "Cutiefly",
	"types": [
		"Bug",
		"Normal"
	],
	"baseStats": {
		"hp": 40,
		"atk": 45,
		"def": 40,
		"spa": 47,
		"spd": 47,
		"spe": 84
	},
	"abilities": {
		"0": "Honey Gather",
		"1": "Shield Dust",
		"H": "Sweet Veil"
	},
	"weightkg": 0.2,
	"evos": [
		"Ribombee"
	],
	"eggGroups": [
		"Bug",
		"Fairy"
	]
},
ribombee: {
	"num": -743,
	"name": "Ribombee",
	"types": [
		"Bug",
		"Normal"
	],
	"baseStats": {
		"hp": 60,
		"atk": 55,
		"def": 60,
		"spa": 82,
		"spd": 82,
		"spe": 124
	},
	"abilities": {
		"0": "Honey Gather",
		"1": "Shield Dust",
		"H": "Sweet Veil"
	},
	"weightkg": 0.5,
	"prevo": "Cutiefly",
	"evoLevel": 25,
	"eggGroups": [
		"Bug",
		"Fairy"
	],
	"otherFormes": [
		"Ribombee-Totem"
	],
	"formeOrder": [
		"Ribombee",
		"Ribombee-Totem"
	]
},
ribombeetotem: {
	"num": -743,
	"name": "Ribombee-Totem",
	"baseSpecies": "Ribombee",
	"forme": "Totem",
	"types": [
		"Bug",
		"Normal"
	],
	"baseStats": {
		"hp": 60,
		"atk": 55,
		"def": 60,
		"spa": 82,
		"spd": 82,
		"spe": 124
	},
	"abilities": {
		"0": "Sweet Veil"
	},
	"weightkg": 2,
	"eggGroups": [
		"Bug",
		"Fairy"
	]
},
rockruff: {
	"num": -744,
	"name": "Rockruff",
	"baseForme": "Midday",
	"types": [
		"Rock"
	],
	"baseStats": {
		"hp": 45,
		"atk": 65,
		"def": 40,
		"spa": 35,
		"spd": 35,
		"spe": 60
	},
	"abilities": {
		"0": "Keen Eye",
		"1": "Vital Spirit",
		"H": "Steadfast",
		"S": "Own Tempo"
	},
	"weightkg": 9.2,
	"evos": [
		"Lycanroc",
		"Lycanroc-Midnight",
		"Lycanroc-Dusk"
	],
	"eggGroups": [
		"Field"
	],
	"formeOrder": [
		"Rockruff",
		"Rockruff"
	]
},
lycanroc: {
	"num": -745,
	"name": "Lycanroc",
	"baseForme": "Midday",
	"types": [
		"Rock"
	],
	"baseStats": {
		"hp": 75,
		"atk": 115,
		"def": 65,
		"spa": 60,
		"spd": 60,
		"spe": 112
	},
	"abilities": {
		"0": "Keen Eye",
		"1": "Sand Rush",
		"H": "Steadfast"
	},
	"weightkg": 25,
	"prevo": "Rockruff",
	"evoLevel": 25,
	"evoCondition": "during the day",
	"eggGroups": [
		"Field"
	],
	"otherFormes": [
		"Lycanroc-Midnight",
		"Lycanroc-Dusk"
	],
	"formeOrder": [
		"Lycanroc",
		"Lycanroc-Midnight",
		"Lycanroc-Dusk"
	]
},
lycanrocmidnight: {
	"num": -745,
	"name": "Lycanroc-Midnight",
	"baseSpecies": "Lycanroc",
	"forme": "Midnight",
	"types": [
		"Rock"
	],
	"baseStats": {
		"hp": 85,
		"atk": 115,
		"def": 75,
		"spa": 65,
		"spd": 65,
		"spe": 82
	},
	"abilities": {
		"0": "Keen Eye",
		"1": "Vital Spirit",
		"H": "No Guard"
	},
	"weightkg": 25,
	"prevo": "Rockruff",
	"evoLevel": 25,
	"evoCondition": "at night",
	"eggGroups": [
		"Field"
	]
},
lycanrocdusk: {
	"num": -745,
	"name": "Lycanroc-Dusk",
	"baseSpecies": "Lycanroc",
	"forme": "Dusk",
	"types": [
		"Rock"
	],
	"baseStats": {
		"hp": 75,
		"atk": 117,
		"def": 65,
		"spa": 60,
		"spd": 60,
		"spe": 110
	},
	"abilities": {
		"0": "Tough Claws"
	},
	"weightkg": 25,
	"prevo": "Rockruff",
	"evoLevel": 25,
	"evoCondition": "from a special Rockruff",
	"eggGroups": [
		"Field"
	]
},
wishiwashi: {
	"num": -746,
	"name": "Wishiwashi",
	"baseForme": "Solo",
	"types": [
		"Water"
	],
	"baseStats": {
		"hp": 45,
		"atk": 20,
		"def": 20,
		"spa": 25,
		"spd": 25,
		"spe": 40
	},
	"abilities": {
		"0": "Schooling"
	},
	"weightkg": 0.3,
	"eggGroups": [
		"Water 2"
	],
	"otherFormes": [
		"Wishiwashi-School"
	],
	"formeOrder": [
		"Wishiwashi",
		"Wishiwashi-School"
	]
},
wishiwashischool: {
	"num": -746,
	"name": "Wishiwashi-School",
	"baseSpecies": "Wishiwashi",
	"forme": "School",
	"types": [
		"Water"
	],
	"baseStats": {
		"hp": 45,
		"atk": 140,
		"def": 130,
		"spa": 137,
		"spd": 137,
		"spe": 30
	},
	"abilities": {
		"0": "Schooling"
	},
	"weightkg": 78.6,
	"eggGroups": [
		"Water 2"
	],
	// "requiredAbility": "Schooling",
	"battleOnly": "Wishiwashi"
},
mareanie: {
	"num": -747,
	"name": "Mareanie",
	"types": [
		"Poison",
		"Water"
	],
	"baseStats": {
		"hp": 50,
		"atk": 53,
		"def": 62,
		"spa": 47,
		"spd": 47,
		"spe": 45
	},
	"abilities": {
		"0": "Merciless",
		"1": "Limber",
		"H": "Regenerator"
	},
	"weightkg": 8,
	"evos": [
		"Toxapex"
	],
	"eggGroups": [
		"Water 1"
	]
},
toxapex: {
	"num": -748,
	"name": "Toxapex",
	"types": [
		"Poison",
		"Water"
	],
	"baseStats": {
		"hp": 50,
		"atk": 63,
		"def": 152,
		"spa": 97,
		"spd": 97,
		"spe": 35
	},
	"abilities": {
		"0": "Merciless",
		"1": "Limber",
		"H": "Regenerator"
	},
	"weightkg": 14.5,
	"prevo": "Mareanie",
	"evoLevel": 38,
	"eggGroups": [
		"Water 1"
	]
},
mudbray: {
	"num": -749,
	"name": "Mudbray",
	"types": [
		"Ground"
	],
	"baseStats": {
		"hp": 70,
		"atk": 100,
		"def": 70,
		"spa": 50,
		"spd": 50,
		"spe": 45
	},
	"abilities": {
		"0": "Own Tempo",
		"1": "Stamina",
		"H": "Inner Focus"
	},
	"weightkg": 110,
	"evos": [
		"Mudsdale"
	],
	"eggGroups": [
		"Field"
	]
},
mudsdale: {
	"num": -750,
	"name": "Mudsdale",
	"types": [
		"Ground"
	],
	"baseStats": {
		"hp": 100,
		"atk": 125,
		"def": 100,
		"spa": 70,
		"spd": 70,
		"spe": 35
	},
	"abilities": {
		"0": "Own Tempo",
		"1": "Stamina",
		"H": "Inner Focus"
	},
	"weightkg": 920,
	"prevo": "Mudbray",
	"evoLevel": 30,
	"eggGroups": [
		"Field"
	]
},
dewpider: {
	"num": -751,
	"name": "Dewpider",
	"types": [
		"Water",
		"Bug"
	],
	"baseStats": {
		"hp": 38,
		"atk": 40,
		"def": 52,
		"spa": 56,
		"spd": 56,
		"spe": 27
	},
	"abilities": {
		"0": "Water Bubble",
		"H": "Water Absorb"
	},
	"weightkg": 4,
	"evos": [
		"Araquanid"
	],
	"eggGroups": [
		"Water 1",
		"Bug"
	]
},
araquanid: {
	"num": -752,
	"name": "Araquanid",
	"types": [
		"Water",
		"Bug"
	],
	"baseStats": {
		"hp": 68,
		"atk": 70,
		"def": 92,
		"spa": 91,
		"spd": 91,
		"spe": 42
	},
	"abilities": {
		"0": "Water Bubble",
		"H": "Water Absorb"
	},
	"weightkg": 82,
	"prevo": "Dewpider",
	"evoLevel": 22,
	"eggGroups": [
		"Water 1",
		"Bug"
	],
	"otherFormes": [
		"Araquanid-Totem"
	],
	"formeOrder": [
		"Araquanid",
		"Araquanid-Totem"
	]
},
araquanidtotem: {
	"num": -752,
	"name": "Araquanid-Totem",
	"baseSpecies": "Araquanid",
	"forme": "Totem",
	"types": [
		"Water",
		"Bug"
	],
	"baseStats": {
		"hp": 68,
		"atk": 70,
		"def": 92,
		"spa": 91,
		"spd": 91,
		"spe": 42
	},
	"abilities": {
		"0": "Water Bubble"
	},
	"weightkg": 217.5,
	"eggGroups": [
		"Water 1",
		"Bug"
	]
},
fomantis: {
	"num": -753,
	"name": "Fomantis",
	"types": [
		"Grass"
	],
	"baseStats": {
		"hp": 40,
		"atk": 55,
		"def": 35,
		"spa": 42,
		"spd": 42,
		"spe": 35
	},
	"abilities": {
		"0": "Leaf Guard",
		"H": "Contrary"
	},
	"weightkg": 1.5,
	"evos": [
		"Lurantis"
	],
	"eggGroups": [
		"Grass"
	]
},
lurantis: {
	"num": -754,
	"name": "Lurantis",
	"types": [
		"Grass"
	],
	"baseStats": {
		"hp": 70,
		"atk": 105,
		"def": 90,
		"spa": 85,
		"spd": 85,
		"spe": 45
	},
	"abilities": {
		"0": "Leaf Guard",
		"H": "Contrary"
	},
	"weightkg": 18.5,
	"prevo": "Fomantis",
	"evoLevel": 34,
	"evoCondition": "during the day",
	"eggGroups": [
		"Grass"
	],
	"otherFormes": [
		"Lurantis-Totem"
	],
	"formeOrder": [
		"Lurantis",
		"Lurantis-Totem"
	]
},
lurantistotem: {
	"num": -754,
	"name": "Lurantis-Totem",
	"baseSpecies": "Lurantis",
	"forme": "Totem",
	"types": [
		"Grass"
	],
	"baseStats": {
		"hp": 70,
		"atk": 105,
		"def": 90,
		"spa": 85,
		"spd": 85,
		"spe": 45
	},
	"abilities": {
		"0": "Leaf Guard"
	},
	"weightkg": 58,
	"eggGroups": [
		"Grass"
	]
},
morelull: {
	"num": -755,
	"name": "Morelull",
	"types": [
		"Grass",
		"Normal"
	],
	"baseStats": {
		"hp": 40,
		"atk": 35,
		"def": 55,
		"spa": 70,
		"spd": 70,
		"spe": 15
	},
	"abilities": {
		"0": "Illuminate",
		"1": "Effect Spore",
		"H": "Rain Dish"
	},
	"weightkg": 1.5,
	"evos": [
		"Shiinotic"
	],
	"eggGroups": [
		"Grass"
	]
},
shiinotic: {
	"num": -756,
	"name": "Shiinotic",
	"types": [
		"Grass",
		"Normal"
	],
	"baseStats": {
		"hp": 60,
		"atk": 45,
		"def": 80,
		"spa": 95,
		"spd": 95,
		"spe": 30
	},
	"abilities": {
		"0": "Illuminate",
		"1": "Effect Spore",
		"H": "Rain Dish"
	},
	"weightkg": 11.5,
	"prevo": "Morelull",
	"evoLevel": 24,
	"eggGroups": [
		"Grass"
	]
},
salandit: {
	"num": -757,
	"name": "Salandit",
	"types": [
		"Poison",
		"Fire"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 48,
		"atk": 44,
		"def": 40,
		"spa": 55,
		"spd": 55,
		"spe": 77
	},
	"abilities": {
		"0": "Corrosion",
		"H": "Oblivious"
	},
	"weightkg": 4.8,
	"evos": [
		"Salazzle"
	],
	"eggGroups": [
		"Monster",
		"Dragon"
	]
},
salazzle: {
	"num": -758,
	"name": "Salazzle",
	"types": [
		"Poison",
		"Fire"
	],
	"gender": "F",
	"baseStats": {
		"hp": 68,
		"atk": 64,
		"def": 60,
		"spa": 85,
		"spd": 85,
		"spe": 117
	},
	"abilities": {
		"0": "Corrosion",
		"H": "Oblivious"
	},
	"weightkg": 22.2,
	"prevo": "Salandit",
	"evoLevel": 33,
	"eggGroups": [
		"Monster",
		"Dragon"
	],
	"otherFormes": [
		"Salazzle-Totem"
	],
	"formeOrder": [
		"Salazzle",
		"Salazzle-Totem"
	]
},
salazzletotem: {
	"num": -758,
	"name": "Salazzle-Totem",
	"baseSpecies": "Salazzle",
	"forme": "Totem",
	"types": [
		"Poison",
		"Fire"
	],
	"gender": "F",
	"baseStats": {
		"hp": 68,
		"atk": 64,
		"def": 60,
		"spa": 85,
		"spd": 85,
		"spe": 117
	},
	"abilities": {
		"0": "Corrosion"
	},
	"weightkg": 81,
	"eggGroups": [
		"Monster",
		"Dragon"
	]
},
stufful: {
	"num": -759,
	"name": "Stufful",
	"types": [
		"Normal",
		"Fighting"
	],
	"baseStats": {
		"hp": 70,
		"atk": 75,
		"def": 50,
		"spa": 47,
		"spd": 47,
		"spe": 50
	},
	"abilities": {
		"0": "Fluffy",
		"1": "Klutz",
		"H": "Cute Charm"
	},
	"weightkg": 6.8,
	"evos": [
		"Bewear"
	],
	"eggGroups": [
		"Field"
	]
},
bewear: {
	"num": -760,
	"name": "Bewear",
	"types": [
		"Normal",
		"Fighting"
	],
	"baseStats": {
		"hp": 120,
		"atk": 125,
		"def": 80,
		"spa": 57,
		"spd": 57,
		"spe": 60
	},
	"abilities": {
		"0": "Fluffy",
		"1": "Klutz",
		"H": "Unnerve"
	},
	"weightkg": 135,
	"prevo": "Stufful",
	"evoLevel": 27,
	"eggGroups": [
		"Field"
	]
},
bounsweet: {
	"num": -761,
	"name": "Bounsweet",
	"types": [
		"Grass"
	],
	"gender": "F",
	"baseStats": {
		"hp": 42,
		"atk": 30,
		"def": 38,
		"spa": 34,
		"spd": 34,
		"spe": 32
	},
	"abilities": {
		"0": "Leaf Guard",
		"1": "Oblivious",
		"H": "Sweet Veil"
	},
	"weightkg": 3.2,
	"evos": [
		"Steenee"
	],
	"eggGroups": [
		"Grass"
	]
},
steenee: {
	"num": -762,
	"name": "Steenee",
	"types": [
		"Grass"
	],
	"gender": "F",
	"baseStats": {
		"hp": 52,
		"atk": 40,
		"def": 48,
		"spa": 44,
		"spd": 44,
		"spe": 62
	},
	"abilities": {
		"0": "Leaf Guard",
		"1": "Oblivious",
		"H": "Sweet Veil"
	},
	"weightkg": 8.2,
	"prevo": "Bounsweet",
	"evoLevel": 18,
	"evos": [
		"Tsareena"
	],
	"eggGroups": [
		"Grass"
	]
},
tsareena: {
	"num": -763,
	"name": "Tsareena",
	"types": [
		"Grass"
	],
	"gender": "F",
	"baseStats": {
		"hp": 72,
		"atk": 120,
		"def": 98,
		"spa": 74,
		"spd": 74,
		"spe": 72
	},
	"abilities": {
		"0": "Leaf Guard",
		"1": "Queenly Majesty",
		"H": "Sweet Veil"
	},
	"weightkg": 21.4,
	"prevo": "Steenee",
	"evoType": "levelMove",
	"evoMove": "Stomp",
	"eggGroups": [
		"Grass"
	]
},
comfey: {
	"num": -764,
	"name": "Comfey",
	"types": [
		"Normal"
	],
	"genderRatio": {
		"M": 0.25,
		"F": 0.75
	},
	"baseStats": {
		"hp": 51,
		"atk": 52,
		"def": 90,
		"spa": 96,
		"spd": 96,
		"spe": 100
	},
	"abilities": {
		"0": "Flower Veil",
		"1": "Triage",
		"H": "Natural Cure"
	},
	"weightkg": 0.3,
	"eggGroups": [
		"Grass"
	]
},
oranguru: {
	"num": -765,
	"name": "Oranguru",
	"types": [
		"Normal",
		"Psychic"
	],
	"baseStats": {
		"hp": 90,
		"atk": 60,
		"def": 80,
		"spa": 100,
		"spd": 100,
		"spe": 60
	},
	"abilities": {
		"0": "Inner Focus",
		"1": "Telepathy",
		"H": "Symbiosis"
	},
	"weightkg": 76,
	"eggGroups": [
		"Field"
	]
},
passimian: {
	"num": -766,
	"name": "Passimian",
	"types": [
		"Fighting"
	],
	"baseStats": {
		"hp": 100,
		"atk": 120,
		"def": 90,
		"spa": 50,
		"spd": 50,
		"spe": 80
	},
	"abilities": {
		"0": "Receiver",
		"H": "Defiant"
	},
	"weightkg": 82.8,
	"eggGroups": [
		"Field"
	]
},
wimpod: {
	"num": -767,
	"name": "Wimpod",
	"types": [
		"Bug",
		"Water"
	],
	"baseStats": {
		"hp": 25,
		"atk": 35,
		"def": 40,
		"spa": 25,
		"spd": 25,
		"spe": 80
	},
	"abilities": {
		"0": "Wimp Out"
	},
	"weightkg": 12,
	"evos": [
		"Golisopod"
	],
	"eggGroups": [
		"Bug",
		"Water 3"
	]
},
golisopod: {
	"num": -768,
	"name": "Golisopod",
	"types": [
		"Bug",
		"Water"
	],
	"baseStats": {
		"hp": 75,
		"atk": 125,
		"def": 140,
		"spa": 75,
		"spd": 75,
		"spe": 40
	},
	"abilities": {
		"0": "Emergency Exit"
	},
	"weightkg": 108,
	"prevo": "Wimpod",
	"evoLevel": 30,
	"eggGroups": [
		"Bug",
		"Water 3"
	]
},
sandygast: {
	"num": -769,
	"name": "Sandygast",
	"types": [
		"Ghost",
		"Ground"
	],
	"baseStats": {
		"hp": 55,
		"atk": 55,
		"def": 80,
		"spa": 57,
		"spd": 57,
		"spe": 15
	},
	"abilities": {
		"0": "Water Compaction",
		"H": "Sand Veil"
	},
	"weightkg": 70,
	"evos": [
		"Palossand"
	],
	"eggGroups": [
		"Amorphous"
	]
},
palossand: {
	"num": -770,
	"name": "Palossand",
	"types": [
		"Ghost",
		"Ground"
	],
	"baseStats": {
		"hp": 85,
		"atk": 75,
		"def": 110,
		"spa": 87,
		"spd": 87,
		"spe": 35
	},
	"abilities": {
		"0": "Water Compaction",
		"H": "Sand Veil"
	},
	"weightkg": 250,
	"prevo": "Sandygast",
	"evoLevel": 42,
	"eggGroups": [
		"Amorphous"
	]
},
pyukumuku: {
	"num": -771,
	"name": "Pyukumuku",
	"types": [
		"Water"
	],
	"baseStats": {
		"hp": 55,
		"atk": 60,
		"def": 130,
		"spa": 80,
		"spd": 80,
		"spe": 5
	},
	"abilities": {
		"0": "Innards Out",
		"H": "Unaware"
	},
	"weightkg": 1.2,
	"eggGroups": [
		"Water 1"
	]
},
typenull: {
	"num": -772,
	"name": "Type: Null",
	"types": [
		"Normal"
	],
	"gender": "N",
	"baseStats": {
		"hp": 95,
		"atk": 95,
		"def": 95,
		"spa": 95,
		"spd": 95,
		"spe": 59
	},
	"abilities": {
		"0": "Battle Armor"
	},
	"weightkg": 120.5,
	"tags": [
		"Sub-Legendary"
	],
	"evos": [
		"Silvally"
	],
	"eggGroups": [
		"Undiscovered"
	]
},
silvally: {
	"num": -773,
	"name": "Silvally",
	"types": [
		"Normal"
	],
	"gender": "N",
	"baseStats": {
		"hp": 95,
		"atk": 95,
		"def": 95,
		"spa": 95,
		"spd": 95,
		"spe": 95
	},
	"abilities": {
		"0": "RKS System"
	},
	"weightkg": 100.5,
	"tags": [
		"Sub-Legendary"
	],
	"prevo": "Type: Null",
	"evoType": "levelFriendship",
	"eggGroups": [
		"Undiscovered"
	],
	"otherFormes": [
		"Silvally-Bug",
		"Silvally-Dark",
		"Silvally-Dragon",
		"Silvally-Electric",
		"Silvally-Fairy",
		"Silvally-Fighting",
		"Silvally-Fire",
		"Silvally-Flying",
		"Silvally-Ghost",
		"Silvally-Grass",
		"Silvally-Ground",
		"Silvally-Ice",
		"Silvally-Poison",
		"Silvally-Psychic",
		"Silvally-Rock",
		"Silvally-Steel",
		"Silvally-Water"
	],
	"formeOrder": [
		"Silvally",
		"Silvally-Fighting",
		"Silvally-Flying",
		"Silvally-Poison",
		"Silvally-Ground",
		"Silvally-Rock",
		"Silvally-Bug",
		"Silvally-Ghost",
		"Silvally-Steel",
		"Silvally-Fire",
		"Silvally-Water",
		"Silvally-Grass",
		"Silvally-Electric",
		"Silvally-Psychic",
		"Silvally-Ice",
		"Silvally-Dragon",
		"Silvally-Dark",
		"Silvally-Fairy"
	]
},
silvallybug: {
	"num": -773,
	"name": "Silvally-Bug",
	"baseSpecies": "Silvally",
	"forme": "Bug",
	"types": [
		"Bug"
	],
	"gender": "N",
	"baseStats": {
		"hp": 95,
		"atk": 95,
		"def": 95,
		"spa": 95,
		"spd": 95,
		"spe": 95
	},
	"abilities": {
		"0": "RKS System"
	},
	"weightkg": 100.5,
	"eggGroups": [
		"Undiscovered"
	],
	// "requiredItem": "Bug Memory",
	"changesFrom": "Silvally"
},
silvallydark: {
	"num": -773,
	"name": "Silvally-Dark",
	"baseSpecies": "Silvally",
	"forme": "Dark",
	"types": [
		"Normal"
	],
	"gender": "N",
	"baseStats": {
		"hp": 95,
		"atk": 95,
		"def": 95,
		"spa": 95,
		"spd": 95,
		"spe": 95
	},
	"abilities": {
		"0": "RKS System"
	},
	"weightkg": 100.5,
	"eggGroups": [
		"Undiscovered"
	],
	// "requiredItem": "Dark Memory",
	"changesFrom": "Silvally"
},
silvallydragon: {
	"num": -773,
	"name": "Silvally-Dragon",
	"baseSpecies": "Silvally",
	"forme": "Dragon",
	"types": [
		"Dragon"
	],
	"gender": "N",
	"baseStats": {
		"hp": 95,
		"atk": 95,
		"def": 95,
		"spa": 95,
		"spd": 95,
		"spe": 95
	},
	"abilities": {
		"0": "RKS System"
	},
	"weightkg": 100.5,
	"eggGroups": [
		"Undiscovered"
	],
	// "requiredItem": "Dragon Memory",
	"changesFrom": "Silvally"
},
silvallyelectric: {
	"num": -773,
	"name": "Silvally-Electric",
	"baseSpecies": "Silvally",
	"forme": "Electric",
	"types": [
		"Electric"
	],
	"gender": "N",
	"baseStats": {
		"hp": 95,
		"atk": 95,
		"def": 95,
		"spa": 95,
		"spd": 95,
		"spe": 95
	},
	"abilities": {
		"0": "RKS System"
	},
	"weightkg": 100.5,
	"eggGroups": [
		"Undiscovered"
	],
	// "requiredItem": "Electric Memory",
	"changesFrom": "Silvally"
},
silvallyfairy: {
	"num": -773,
	"name": "Silvally-Fairy",
	"baseSpecies": "Silvally",
	"forme": "Fairy",
	"types": [
		"Normal"
	],
	"gender": "N",
	"baseStats": {
		"hp": 95,
		"atk": 95,
		"def": 95,
		"spa": 95,
		"spd": 95,
		"spe": 95
	},
	"abilities": {
		"0": "RKS System"
	},
	"weightkg": 100.5,
	"eggGroups": [
		"Undiscovered"
	],
	// "requiredItem": "Fairy Memory",
	"changesFrom": "Silvally"
},
silvallyfighting: {
	"num": -773,
	"name": "Silvally-Fighting",
	"baseSpecies": "Silvally",
	"forme": "Fighting",
	"types": [
		"Fighting"
	],
	"gender": "N",
	"baseStats": {
		"hp": 95,
		"atk": 95,
		"def": 95,
		"spa": 95,
		"spd": 95,
		"spe": 95
	},
	"abilities": {
		"0": "RKS System"
	},
	"weightkg": 100.5,
	"eggGroups": [
		"Undiscovered"
	],
	// "requiredItem": "Fighting Memory",
	"changesFrom": "Silvally"
},
silvallyfire: {
	"num": -773,
	"name": "Silvally-Fire",
	"baseSpecies": "Silvally",
	"forme": "Fire",
	"types": [
		"Fire"
	],
	"gender": "N",
	"baseStats": {
		"hp": 95,
		"atk": 95,
		"def": 95,
		"spa": 95,
		"spd": 95,
		"spe": 95
	},
	"abilities": {
		"0": "RKS System"
	},
	"weightkg": 100.5,
	"eggGroups": [
		"Undiscovered"
	],
	// "requiredItem": "Fire Memory",
	"changesFrom": "Silvally"
},
silvallyflying: {
	"num": -773,
	"name": "Silvally-Flying",
	"baseSpecies": "Silvally",
	"forme": "Flying",
	"types": [
		"Flying"
	],
	"gender": "N",
	"baseStats": {
		"hp": 95,
		"atk": 95,
		"def": 95,
		"spa": 95,
		"spd": 95,
		"spe": 95
	},
	"abilities": {
		"0": "RKS System"
	},
	"weightkg": 100.5,
	"eggGroups": [
		"Undiscovered"
	],
	// "requiredItem": "Flying Memory",
	"changesFrom": "Silvally"
},
silvallyghost: {
	"num": -773,
	"name": "Silvally-Ghost",
	"baseSpecies": "Silvally",
	"forme": "Ghost",
	"types": [
		"Ghost"
	],
	"gender": "N",
	"baseStats": {
		"hp": 95,
		"atk": 95,
		"def": 95,
		"spa": 95,
		"spd": 95,
		"spe": 95
	},
	"abilities": {
		"0": "RKS System"
	},
	"weightkg": 100.5,
	"eggGroups": [
		"Undiscovered"
	],
	// "requiredItem": "Ghost Memory",
	"changesFrom": "Silvally"
},
silvallygrass: {
	"num": -773,
	"name": "Silvally-Grass",
	"baseSpecies": "Silvally",
	"forme": "Grass",
	"types": [
		"Grass"
	],
	"gender": "N",
	"baseStats": {
		"hp": 95,
		"atk": 95,
		"def": 95,
		"spa": 95,
		"spd": 95,
		"spe": 95
	},
	"abilities": {
		"0": "RKS System"
	},
	"weightkg": 100.5,
	"eggGroups": [
		"Undiscovered"
	],
	// "requiredItem": "Grass Memory",
	"changesFrom": "Silvally"
},
silvallyground: {
	"num": -773,
	"name": "Silvally-Ground",
	"baseSpecies": "Silvally",
	"forme": "Ground",
	"types": [
		"Ground"
	],
	"gender": "N",
	"baseStats": {
		"hp": 95,
		"atk": 95,
		"def": 95,
		"spa": 95,
		"spd": 95,
		"spe": 95
	},
	"abilities": {
		"0": "RKS System"
	},
	"weightkg": 100.5,
	"eggGroups": [
		"Undiscovered"
	],
	// "requiredItem": "Ground Memory",
	"changesFrom": "Silvally"
},
silvallyice: {
	"num": -773,
	"name": "Silvally-Ice",
	"baseSpecies": "Silvally",
	"forme": "Ice",
	"types": [
		"Ice"
	],
	"gender": "N",
	"baseStats": {
		"hp": 95,
		"atk": 95,
		"def": 95,
		"spa": 95,
		"spd": 95,
		"spe": 95
	},
	"abilities": {
		"0": "RKS System"
	},
	"weightkg": 100.5,
	"eggGroups": [
		"Undiscovered"
	],
	// "requiredItem": "Ice Memory",
	"changesFrom": "Silvally"
},
silvallypoison: {
	"num": -773,
	"name": "Silvally-Poison",
	"baseSpecies": "Silvally",
	"forme": "Poison",
	"types": [
		"Poison"
	],
	"gender": "N",
	"baseStats": {
		"hp": 95,
		"atk": 95,
		"def": 95,
		"spa": 95,
		"spd": 95,
		"spe": 95
	},
	"abilities": {
		"0": "RKS System"
	},
	"weightkg": 100.5,
	"eggGroups": [
		"Undiscovered"
	],
	// "requiredItem": "Poison Memory",
	"changesFrom": "Silvally"
},
silvallypsychic: {
	"num": -773,
	"name": "Silvally-Psychic",
	"baseSpecies": "Silvally",
	"forme": "Psychic",
	"types": [
		"Psychic"
	],
	"gender": "N",
	"baseStats": {
		"hp": 95,
		"atk": 95,
		"def": 95,
		"spa": 95,
		"spd": 95,
		"spe": 95
	},
	"abilities": {
		"0": "RKS System"
	},
	"weightkg": 100.5,
	"eggGroups": [
		"Undiscovered"
	],
	// "requiredItem": "Psychic Memory",
	"changesFrom": "Silvally"
},
silvallyrock: {
	"num": -773,
	"name": "Silvally-Rock",
	"baseSpecies": "Silvally",
	"forme": "Rock",
	"types": [
		"Rock"
	],
	"gender": "N",
	"baseStats": {
		"hp": 95,
		"atk": 95,
		"def": 95,
		"spa": 95,
		"spd": 95,
		"spe": 95
	},
	"abilities": {
		"0": "RKS System"
	},
	"weightkg": 100.5,
	"eggGroups": [
		"Undiscovered"
	],
	// "requiredItem": "Rock Memory",
	"changesFrom": "Silvally"
},
silvallysteel: {
	"num": -773,
	"name": "Silvally-Steel",
	"baseSpecies": "Silvally",
	"forme": "Steel",
	"types": [
		"Rock"
	],
	"gender": "N",
	"baseStats": {
		"hp": 95,
		"atk": 95,
		"def": 95,
		"spa": 95,
		"spd": 95,
		"spe": 95
	},
	"abilities": {
		"0": "RKS System"
	},
	"weightkg": 100.5,
	"eggGroups": [
		"Undiscovered"
	],
	// "requiredItem": "Steel Memory",
	"changesFrom": "Silvally"
},
silvallywater: {
	"num": -773,
	"name": "Silvally-Water",
	"baseSpecies": "Silvally",
	"forme": "Water",
	"types": [
		"Water"
	],
	"gender": "N",
	"baseStats": {
		"hp": 95,
		"atk": 95,
		"def": 95,
		"spa": 95,
		"spd": 95,
		"spe": 95
	},
	"abilities": {
		"0": "RKS System"
	},
	"weightkg": 100.5,
	"eggGroups": [
		"Undiscovered"
	],
	// "requiredItem": "Water Memory",
	"changesFrom": "Silvally"
},
minior: {
	"num": -774,
	"name": "Minior",
	"baseForme": "Red",
	"types": [
		"Rock",
		"Flying"
	],
	"gender": "N",
	"baseStats": {
		"hp": 60,
		"atk": 100,
		"def": 60,
		"spa": 80,
		"spd": 80,
		"spe": 120
	},
	"abilities": {
		"0": "Shields Down"
	},
	"weightkg": 0.3,
	"eggGroups": [
		"Mineral"
	],
	"otherFormes": [
		"Minior-Meteor"
	],
	"cosmeticFormes": [
		"Minior-Orange",
		"Minior-Yellow",
		"Minior-Green",
		"Minior-Blue",
		"Minior-Indigo",
		"Minior-Violet"
	],
	"formeOrder": [
		"Minior-Meteor",
		"Minior-Meteor",
		"Minior-Meteor",
		"Minior-Meteor",
		"Minior-Meteor",
		"Minior-Meteor",
		"Minior-Meteor",
		"Minior",
		"Minior-Orange",
		"Minior-Yellow",
		"Minior-Green",
		"Minior-Blue",
		"Minior-Indigo",
		"Minior-Violet"
	]
},
miniormeteor: {
	"num": -774,
	"name": "Minior-Meteor",
	"baseSpecies": "Minior",
	"forme": "Meteor",
	"types": [
		"Rock",
		"Flying"
	],
	"gender": "N",
	"baseStats": {
		"hp": 60,
		"atk": 60,
		"def": 100,
		"spa": 80,
		"spd": 80,
		"spe": 60
	},
	"abilities": {
		"0": "Shields Down"
	},
	"weightkg": 40,
	"eggGroups": [
		"Mineral"
	],
	// "requiredAbility": "Shields Down",
	"battleOnly": "Minior"
},
komala: {
	"num": -775,
	"name": "Komala",
	"types": [
		"Normal"
	],
	"baseStats": {
		"hp": 65,
		"atk": 115,
		"def": 65,
		"spa": 85,
		"spd": 85,
		"spe": 65
	},
	"abilities": {
		"0": "Comatose"
	},
	"weightkg": 19.9,
	"eggGroups": [
		"Field"
	]
},
turtonator: {
	"num": -776,
	"name": "Turtonator",
	"types": [
		"Fire",
		"Dragon"
	],
	"baseStats": {
		"hp": 60,
		"atk": 78,
		"def": 135,
		"spa": 88,
		"spd": 88,
		"spe": 36
	},
	"abilities": {
		"0": "Shell Armor"
	},
	"weightkg": 212,
	"eggGroups": [
		"Monster",
		"Dragon"
	]
},
togedemaru: {
	"num": -777,
	"name": "Togedemaru",
	"types": [
		"Electric",
		"Rock"
	],
	"baseStats": {
		"hp": 65,
		"atk": 98,
		"def": 63,
		"spa": 56,
		"spd": 56,
		"spe": 96
	},
	"abilities": {
		"0": "Iron Barbs",
		"1": "Lightning Rod",
		"H": "Sturdy"
	},
	"weightkg": 3.3,
	"eggGroups": [
		"Field",
		"Fairy"
	],
	"otherFormes": [
		"Togedemaru-Totem"
	],
	"formeOrder": [
		"Togedemaru",
		"Togedemaru-Totem"
	]
},
togedemarutotem: {
	"num": -777,
	"name": "Togedemaru-Totem",
	"baseSpecies": "Togedemaru",
	"forme": "Totem",
	"types": [
		"Electric",
		"Rock"
	],
	"baseStats": {
		"hp": 65,
		"atk": 98,
		"def": 63,
		"spa": 56,
		"spd": 56,
		"spe": 96
	},
	"abilities": {
		"0": "Sturdy"
	},
	"weightkg": 13,
	"eggGroups": [
		"Field",
		"Fairy"
	]
},
mimikyu: {
	"num": -778,
	"name": "Mimikyu",
	"baseForme": "Disguised",
	"types": [
		"Ghost",
		"Normal"
	],
	"baseStats": {
		"hp": 55,
		"atk": 90,
		"def": 80,
		"spa": 77,
		"spd": 77,
		"spe": 96
	},
	"abilities": {
		"0": "Disguise"
	},
	"weightkg": 0.7,
	"eggGroups": [
		"Amorphous"
	],
	"otherFormes": [
		"Mimikyu-Busted",
		"Mimikyu-Totem",
		"Mimikyu-Busted-Totem"
	],
	"formeOrder": [
		"Mimikyu",
		"Mimikyu-Busted",
		"Mimikyu-Totem",
		"Mimikyu-Busted-Totem"
	]
},
mimikyubusted: {
	"num": -778,
	"name": "Mimikyu-Busted",
	"baseSpecies": "Mimikyu",
	"forme": "Busted",
	"types": [
		"Ghost",
		"Normal"
	],
	"baseStats": {
		"hp": 55,
		"atk": 90,
		"def": 80,
		"spa": 77,
		"spd": 77,
		"spe": 96
	},
	"abilities": {
		"0": "Disguise"
	},
	"weightkg": 0.7,
	"eggGroups": [
		"Amorphous"
	],
	// "requiredAbility": "Disguise",
	"battleOnly": "Mimikyu"
},
mimikyutotem: {
	"num": -778,
	"name": "Mimikyu-Totem",
	"baseSpecies": "Mimikyu",
	"forme": "Totem",
	"types": [
		"Ghost",
		"Normal"
	],
	"baseStats": {
		"hp": 55,
		"atk": 90,
		"def": 80,
		"spa": 77,
		"spd": 77,
		"spe": 96
	},
	"abilities": {
		"0": "Disguise"
	},
	"weightkg": 2.8,
	"eggGroups": [
		"Amorphous"
	]
},
mimikyubustedtotem: {
	"num": -778,
	"name": "Mimikyu-Busted-Totem",
	"baseSpecies": "Mimikyu",
	"forme": "Busted-Totem",
	"types": [
		"Ghost",
		"Normal"
	],
	"baseStats": {
		"hp": 55,
		"atk": 90,
		"def": 80,
		"spa": 77,
		"spd": 77,
		"spe": 96
	},
	"abilities": {
		"0": "Disguise"
	},
	"weightkg": 2.8,
	"eggGroups": [
		"Amorphous"
	],
	// "requiredAbility": "Disguise",
	"battleOnly": "Mimikyu-Totem"
},
bruxish: {
	"num": -779,
	"name": "Bruxish",
	"types": [
		"Water",
		"Psychic"
	],
	"baseStats": {
		"hp": 68,
		"atk": 105,
		"def": 70,
		"spa": 70,
		"spd": 70,
		"spe": 92
	},
	"abilities": {
		"0": "Dazzling",
		"1": "Strong Jaw",
		"H": "Wonder Skin"
	},
	"weightkg": 19,
	"eggGroups": [
		"Water 2"
	]
},
drampa: {
	"num": -780,
	"name": "Drampa",
	"types": [
		"Normal",
		"Dragon"
	],
	"baseStats": {
		"hp": 78,
		"atk": 60,
		"def": 85,
		"spa": 113,
		"spd": 113,
		"spe": 36
	},
	"abilities": {
		"0": "Berserk",
		"1": "Sap Sipper",
		"H": "Cloud Nine"
	},
	"weightkg": 185,
	"eggGroups": [
		"Monster",
		"Dragon"
	]
},
dhelmise: {
	"num": -781,
	"name": "Dhelmise",
	"types": [
		"Ghost",
		"Grass"
	],
	"gender": "N",
	"baseStats": {
		"hp": 70,
		"atk": 131,
		"def": 100,
		"spa": 88,
		"spd": 88,
		"spe": 40
	},
	"abilities": {
		"0": "Steelworker"
	},
	"weightkg": 210,
	"eggGroups": [
		"Mineral"
	]
},
jangmoo: {
	"num": -782,
	"name": "Jangmo-o",
	"types": [
		"Dragon"
	],
	"baseStats": {
		"hp": 45,
		"atk": 55,
		"def": 65,
		"spa": 45,
		"spd": 45,
		"spe": 45
	},
	"abilities": {
		"0": "Bulletproof",
		"1": "Soundproof",
		"H": "Overcoat"
	},
	"weightkg": 29.7,
	"evos": [
		"Hakamo-o"
	],
	"eggGroups": [
		"Dragon"
	]
},
hakamoo: {
	"num": -783,
	"name": "Hakamo-o",
	"types": [
		"Dragon",
		"Fighting"
	],
	"baseStats": {
		"hp": 55,
		"atk": 75,
		"def": 90,
		"spa": 67,
		"spd": 67,
		"spe": 65
	},
	"abilities": {
		"0": "Bulletproof",
		"1": "Soundproof",
		"H": "Overcoat"
	},
	"weightkg": 47,
	"prevo": "Jangmo-o",
	"evoLevel": 35,
	"evos": [
		"Kommo-o"
	],
	"eggGroups": [
		"Dragon"
	]
},
kommoo: {
	"num": -784,
	"name": "Kommo-o",
	"types": [
		"Dragon",
		"Fighting"
	],
	"baseStats": {
		"hp": 75,
		"atk": 110,
		"def": 125,
		"spa": 102,
		"spd": 102,
		"spe": 85
	},
	"abilities": {
		"0": "Bulletproof",
		"1": "Soundproof",
		"H": "Overcoat"
	},
	"weightkg": 78.2,
	"prevo": "Hakamo-o",
	"evoLevel": 45,
	"eggGroups": [
		"Dragon"
	],
	"otherFormes": [
		"Kommo-o-Totem"
	],
	"formeOrder": [
		"Kommo-o",
		"Kommo-o-Totem"
	]
},
kommoototem: {
	"num": -784,
	"name": "Kommo-o-Totem",
	"baseSpecies": "Kommo-o",
	"forme": "Totem",
	"types": [
		"Dragon",
		"Fighting"
	],
	"baseStats": {
		"hp": 75,
		"atk": 110,
		"def": 125,
		"spa": 102,
		"spd": 102,
		"spe": 85
	},
	"abilities": {
		"0": "Overcoat"
	},
	"weightkg": 207.5,
	"eggGroups": [
		"Dragon"
	]
},
tapukoko: {
	"num": -785,
	"name": "Tapu Koko",
	"types": [
		"Electric",
		"Normal"
	],
	"gender": "N",
	"baseStats": {
		"hp": 70,
		"atk": 115,
		"def": 85,
		"spa": 85,
		"spd": 85,
		"spe": 130
	},
	"abilities": {
		"0": "Electric Surge",
		"H": "Telepathy"
	},
	"weightkg": 20.5,
	"tags": [
		"Sub-Legendary"
	],
	"eggGroups": [
		"Undiscovered"
	]
},
tapulele: {
	"num": -786,
	"name": "Tapu Lele",
	"types": [
		"Psychic",
		"Normal"
	],
	"gender": "N",
	"baseStats": {
		"hp": 70,
		"atk": 85,
		"def": 75,
		"spa": 122,
		"spd": 122,
		"spe": 95
	},
	"abilities": {
		"0": "Psychic Surge",
		"H": "Telepathy"
	},
	"weightkg": 18.6,
	"tags": [
		"Sub-Legendary"
	],
	"eggGroups": [
		"Undiscovered"
	]
},
tapubulu: {
	"num": -787,
	"name": "Tapu Bulu",
	"types": [
		"Grass",
		"Normal"
	],
	"gender": "N",
	"baseStats": {
		"hp": 70,
		"atk": 130,
		"def": 115,
		"spa": 90,
		"spd": 90,
		"spe": 75
	},
	"abilities": {
		"0": "Grassy Surge",
		"H": "Telepathy"
	},
	"weightkg": 45.5,
	"tags": [
		"Sub-Legendary"
	],
	"eggGroups": [
		"Undiscovered"
	]
},
tapufini: {
	"num": -788,
	"name": "Tapu Fini",
	"types": [
		"Water",
		"Normal"
	],
	"gender": "N",
	"baseStats": {
		"hp": 70,
		"atk": 75,
		"def": 115,
		"spa": 112,
		"spd": 112,
		"spe": 85
	},
	"abilities": {
		"0": "Misty Surge",
		"H": "Telepathy"
	},
	"weightkg": 21.2,
	"tags": [
		"Sub-Legendary"
	],
	"eggGroups": [
		"Undiscovered"
	]
},
cosmog: {
	"num": -789,
	"name": "Cosmog",
	"types": [
		"Psychic"
	],
	"gender": "N",
	"baseStats": {
		"hp": 43,
		"atk": 29,
		"def": 31,
		"spa": 30,
		"spd": 30,
		"spe": 37
	},
	"abilities": {
		"0": "Unaware"
	},
	"weightkg": 0.1,
	"evos": [
		"Cosmoem"
	],
	"tags": [
		"Restricted Legendary"
	],
	"eggGroups": [
		"Undiscovered"
	]
},
cosmoem: {
	"num": -790,
	"name": "Cosmoem",
	"types": [
		"Psychic"
	],
	"gender": "N",
	"baseStats": {
		"hp": 43,
		"atk": 29,
		"def": 131,
		"spa": 80,
		"spd": 80,
		"spe": 37
	},
	"abilities": {
		"0": "Sturdy"
	},
	"weightkg": 999.9,
	"tags": [
		"Restricted Legendary"
	],
	"prevo": "Cosmog",
	"evoLevel": 43,
	"evos": [
		"Solgaleo",
		"Lunala"
	],
	"eggGroups": [
		"Undiscovered"
	]
},
solgaleo: {
	"num": -791,
	"name": "Solgaleo",
	"types": [
		"Psychic",
		"Rock"
	],
	"gender": "N",
	"baseStats": {
		"hp": 137,
		"atk": 137,
		"def": 107,
		"spa": 101,
		"spd": 101,
		"spe": 97
	},
	"abilities": {
		"0": "Full Metal Body"
	},
	"weightkg": 230,
	"tags": [
		"Restricted Legendary"
	],
	"prevo": "Cosmoem",
	"evoLevel": 53,
	"eggGroups": [
		"Undiscovered"
	]
},
lunala: {
	"num": -792,
	"name": "Lunala",
	"types": [
		"Psychic",
		"Ghost"
	],
	"gender": "N",
	"baseStats": {
		"hp": 137,
		"atk": 113,
		"def": 89,
		"spa": 122,
		"spd": 122,
		"spe": 97
	},
	"abilities": {
		"0": "Shadow Shield"
	},
	"weightkg": 120,
	"tags": [
		"Restricted Legendary"
	],
	"prevo": "Cosmoem",
	"evoLevel": 53,
	"eggGroups": [
		"Undiscovered"
	]
},
nihilego: {
	"num": -793,
	"name": "Nihilego",
	"types": [
		"Rock",
		"Poison"
	],
	"gender": "N",
	"baseStats": {
		"hp": 109,
		"atk": 53,
		"def": 47,
		"spa": 129,
		"spd": 129,
		"spe": 103
	},
	"abilities": {
		"0": "Beast Boost"
	},
	"weightkg": 55.5,
	"tags": [
		"Sub-Legendary"
	],
	"eggGroups": [
		"Undiscovered"
	]
},
buzzwole: {
	"num": -794,
	"name": "Buzzwole",
	"types": [
		"Bug",
		"Fighting"
	],
	"gender": "N",
	"baseStats": {
		"hp": 107,
		"atk": 139,
		"def": 139,
		"spa": 53,
		"spd": 53,
		"spe": 79
	},
	"abilities": {
		"0": "Beast Boost"
	},
	"weightkg": 333.6,
	"tags": [
		"Sub-Legendary"
	],
	"eggGroups": [
		"Undiscovered"
	]
},
pheromosa: {
	"num": -795,
	"name": "Pheromosa",
	"types": [
		"Bug",
		"Fighting"
	],
	"gender": "N",
	"baseStats": {
		"hp": 71,
		"atk": 137,
		"def": 37,
		"spa": 87,
		"spd": 87,
		"spe": 151
	},
	"abilities": {
		"0": "Beast Boost"
	},
	"weightkg": 25,
	"tags": [
		"Sub-Legendary"
	],
	"eggGroups": [
		"Undiscovered"
	]
},
xurkitree: {
	"num": -796,
	"name": "Xurkitree",
	"types": [
		"Electric"
	],
	"gender": "N",
	"baseStats": {
		"hp": 83,
		"atk": 89,
		"def": 71,
		"spa": 122,
		"spd": 122,
		"spe": 83
	},
	"abilities": {
		"0": "Beast Boost"
	},
	"weightkg": 100,
	"tags": [
		"Sub-Legendary"
	],
	"eggGroups": [
		"Undiscovered"
	]
},
celesteela: {
	"num": -797,
	"name": "Celesteela",
	"types": [
		"Rock",
		"Flying"
	],
	"gender": "N",
	"baseStats": {
		"hp": 97,
		"atk": 101,
		"def": 103,
		"spa": 104,
		"spd": 104,
		"spe": 61
	},
	"abilities": {
		"0": "Beast Boost"
	},
	"weightkg": 999.9,
	"tags": [
		"Sub-Legendary"
	],
	"eggGroups": [
		"Undiscovered"
	]
},
kartana: {
	"num": -798,
	"name": "Kartana",
	"types": [
		"Grass",
		"Rock"
	],
	"gender": "N",
	"baseStats": {
		"hp": 59,
		"atk": 181,
		"def": 131,
		"spa": 45,
		"spd": 45,
		"spe": 109
	},
	"abilities": {
		"0": "Beast Boost"
	},
	"weightkg": 0.1,
	"tags": [
		"Sub-Legendary"
	],
	"eggGroups": [
		"Undiscovered"
	]
},
guzzlord: {
	"num": -799,
	"name": "Guzzlord",
	"types": [
		"Normal",
		"Dragon"
	],
	"gender": "N",
	"baseStats": {
		"hp": 223,
		"atk": 101,
		"def": 53,
		"spa": 75,
		"spd": 75,
		"spe": 43
	},
	"abilities": {
		"0": "Beast Boost"
	},
	"weightkg": 888,
	"tags": [
		"Sub-Legendary"
	],
	"eggGroups": [
		"Undiscovered"
	]
},
necrozma: {
	"num": -800,
	"name": "Necrozma",
	"types": [
		"Psychic"
	],
	"gender": "N",
	"baseStats": {
		"hp": 97,
		"atk": 107,
		"def": 101,
		"spa": 108,
		"spd": 108,
		"spe": 79
	},
	"abilities": {
		"0": "Prism Armor"
	},
	"weightkg": 230,
	"tags": [
		"Restricted Legendary"
	],
	"eggGroups": [
		"Undiscovered"
	],
	"otherFormes": [
		"Necrozma-Dusk-Mane",
		"Necrozma-Dawn-Wings",
		"Necrozma-Ultra"
	],
	"formeOrder": [
		"Necrozma",
		"Necrozma-Dusk-Mane",
		"Necrozma-Dawn-Wings",
		"Necrozma-Ultra"
	]
},
necrozmaduskmane: {
	"num": -800,
	"name": "Necrozma-Dusk-Mane",
	"baseSpecies": "Necrozma",
	"forme": "Dusk-Mane",
	"types": [
		"Psychic",
		"Rock"
	],
	"gender": "N",
	"baseStats": {
		"hp": 97,
		"atk": 157,
		"def": 127,
		"spa": 111,
		"spd": 111,
		"spe": 77
	},
	"abilities": {
		"0": "Prism Armor"
	},
	"weightkg": 460,
	"eggGroups": [
		"Undiscovered"
	],
	"changesFrom": "Necrozma"
},
necrozmadawnwings: {
	"num": -800,
	"name": "Necrozma-Dawn-Wings",
	"baseSpecies": "Necrozma",
	"forme": "Dawn-Wings",
	"types": [
		"Psychic",
		"Ghost"
	],
	"gender": "N",
	"baseStats": {
		"hp": 97,
		"atk": 113,
		"def": 109,
		"spa": 142,
		"spd": 142,
		"spe": 77
	},
	"abilities": {
		"0": "Prism Armor"
	},
	"weightkg": 350,
	"eggGroups": [
		"Undiscovered"
	],
	"changesFrom": "Necrozma"
},
necrozmaultra: {
	"num": -800,
	"name": "Necrozma-Ultra",
	"baseSpecies": "Necrozma",
	"forme": "Ultra",
	"types": [
		"Psychic",
		"Dragon"
	],
	"gender": "N",
	"baseStats": {
		"hp": 97,
		"atk": 167,
		"def": 97,
		"spa": 132,
		"spd": 132,
		"spe": 129
	},
	"abilities": {
		"0": "Neuroforce"
	},
	"weightkg": 230,
	"eggGroups": [
		"Undiscovered"
	],
	// "requiredItem": "Ultranecrozium Z",
	"battleOnly": [
		"Necrozma-Dawn-Wings",
		"Necrozma-Dusk-Mane"
	]
},
magearna: {
	"num": -801,
	"name": "Magearna",
	"types": [
		"Rock",
		"Normal"
	],
	"gender": "N",
	"baseStats": {
		"hp": 80,
		"atk": 95,
		"def": 115,
		"spa": 122,
		"spd": 122,
		"spe": 65
	},
	"abilities": {
		"0": "Soul-Heart"
	},
	"weightkg": 80.5,
	"eggGroups": [
		"Undiscovered"
	],
	"tags": [
		"Mythical"
	],
	"otherFormes": [
		"Magearna-Original"
	],
	"formeOrder": [
		"Magearna",
		"Magearna-Original"
	]
},
magearnaoriginal: {
	"num": -801,
	"name": "Magearna-Original",
	"baseSpecies": "Magearna",
	"forme": "Original",
	"types": [
		"Rock",
		"Normal"
	],
	"gender": "N",
	"baseStats": {
		"hp": 80,
		"atk": 95,
		"def": 115,
		"spa": 122,
		"spd": 122,
		"spe": 65
	},
	"abilities": {
		"0": "Soul-Heart"
	},
	"weightkg": 80.5,
	"eggGroups": [
		"Undiscovered"
	]
},
marshadow: {
	"num": -802,
	"name": "Marshadow",
	"types": [
		"Fighting",
		"Ghost"
	],
	"gender": "N",
	"baseStats": {
		"hp": 90,
		"atk": 125,
		"def": 80,
		"spa": 90,
		"spd": 90,
		"spe": 125
	},
	"abilities": {
		"0": "Technician"
	},
	"weightkg": 22.2,
	"tags": [
		"Mythical"
	],
	"eggGroups": [
		"Undiscovered"
	]
},
poipole: {
	"num": -803,
	"name": "Poipole",
	"types": [
		"Poison"
	],
	"gender": "N",
	"baseStats": {
		"hp": 67,
		"atk": 73,
		"def": 67,
		"spa": 70,
		"spd": 70,
		"spe": 73
	},
	"abilities": {
		"0": "Beast Boost"
	},
	"weightkg": 1.8,
	"tags": [
		"Sub-Legendary"
	],
	"evos": [
		"Naganadel"
	],
	"eggGroups": [
		"Undiscovered"
	]
},
naganadel: {
	"num": -804,
	"name": "Naganadel",
	"types": [
		"Poison",
		"Dragon"
	],
	"gender": "N",
	"baseStats": {
		"hp": 73,
		"atk": 73,
		"def": 73,
		"spa": 100,
		"spd": 100,
		"spe": 121
	},
	"abilities": {
		"0": "Beast Boost"
	},
	"weightkg": 150,
	"tags": [
		"Sub-Legendary"
	],
	"prevo": "Poipole",
	"evoType": "levelMove",
	"evoMove": "Dragon Pulse",
	"eggGroups": [
		"Undiscovered"
	]
},
stakataka: {
	"num": -805,
	"name": "Stakataka",
	"types": [
		"Rock"
	],
	"gender": "N",
	"baseStats": {
		"hp": 61,
		"atk": 131,
		"def": 211,
		"spa": 77,
		"spd": 77,
		"spe": 13
	},
	"abilities": {
		"0": "Beast Boost"
	},
	"weightkg": 820,
	"tags": [
		"Sub-Legendary"
	],
	"eggGroups": [
		"Undiscovered"
	]
},
blacephalon: {
	"num": -806,
	"name": "Blacephalon",
	"types": [
		"Fire",
		"Ghost"
	],
	"gender": "N",
	"baseStats": {
		"hp": 53,
		"atk": 127,
		"def": 53,
		"spa": 115,
		"spd": 115,
		"spe": 107
	},
	"abilities": {
		"0": "Beast Boost"
	},
	"weightkg": 13,
	"tags": [
		"Sub-Legendary"
	],
	"eggGroups": [
		"Undiscovered"
	]
},
zeraora: {
	"num": -807,
	"name": "Zeraora",
	"types": [
		"Electric"
	],
	"gender": "N",
	"baseStats": {
		"hp": 88,
		"atk": 112,
		"def": 75,
		"spa": 91,
		"spd": 91,
		"spe": 143
	},
	"abilities": {
		"0": "Volt Absorb"
	},
	"weightkg": 44.5,
	"tags": [
		"Mythical"
	],
	"eggGroups": [
		"Undiscovered"
	]
},
meltan: {
	"num": -808,
	"name": "Meltan",
	"types": [
		"Rock"
	],
	"gender": "N",
	"baseStats": {
		"hp": 46,
		"atk": 65,
		"def": 65,
		"spa": 45,
		"spd": 45,
		"spe": 34
	},
	"abilities": {
		"0": "Magnet Pull"
	},
	"weightkg": 8,
	"tags": [
		"Mythical"
	],
	"eggGroups": [
		"Undiscovered"
	]
},
melmetal: {
	"num": -809,
	"name": "Melmetal",
	"types": [
		"Rock"
	],
	"gender": "N",
	"baseStats": {
		"hp": 135,
		"atk": 143,
		"def": 143,
		"spa": 72,
		"spd": 72,
		"spe": 34
	},
	"abilities": {
		"0": "Iron Fist"
	},
	"weightkg": 800,
	"tags": [
		"Mythical"
	],
	"eggGroups": [
		"Undiscovered"
	],
	"canGigantamax": "G-Max Meltdown"
},
grookey: {
	"num": -810,
	"name": "Grookey",
	"types": [
		"Grass"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 50,
		"atk": 65,
		"def": 50,
		"spa": 40,
		"spd": 40,
		"spe": 65
	},
	"abilities": {
		"0": "Overgrow",
		"H": "Grassy Surge"
	},
	"weightkg": 5,
	"evos": [
		"Thwackey"
	],
	"eggGroups": [
		"Field",
		"Grass"
	]
},
thwackey: {
	"num": -811,
	"name": "Thwackey",
	"types": [
		"Grass"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 70,
		"atk": 85,
		"def": 70,
		"spa": 57,
		"spd": 57,
		"spe": 80
	},
	"abilities": {
		"0": "Overgrow",
		"H": "Grassy Surge"
	},
	"weightkg": 14,
	"prevo": "Grookey",
	"evoLevel": 16,
	"evos": [
		"Rillaboom"
	],
	"eggGroups": [
		"Field",
		"Grass"
	]
},
rillaboom: {
	"num": -812,
	"name": "Rillaboom",
	"types": [
		"Grass"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 100,
		"atk": 125,
		"def": 90,
		"spa": 65,
		"spd": 65,
		"spe": 85
	},
	"abilities": {
		"0": "Overgrow",
		"H": "Grassy Surge"
	},
	"weightkg": 90,
	"prevo": "Thwackey",
	"evoLevel": 35,
	"eggGroups": [
		"Field",
		"Grass"
	],
	"canGigantamax": "G-Max Drum Solo"
},
scorbunny: {
	"num": -813,
	"name": "Scorbunny",
	"types": [
		"Fire"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 50,
		"atk": 71,
		"def": 40,
		"spa": 40,
		"spd": 40,
		"spe": 69
	},
	"abilities": {
		"0": "Blaze",
		"H": "Libero"
	},
	"weightkg": 4.5,
	"evos": [
		"Raboot"
	],
	"eggGroups": [
		"Field",
		"Human-Like"
	]
},
raboot: {
	"num": -814,
	"name": "Raboot",
	"types": [
		"Fire"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 65,
		"atk": 86,
		"def": 60,
		"spa": 57,
		"spd": 57,
		"spe": 94
	},
	"abilities": {
		"0": "Blaze",
		"H": "Libero"
	},
	"weightkg": 9,
	"prevo": "Scorbunny",
	"evoLevel": 16,
	"evos": [
		"Cinderace"
	],
	"eggGroups": [
		"Field",
		"Human-Like"
	]
},
cinderace: {
	"num": -815,
	"name": "Cinderace",
	"types": [
		"Fire"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 80,
		"atk": 116,
		"def": 75,
		"spa": 70,
		"spd": 70,
		"spe": 119
	},
	"abilities": {
		"0": "Blaze",
		"H": "Libero"
	},
	"weightkg": 33,
	"prevo": "Raboot",
	"evoLevel": 35,
	"eggGroups": [
		"Field",
		"Human-Like"
	],
	"canGigantamax": "G-Max Fireball"
},
sobble: {
	"num": -816,
	"name": "Sobble",
	"types": [
		"Water"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 50,
		"atk": 40,
		"def": 40,
		"spa": 55,
		"spd": 55,
		"spe": 70
	},
	"abilities": {
		"0": "Torrent",
		"H": "Sniper"
	},
	"weightkg": 4,
	"evos": [
		"Drizzile"
	],
	"eggGroups": [
		"Water 1",
		"Field"
	]
},
drizzile: {
	"num": -817,
	"name": "Drizzile",
	"types": [
		"Water"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 65,
		"atk": 60,
		"def": 55,
		"spa": 75,
		"spd": 75,
		"spe": 90
	},
	"abilities": {
		"0": "Torrent",
		"H": "Sniper"
	},
	"weightkg": 11.5,
	"prevo": "Sobble",
	"evoLevel": 16,
	"evos": [
		"Inteleon"
	],
	"eggGroups": [
		"Water 1",
		"Field"
	]
},
inteleon: {
	"num": -818,
	"name": "Inteleon",
	"types": [
		"Water"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 70,
		"atk": 85,
		"def": 65,
		"spa": 95,
		"spd": 95,
		"spe": 120
	},
	"abilities": {
		"0": "Torrent",
		"H": "Sniper"
	},
	"weightkg": 45.2,
	"prevo": "Drizzile",
	"evoLevel": 35,
	"eggGroups": [
		"Water 1",
		"Field"
	],
	"canGigantamax": "G-Max Hydrosnipe"
},
skwovet: {
	"num": -819,
	"name": "Skwovet",
	"types": [
		"Normal"
	],
	"baseStats": {
		"hp": 70,
		"atk": 55,
		"def": 55,
		"spa": 35,
		"spd": 35,
		"spe": 25
	},
	"abilities": {
		"0": "Cheek Pouch",
		"H": "Gluttony"
	},
	"weightkg": 2.5,
	"evos": [
		"Greedent"
	],
	"eggGroups": [
		"Field"
	]
},
greedent: {
	"num": -820,
	"name": "Greedent",
	"types": [
		"Normal"
	],
	"baseStats": {
		"hp": 120,
		"atk": 95,
		"def": 95,
		"spa": 65,
		"spd": 65,
		"spe": 20
	},
	"abilities": {
		"0": "Cheek Pouch",
		"H": "Gluttony"
	},
	"weightkg": 6,
	"prevo": "Skwovet",
	"evoLevel": 24,
	"eggGroups": [
		"Field"
	]
},
rookidee: {
	"num": -821,
	"name": "Rookidee",
	"types": [
		"Flying"
	],
	"baseStats": {
		"hp": 38,
		"atk": 47,
		"def": 35,
		"spa": 34,
		"spd": 34,
		"spe": 57
	},
	"abilities": {
		"0": "Keen Eye",
		"1": "Unnerve",
		"H": "Big Pecks"
	},
	"weightkg": 1.8,
	"evos": [
		"Corvisquire"
	],
	"eggGroups": [
		"Flying"
	]
},
corvisquire: {
	"num": -822,
	"name": "Corvisquire",
	"types": [
		"Flying"
	],
	"baseStats": {
		"hp": 68,
		"atk": 67,
		"def": 55,
		"spa": 49,
		"spd": 49,
		"spe": 77
	},
	"abilities": {
		"0": "Keen Eye",
		"1": "Unnerve",
		"H": "Big Pecks"
	},
	"weightkg": 16,
	"prevo": "Rookidee",
	"evoLevel": 18,
	"evos": [
		"Corviknight"
	],
	"eggGroups": [
		"Flying"
	]
},
corviknight: {
	"num": -823,
	"name": "Corviknight",
	"types": [
		"Flying",
		"Rock"
	],
	"baseStats": {
		"hp": 98,
		"atk": 87,
		"def": 105,
		"spa": 69,
		"spd": 69,
		"spe": 67
	},
	"abilities": {
		"0": "Pressure",
		"1": "Unnerve",
		"H": "Mirror Armor"
	},
	"weightkg": 75,
	"prevo": "Corvisquire",
	"evoLevel": 38,
	"eggGroups": [
		"Flying"
	],
	"canGigantamax": "G-Max Wind Rage"
},
blipbug: {
	"num": -824,
	"name": "Blipbug",
	"types": [
		"Bug"
	],
	"baseStats": {
		"hp": 25,
		"atk": 20,
		"def": 20,
		"spa": 35,
		"spd": 35,
		"spe": 45
	},
	"abilities": {
		"0": "Swarm",
		"1": "Compound Eyes",
		"H": "Telepathy"
	},
	"weightkg": 8,
	"evos": [
		"Dottler"
	],
	"eggGroups": [
		"Bug"
	]
},
dottler: {
	"num": -825,
	"name": "Dottler",
	"types": [
		"Bug",
		"Psychic"
	],
	"baseStats": {
		"hp": 50,
		"atk": 35,
		"def": 80,
		"spa": 70,
		"spd": 70,
		"spe": 30
	},
	"abilities": {
		"0": "Swarm",
		"1": "Compound Eyes",
		"H": "Telepathy"
	},
	"weightkg": 19.5,
	"prevo": "Blipbug",
	"evoLevel": 10,
	"evos": [
		"Orbeetle"
	],
	"eggGroups": [
		"Bug"
	]
},
orbeetle: {
	"num": -826,
	"name": "Orbeetle",
	"types": [
		"Bug",
		"Psychic"
	],
	"baseStats": {
		"hp": 60,
		"atk": 45,
		"def": 110,
		"spa": 100,
		"spd": 100,
		"spe": 90
	},
	"abilities": {
		"0": "Swarm",
		"1": "Frisk",
		"H": "Telepathy"
	},
	"weightkg": 40.8,
	"prevo": "Dottler",
	"evoLevel": 30,
	"eggGroups": [
		"Bug"
	],
	"canGigantamax": "G-Max Gravitas"
},
nickit: {
	"num": -827,
	"name": "Nickit",
	"types": [
		"Normal"
	],
	"baseStats": {
		"hp": 40,
		"atk": 28,
		"def": 28,
		"spa": 49,
		"spd": 49,
		"spe": 50
	},
	"abilities": {
		"0": "Run Away",
		"1": "Unburden",
		"H": "Stakeout"
	},
	"weightkg": 8.9,
	"evos": [
		"Thievul"
	],
	"eggGroups": [
		"Field"
	]
},
thievul: {
	"num": -828,
	"name": "Thievul",
	"types": [
		"Normal"
	],
	"baseStats": {
		"hp": 70,
		"atk": 58,
		"def": 58,
		"spa": 89,
		"spd": 89,
		"spe": 90
	},
	"abilities": {
		"0": "Run Away",
		"1": "Unburden",
		"H": "Stakeout"
	},
	"weightkg": 19.9,
	"prevo": "Nickit",
	"evoLevel": 18,
	"eggGroups": [
		"Field"
	]
},
gossifleur: {
	"num": -829,
	"name": "Gossifleur",
	"types": [
		"Grass"
	],
	"baseStats": {
		"hp": 40,
		"atk": 40,
		"def": 60,
		"spa": 50,
		"spd": 50,
		"spe": 10
	},
	"abilities": {
		"0": "Cotton Down",
		"1": "Regenerator",
		"H": "Effect Spore"
	},
	"weightkg": 2.2,
	"evos": [
		"Eldegoss"
	],
	"eggGroups": [
		"Grass"
	]
},
eldegoss: {
	"num": -830,
	"name": "Eldegoss",
	"types": [
		"Grass"
	],
	"baseStats": {
		"hp": 60,
		"atk": 50,
		"def": 90,
		"spa": 100,
		"spd": 100,
		"spe": 60
	},
	"abilities": {
		"0": "Cotton Down",
		"1": "Regenerator",
		"H": "Effect Spore"
	},
	"weightkg": 2.5,
	"prevo": "Gossifleur",
	"evoLevel": 20,
	"eggGroups": [
		"Grass"
	]
},
wooloo: {
	"num": -831,
	"name": "Wooloo",
	"types": [
		"Normal"
	],
	"baseStats": {
		"hp": 42,
		"atk": 40,
		"def": 55,
		"spa": 42,
		"spd": 42,
		"spe": 48
	},
	"abilities": {
		"0": "Fluffy",
		"1": "Run Away",
		"H": "Bulletproof"
	},
	"weightkg": 6,
	"evos": [
		"Dubwool"
	],
	"eggGroups": [
		"Field"
	]
},
dubwool: {
	"num": -832,
	"name": "Dubwool",
	"types": [
		"Normal"
	],
	"baseStats": {
		"hp": 72,
		"atk": 80,
		"def": 100,
		"spa": 75,
		"spd": 75,
		"spe": 88
	},
	"abilities": {
		"0": "Fluffy",
		"1": "Steadfast",
		"H": "Bulletproof"
	},
	"weightkg": 43,
	"prevo": "Wooloo",
	"evoLevel": 24,
	"eggGroups": [
		"Field"
	]
},
chewtle: {
	"num": -833,
	"name": "Chewtle",
	"types": [
		"Water"
	],
	"baseStats": {
		"hp": 50,
		"atk": 64,
		"def": 50,
		"spa": 38,
		"spd": 38,
		"spe": 44
	},
	"abilities": {
		"0": "Strong Jaw",
		"1": "Shell Armor",
		"H": "Swift Swim"
	},
	"weightkg": 8.5,
	"evos": [
		"Drednaw"
	],
	"eggGroups": [
		"Monster",
		"Water 1"
	]
},
drednaw: {
	"num": -834,
	"name": "Drednaw",
	"types": [
		"Water",
		"Rock"
	],
	"baseStats": {
		"hp": 90,
		"atk": 115,
		"def": 90,
		"spa": 58,
		"spd": 58,
		"spe": 74
	},
	"abilities": {
		"0": "Strong Jaw",
		"1": "Shell Armor",
		"H": "Swift Swim"
	},
	"weightkg": 115.5,
	"prevo": "Chewtle",
	"evoLevel": 22,
	"eggGroups": [
		"Monster",
		"Water 1"
	],
	"canGigantamax": "G-Max Stonesurge"
},
yamper: {
	"num": -835,
	"name": "Yamper",
	"types": [
		"Electric"
	],
	"baseStats": {
		"hp": 59,
		"atk": 45,
		"def": 50,
		"spa": 45,
		"spd": 45,
		"spe": 26
	},
	"abilities": {
		"0": "Ball Fetch",
		"H": "Rattled"
	},
	"weightkg": 13.5,
	"evos": [
		"Boltund"
	],
	"eggGroups": [
		"Field"
	]
},
boltund: {
	"num": -836,
	"name": "Boltund",
	"types": [
		"Electric"
	],
	"baseStats": {
		"hp": 69,
		"atk": 90,
		"def": 60,
		"spa": 75,
		"spd": 75,
		"spe": 121
	},
	"abilities": {
		"0": "Strong Jaw",
		"H": "Competitive"
	},
	"weightkg": 34,
	"prevo": "Yamper",
	"evoLevel": 25,
	"eggGroups": [
		"Field"
	]
},
rolycoly: {
	"num": -837,
	"name": "Rolycoly",
	"types": [
		"Rock"
	],
	"baseStats": {
		"hp": 30,
		"atk": 40,
		"def": 50,
		"spa": 45,
		"spd": 45,
		"spe": 30
	},
	"abilities": {
		"0": "Steam Engine",
		"1": "Heatproof",
		"H": "Flash Fire"
	},
	"weightkg": 12,
	"evos": [
		"Carkol"
	],
	"eggGroups": [
		"Mineral"
	]
},
carkol: {
	"num": -838,
	"name": "Carkol",
	"types": [
		"Rock",
		"Fire"
	],
	"baseStats": {
		"hp": 80,
		"atk": 60,
		"def": 90,
		"spa": 65,
		"spd": 65,
		"spe": 50
	},
	"abilities": {
		"0": "Steam Engine",
		"1": "Flame Body",
		"H": "Flash Fire"
	},
	"weightkg": 78,
	"prevo": "Rolycoly",
	"evoLevel": 18,
	"evos": [
		"Coalossal"
	],
	"eggGroups": [
		"Mineral"
	]
},
coalossal: {
	"num": -839,
	"name": "Coalossal",
	"types": [
		"Rock",
		"Fire"
	],
	"baseStats": {
		"hp": 110,
		"atk": 80,
		"def": 120,
		"spa": 85,
		"spd": 85,
		"spe": 30
	},
	"abilities": {
		"0": "Steam Engine",
		"1": "Flame Body",
		"H": "Flash Fire"
	},
	"weightkg": 310.5,
	"prevo": "Carkol",
	"evoLevel": 34,
	"eggGroups": [
		"Mineral"
	],
	"canGigantamax": "G-Max Volcalith"
},
applin: {
	"num": -840,
	"name": "Applin",
	"types": [
		"Grass",
		"Dragon"
	],
	"baseStats": {
		"hp": 40,
		"atk": 40,
		"def": 80,
		"spa": 40,
		"spd": 40,
		"spe": 20
	},
	"abilities": {
		"0": "Ripen",
		"1": "Gluttony",
		"H": "Bulletproof"
	},
	"weightkg": 0.5,
	"evos": [
		"Flapple",
		"Appletun"
	],
	"eggGroups": [
		"Grass",
		"Dragon"
	]
},
flapple: {
	"num": -841,
	"name": "Flapple",
	"types": [
		"Grass",
		"Dragon"
	],
	"baseStats": {
		"hp": 70,
		"atk": 110,
		"def": 80,
		"spa": 77,
		"spd": 77,
		"spe": 70
	},
	"abilities": {
		"0": "Ripen",
		"1": "Gluttony",
		"H": "Hustle"
	},
	"weightkg": 1,
	"prevo": "Applin",
	"evoType": "useItem",
	"evoItem": "Tart Apple",
	"eggGroups": [
		"Grass",
		"Dragon"
	],
	"canGigantamax": "G-Max Tartness"
},
appletun: {
	"num": -842,
	"name": "Appletun",
	"types": [
		"Grass",
		"Dragon"
	],
	"baseStats": {
		"hp": 110,
		"atk": 85,
		"def": 80,
		"spa": 90,
		"spd": 90,
		"spe": 30
	},
	"abilities": {
		"0": "Ripen",
		"1": "Gluttony",
		"H": "Thick Fat"
	},
	"weightkg": 13,
	"prevo": "Applin",
	"evoType": "useItem",
	"evoItem": "Sweet Apple",
	"eggGroups": [
		"Grass",
		"Dragon"
	],
	"canGigantamax": "G-Max Sweetness"
},
silicobra: {
	"num": -843,
	"name": "Silicobra",
	"types": [
		"Ground"
	],
	"baseStats": {
		"hp": 52,
		"atk": 57,
		"def": 75,
		"spa": 42,
		"spd": 42,
		"spe": 46
	},
	"abilities": {
		"0": "Sand Spit",
		"1": "Shed Skin",
		"H": "Sand Veil"
	},
	"weightkg": 7.6,
	"evos": [
		"Sandaconda"
	],
	"eggGroups": [
		"Field",
		"Dragon"
	]
},
sandaconda: {
	"num": -844,
	"name": "Sandaconda",
	"types": [
		"Ground"
	],
	"baseStats": {
		"hp": 72,
		"atk": 107,
		"def": 125,
		"spa": 67,
		"spd": 67,
		"spe": 71
	},
	"abilities": {
		"0": "Sand Spit",
		"1": "Shed Skin",
		"H": "Sand Veil"
	},
	"weightkg": 65.5,
	"prevo": "Silicobra",
	"evoLevel": 36,
	"eggGroups": [
		"Field",
		"Dragon"
	],
	"canGigantamax": "G-Max Sandblast"
},
cramorant: {
	"num": -845,
	"name": "Cramorant",
	"types": [
		"Flying",
		"Water"
	],
	"baseStats": {
		"hp": 70,
		"atk": 85,
		"def": 55,
		"spa": 90,
		"spd": 90,
		"spe": 85
	},
	"abilities": {
		"0": "Gulp Missile"
	},
	"weightkg": 18,
	"eggGroups": [
		"Water 1",
		"Flying"
	],
	"otherFormes": [
		"Cramorant-Gulping",
		"Cramorant-Gorging"
	],
	"formeOrder": [
		"Cramorant",
		"Cramorant-Gulping",
		"Cramorant-Gorging"
	]
},
cramorantgulping: {
	"num": -845,
	"name": "Cramorant-Gulping",
	"baseSpecies": "Cramorant",
	"forme": "Gulping",
	"types": [
		"Flying",
		"Water"
	],
	"baseStats": {
		"hp": 70,
		"atk": 85,
		"def": 55,
		"spa": 90,
		"spd": 90,
		"spe": 85
	},
	"abilities": {
		"0": "Gulp Missile"
	},
	"weightkg": 18,
	"eggGroups": [
		"Water 1",
		"Flying"
	],
	// "requiredAbility": "Gulp Missile",
	"battleOnly": "Cramorant"
},
cramorantgorging: {
	"num": -845,
	"name": "Cramorant-Gorging",
	"baseSpecies": "Cramorant",
	"forme": "Gorging",
	"types": [
		"Flying",
		"Water"
	],
	"baseStats": {
		"hp": 70,
		"atk": 85,
		"def": 55,
		"spa": 90,
		"spd": 90,
		"spe": 85
	},
	"abilities": {
		"0": "Gulp Missile"
	},
	"weightkg": 18,
	"eggGroups": [
		"Water 1",
		"Flying"
	],
	// "requiredAbility": "Gulp Missile",
	"battleOnly": "Cramorant"
},
arrokuda: {
	"num": -846,
	"name": "Arrokuda",
	"types": [
		"Water"
	],
	"baseStats": {
		"hp": 41,
		"atk": 63,
		"def": 40,
		"spa": 35,
		"spd": 35,
		"spe": 66
	},
	"abilities": {
		"0": "Swift Swim",
		"H": "Propeller Tail"
	},
	"weightkg": 1,
	"evos": [
		"Barraskewda"
	],
	"eggGroups": [
		"Water 2"
	]
},
barraskewda: {
	"num": -847,
	"name": "Barraskewda",
	"types": [
		"Water"
	],
	"baseStats": {
		"hp": 61,
		"atk": 123,
		"def": 60,
		"spa": 55,
		"spd": 55,
		"spe": 136
	},
	"abilities": {
		"0": "Swift Swim",
		"H": "Propeller Tail"
	},
	"weightkg": 30,
	"prevo": "Arrokuda",
	"evoLevel": 26,
	"eggGroups": [
		"Water 2"
	]
},
toxel: {
	"num": -848,
	"name": "Toxel",
	"types": [
		"Electric",
		"Poison"
	],
	"baseStats": {
		"hp": 40,
		"atk": 38,
		"def": 35,
		"spa": 44,
		"spd": 44,
		"spe": 40
	},
	"abilities": {
		"0": "Rattled",
		"1": "Static",
		"H": "Klutz"
	},
	"weightkg": 11,
	"evos": [
		"Toxtricity",
		"Toxtricity-Low-Key"
	],
	"eggGroups": [
		"Undiscovered"
	],
	"canHatch": true
},
toxtricity: {
	"num": -849,
	"name": "Toxtricity",
	"baseForme": "Amped",
	"types": [
		"Electric",
		"Poison"
	],
	"baseStats": {
		"hp": 75,
		"atk": 98,
		"def": 70,
		"spa": 92,
		"spd": 92,
		"spe": 75
	},
	"abilities": {
		"0": "Punk Rock",
		"1": "Plus",
		"H": "Technician"
	},
	"weightkg": 40,
	"prevo": "Toxel",
	"evoLevel": 30,
	"eggGroups": [
		"Human-Like"
	],
	"otherFormes": [
		"Toxtricity-Low-Key"
	],
	"formeOrder": [
		"Toxtricity",
		"Toxtricity-Low-Key"
	],
	"canGigantamax": "G-Max Stun Shock"
},
toxtricitylowkey: {
	"num": -849,
	"name": "Toxtricity-Low-Key",
	"baseSpecies": "Toxtricity",
	"forme": "Low-Key",
	"types": [
		"Electric",
		"Poison"
	],
	"baseStats": {
		"hp": 75,
		"atk": 98,
		"def": 70,
		"spa": 92,
		"spd": 92,
		"spe": 75
	},
	"abilities": {
		"0": "Punk Rock",
		"1": "Minus",
		"H": "Technician"
	},
	"weightkg": 40,
	"prevo": "Toxel",
	"evoLevel": 30,
	"eggGroups": [
		"Human-Like"
	],
	"canGigantamax": "G-Max Stun Shock"
},
toxtricitylowkeygmax: {
	"num": -849,
	"name": "Toxtricity-Low-Key-Gmax",
	"baseSpecies": "Toxtricity",
	"forme": "Low-Key-Gmax",
	"types": [
		"Electric",
		"Poison"
	],
	"baseStats": {
		"hp": 75,
		"atk": 98,
		"def": 70,
		"spa": 92,
		"spd": 92,
		"spe": 75
	},
	"abilities": {
		"0": "Punk Rock",
		"1": "Minus",
		"H": "Technician"
	},
	"weightkg": 0,
	"eggGroups": [
		"Human-Like"
	],
	"battleOnly": "Toxtricity-Low-Key",
	"changesFrom": "Toxtricity-Low-Key"
},
sizzlipede: {
	"num": -850,
	"name": "Sizzlipede",
	"types": [
		"Fire",
		"Bug"
	],
	"baseStats": {
		"hp": 50,
		"atk": 65,
		"def": 45,
		"spa": 50,
		"spd": 50,
		"spe": 45
	},
	"abilities": {
		"0": "Flash Fire",
		"1": "White Smoke",
		"H": "Flame Body"
	},
	"weightkg": 1,
	"evos": [
		"Centiskorch"
	],
	"eggGroups": [
		"Bug"
	]
},
centiskorch: {
	"num": -851,
	"name": "Centiskorch",
	"types": [
		"Fire",
		"Bug"
	],
	"baseStats": {
		"hp": 100,
		"atk": 115,
		"def": 65,
		"spa": 90,
		"spd": 90,
		"spe": 65
	},
	"abilities": {
		"0": "Flash Fire",
		"1": "White Smoke",
		"H": "Flame Body"
	},
	"weightkg": 120,
	"prevo": "Sizzlipede",
	"evoLevel": 28,
	"eggGroups": [
		"Bug"
	],
	"canGigantamax": "G-Max Centiferno"
},
clobbopus: {
	"num": -852,
	"name": "Clobbopus",
	"types": [
		"Fighting"
	],
	"baseStats": {
		"hp": 50,
		"atk": 68,
		"def": 60,
		"spa": 50,
		"spd": 50,
		"spe": 32
	},
	"abilities": {
		"0": "Limber",
		"H": "Technician"
	},
	"weightkg": 4,
	"evos": [
		"Grapploct"
	],
	"eggGroups": [
		"Water 1",
		"Human-Like"
	]
},
grapploct: {
	"num": -853,
	"name": "Grapploct",
	"types": [
		"Fighting"
	],
	"baseStats": {
		"hp": 80,
		"atk": 118,
		"def": 90,
		"spa": 75,
		"spd": 75,
		"spe": 42
	},
	"abilities": {
		"0": "Limber",
		"H": "Technician"
	},
	"weightkg": 39,
	"prevo": "Clobbopus",
	"evoType": "levelMove",
	"evoMove": "Taunt",
	"eggGroups": [
		"Water 1",
		"Human-Like"
	]
},
sinistea: {
	"num": -854,
	"name": "Sinistea",
	"baseForme": "Phony",
	"types": [
		"Ghost"
	],
	"gender": "N",
	"baseStats": {
		"hp": 40,
		"atk": 45,
		"def": 45,
		"spa": 64,
		"spd": 64,
		"spe": 50
	},
	"abilities": {
		"0": "Weak Armor",
		"H": "Cursed Body"
	},
	"weightkg": 0.2,
	"evos": [
		"Polteageist"
	],
	"eggGroups": [
		"Mineral",
		"Amorphous"
	],
	"otherFormes": [
		"Sinistea-Antique"
	],
	"formeOrder": [
		"Sinistea",
		"Sinistea-Antique"
	]
},
sinisteaantique: {
	"num": -854,
	"name": "Sinistea-Antique",
	"baseSpecies": "Sinistea",
	"forme": "Antique",
	"types": [
		"Ghost"
	],
	"gender": "N",
	"baseStats": {
		"hp": 40,
		"atk": 45,
		"def": 45,
		"spa": 64,
		"spd": 64,
		"spe": 50
	},
	"abilities": {
		"0": "Weak Armor",
		"H": "Cursed Body"
	},
	"weightkg": 0.2,
	"evos": [
		"Polteageist-Antique"
	],
	"eggGroups": [
		"Undiscovered"
	]
},
polteageist: {
	"num": -855,
	"name": "Polteageist",
	"baseForme": "Phony",
	"types": [
		"Ghost"
	],
	"gender": "N",
	"baseStats": {
		"hp": 60,
		"atk": 65,
		"def": 65,
		"spa": 124,
		"spd": 124,
		"spe": 70
	},
	"abilities": {
		"0": "Weak Armor",
		"H": "Cursed Body"
	},
	"weightkg": 0.4,
	"prevo": "Sinistea",
	"evoType": "useItem",
	"evoItem": "Cracked Pot",
	"eggGroups": [
		"Mineral",
		"Amorphous"
	],
	"otherFormes": [
		"Polteageist-Antique"
	],
	"formeOrder": [
		"Polteageist",
		"Polteageist-Antique"
	]
},
polteageistantique: {
	"num": -855,
	"name": "Polteageist-Antique",
	"baseSpecies": "Polteageist",
	"forme": "Antique",
	"types": [
		"Ghost"
	],
	"gender": "N",
	"baseStats": {
		"hp": 60,
		"atk": 65,
		"def": 65,
		"spa": 124,
		"spd": 124,
		"spe": 70
	},
	"abilities": {
		"0": "Weak Armor",
		"H": "Cursed Body"
	},
	"weightkg": 0.4,
	"prevo": "Sinistea-Antique",
	"evoType": "useItem",
	"evoItem": "Chipped Pot",
	"eggGroups": [
		"Undiscovered"
	]
},
hatenna: {
	"num": -856,
	"name": "Hatenna",
	"types": [
		"Psychic"
	],
	"gender": "F",
	"baseStats": {
		"hp": 42,
		"atk": 30,
		"def": 45,
		"spa": 54,
		"spd": 54,
		"spe": 39
	},
	"abilities": {
		"0": "Healer",
		"1": "Anticipation",
		"H": "Magic Bounce"
	},
	"weightkg": 3.4,
	"evos": [
		"Hattrem"
	],
	"eggGroups": [
		"Fairy"
	]
},
hattrem: {
	"num": -857,
	"name": "Hattrem",
	"types": [
		"Psychic"
	],
	"gender": "F",
	"baseStats": {
		"hp": 57,
		"atk": 40,
		"def": 65,
		"spa": 79,
		"spd": 79,
		"spe": 49
	},
	"abilities": {
		"0": "Healer",
		"1": "Anticipation",
		"H": "Magic Bounce"
	},
	"weightkg": 4.8,
	"prevo": "Hatenna",
	"evoLevel": 32,
	"evos": [
		"Hatterene"
	],
	"eggGroups": [
		"Fairy"
	]
},
hatterene: {
	"num": -858,
	"name": "Hatterene",
	"types": [
		"Psychic",
		"Normal"
	],
	"gender": "F",
	"baseStats": {
		"hp": 57,
		"atk": 90,
		"def": 95,
		"spa": 119,
		"spd": 119,
		"spe": 29
	},
	"abilities": {
		"0": "Healer",
		"1": "Anticipation",
		"H": "Magic Bounce"
	},
	"weightkg": 5.1,
	"prevo": "Hattrem",
	"evoLevel": 42,
	"eggGroups": [
		"Fairy"
	],
	"canGigantamax": "G-Max Smite"
},
impidimp: {
	"num": -859,
	"name": "Impidimp",
	"types": [
		"Normal"
	],
	"gender": "M",
	"baseStats": {
		"hp": 45,
		"atk": 45,
		"def": 30,
		"spa": 47,
		"spd": 47,
		"spe": 50
	},
	"abilities": {
		"0": "Prankster",
		"1": "Frisk",
		"H": "Pickpocket"
	},
	"weightkg": 5.5,
	"evos": [
		"Morgrem"
	],
	"eggGroups": [
		"Fairy",
		"Human-Like"
	]
},
morgrem: {
	"num": -860,
	"name": "Morgrem",
	"types": [
		"Normal"
	],
	"gender": "M",
	"baseStats": {
		"hp": 65,
		"atk": 60,
		"def": 45,
		"spa": 65,
		"spd": 65,
		"spe": 70
	},
	"abilities": {
		"0": "Prankster",
		"1": "Frisk",
		"H": "Pickpocket"
	},
	"weightkg": 12.5,
	"prevo": "Impidimp",
	"evoLevel": 32,
	"evos": [
		"Grimmsnarl"
	],
	"eggGroups": [
		"Fairy",
		"Human-Like"
	]
},
grimmsnarl: {
	"num": -861,
	"name": "Grimmsnarl",
	"types": [
		"Normal"
	],
	"gender": "M",
	"baseStats": {
		"hp": 95,
		"atk": 120,
		"def": 65,
		"spa": 85,
		"spd": 85,
		"spe": 60
	},
	"abilities": {
		"0": "Prankster",
		"1": "Frisk",
		"H": "Pickpocket"
	},
	"weightkg": 61,
	"prevo": "Morgrem",
	"evoLevel": 42,
	"eggGroups": [
		"Fairy",
		"Human-Like"
	],
	"canGigantamax": "G-Max Snooze"
},
obstagoon: {
	"num": -862,
	"name": "Obstagoon",
	"types": [
		"Normal"
	],
	"baseStats": {
		"hp": 93,
		"atk": 90,
		"def": 101,
		"spa": 70,
		"spd": 70,
		"spe": 95
	},
	"abilities": {
		"0": "Reckless",
		"1": "Guts",
		"H": "Defiant"
	},
	"weightkg": 46,
	"prevo": "Linoone-Galar",
	"evoLevel": 35,
	"evoCondition": "at night",
	"eggGroups": [
		"Field"
	]
},
perrserker: {
	"num": -863,
	"name": "Perrserker",
	"types": [
		"Rock"
	],
	"baseStats": {
		"hp": 70,
		"atk": 110,
		"def": 100,
		"spa": 55,
		"spd": 55,
		"spe": 50
	},
	"abilities": {
		"0": "Battle Armor",
		"1": "Tough Claws",
		"H": "Steely Spirit"
	},
	"weightkg": 28,
	"prevo": "Meowth-Galar",
	"evoLevel": 28,
	"eggGroups": [
		"Field"
	]
},
cursola: {
	"num": -864,
	"name": "Cursola",
	"types": [
		"Ghost"
	],
	"genderRatio": {
		"M": 0.25,
		"F": 0.75
	},
	"baseStats": {
		"hp": 60,
		"atk": 95,
		"def": 50,
		"spa": 137,
		"spd": 137,
		"spe": 30
	},
	"abilities": {
		"0": "Weak Armor",
		"H": "Perish Body"
	},
	"weightkg": 0.4,
	"prevo": "Corsola-Galar",
	"evoLevel": 38,
	"eggGroups": [
		"Water 1",
		"Water 3"
	]
},
sirfetchd: {
	"num": -865,
	"name": "Sirfetch’d",
	"types": [
		"Fighting"
	],
	"baseStats": {
		"hp": 62,
		"atk": 135,
		"def": 95,
		"spa": 75,
		"spd": 75,
		"spe": 65
	},
	"abilities": {
		"0": "Steadfast",
		"H": "Scrappy"
	},
	"weightkg": 117,
	"prevo": "Farfetch’d-Galar",
	"evoType": "other",
	"evoCondition": "Land 3 critical hits in 1 battle",
	"eggGroups": [
		"Flying",
		"Field"
	]
},
mrrime: {
	"num": -866,
	"name": "Mr. Rime",
	"types": [
		"Ice",
		"Psychic"
	],
	"baseStats": {
		"hp": 80,
		"atk": 85,
		"def": 75,
		"spa": 105,
		"spd": 105,
		"spe": 70
	},
	"abilities": {
		"0": "Tangled Feet",
		"1": "Screen Cleaner",
		"H": "Ice Body"
	},
	"weightkg": 58.2,
	"prevo": "Mr. Mime-Galar",
	"evoLevel": 42,
	"eggGroups": [
		"Human-Like"
	]
},
runerigus: {
	"num": -867,
	"name": "Runerigus",
	"types": [
		"Ground",
		"Ghost"
	],
	"baseStats": {
		"hp": 58,
		"atk": 95,
		"def": 145,
		"spa": 77,
		"spd": 77,
		"spe": 30
	},
	"abilities": {
		"0": "Wandering Spirit"
	},
	"weightkg": 66.6,
	"prevo": "Yamask-Galar",
	"evoType": "other",
	"evoCondition": "Have 49+ HP lost and walk under stone sculpture in Dusty Bowl",
	"eggGroups": [
		"Mineral",
		"Amorphous"
	]
},
milcery: {
	"num": -868,
	"name": "Milcery",
	"types": [
		"Normal"
	],
	"gender": "F",
	"baseStats": {
		"hp": 45,
		"atk": 40,
		"def": 40,
		"spa": 55,
		"spd": 55,
		"spe": 34
	},
	"abilities": {
		"0": "Sweet Veil",
		"H": "Aroma Veil"
	},
	"weightkg": 0.3,
	"evos": [
		"Alcremie"
	],
	"eggGroups": [
		"Fairy",
		"Amorphous"
	]
},
alcremie: {
	"num": -869,
	"name": "Alcremie",
	"baseForme": "Vanilla Cream",
	"types": [
		"Normal"
	],
	"gender": "F",
	"baseStats": {
		"hp": 65,
		"atk": 60,
		"def": 75,
		"spa": 115,
		"spd": 115,
		"spe": 64
	},
	"abilities": {
		"0": "Sweet Veil",
		"H": "Aroma Veil"
	},
	"weightkg": 0.5,
	"prevo": "Milcery",
	"evoType": "other",
	"evoCondition": "spin while holding a Sweet",
	"eggGroups": [
		"Fairy",
		"Amorphous"
	],
	"cosmeticFormes": [
		"Alcremie-Ruby-Cream",
		"Alcremie-Matcha-Cream",
		"Alcremie-Mint-Cream",
		"Alcremie-Lemon-Cream",
		"Alcremie-Salted-Cream",
		"Alcremie-Ruby-Swirl",
		"Alcremie-Caramel-Swirl",
		"Alcremie-Rainbow-Swirl"
	],
	"formeOrder": [
		"Alcremie",
		"Alcremie-Ruby-Cream",
		"Alcremie-Matcha-Cream",
		"Alcremie-Mint-Cream",
		"Alcremie-Lemon-Cream",
		"Alcremie-Salted-Cream",
		"Alcremie-Ruby-Swirl",
		"Alcremie-Caramel-Swirl",
		"Alcremie-Rainbow-Swirl"
	],
	"canGigantamax": "G-Max Finale"
},
falinks: {
	"num": -870,
	"name": "Falinks",
	"types": [
		"Fighting"
	],
	"gender": "N",
	"baseStats": {
		"hp": 65,
		"atk": 100,
		"def": 100,
		"spa": 65,
		"spd": 65,
		"spe": 75
	},
	"abilities": {
		"0": "Battle Armor",
		"H": "Defiant"
	},
	"weightkg": 62,
	"eggGroups": [
		"Fairy",
		"Mineral"
	]
},
pincurchin: {
	"num": -871,
	"name": "Pincurchin",
	"types": [
		"Electric"
	],
	"baseStats": {
		"hp": 48,
		"atk": 101,
		"def": 95,
		"spa": 88,
		"spd": 88,
		"spe": 15
	},
	"abilities": {
		"0": "Lightning Rod",
		"H": "Electric Surge"
	},
	"weightkg": 1,
	"eggGroups": [
		"Water 1",
		"Amorphous"
	]
},
snom: {
	"num": -872,
	"name": "Snom",
	"types": [
		"Ice",
		"Bug"
	],
	"baseStats": {
		"hp": 30,
		"atk": 25,
		"def": 35,
		"spa": 37,
		"spd": 37,
		"spe": 20
	},
	"abilities": {
		"0": "Shield Dust",
		"H": "Ice Scales"
	},
	"weightkg": 3.8,
	"evos": [
		"Frosmoth"
	],
	"eggGroups": [
		"Bug"
	]
},
frosmoth: {
	"num": -873,
	"name": "Frosmoth",
	"types": [
		"Ice",
		"Bug"
	],
	"baseStats": {
		"hp": 70,
		"atk": 65,
		"def": 60,
		"spa": 107,
		"spd": 107,
		"spe": 65
	},
	"abilities": {
		"0": "Shield Dust",
		"H": "Ice Scales"
	},
	"weightkg": 42,
	"prevo": "Snom",
	"evoType": "levelFriendship",
	"evoCondition": "at night",
	"eggGroups": [
		"Bug"
	]
},
stonjourner: {
	"num": -874,
	"name": "Stonjourner",
	"types": [
		"Rock"
	],
	"baseStats": {
		"hp": 100,
		"atk": 125,
		"def": 135,
		"spa": 20,
		"spd": 20,
		"spe": 70
	},
	"abilities": {
		"0": "Power Spot"
	},
	"weightkg": 520,
	"eggGroups": [
		"Mineral"
	]
},
eiscue: {
	"num": -875,
	"name": "Eiscue",
	"types": [
		"Ice"
	],
	"baseStats": {
		"hp": 75,
		"atk": 80,
		"def": 110,
		"spa": 77,
		"spd": 77,
		"spe": 50
	},
	"abilities": {
		"0": "Ice Face"
	},
	"weightkg": 89,
	"eggGroups": [
		"Water 1",
		"Field"
	],
	"otherFormes": [
		"Eiscue-Noice"
	],
	"formeOrder": [
		"Eiscue",
		"Eiscue-Noice"
	]
},
eiscuenoice: {
	"num": -875,
	"name": "Eiscue-Noice",
	"baseSpecies": "Eiscue",
	"forme": "Noice",
	"types": [
		"Ice"
	],
	"baseStats": {
		"hp": 75,
		"atk": 80,
		"def": 70,
		"spa": 57,
		"spd": 57,
		"spe": 130
	},
	"abilities": {
		"0": "Ice Face"
	},
	"weightkg": 89,
	"eggGroups": [
		"Water 1",
		"Field"
	],
	// "requiredAbility": "Ice Face",
	"battleOnly": "Eiscue"
},
indeedee: {
	"num": -876,
	"name": "Indeedee",
	"baseForme": "M",
	"types": [
		"Psychic",
		"Normal"
	],
	"gender": "M",
	"baseStats": {
		"hp": 60,
		"atk": 65,
		"def": 55,
		"spa": 100,
		"spd": 100,
		"spe": 95
	},
	"abilities": {
		"0": "Inner Focus",
		"1": "Synchronize",
		"H": "Psychic Surge"
	},
	"weightkg": 28,
	"eggGroups": [
		"Fairy"
	],
	"otherFormes": [
		"Indeedee-F"
	],
	"formeOrder": [
		"Indeedee",
		"Indeedee-F"
	]
},
indeedeef: {
	"num": -876,
	"name": "Indeedee-F",
	"baseSpecies": "Indeedee",
	"forme": "F",
	"types": [
		"Psychic",
		"Normal"
	],
	"gender": "F",
	"baseStats": {
		"hp": 70,
		"atk": 55,
		"def": 65,
		"spa": 100,
		"spd": 100,
		"spe": 85
	},
	"abilities": {
		"0": "Own Tempo",
		"1": "Synchronize",
		"H": "Psychic Surge"
	},
	"weightkg": 28,
	"eggGroups": [
		"Fairy"
	]
},
morpeko: {
	"num": -877,
	"name": "Morpeko",
	"types": [
		"Electric",
		"Normal"
	],
	"baseStats": {
		"hp": 58,
		"atk": 95,
		"def": 58,
		"spa": 64,
		"spd": 64,
		"spe": 97
	},
	"abilities": {
		"0": "Hunger Switch"
	},
	"weightkg": 3,
	"eggGroups": [
		"Field",
		"Fairy"
	],
	"otherFormes": [
		"Morpeko-Hangry"
	],
	"formeOrder": [
		"Morpeko",
		"Morpeko-Hangry"
	]
},
morpekohangry: {
	"num": -877,
	"name": "Morpeko-Hangry",
	"baseSpecies": "Morpeko",
	"forme": "Hangry",
	"types": [
		"Electric",
		"Normal"
	],
	"baseStats": {
		"hp": 58,
		"atk": 95,
		"def": 58,
		"spa": 64,
		"spd": 64,
		"spe": 97
	},
	"abilities": {
		"0": "Hunger Switch"
	},
	"weightkg": 3,
	"eggGroups": [
		"Field",
		"Fairy"
	],
	// "requiredAbility": "Hunger Switch",
	"battleOnly": "Morpeko"
},
cufant: {
	"num": -878,
	"name": "Cufant",
	"types": [
		"Rock"
	],
	"baseStats": {
		"hp": 72,
		"atk": 80,
		"def": 49,
		"spa": 44,
		"spd": 44,
		"spe": 40
	},
	"abilities": {
		"0": "Sheer Force",
		"H": "Heavy Metal"
	},
	"weightkg": 100,
	"evos": [
		"Copperajah"
	],
	"eggGroups": [
		"Field",
		"Mineral"
	]
},
copperajah: {
	"num": -879,
	"name": "Copperajah",
	"types": [
		"Rock"
	],
	"baseStats": {
		"hp": 122,
		"atk": 130,
		"def": 69,
		"spa": 74,
		"spd": 74,
		"spe": 30
	},
	"abilities": {
		"0": "Sheer Force",
		"H": "Heavy Metal"
	},
	"weightkg": 650,
	"prevo": "Cufant",
	"evoLevel": 34,
	"eggGroups": [
		"Field",
		"Mineral"
	],
	"canGigantamax": "G-Max Steelsurge"
},
dracozolt: {
	"num": -880,
	"name": "Dracozolt",
	"types": [
		"Electric",
		"Dragon"
	],
	"gender": "N",
	"baseStats": {
		"hp": 90,
		"atk": 100,
		"def": 90,
		"spa": 75,
		"spd": 75,
		"spe": 75
	},
	"abilities": {
		"0": "Volt Absorb",
		"1": "Hustle",
		"H": "Sand Rush"
	},
	"weightkg": 190,
	"eggGroups": [
		"Undiscovered"
	]
},
arctozolt: {
	"num": -881,
	"name": "Arctozolt",
	"types": [
		"Electric",
		"Ice"
	],
	"gender": "N",
	"baseStats": {
		"hp": 90,
		"atk": 100,
		"def": 90,
		"spa": 85,
		"spd": 85,
		"spe": 55
	},
	"abilities": {
		"0": "Volt Absorb",
		"1": "Static",
		"H": "Slush Rush"
	},
	"weightkg": 150,
	"eggGroups": [
		"Undiscovered"
	]
},
dracovish: {
	"num": -882,
	"name": "Dracovish",
	"types": [
		"Water",
		"Dragon"
	],
	"gender": "N",
	"baseStats": {
		"hp": 90,
		"atk": 90,
		"def": 100,
		"spa": 75,
		"spd": 75,
		"spe": 75
	},
	"abilities": {
		"0": "Water Absorb",
		"1": "Strong Jaw",
		"H": "Sand Rush"
	},
	"weightkg": 215,
	"eggGroups": [
		"Undiscovered"
	]
},
arctovish: {
	"num": -883,
	"name": "Arctovish",
	"types": [
		"Water",
		"Ice"
	],
	"gender": "N",
	"baseStats": {
		"hp": 90,
		"atk": 90,
		"def": 100,
		"spa": 85,
		"spd": 85,
		"spe": 55
	},
	"abilities": {
		"0": "Water Absorb",
		"1": "Ice Body",
		"H": "Slush Rush"
	},
	"weightkg": 175,
	"eggGroups": [
		"Undiscovered"
	]
},
duraludon: {
	"num": -884,
	"name": "Duraludon",
	"types": [
		"Rock",
		"Dragon"
	],
	"baseStats": {
		"hp": 70,
		"atk": 95,
		"def": 115,
		"spa": 85,
		"spd": 85,
		"spe": 85
	},
	"abilities": {
		"0": "Light Metal",
		"1": "Heavy Metal",
		"H": "Stalwart"
	},
	"weightkg": 40,
	"eggGroups": [
		"Mineral",
		"Dragon"
	],
	"canGigantamax": "G-Max Depletion"
},
dreepy: {
	"num": -885,
	"name": "Dreepy",
	"types": [
		"Dragon",
		"Ghost"
	],
	"baseStats": {
		"hp": 28,
		"atk": 60,
		"def": 30,
		"spa": 35,
		"spd": 35,
		"spe": 82
	},
	"abilities": {
		"0": "Clear Body",
		"1": "Infiltrator",
		"H": "Cursed Body"
	},
	"weightkg": 2,
	"evos": [
		"Drakloak"
	],
	"eggGroups": [
		"Amorphous",
		"Dragon"
	]
},
drakloak: {
	"num": -886,
	"name": "Drakloak",
	"types": [
		"Dragon",
		"Ghost"
	],
	"baseStats": {
		"hp": 68,
		"atk": 80,
		"def": 50,
		"spa": 55,
		"spd": 55,
		"spe": 102
	},
	"abilities": {
		"0": "Clear Body",
		"1": "Infiltrator",
		"H": "Cursed Body"
	},
	"weightkg": 11,
	"prevo": "Dreepy",
	"evoLevel": 50,
	"evos": [
		"Dragapult"
	],
	"eggGroups": [
		"Amorphous",
		"Dragon"
	]
},
dragapult: {
	"num": -887,
	"name": "Dragapult",
	"types": [
		"Dragon",
		"Ghost"
	],
	"baseStats": {
		"hp": 88,
		"atk": 120,
		"def": 75,
		"spa": 87,
		"spd": 87,
		"spe": 142
	},
	"abilities": {
		"0": "Clear Body",
		"1": "Infiltrator",
		"H": "Cursed Body"
	},
	"weightkg": 50,
	"prevo": "Drakloak",
	"evoLevel": 60,
	"eggGroups": [
		"Amorphous",
		"Dragon"
	]
},
zacian: {
	"num": -888,
	"name": "Zacian",
	"baseForme": "Hero",
	"types": [
		"Normal"
	],
	"gender": "N",
	"baseStats": {
		"hp": 92,
		"atk": 130,
		"def": 115,
		"spa": 97,
		"spd": 97,
		"spe": 138
	},
	"abilities": {
		"0": "Intrepid Sword"
	},
	"weightkg": 110,
	"eggGroups": [
		"Undiscovered"
	],
	"tags": [
		"Restricted Legendary"
	],
	"otherFormes": [
		"Zacian-Crowned"
	],
	"formeOrder": [
		"Zacian",
		"Zacian-Crowned"
	],
	"cannotDynamax": true
},
zaciancrowned: {
	"num": -888,
	"name": "Zacian-Crowned",
	"baseSpecies": "Zacian",
	"forme": "Crowned",
	"types": [
		"Normal",
		"Rock"
	],
	"gender": "N",
	"baseStats": {
		"hp": 92,
		"atk": 170,
		"def": 115,
		"spa": 97,
		"spd": 97,
		"spe": 148
	},
	"abilities": {
		"0": "Intrepid Sword"
	},
	"weightkg": 355,
	"eggGroups": [
		"Undiscovered"
	],
	// "requiredItem": "Rusted Sword",
	"battleOnly": "Zacian",
	"cannotDynamax": true
},
zamazenta: {
	"num": -889,
	"name": "Zamazenta",
	"baseForme": "Hero",
	"types": [
		"Fighting"
	],
	"gender": "N",
	"baseStats": {
		"hp": 92,
		"atk": 130,
		"def": 115,
		"spa": 97,
		"spd": 97,
		"spe": 138
	},
	"abilities": {
		"0": "Dauntless Shield"
	},
	"weightkg": 210,
	"eggGroups": [
		"Undiscovered"
	],
	"tags": [
		"Restricted Legendary"
	],
	"otherFormes": [
		"Zamazenta-Crowned"
	],
	"formeOrder": [
		"Zamazenta",
		"Zamazenta-Crowned"
	],
	"cannotDynamax": true
},
zamazentacrowned: {
	"num": -889,
	"name": "Zamazenta-Crowned",
	"baseSpecies": "Zamazenta",
	"forme": "Crowned",
	"types": [
		"Fighting",
		"Rock"
	],
	"gender": "N",
	"baseStats": {
		"hp": 92,
		"atk": 130,
		"def": 145,
		"spa": 112,
		"spd": 112,
		"spe": 128
	},
	"abilities": {
		"0": "Dauntless Shield"
	},
	"weightkg": 785,
	"eggGroups": [
		"Undiscovered"
	],
	// "requiredItem": "Rusted Shield",
	"battleOnly": "Zamazenta",
	"cannotDynamax": true
},
eternatus: {
	"num": -890,
	"name": "Eternatus",
	"types": [
		"Poison",
		"Dragon"
	],
	"gender": "N",
	"baseStats": {
		"hp": 140,
		"atk": 85,
		"def": 95,
		"spa": 120,
		"spd": 120,
		"spe": 130
	},
	"abilities": {
		"0": "Pressure"
	},
	"weightkg": 950,
	"eggGroups": [
		"Undiscovered"
	],
	"tags": [
		"Restricted Legendary"
	],
	"otherFormes": [
		"Eternatus-Eternamax"
	],
	"formeOrder": [
		"Eternatus",
		"Eternatus-Eternamax"
	],
	"cannotDynamax": true
},
eternatuseternamax: {
	"num": -890,
	"name": "Eternatus-Eternamax",
	"baseSpecies": "Eternatus",
	"forme": "Eternamax",
	"types": [
		"Poison",
		"Dragon"
	],
	"gender": "N",
	"baseStats": {
		"hp": 255,
		"atk": 115,
		"def": 250,
		"spa": 187,
		"spd": 187,
		"spe": 130
	},
	"abilities": {
		"0": "Pressure"
	},
	"weightkg": 0,
	"eggGroups": [
		"Undiscovered"
	],
	"cannotDynamax": true
},
kubfu: {
	"num": -891,
	"name": "Kubfu",
	"types": [
		"Fighting"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 60,
		"atk": 90,
		"def": 60,
		"spa": 51,
		"spd": 51,
		"spe": 72
	},
	"abilities": {
		"0": "Inner Focus"
	},
	"weightkg": 12,
	"tags": [
		"Sub-Legendary"
	],
	"evos": [
		"Urshifu",
		"Urshifu-Rapid-Strike"
	],
	"eggGroups": [
		"Undiscovered"
	]
},
urshifu: {
	"num": -892,
	"name": "Urshifu",
	"baseForme": "Single-Strike",
	"types": [
		"Fighting",
		"Normal"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 100,
		"atk": 130,
		"def": 100,
		"spa": 61,
		"spd": 61,
		"spe": 97
	},
	"abilities": {
		"0": "Unseen Fist"
	},
	"weightkg": 105,
	"tags": [
		"Sub-Legendary"
	],
	"prevo": "Kubfu",
	"evoType": "other",
	"evoCondition": "Defeat the Single Strike Tower",
	"eggGroups": [
		"Undiscovered"
	],
	"otherFormes": [
		"Urshifu-Rapid-Strike"
	],
	"formeOrder": [
		"Urshifu",
		"Urshifu-Rapid-Strike"
	],
	"canGigantamax": "G-Max One Blow"
},
urshifurapidstrike: {
	"num": -892,
	"name": "Urshifu-Rapid-Strike",
	"baseSpecies": "Urshifu",
	"forme": "Rapid-Strike",
	"types": [
		"Fighting",
		"Water"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 100,
		"atk": 130,
		"def": 100,
		"spa": 61,
		"spd": 61,
		"spe": 97
	},
	"abilities": {
		"0": "Unseen Fist"
	},
	"weightkg": 105,
	"prevo": "Kubfu",
	"evoType": "other",
	"evoCondition": "Defeat the Rapid Strike Tower",
	"eggGroups": [
		"Undiscovered"
	],
	"canGigantamax": "G-Max Rapid Flow"
},
urshifurapidstrikegmax: {
	"num": -892,
	"name": "Urshifu-Rapid-Strike-Gmax",
	"baseSpecies": "Urshifu",
	"forme": "Rapid-Strike-Gmax",
	"types": [
		"Fighting",
		"Water"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 100,
		"atk": 130,
		"def": 100,
		"spa": 61,
		"spd": 61,
		"spe": 97
	},
	"abilities": {
		"0": "Unseen Fist"
	},
	"weightkg": 105,
	"eggGroups": [
		"Undiscovered"
	],
	"battleOnly": "Urshifu-Rapid-Strike",
	"changesFrom": "Urshifu-Rapid-Strike"
},
zarude: {
	"num": -893,
	"name": "Zarude",
	"types": [
		"Normal",
		"Grass"
	],
	"gender": "N",
	"baseStats": {
		"hp": 105,
		"atk": 120,
		"def": 105,
		"spa": 82,
		"spd": 82,
		"spe": 105
	},
	"abilities": {
		"0": "Leaf Guard"
	},
	"weightkg": 70,
	"eggGroups": [
		"Undiscovered"
	],
	"tags": [
		"Mythical"
	],
	"otherFormes": [
		"Zarude-Dada"
	],
	"formeOrder": [
		"Zarude",
		"Zarude-Dada"
	]
},
zarudedada: {
	"num": -893,
	"name": "Zarude-Dada",
	"baseSpecies": "Zarude",
	"forme": "Dada",
	"types": [
		"Normal",
		"Grass"
	],
	"gender": "N",
	"baseStats": {
		"hp": 105,
		"atk": 120,
		"def": 105,
		"spa": 82,
		"spd": 82,
		"spe": 105
	},
	"abilities": {
		"0": "Leaf Guard"
	},
	"weightkg": 70,
	"eggGroups": [
		"Undiscovered"
	]
},
regieleki: {
	"num": -894,
	"name": "Regieleki",
	"types": [
		"Electric"
	],
	"gender": "N",
	"baseStats": {
		"hp": 80,
		"atk": 100,
		"def": 50,
		"spa": 75,
		"spd": 75,
		"spe": 200
	},
	"abilities": {
		"0": "Transistor"
	},
	"weightkg": 145,
	"tags": [
		"Sub-Legendary"
	],
	"eggGroups": [
		"Undiscovered"
	]
},
regidrago: {
	"num": -895,
	"name": "Regidrago",
	"types": [
		"Dragon"
	],
	"gender": "N",
	"baseStats": {
		"hp": 200,
		"atk": 100,
		"def": 50,
		"spa": 75,
		"spd": 75,
		"spe": 80
	},
	"abilities": {
		"0": "Dragon's Maw"
	},
	"weightkg": 200,
	"tags": [
		"Sub-Legendary"
	],
	"eggGroups": [
		"Undiscovered"
	]
},
glastrier: {
	"num": -896,
	"name": "Glastrier",
	"types": [
		"Ice"
	],
	"gender": "N",
	"baseStats": {
		"hp": 100,
		"atk": 145,
		"def": 130,
		"spa": 87,
		"spd": 87,
		"spe": 30
	},
	"abilities": {
		"0": "Chilling Neigh"
	},
	"weightkg": 800,
	"tags": [
		"Sub-Legendary"
	],
	"eggGroups": [
		"Undiscovered"
	]
},
spectrier: {
	"num": -897,
	"name": "Spectrier",
	"types": [
		"Ghost"
	],
	"gender": "N",
	"baseStats": {
		"hp": 100,
		"atk": 65,
		"def": 60,
		"spa": 112,
		"spd": 112,
		"spe": 130
	},
	"abilities": {
		"0": "Grim Neigh"
	},
	"weightkg": 44.5,
	"tags": [
		"Sub-Legendary"
	],
	"eggGroups": [
		"Undiscovered"
	]
},
calyrex: {
	"num": -898,
	"name": "Calyrex",
	"types": [
		"Psychic",
		"Grass"
	],
	"gender": "N",
	"baseStats": {
		"hp": 100,
		"atk": 80,
		"def": 80,
		"spa": 80,
		"spd": 80,
		"spe": 80
	},
	"abilities": {
		"0": "Unnerve"
	},
	"weightkg": 7.7,
	"eggGroups": [
		"Undiscovered"
	],
	"tags": [
		"Restricted Legendary"
	],
	"otherFormes": [
		"Calyrex-Ice",
		"Calyrex-Shadow"
	],
	"formeOrder": [
		"Calyrex",
		"Calyrex-Ice",
		"Calyrex-Shadow"
	]
},
calyrexice: {
	"num": -898,
	"name": "Calyrex-Ice",
	"baseSpecies": "Calyrex",
	"forme": "Ice",
	"types": [
		"Psychic",
		"Ice"
	],
	"gender": "N",
	"baseStats": {
		"hp": 100,
		"atk": 165,
		"def": 150,
		"spa": 107,
		"spd": 107,
		"spe": 50
	},
	"abilities": {
		"0": "As One (Glastrier)"
	},
	"weightkg": 809.1,
	"eggGroups": [
		"Undiscovered"
	],
	"changesFrom": "Calyrex"
},
calyrexshadow: {
	"num": -898,
	"name": "Calyrex-Shadow",
	"baseSpecies": "Calyrex",
	"forme": "Shadow",
	"types": [
		"Psychic",
		"Ghost"
	],
	"gender": "N",
	"baseStats": {
		"hp": 100,
		"atk": 85,
		"def": 80,
		"spa": 132,
		"spd": 132,
		"spe": 150
	},
	"abilities": {
		"0": "As One (Spectrier)"
	},
	"weightkg": 53.6,
	"eggGroups": [
		"Undiscovered"
	],
	"changesFrom": "Calyrex"
},
wyrdeer: {
	"num": -899,
	"name": "Wyrdeer",
	"types": [
		"Normal",
		"Psychic"
	],
	"baseStats": {
		"hp": 103,
		"atk": 105,
		"def": 72,
		"spa": 90,
		"spd": 90,
		"spe": 65
	},
	"abilities": {
		"0": "Intimidate",
		"1": "Frisk",
		"H": "Sap Sipper"
	},
	"weightkg": 95.1,
	"prevo": "Stantler",
	"evoType": "other",
	"evoCondition": "Use Agile style Psyshield Bash 20 times",
	"eggGroups": [
		"Field"
	]
},
kleavor: {
	"num": -900,
	"name": "Kleavor",
	"types": [
		"Bug",
		"Rock"
	],
	"baseStats": {
		"hp": 70,
		"atk": 135,
		"def": 95,
		"spa": 57,
		"spd": 57,
		"spe": 85
	},
	"abilities": {
		"0": "Swarm",
		"1": "Sheer Force",
		"H": "Steadfast"
	},
	"weightkg": 89,
	"prevo": "Scyther",
	"evoType": "other",
	"evoCondition": "Black Augurite",
	"eggGroups": [
		"Bug"
	]
},
ursaluna: {
	"num": -901,
	"name": "Ursaluna",
	"types": [
		"Ground",
		"Normal"
	],
	"baseStats": {
		"hp": 130,
		"atk": 140,
		"def": 105,
		"spa": 62,
		"spd": 62,
		"spe": 50
	},
	"abilities": {
		"0": "Guts",
		"1": "Bulletproof",
		"H": "Unnerve"
	},
	"weightkg": 290,
	"prevo": "Ursaring",
	"evoType": "other",
	"evoCondition": "Peat Block when there's a full moon",
	"eggGroups": [
		"Field"
	]
},
basculegion: {
	"num": -902,
	"name": "Basculegion",
	"baseForme": "M",
	"types": [
		"Water",
		"Ghost"
	],
	"gender": "M",
	"baseStats": {
		"hp": 120,
		"atk": 112,
		"def": 65,
		"spa": 77,
		"spd": 77,
		"spe": 78
	},
	"abilities": {
		"0": "Rattled",
		"1": "Adaptability",
		"H": "Mold Breaker"
	},
	"weightkg": 110,
	"prevo": "Basculin-White-Striped",
	"evoType": "other",
	"evoCondition": "Receive 294+ recoil without fainting",
	"eggGroups": [
		"Water 2"
	],
	"otherFormes": [
		"Basculegion-F"
	],
	"formeOrder": [
		"Basculegion",
		"Basculegion-F"
	]
},
basculegionf: {
	"num": -902,
	"name": "Basculegion-F",
	"baseSpecies": "Basculegion",
	"forme": "F",
	"types": [
		"Water",
		"Ghost"
	],
	"gender": "F",
	"baseStats": {
		"hp": 120,
		"atk": 92,
		"def": 65,
		"spa": 87,
		"spd": 87,
		"spe": 78
	},
	"abilities": {
		"0": "Rattled",
		"1": "Adaptability",
		"H": "Mold Breaker"
	},
	"weightkg": 110,
	"prevo": "Basculin-White-Striped",
	"evoType": "other",
	"evoCondition": "Receive 294+ recoil without fainting",
	"eggGroups": [
		"Water 2"
	]
},
sneasler: {
	"num": -903,
	"name": "Sneasler",
	"types": [
		"Fighting",
		"Poison"
	],
	"baseStats": {
		"hp": 80,
		"atk": 130,
		"def": 60,
		"spa": 60,
		"spd": 60,
		"spe": 120
	},
	"abilities": {
		"0": "Pressure",
		"H": "Poison Touch"
	},
	"weightkg": 43,
	"prevo": "Sneasel-Hisui",
	"evoType": "useItem",
	"evoItem": "Razor Claw",
	"evoCondition": "during the day",
	"eggGroups": [
		"Field"
	]
},
overqwil: {
	"num": -904,
	"name": "Overqwil",
	"types": [
		"Normal",
		"Poison"
	],
	"baseStats": {
		"hp": 85,
		"atk": 115,
		"def": 95,
		"spa": 65,
		"spd": 65,
		"spe": 85
	},
	"abilities": {
		"0": "Poison Point",
		"1": "Swift Swim",
		"H": "Intimidate"
	},
	"weightkg": 3.9,
	"prevo": "Qwilfish-Hisui",
	"evoType": "other",
	"evoCondition": "Use Strong style Barb Barrage 20 times",
	"eggGroups": [
		"Water 2"
	]
},
enamorus: {
	"num": -905,
	"name": "Enamorus",
	"baseForme": "Incarnate",
	"types": [
		"Normal",
		"Flying"
	],
	"gender": "F",
	"baseStats": {
		"hp": 74,
		"atk": 115,
		"def": 70,
		"spa": 107,
		"spd": 107,
		"spe": 106
	},
	"abilities": {
		"0": "Healer",
		"H": "Contrary"
	},
	"weightkg": 48,
	"tags": [
		"Sub-Legendary"
	],
	"eggGroups": [
		"Undiscovered"
	],
	"otherFormes": [
		"Enamorus-Therian"
	],
	"formeOrder": [
		"Enamorus",
		"Enamorus-Therian"
	]
},
enamorustherian: {
	"num": -905,
	"name": "Enamorus-Therian",
	"baseSpecies": "Enamorus",
	"forme": "Therian",
	"types": [
		"Normal",
		"Flying"
	],
	"gender": "F",
	"baseStats": {
		"hp": 74,
		"atk": 115,
		"def": 110,
		"spa": 117,
		"spd": 117,
		"spe": 46
	},
	"abilities": {
		"0": "Overcoat"
	},
	"weightkg": 48,
	"eggGroups": [
		"Undiscovered"
	],
	"changesFrom": "Enamorus"
},
puchikoon: {
	"num": -1152,
	"name": "Puchikoon",
	"types": [
		"Fire"
	],
	"baseStats": {
		"hp": 30,
		"atk": 65,
		"def": 35,
		"spa": 45,
		"spd": 45,
		"spe": 70
	},
	"abilities": {},
	"evos": [
		"Ponyta"
	]
},
mikon: {
	"num": -1153,
	"name": "Mikon",
	"types": [
		"Fire"
	],
	"baseStats": {
		"hp": 28,
		"atk": 31,
		"def": 30,
		"spa": 60,
		"spd": 60,
		"spe": 60
	},
	"abilities": {},
	"evos": [
		"Vulpix"
	]
},
konya: {
	"num": -1154,
	"name": "Konya",
	"types": [
		"Normal"
	],
	"baseStats": {
		"hp": 35,
		"atk": 40,
		"def": 30,
		"spa": 35,
		"spd": 35,
		"spe": 85
	},
	"abilities": {},
	"evos": [
		"Meowth"
	]
},
gyopin: {
	"num": -1155,
	"name": "Gyopin",
	"types": [
		"Water"
	],
	"baseStats": {
		"hp": 35,
		"atk": 57,
		"def": 50,
		"spa": 40,
		"spd": 40,
		"spe": 53
	},
	"abilities": {},
	"evos": [
		"Goldeen"
	]
},
bittybat: {
	"num": -1156,
	"name": "Bittybat",
	"types": [
		"Poison",
		"Flying"
	],
	"baseStats": {
		"hp": 35,
		"atk": 40,
		"def": 30,
		"spa": 35,
		"spd": 35,
		"spe": 50
	},
	"abilities": {},
	"evos": [
		"Zubat"
	]
},
blastyke: {
	"num": -1157,
	"name": "Blastyke",
	"types": [
		"Water"
	],
	"baseStats": {
		"hp": 49,
		"atk": 43,
		"def": 60,
		"spa": 45,
		"spd": 45,
		"spe": 48
	},
	"abilities": {},
	"evos": [
		"Blastoise"
	]
},
magnetite: {
	"num": -1158,
	"name": "Magnetite",
	"types": [
		"Electric"
	],
	"baseStats": {
		"hp": 30,
		"atk": 40,
		"def": 75,
		"spa": 100,
		"spd": 100,
		"spe": 50
	},
	"abilities": {},
	"prevo": "Magnemite",
	"evoLevel": 20,
	"evos": [
		"Magneton"
	]
},
weirduck: {
	"num": -1159,
	"name": "Weirduck",
	"types": [
		"Water"
	],
	"baseStats": {
		"hp": 65,
		"atk": 67,
		"def": 63,
		"spa": 65,
		"spd": 65,
		"spe": 70
	},
	"abilities": {},
	"prevo": "Psyduck",
	"evoLevel": 22,
	"evos": [
		"Golduck"
	]
},
ribbito: {
	"num": -1160,
	"name": "Ribbito",
	"types": [
		"Water"
	],
	"baseStats": {
		"hp": 94,
		"atk": 55,
		"def": 50,
		"spa": 55,
		"spd": 55,
		"spe": 40
	},
	"abilities": {},
	"evos": [
		"Croakozuna"
	]
},
croakozuna: {
	"num": -1161,
	"name": "Croakozuna",
	"types": [
		"Water",
		"Normal"
	],
	"baseStats": {
		"hp": 134,
		"atk": 75,
		"def": 70,
		"spa": 75,
		"spd": 75,
		"spe": 60
	},
	"abilities": {}
},
skimper: {
	"num": -1162,
	"name": "Skimper",
	"types": [
		"Water"
	],
	"baseStats": {
		"hp": 62,
		"atk": 43,
		"def": 36,
		"spa": 71,
		"spd": 71,
		"spe": 88
	},
	"abilities": {},
	"evos": [
		"Bawligua"
	]
},
bawligua: {
	"num": -1163,
	"name": "Bawligua",
	"types": [
		"Water"
	],
	"baseStats": {
		"hp": 72,
		"atk": 53,
		"def": 46,
		"spa": 81,
		"spd": 81,
		"spe": 98
	},
	"abilities": {},
	"prevo": "Skimper",
	"evoLevel": 30,
	"evos": [
		"Cryithan"
	]
},
cryithan: {
	"num": -1164,
	"name": "Cryithan",
	"types": [
		"Water",
		"Dragon"
	],
	"baseStats": {
		"hp": 92,
		"atk": 83,
		"def": 76,
		"spa": 101,
		"spd": 101,
		"spe": 118
	},
	"abilities": {},
	"prevo": "Bawligua",
	"evoLevel": 50
},
nidoreign: {
	"num": -1165,
	"name": "Nidoreign",
	"types": [
		"Poison",
		"Rock"
	],
	"baseStats": {
		"hp": 90,
		"atk": 92,
		"def": 87,
		"spa": 75,
		"spd": 75,
		"spe": 85
	},
	"abilities": {},
	"prevo": "Nidorino",
	"evoType": "useItem",
	"evoItem": "Moon Stone"
},
decilla: {
	"num": -1166,
	"name": "Decilla",
	"types": [
		"Rock"
	],
	"baseStats": {
		"hp": 61,
		"atk": 90,
		"def": 70,
		"spa": 40,
		"spd": 40,
		"spe": 15
	},
	"abilities": {},
	"evos": [
		"Gyaoon"
	]
},
gyaoon: {
	"num": -1167,
	"name": "Gyaoon",
	"types": [
		"Rock"
	],
	"baseStats": {
		"hp": 101,
		"atk": 130,
		"def": 105,
		"spa": 70,
		"spd": 70,
		"spe": 35
	},
	"abilities": {},
	"prevo": "Decilla",
	"evoLevel": 50
},
omega: {
	"num": -1168,
	"name": "Omega",
	"types": [
		"Rock"
	],
	"baseStats": {
		"hp": 101,
		"atk": 100,
		"def": 120,
		"spa": 95,
		"spd": 95,
		"spe": 25
	},
	"abilities": {}
},
trampel: {
	"num": -1169,
	"name": "Trampel",
	"types": [
		"Normal",
		"Ground"
	],
	"baseStats": {
		"hp": 130,
		"atk": 100,
		"def": 90,
		"spa": 64,
		"spd": 64,
		"spe": 56
	},
	"abilities": {}
},
jagg: {
	"num": -1170,
	"name": "Jagg",
	"types": [
		"Water",
		"Rock"
	],
	"baseStats": {
		"hp": 80,
		"atk": 115,
		"def": 100,
		"spa": 85,
		"spd": 85,
		"spe": 60
	},
	"abilities": {}
},
blottle: {
	"num": -1171,
	"name": "Blottle",
	"types": [
		"Water",
		"Fairy"
	],
	"baseStats": {
		"hp": 60,
		"atk": 35,
		"def": 60,
		"spa": 65,
		"spd": 65,
		"spe": 50
	},
	"abilities": {},
	"evos": [
		"Pendraken"
	]
},
pendraken: {
	"num": -1172,
	"name": "Pendraken",
	"types": [
		"Water",
		"Normal"
	],
	"baseStats": {
		"hp": 80,
		"atk": 60,
		"def": 85,
		"spa": 95,
		"spd": 95,
		"spe": 90
	},
	"abilities": {},
	"prevo": "Blottle",
	"evoLevel": 30
},
deer: {
	"num": -1173,
	"name": "Deer",
	"types": [
		"Normal",
		"Grass"
	],
	"baseStats": {
		"hp": 85,
		"atk": 110,
		"def": 85,
		"spa": 90,
		"spd": 90,
		"spe": 60
	},
	"abilities": {}
},
barunda: {
	"num": -1174,
	"name": "Barunda",
	"types": [
		"Fairy",
		"Flying"
	],
	"baseStats": {
		"hp": 90,
		"atk": 50,
		"def": 30,
		"spa": 100,
		"spd": 100,
		"spe": 125
	},
	"abilities": {}
},
cheep: {
	"num": -1175,
	"name": "Cheep",
	"types": [
		"Water"
	],
	"baseStats": {
		"hp": 45,
		"atk": 65,
		"def": 40,
		"spa": 40,
		"spd": 40,
		"spe": 60
	},
	"abilities": {},
	"evos": [
		"Jabetta"
	]
},
jabetta: {
	"num": -1176,
	"name": "Jabetta",
	"types": [
		"Water",
		"Fighting"
	],
	"baseStats": {
		"hp": 80,
		"atk": 125,
		"def": 70,
		"spa": 80,
		"spd": 80,
		"spe": 80
	},
	"abilities": {},
	"prevo": "Cheep",
	"evoLevel": 30
},
cactus: {
	"num": -1177,
	"name": "Cactus",
	"types": [
		"Grass",
		"Ground"
	],
	"baseStats": {
		"hp": 60,
		"atk": 95,
		"def": 100,
		"spa": 75,
		"spd": 75,
		"spe": 90
	},
	"abilities": {}
},
kotora: {
	"num": -1178,
	"name": "Kotora",
	"types": [
		"Electric"
	],
	"baseStats": {
		"hp": 50,
		"atk": 65,
		"def": 45,
		"spa": 55,
		"spd": 55,
		"spe": 40
	},
	"abilities": {},
	"evos": [
		"Gaotora"
	]
},
gaotora: {
	"num": -1179,
	"name": "Gaotora",
	"types": [
		"Electric"
	],
	"baseStats": {
		"hp": 65,
		"atk": 80,
		"def": 65,
		"spa": 75,
		"spd": 75,
		"spe": 60
	},
	"abilities": {},
	"prevo": "Kotora",
	"evoLevel": 16,
	"evos": [
		"Gorotora"
	]
},
gorotora: {
	"num": -1180,
	"name": "Gorotora",
	"types": [
		"Electric"
	],
	"baseStats": {
		"hp": 90,
		"atk": 105,
		"def": 85,
		"spa": 95,
		"spd": 95,
		"spe": 80
	},
	"abilities": {},
	"prevo": "Gaotora",
	"evoLevel": 36
},
crocky: {
	"num": -1181,
	"name": "Crocky",
	"types": [
		"Dragon"
	],
	"baseStats": {
		"hp": 80,
		"atk": 90,
		"def": 75,
		"spa": 80,
		"spd": 80,
		"spe": 95
	},
	"abilities": {}
},
gorochu: {
	"num": -1182,
	"name": "Gorochu",
	"types": [
		"Electric"
	],
	"baseStats": {
		"hp": 70,
		"atk": 100,
		"def": 65,
		"spa": 100,
		"spd": 100,
		"spe": 110
	},
	"abilities": {},
	"prevo": "Raichu",
	"evoType": "trade"
},
guardia: {
	"num": -1183,
	"name": "Guardia",
	"types": [
		"Ground"
	],
	"baseStats": {
		"hp": 70,
		"atk": 90,
		"def": 120,
		"spa": 100,
		"spd": 100,
		"spe": 65
	},
	"abilities": {},
	"prevo": "Marowak",
	"evoType": "trade",
	"evoCondition": "with a Kangaskhan"
},
totartle: {
	"num": -1184,
	"name": "Totartle",
	"types": [
		"Water",
		"Grass"
	],
	"baseStats": {
		"hp": 70,
		"atk": 100,
		"def": 65,
		"spa": 100,
		"spd": 100,
		"spe": 78
	},
	"abilities": {},
	"prevo": "Wartortle",
	"evoLevel": 43
},
buu: {
	"num": -1185,
	"name": "Buu",
	"types": [
		"Ice"
	],
	"baseStats": {
		"hp": 65,
		"atk": 93,
		"def": 57,
		"spa": 85,
		"spd": 85,
		"spe": 95
	},
	"abilities": {}
},
purakkusu: {
	"num": -1186,
	"name": "Purakkusu",
	"types": [
		"Bug",
		"Rock"
	],
	"baseStats": {
		"hp": 65,
		"atk": 125,
		"def": 140,
		"spa": 55,
		"spd": 55,
		"spe": 85
	},
	"abilities": {},
	"prevo": "Pinsir",
	"evoLevel": 42
},
madaamu: {
	"num": -1187,
	"name": "Madaamu",
	"types": [
		"Normal",
		"Flying"
	],
	"baseStats": {
		"hp": 72,
		"atk": 105,
		"def": 75,
		"spa": 63,
		"spd": 63,
		"spe": 70
	},
	"abilities": {},
	"prevo": "Farfetch'd",
	"evoLevel": 24
},
tsubomitto: {
	"num": -1188,
	"name": "Tsubomitto",
	"types": [
		"Grass",
		"Poison"
	],
	"baseStats": {
		"hp": 80,
		"atk": 120,
		"def": 60,
		"spa": 85,
		"spd": 85,
		"spe": 70
	},
	"abilities": {},
	"prevo": "Weepinbell",
	"evoType": "trade"
},
animon: {
	"num": -1187,
	"name": "Animon",
	"types": [
		"Rock"
	],
	"baseStats": {
		"hp": 100,
		"atk": 55,
		"def": 50,
		"spa": 50,
		"spd": 50,
		"spe": 150
	},
	"abilities": {},
	"prevo": "Ditto",
	"evoType": "useItem",
	"evoItem": "Moon Stone"
},
monja: {
	"num": -1188,
	"name": "Monja",
	"types": [
		"Grass"
	],
	"baseStats": {
		"hp": 45,
		"atk": 35,
		"def": 85,
		"spa": 80,
		"spd": 80,
		"spe": 40
	},
	"abilities": {},
	"evos": [
		"Tangela"
	]
},
para: {
	"num": -1189,
	"name": "Para",
	"types": [
		"Bug"
	],
	"baseStats": {
		"hp": 20,
		"atk": 55,
		"def": 40,
		"spa": 40,
		"spd": 40,
		"spe": 10
	},
	"abilities": {},
	"evos": [
		"Paras"
	]
},
hinaazu: {
	"num": -1190,
	"name": "Hinaazu",
	"types": [
		"Normal",
		"Flying"
	],
	"baseStats": {
		"hp": 15,
		"atk": 65,
		"def": 25,
		"spa": 15,
		"spd": 15,
		"spe": 55
	},
	"abilities": {},
	"evos": [
		"Doduo"
	]
},
pudi: {
	"num": -1191,
	"name": "Pudi",
	"types": [
		"Fire"
	],
	"baseStats": {
		"hp": 35,
		"atk": 50,
		"def": 25,
		"spa": 30,
		"spd": 30,
		"spe": 40
	},
	"abilities": {},
	"evos": [
		"Growlithe"
	]
},
betobebii: {
	"num": -1191,
	"name": "Betobebii",
	"types": [
		"Poison"
	],
	"baseStats": {
		"hp": 60,
		"atk": 60,
		"def": 30,
		"spa": 20,
		"spd": 20,
		"spe": 5
	},
	"abilities": {},
	"evos": [
		"Grimer"
	]
},
};
