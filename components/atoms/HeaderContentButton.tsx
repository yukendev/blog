import Link from 'next/link';

type Props = {
  title: string;
  href: string;
};

// サイト内で画面遷移するボタン
export const HeaderContentButton = (props: Props): JSX.Element => (
  <Link href={props.href}>
    <a className='px-2 py-1 mx-3 text-myTextColor cursor-pointer deco-underline-text font-semibold'>
      {props.title}
    </a>
  </Link>
);
