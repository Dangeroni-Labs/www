import type { CollectionEntry } from 'astro:content'

type ModVersion = CollectionEntry<'mods'>['data']['versions'][number]

export const formatLoaders = (version: ModVersion) => version.loaders.join(', ')

export const formatCompatibilityLine = (version: ModVersion) =>
	`${version.minecraft} · ${formatLoaders(version)}`

export const formatModCardCompatibility = (versions: ModVersion[]) =>
	versions.map(formatCompatibilityLine)

export const formatVersionRelease = (version: ModVersion) =>
	`${version.version} · ${version.status}`

export const formatMinecraftSupportSummary = (versions: ModVersion[]) =>
	versions.map(version => version.minecraft).join(' + ')
