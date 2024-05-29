import React, { useContext, useEffect, useState } from 'react';
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { useParams } from 'react-router';

const PlanetDetails = ( uid ) => {
    const { store, actions } = useContext(Context);
    const [ desc, setDesc ] = useState(null)
    const [ planet, setPlanet] = useState(null)
    const { id } = useParams();
    useEffect (() => {
         actions.getPlanetDetails(id)
            .then((res) => {
                setPlanet(res.result)
                console.log("Response from useEffect", res)
            })
            .catch((error) => console.log("Error", error))
        // const description = store.planetDetails.description;
        // setDesc(description)
        // console.log(description, "Description log PlanetDetails")
        // const updatedPlanetDetails = store.planetDetails.properties;
    }, [])
    console.log("Planet data", planet)
    return (
        <div>
            <div className="card my-5 border-0 bg-dark text-white">
                <div className="row g-0">
                    <div className="d-flex col-md-1 "></div>
                    <div className="d-flex col-md-4 ">
                        <img src ={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} className="card-img-top" alt="" />
                    </div>
                    <div className="col-md-5">
                        <div className="card-body container-fluid mx-5 px-5">
                            <h1 className="card-title h-100 d-flex align-items-center justify-content-center">{planet ? `${planet.properties.name}` : 'Waiting for data'}</h1>
                            <p className="card-text h-100 mx-5 px-5 py-2 d-flex align-items-center justify-content-center">
                                {planet ? `${planet.description}` : 'Waiting for data'}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <hr className="bg-danger border-2 border-top border-danger" />
                <div className="container-fluid d-flex align-items-center justify-content-center">
                    <ul className="list-group list-group-horizontal bg-dark"> 
                        <li className="list-group-item bg-dark text-info border-1 border-light mx-3 py-3 text-center">Diameter: <br></br>{planet ? `${planet.properties.diameter}` : 'Waiting for data'}</li>
                        <li className="list-group-item bg-dark text-info border-1 border-light mx-3 py-3 text-center">Population: <br></br>{  planet ? `${planet.properties.population }` : 'Waiting for data'}</li>
                        <li className="list-group-item bg-dark text-warning border-1 border-light mx-3 py-3 text-center">Terrain: <br></br>{planet ? `${planet.properties.terrain}` : 'Waiting for data'}</li>
                        <li className="list-group-item bg-dark text-info border-1 border-light mx-3 py-3 text-center">Orbital Period: <br></br>{ planet ? `${planet.properties.orbital_period }` : 'Waiting for data'}</li>
                        <li className="list-group-item bg-dark text-info border-1 border-light mx-3 py-3 text-center">Gravity: <br></br>{ planet ? `${planet.properties.gravity}` : 'Waiting for data'}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

PlanetDetails.propTypes = {
	match: PropTypes.object
}; 

export default PlanetDetails;


{/* <ul className="list-group list-group-horizontal bg-dark"> 
<li className="list-group-item bg-dark text-info border-1 border-light mx-3 py-3 text-center">Diameter: <br></br>{updatedPlanetDetails.diameter}</li>
<li className="list-group-item bg-dark text-info border-1 border-light mx-3 py-3 text-center">Gravity: <br></br>{updatedPlanetDetails.gravity}</li>
<li className="list-group-item bg-dark text-warning border-1 border-light mx-3 py-3 text-center">Population: <br></br>{updatedPlanetDetails.population}</li>
<li className="list-group-item bg-dark text-info border-1 border-light mx-3 py-3 text-center">Terrain: <br></br>{updatedPlanetDetails.terrain}</li>
<li className="list-group-item bg-dark text-info border-1 border-light mx-3 py-3 text-center">Orbital Period: <br></br>{updatedPlanetDetails.orbital_period}</li>
</ul> */}