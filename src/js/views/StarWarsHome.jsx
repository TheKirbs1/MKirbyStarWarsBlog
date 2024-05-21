import React, { useContext } from 'react';
import { Context } from "../store/appContext";

import PeopleCard from '../component/PeopleCard.jsx';
import PlanetCard from '../component/PlanetCard.jsx';
import VehicleCard from '../component/VehicleCard.jsx';

const StarWarsHome = () => {
    const {store, actions } = useContext(Context);

    return (
        <div className='container'>
            <div className="row mt-5">
                <div className="col-2 "><h2>Characters</h2></div>
                <div className="col-8"></div>
                <div className="col-2"></div>
            </div>

            <div className="row flex-nowrap justify-content-evenly overflow-auto">
                {store.people.map(person => {

                        return (

                            <div className="col-md-4 mb-1">
                            <PeopleCard key={person.uid} uid={person.uid} name={person.name} url={person.url} />
                            </div>
                    );
                    })
                }
            </div>
            <div className="row mt-5">
                <div className="col-2"><h2>Planets</h2></div>
                <div className="col-8"></div>
                <div className="col-2"></div>
            </div>

            <div className="row flex-nowrap justify-content-evenly overflow-auto">
                {store.planets.map(planet => {

                    return (
                        <div className="col-md-4 mb-1">
                    <PlanetCard key={planet.uid} uid={planet.uid} name={planet.name} url={planet.url} />
                    </div>
                    );
                    })
                }
            </div>
            <div className="row mt-5">
                <div className="col-2"><h2>Vehicles</h2></div>
                <div className="col-8"></div>
                <div className="col-2"></div>
            </div>

            <div className="row flex-nowrap justify-content-evenly overflow-auto">
                {store.vehicles.map(vehicle => {

                    return (
                        <div className="col-md-4 mb-1">
                    <VehicleCard key={vehicle.uid} uid={vehicle.uid} name={vehicle.name} url={vehicle.url} />
                    </div>
                    );
                    })
                }
            </div>
        </div>

    );
}

export default StarWarsHome