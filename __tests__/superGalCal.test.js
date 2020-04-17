import { mercCalc } from "./../src/superGalCal.js";

describe('ageCalculator', () => {

  Test('should correctly create an age calculator object',() => {
    let mercAge = new mercCalc (34);
    expect(mercAge).toEqual(141)
  });
});
