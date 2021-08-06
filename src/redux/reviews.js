import { comment } from "postcss-selector-parser";
import { REVIEWS } from "../shared/reviews";
import * as ActionTypes from "./ActionTypes";

export const Reviews = (state = REVIEWS, action) => {
    switch (action.type) {
        case ActionTypes.ADD_REVIEW:
            const review = action.payload;
            review.id = state.length;
            comment.date = new Date().toISOString();
            return state.concat(review);
        default:
            return state;
    }
};