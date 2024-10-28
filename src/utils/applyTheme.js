export function applyTheme(theme) {
    const root = document.documentElement;
    Object.keys(theme).forEach((cssVar) => {
        root.style.setProperty(cssVar, theme[cssVar])
    })
}

export function createTheme({
    primary,
    text,
    bg,
    bgSecondary
}) {
    return {
        "--theme-primary": primary,
        "--theme-text": text,
        "--theme-bg": bg,
        "--theme-secondary-bg": bgSecondary
    }
}