import type { IWiki } from '@declarations';

export const getURL = (wiki: IWiki) =>
  `/wiki/${wiki.relativePath?.substring(0, wiki.relativePath.length - 4)}`;
