---

title: Tailwind Plugins

date: 2019-03-23

published: true

tags: ['internship']

description: "Write your own tailwind plugins to decide the values and the classnames that get generated."

---

The best way to completely be in control is to override the default tailwind config with a custom plugin.

_Disclaimer: This is based on tailwind v0.7.4_

## Simple Plugin

Since cursors aren't included in the default config file, we should make a plugin for these.

You're better off disabling the default cursors in the `tailwind.js` file and including everything in your plugin.

```js
// tailwind.js
    cursor: false,
```

You can find the plugins in the tailwind repo in [tailwind/src/plugins/cursor](https://github.com/tailwindcss/tailwindcss/blob/master/src/plugins/cursor.js)

So of course when you copy this it will just work.

This is the one I made:

> Beware that if you use `export default` instead of `module.exports`, you will need to compile the code using babel.

```js
module.exports = function (variants) {
  return function({addUtilities}) {
    addUtilities(
      {
        '.cursor-default': {cursor: 'default'},
        '.cursor-pointer': {cursor: 'pointer'},
        '.cursor-grab': {cursor: 'grab'},
        '.cursor-grabbing': {cursor: 'grabbing'},
      },
      variants,
    )
  };
};
```

This exports a function that generates these 4 classes, along with any variants you pass along. To use this, you import it into your `tailwind.js` file.

```js
// tailwind.js
const pluginCursor = require('./plugins/cursor.js');


// ...plugins:
  plugins: [
    pluginCursor(['responsive', 'hover', 'focus']),
  ],
```

## Reusable plugin constructor

But you can also make a reusable plugin that takes in the same object as in the tailwind.js config file. Together with the prefix and the variants that you want to generate.

```js
module.exports = function (prefix, cssProperty, values, variants) {
  return function({addUtilities, e}) {
    const utilities = {};
    const keys = Object.keys(values);

    for(let modifier of keys) {
      const value = values[modifier];
      /*
      e is a tailwind function that escapes the String.
      Then we combine a dot (css class), the prefix we passed along, and the keyname of our object. 
      Because tailwind omits the keyname if it equals default, we do that aswell.
      */
      const utilityKeyName = `.${e(`${prefix}${modifier !== 'default' ? '-' + modifier : ''}`)}`;

      // This is the same pattern as the previous example.
      utilities[utilityKeyName] = { [cssProperty]: value}
    }

    addUtilities(
      utilities,
      variants,
    )
  };
};
```

And then we can use this plugin in our tailwind file, inside the plugins array.

```js
// tailwind.js
const pluginConstructor = require('./plugins/constructor.js');

// Plugin array
pluginConstructor('cursor', 'cursor', variablesCursor, ['responsive', 'hover', 'focus']),
```

You can either import the variables from another file or declare them in a const at the top of your file.

An example of the `variablesCursor.js` file

```js
module.exports = {
  'default': 'default',
  pointer: 'pointer',
  grab: 'grab',
  grabbing: 'grabbing',
};
```

I hope I explained everything thoroughly, If you have any questions or any feedback whatsoever, please tag me on Twitter.