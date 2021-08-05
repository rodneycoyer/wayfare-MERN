import { LOCATIONS } from "../shared/locations";
import { HOSTS } from "../shared/hosts";
import { REVIEWS } from "../shared/reviews";
import { EXPERIENCES } from "../shared/experiences";

export const initialState = {
    locations: LOCATIONS,
    hosts: HOSTS,
    reviews: REVIEWS,
    experiences: EXPERIENCES,
};

export const Reducer = (state = initialState, action) => {
    return state;
};