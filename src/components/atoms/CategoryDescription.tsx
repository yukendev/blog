import styles from './CategoryDescription.module.scss';

type CategoryDescriptionProps = {
  categoryDescription: string;
};

export const CategoryDescription = (
  props: CategoryDescriptionProps,
): JSX.Element => (
  <p className={styles['category-description']}>{props.categoryDescription}</p>
);
