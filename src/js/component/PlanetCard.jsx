import React from 'react';

const PlanetCard = ({ name, uid, url })=> {

    return (
        <div className="row">
		    <div className="col-acol-auto m-3">
                <div className="card" style={{width: "18rem"}}>
                    <img src={uid === "1"
                        ? "https://th.bing.com/th/id/OIP.S3rw9knnmYXmKg8H4JQgnAAAAA?w=185&h=184&c=7&r=0&o=5&dpr=1.1&pid=1.7"
                        : `https://starwars-visualguide.com/assets/img/planets/${uid}.jpg`
                     } 
                    className="card-img-top" alt="" />
                    <div className="card-body">
                        <h5 className="card-title"> { name } </h5>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Population</li>
                            <li className="list-group-item">Terrain</li>
                        </ul>
                        <a href="#" className="btn btn-info">Learn More</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PlanetCard;
