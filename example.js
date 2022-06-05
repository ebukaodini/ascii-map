import { char, dec, hex, oct, bin, htmlCode, htmlName } from "./index.js";

console.log(
  char("A"),
  dec("65").bin,
  hex("41").oct,
  htmlCode("&#65;").desc,
  oct("101").char,
  char("AA"),
  bin("01000001").htmlCode,
  htmlName("&dollar;").dec
)