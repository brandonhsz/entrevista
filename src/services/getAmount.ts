import { IProduct } from '../interfaces';

interface IData {
  hats: number,
  pants: number,
  tshirt: number,
}

export function getAmount(items: IProduct[]): IData {
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
    else if (item.code === 'TSHIRT') {
      itemList = {
        ...itemList,
        tshirt: itemList.tshirt + 1
      };
    }
  });
  return itemList;
}