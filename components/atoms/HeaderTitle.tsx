import Link from 'next/link';
import { metaDataForBlog } from '../../data/meta';
import TitleImg from '../../images/Title.svg';

export const HeaderTitle = (): JSX.Element => {
  return (
    <Link href='/'>
      <div className='cursor-pointer'>
        <TitleImg />
      </div>
    </Link>
  );
};
