const { test } = require('@jest/globals')
const Convert = require ('../src/convert')

const convert = new Convert ();

test('Should convert C to  C', () => {
    expect(convert.fromCelcius("cel",32)).toBe(32);
});

test('Should convert C to  F', () => {
    expect(convert.fromCelcius("far",32)).toBe(89.6);
});

test('Should convert C to  R', () => {
    expect(convert.fromCelcius("rea",32)).toBe(25.6);
});

test('Should convert F to  F', () => {
    expect(convert.fromFarenheit("far",32)).toBe(32);
});

test('Should convert F to  C', () => {
    expect(convert.fromFarenheit("cel",32)).toBe(0);
});

test('Should convert F to  R', () => {
    expect(convert.fromFarenheit("rea",32)).toBe(0);
});

test('Should convert R to  R', () => {
    expect(convert.fromReamur("rea",32)).toBe(32);
});

test('Should convert R to  C', () => {
    expect(convert.fromReamur("cel",32)).toBe(40);
});

test('Should convert R to  F', () => {
    expect(convert.fromReamur("far",0)).toBe(32);
});