import React, { useContext } from 'react';
import { Context } from "../store/appContext";

import PeopleCard from '../component/PeopleCard.jsx';
import PlanetCard from '../component/PlanetCard.jsx';
import VehicleCard from '../component/VehicleCard.jsx';

const StarWarsHome = () => {
    const {store, actions } = useContext(Context);

    return (
        <div>
            <div>
                {store.people.map(person => {

                        return (
                        <PeopleCard key={person.uid} name={person.name} />
                    );
                    })
                }
            </div>
            <div>
                {store.planets.map(planet => {

                    return (
                    <PlanetCard key={planet.uid} name={planet.name} />
                    );
                    })
                }
            </div>
            <div>
                {store.vehicles.map(vehicle => {

                    return (
                    <VehicleCard key={vehicle.uid} name={vehicle.name} />
                    );
                    })
                }
            </div>
        </div>

    );
}

export default StarWarsHome