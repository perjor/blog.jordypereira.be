---

title: Tailwind Plugins

date: 2019-03-17

published: false

tags: ['internship']

description: "Write your own tailwind plugins to decide the values and the classnames that get generated."

---

# Tailwind Plugins

The best way to completely be in control is to override the default tailwind config with a custom plugin.

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

But you can also make a reusable file plugin that takes in an object like we are used to defining in the tailwind.js file, a prefix and the variants you want to generate.

```js
module.exports = function (prefix, cssProperty, values, variants) {
  return function({addUtilities, e}) {
    const utilities = {};
    const keys = Object.keys(values);

    for(let modifier of keys) {
      const value = values[modifier];
      utilities[`.${e(`${prefix}${modifier !== 'default' ? '-' + modifier : ''}`)}`] = { cssProperty: value}
    }

    addUtilities(
      utilities,
      variants,
    )
  };
};
```

And then we can use this plugin in our tailwind file, inside the plugins array.

`plugins.default('cursor', 'cursor', variables.cursor, ['responsive', 'hover', 'focus']),`

You can either import the variables from another file or declare them in a const at the top of your file.