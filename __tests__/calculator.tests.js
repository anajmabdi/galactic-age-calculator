import { Calculator } from '../src/Calculator.js';

describe('Calculator', () => {
  test('should build a Calculator object that contains a set of properties', () => {
    let calculator = new Calculator(22);
    expect(calculator.earthAge).toEqual(22);
    expect(calculator.mercuryAge).toEqual(0);
    expect(calculator.venusAge).toEqual(0);
    expect(calculator.marsAge).toEqual(0);
    expect(calculator.jupiterAge).toEqual(0);
    expect(calculator.humanLifeSpan).toEqual(73);
  });

  test('should convert earth age to Mercury age', () => {
    let calculator = new Calculator(22);
    calculator.convertToMercury();
    expect(Math.floor((calculator.earthAge * 365) / 88)).toEqual(91);
    expect(calculator.mercuryAge).toEqual(91);
  });

  test('should calculate the remainder of their life on Mercury', () => {
    let calculator = new Calculator(22);
    let calculator2 = new Calculator(1);

    calculator.convertToMercury();
    calculator.remainderMercury();
    calculator2.convertToMercury();
    calculator2.remainderMercury();

    expect(calculator.mercuryAge).toEqual(91)
    expect(calculator.humanLifeSpan).toEqual(73);
    expect(calculator.yearsLeftInMercury).toEqual(0);

    expect(calculator2.mercuryAge).toEqual(4)
    expect(calculator2.humanLifeSpan).toEqual(73);
    expect(calculator2.yearsLeftInMercury).toEqual(69);
  });
  test('should convert earth age to Venus age', () => {
    let calculator = new Calculator(22);
    calculator.convertToVenus();
    expect(Math.floor((calculator.earthAge * 365) / 225)).toEqual(35);
    expect(calculator.venusAge).toEqual(35);
  });
  test('should calculate the remainder of their life on Venus', () => {
    let calculator = new Calculator(22);
    let calculator2 = new Calculator(100);

    calculator.convertToVenus();
    calculator.remainderVenus();
    calculator2.convertToVenus();
    calculator2.remainderVenus();

    expect(calculator.venusAge).toEqual(35)
    expect(calculator.humanLifeSpan).toEqual(73);
    expect(calculator.yearsLeftInVenus).toEqual(38);

    expect(calculator2.venusAge).toEqual(162)
    expect(calculator2.humanLifeSpan).toEqual(73);
    expect(calculator2.yearsLeftInVenus).toEqual(0);
  });

  test('should convert earth age to Mars age', () => {
    let calculator = new Calculator(22);
    calculator.convertToMars();
    expect(Math.floor((calculator.earthAge * 365) / 687)).toEqual(11);
    expect(calculator.marsAge).toEqual(11);
  });

  test('should calculate the remainder of their life on Mars', () => {
    let calculator = new Calculator(22);
    let calculator2 = new Calculator(150);

    calculator.convertToMars();
    calculator.remainderMars();
    calculator2.convertToMars();
    calculator2.remainderMars();

    expect(calculator.marsAge).toEqual(11)
    expect(calculator.humanLifeSpan).toEqual(73);
    expect(calculator.yearsLeftInMars).toEqual(62);

    expect(calculator2.marsAge).toEqual(79)
    expect(calculator2.humanLifeSpan).toEqual(73);
    expect(calculator2.yearsLeftInMars).toEqual(0);
  });

  test('should convert earth age to Jupiter age', () => {
    let calculator = new Calculator(22);
    calculator.convertToJupiter();
    expect(Math.floor((calculator.earthAge * 365) / 4333)).toEqual(1);
    expect(calculator.jupiterAge).toEqual(1);
  });

  test('should calculate the remainder of their life on Jupiter', () => {
    let calculator = new Calculator(22);

    calculator.convertToJupiter();
    calculator.remainderJupiter();

    expect(calculator.jupiterAge).toEqual(1)
    expect(calculator.humanLifeSpan).toEqual(73);
    expect(calculator.yearsLeftInJupiter).toEqual(72);
  });
});



