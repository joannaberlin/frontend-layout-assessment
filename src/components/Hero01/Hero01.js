import styles from './Hero01.module.scss';
// import Image from 'react-bootstrap/Image';
import NavBarWhite from '../NavBar/NavBarWhite';
import NavBarBlack from '../NavBar/NavBarBlack';
import Carousel from 'react-bootstrap/Carousel';

const Hero01 = () => {
	// const [index, setIndex] = useState(0);

	// const handleSelect = (selectedIndex, e) => {
	// 	setIndex(selectedIndex);
	// };

	return (
		// <Carousel activeIndex={index} onSelect={handleSelect}>
		<div className={styles.carouselContainer}>
			<Carousel controls={false}>
				<Carousel.Item>
					<NavBarBlack />
					<img
						className={styles.carouselContainer_img}
						src={`${process.env.PUBLIC_URL}/images/slide1-big.jpg`}
						alt='First slide'
					/>
				</Carousel.Item>
				<Carousel.Item>
					<NavBarWhite />
					<img
						className={styles.carouselContainer_img}
						src={`${process.env.PUBLIC_URL}/images/slide2-big.jpg`}
						alt='Second slide'
					/>
				</Carousel.Item>
			</Carousel>
		</div>
	);
};
// return (
// 	<div className={styles.carouselContainer}>
// 		<NavBar />
// 		<Image
// 			alt='woman blond hair'
// 			src={`${process.env.PUBLIC_URL}/images/slide1-big.jpg`}
// 			className={styles.carouselContainer_img}
// 			fluid
// 		/>
// 	</div>
// );

export default Hero01;
