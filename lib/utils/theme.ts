export const THEME_SCRIPT_STRING = `
var m = window.matchMedia('(prefers-color-scheme: dark)')
var c = document.documentElement.classList

if (localStorage.theme === 'dark' || (m.matches && !('theme' in localStorage))) {
    c.add('dark')
} else {
    c.remove('dark')
}

function setColorScheme(e) {
    if (e.matches) {
        c.remove('light')
        c.add('dark')
        localStorage.setItem('theme', 'dark')
    } else {
        c.remove('dark')
        c.add('light')
        localStorage.setItem('theme', 'light')
    }
}

m.addEventListener('change', setColorScheme)
`;
