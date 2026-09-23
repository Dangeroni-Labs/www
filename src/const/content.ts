export const HOME_CONTENT = {
	eyebrow: 'Dangeroni Labs',
	title: 'Dangeroni Labs',
	description:
		'Minecraft mods, ports, continuations, and small things I wanted to exist.',
	featured: {
		eyebrow: 'Featured mods',
		title: 'Current mods',
		action: 'See all mods',
	},
	about: {
		eyebrow: 'About',
		title: 'Dangeroni Labs.',
		paragraphs: [
			'Minecraft mods, ports, continuations, and small fixes I wanted to exist.',
			'Most of them start with something I wanted to use myself.',
		],
		action: 'More about Dangeroni Labs',
		imageAlt: 'Minecraft sunset behind flowering trees',
	},
} as const

export const FOOTER_CONTENT = {
	statement: 'with love from Ukraine',
} as const

export const THEME_CONTENT = {
	label: 'Select color theme',
	menuLabel: 'Color theme options',
	system: 'System theme',
	light: 'Light theme',
	dark: 'Dark theme',
} as const

export const MODS_CONTENT = {
	title: 'Mods',
	description: 'Minecraft mods, ports, continuations, and small experiments.',
	details: 'Project details',
	versions: 'Versions',
	minecraft: 'Minecraft',
	repository: 'GitHub',
	curseforge: 'CurseForge',
	modrinth: 'Modrinth',
	issues: 'Report an issue',
	demo: 'Watch demo',
} as const

export const RELICFORGED_WIKI_CONTENT = {
	navLabel: 'Relicforged sections',
	navigation: [
		{ label: 'Overview', href: '/mods/relicforged', section: 'overview' },
		{ label: 'Recipes', href: '/mods/relicforged/recipes', section: 'recipes' },
		{ label: 'Gear', href: '/mods/relicforged/gear', section: 'gear' },
	],
	imageFallback: "Image was not found on Dangeroni's PC.",
	forgeImageAlt: 'Relic Forge in Minecraft',
	resonantImageAlt: 'Resonant tool set in Minecraft',
	blackenedImageAlt: 'Blackened tool set in Minecraft',
	forgeImageFallback: "Dangeroni hasn't uploaded this one yet.",
	overview: {
		intro:
			'Relicforged adds new tool progression built around vanilla materials, custom forging and unique tool abilities.',
		beta: 'The current beta includes Resonant tools, Blackened tools, the Relic Forge and Searing.',
		progressionTitle: 'Current progression',
		progression: ['Iron', 'Resonant', 'Diamond', 'Blackened'],
		future: 'More progression is planned for later releases.',
	},
	gear: {
		resonant: {
			title: 'Resonant',
			paragraphs: [
				'Resonant is a mid-game tier between Iron and Diamond. It lasts longer and mines faster than Iron, but it does not replace Diamond progression.',
				'Non-sword Resonant tools deal Iron-equivalent damage. The Resonant Sword deals one more damage than an Iron Sword.',
			],
			statsTitle: 'Resonant stats',
		},
		blackened: {
			title: 'Blackened',
			paragraphs: [
				'Blackened tools are forged in the Relic Forge and are fireproof. Shift + Right Click with one to toggle Searing.',
				'With Searing on, the Pickaxe, Axe and Shovel can smelt compatible drops. The Sword can ignite targets. The Hoe has no special Searing effect yet.',
				'Blackened balancing is still being worked on during beta, so exact stats are left out for now.',
			],
		},
	},
	recipes: {
		general: {
			title: 'General',
			intro: 'Recipes used to start and progress through Relicforged.',
		},
		resonant: {
			title: 'Resonant Tools',
			intro:
				'Resonant tools use familiar vanilla recipes with Resonant Alloy as the main material.',
		},
		blackened: {
			title: 'Blackened Tools',
			intro:
				'Blackened tools are assembled in the Relic Forge using a Diamond tool, Blackened components and a Relic Forging Template.',
			tools: [
				'Blackened Pickaxe',
				'Blackened Axe',
				'Blackened Shovel',
				'Blackened Hoe',
				'Blackened Sword',
			],
			notice: [
				'Forged in the Relic Forge.',
				'Recipe images are still being worked on.',
			],
		},
	},
} as const

export const ABOUT_CONTENT = {
	eyebrow: 'About',
	title: 'Dangeroni Labs.',
	paragraphs: [
		'I make Minecraft mods, ports, continuations, and small fixes that I want to use myself.',
		'Most projects start with something that bothered me, something I missed from an older version of Minecraft, or simply something I thought would be useful to have.',
		'Some projects stay small. Others grow over time.',
	],
	identity: {
		title: 'Dangeroni & Kossman',
		paragraphs: [
			'Dangeroni is the name I use for modding, while Kossman is my older and still primary nickname.',
			'I kept Kossman in some project names because those names are part of that older identity and I wanted to keep the continuity.',
		],
	},
	imageAlt: 'Minecraft sunset behind flowering trees',
} as const

export const LINKS_CONTENT = {
	eyebrow: 'Links',
	title: 'Links',
} as const
