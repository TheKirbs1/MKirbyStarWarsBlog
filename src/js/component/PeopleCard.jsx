import React from 'react';

const PeopleCard = ({ name })=> {

    return (
        <div className="row">
		    <div className="col-auto mx-auto">
                <div className="card" style={{width: "18rem"}}>
                    <img src="https://makeplaceholder.com?size=400x200&bg=7a00ff&as=png&tcolor=ffffff" className="card-img-top" alt="" />
                    <div className="card-body">
                        <h5 className="card-title"> {name} </h5>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PeopleCard;