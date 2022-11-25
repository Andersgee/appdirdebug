export const THEME_SCRIPT_STRING = `
var m = window.matchMedia('(prefers-color-scheme: dark)')
var c = document.documentElement.classList

if (!m.matches) {
    c.remove('dark')
}

function onChange(e) {
    if (e.matches) {
        c.add('dark')
    } else {
        c.remove('dark')
    }
}

m.addEventListener('change', onChange)
`;
