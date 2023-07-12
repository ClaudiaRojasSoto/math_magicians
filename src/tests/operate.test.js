import operate from '../logic/operate';

test('addition works correctly', () => {
  expect(operate('1', '2', '+')).toBe('3');
});

test('subtraction works correctly', () => {
  expect(operate('2', '1', '-')).toBe('1');
});

test('multiplication works correctly', () => {
  expect(operate('2', '3', 'x')).toBe('6');
});

test('division works correctly', () => {
  expect(operate('6', '2', '÷')).toBe('3');
});

test('division by zero error', () => {
  expect(operate('1', '0', '÷')).toBe("Can't divide by 0.");
});

test('modulo works correctly', () => {
  expect(operate('10', '3', '%')).toBe('1');
});

test('modulo by zero error', () => {
  expect(operate('10', '0', '%')).toBe(
    "Can't find modulo as can't divide by 0.",
  );
});

test('unknown operation error', () => {
  expect(() => operate('1', '2', '**')).toThrowError(
    new Error("Unknown operation '**'"),
  );
});
