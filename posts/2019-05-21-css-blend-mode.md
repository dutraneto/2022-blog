---
date: '2019-05-21'
title: 'How to Use the Mix Blend Mode Property in a trick way'
description: 'Using the Blend Mode Property to fill text with background color'
category: 'Css3'
color: '#1572B6'
image: '/assets/images/yellow-rose.png'
language: 'Portuguese'
---

## Introduction

<!-- a couple of months ago I started to learn CSS3 from scratch. From that day forward -->

A couple of days ago I was browsing on Youtube videos when I saw a css meetup. The speaker [Lea Verou](http://lea.verou.me) brought a few CSS tricks I couldn't imagine there was exist.

One very interesting of those it was that amazing CSS property called _mix-blend-mode_ that is able to blend its content with the parent's background content.

So, in the example I will blend the text color with colors from a background. Let's implement it.

```html
<!-- My custom embossed tape -->
<section class="">
  <article class="tag">
    <h1>The most famous florida street</h1>
  </article>
</section>
```

### And here we go!

```css
/* such amazing property */
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

body {
  position: relative;
  box-sizing: border-box;
  background-image: url('yellow-rose.png');
  background-size: cover;
  background-repeat: no-repeat;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

h1 {
  padding: 20px;
  /* we set a background-color as black */
  background-color: #000;
  /* a fallback color */
  color: white;
  /* and here the blend-mode property */
  mix-blend-mode: multiply;
  font-size: 5rem;
  text-transform: uppercase;
}

section {
  position: absolute;
  top: 10rem;
  right: 8%;
}

.tag {
  width: 400px;
}
```

#### The tricky

When you use the value **multiply** in _mix-blend-mode:multiply;_ that element is multiplied by the background colors and replaces its colors. That's the reason you must use color:#000000;.

### It's done!

![Mix Blend Mode](/assets/images/yellow-rose.png)

## Conclusion

Unfortunately the **mix-blend-mode** property isn't [supported so well](https://developer.mozilla.org/en-US/docs/Web/CSS/mix-blend-mode), but you still can use it with a fallback color in addition.
