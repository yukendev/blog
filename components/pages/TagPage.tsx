import { BlogListWrapper } from '../organisms/BlogListWrapper';
import { Tag } from '@constants/tags';
import style from './TagPage.module.scss';
import { getPostsByTags } from 'libs/posts';

type TagPageProps = {
  tag: Tag;
};

export const TagPage = async ({ tag }: TagPageProps) => {
  const blogs = await getPostsByTags(tag);
  return (
    <div className={style['tag-page-wrapper']}>
      {/* タグタイトル */}
      <h1>{tag}</h1>

      {/* divider */}
      <hr></hr>

      {/* ブログリスト */}
      <BlogListWrapper blogs={blogs} />
    </div>
  );
};
