const operator = {
  '+': (a, b) => (a + b),
  '-': (a, b) => (a - b),
  '/': (a, b) => (a / b),
  '*': (a, b) => (a * b),
};

const operate = input => {
  const inputs = input.split(' ');

  const left = parseInt(inputs[0], 10);
  const operation = inputs[1];
  const right = parseInt(inputs[2], 10);

  return operator[operation](left, right);
};

test('operate', () => {
  expect(operate('1 + 3')).toBe(4);
  expect(operate('5 - 3')).toBe(2);
});
