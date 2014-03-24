# LEGO™ Colors
LEGO™ bricks colors in Node.js.

## Install

```sh
npm i lego-colors --save
```

## Usage

Get a brick color by its LEGO™ number:
```js
var legoColors = require('legoColors');

var rust = legoColors.getByLEGONumber(216);

// Rust
console.log(rust.name);

// [143, 76, 42]
console.log(rgb);
```

Or get it as color constant:

```js
var colors = require('legoColors').colors;

// Cool yellow
console.log(colors.COOL_YELLOW.name);

// 120 C
console.log(colors.COOL_YELLOW.pantone);

// [0, 7, 59, 0]
console.log(colors.COOL_YELLOW.cmyk);
```

## LEGO™ Brick Color Source
http://www.peeron.com/cgi-bin/invcgis/colorguide.cgi

## Notice

All trademarks, service marks, and copyrights are property of their respective owners. LEGO® is a registered trademark of the LEGO Company.

# License
(The MIT License)

Copyright (c) 2014 Alberto Pose <albertopose@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
