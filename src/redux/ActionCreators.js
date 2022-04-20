import * as ActionTypes from "./ActionTypes";



export const addReview = (locationId, experienceId, rating, author, text) => ({
    type: ActionTypes.ADD_REVIEW,
    payload: {
        locationId: locationId,
        experienceId: experienceId,
        rating: rating,
        author: author,
        text: text,
    }
});