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
    marsCalc() {
      let age = this.age;
      let marsAge = Math.floor(age / 1.88);
      return marsAge;
    }
    jupCalc() {
      let age =this.age ;
      let jupAge = Math.floor(age / 11.86);
      return jupAge;
    }
    lifeLeft() {
      let age = this.age;
      const lifeExpect = 78.6;
      let yearsLeft = Math.floor(lifeExpect - age);
      return yearsLeft;
    }
    mercLeft(){
      let age = this.age;
      let yearsLeft = age.lifeLeft();
      let mercYears = Math.floor(yearsLeft/ 0.24);
      return mercYears;
    }
}