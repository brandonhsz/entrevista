import { IProduct } from '../interfaces';

export function getAmount(items: IProduct[]): number {
  let itemList = {
    hats: 0,
    pants: 0,
    tshirt: 0
  };

  items.map((item: IProduct) => {
    if (item.code === 'HAT') {
      itemList = {
        ...itemList,
        hats: itemList.hats + 1
      };
    }
    else if (item.code === 'PANTS') {
      itemList = {
        ...itemList,
        pants: itemList.pants + 1
      };
    }
  });
  console.log(itemList);
  return 0;
}