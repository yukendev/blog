
type Props = {
  categoryDescription: string;
};

export const CategoryDescription = (
  props: Props,
): JSX.Element => (
  <p className='p-4 my-3'>
    <p className='text-myTextColor'>{props.categoryDescription}</p>
  </p>
);