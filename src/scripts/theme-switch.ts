const themePreferences = ['system', 'light', 'dark'] as const
type ThemePreference = (typeof themePreferences)[number]

const root = document.documentElement
const menu = document.querySelector<HTMLElement>('[data-theme-menu]')
const trigger = document.querySelector<HTMLButtonElement>(
	'[data-theme-menu-trigger]',
)
const options = document.querySelector<HTMLElement>('[data-theme-menu-options]')
const preferenceButtons = document.querySelectorAll<HTMLButtonElement>(
	'[data-theme-option]',
)
const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
const storageKey = root.dataset.themeStorageKey

const isThemePreference = (value: string | null): value is ThemePreference =>
	value === 'system' || value === 'light' || value === 'dark'

const setMenuOpen = (isOpen: boolean, restoreFocus = false) => {
	if (!trigger || !options) {
		return
	}

	trigger.setAttribute('aria-expanded', String(isOpen))
	options.hidden = !isOpen

	if (restoreFocus) {
		trigger.focus()
	}
}

const applyTheme = (preference: ThemePreference) => {
	const theme =
		preference === 'system'
			? mediaQuery.matches
				? 'dark'
				: 'light'
			: preference

	root.dataset.themePreference = preference
	root.dataset.theme = theme

	for (const button of preferenceButtons) {
		button.setAttribute(
			'aria-checked',
			String(button.dataset.themePreference === preference),
		)
	}
}

if (trigger && options && menu) {
	trigger.addEventListener('click', () => {
		setMenuOpen(options.hidden)
	})

	for (const button of preferenceButtons) {
		button.addEventListener('click', () => {
			const preference = button.dataset.themePreference

			if (!isThemePreference(preference)) {
				return
			}

			try {
				window.localStorage.setItem(storageKey ?? '', preference)
			} catch {}

			applyTheme(preference)
			setMenuOpen(false, true)
		})
	}

	document.addEventListener('pointerdown', event => {
		if (!menu.contains(event.target as Node)) {
			setMenuOpen(false)
		}
	})

	document.addEventListener('keydown', event => {
		if (event.key === 'Escape' && !options.hidden) {
			setMenuOpen(false, true)
		}
	})

	applyTheme(
		isThemePreference(root.dataset.themePreference)
			? root.dataset.themePreference
			: 'system',
	)
}

mediaQuery.addEventListener('change', () => {
	if (root.dataset.themePreference === 'system') {
		applyTheme('system')
	}
})
