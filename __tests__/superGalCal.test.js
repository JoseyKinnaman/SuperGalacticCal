import { ageCalulator } from "./../src/superGalCal.js";

describe('ageCalulator', () => {

  test('should correctly create an age Calulator class and constructor',() => {
    let newAge = new ageCalulator (34);
    expect(newAge.age).toEqual(34);
  });

  test("should correctly return a user's age in Mercury years", ()=> {
    let newAge = new ageCalulator(34);
    var mercAge = newAge.mercCalc();
    expect(mercAge).toEqual(141);
  })

  test("should correctly return a user's age in Venus years", () => {
    let newAge = new ageCalulator(34);
    var venusAge = newAge.venusCalc();
    expect(venusAge).toEqual(54);
  });

  test("should correctly return a user's age in Mars years", () => {
    let newAge = new ageCalulator(34);
    let marsAge = newAge.marsCalc();
    expect(marsAge).toEqual(18);
  })

  test("should correctly return a user's age in Jupiter years", ()=>{
    let newAge = new ageCalulator(34);
    let jupAge = newAge.jupCalc();
    expect(jupAge).toEqual(2);
  })
});
