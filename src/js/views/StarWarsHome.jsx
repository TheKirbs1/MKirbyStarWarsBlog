import React, { useContext } from 'react';
import { Context } from "../store/appContext";

import PeopleCard from '../component/PeopleCard.jsx';
import PlanetCard from '../component/PlanetCard.jsx';
import VehicleCard from '../component/VehicleCard.jsx';

const StarWarsHome = () => {
    const {store, actions } = useContext(Context);

    return (
        <div className='container bg-dark'>

            <div className="row mt-5" >
                <div className="col-2"></div>
                <div className="col-8 text-danger"><h2>Characters</h2></div>
                <div className="col-2"></div>
            </div>
            <div className="row">
                <div className="col-2"></div>
                <div className="col-8 d-flex overflow-auto justify-content-evenly m-2">
                {store.people.map(person => {
                return (
                    <PeopleCard key={person.uid} name={person.name} uid={person.uid} url={person.url}/>
                );
                })}
                </div>
                <div className="col-2"></div>
            </div>
            

            <div className="row mt-5" >
                <div className="col-2"></div>
                <div className="col-8 text-success"><h2>Planets</h2></div>
                <div className="col-2"></div>
            </div>
            <div className="row">
                <div className="col-2"></div>
                <div className="col-8 d-flex overflow-auto justify-content-evenly m-2">
                {store.planets.map(planet => {

                    return (
                    <PlanetCard key={planet.uid} uid={planet.uid} name={planet.name} url={planet.url} />
                    );
                    })}
                </div>
                <div className="col-2"></div>
            </div>


            <div className="row mt-5" >
                <div className="col-2"></div>
                <div className="col-8 text-warning"><h2>Vehicles</h2></div>
                <div className="col-2"></div>
            </div>
            <div className="row">
                <div className="col-2"></div>
                <div className="col-8 d-flex overflow-auto justify-content-evenly m-2">
                {store.vehicles.map(vehicle => {

                    return (
                    <VehicleCard key={vehicle.uid} uid={vehicle.uid} name={vehicle.name} url={vehicle.url} />
                    );
                    })}
                </div>
                <div className="col-2"></div>
            </div>
        </div>

    );
}

export default StarWarsHome