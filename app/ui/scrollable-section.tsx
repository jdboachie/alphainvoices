import styles from './ScrollableSection.module.css';

const ScrollableSection = ({ children } : { children:React.ReactNode}) => {
  return <div className={`w-full h-full flex ${styles.scrollableSection}`}>{children}</div>;
};

export default ScrollableSection;
