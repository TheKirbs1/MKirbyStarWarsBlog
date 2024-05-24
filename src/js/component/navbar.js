import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
    const { store } = useContext(Context);

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link to="/">
                    <img src="https://pngimg.com/uploads/star_wars_logo/star_wars_logo_PNG39.png" className="img-fluid" style={{ height: 100 }} alt="Star Wars Logo" />
                </Link>
                <div className="ml-auto">
                    <ul className="navbar-nav">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle bg-primary text-white" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Favorites
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                                {store.favorites.map((favitem, index) => (
                                    <li key={index}>
                                        <a className="dropdown-item" href="#">{favitem}</a>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};
