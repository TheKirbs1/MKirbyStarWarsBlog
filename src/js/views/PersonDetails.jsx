import React, { useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const PersonDetails = () => {
	const { store, actions } = useContext(Context);
    const params= useParams();
    console.log(params)

    useEffect (() => {
        actions.getPersonDetails(params.id)
    }, [])

	return (

		
// 		<div className="jumbotron text-white">
// 			<h1 className="display-4">{store.personDetails.properties.name}</h1>
// 			<h1 className="display-4">{store.personDetails.properties.gender}</h1>

// 			<hr className="bg-danger border-2 border-top border-danger" />

// 			<Link to="/">
// 				<span className="btn btn-primary btn-lg" href="#" role="button">
// 					Back home
// 				</span>
// 			</Link>
// 		</div>
// 	);
// };


// export default PersonDetails;

// PersonDetails.propTypes = {
// 	match: PropTypes.object
// };

 <>
			<div className="card mb-3">
			<div className="row g-0">
				<div className="col-md-4">
					<img src="" className="img-fluid rounded-start" alt="..." />
				</div>
				<div className="col-md-8">
					<div className="card-body">
						<h2 className="card-title">{store.personDetails.properties.name}</h2>
						<p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
					</div>
				</div>
				<div className="col-md-4"></div>
			</div>
			</div>
			<div>
			<hr className="bg-danger border-2 border-top border-danger" />
			<ul className="list-group list-group-horizontal">
			<li className="list-group-item">Name <br />{store.personDetails.properties.name}</li>
			<li className="list-group-item">Birth Year <br />{store.personDetails.properties.birth_year}</li>
			<li className="list-group-item">Gender <br />{store.personDetails.properties.gender}</li>
			<li className="list-group-item">Height <br />{store.personDetails.properties.height}</li>
			<li className="list-group-item">Skin Color <br />{store.personDetails.properties.skin_color}</li>
			<li className="list-group-item">Eye Color <br />{store.personDetails.properties.eye_color}</li>
			</ul>
						<Link to="/">
							<span className="btn btn-primary btn-lg" href="#" role="button">
								Back home
							</span>
						</Link>
			</div>
</>
	);
};


export default PersonDetails;

PersonDetails.propTypes = {
	match: PropTypes.object
}; 
