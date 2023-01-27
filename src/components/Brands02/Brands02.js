import Image from 'react-bootstrap/Image';
import styles from './Brands02.module.scss';

const Brands02 = () => {
	return (
		<div className={styles.section02_container}>
			<div className={styles.firstRow_wrapper}>
				<div className={styles.title_wrapper}>
					<h2>Title</h2>
				</div>
				<div className={styles.img_wrapper}>
					<Image src={`${process.env.PUBLIC_URL}/images/01_care.jpg`} />
				</div>
			</div>
			<div className={styles.firstRow_wrapper}>
				<div className={styles.imgSmallFirst_wrapper}>
					<Image
						src={`${process.env.PUBLIC_URL}/images/02_design.jpg`}
						className={styles.imgDesign}
					/>
				</div>
				<div className={styles.img_wrapper}>
					<Image src={`${process.env.PUBLIC_URL}/images/03_blend_1.jpg`} />
				</div>
			</div>
			<div className={styles.thirdRow_wrapper}>
				<div className={styles.imgLast_wrapper}>
					<Image src={`${process.env.PUBLIC_URL}/images/04_koloryzacja.jpg`} />
				</div>
				<div className={styles.imgSmallLast_wrapper}>
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
