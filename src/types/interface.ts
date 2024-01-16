import { Tag } from '../constants/tags';
import { Category } from '../constants/categories';

export type Blog = {
  title: string;
  date: string;
  slug: string;
  category?: Category;
  tags?: Tag[];
  body: string;
  description: string;
};
