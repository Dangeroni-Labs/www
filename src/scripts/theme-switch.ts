const themePreferences = ['system', 'light', 'dark'] as const
type ThemePreference = (typeof themePreferences)[number]

const root = document.documentElement
const control = document.querySelector<HTMLButtonElement>('[data-theme-switch]')
const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
const storageKey = root.dataset.themeStorageKey

const isThemePreference = (value: string | null): value is ThemePreference =>
	value === 'system' || value === 'light' || value === 'dark'

const applyTheme = (preference: ThemePreference) => {
	const theme =
		preference === 'system'
			? mediaQuery.matches
				? 'dark'
				: 'light'
			: preference

	root.dataset.themePreference = preference
	root.dataset.theme = theme

	if (control) {
		control.dataset.currentTheme = preference
		control.setAttribute(
			'aria-label',
			control.dataset[
				`label${preference[0].toUpperCase()}${preference.slice(1)}`
			] ?? '',
		)
	}
}

if (control) {
	control.addEventListener('click', () => {
		const current = root.dataset.themePreference
		const index = themePreferences.indexOf(
			isThemePreference(current) ? current : 'system',
		)
		const preference = themePreferences[(index + 1) % themePreferences.length]

		try {
			window.localStorage.setItem(storageKey ?? '', preference)
		} catch {}

		applyTheme(preference)
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
