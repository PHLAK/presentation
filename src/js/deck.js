import Reveal from 'reveal.js';
import RevealHighlight from 'reveal.js/plugin/highlight/highlight.esm';
import RevealMarkdown from 'reveal.js/plugin/markdown/markdown.esm.js';
import RevealNotes from "reveal.js/plugin/notes/notes.esm";

let deck = new Reveal({
    hash: true,
});

deck.initialize({
    width: 1080,
    height: 720,
    plugins: [
        RevealHighlight,
        RevealMarkdown,
        RevealNotes
    ]
});
