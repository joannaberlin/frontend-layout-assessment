import styles from './CaptionSlideBlack.module.scss';

const CaptionSlideBlack = () => {
	return (
		<div className={styles.captionContainer}>
			<h2 className={styles.strikeThrough}>o1.</h2>
			<p>Bez kompromisu.</p>
			<p>Idealnie takie jak lubisz.</p>
			<h4>
				Keune <span>design</span>
			</h4>
			<hr></hr>
		</div>
	);
};

export default CaptionSlideBlack;
