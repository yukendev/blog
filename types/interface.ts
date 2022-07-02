import { Tag } from "../data/tags/type";
import { Category } from "../data/categories/type";

export type Blog = {
  title: string;
  date: string;
  slug: string;
  category?: Category;
  tags?: Tag[];
  body: string;
  description: string;
};
