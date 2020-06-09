---

title: Pasting and formatting post its in contenteditable

slug: pasting-and-formatting

date: 2020-06-09

published: true

tags: ['javascript', 'code', 'vue']

description: "An editable post-it written in Vue, how I dealt with pasting, formatting and editing text, which also works in IE11."

---

## Summary

How I dealt with pasting, formatting and editing text in a Post-it, which also works in IE11.  

## Problems

- content editable doesn't remove formatting.
- There's a contenteditable="plain-text", but Firefox doesn't support this.
- A hack is to create a textarea, but this one doesn't scale in height, so you need some css and html hacks to have a div adjust to the height.
- You could listen to the onpaste event and remove/adjust formatting.
- Our formatting solution: Backend sanitises the HTML.

## Implementation in the old code

- Saves on blur.
- Extracts the innerHTML on blur.
- it's a div

## IE11 Bugs

- using a p tag and copying in content from wordpad replaces the whole tag
    - Use div
- The input event doesn't work.
    - Use textinput
- When pressing enter the cursor jumps to the front
    - No solution

## Vue implementation

- Saves on input, but doesn't update prop
    - This bugs when you update the prop immediately with backend data, moving the cursor to the front. → Only update prop on blur
- Replaces data with backend data on blur
- Uses a div now, since p bugged in IE11.

```js
<div
  class="byx-postit-text mb-0"
  contenteditable
  @input="debouncedUpdate"
  @textinput="debouncedUpdate"
  @blur="updatePostitText"
  v-html="postitText"
>
</div>
```

- Saves innerHTML, but the server will sanitise the HTML.
- Displays HTML, for old postits still containing HTML. However clicking on these will update them with the new backend sanitiser.

This is a simple post-it without richtext editing, but with IE11 support.