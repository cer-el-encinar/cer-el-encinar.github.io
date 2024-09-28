export interface ITOCItem {
  slug: string;
  children: ITOCItem[];
  title?: string;
  url?: string;
}
