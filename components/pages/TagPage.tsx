import { Blog } from '../../types';
import { BlogListWrapper } from '../organisms/BlogListWrapper';
import { Tag } from '@constants/tags';
import style from './TagPage.module.scss';

type TagPageProps = {
  tag: Tag;
  blogs: Blog[];
};

export const TagPage = (props: TagPageProps): JSX.Element => {
  const { tag, blogs } = props;
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
