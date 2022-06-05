# ascii-map

A lightweight representation of the ascii table that makes it easy to convert to and fro character, decimal, hexadecimal, octal, HTML code, HTML name.

## Install

```sh
npm install --save ascii-map
```

## Usage

```js
const { char, dec, hex, oct, bin, htmlCode, htmlName } = require("ascii-map");

char("A") // { dec: "65", hex: "41", oct: "101", bin: "01000001", htmlCode: "&#65;", htmlName: undefined, char: "A", desc: "Upper Case Letter A" }

dec("65").bin // 01000001

hex("41").oct // 101

oct("101").char // A

bin("01000001").htmlCode // &#65;

htmlCode("&#65;").desc // Upper Case Letter A

htmlName("&dollar;").dec // 36

char("AA") // undefined

```

### Note
+ Characters without `htmlName` returns `undefined`.
+ Trying to read the properties of an undefined character throws `TypeError: Cannot read properties of undefined` error.

Table was derived from https://www.lookuptables.com/text/ascii-table


### License
[MIT](https://choosealicense.com/licenses/mit/)