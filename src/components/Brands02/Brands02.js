import Image from 'react-bootstrap/Image';
import styles from './Brands02.module.scss';
import TitleText from '../TitleText/TitleText';
import TextWithButton from '../TextWithButton/TextWithButton';

const Brands02 = () => {
	return (
		<div className={styles.section02_container}>
			<div className={styles.firstRow_wrapper}>
				<div className={styles.title_wrapper}>
					<div className={styles.text_wrapper}>
						<h2 className={styles.strikeThrough}>o2.</h2>
						<div>
							<TitleText>marki</TitleText>
							<TitleText>keune</TitleText>
						</div>
					</div>
				</div>
				<div className={styles.img_wrapper}>
					<div className={styles.img_titleText}>
						<TitleText>keune</TitleText>
						<TitleText>care</TitleText>
					</div>
					<div className={styles.textWithBtn_wrapper}>
						<TextWithButton />
					</div>
					<Image src={`${process.env.PUBLIC_URL}/images/01_care.jpg`} />
				</div>
			</div>
			<div className={styles.firstRow_wrapper}>
				<div className={styles.imgSmallFirst_wrapper}>
					<div className={styles.imgSmall_titleText_wrapper}>
						<TitleText>keune</TitleText>
						<TitleText>design</TitleText>
						<div className={styles.textWithBtn_imgSmall_wrapper}>
							<TextWithButton />
						</div>
					</div>
					<Image
						src={`${process.env.PUBLIC_URL}/images/02_design.jpg`}
						className={styles.imgDesign}
					/>
				</div>
				<div className={styles.img_wrapper}>
					<div className={styles.img_titleText}>
						<TitleText>keune</TitleText>
						<TitleText>blend</TitleText>
					</div>
					<div className={styles.textWithBtn_wrapper}>
						<TextWithButton />
					</div>
					<Image src={`${process.env.PUBLIC_URL}/images/03_blend_1.jpg`} />
				</div>
			</div>
			<div className={styles.thirdRow_wrapper}>
				<div className={styles.imgLast_wrapper}>
					<div className={styles.imgLast_titleText_wrapper}>
						<TitleText>keune</TitleText>
						<TitleText>koloryzacja</TitleText>
					</div>
					<div className={styles.textWithBtn_thirdRow_wrapper}>
						<TextWithButton />
					</div>
					<Image src={`${process.env.PUBLIC_URL}/images/04_koloryzacja.jpg`} />
				</div>

				<div className={styles.imgSmallLast_wrapper}>
					<div className={styles.imgSmall_titleText_wrapper}>
						<div>
							<TitleText>keune</TitleText>
							<TitleText>so pure</TitleText>
						</div>
						<div className={styles.textWithBtn_imgSmall_wrapper}>
							<TextWithButton />
						</div>
					</div>
					<Image
						src={`${process.env.PUBLIC_URL}/images/05_so_pure.jpg`}
						className={styles.imgSoPure}
					/>
				</div>
			</div>
		</div>
	);
};

export default Brands02;
