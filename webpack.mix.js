let mix = require('laravel-mix');
let tailwindcss = require('tailwindcss')

mix.webpackConfig({
    watchOptions: { ignored: ['node_modules', 'app/vendor'] }
});

mix.js('src/js/deck.js', 'dist/');

mix.sass('src/scss/deck.scss', 'dist/').options({
    processCssUrls: false,
    postCss: [tailwindcss('tailwind.config.js')],
});

if (mix.inProduction()) {
    mix.version();
}
