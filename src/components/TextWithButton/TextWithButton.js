import styles from './TextWithButton.module.scss';

const TextWithButton = () => {
	return (
		<div className={styles.textWithButton_wrapper}>
			<hr></hr>
			<div className={styles.titleBtn_wrapper}>
				<h3>Odkryj serie</h3>
				<button>&gt;</button>
			</div>
		</div>
	);
};

export default TextWithButton;
