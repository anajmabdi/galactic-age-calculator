import Calculator from '../src/Calculator.js';

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
    expect(Math.floor((calculator.earthAge*365)/88)).toEqual(91);
    expect(calculator.mercuryAge).toEqual(91);
    });
    
  test('should calculate the remainder of their life on Mercury', () => {
    let calculator = new Calculator(22);
    calculator.convertToMercury();
    calculator.yearsLeft();

    expect(calculator.mercuryAge).toEqual(-18);
    console.log(calculator.mercuryAge);
    });
});