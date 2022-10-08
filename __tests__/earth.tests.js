import { Earth } from './../src/earth.js';

describe('Earth', () => {
  test('should build an Earth object that contains a set of properties', () => {
    let earth = new Earth(22);
    expect(earth.age).toEqual(22);
    expect(earth.lifespan).toEqual(72.98);
  });

});