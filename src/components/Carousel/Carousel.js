import styles from './Carousel.module.scss';
import Image from 'react-bootstrap/Image';
import NavBar from '../NavBar/NavBar';

const Carousel = () => {
	return (
		<div className={styles.carouselContainer}>
			<NavBar />
			<Image
				alt='woman blond hair'
				src={`${process.env.PUBLIC_URL}/images/slide1-big.jpg`}
				className={styles.carouselContainer_img}
				fluid
			/>
		</div>
	);
};

export default Carousel;
