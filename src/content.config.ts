import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

const mods = defineCollection({
	loader: glob({
		pattern: '**/*.md',
		base: './src/content/mods',
	}),
	schema: z.object({
		title: z.string(),
		slug: z.string(),
		summary: z.string(),
		versions: z
			.array(
				z.object({
					minecraft: z.string(),
					version: z.string(),
					status: z.literal('Stable'),
					loaders: z.array(z.string()).min(1),
				}),
			)
			.min(1),
		logo: z.enum(['kossman-stats', 'renewable-lava', 'kossman-offhand-fix', 'easymud']),
		featured: z.boolean(),
		repository: z.string().url(),
		curseforge: z.string().url().optional(),
		modrinth: z.string().url().optional(),
		issues: z.string().url().optional(),
		demo: z.string().url().optional(),
		projectAccent: z.string().optional(),
	}),
})

export const collections = { mods }
