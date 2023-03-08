export const Pokedex: {[speciesid: string]: SpeciesData} = {
	glimmora: {
    inherit: true,
		num: 1,
		name: "Glimmora",
		types: ["Fairy", "Poison"],
		baseStats: {hp: 83, atk: 45, def: 110, spa: 115, spd: 101, spe: 71},
		abilities: {0: "Clear Body", H: "Stamina"},
	},
	cramorant: {
		inherit: true,
		num: 2,
		name: "Cramorant",
		types: ["Water", "Flying"],
		baseStats: {hp: 95, atk: 75, def: 75, spa: 75, spd: 125, spe: 95},
		abilities: {0: "Gulp Missile"},
	},
	skeldrake: {
		num: 3,
		name: "Skeldrake",
		types: ["Ghost", "Dragon"],
		baseStats: {hp: 100, atk: 80, def: 90, spa: 70, spd: 90, spe: 45},
		abilities: {0: "Simple", 1: "Battle Armor", H: "Infiltrator"},
	},
	revavroom: {
    inherit: true,
		num: 4,
		name: "Revavroom",
		types: ["Steel", "Poison"],
		baseStats: {hp: 95, atk: 109, def: 110, spa: 49, spd: 67, spe: 85},
		abilities: {0: "Intimidate", 1: "Weak Armor", H: "Filter"},
	},
};
