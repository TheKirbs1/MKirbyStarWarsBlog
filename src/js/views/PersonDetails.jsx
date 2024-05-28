import React, { useContext, useEffect } from 'react';
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

const PersonDetails = ({ name, uid, url }) => {
    const { store, actions } = useContext(Context);

    useEffect (() => {
        actions.getPersonDetails(uid)
    }, [uid, actions])

    const personDetails = store.personDetails[uid] || {};
    
    return (
        <div>
            <div className="card mb-3 border-0 bg-dark text-white">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src ={`https://starwars-visualguide.com/assets/img/characters/${uid}.jpg`} className="card-img-top" alt="" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body container-fluid mx-5 px-5">
                            <h1 className="card-title h-100 d-flex align-items-center justify-content-center"> {name} </h1>
                            <p className="card-text h-100 mx-5 px-5 py-2 d-flex align-items-center justify-content-center">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                Nunc sed blandit libero volutpat sed cras ornare. Sit amet consectetur adipiscing elit duis tristique sollicitudin nibh. 
                                Morbi non arcu risus quis varius quam. Massa placerat duis ultricies lacus sed turpis tincidunt id aliquet. 
                                Morbi enim nunc faucibus a pellentesque sit amet porttitor eget. Viverra mauris in aliquam sem fringilla ut. 
                                Neque ornare aenean euismod elementum. Sapien pellentesque habitant morbi tristique. 
                                Ut consequat semper viverra nam libero justo laoreet sit. Arcu dui vivamus arcu felis bibendum ut. 
                                Suspendisse sed nisi lacus sed viverra. Imperdiet dui accumsan sit amet nulla facilisi. 
                                Eget mauris pharetra et ultrices neque ornare aenean euismod elementum.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <hr className="bg-danger border-2 border-top border-danger" />
                <div className="container-fluid d-flex align-items-center justify-content-center">
                    <ul className="list-group list-group-horizontal bg-dark"> 
                        <li className="list-group-item">Gender: { personDetails.properties && personDetails.properties.gender }</li>
                        <li className="list-group-item">Hair Color: { personDetails.properties && personDetails.properties.hair_color }</li>
                        <li className="list-group-item">Eye Color: { personDetails.properties && personDetails.properties.eye_color }</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

PersonDetails.propTypes = {
    name: PropTypes.string.isRequired,
    uid: PropTypes.string.isRequired,
    url: PropTypes.string
};

export default PersonDetails;
