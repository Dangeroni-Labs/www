export interface Recipe {
	title: string
	description: string
	pattern?: string[]
	ingredients: string[]
	key?: Record<string, string>
	count?: number
	method?: string
}

export const amethystProcessingRecipes: Recipe[] = [
	{
		title: 'Amethyst Fragment',
		description: 'Smelt 1x Amethyst Block to get 1x Amethyst Fragment.',
		ingredients: ['Amethyst Block'],
		method: 'Furnace',
	},
	{
		title: 'Amethyst Shard',
		description:
			'Craft 4x Amethyst Fragment into 1x Amethyst Shard in any order.',
		ingredients: [
			'Amethyst Fragment',
			'Amethyst Fragment',
			'Amethyst Fragment',
			'Amethyst Fragment',
		],
	},
]

export const relicforgedRecipes: Recipe[] = [
	{
		title: 'Resonant Alloy',
		description: 'The base material for Resonant tools. Craft it in any order.',
		ingredients: ['Iron Ingot', 'Copper Ingot', 'Amethyst Shard'],
	},
	{
		title: 'Resonant Pickaxe',
		description: 'The familiar pickaxe recipe, made with Resonant Alloy.',
		pattern: ['RRR', ' S ', ' S '],
		ingredients: [],
		key: { R: 'Resonant Alloy', S: 'Stick' },
	},
	{
		title: 'Resonant Axe',
		description: 'The familiar axe recipe, made with Resonant Alloy.',
		pattern: ['RR ', 'RS ', ' S '],
		ingredients: [],
		key: { R: 'Resonant Alloy', S: 'Stick' },
	},
	{
		title: 'Resonant Shovel',
		description: 'The familiar shovel recipe, made with Resonant Alloy.',
		pattern: [' R ', ' S ', ' S '],
		ingredients: [],
		key: { R: 'Resonant Alloy', S: 'Stick' },
	},
	{
		title: 'Resonant Hoe',
		description: 'The familiar hoe recipe, made with Resonant Alloy.',
		pattern: ['RR ', ' S ', ' S '],
		ingredients: [],
		key: { R: 'Resonant Alloy', S: 'Stick' },
	},
	{
		title: 'Resonant Sword',
		description: 'The familiar sword recipe, made with Resonant Alloy.',
		pattern: [' R ', ' R ', ' S '],
		ingredients: [],
		key: { R: 'Resonant Alloy', S: 'Stick' },
	},
	{
		title: 'Relic Forge',
		description: 'The workstation used to forge Blackened tools.',
		pattern: ['OAO', 'MSM', 'OAO'],
		ingredients: [],
		key: {
			O: 'Obsidian',
			A: 'Amethyst Shard',
			M: 'Magma Block',
			S: 'Smithing Table',
		},
	},
	{
		title: 'Relic Forging Template',
		description:
			'Used with a Diamond tool and Blackened parts in the Relic Forge.',
		pattern: ['OMO', 'BEB', 'OMO'],
		ingredients: [],
		key: {
			O: 'Obsidian',
			M: 'Magma Cream',
			B: 'Magma Block',
			E: 'Ender Pearl',
		},
	},
	{
		title: 'Blackened Handle',
		description: 'Craft two handles for Blackened tools.',
		pattern: [' S ', ' R ', ' B '],
		ingredients: [],
		key: { S: 'Wither Skeleton Skull', R: 'Resonant Alloy', B: 'Blaze Rod' },
		count: 2,
	},
	{
		title: 'Blackened Pick Head',
		description: 'Forge this with a Diamond Pickaxe.',
		pattern: ['OAO', ' R ', ' M '],
		ingredients: [],
		key: {
			O: 'Obsidian',
			A: 'Ancient Debris',
			R: 'Resonant Alloy',
			M: 'Magma Cream',
		},
	},
	{
		title: 'Blackened Axe Head',
		description:
			'Forge this with a Diamond Axe. Use a crimson or warped stem or hyphae, stripped or unstripped.',
		pattern: ['O W', 'OQW', ' R '],
		ingredients: [],
		key: {
			O: 'Obsidian',
			W: 'Nether wood',
			Q: 'Quartz Block',
			R: 'Resonant Alloy',
		},
	},
	{
		title: 'Blackened Shovel Head',
		description: 'Forge this with a Diamond Shovel.',
		pattern: ['OGO', ' M ', ' R '],
		ingredients: [],
		key: {
			O: 'Obsidian',
			G: 'Ghast Tear',
			M: 'Magma Cream',
			R: 'Resonant Alloy',
		},
	},
	{
		title: 'Blackened Hoe Head',
		description: 'Forge this with a Diamond Hoe.',
		pattern: ['ONO', ' M ', ' R '],
		ingredients: [],
		key: {
			O: 'Obsidian',
			N: 'Nether Wart',
			M: 'Magma Cream',
			R: 'Resonant Alloy',
		},
	},
	{
		title: 'Blackened Edge',
		description: 'Forge this with a Diamond Sword.',
		pattern: ['ORO', ' M ', ' B '],
		ingredients: [],
		key: {
			O: 'Obsidian',
			R: 'Resonant Alloy',
			M: 'Magma Block',
			B: 'Blaze Rod',
		},
	},
]

export const resonantStats = [
	{ label: 'Durability', value: '610' },
	{ label: 'Mining speed', value: '7.0' },
	{ label: 'Mining level', value: 'Iron' },
	{ label: 'Enchantability', value: '16' },
] as const

export const blackenedStats = [
	{ label: 'Durability', value: '1800' },
	{ label: 'Mining speed', value: '9.5' },
	{ label: 'Mining level', value: 'Netherite' },
	{ label: 'Enchantability', value: '12' },
	{ label: 'Repair material', value: 'Resonant Alloy' },
] as const

export const blackenedCombatStats = [
	{ tool: 'Sword', damage: '8', speed: '1.6' },
	{ tool: 'Pickaxe', damage: '6', speed: '1.2' },
	{ tool: 'Axe', damage: '10', speed: '1.0' },
	{ tool: 'Shovel', damage: '6.5', speed: '1.0' },
	{ tool: 'Hoe', damage: '1', speed: '4.0' },
] as const
