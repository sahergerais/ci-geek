const { divide, add } = require("../src/math");

test('divide two numbers', () => {
    expect(divide(10, 2)).toBe(5);
});

test('Add', () => {
    expect(
        add(1, 2)
    ).toBe(3);
});
