import { ageCalulator } from "./../src/superGalCal.js";

describe('ageCalulator', () => {

  test('should correctly create an age class and constructor',() => {
    let age = new ageCalulator (34);
    expect(age).toEqual(141);
  });
});
