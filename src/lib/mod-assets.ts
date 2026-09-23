import type { ImageMetadata } from 'astro'
import easymud from '$/assets/mod_logos/easymud.png'
import kossmanStatsLogo from '$/assets/mod_logos/kossmanstats.png'
import offhandFixLogo from '$/assets/mod_logos/offhandfix.png'
import relicforgedLogo from '$/assets/mod_logos/relicforged.png'
import renewableLavaLogo from '$/assets/mod_logos/renewablelava.png'

const modLogos = {
	'kossman-offhand-fix': offhandFixLogo,
	'kossman-stats': kossmanStatsLogo,
	'renewable-lava': renewableLavaLogo,
	easymud: easymud,
	relicforged: relicforgedLogo,
}

export type ModLogo = keyof typeof modLogos

export const getModLogo = (logo: ModLogo): ImageMetadata => modLogos[logo]
