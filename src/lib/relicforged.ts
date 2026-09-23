export interface Recipe {
	title: string
	description: string
	pattern?: string[]
	ingredients: string[]
	key?: Record<string, string>
}

export const relicforgedRecipes: Recipe[] = [
	{
		title: 'Resonant Alloy',
		description: 'The base material for Resonant tools. Craft it in any order.',
		ingredients: ['Iron Ingot', 'Copper Ingot', 'Amethyst Shard'],
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
		description: 'One handle is needed for each Blackened tool.',
		ingredients: ['Stick', 'Wither Skeleton Skull', 'Relic Forging Template'],
	},
	{
		title: 'Blackened Pick Head',
		description: 'Forge this with a Diamond Pickaxe.',
		pattern: ['OAO', ' M ', ' M '],
		ingredients: [],
		key: { O: 'Obsidian', A: 'Ancient Debris', M: 'Magma Cream' },
	},
	{
		title: 'Blackened Axe Head',
		description:
			'Forge this with a Diamond Axe. Use a crimson or warped stem or hyphae, stripped or unstripped.',
		pattern: ['O W', 'OQW', '   '],
		ingredients: [],
		key: { O: 'Obsidian', W: 'Nether wood', Q: 'Quartz Block' },
	},
	{
		title: 'Blackened Shovel Head',
		description: 'Forge this with a Diamond Shovel.',
		pattern: ['OGO', ' M ', '   '],
		ingredients: [],
		key: { O: 'Obsidian', G: 'Ghast Tear', M: 'Magma Cream' },
	},
	{
		title: 'Blackened Hoe Head',
		description: 'Forge this with a Diamond Hoe.',
		pattern: ['ONO', ' M ', '   '],
		ingredients: [],
		key: { O: 'Obsidian', N: 'Nether Wart', M: 'Magma Cream' },
	},
	{
		title: 'Blackened Edge',
		description: 'Forge this with a Diamond Sword.',
		pattern: ['OAO', ' M ', '   '],
		ingredients: [],
		key: { O: 'Obsidian', A: 'Amethyst Shard', M: 'Magma Block' },
	},
]

export const resonantStats = [
	{ label: 'Durability', value: '610' },
	{ label: 'Mining speed', value: '7.0' },
	{ label: 'Mining level', value: 'Iron' },
	{ label: 'Enchantability', value: '16' },
] as const
