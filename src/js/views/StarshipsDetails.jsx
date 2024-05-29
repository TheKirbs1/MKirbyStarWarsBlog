import React, { useContext, useEffect } from 'react';
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { useParams } from 'react-router';

const StarshipsDetails = ( uid ) => {
    const { store, actions } = useContext(Context);
    const params = useParams();
    const { id } = useParams();

    useEffect (() => {
        actions.getStarshipsDetails(params.id);
    }, [])

    const description = store.starshipsDetails.description;
    const updatedStarshipsDetails = store.starshipsDetails.properties;

    return (
        <div>
            <div className="card my-5 border-0 bg-dark text-white">
                <div className="row g-0">
                    <div className="d-flex col-md-1 "></div>
                    <div className="d-flex col-md-4 ">
                        <img src ={`https://starwars-visualguide.com/assets/img/starships/${id}.jpg`} className="card-img-top" alt="" />
                    </div>
                    <div className="col-md-5">
                        <div className="card-body container-fluid mx-5 px-5">
                            <h1 className="card-title h-100 d-flex align-items-center justify-content-center">{updatedStarshipsDetails.name}</h1>
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
                        <li className="list-group-item bg-dark text-info border-1 border-light mx-3 py-3 text-center">MGLT: <br></br>{updatedStarshipsDetails.MGLT}</li>
                        <li className="list-group-item bg-dark text-info border-1 border-light mx-3 py-3 text-center">Cargo capacity: <br></br>{updatedStarshipsDetails.cargo_capacity}</li>
                        <li className="list-group-item bg-dark text-warning border-1 border-light mx-3 py-3 text-center">Cost in Credits: <br></br>{updatedStarshipsDetails.cost_in_credits}</li>
                        <li className="list-group-item bg-dark text-info border-1 border-light mx-3 py-3 text-center">Hyperdrive Rating: <br></br>{updatedStarshipsDetails.hyperdrive_rating}</li>
                        <li className="list-group-item bg-dark text-info border-1 border-light mx-3 py-3 text-center">Manufacturer: <br></br>{updatedStarshipsDetails.manufacturer}</li>
                        <li className="list-group-item bg-dark text-info border-1 border-light mx-3 py-3 text-center">Passengers: <br></br>{updatedStarshipsDetails.passengers}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

StarshipsDetails.propTypes = {
	match: PropTypes.object
}; 

export default StarshipsDetails;

