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
      <div>
        <a>
          <div className='cursor-pointer w-20 h-20 mx-2 md:mx-5 bg-myBlogListBgColor hover:bg-myBlogContentBgColorHover rounded-lg drop-shadow-md deco-underline-element'>
            <span className='flex justify-center'>
              {image}
            </span>
            <p className='text-center font-bold text-myTextColor deco-underline-text'>{title}</p>
          </div>
        </a>
      </div>
    </Link>
  )
}
