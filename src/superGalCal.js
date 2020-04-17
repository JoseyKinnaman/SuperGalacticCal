export class ageCalulator {
  constructor(age) {
    this.age = age;
  }
    mercCalc() {
      let age = this.age;
      let mercAge = Math.floor(age / 0.24);
      return mercAge;
    }
    venusCalc() {
      let age = this.age;
      let venusAge = Math.floor(age / 0.62);
      return venusAge;
    }
}