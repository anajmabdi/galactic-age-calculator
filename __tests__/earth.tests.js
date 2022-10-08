import Earth from '../src/planets/earth.js';

describe('Earth', () => {
  test('should build an Earth object that contains a set of properties', () => {
    let earth = new Earth(22);
    expect(earth.age).toEqual(22);
    expect(earth.days).toEqual(365);
    expect(earth.lifespan).toEqual(73);
  });
});