const { factorial } = require('../index');

test('Method works fine', () => {
    expect(factorial(0)).toEqual(1);
    expect(factorial(1)).toEqual(1);
    expect(factorial(2)).toEqual(2);
    expect(factorial(3)).toEqual(6);
    expect(() => { factorial(0.1); }).toThrow(Error)
    expect(() => { factorial(-6); }).toThrow(Error)
});
