import React from 'react';
import { Link } from "react-router-dom"
const PeopleCard = ({ name, uid, url })=> {

    return (
        <div className="row">
		    <div className="col-auto m-3">
                <div className="card" style={{width: "12rem"}}>
                    <img src={`https://starwars-visualguide.com/assets/img/characters/${uid}.jpg`} className="card-img-top" alt="" />
                    <div className="card-body">
                        <h5 className="card-title"> {name} </h5>
                        <Link to ={`/people/${uid}`}>
                            <button className="btn btn-primary">
                                Learn More
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PeopleCard;