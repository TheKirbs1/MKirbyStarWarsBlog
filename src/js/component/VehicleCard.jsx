import React from 'react';

const VehicleCard = ({ name, uid, url })=> {

    return (
        <div className="row">
		    <div className="col-auto m-3">
                <div className="card" style={{width: "18rem"}}>
                    <img src={`https://starwars-visualguide.com/assets/img/vehicles/${uid}.jpg`} className="card-img-top" alt="" />
                    <div className="card-body">
                        <h5 className="card-title"> { name } </h5>
                        <a href="#" className="btn btn-primary">Learn More</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VehicleCard;