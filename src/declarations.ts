import { type TinaMarkdownContent } from 'tinacms/dist/rich-text';

export interface IDonation {
  title?: string | undefined;
  description?: string | undefined;
  url?: string | undefined;
  image?: string | undefined;
}

export interface ISocial {
  title?: string | undefined;
  icon?: string | undefined;
  url?: string | undefined;
}

export interface IPost {
  title?: string | undefined;
  body?: TinaMarkdownContent | TinaMarkdownContent[];
  cover?: string | null | undefined;
  slug?: string | undefined;
  date?: string | undefined;
}
