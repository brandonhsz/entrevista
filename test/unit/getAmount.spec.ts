import { expect } from 'chai';
import { getAmount } from '../../src/services/index';

import { firstCondition, secondCondition, thirdCondition, fourthCondition } from '../data_test/index';

describe('GetAmount service function ->', () => {
  describe('Trying PASS tests ->', () => {
    it('First Condition Test', () => {
      const { pants, tshirt, hats } = getAmount(firstCondition.items);
      expect(pants).to.be.equal(1, 'expected to pants to be 1');
      expect(tshirt).to.be.equal(1, 'expected to tshirt to be 1');
      expect(hats).to.be.equal(1, 'expected to hat to be 1');
    });

    it('Second Condition Test', () => {
      const { pants, tshirt, hats } = getAmount(secondCondition.items);
      expect(pants).to.be.equal(2, 'expected to pants to be 2');
      expect(tshirt).to.be.equal(1, 'expected to tshirt to be 1');
      expect(hats).to.be.equal(0, 'expected to hat to be 0');
    });

    it('Third Condition Test', () => {
      const { pants, tshirt, hats } = getAmount(thirdCondition.items);
      expect(pants).to.be.equal(1, 'expected to pants to be 1');
      expect(tshirt).to.be.equal(4, 'expected to tshirt to be 4');
      expect(hats).to.be.equal(0, 'expected to hat to be 0');
    });

    it('Fourth Condition Test', () => {
      const { pants, tshirt, hats } = getAmount(fourthCondition.items);
      expect(pants).to.be.equal(3, 'expected to pants to be 3');
      expect(tshirt).to.be.equal(3, 'expected to tshirt to be 3');
      expect(hats).to.be.equal(1, 'expected to hat to be 1');
    });
  });

  describe('Trying FAILL tests', () => {
    it('First Condition Test', () => {
      const { pants, tshirt, hats } = getAmount(firstCondition.items);
      expect(pants).to.not.be.equal(2);
      expect(tshirt).to.not.be.equal(2);
      expect(hats).to.not.be.equal(2);
    });

    it('Second Condition Test', () => {
      const { pants, tshirt, hats } = getAmount(secondCondition.items);
      expect(pants).to.not.be.equal(3);
      expect(tshirt).to.not.be.equal(2);
      expect(hats).to.not.be.equal(1);
    });

    it('Third Condition Test', () => {
      const { pants, tshirt, hats } = getAmount(thirdCondition.items);
      expect(pants).to.not.be.equal(2);
      expect(tshirt).to.not.be.equal(5);
      expect(hats).to.not.be.equal(1);
    });

    it('Fourth Condition Test', () => {
      const { pants, tshirt, hats } = getAmount(fourthCondition.items);
      expect(pants).to.not.be.equal(4);
      expect(tshirt).to.not.be.equal(4);
      expect(hats).to.not.be.equal(2);
    });
  });
});