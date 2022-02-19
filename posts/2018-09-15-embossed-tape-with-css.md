---
date: '2018-09-15'
title: "How to Design an Embossed Tape With CSS"
description: "Building an old Embossed Tape"
category: 'Css3'
color: "#1572B6"
---

## Introdução

<!-- a couple of months ago I started to learn CSS3 from scratch. From that day forward -->

Eu aprendi a usar CSS3 há alguns meses atrás. Desde então, cada layout que eu vejo e admiro, fico tentando decifrar na minha cabeça os truques de CSS envolvidos na construção daquele componente.

Esses dias eu me deparei com uma daquelas fitas de plático autocolantes usadas para identificar objetos. Não estou ao certo sobre o nome em português, mas sei que em inglês chama-se [Embossed Tape](https://en.wikipedia.org/wiki/Embossing_tape).

![Embossed Tape](/assets/images/embossed-plastic-label.jpg)

Logo veio a curiosidade de saber como imitar o design da mesma fita da figura acima, utilizando CSS puro.

### Mão na massa

```html
<!-- My custom embossed tape -->
<div class="position">
  <p><span class="embossed blue">embossed</span></p>
  <p><span class="embossed blue">plastic labels</span></p>
  <p><span class="embossed green">letters and</span></p>
  <p><span class="embossed green">number sets</span></p>
  <p><span class="embossed red">dutraneto.com</span></p>
</div>
```

#### Agora, um pouquinho de mágica

```css
/* It's Magical */
.position {
  margin: 1rem auto;
  text-align: center;
}
p {
  margin: 3px;
}
.embossed {
  display: inline-block;
  font-family: monospace;
  font-size: 2rem;
  letter-spacing: 0.5rem;
  color: #fff;
  padding: 0.7rem 3rem;
  text-transform: uppercase;
  border: 1px solid #999;
  border-bottom-color: #000;
  text-shadow:
            /*inner*/ 0 0 1px #000, /*top*/ 0 -2px 1px #aaa,
    /*right*/ 1px 0 1px #fff, /*botom*/ 0 2px 0 #666, /*left*/ -2px 0 1px #aaa;
}
.blue {
  background-image: linear-gradient(
    120deg,
    white 0%,
    #183473 5%,
    #183473 95%,
    white
  );
}
.green {
  background-image: linear-gradient(
    -150deg,
    white 0%,
    #356b4b 8%,
    #356b4b 92%,
    white
  );
}
.red {
  background-image: linear-gradient(
    170deg,
    white 0%,
    #c5322a 12%,
    #c5322a 88%,
    white
  );
}
```

### O resultado foi

![My Custom Embossed Tape](/assets/images/my-custom-embossed-tape.png)

<p data-height="265" data-theme-id="dark" data-slug-hash="LJJbby" data-default-tab="css,result" data-user="dutraneto" data-pen-title="embossed-tape" data-preview="true" class="codepen">See the Pen <a href="https://codepen.io/dutraneto/pen/LJJbby/">embossed-tape</a> by José Dutra M Neto (<a href="https://codepen.io/dutraneto">@dutraneto</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## Conclusão

Bom, sabemos que ainda há um longo caminho a ser percorrido, pois isso é apenas o básico de CSS. Precisamos dominar muitas outras tecnologias para podermos enfrentar o mercado de trabalho na área de IT.

#### Até Breve!
