---
title: Kossman's Offhand Fix
slug: kossman-offhand-fix
summary: Improves offhand stack handling by refilling compatible stacks before swapping.
versions:
  - minecraft: '26.2'
    version: 0.2.0
    status: Stable
    loaders:
      - Fabric
      - NeoForge
      - Forge
  - minecraft: '1.20.1'
    version: 0.1.1
    status: Stable
    loaders:
      - Fabric
      - NeoForge
      - Forge
logo: kossman-offhand-fix
featured: true
repository: https://github.com/Dangeroni-Labs/offhand-fix
curseforge: https://www.curseforge.com/minecraft/mc-mods/kossmans-offhand-fix
issues: https://github.com/Dangeroni-Labs/offhand-fix/issues
---

A small QoL mod that makes offhand stack handling feel more natural.

If your offhand already contains a compatible item stack, the mod can refill it instead of immediately moving or swapping the stack elsewhere.

## Shift-click refill

Shift-click a compatible stack in your inventory or a supported container to refill the existing offhand stack first.

- Offhand: `Bread x50`
- Inventory: `Bread x20`
- Shift-click
- Result: Offhand `Bread x64`, Inventory `Bread x6`

## Smarter swap key

Pressing the swap-hands key (`F` by default) refills a compatible offhand stack before performing a normal swap. This works both during gameplay and while hovering an inventory slot.

## [NEW] Configuration

Use Mods -> Kossman's Offhand Fix -> Config (Fabric requires optional Mod Menu). Selections and Reset save/apply immediately; Done and Escape return to the previous screen. Manual edits to `config/offhand_fix.properties` require a restart.

`shiftClickScope` accepts:

- `PLAYER_INVENTORY_ONLY` - Player Inventory Only (default): refill only in the standalone inventory; crafting results remain vanilla.
- `ALL_CONTAINERS` - All Containers: also refill incoming container stacks and crafting results; player-to-container transfers remain vanilla.
- `DISABLED` - Disabled: all Shift-click transfers remain vanilla.

This setting does not affect `F`.

## Vanilla fallback

If refilling is not possible, Minecraft behaves normally. This includes:

- Different items
- Incompatible item components
- Full offhand stacks
- Non-stackable items
- Normal inventory clicks
- Hotbar number-key swaps
