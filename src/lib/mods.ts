import { type CollectionEntry, getCollection } from 'astro:content'

export const getAllMods = async () =>
	(await getCollection('mods')).sort((first, second) =>
		first.data.title.localeCompare(second.data.title),
	)

export const getFeaturedMods = async () =>
	(await getAllMods()).filter(mod => mod.data.featured)

export type ModEntry = CollectionEntry<'mods'>
