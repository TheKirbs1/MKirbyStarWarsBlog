import React, { useContext, useEffect } from 'react';
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { useParams } from 'react-router';

const PersonDetails = ( uid ) => {
    const { store, actions } = useContext(Context);
    const params = useParams();
    const { id } = useParams();
    useEffect (() => {
        actions.getPersonDetails(params.id);
    }, [])

    const description = store.personDetails.description;
    const personalDetails = store.personDetails.properties;

    return (
        <div>
            <div className="card my-5 border-0 bg-dark text-white">
                <div className="row g-0">
                    <div className="d-flex col-md-1 "></div>
                    <div className="d-flex col-md-4 ">
                        <img src ={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}  className="card-img-top" alt="" />
                    </div>
                    <div className="col-md-5">
                        <div className="card-body container-fluid mx-5 px-5">
                            <h1 className="card-title h-100 d-flex align-items-center justify-content-center">{personalDetails.name}</h1>
                            <p className="card-text h-100 mx-5 px-5 py-2 d-flex align-items-center justify-content-center">
                                {description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <hr className="bg-danger border-2 border-top border-danger" />
                <div className="container-fluid d-flex align-items-center justify-content-center">
                    <ul className="list-group list-group-horizontal bg-dark"> 
                        <li className="list-group-item bg-dark text-info border-1 border-light mx-3 py-3 text-center">Gender: <br></br>{personalDetails.gender}</li>
                        <li className="list-group-item bg-dark text-info border-1 border-light mx-3 py-3 text-center">Skin Color: <br></br>{personalDetails.skin_color}</li>
                        <li className="list-group-item bg-dark text-warning border-1 border-light mx-3 py-3 text-center">Hair Color: <br></br>{personalDetails.hair_color}</li>
                        <li className="list-group-item bg-dark text-info border-1 border-light mx-3 py-3 text-center">Eye Color: <br></br>{personalDetails.eye_color}</li>
                        <li className="list-group-item bg-dark text-info border-1 border-light mx-3 py-3 text-center">Birthdate: <br></br>{personalDetails.birth_year}</li>
                        <li className="list-group-item bg-dark text-info border-1 border-light mx-3 py-3 text-center">Weight: <br></br>{personalDetails.weight}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

PersonDetails.propTypes = {
	match: PropTypes.object
}; 

export default PersonDetails;