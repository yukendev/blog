import { MicroCMSListContent } from "microcms-js-sdk";

export interface IBlog extends MicroCMSListContent {
  title: string,
  category?: ICategory,
  tags?: ITag[],
  body: string,
  description: string,
}

export interface ICategory extends MicroCMSListContent {
  name: string
}

export interface ITag extends MicroCMSListContent {
  name: string
}
