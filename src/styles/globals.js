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

    pre code.hljs{
    display:block;
    overflow-x:auto;
    padding:1.5em;
}
code.hljs{
    padding:3px 5px
}
.hljs{
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
}
.hljs-subst{
    color:#e3dfff;
}
.hljs-title{
    color:#fad000;
    font-weight:400;
}
.hljs-name{
    color:#a1feff;
}
.hljs-tag{
    color:#fff;
}
.hljs-attr{
    color:#f8d000;
    font-style:italic;
}
.hljs-built_in,.hljs-keyword,.hljs-section,.hljs-selector-tag{
    color:#fb9e00
}
.hljs-addition,.hljs-attribute,.hljs-bullet,.hljs-code,.hljs-deletion,.hljs-quote,.hljs-regexp,.hljs-selector-attr,.hljs-selector-class,.hljs-selector-pseudo,.hljs-string,.hljs-symbol,.hljs-template-tag{
    color:#4cd213
}
.hljs-meta,.hljs-meta .hljs-string{
    color:#fb9e00;
}
.hljs-comment{
    color:#8e8e8e;
}
.hljs-keyword,.hljs-literal,.hljs-name,.hljs-selector-tag,.hljs-strong{
    font-weight:400;
}
.hljs-literal,.hljs-number{
    color:#ccc;
}
.hljs-emphasis{
    font-style:italic;
}
.hljs-strong{
    font-weight:700;
}
`

export default GlobalStyles
