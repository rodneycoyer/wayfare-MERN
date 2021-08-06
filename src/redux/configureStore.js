import { createStore, combineReducers } from "redux";
import { Locations } from "./locations";
import { Experiences } from "./experiences";
import { Hosts } from "./hosts";
import { Reviews } from "./reviews"

export const ConfigureStore = () => {

    const store = createStore(
        combineReducers({
            locations: Locations,
            experiences: Experiences,
            hosts: Hosts,
            reviews: Reviews,
        })
    );

    return store;
};