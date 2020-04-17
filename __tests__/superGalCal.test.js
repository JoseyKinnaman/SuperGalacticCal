import { ageCalulator } from "./../src/superGalCal.js";

describe('ageCalulator', () => {

  test('should correctly create an age class and constructor',() => {
    let newAge = new ageCalulator (34);
    expect(newAge.age).toEqual(34);
  });
});
