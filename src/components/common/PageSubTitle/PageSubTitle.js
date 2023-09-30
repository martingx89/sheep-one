import styles from './PageSubTitle.module.scss';

export const PageSubTitle = ({ children }) => {
  return (
    <div>
      <h2 className={styles['sub-title']}>{children}</h2>
    </div>
  );
};

export default PageSubTitle;
