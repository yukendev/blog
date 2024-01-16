'use client';
import { Blog } from '../../types';
import { TagCard } from '@components/atoms/TagCard';
import { Tag } from '@constants/tags';

import Twitter from '@images/Twitter.svg';
import Clip from '@images/Clip.svg';

import { useState } from 'react';

import style from './BlogFooter.module.scss';

type CopiedTooltipPropsType = {
  isHidden: boolean;
};

const CopiedTooltip = (props: CopiedTooltipPropsType) => {
  const { isHidden } = props;
  return (
    <div
      className={style['blog-footer-navigation-copy-tooltip']}
      hidden={isHidden}
    >
      copied!
    </div>
  );
};

type BlogFooterProps = {
  tags: Tag[];
  blog: Blog;
};

export const BlogFooter = (props: BlogFooterProps): JSX.Element => {
  const { tags, blog } = props;
  const [isHiddenCopied, setIsHiddenCopied] = useState(true);

  const copyButtonHandler = () => {
    try {
      navigator.clipboard.writeText(location.href);
      setIsHiddenCopied(false);
      setTimeout(() => {
        setIsHiddenCopied(true);
      }, 2000);
    } catch {
      console.log('An Error was occured with copy');
    }
  };

  const url = `https://twitter.com/share?url=https://www.yukendev.com/blogs/${blog.slug}&text=${blog.title}`;

  return (
    <>
      {/* タグ */}
      <ul className={style['blog-footer-tag']}>
        {tags.map((tag, index) => {
          return <TagCard key={index} tag={tag} />;
        })}
      </ul>

      <nav className={style['blog-footer-navigation']}>
        {/* twitter */}
        <div className={style['blog-footer-navigation-twitter']}>
          <a href={url}>
            <Twitter widht={40} height={40} />
          </a>
        </div>

        {/* コピー */}
        <div className={style['blog-footer-navigation-copy']}>
          <CopiedTooltip isHidden={isHiddenCopied} />
          <button onClick={copyButtonHandler}>
            <Clip widht={40} height={40} />
          </button>
        </div>
      </nav>
    </>
  );
};
