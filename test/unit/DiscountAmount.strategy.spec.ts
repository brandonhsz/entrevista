import { expect } from 'chai';
import { getAmount } from '../../src/services';
import { firstCondition, fourthCondition, secondCondition, thirdCondition } from '../data_test';
import { discountAmount } from '../helpers_test/discountAmount.helper';

describe('DiscountAmount strategy function ->', () => {
  describe('Trying PASS tests ->', () => {
    it('First Condition Test', () => {
      const { pants, tshirt, hats } = getAmount(firstCondition.items);
      const finalPrice = discountAmount({ amount: pants, discount: 0, price: 5 }, { amount: tshirt, discount: 1, price: 20 }, { amount: hats, discount: 0, price: 7.5 });
      expect(finalPrice).to.equal(32.50);
    });
    it('Second Condition Test', () => {
      const { pants, tshirt, hats } = getAmount(secondCondition.items);
      const finalPrice = discountAmount({ amount: pants, discount: 0, price: 5 }, { amount: tshirt, discount: 1, price: 20 }, { amount: hats, discount: 0, price: 7.5 });
      expect(finalPrice).to.equal(25);
    });
    it('Third Condition Test', () => {
      const { pants, tshirt, hats } = getAmount(thirdCondition.items);
      const finalPrice = discountAmount({ amount: pants, discount: 0, price: 5 }, { amount: tshirt, discount: 1, price: 20 }, { amount: hats, discount: 0, price: 7.5 });
      expect(finalPrice).to.equal(81);
    });
    it('Fourth Condition Test', () => {
      const { pants, tshirt, hats } = getAmount(fourthCondition.items);
      const finalPrice = discountAmount({ amount: pants, discount: 0, price: 5 }, { amount: tshirt, discount: 1, price: 20 }, { amount: hats, discount: 0, price: 7.5 });
      expect(finalPrice).to.equal(74.50);
    });
  });

  describe('Trying FAILL tests ->', () => {
    it('First Condition Test', () => {
      const { pants, tshirt, hats } = getAmount(firstCondition.items);
      const finalPrice = discountAmount({ amount: pants, discount: 0, price: 5 }, { amount: tshirt, discount: 1, price: 20 }, { amount: hats, discount: 0, price: 7.5 });
      expect(finalPrice).to.be.not.equal(33.50);
    });
    it('Second Condition Test', () => {
      const { pants, tshirt, hats } = getAmount(secondCondition.items);
      const finalPrice = discountAmount({ amount: pants, discount: 0, price: 5 }, { amount: tshirt, discount: 1, price: 20 }, { amount: hats, discount: 0, price: 7.5 });
      expect(finalPrice).to.be.not.equal(26);
    });
    it('Third Condition Test', () => {
      const { pants, tshirt, hats } = getAmount(thirdCondition.items);
      const finalPrice = discountAmount({ amount: pants, discount: 0, price: 5 }, { amount: tshirt, discount: 1, price: 20 }, { amount: hats, discount: 0, price: 7.5 });
      expect(finalPrice).to.be.not.equal(82);
    });
    it('Fourth Condition Test', () => {
      const { pants, tshirt, hats } = getAmount(fourthCondition.items);
      const finalPrice = discountAmount({ amount: pants, discount: 0, price: 5 }, { amount: tshirt, discount: 1, price: 20 }, { amount: hats, discount: 0, price: 7.5 });
      expect(finalPrice).to.be.not.equal(75.50);
    });
  });
});