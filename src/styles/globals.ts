import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed,
    figure, figcaption, footer, header, hgroup,
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure,
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        --color-white: #FFFFFF;
        --color-grey: #626068;
        --color-background: #262235;
        --color-background-menu: #171420;
        --color-background-sidebar: #24192f;
        line-height: 1;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
    body {
        background: #2a2139;
        font-size: 100%;
        font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;
      }

    body.light {
        --color-white: #FFFFFF;
        --color-grey: #626068;
        --color-background: #262235;
        --color-background-menu: #171420;
        --color-background-sidebar: #24192f;
        --color1: #1e1527;
        --color2: #2a1e37;
    }

    /*
 * Synthwave '84 Theme originally by Robb Owen [@Robb0wen] for Visual Studio Code
 * Demo: https://marc.dev/demo/prism-synthwave84
 *
 * Ported for PrismJS by Marc Backes [@themarcba]
 */

 code[class*="language-"],
 pre[class*="language-"] {
     color: #f92aad;
     text-shadow: 0 0 2px #100c0f, 0 0 5px #dc078e33, 0 0 10px #fff3;
     background: none;
     font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
     font-size: 1em;
     text-align: left;
     white-space: pre;
     word-spacing: normal;
     word-break: normal;
     word-wrap: normal;
     line-height: 1.5;

     -moz-tab-size: 4;
     -o-tab-size: 4;
     tab-size: 4;

     -webkit-hyphens: none;
     -moz-hyphens: none;
     -ms-hyphens: none;
     hyphens: none;
 }

 /* Code blocks */
 pre[class*="language-"] {
     padding: 1em;
     overflow: auto;
 }

 :not(pre) > code[class*="language-"],
 pre[class*="language-"] {
     background-color: transparent !important;
     background-image: linear-gradient(to bottom, #2a2139 75%, #34294f);
 }

 /* Inline code */
 :not(pre) > code[class*="language-"] {
     padding: .1em;
     border-radius: .3em;
     white-space: normal;
 }

 .token.comment,
 .token.block-comment,
 .token.prolog,
 .token.doctype,
 .token.cdata {
     color: #8e8e8e;
 }

 .token.punctuation {
     color: #ccc;
 }

 .token.tag,
 .token.attr-name,
 .token.namespace,
 .token.number,
 .token.unit,
 .token.hexcode,
 .token.deleted {
     color: #e2777a;
 }

 .token.property,
 .token.selector {
     color: #72f1b8;
     text-shadow: 0 0 2px #100c0f, 0 0 10px #257c5575, 0 0 35px #21272475;
 }

 .token.function-name {
     color: #6196cc;
 }

 .token.boolean,
 .token.selector .token.id,
 .token.function {
     color: #fdfdfd;
     text-shadow: 0 0 2px #001716, 0 0 3px #03edf975, 0 0 5px #03edf975, 0 0 8px #03edf975;
 }

 .token.class-name {
     color: #fff5f6;
     text-shadow: 0 0 2px #000, 0 0 10px #fc1f2c75, 0 0 5px #fc1f2c75, 0 0 25px #fc1f2c75;
 }

 .token.constant,
 .token.symbol {
     color: #f92aad;
     text-shadow: 0 0 2px #100c0f, 0 0 5px #dc078e33, 0 0 10px #fff3;
 }

 .token.important,
 .token.atrule,
 .token.keyword,
 .token.selector .token.class,
 .token.builtin {
     color: #f4eee4;
     text-shadow: 0 0 2px #393a33, 0 0 8px #f39f0575, 0 0 2px #f39f0575;
 }

 .token.string,
 .token.char,
 .token.attr-value,
 .token.regex,
 .token.variable {
     color: #f87c32;
 }

 .token.operator,
 .token.entity,
 .token.url {
     color: #67cdcc;
 }

 .token.important,
 .token.bold {
     font-weight: bold;
 }

 .token.italic {
     font-style: italic;
 }

 .token.entity {
     cursor: help;
 }

 .token.inserted {
     color: green;
 }

 .gatsby-plugin-transition-link-portal {
    height: 60px;
 }
`

export default GlobalStyles
