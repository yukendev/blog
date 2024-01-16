import styles from './Footer.module.scss';

export const Footer = (): JSX.Element => {
  return (
    <footer className={styles['footer']}>
      {/* コピーライト */}
      <p>© 2022 yukendev.</p>
    </footer>
  );
};
