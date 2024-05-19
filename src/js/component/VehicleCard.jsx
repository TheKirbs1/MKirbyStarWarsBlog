import React from 'react';

const VehicleCard = ({ name })=> {

    return (
        <div className="container overflow-scroll">
       
                <div className="card" style={{width: "18rem"}}>
                    <img src="https://makeplaceholder.com?size=400x200&bg=4a33dk&as=png&tcolor=ccaacc" className="card-img-top" alt="" />
                    <div className="card-body">
                        <h5 className="card-title"> { name } </h5>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
    );
}

export default VehicleCard;