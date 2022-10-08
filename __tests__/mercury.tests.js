import Mercury from './../src/planets/mercury.js';

describe('Mercury', () => {
  test('should build a Mercury object that contains a set of properties', () => {
    let mercury = new Mercury(22);
    expect(mercury.age).toEqual(91);
    expect(mercury.timeLeft).toEqual(-18)
  })
})