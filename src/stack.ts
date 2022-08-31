type Op = '+' | '-' | '*' | '/';

export type Stack = [string] | [string, Op] | [string, Op, string];

export const reduce = (stack: [string, Op, string]): [string, number] => {
  const [s1, op, s2] = stack;
  const [n1, n2] = [s1, s2].map(parseFloat);
  let res: number = NaN;
  switch (op) {
    case '+':
      res = n1 + n2;
      break;
    case '-':
      res = n1 - n2;
      break;
    case '*':
      res = n1 * n2;
      break;
    case '/':
      res = n1 / n2;
      break;
    default:
      throw op;
  }
  if (!isFinite(res) || isNaN(res)) {
    return ['ERROR', NaN];
  } else {
    return [parseFloat(res.toFixed(8)).toString(), res];
  }
}