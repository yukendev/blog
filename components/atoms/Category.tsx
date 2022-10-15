import Link from 'next/link';

type CategoryProps = {
  image: JSX.Element;
  title: string;
  href: string;
};

export const Category = (props: CategoryProps): JSX.Element => {
  const { image, title, href } = props;
  return (
    <Link href={href}>
      <div className='cursor-pointer w-20 h-20 mx-5 bg-myBgColorDark rounded-lg shadow-lg deco-underline-element'>
        <div className='flex justify-center'>
          {image}
        </div>
        <div className='text-center font-bold text-myTextColor deco-underline-text'>{title}</div>
      </div>
    </Link>
  )
}
