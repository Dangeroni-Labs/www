const themePreferences = ['system', 'light', 'dark'] as const
type ThemePreference = (typeof themePreferences)[number]

const root = document.documentElement
const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
const themeWindow = window as Window & {
	__dangeroniThemeListeners?: boolean
}

const isThemePreference = (value: string | null): value is ThemePreference =>
	value === 'system' || value === 'light' || value === 'dark'

const getPreference = (): ThemePreference => {
	try {
		const preference = window.localStorage.getItem(
			root.dataset.themeStorageKey ?? '',
		)

		return isThemePreference(preference) ? preference : 'system'
	} catch {
		return 'system'
	}
}

const getMenuElements = () => ({
	menu: document.querySelector<HTMLElement>('[data-theme-menu]'),
	options: document.querySelector<HTMLElement>('[data-theme-menu-options]'),
	trigger: document.querySelector<HTMLButtonElement>(
		'[data-theme-menu-trigger]',
	),
})

const setMenuOpen = (isOpen: boolean, restoreFocus = false) => {
	const { options, trigger } = getMenuElements()

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

	for (const button of document.querySelectorAll<HTMLButtonElement>(
		'[data-theme-option]',
	)) {
		button.setAttribute(
			'aria-checked',
			String(button.dataset.themePreference === preference),
		)
	}
}

const initializeTheme = () => {
	applyTheme(getPreference())
	setMenuOpen(false)
}

const savePreference = (preference: ThemePreference) => {
	try {
		window.localStorage.setItem(root.dataset.themeStorageKey ?? '', preference)
	} catch {}
}

if (!themeWindow.__dangeroniThemeListeners) {
	document.addEventListener('click', event => {
		if (!(event.target instanceof Element)) {
			return
		}

		const preferenceButton = event.target.closest<HTMLButtonElement>(
			'[data-theme-option]',
		)

		if (preferenceButton) {
			const preference = preferenceButton.dataset.themePreference

			if (isThemePreference(preference)) {
				savePreference(preference)
				applyTheme(preference)
				setMenuOpen(false, true)
			}

			return
		}

		const trigger = event.target.closest<HTMLButtonElement>(
			'[data-theme-menu-trigger]',
		)

		if (trigger) {
			const { options } = getMenuElements()
			setMenuOpen(options?.hidden ?? false)

			return
		}

		const { menu } = getMenuElements()
		if (!menu?.contains(event.target)) {
			setMenuOpen(false)
		}
	})

	document.addEventListener('keydown', event => {
		const { options } = getMenuElements()

		if (event.key === 'Escape' && options && !options.hidden) {
			setMenuOpen(false, true)
		}
	})

	mediaQuery.addEventListener('change', () => {
		if (getPreference() === 'system') {
			applyTheme('system')
		}
	})

	document.addEventListener('astro:after-swap', initializeTheme)
	document.addEventListener('astro:page-load', initializeTheme)
	themeWindow.__dangeroniThemeListeners = true
}

initializeTheme()
