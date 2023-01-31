import styles from './Hero01.module.scss';
import NavBarWhite from '../NavBar/NavBarWhite';
import NavBarBlack from '../NavBar/NavBarBlack';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import CaptionSlideBlack from '../CaptionSlide/CaptionSlideBlack';
import CaptionSlideWhite from '../CaptionSlide/CaptionSlideWhite';
import { useState } from 'react';

const Hero01 = () => {
	const [index, setIndex] = useState(0);

	const handleClick = (e, param) => {
		if (index === 0) {
			setIndex(param);
		} else {
			setIndex(0);
		}
	};

	return (
		<div className={styles.carouselContainer}>
			<Carousel
				interval={4000}
				controls={false}
				indicators={false}
				activeIndex={index}
				onSelect={handleClick}
			>
				<Carousel.Item>
					<NavBarBlack />
					<CaptionSlideBlack />
					<div className={styles.controlsContainer}>
						<div className={styles.btnSimple_container}>
							<button
								onClick={(e) => handleClick(e, 1)}
								className={styles.btnSimple}
							>
								&gt;
							</button>
							<button
								onClick={(e) => handleClick(e, 1)}
								className={styles.btnSimple}
							>
								&lt;
							</button>
						</div>
						<div className={styles.btnLogo_container}>
							<button
								onClick={(e) => handleClick(e, 1)}
								className={styles.btnLogo}
							>
								<Image
									src={`${process.env.PUBLIC_URL}/images/znak_keune_BLACK.png`}
									className={styles.logo_white}
								/>
							</button>
							<button
								onClick={(e) => handleClick(e, 1)}
								className={styles.btnCircle}
							></button>
							<button
								onClick={(e) => handleClick(e, 1)}
								className={styles.btnCircle}
							></button>
						</div>
						<hr className={styles.underlineBtn}></hr>
						<hr className={styles.underlineBtnShort}></hr>
					</div>
					<img
						className={styles.carouselContainer_img}
						src={`${process.env.PUBLIC_URL}/images/slide1-big.jpg`}
						alt='First slide'
					/>
				</Carousel.Item>
				<Carousel.Item>
					<NavBarWhite />
					<CaptionSlideWhite />
					<div className={styles.controlsContainer}>
						<div className={styles.btnSimple_container}>
							<button
								onClick={(e) => handleClick(e, 1)}
								className={styles.btnSimpleWhite}
							>
								&gt;
							</button>
							<button
								onClick={(e) => handleClick(e, 1)}
								className={styles.btnSimpleWhite}
							>
								&lt;
							</button>
						</div>
						<div className={styles.btnLogo_container}>
							<button
								onClick={(e) => handleClick(e, 1)}
								className={styles.btnLogo}
							>
								<Image
									src={`${process.env.PUBLIC_URL}/images/znak_keune_WHITE.png`}
									className={styles.logo_white}
								/>
							</button>
							<button
								onClick={(e) => handleClick(e, 1)}
								className={styles.btnCircleWhite}
							></button>
							<button
								onClick={(e) => handleClick(e, 1)}
								className={styles.btnCircleWhite}
							></button>
						</div>
						<hr className={styles.underlineBtnWhite}></hr>
						<hr className={styles.underlineBtnShortWhite}></hr>
					</div>
					<img
						className={styles.carouselContainer_slide2}
						src={`${process.env.PUBLIC_URL}/images/slide2-big-cropped.jpg`}
						alt='Second slide'
					/>
				</Carousel.Item>
			</Carousel>
		</div>
	);
};

export default Hero01;
