---

title: Coding Conventions

date: 2019-03-24

published: false

tags: ['internship']

description: "The last few weeks in the company we have writing an UI library from the ground with 3 developers. We all write in a different way, and this brings up a lot of coding conventions questions."

---

# Coding Conventions

For the last few weeks in the company my main project has been on hold. We have been rewriting the ui elements and switching up our style guide using tailwind.

## Style-config, our repo with all our tailwind variables

In the process I have rewritten our tailwind variables multiple times.
To start off, we use a [library to convert a tailwind config to less variables](https://github.com/dobromir-hristov/tailwindcss-export-config) written by [Dobromir Hristov](https://twitter.com/d_m_hristov).

This works very straight forward where it takes your key values and converts them into variables. e.g.

```js
colors = {
  white: #fff,
}
```

```css
@colors-white: #fff
```

This is fine. But do you really need all of them converted into less variables? For example the widths, colors etc will create duplications.
So I started separating the variables in a folder called variables. Here I create files and import them into the tailwind.js.

Using it this way, I can create an `index.js` file where I only import the variables I want to be exported.

In an attempt to normalize the variables with the tailwind classes, this is what i ended up with.

[lessVariables.js](./examples/less-variables)

```js
//lessVariables.js
const color = require('./variables/colors.js');
// repeat imports for every variable

module.exports = {
  color,
  text: {
    ...textSizes,
  },
  font: {
    ...fontFamily,
    ...fontWeights,
  },
  size,
  shadow,
  rounded,
  'line-height': lineHeight,
  gradient,
  'transition-time': transitionTime,
};
```

Then I use the sizes variables to populate margin, padding, width and height inside of `tailwind.js`.

test