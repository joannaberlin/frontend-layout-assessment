import styles from './TitleText.module.scss';

const TitleText = (props) => {
	return <h3 className={styles.titleSection02}>{props.children}</h3>;
};

export default TitleText;
