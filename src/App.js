import logo from "./logo.svg";
import "./App.css";
import {
	BrowserRouter as Router,
	Routes as Switch,
	Route,
} from "react-router-dom";
import NavBar from "./common/NavBar";
import Home from "./views/Home";
import AboutUs from "./views/AboutUs";
import Prices from "./views/Prices";

function App() {
	return (
		<div className='App'>
			<Router>
				<NavBar />

				<Switch>
					<Route path='/' element={<Home />} />
					<Route path='/aboutus' element={<AboutUs />} />
					<Route path='/prices' element={<Prices />} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
