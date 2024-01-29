import { IGatsbyImageData } from "gatsby-plugin-image";

export type News = {
  frontmatter: {
    cover: IGatsbyImageData;
    date: string;
    title: string;
    slug: string;
  };
  excerpt: string;
};
