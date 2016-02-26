var expect = require('chai').expect;
var request = require('request');

describe("Color Code Converter API", () => {

  describe("RGB to Hex conversion", () => {

    var url = "https://localhost:3000/rgbToHex?red=255&green=255&blue=255";

    it("returns status 200", () => {

    });

    it("returns the color in hex", () => {

    });
  });

  describe("Hex to RGB conversion", () => {

    var url = "https://localhost:3000/hexToRGB?hex=00ff00";

    it("returns status 200", () => {

    });

    it("returns the color in RGB", () => {

    });
  });
});
