import "./NavBar.css";
import logo from "../views/logo.PNG";

function NavBar(args) {
	return (
		<>
			<div className='nav'>
				<div className='nav-container'>
					<div className='nav-left'>
						<img src={logo} alt='logo' />
					</div>
					<div className='nav-right'>
						<a href=''>Home</a>

						<a href=''>Despre noi</a>
						<a href=''>Preturi</a>
					</div>
				</div>
			</div>
		</>
	);
}
export default NavBar;
