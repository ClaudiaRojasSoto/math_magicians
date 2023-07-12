import calculate from '../logic/calculate';

test('Evaluate operations', () => {
  let obj = {
    total: '100',
    next: '5',
    operation: '+',
  };
  let button = 'AC';
  expect(calculate(obj, button)).toEqual({
    total: null,
    next: null,
    operation: null,
  });

  button = '=';
  expect(calculate(obj, button)).toEqual({
    total: '105',
    next: null,
    operation: null,
  });

  button = '+/-';
  expect(calculate(obj, button)).toEqual({
    total: '100',
    next: '-5',
    operation: '+',
  });

  obj = {
    total: '100',
    next: '5',
    operation: '÷',
  };

  button = '=';
  expect(calculate(obj, button)).toEqual({
    total: '20',
    next: null,
    operation: null,
  });
});
