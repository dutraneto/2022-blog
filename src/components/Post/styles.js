import styled from 'styled-components'
import media from 'styled-media-query'

export const PostHeader = styled.header`
  color: var(--color-white);
  margin: auto;
  width: 45rem;
  padding: 5rem 5rem 0 0;

  ${media.lessThan('large')`
    padding-top: 0;
    padding-right: 0;
  `}

  ${media.lessThan('medium')`
    padding: 0 2rem 3rem 2rem;
    width: 100%;
    max-width: 92vw;
    margin: 0 auto;
  `}

  ${media.lessThan('small')`
    padding-left: 1rem;
    padding-right: 1rem;
  `}
`

export const PostTitle = styled.h1`
  font-size: 3.4375rem;
  font-weight: 700;
  margin: 1rem auto;
  color: ${(props) => props.color};

  ${media.lessThan('small')`
    font-size: 2.8rem;
  `}
`

export const PostDescription = styled.h2`
  font-size: 2rem;
  font-weight: 200;
  padding: 0;
`

export const PostDate = styled.p`
  font-size: 1.1rem;
  font-weight: 300;
  padding: 0;
  color: ${(props) => props.color};
`

export const PostWrapper = styled.article`
  margin: auto;
  width: 45rem;
  padding: 5rem 5rem 0 0;

  ${media.lessThan('large')`
    padding-right: 0;
  `}

  ${media.lessThan('medium')`
    width: 100%;
    max-width: 92vw;
    margin: 0 auto;
  `}

  ${media.lessThan('small')`
    padding-top: 2rem;
    padding-left: 1rem;
    padding-right: 1rem;
  `}
`

export const PostBody = styled.section`
  .gatsby-highlight {
    border: 1px solid ${(props) => props.color};
    padding: 0 !important;
  }

  p,
  h1,
  h2,
  h3,
  h4,
  ul,
  ol,
  .tags,
  iframe,
  .button-post {
    color: var(--color-white);
    font-size: 1.25rem;
    font-weight: 300;
    line-height: 1.7;
    letter-spacing: 0.069rem;
    padding: 0;
  }

  p {
    margin: 0 auto 1.6rem;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    margin: 2.4rem auto 1rem;
  }

  ul,
  ol {
    list-style: disc;
    padding-left: 2.5rem;
    margin: 0 auto 1.6rem;
  }

  li {
    padding: 0.625rem 0;

    & > ul {
      margin-bottom: 0;
    }
  }

  p,
  li {
    code {
      word-wrap: break-word;
    }
  }

  img {
    display: block;
    max-width: 100%;
  }

  iframe {
    padding: 0;
    width: 100%;
  }

  blockquote {
    color: var(--color-white);
    border-left: 0.3rem solid ${(props) => props.color};
    padding: 0 1.875rem;
    margin: 3.125rem auto;
  }

  hr {
    border: 1px solid ${(props) => props.color};
    margin: 3rem auto;
  }

  #twitter-widget-0,
  .instagram-media,
  .twitter-tweet {
    margin: 20px auto !important;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    font-weight: 800;
    letter-spacing: 0.069rem;
    line-height: 1.4;
  }

  h1 {
    font-size: 2.8rem;
  }

  h2 {
    font-size: 2.1rem;
  }

  h3 {
    font-size: 1.6rem;
  }

  h4 {
    font-size: 1.4rem;
  }

  h5 {
    font-size: 1.2rem;
  }

  strong {
    font-weight: 700;
  }

  .gatsby-resp-image-background-image {
    z-index: 2;
    opacity: 1 !important;
  }

  .gatsby-resp-image-image {
    box-shadow: none !important;
    transition: opacity 0.2s;

    &.lazyload {
      opacity: 0;
    }

    &.lazyloaded {
      opacity: 1;
      z-index: 3;
    }
  }

  .gatsby-highlight {
    padding: 0 1.6rem 1.6rem;
  }

  .instagram-media {
    margin: 1rem auto !important;
  }

  a {
    border-bottom: 2px dashed ${(props) => props.color};
    color: ${(props) => props.color};
    text-decoration: none;
    transition: opacity 0.5s;

    svg {
      color: ${(props) => props.color};
    }

    &:hover {
      opacity: 0.8;
    }
  }

  /*
 * Synthwave '84 Theme originally by Robb Owen [@Robb0wen] for Visual Studio Code
 * Demo: https://marc.dev/demo/prism-synthwave84
 *
 * Ported for PrismJS by Marc Backes [@themarcba]
 */
  code[class*='language-'],
  pre[class*='language-'] {
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
  pre[class*='language-'] {
    padding: 1em;
    overflow: auto;
  }

  :not(pre) > code[class*='language-'],
  pre[class*='language-'] {
    background-color: transparent !important;
    background-image: linear-gradient(to bottom, #2a2139 75%, #34294f);
  }

  /* Inline code */
  :not(pre) > code[class*='language-'] {
    padding: 0.1em;
    border-radius: 0.3em;
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
    text-shadow: 0 0 2px #001716, 0 0 3px #03edf975, 0 0 5px #03edf975,
      0 0 8px #03edf975;
  }

  .token.class-name {
    color: #fff5f6;
    text-shadow: 0 0 2px #000, 0 0 10px #fc1f2c75, 0 0 5px #fc1f2c75,
      0 0 25px #fc1f2c75;
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
`
