module.exports = {
    future: {
        removeDeprecatedGapUtilities: true,
        purgeLayersByDefault: true,
        standardFontWeights: true,
    },
    purge: [
        "./index.html",
        "./src/js/**/*.js",
        "./src/scss/**/*.scss"
    ],
    theme: {
        extend: {
            backgroundColor: {
                "ocean-dark": "#2B303B"
            },
            fontFamily: {
                mono: ["Source Code Pro", "Ubuntu Mono", "monospace"],
                sans: [
                    "Montserrat",
                    "Roboto",
                    '"Noto Sans"',
                    "sans-serif",
                    '"Apple Color Emoji"',
                    '"Segoe UI Emoji"',
                    '"Segoe UI Symbol"',
                    '"Noto Color Emoji"'
                ]
            }
        }
    },
    variants: {},
    plugins: []
};
