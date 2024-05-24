import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const {store} = useContext(Context)
	console.log(store.favorites);
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<div className="container-fluid">
				<Link to="/">
					<img src= "https://pngimg.com/uploads/star_wars_logo/star_wars_logo_PNG39.png" className="img-fluid" style={{height: 100}}/>
				</Link>

				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav">
						<li className="nav-item dropdown">
						<a className="nav-link dropdown-toggle bg-primary text-white" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
							Favorites
						</a>
						<ul className="dropdown-menu" aria-labelledby="navbarDropdown">
							{store.favorites.map} 						
						</ul>
						</li>
					</ul>
				</div>
			</div>
		</nav>

	);
};


{/* <nav className="navbar navbar-light bg-dark" style={{height: 100}}>
				<Link to="/">
					<img src= "https://pngimg.com/uploads/star_wars_logo/star_wars_logo_PNG39.png" className="img-fluid" style={{height: 100}}/>
				</Link>
				<button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
				
				</button>
			</nav> */}