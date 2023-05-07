import { Blog } from '../../types';
import { TagCard } from '@components/atoms/TagCard';
import { Tag } from '@constants/tags';

import Twitter from '../../images/Twitter.svg';
import Clip from '../../images/Clip.svg';

import { useState } from 'react';

type CopiedTooltipPropsType = {
  isHidden: boolean;
};

const CopiedTooltip = (props: CopiedTooltipPropsType) => {
  const { isHidden } = props;
  return (
    <div
      className='absolute -top-8 p-1 rounded text-slate-400'
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
      <ul className='flex flex-wrap my-5'>
        {tags.map((tag, index) => {
          return <TagCard key={index} tag={tag} />;
        })}
      </ul>

      {/* シェアボタン */}
      <div className='flex items-center my-10'>
        <p className='ml-2'>シェアをしていただけると僕が大変喜びます🙇‍♂️</p>
      </div>

      <nav className='flex justify-center'>
        {/* twitter */}
        <div className='mr-3'>
          <a href={url}>
            <Twitter widht={40} height={40} />
          </a>
        </div>

        {/* コピー */}
        <div className='relative flex justify-center ml-3'>
          <CopiedTooltip isHidden={isHiddenCopied} />
          <button onClick={copyButtonHandler}>
            <Clip widht={40} height={40} />
          </button>
        </div>
      </nav>
    </>
  );
};
