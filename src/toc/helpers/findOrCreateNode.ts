import type { ITOCItem } from '../declarations';
import { findInNode } from './findInNode';

export const findOrCreateNode = (node: ITOCItem[], slug: string) => {
  let found = findInNode(node, slug);
  if (!found) {
    found = { slug, children: [] };
    node.push(found);
  }
  return found.children;
};
