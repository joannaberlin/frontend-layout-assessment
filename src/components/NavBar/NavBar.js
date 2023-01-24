import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image';
import styles from './NavBar.module.scss';
import SocialMediaCircle from '../SocialMediaCircle/SocialMediaCircle';

const NavBar = () => {
	return (
		<div className={styles.navbar_container}>
			<Navbar bg='transparent' expand='lg' className={styles.navbar}>
				<Navbar.Brand href='#home'>
					<Image
						src={`${process.env.PUBLIC_URL}/images/logoKeuneWhite.png`}
						className={styles.logo_white}
					/>
				</Navbar.Brand>
				<Navbar.Toggle
					aria-controls='basic-navbar-nav'
					className={styles.navbar_toggle}
				/>
				<Navbar.Collapse id='basic-navbar-nav'>
					<Nav className='me-auto'>
						<Nav.Link href='#home' className={styles.navbar_item}>
							Nowosci
						</Nav.Link>
						<NavDropdown
							title={<span className='text-white my-auto'>Produkty</span>}
							id='basic-nav-dropdown'
							className={styles.navbar_item}
						>
							<NavDropdown.Item href='#action/3.1'>Stylizacja</NavDropdown.Item>
							<NavDropdown.Item href='#action/3.2'>
								Koloryzacja
							</NavDropdown.Item>
							<NavDropdown.Item href='#action/3.3'>
								Pielegnacja
							</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href='#action/3.4'>Sklep</NavDropdown.Item>
						</NavDropdown>
						<Nav.Link href='#link' className={styles.navbar_item}>
							Trendy
						</Nav.Link>
						<Nav.Link href='#link' className={styles.navbar_item}>
							O firmie
						</Nav.Link>
						<Nav.Link href='#link' className={styles.navbar_item}>
							Salony
						</Nav.Link>
						<Nav.Link href='#link' className={styles.navbar_item}>
							Dystrybutorzy
						</Nav.Link>
						<Nav.Link href='#link' className={styles.navbar_item}>
							Kontakt
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
				<SocialMediaCircle />
			</Navbar>
		</div>
	);
};

export default NavBar;
