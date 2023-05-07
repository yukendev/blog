import type { Category } from '../../constants/categories';
import { categoryDescription } from '../../constants/categoryDescription';

type Props = {
  category: Category;
};

export const CategoryDescription = (
  props: Props,
): JSX.Element => {
  const { category } = props;

  const RenderDescription = () => {
    const desc = (): string => {
      if (category === 'tech') {
        return categoryDescription.tech;
      } else if (category === 'book') {
        return categoryDescription.book;
      } else if (category === 'note') {
        return categoryDescription.note;
      }
    };
    return <p className='text-myTextColor'>{desc()}</p>;
  };

  return (
    <p className='p-4 my-3'>
      <RenderDescription />
    </p>
  );
};
