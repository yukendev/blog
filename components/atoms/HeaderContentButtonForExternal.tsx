type Props = {
  title: string;
  href: string;
};

// 外部サイトを開くボタン
export const HeaderContentButtonForExternal = (props: Props): JSX.Element => (
  <div className='px-2 py-1 mx-3 text-myTextColor cursor-pointer deco-underline-text font-semibold'>
    <a href={props.href} target='_blank' rel='noopener noreferrer'>
      {props.title}
    </a>
  </div>
);
