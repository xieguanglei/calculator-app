import expect from 'expect';
import { reduce } from './stack';

describe('stack reduce', () => {

  describe('for integer', () => {
    it('1 + 2 = 3', () => expect(reduce(['1', '+', '2'])[0]).toBe('3'));
    it('3 - 1 = 2', () => expect(reduce(['3', '-', '1'])[0]).toBe('2'));
    it('-3 - 1 = -4', () => expect(reduce(['-3', '-', '1'])[0]).toBe('-4'));
    it('2 * 4 = 8', () => expect(reduce(['2', '*', '4'])[0]).toBe('8'));
    it('-2 * -4 = 8', () => expect(reduce(['-2', '*', '-4'])[0]).toBe('8'));
    it('6 / 2 = 3', () => expect(reduce(['6', '/', '2'])[0]).toBe('3'));
    it('0 / 5 = 0', () => expect(reduce(['0', '/', '5'])[0]).toBe('0'));
  });

  describe('for float', () => {
    it('1.2 + 2.2 = 3.4', () => expect(reduce(['1.2', '+', '2.2'])[0]).toBe('3.4'));
    it('1.2 - 2.2 = -1', () => expect(reduce(['1.2', '-', '2.2'])[0]).toBe('-1'));
    it('0.5 * 0.8 = 0.4', () => expect(reduce(['0.5', '*', '0.8'])[0]).toBe('0.4'));
    it('0.5 * 3 = 1.5', () => expect(reduce(['0.5', '*', '3'])[0]).toBe('1.5'));
    it('0.5 * 3. = 1.5', () => expect(reduce(['0.5', '*', '3.'])[0]).toBe('1.5'));
    it('0.4 * 1.3 = 0.52', () => expect(reduce(['0.4', '*', '1.3'])[0]).toBe('0.52'));
    it('4. / 3 = 1.33333...', () => expect(reduce(['4.', '/', '3'])[0]).toBe('1.33333333'));
  });

  describe('for error', () => {
    it('3 / 0 = error', () => expect(reduce(['3', '/', '0'])[0]).toBe('ERROR'));
    it('ok + 1 = error', () => expect(reduce(['ok', '+', '1'])[0]).toBe('ERROR'));
  });

});