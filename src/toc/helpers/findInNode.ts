import type { ITOCItem } from '../declarations';

export const findInNode = (node: ITOCItem[], slug: string) => {
  const found = node.find((item) => item.slug === slug);
  return found ? found : false;
};
