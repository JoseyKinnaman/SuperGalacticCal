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
      const lifeExpect = 78;
      let yearsLeft = Math.floor(lifeExpect - age);
      return yearsLeft;
    }

    mercYears() {
      let mercLife = Math.floor(this.lifeLeft() / 0.24);
      return mercLife;
    }
    mercYears() {
      let mercLife = Math.floor(this.lifeLeft() / 0.24);
      return mercLife;
    }
    mercYears() {
      let mercLife = Math.floor(this.lifeLeft() / 0.24);
      return mercLife;
    }
    venusYears() {
      let venusLife = Math.floor(this.lifeLeft() / .62);
      return venusLife;
    }
    marsYears() {
      let marsLife = Math.floor(this.lifeLeft() / 1.88);
      return marsLife;
    }

    jupYears() {
      let jupLife = Math.floor(this.lifeLeft() / 11.86);
      return jupLife;
    }
}