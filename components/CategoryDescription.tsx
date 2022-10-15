import { Category } from '../data/categories/type';

type CategoryDescriptionProps = {
  category: Category;
};

export const CategoryDescription = (
  props: CategoryDescriptionProps,
): JSX.Element => {
  const { category } = props;

  const RenderDescription = () => {
    const desc = (): string => {
      if (category === 'tech') {
        return '技術系で学んだことを備忘録的に書きます。';
      } else if (category === 'book') {
        return '読んだ本の感想などを書きます。まだ方針は決まってないですが、技術書のことがメインになりそうです。';
      } else if (category === 'note') {
        return '『note』とかいうかっこいい括りにしてますが、『その他』です。技術系のことでも、本系のことでもないものを書きます。';
      }
    };
    return <p className='text-myTextColor'>{desc()}</p>;
  };

  return (
    <div className='p-4 my-3'>
      <RenderDescription />
    </div>
  );
};
