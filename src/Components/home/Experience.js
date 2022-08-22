import "./Experience.css";
import handLogo from "./hand-icon.png";

function Experience() {
	return (
		<div className='exp-container'>
			<div className='center-container'>
				<div className='h1-container'>
					<h1>Experienta de peste 5 ani cu toate felurile de materiale!</h1>
				</div>
				<div className='card-container'>
					<div className='card1'>
						<img src={handLogo} alt='logo' />
						<h2>Fast and efficient</h2>
						<h3>
							Housekeeping is responsible for minor security in hotel Ecosystem
							for Food and Cleaner through.
						</h3>
					</div>
					<div className='card2'>
						<img src={handLogo} alt='logo' />
						<h2>Fast and efficient</h2>
						<h3>
							Housekeeping is responsible for minor security in hotel Ecosystem
							for Food and Cleaner through.
						</h3>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Experience;
