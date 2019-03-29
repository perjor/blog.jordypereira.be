---

title: Coding Conventions CSS

date: 2019-03-29

published: true

tags: ['internship']

description: "In this article I introduce you to our CSS conventions. In the last few weeks we have written an UI library from the ground with 3 developers. We all write in a different way, and this brings up a lot of coding conventions questions."

---

# Coding Conventions: CSS

For the last few weeks in the company my main project has been on hold. We have been rewriting the ui elements and switching up our style guide using tailwind.

## A repo with all our tailwind variables

In the process I have rewritten our tailwind variables multiple times.
To start off, we use a [library to convert a tailwind config to less variables](https://github.com/dobromir-hristov/tailwindcss-export-config) written by [Dobromir Hristov](https://twitter.com/d_m_hristov).

This works very straight forward where it takes am object with key-values and converts them into variables. e.g.

```js
const colors = {
  white: #fff,
}
```

```css
@colors-white: #fff
```

This is fine. But do you really need all of them converted into less variables? For example the widths, colors etc will create duplications.  
So I started separating the variables in a folder called variables.  
Here I create the files and import them into the tailwind.js.

Using it this way, I can create an `index.js` file where I only import the variables I want to be exported.

In an attempt to normalize the variables with the tailwind classes, this is what i ended up with.

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

The name of your files don't matter. Only the key of your final object matters.

```js
padding: variables.sizes,

margin: variables.sizes,

negativeMargin: variables.sizes,
```

I wouldn't touch the key names in your tailwind.js file. These are hard-coded in the converting process. If you want to change these values, I recommend writing [a custom plugin. Which I have explained here](/tailwind-plugins).

Combining custom plugins with the separated variable files, I end up with a `variables.less` file that roughy looks like this:

```less
@color-success400: #d8eacc;
@color-success500: #b6d6a3;
@color-success600: #5c9642;
@color-update400: #f9e0fa;
@color-update500: #f3c4f5;
@color-update600: #9a008f;

@size-0: 0;
@size-4: 0.25rem;
@size-8: 0.5rem;
@size-12: 0.75rem;

@shadow: 0 2px 12px rgba(54, 48, 39, 0.06), 0 1px 2px rgba(54, 48, 39, 0.06);

@rounded: .25rem;

@gradient-success: #5c9642 radial-gradient(circle at 100% 100%, #4576c2, #5c9642);
@gradient-success-light: #b6d6a3 radial-gradient(circle at 100% 100%, #d8eacc, #b6d6a3);
```

You might have noticed that our sizes are different than the original tailwind classnames.  
This is because the developers base their designs of Zeplin, and zeplin doesn't support rem yet.  
So these values are the pixels translation of a base-16 design.

Now we can use the less variables in our UI library, and the awesome tailwind classes in our projects.