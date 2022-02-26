---
layout: post
date: 2018-09-23
title: 'Utilizando a tag video da forma correta'
description: 'Como utilizar a tag video semanticamente'
category: 'Html5'
color: '#E34F26'
language: 'Portuguese'
---

# Introdução

Nesse rápido post nós iremos aprender a forma mais correta de se utilizar a tag [video](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/video).

O poder do HTML5 nos trouxe a facilidade de servir conteúdo de vídeo sem a necessidade de usar Flash 🙏🏽.

Um ponto importante é que podemos inserir uma imagem de fallback caso o vídeo não seja carregado por algum motivo particular do seu browser.

### Utilizando a tag video

```html
<div class="homepage-hero-module">
  <div class="video-container">
    <div class="filter"></div>
    <video autoplay loop class="fillWidth">
      <source src="PATH_TO_MP4" type="video/mp4" />
      Your browser does not support the video tag. I suggest you upgrade your
      browser.
      <source src="PATH_TO_WEBM" type="video/webm" />
      Your browser does not support the video tag. I suggest you upgrade your
      browser.
    </video>
    <div class="poster hidden">
      <img src="PATH_TO_JPEG" alt="" />
    </div>
  </div>
</div>
```

### Um pouco de CSS

```css
.homepage-hero-module {
  border-right: none;
  border-left: none;
  position: relative;
}
.video-container {
  position: relative;
  bottom: 0%;
  left: 0%;
  height: 100%;
  width: 100%;
  overflow: hidden;
  background: #000;
}
.video-container .poster img {
  width: 100%;
  bottom: 0;
  position: absolute;
}
.video-container .filter {
  z-index: 100;
  position: absolute;
  background: rgba(0, 0, 0, 0.4);
  width: 100%;
}
.video-container video {
  position: absolute;
  z-index: 10;
  bottom: 0;
}

.video-container video.fillWidth {
  width: 100%;
  position: relative;
}
```

## Conclusão

Pode paracer muito simples utilizar a tag [video](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/video) e nesse post não exploramos os seus atributos, os codecs utilizados, os formatos de arquivos e nenhuma manipulação por meio de JavaScript foi feita.

Fica para um futuro post 👍🏾.
