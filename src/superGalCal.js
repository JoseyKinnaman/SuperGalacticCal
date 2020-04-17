export class ageCalulator {
    constructor (age) {
      this.age = age;
    }
    mercCalc() {
      let age = this.age;
      let mercAge = Math.floor(age / 0.24);
      return mercAge;
    }
    
  }