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
    expect(calculator.venusAge).toEqual(36);
  });

});



