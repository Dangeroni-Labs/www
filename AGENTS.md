# Dangeroni Labs www

## Stack

- Astro with TypeScript strict mode
- Tailwind CSS 4
- Bun for package scripts
- Biome for formatting and linting
- Fontsource for local typography
- React only when a client island is necessary
- Iconify through `astro-icon`

## Architecture

Use the Layered Feature-First + Astro Islands model.

- `src/pages/` SHALL compose routes only.
- `src/layouts/` SHALL own document and page shells.
- `src/components/ui/` SHALL contain small presentational primitives.
- `src/components/shared/` SHALL contain reusable site composition.
- `src/features/` SHALL own isolated domain or interactive features.
- `src/const/` SHALL own static, user-facing UI content.
- `src/lib/` SHALL own project-specific domain and data-access logic.
- `src/utils/` SHALL contain generic pure helpers.
- `src/hooks/` SHALL contain reusable React hooks only.
- `src/styles/` SHALL own tokens, global styles, and shared animations.

Create a directory only when it has an initial responsibility. Keep files focused:
UI components should normally remain below 150 lines and logic modules below 200.

## Astro and React

- Use Astro by default.
- Add React only for real client state, complex interaction, filtering, or
  runtime animation state.
- DO NOT convert static layout, links, cards, headers, or footers to React.
- Use the least hydration possible. Prefer `client:visible` or `client:idle`
  when justified; DO NOT default to `client:load`.

## UI Content

- Reusable UI components SHALL NOT contain hardcoded user-facing copy.
- Put static copy, labels, navigation, and metadata in `src/const/`.
- Pass dynamic or domain content into components through props.

## Styling

- Design colors, reusable spacing, sizing, radii, typography, motion, and
  layout decisions SHALL live in `src/styles/tokens/`.
- Use semantic tokens only. DO NOT hardcode colors or reusable design
  dimensions in pages, layouts, or components.
- DO NOT use arbitrary Tailwind values or palette colors for design decisions.
- A project page may later override the semantic `--color-accent`; it SHALL NOT
  create a project-named global color token.
- Do not duplicate token definitions.
- Prefer CSS for presentation-only effects and honor reduced-motion settings.

## Typography, Themes, and Icons

- Load fonts through Fontsource only: Fusion Pixel is brand-only, Kode Mono is
  for headings and navigation, and Albert Sans is for body text.
- The site supports `system`, `light`, and `dark` preferences. Themes SHALL use
  semantic tokens; raw palette colors belong only in `src/styles/tokens/`.
- Preserve the `dangeroni-theme` localStorage preference and system-theme change
  behavior. Do not add a theme library or React for theme controls.
- Use Iconify through `astro-icon`. DO NOT add or import Lucide.

## Astro Component Discipline

- Astro component files SHOULD contain frontmatter wiring, semantic markup, and
  composition only.
- Put normal component styles in `src/styles/components/` and page styles in
  `src/styles/pages/`, then import them through the central style indexes.
- A component-local `<style>` is allowed only for one or two genuinely tiny,
  highly local rules. Extract it as soon as it becomes normal layout or
  responsive styling.
- DO NOT use static inline `style` attributes for design values; use classes or
  tokens instead.
- Avoid component-local `<script>` blocks by default. A tiny isolated
  progressive enhancement is acceptable.
- DO NOT put business logic, data access, substantial state, event handling,
  data processing, reusable interaction logic, or animation orchestration in
  an Astro `<script>`.
- Extract non-trivial pure logic to `lib/` or `utils/`, feature behavior to
  `features/`, and use a React island only when its lifecycle or client state
  makes it necessary.

## Logic and Types

- UI components SHALL remain presentational: no fetching, business logic, data
  transformation, or route/domain decisions.
- Put pure logic in `utils/` or `lib/`; feature orchestration belongs in
  `features/`.
- Use strict types, explicit domain types, and `$/*` absolute imports.
- Avoid `any` and duplicated types.

## Routes and Content

- The current public routes are `/`, `/mods`, `/mods/[slug]`, `/about`, and
  `/links`.
- Mod metadata SHALL come from the `mods` Astro content collection. Do not
  duplicate it in page or component files.
- Per-project source, download, demo, and issue/report links belong on the mod
  detail page. Do not add global support routes or links.

## Accessibility

- Start with semantic HTML.
- Preserve keyboard operation and a visible `:focus-visible` treatment.
- Provide alt text for meaningful images.
- Use buttons and links for their respective actions; DO NOT use clickable
  `div`s.
- Respect `prefers-reduced-motion`.

## Dependency and Scope Discipline

- Do not add a dependency when Astro, the platform, or CSS is sufficient.
- Do not add animation or UI libraries without a clear requirement.
- Make focused changes and preserve established architecture and visual language.
- Do not refactor unrelated working code. Remove dead code introduced by your
  own change.

## Validation

Run the relevant checks after changes without asking:

```sh
bun run check
bun run build
```

Use `bun run format` only when formatting source files, and re-run the checks
afterward.
