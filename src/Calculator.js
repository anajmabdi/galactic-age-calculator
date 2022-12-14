export class Calculator {
  constructor(age) {
    this.earthAge = age;
    this.mercuryAge = 0; // 88 days
    this.yearsLeftInMercury = 0
    this.venusAge = 0; // 225 days
    this.yearsLeftInVenus = 0
    this.marsAge = 0; // 687 days
    this.yearsLeftInMars = 0
    this.jupiterAge = 0; // 4333 days
    this.yearsLeftInJupiter = 0
    this.humanLifeSpan = 73; //rounded World's average lifespan (72.98)
  }

  convertToMercury() {
    let age = this.earthAge;
      let conversion = Math.floor((age * 365) / 88);
      this.mercuryAge = conversion + this.mercuryAge;
  }
  remainderMercury() {
    if (this.mercuryAge < this.humanLifeSpan) {
      this.yearsLeftInMercury = this.humanLifeSpan - this.mercuryAge;
    }else {
      return 0;
    }
  }

  convertToVenus() {
    let age = this.earthAge;
      let conversion = Math.floor((age * 365) / 225);
      this.venusAge = conversion + this.venusAge;
  }
  remainderVenus() {
    if (this.venusAge < this.humanLifeSpan) {
      this.yearsLeftInVenus = this.humanLifeSpan - this.venusAge;
    }else {
      return 0;
    }
  }

  convertToMars() {
    let age = this.earthAge;
    let conversion = Math.floor((age * 365) / 687);
    this.marsAge = conversion + this.marsAge;
  }
  remainderMars() {
    if (this.marsAge < this.humanLifeSpan) {
      this.yearsLeftInMars = this.humanLifeSpan - this.marsAge;
    }else {
      return 0;
    }
  }

  convertToJupiter() {
    let age = this.earthAge;
    let conversion = Math.floor((age * 365) / 4333);
    this.jupiterAge = conversion + this.jupiterAge;
  }

  remainderJupiter() {
    if (this.jupiterAge < this.humanLifeSpan) {
      this.yearsLeftInJupiter = this.humanLifeSpan - this.jupiterAge;
    }else {
      return 0;
    }
  }






}
