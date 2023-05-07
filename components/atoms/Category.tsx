import Link from 'next/link';

type Props = {
  image: JSX.Element;
  title: string;
  href: string;
};

export const Category = (props: Props): JSX.Element => (
  <Link href={props.href}>
      <a>
        <div className='cursor-pointer w-20 h-20 mx-2 md:mx-5 bg-myBlogListBgColor hover:bg-myBlogContentBgColorHover rounded-lg drop-shadow-md deco-underline-element'>
          <span className='flex justify-center'>
            {props.image}
          </span>
          <p className='text-center font-bold text-myTextColor deco-underline-text'>{props.title}</p>
        </div>
      </a>
  </Link>
);
