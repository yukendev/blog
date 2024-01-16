import styles from './HeaderContentButtonForExternal.module.scss';

type HeaderContentButtonForExternalProps = {
  title: string;
  href: string;
};

// 外部サイトを開くボタン
export const HeaderContentButtonForExternal = (
  props: HeaderContentButtonForExternalProps,
): JSX.Element => (
  <a
    className={styles['header-content-button-for-external']}
    href={props.href}
    target='_blank'
    rel='noopener noreferrer'
  >
    {props.title}
  </a>
);
