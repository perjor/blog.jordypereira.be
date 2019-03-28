---

title: lessVariables

---
# lessVariables.js

```js
const color = require('./variables/colors.js');
const textSizes = require('./variables/textSizes.js');
const fontWeights = require('./variables/fontWeights.js');
const size = require('./variables/sizes.js');
const shadow = require('./variables/shadows.js');
const rounded = require('./variables/rounded.js');
const fontFamily = require('./variables/fontFamily.js');
const lineHeight = require('./variables/lineHeight.js');
const gradient = require('./variables/gradient.js');
const transitionTime = require('./variables/transitionTime.js');

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
