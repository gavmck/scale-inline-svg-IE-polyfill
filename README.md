# scale-inline-svg-IE-polyfill
A polyfill to allow scaling of inline svg in IE

## Requirements
Relies on ES6 and Browserify.
SVG must have height/width.

## Usage
```
import scaleSVG from 'scae-svg-polyfill';
scaleSVG();
```

## How it works
You can scale inline svg if they are `position: absolute;` in IE9-11.
This polyfill adds a wrapper div and a spacer div with padding bottom in percent to create the height aspect ratio.