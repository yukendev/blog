import TechImg from '../../images/CategoryTech.svg';
import BookImg from '../../images/CategoryBook.svg';
import NoteImg from '../../images/CategoryNote.svg';
import { Category } from '@components/atoms/Category';

const imgWidth = 70;
const imgHeight = 52.5;

export const CategoryList = (): JSX.Element => {
  return (
    <>
      <h1 className='text-xl text-myTextColor font-bold my-10'>カテゴリー</h1>
      <nav className='flex flex-wrap'>
        {/* Technology */}
        <Category
          image={<TechImg width={imgWidth} height={imgHeight} />}
          title='Tech'
          href='/categories/tech'
        />

        {/* Book */}
        <Category
          image={<BookImg width={imgWidth} height={imgHeight} />}
          title='Book'
          href='/categories/book'
        />

        {/* Note */}
        <Category
          image={<NoteImg width={imgWidth} height={imgHeight} />}
          title='Note'
          href='/categories/note'
        />
      </nav>
    </>
  );
};
