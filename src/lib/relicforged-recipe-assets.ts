import ancientDebris from '$/assets/default_minecraft/blocks/ancient_debris_side.png?url'
import crimsonStemTop from '$/assets/default_minecraft/blocks/crimson_stem_top.png?url'
import magmaBlock from '$/assets/default_minecraft/blocks/magma_block.gif?url'
import obsidian from '$/assets/default_minecraft/blocks/obsidian.png?url'
import quartzBlock from '$/assets/default_minecraft/blocks/quartz_block_top.png?url'
import smithingTable from '$/assets/default_minecraft/blocks/smithing_table_front.png?url'
import witherSkeletonSkull from '$/assets/default_minecraft/blocks/wither_skeleton_skull.png?url'
import amethystShard from '$/assets/default_minecraft/materials/amethyst_shard.png?url'
import copperIngot from '$/assets/default_minecraft/materials/copper_ingot.png?url'
import enderPearl from '$/assets/default_minecraft/materials/ender_pearl.png?url'
import ghastTear from '$/assets/default_minecraft/materials/ghast_tear.png?url'
import ironIngot from '$/assets/default_minecraft/materials/iron_ingot.png?url'
import magmaCream from '$/assets/default_minecraft/materials/magma_cream.png?url'
import netherWart from '$/assets/default_minecraft/materials/nether_wart.png?url'
import stick from '$/assets/default_minecraft/materials/stick.png?url'
import relicForge from '$/assets/mod_assets/relicforged/item_sprites/blocks/relic_forge/relic_forge_side.png?url'
import resonantAlloy from '$/assets/mod_assets/relicforged/item_sprites/materials/resonant/resonant_alloy.png?url'
import blackenedAxeHead from '$/assets/mod_assets/relicforged/item_sprites/tool_parts/blackened/blackened_axe_head.png?url'
import blackenedEdge from '$/assets/mod_assets/relicforged/item_sprites/tool_parts/blackened/blackened_edge.png?url'
import blackenedHandle from '$/assets/mod_assets/relicforged/item_sprites/tool_parts/blackened/blackened_handle.png?url'
import blackenedHoeHead from '$/assets/mod_assets/relicforged/item_sprites/tool_parts/blackened/blackened_hoe_head.png?url'
import blackenedPickHead from '$/assets/mod_assets/relicforged/item_sprites/tool_parts/blackened/blackened_pick_head.png?url'
import blackenedShovelHead from '$/assets/mod_assets/relicforged/item_sprites/tool_parts/blackened/blackened_shovel_head.png?url'
import relicForgingTemplate from '$/assets/mod_assets/relicforged/item_sprites/tool_parts/relic_forging_template.png?url'
import resonantAxe from '$/assets/mod_assets/relicforged/item_sprites/tools/resonant/resonant_axe.png?url'
import resonantHoe from '$/assets/mod_assets/relicforged/item_sprites/tools/resonant/resonant_hoe.png?url'
import resonantPickaxe from '$/assets/mod_assets/relicforged/item_sprites/tools/resonant/resonant_pickaxe.png?url'
import resonantShovel from '$/assets/mod_assets/relicforged/item_sprites/tools/resonant/resonant_shovel.png?url'
import resonantSword from '$/assets/mod_assets/relicforged/item_sprites/tools/resonant/resonant_sword.png?url'

const recipeSprites: Record<string, string> = {
	'Amethyst Shard': amethystShard,
	'Copper Ingot': copperIngot,
	'Ender Pearl': enderPearl,
	'Ghast Tear': ghastTear,
	'Iron Ingot': ironIngot,
	'Magma Cream': magmaCream,
	'Nether Wart': netherWart,
	Stick: stick,
	'Wither Skeleton Skull': witherSkeletonSkull,
	'Ancient Debris': ancientDebris,
	'Magma Block': magmaBlock,
	'Nether wood': crimsonStemTop,
	Obsidian: obsidian,
	'Quartz Block': quartzBlock,
	'Smithing Table': smithingTable,
	'Relic Forge': relicForge,
	'Resonant Alloy': resonantAlloy,
	'Blackened Axe Head': blackenedAxeHead,
	'Blackened Edge': blackenedEdge,
	'Blackened Handle': blackenedHandle,
	'Blackened Hoe Head': blackenedHoeHead,
	'Blackened Pick Head': blackenedPickHead,
	'Blackened Shovel Head': blackenedShovelHead,
	'Relic Forging Template': relicForgingTemplate,
	'Resonant Axe': resonantAxe,
	'Resonant Hoe': resonantHoe,
	'Resonant Pickaxe': resonantPickaxe,
	'Resonant Shovel': resonantShovel,
	'Resonant Sword': resonantSword,
}

export const getRecipeSprite = (name: string): string | undefined =>
	recipeSprites[name]
