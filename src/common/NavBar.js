import "./NavBar.css";
import logo from "./logo.png";

function NavBar() {
	return (
		<>
			<div className='nav '>
				<div className='nav-container'>
					<div className='nav-left'>
						<img src={logo} alt='logo' />
					</div>
					<div className='nav-right'>
						<a href='www.google.ro'>Home</a>

						<a href='www.google.ro'>Despre noi</a>
						<a href='www.google.ro'>Preturi</a>
					</div>
				</div>
			</div>
		</>
	);
}
export default NavBar;
