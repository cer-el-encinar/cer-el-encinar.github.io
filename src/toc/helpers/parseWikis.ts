import type { IWiki } from '@declarations';
import type { ITOCItem } from '../declarations';
import { getPath } from './getPath';
import { findOrCreateNode } from './findOrCreateNode';
import { getURL } from './getURL';

export const parseWikis = (wikis: IWiki[]): ITOCItem[] => {
  const root: ITOCItem[] = [];
  wikis.map((wiki) => {
    const path = getPath(wiki.relativePath);
    let parent = root;
    for (let chunk of path) {
      parent = findOrCreateNode(parent, chunk);
    }
    parent.push({
      slug: wiki.filename,
      children: [],
      title: wiki.title,
      url: getURL(wiki),
    });
  });
  return root;
};
