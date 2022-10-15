import Link from 'next/link';
import TitleImg from '../../images/Title.svg';

export const HeaderTitle = (): JSX.Element => {
  return (
    <Link href='/'>
      <div className='cursor-pointer'>
        <TitleImg width={200} />
      </div>
    </Link>
  );
};
