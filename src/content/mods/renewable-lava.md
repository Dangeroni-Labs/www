---
title: Renewable Lava
slug: renewable-lava
summary: Vanilla-style renewable lava source generation for Minecraft.
version: 0.1.0
status: Stable
minecraftVersion: '26.2'
loaders:
  - Fabric
  - NeoForge
logo: renewable-lava
featured: true
repository: https://github.com/Dangeroni-Labs/renewable-lava
curseforge: https://www.curseforge.com/minecraft/mc-mods/kossmans-renewable-lava
issues: https://github.com/Dangeroni-Labs/renewable-lava/issues
---

Renewable Lava adds vanilla-style renewable lava source generation to Minecraft.

Place two lava source blocks diagonally in a 2×2 area and let the lava flow. Valid flowing lava blocks can become new source blocks when enough horizontal source neighbours are present, similar to vanilla renewable water.

## Features

- Water-like renewable lava source generation
- Works with pools of any valid size
- Configurable required source neighbours
- Dimension whitelist
- Per-world enable or disable control with `/rl`
- Fabric and NeoForge support
- Optional Mod Menu configuration on Fabric

## Configuration

Renewable Lava provides:

- Enable or disable renewable lava globally
- Required source neighbours: 2–4
- Whitelisted dimensions

The default configuration allows renewable lava in:

- Overworld
- Nether
- End

## Commands

- `/rl enable true`
- `/rl enable false`
- `/rl status`
