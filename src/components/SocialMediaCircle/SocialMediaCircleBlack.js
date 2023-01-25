import styles from './SocialMediaWhite.module.scss';
import Image from 'react-bootstrap/Image';
import Nav from 'react-bootstrap/Nav';

const SocialMediaCircleBlack = () => {
	return (
		<div className={styles.icons}>
			<Nav.Link href='#link'>
				<Image
					src={`${process.env.PUBLIC_URL}/images/fb_BLACK.png`}
					className={styles.icons_fb}
				/>
			</Nav.Link>
			<div className={styles.icons_horizontal}>
				<Nav.Link>
					<Image
						src={`${process.env.PUBLIC_URL}/images/twitter_BLACK.png`}
						className={styles.icons_twitter}
					/>
				</Nav.Link>
				<Nav.Link>
					<Image
						src={`${process.env.PUBLIC_URL}/images/yt_BLACK.png`}
						className={styles.icons_yt}
					/>
				</Nav.Link>
			</div>
			<Nav.Link>
				<Image
					src={`${process.env.PUBLIC_URL}/images/insta_BLACK.png`}
					className={styles.icons_insta}
				/>
			</Nav.Link>
		</div>
	);
};

export default SocialMediaCircleBlack;
