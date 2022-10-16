import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { converMarkdownToHtml } from '../util/convert-markdown';
import { Category } from '../data/categories/type';
import { categories } from '../data/categories/categories';
import { Tag } from '../data/tags/type';
import { Blog } from '../types';

const postsDirectory = path.join(process.cwd(), 'posts');
const regExpForDir = new RegExp('[0-9]{4}-[0-9]{2}-[0-9]{2}');
const regExpForMd = new RegExp('[0-9]{4}-[0-9]{2}-[0-9]{2}.md');

// 取得したデータからBlogを作成
const generateBlogFromData = async (
  data: any,
  content: string,
): Promise<Blog> => {
  const { title, date, slug, category, tags, description } = data;

  const isTagValidated = (targets: string[]): boolean => {
    return targets.every((target) => tags.includes(target));
  };

  if (
    typeof title !== 'string' ||
    typeof date !== 'string' ||
    typeof slug !== 'string' ||
    !categories.includes(category) ||
    !isTagValidated(tags) ||
    typeof description !== 'string'
  ) {
    throw Error('some data are not applicable to Blog');
  }

  try {
    const convertedBody = await converMarkdownToHtml(content, date);

    const blog: Blog = {
      title,
      date,
      slug,
      category,
      tags,
      body: convertedBody,
      description,
    };

    return blog;
  } catch {
    throw Error('some error are occured while converting markdown');
  }
};

// 全ての投稿を日付順で取得する（まだ日付順ではない）
export const getSortedPostsData = async (): Promise<Blog[]> => {
  const dirNames = fs.readdirSync(postsDirectory);
  const filteredDirName = dirNames.filter((fileName) =>
    regExpForDir.test(fileName),
  );

  const allPostsData = await Promise.all(
    filteredDirName.map(async (dirName) => {
      // Read markdown file as string
      const fullPathForDir = path.join(postsDirectory, dirName);
      const fileNames = fs.readdirSync(fullPathForDir);
      const mdFile = fileNames.find((file) => regExpForMd.test(file));
      const fullPathForMd = path.join(fullPathForDir, mdFile);
      const fileContents = fs.readFileSync(fullPathForMd, 'utf8');

      // Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents);
      const data = matterResult.data;
      const content = matterResult.content;

      const blog = await generateBlogFromData(data, content);

      return blog;
    }),
  );

  const sortedPost = allPostsData.sort((a, b) => {
    const aDate = new Date(a.date);
    const bDate = new Date(b.date);
    if (aDate > bDate) {
      return -1;
    } else {
      return 1;
    }
  });
  return sortedPost;
};

// slugが一致する投稿を取得する
export const getPostsBySlug = async (slug: string) => {
  const allPosts = await getSortedPostsData();
  const targetPosts = allPosts.find((post) => {
    return post.slug == slug;
  });
  return targetPosts;
};

// categoryが一致する投稿を取得する
export const getPostsByCategory = async (category: Category) => {
  const allPosts = await getSortedPostsData();
  const targetPosts = allPosts.filter((posts) => {
    return posts.category == category;
  });
  return targetPosts;
};

// tagが一致する投稿を取得する
export const getPostsByTags = async (tag: Tag) => {
  const allPosts = await getSortedPostsData();
  const targetPosts = allPosts.filter((post) => {
    return post.tags.includes(tag);
  });
  return targetPosts;
};
