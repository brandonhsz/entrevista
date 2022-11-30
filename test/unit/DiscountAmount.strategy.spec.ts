import { expect } from 'chai';
import { getAmount } from '../../src/services';
import { ContextStrategy, DiscountAmountStrategy, DiscountBUlkStrategy, WithOutDiscount } from '../../src/strategies';
import { firstCondition, fourthCondition, secondCondition, thirdCondition } from '../data_test';

describe('DiscountAmount strategy function ->', () => {
  describe('Trying PASS tests ->', () => {
    it('First Condition Test', () => {
      const { pants, tshirt, hats } = getAmount(firstCondition.items);
      const amountDiscount = new ContextStrategy(new DiscountAmountStrategy()).doSomeBusinessLogic({ amount: pants, discount: 0, price: 5 });
      const bulkDiscount = new ContextStrategy(new DiscountBUlkStrategy()).doSomeBusinessLogic({ amount: tshirt, discount: 1, price: 20 });
      const withOutDiscount = new ContextStrategy(new WithOutDiscount()).doSomeBusinessLogic({ amount: hats, discount: 0, price: 7.5 });
      const finalPrice = amountDiscount + bulkDiscount + withOutDiscount;
      expect(finalPrice).to.equal(32.50);
    });
    it('Second Condition Test', () => {
      const { pants, tshirt, hats } = getAmount(secondCondition.items);
      const amountDiscount = new ContextStrategy(new DiscountAmountStrategy()).doSomeBusinessLogic({ amount: pants, discount: 0, price: 5 });
      const bulkDiscount = new ContextStrategy(new DiscountBUlkStrategy()).doSomeBusinessLogic({ amount: tshirt, discount: 1, price: 20 });
      const withOutDiscount = new ContextStrategy(new WithOutDiscount()).doSomeBusinessLogic({ amount: hats, discount: 0, price: 7.5 });
      const finalPrice = amountDiscount + bulkDiscount + withOutDiscount;
      expect(finalPrice).to.equal(25);
    });
    it('Third Condition Test', () => {
      const { pants, tshirt, hats } = getAmount(thirdCondition.items);
      const amountDiscount = new ContextStrategy(new DiscountAmountStrategy()).doSomeBusinessLogic({ amount: pants, discount: 0, price: 5 });
      const bulkDiscount = new ContextStrategy(new DiscountBUlkStrategy()).doSomeBusinessLogic({ amount: tshirt, discount: 1, price: 20 });
      const withOutDiscount = new ContextStrategy(new WithOutDiscount()).doSomeBusinessLogic({ amount: hats, discount: 0, price: 7.5 });
      const finalPrice = amountDiscount + bulkDiscount + withOutDiscount;
      expect(finalPrice).to.equal(81);
    });
    it('Fourth Condition Test', () => {
      const { pants, tshirt, hats } = getAmount(fourthCondition.items);
      const amountDiscount = new ContextStrategy(new DiscountAmountStrategy()).doSomeBusinessLogic({ amount: pants, discount: 0, price: 5 });
      const bulkDiscount = new ContextStrategy(new DiscountBUlkStrategy()).doSomeBusinessLogic({ amount: tshirt, discount: 1, price: 20 });
      const withOutDiscount = new ContextStrategy(new WithOutDiscount()).doSomeBusinessLogic({ amount: hats, discount: 0, price: 7.5 });
      const finalPrice = amountDiscount + bulkDiscount + withOutDiscount;
      expect(finalPrice).to.equal(74.50);
    });
  });

  describe('Trying FAILL tests ->', () => {
    it('First Condition Test', () => {
      const { pants, tshirt, hats } = getAmount(firstCondition.items);
      const amountDiscount = new ContextStrategy(new DiscountAmountStrategy()).doSomeBusinessLogic({ amount: pants, discount: 0, price: 5 });
      const bulkDiscount = new ContextStrategy(new DiscountBUlkStrategy()).doSomeBusinessLogic({ amount: tshirt, discount: 1, price: 20 });
      const withOutDiscount = new ContextStrategy(new WithOutDiscount()).doSomeBusinessLogic({ amount: hats, discount: 0, price: 7.5 });
      const finalPrice = amountDiscount + bulkDiscount + withOutDiscount;
      expect(finalPrice).to.be.not.equal(33.50);
    });
    it('Second Condition Test', () => {
      const { pants, tshirt, hats } = getAmount(secondCondition.items);
      const amountDiscount = new ContextStrategy(new DiscountAmountStrategy()).doSomeBusinessLogic({ amount: pants, discount: 0, price: 5 });
      const bulkDiscount = new ContextStrategy(new DiscountBUlkStrategy()).doSomeBusinessLogic({ amount: tshirt, discount: 1, price: 20 });
      const withOutDiscount = new ContextStrategy(new WithOutDiscount()).doSomeBusinessLogic({ amount: hats, discount: 0, price: 7.5 });
      const finalPrice = amountDiscount + bulkDiscount + withOutDiscount;
      expect(finalPrice).to.be.not.equal(26);
    });
    it('Third Condition Test', () => {
      const { pants, tshirt, hats } = getAmount(thirdCondition.items);
      const amountDiscount = new ContextStrategy(new DiscountAmountStrategy()).doSomeBusinessLogic({ amount: pants, discount: 0, price: 5 });
      const bulkDiscount = new ContextStrategy(new DiscountBUlkStrategy()).doSomeBusinessLogic({ amount: tshirt, discount: 1, price: 20 });
      const withOutDiscount = new ContextStrategy(new WithOutDiscount()).doSomeBusinessLogic({ amount: hats, discount: 0, price: 7.5 });
      const finalPrice = amountDiscount + bulkDiscount + withOutDiscount;
      expect(finalPrice).to.be.not.equal(82);
    });
    it('Fourth Condition Test', () => {
      const { pants, tshirt, hats } = getAmount(fourthCondition.items);
      const amountDiscount = new ContextStrategy(new DiscountAmountStrategy()).doSomeBusinessLogic({ amount: pants, discount: 0, price: 5 });
      const bulkDiscount = new ContextStrategy(new DiscountBUlkStrategy()).doSomeBusinessLogic({ amount: tshirt, discount: 1, price: 20 });
      const withOutDiscount = new ContextStrategy(new WithOutDiscount()).doSomeBusinessLogic({ amount: hats, discount: 0, price: 7.5 });
      const finalPrice = amountDiscount + bulkDiscount + withOutDiscount;
      expect(finalPrice).to.be.not.equal(75.50);
    });
  });
});